#!/usr/bin/env python3

"""

Script to create retirement files for a project.

Input:
- https://whimsy.apache.org/public/committee-retired.json
- https://lists.apache.org/api/preferences.lua
- xdocs/projects/_template.xml
- _template.jira

Output:
- xdocs/flagged/<pid> (created)
- xdocs/projects/<pid>.xml (created)
- xdocs/stylesheets/project.xml (updated)
- <pid>.jira.tmp (created) - this is for pasting into an Attic JIRA issue

N.B. The generated pid.xml file may need tweaking

"""

import sys
import os.path
from os.path import dirname, abspath, join
from inspect import getsourcefile
from string import Template
import os
import re
from urlutils import loadyaml, loadjson

if len(sys.argv) == 1:
    print("Please provide a list of project ids")
    sys.exit(1)

JIRA='https://issues.apache.org/jira/rest/api/2/project'

MYHOME = dirname(abspath(getsourcefile(lambda:0)))
projects =    join((MYHOME), 'xdocs', 'projects')
stylesheets = join((MYHOME), 'xdocs', 'stylesheets')
flagged = join((MYHOME), 'xdocs', 'flagged')

#  get details of the retired projects
retirees = loadyaml('https://whimsy.apache.org/public/committee-retired.json')['retired']
lists = {}
for host,names in loadyaml('https://lists.apache.org/api/preferences.lua')['lists'].items():
    proj = host.replace('.apache.org','')
    if proj in retirees: 
        lists[proj] = list(names.keys())

def list_jira(pid):
    jira = loadjson(JIRA)
    jiras = []
    for project in jira:
        key = project['key']
        catname = ''
        if 'projectCategory' in project:
            catname = project['projectCategory']['name']
        if pid.upper() == key:
            jiras.append(key)
        elif catname.lower() == pid:
            jiras.append(key)
    return jiras

# updates xdocs/stylesheets/project.xml
#    <li><a href="/projects/abdera.html">Abdera</a></li>
def update_stylesheet(pid):
    xmlfile = join(stylesheets,'project.xml')
    xmlfilet = join(stylesheets,'project.xml.t')
    print("Updating %s" % xmlfile)
    found = False
    with open(xmlfile,'r') as r, open(xmlfilet,'w') as w:
        for l in r:
            if not found:
                m = re.search(r'^(\s+<li><a href="/projects/)([^.]+)(.html">)[^<]+(</a></li>)', l)
                if m:
                    stem = m.group(2)                
                    if stem == pid:
                        print("Already present in projects.xml")
                        print(l)
                        w.close()
                        os.remove(xmlfilet)
                        return
                    if stem > pid: # Found insertion point
                        found = True
                        name = retirees[pid]['display_name']
                        w.write("%s%s%s%s%s\n" % (m.group(1), pid, m.group(3), name, m.group(4)))
            w.write(l) # write the original line
    if found:
        print("Successfully added %s to %s" % (pid, xmlfile))
        os.system("diff %s %s" % (xmlfile, xmlfilet))
        os.rename(xmlfilet, xmlfile)
    else:
        print("Could not find where to add %s" % pid)

# create JIRA template
def create_jira_template(pid):
    outfile = join(MYHOME, "%s.jira.tmp" % pid)
    print("Creating %s" % outfile)
    with open(join(MYHOME, '_template.jira'), 'r') as t:
        template = Template(t.read())
    out = template.substitute(tlpid = pid)
    with open(outfile, 'w') as o:
        o.write(out)
    
# create the project.xml file from the template
def create_project(pid):
    outfile = join(projects, "%s.xml" % pid)
    print("Creating %s" % outfile)
    with open(join(projects, '_template.xml'), 'r') as t:
        template = Template(t.read())
    meta = retirees[pid]
    mnames = lists[pid]
    mnames.remove('dev')
    jiras = list_jira(pid)
    out = template.substitute(tlpid = pid, 
        FullName = meta['display_name'],
        Month_Year = meta['retired'],
        mail_names = ",".join(sorted(mnames)),
        jira_names = ",".join(sorted(jiras)),
        description = meta.get('description', 'TBA'))
    with open(outfile, 'w') as o:
        o.write(out)
    os.system("svn add %s" % outfile)
    print("Check XML file for customisations such as JIRA and mailing lists")

for arg in sys.argv[1:]:
    print("Processing "+arg)
    if not arg in retirees:
        print("%s does not appear to be a retired project" % arg)
        continue
    flagdir = join(flagged, arg)
    if os.path.exists(flagdir):
        print("flagged/%s already exists" % arg)
        continue
    create_jira_template(arg)
    try:
        os.mkdir(flagdir)
        os.system("svn add %s" % flagdir)
        create_project(arg)
        update_stylesheet(arg)
    except Exception as e:
        print(e)
