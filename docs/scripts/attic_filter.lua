function output_filter(r)
    -- We only filter text/html types
    if not r.content_type:match(".*text/html.*") then return end

    -- add header:
    local host = r.hostname:match("^([^.]+)") -- get TLP part of hostname
    local sty1 = 'font-size:x-large;padding:15px;color:white;background:red;' ;
    local sty2 = 'color:white' ;
    coroutine.yield ( ([[
      <div style='%s'>
        Project <i>%s</i> is retired. See %s's
        <a style='%s' href="https://attic.apache.org/projects/%s.html">
        attic page</a>.
      </div>]]):format(sty1, host, host, sty2, host) )
    -- spit out the actual page
    while bucket do
        coroutine.yield(bucket)
    end

end
