--[[
  This is an output filter for HTML files
  It adds a banner for projects that are flagged as in the attic.
  
  It is invoked by the tlp vhosts if the following directory exists:
  /var/www/attic.apache.org/flagged/%{HTTP_HOST}

  See the tlp vhost definitions in puppet-infra data/nodes/(themis|tlp-eu-west).apache.org.yaml
  
  Note: This filter was introduced in April 2018, so not all projects in the Attic use this filter. 
  Previously the project websites themselves were changed.
]]--

function output_filter(r)
    -- We only filter text/html types
    if not r.content_type:match(".*text/html.*") then return end

    -- add header:
    -- get TLP part of hostname
    local host = r.hostname:match("^([^.]+)")
    -- Prettify (TODO: look up real name)
    local name = host:gsub("^%l", string.upper)
    local sty1 = 'font-size:x-large;padding:15px;color:white;background:red;' ;
    local sty2 = 'color:white;text-decoration:underline' ;
    coroutine.yield ( ([[
      <div style='%s'>
        Project <i>%s</i> has retired. For details please refer to its
        <a style='%s' href="https://attic.apache.org/projects/%s.html">
        Attic page</a>.
      </div>]]):format(sty1, name, sty2, host) )
    -- spit out the actual page
    while bucket do
        coroutine.yield(bucket)
    end

end
