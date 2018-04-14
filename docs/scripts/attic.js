function addSidebar()
{
   sidebar=document.getElementById("sidebar");
   sidebar.innerHTML = '\
<div class="column span-8 last">\
  <div class="block">\
    <div class="nav column span-11">\
      <div>\
        <div class="menuheader">The Apache Attic</div>\
        <ul>\
          <li><a href="/">Home</a></li>\
          <li><a href="/process.html">Process</a></li>\
          <li><a href="http://issues.apache.org/jira/browse/ATTIC">Process tracking</a></li> \
          <li><a href="https://whimsy.apache.org/board/minutes/Attic.html">Board Minutes</a></li> \
        </ul>\
        <div class="menuheader">Related Apache Links</div>\
        <ul>\
          <li><a href="http://www.apache.org/">Foundation</a></li> \
          <li><a href="http://www.apache.org/foundation/thanks.html">Sponsors</a></li> \
          <li><a href="http://incubator.apache.org/">Incubator</a></li> \
          <li><a href="http://apachecon.com/">ApacheCon</a></li> \
        </ul>\
      </div>\
    </div>\
    <div id="projList" class="nav column prepend-1 span-12 last"></div>\
  </div>\
</div>'

   projList=document.getElementById("projList");
   projList.innerHTML = '\
               <h6>Projects in the Attic</h6>\
  <ul>\
          <li><a href="/projects/abdera.html">Abdera</a></li>\
          <li><a href="/projects/ace.html">Ace</a></li> \
          <li><a href="/projects/avalon.html">Avalon</a></li> \
          <li><a href="/projects/axkit.html">AxKit</a></li> \
          <li><a href="/projects/axis-sandesha-c.html">Axis Sandesha2/C</a></li> \
          <li><a href="/projects/axis-savan-c.html">Axis Savan/C</a></li> \
          <li><a href="/projects/axis-savan-java.html">Axis Savan/Java</a></li> \
          <li><a href="/projects/beehive.html">Beehive</a></li> \
          <li><a href="/projects/click.html">Click</a></li> \
          <li><a href="/projects/crimson.html">Crimson</a></li> \
          <li><a href="/projects/continuum.html">Continuum</a></li> \
          <li><a href="/projects/deltacloud.html">Deltacloud</a></li> \
          <li><a href="/projects/devicemap.html">DeviceMap</a></li> \
          <li><a href="/projects/directmemory.html">DirectMemory</a></li> \
          <li><a href="/projects/esme.html">ESME</a></li> \
          <li><a href="/projects/etch.html">Etch</a></li> \
          <li><a href="/projects/excalibur.html">Excalibur</a></li> \
          <li><a href="/projects/harmony.html">Harmony</a></li> \
          <li><a href="/projects/hivemind.html">HiveMind</a></li> \
          <li><a href="/projects/ibatis.html">iBATIS</a></li> \
          <li><a href="/projects/jakarta.html">Jakarta</a></li> \
          <li><a href="/projects/jakarta-cactus.html">Jakarta Cactus</a></li> \
          <li><a href="/projects/jakarta-ecs.html">Jakarta ECS</a></li> \
          <li><a href="/projects/jakarta-oro.html">Jakarta ORO</a></li> \
          <li><a href="/projects/jakarta-regexp.html">Jakarta Regexp</a></li> \
          <li><a href="/projects/jakarta-slide.html">Jakarta Slide</a></li> \
          <li><a href="/projects/jakarta-taglibs.html">Jakarta Taglibs</a></li> \
          <li><a href="/projects/lenya.html">Lenya</a></li> \
          <li><a href="/projects/mrunit.html">MRUnit</a></li> \
          <li><a href="/projects/ojb.html">ObJectRelationalBridge (OJB)</a></li> \
          <li><a href="/projects/oltu.html">Oltu</a></li> \
          <li><a href="/projects/onami.html">Onami</a></li> \
          <li><a href="/projects/quetzalcoatl.html">Quetzalcoatl</a></li> \
          <li><a href="/projects/rave.html">Rave</a></li> \
          <li><a href="/projects/shale.html">Shale</a></li> \
          <li><a href="/projects/shindig.html">Shindig</a></li> \
          <li><a href="/projects/stdcxx.html">Standard C++ Library (STDCXX)</a></li> \
          <li><a href="/projects/stratos.html">Stratos</a></li> \
          <li><a href="/projects/tuscany.html">Tuscany</a></li> \
          <li><a href="/projects/whirr.html">Whirr</a></li> \
          <li><a href="/projects/wink.html">Wink</a></li> \
          <li><a href="/projects/wookie.html">Wookie</a></li> \
          <li><a href="/projects/muse.html">WS Muse</a></li> \
          <li><a href="/projects/xang.html">Xang</a></li> \
          <li><a href="/projects/xindice.html">Xindice</a></li> \
          <li><a href="/projects/xmlbeans.html">XMLBeans</a></li> \
          <li><a href="/projects/xml.html">XML</a></li> \
      </ul>'
}
