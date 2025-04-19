The entries in this directory are used to define which websites should have an Attic banner.

The webserver host that serves the project websites (including Attic) checks to see if an
entry name matches the lower-case unqualified host name (e.g. attic for attic.apache.org).

If it finds a match, the page is passed to the attic_filter.lua script
which adds the banner to the HTML before it is returned.

Originally, website pages were manually adjusted to add an Attic banner on retirement,
so not all projects in the Attic have entries.
