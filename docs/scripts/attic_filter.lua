function output_filter(r)
    -- We only filter text/html types
    if not r.content_type:match(".*text/html.*") then return end

    -- add header:
    local host = r.hostname:match("^([^.]+)") -- get TLP part of hostname
    coroutine.yield(([[
        <div style='width: 100%; height: 32px; color: #FFF; background: #C00;'>
            This project has retired! See
            <a href='https://attic.apache.org/%s.html'>attic.apache.org/%s.html</a>.
        </div>
        ]]):format(host, host))

    -- spit out the actual page
    while bucket do
        coroutine.yield(bucket)
    end

end
