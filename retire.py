#!/usr/bin/env python3

"""
Sample script to create retirement files for a project.

Input:
- https://whimsy.apache.org/public/committee-retired.json

Output:
- xdocs/flagged/<pid> (created)
- xdocs/projects/<pid>.xml (created)
- xdocs/stylesheets/project.xml (updated)

N.B. The generated pid.xml file will generally need tweaking to adjust the mailing
list names and the JIRA link

TODO: how to determine mail lists and issue tracker etc

"""

import sys
import os.path
from os.path import dirname, abspath, join
from inspect import getsourcefile
from string import Template
import os
import re
import yaml
from urllib.request import urlopen, Request

if len(sys.argv) == 1:
    print("Please provide a list of project ids")
    sys.exit(1)

MYHOME = dirname(abspath(getsourcefile(lambda:0)))
projects =    join((MYHOME), 'xdocs', 'projects')
stylesheets = join((MYHOME), 'xdocs', 'stylesheets')
flagged = join((MYHOME), 'xdocs', 'flagged')

def loadyaml(url):
    req = Request(url)
    resp = urlopen(req)
    return yaml.safe_load(resp.read())

#  get details of the retired projects
retirees = loadyaml('https://whimsy.apache.org/public/committee-retired.json')['retired']

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


# create the project.xml file from the template
def create_project(pid):
    outfile = join(projects, "%s.xml" % pid)
    print("Creating %s" % outfile)
    with open(join(projects, '_template.xml'), 'r') as t:
        template = Template(t.read())
    meta = retirees[pid]
    out = template.substitute(tlpid = pid, FullName = meta['display_name'], Month_Year = meta['retired'], description = meta['description'])
    with open(outfile, 'w') as o:
        o.write(out)
    os.system("svn add %s" % outfile)
    print("Check XML file for customisations such as JIRA and mailing lists")
    update_stylesheet(pid)

for arg in sys.argv[1:]:
    print("Processing "+arg)
    if not re.search("^[-a-z0-9]+$",arg):
        print("Expecting lower-case, '-' or digits only")
    else:
        if not arg in retirees:
            print("%s does not appear to be a retired project" % arg)
            continue
        flagdir = join(flagged, arg)
        if os.path.exists(flagdir):
            print("flagged/%s already exists" % arg)
            continue        
        try:
            os.mkdir(flagdir)
            os.system("svn add %s" % flagdir)
            create_project(arg)
        except Exception as e:
            print(e)
