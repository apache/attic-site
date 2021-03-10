#!/usr/bin/env python3

"""

Find project resources for retired projects and generate JIRA issue text:
- source control system (SVN or Git)
- dist.apache.org releases and dev
- mailing lists (Whimsy)
- JIRA https://issues.apache.org/jira/rest/api/2/project.json - detect if present
- LDAP project
- https://cwiki.apache.org/confluence/display/VXQUERY (e.g.)

"""

import re
import sys
import json
import subprocess
import errno
import time

# from contextlib import redirect_stdout
from os.path import getmtime, basename, join
from os import environ

from urllib.request import urlopen, Request
from urllib.error import HTTPError

DEV="https://dist.apache.org/repos/dist/dev/"
REL="https://dist.apache.org/repos/dist/release/"
JIRA='https://issues.apache.org/jira/rest/api/2/project'
CWIKI='https://cwiki.apache.org/confluence/display/'
EMAIL='https://whimsy.apache.org/public/committee-retired.json'
GITBOX='https://gitbox.apache.org/repositories.json' # ['projects']

CACHE=environ.get('CACHE')

def isFileStale(filename):
    try:
        t = getmtime(filename)
    except OSError as e:
        if not e.errno == errno.ENOENT:
            raise e
        return True
    diff = time.time() - t
    return diff > 600 # 5 min in seconds

def urlcache(url):
    if CACHE:
        # basename seems to work OK with URLs
        cache = join(CACHE,basename(url)+".tmp")
        if isFileStale(cache):
#             print("Caching %s" % url, file=sys.stderr)
            req = Request(url)
            resp = urlopen(req)
            with open(cache,'wb') as w:
                w.write(resp.read())
        else:
#             print("Using cache for %s" % url, file=sys.stderr)
            pass
        with open(cache,'r') as r:
            return r.read()
    else:
#         print("Fetching %s" % url, file=sys.stderr)
        req = Request(url)
        resp = urlopen(req)
        return resp.read()

def loadjson(url):
#     req = Request(url)
#     resp = urlopen(req)
    return json.loads(urlcache(url))

# =====================================

retired = loadjson(EMAIL)['retired']
gitbox = loadjson(GITBOX)['projects']

def check_wiki(pid):
    url = CWIKI + pid.upper()
    req = Request(url)
    try:
        urlopen(req)
        print("Make CWIKI readonly: %s" % url)
    except HTTPError:
        pass

def check_mail(pid):
    try:
        mlists = retired[pid]['mlists']
        if len(mlists) > 0:
            print("Mailing lists:")
            for mlist in mlists:
                print("- %s@%s.apache.org" % (mlist,pid))
            print()
    except KeyError:
        pass

def svnfiles(path):
    res = subprocess.run(["svn", "ls", path], capture_output=True)
    if res.returncode == 0:
        stdout = res.stdout
        if len(stdout) == 0:
            return 0
        if stdout == b'.htaccess\n': # just the htaccess file is OK
            return 0
        return 1
    else:
        stderr = res.stderr
        if b"W160013" in stderr: # no such item
            return -1
        print(stderr)
        return -1

def check_dist(pid):
    dev = svnfiles(DEV + pid)
    rel = svnfiles(REL + pid)
    if dev > 0 or rel > 0:
        print("Remove the distribution SVN directories:")
        if dev > 0:
            print('- ' + DEV + pid)
        if rel > 0:
            print('- ' + REL + pid)
#             print("Set up redirection to https://attic.apache.org/projects/%s.html" % pid)
        print()

# Whimsy json may be stale, so use ldapsearch for now
def check_ldap(pid):
    BASE='ou=project,ou=groups,dc=apache,dc=org'
    res = subprocess.run(["ldapsearch", "-x", "-LLL", "-b", BASE, "cn=%s" % pid, "dn"], capture_output=True)
    if res.returncode == 0:
        if res.stdout != b'':
            print("Remove the LDAP project group: %s" % res.stdout.rstrip().decode())
    else:
        print(res.stderr)
    
def check_jira(pid):
    jira = json.loads(urlcache(JIRA))
    for project in jira:
        key = project['key']
        catname = ''
        if 'projectCategory' in project:
            catname = project['projectCategory']['name']
        if pid.upper() == key:
            if '(Retired)' in project['name'] or catname == 'Retired':
                pass
            else:
                print("Make the JIRA project %s read-only and flag as retired" % key)
        elif catname.lower() == pid:
            print("Make the JIRA project %s read-only and flag as retired" % key)
            
# check for SVN and Git            
def check_scs(pid):
    svn = "https://svn.apache.org/repos/asf/%s" % pid
    if svnfiles(svn) > 0:
        print("Make SVN readonly: %s" % svn) # TODO what if this is the site SVN?
#         print("Update config file so commits go to attic ???")
    if pid in gitbox:
        print("Make the following git repos read-only:")
        for repo in gitbox[pid]['repositories']:
            print("- %s" % repo)
            
if len(sys.argv) == 1:
    print("Please provide a list of project ids")
    sys.exit(1)

for arg in sys.argv[1:]:
    if not arg in retired:
        print("%s is not listed as a retired TLP" % arg)
        continue
#     with open('jira_%s.tmp' % arg, 'w') as f:
#         with redirect_stdout(f):
    print("%s project has retired." % retired[arg]['display_name'])
    print("The following resources were detected for archive/removal please:\n")
    check_dist(arg)
    check_mail(arg)
    check_jira(arg)
    check_scs(arg)
    check_wiki(arg)
    check_ldap(arg)
    print("Turn off any automated builds")
