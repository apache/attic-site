--[[
  This is an output filter for HTML files
  It adds a banner for projects that are flagged as in the attic.
  
  It is invoked by the tlp vhosts if the following directory exists:
  /var/www/attic.apache.org/flagged/%{HTTP_HOST}

  See the tlp vhost definitions in https://github.com/apache/infrastructure-p6/blob/production/data/roles/tlpserver.yaml

  The mod_lua API is described here:
  https://httpd.apache.org/docs/current/mod/mod_lua.html#modifying_buckets

  How it works:
    For simplicity, we add the banner to the start of the page.

    This is not really valid HTML, but seems to work in most cases, and avoids having to find a better
    place to insert it. It does not work for some hosts, especially those that have a static menu bar
    with scrolling content. In such cases, the code looks for a specific tag (which should only occur once
    in any of the site pages, otherwise two banners may be added) and adds the banner either before or after it.

    The best location for this is found by trial and error:
    - download a copy of a page
    - move the banner from the start of the page (where it is added by default) and try it in various
    other parts of the page.
    - try the same in some other pages that have a different layout.
    - repeat until a suitable location is found and find a tag or other string that uniquely identifies it
    - add the host-specific processing to the filter along the lines of the existing host exceptions

  Note: This filter was introduced in April 2018, so not all projects in the Attic use this filter. 
  Previously the project websites themselves were changed.
]]--

function output_filter(r)
    -- We only filter text/html types
    if not r.content_type:match("text/html") then return end

    -- get TLP part of hostname
    local host = r.hostname:match("^([^.]+)")

    -- create the customised banner
    local divstyle = 'font-size:x-large;padding:15px;color:white;background:red;z-index:99;' ;
    local astyle = 'color:white;text-decoration:underline' ;
    local div = ([[
      <div style='%s'>
        This project has retired. For details please refer to its
        <a style='%s' href="https://attic.apache.org/projects/%s.html">
        Attic page</a>.
      </div>]]):format(divstyle, astyle, host)

    -- add header:
    -- special processing needed for some hosts
    if host == 'predictionio' or host == 'eagle' or host == 'metamodel' or host == 'mxnet'
    then
        coroutine.yield('')
    else
        coroutine.yield(div)
    end

    -- spit out the actual page
    while bucket ~= nil do
        -- special processing needed for hosts as above
        if host == 'predictionio'
        then    
            local output = bucket:gsub('<header>', '<header>'..div, 1)
            coroutine.yield(output)
        elseif host == 'mxnet'
        then    
            local output = bucket:gsub('</header>', div..'</header>', 1)
            coroutine.yield(output)
        elseif host == 'eagle'
        then
            local output = bucket:gsub('</nav>', '</nav>'..div, 1)
            coroutine.yield(output)
        elseif host == 'metamodel'
        then
            local output = bucket:gsub('</nav>', div..'</nav>', 1)
            coroutine.yield(output)
        else
            coroutine.yield(bucket)
        end
    end

    -- no need to add anything at the end of the content

end
