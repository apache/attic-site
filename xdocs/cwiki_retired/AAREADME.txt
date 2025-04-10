This directory contains marker files to indicate which Wikis relate to retired projects.

The contents are checked out to a directory on the webserver that hosts project websites:
https://github.com/apache/infrastructure-p6/blob/production/modules/cwiki_asf/manifests/init.pp

It is invoked by the cwiki vhosts:
https://github.com/apache/infrastructure-p6/blob/production/data/nodes/cwiki-he-fi.apache.org.yaml
to trigger banner_filter:
https://github.com/apache/infrastructure-p6/blob/production/modules/cwiki_asf/files/banner_filter_wiki.lua

Wiki names are converted to lower case before comparison.
For example SQOOP has retired, so the directory contains the file sqoop.txt

The first line of the file can be used to override the name of the status file where the
wiki name is not the same. For example, eag.txt contains eagle. This means that the EAG Wiki banner
will link to https://attic.apache.org/projects/eagle.html
rather than https://attic.apache.org/projects/eag.html

Note that retired podlings are handled separately. They need to be defined here:
https://github.com/apache/infrastructure-p6/tree/production/modules/cwiki_asf/files/retired_podlings
