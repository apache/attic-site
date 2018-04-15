// BEGIN JSON +1
var jsonObj = JSON.parse(`
[
{
   "name":        "Abdera",
   "website":     "http://abdera.apache.org",
   "retired":     "03/2017",
   "source code": "http://svn.apache.org/repos/asf/abdera/",
   "issues":      "https://issues.apache.org/jira/projects/ABDERA",
   "wiki":        "https://cwiki.apache.org/confluence/display/ABDERA",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/abdera-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/abdera-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/abdera-user"
                  },
   "description": "Apache Abdera was a project to build a functionally-complete, high-performance implementation of the IETF Atom Syndication Format (RFC 4287) and Atom Publishing Protocol (RFC 5023) specifications."
},
{
   "name":        "ACE",
   "website":     "http://ace.apache.org",
   "retired":     "12/2017",
   "source code": "http://svn.apache.org/repos/asf/ace",
   "issues":      "https://issues.apache.org/jira/projects/ACE",
   "wiki":        "https://cwiki.apache.org/confluence/display/ACE",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/ace-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/ace-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/ace-users"
                  },
   "description": "Apache ACE was a software distribution framework that allows you to centrally manage and distribute software components, configuration data and other artifacts to target systems. It is built using OSGi and can be deployed in different topologies. The target systems are usually also OSGi based, but don't have to be."
},
{
   "name":        "Avalon",
   "website":     "http://avalon.apache.org",
   "retired":     "06/2004",
   "source code": "http://svn.apache.org/repos/asf/avalon",
   "issues":      "",
   "wiki":        "",
   "maillists":   {},
   "description": "Apache Avalon was closed long before the creation of the Apache Attic. It's mentioned here for completeness."
},
{
   "name":        "Axis Sandesha2/C",
   "website":     "http://axis.apache.org/axis2/c/sandesha",
   "retired":     "09/2014",
   "source code": "http://svn.apache.org/repos/asf/axis/axis2/c/sandesha",
   "issues":      "https://issues.apache.org/jira/projects/SANDESHA2C",
   "wiki":        "",
   "board":       "",
   "maillists":   {},
   "description": "Sandesha2/C was a C implementation of the WS-ReliableMessaging specification. Sandesha2/C was built on top of Apache Axis2/C Web services engine, as a module. Therefore by using Sandesha2/C you could add reliable messaging capability to Web services hosted using Axis2/C. Sandesha2/C could also be used with Axis2/C client to interact with an already hosted Web services in a reliable manner."
},
{
   "name":        "Axis Savan/C",
   "website":     "http://axis.apache.org/axis2/c/savan",
   "retired":     "09/2014",
   "source code": "http://svn.apache.org/repos/asf/axis/axis2/c/savan",
   "issues":      "https://issues.apache.org/jira/browse/AXIS2C",
   "wiki":        "",
   "board":       "",
   "maillists":   {},
   "description": "Savan/C was a C implementation of WS-Eventing specification. Savan/C was built on top of Axis2/C. Therefore by using Savan/C you could add WS-Eventing capability to Web services hosted using Axis2/C. Savan/C was designed as a general publisher/subscriber tool. The arcitecture was designed to abstract the general publisher/subscriber features so that people could support more than one publisher/subscriber mechanisms within the same infrastructure."
},
{
   "name":        "Axis Savan/Java",
   "website":     "http://axis.apache.org/axis2/java/savan",
   "retired":     "09/2014",
   "source code": "",
   "issues":      "https://issues.apache.org/jira/projects/SAVAN",
   "wiki":        "",
   "board":       "",
   "maillists":   {},
   "description": "Savan/Java was a Java implementation of WS-Eventing specification. Savan/Java was built on top of Axis2/Java. Therefore by using Savan/Java you could add WS-Eventing capability to Web services hosted using Axis2/Java. Savan/Java was designed as a general publisher/subscriber tool. The arcitecture was designed to abstract the general publisher/subscriber features so that people could support more than one publisher/subscriber mechanisms within the same infrastructure."
},
{
   "name":        "AxKit",
   "website":     "http://axkit.org",
   "retired":     "08/2009",
   "source code": "",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {},
   "description": "Apache AxKit was an XML Application Server for Apache. It provided on-the-fly conversion from XML to any format, such as HTML, WAP or text using either W3C standard techniques, or flexible custom code."
},
{
   "name":        "Beehive",
   "website":     "http://beehive.apache.org",
   "retired":     "01/2010",
   "source code": "http://svn.apache.org/repos/asf/beehive",
   "issues":      "https://issues.apache.org/jira/projects/BEEHIVE",
   "wiki":        "https://wiki.apache.org/beehive",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/beehive-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/beehive-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/beehive-user"
                  },
   "description": "Apache Beehive was a simple object model built on J2EE and Struts that used annotations to reduce the amount of required code."
},
{
   "name":        "Click",
   "website":     "http://click.apache.org",
   "retired":     "05/2014",
   "source code": "http://svn.apache.org/repos/asf/click",
   "issues":      "https://issues.apache.org/jira/projects/CLK",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/click-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/click-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/click-user"
                  },
   "description": "Apache Click was a JEE web application framework, providing a natural rich client style programming model."
},
{
   "name":        "Continuum",
   "website":     "http://continuum.apache.org",
   "retired":     "05/2016",
   "source code": "http://svn.apache.org/repos/asf/continuum",
   "issues":      "https://issues.apache.org/jira/projects/CONTINUUM",
   "wiki":        "https://cwiki.apache.org//confluence/display/CONTINUUM",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/continuum-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/continuum-dev",
                   "issues":  "http://mail-archives.apache.org/mod_mbox/continuum-issues",
                   "notifications": "http://mail-archives.apache.org/mod_mbox/continuum-notifications",
                   "user":    "http://mail-archives.apache.org/mod_mbox/continuum-users"
                  },
   "description": "Apache Continuum was an enterprise-ready continuous integration server with features such as automated builds, release management, role-based security, and integration with popular build tools and source control management systems."
},
{
   "name":        "Crimson",
   "website":     "http://xml.apache.org/crimson",
   "retired":     "08/2010",
   "source code": "",
   "issues":      "",
   "wiki":        "",
   "board":       "crimson",
   "maillists":   {},
   "description": "Apache Crimson was a Java XML parser which supports XML 1.0 via various APIs."
},
{
   "name":        "Deltacloud",
   "website":     "http://deltacloud.apache.org",
   "retired":     "07/2015",
   "source code": "http://svn.apache.org/repos/asf/deltacloud",
   "issues":      "https://issues.apache.org/jira/projects/DTACLOUD",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/deltacloud-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/deltacloud-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/deltacloud-user"
                  },
   "description": "Deltacloud provided the API server and drivers necessary for connecting to cloud providers via a cloud abstraction API."
},
{
   "name":        "DeviceMap",
   "website":     "http://devicemap.apache.org",
   "retired":     "12/2016",
   "source code": "http://svn.apache.org/repos/asf/devicemap",
   "issues":      "https://issues.apache.org/jira/projects/DMAP",
   "wiki":        "https://wiki.apache.org/devicemap",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/devicemap-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/devicemap-dev"
                  },
   "description": "Apache DeviceMap was a project to create a data repository containing device information, images and other relevant information for all sorts of mobile devices."
},
{
   "name":        "DirectMemory",
   "website":     "http://directmemory.apache.org",
   "retired":     "07/2015",
   "source code": "http://svn.apache.org/repos/asf/directmemory",
   "issues":      "https://issues.apache.org/jira/projects/DIRECTMEMORY",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/directmemory-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/directmemory-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/directmemory-user"
                  },
   "description": "DirectMemory was an off-heap cache for the Java Virtual Machine."
},
{
   "name":        "ESME",
   "website":     "http://esme.apache.org",
   "retired":     "07/2013",
   "source code": "http://svn.apache.org/repos/asf/esme",
   "issues":      "https://issues.apache.org/jira/projects/ESME",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/esme-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/esme-dev"
                  },
   "description": "Apache ESME (Enterprise Social Messaging Environment) was a secure and highly scalable microsharing and micromessaging platform that allows people to discover and meet one another and get controlled access to other sources of information."
},
{
   "name":        "Etch",
   "website":     "http://etch.apache.org",
   "retired":     "06/2016",
   "source code": "http://svn.apache.org/repos/asf/etch",
   "issues":      "https://issues.apache.org/jira/projects/ETCH",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/etch-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/etch-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/etch-user"
                  },
   "description": "Apache Etch was a cross-platform, language- and transport-independent framework for building and consuming network services."
},
{
   "name":        "Excalibur",
   "website":     "http://excalibur.apache.org",
   "retired":     "12/2010",
   "source code": "http://svn.apache.org/repos/asf/excalibur",
   "issues":      "https://issues.apache.org/jira/projects/EXLBR",
   "wiki":        "https://wiki.apache.org/excalibur",
   "maillists":   {"scm":     "http://mail-archives.apache.org/mod_mbox/excalibur-scm",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/excalibur-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/excalibur-user"
                  },
   "description": "Apache Excalibur was a Java Inversion of Control container."
},
{
   "name":        "Harmony",
   "website":     "http://harmony.apache.org",
   "retired":     "11/2011",
   "source code": "http://svn.apache.org/repos/asf/harmony",
   "issues":      "https://issues.apache.org/jira/projects/HARMONY",
   "wiki":        "https://wiki.apache.org/harmony",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/harmony-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/harmony-dev",
                   "alerts":  "http://mail-archives.apache.org/mod_mbox/harmony-alerts"
                  },
   "description": "Harmony software was a modular Java runtime with class libraries and associated tools."
},
{
   "name":        "HiveMind",
   "website":     "http://hivemind.apache.org",
   "retired":     "04/2009",
   "source code": "http://svn.apache.org/repos/asf/hivemind",
   "issues":      "https://issues.apache.org/jira/projects/HIVEMIND",
   "wiki":        "https://cwiki.apache.org/confluence/display/HIVEMIND2",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/hivemind-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/hivemind-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/hivemind-user"
                  },
   "description": "Apache HiveMind was a services and configuration microkernel. Its features are also referred to as Inversion of Control (IoC) Container or Lightweight Container. Closely linked to Tapestry 4, it lost activity when Tapestry 5 moved to a new IoC container."
},
{
   "name":        "iBATIS",
   "website":     "http://ibatis.apache.org",
   "retired":     "06/2010",
   "source code": "http://svn.apache.org/repos/asf/ibatis",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/ibatis-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/ibatis-dev",
                   "user-cs": "http://mail-archives.apache.org/mod_mbox/ibatis-user-cs",
                   "user-java": "http://mail-archives.apache.org/mod_mbox/ibatis-user-java"
                  },
   "description": "iBATIS was a data mapper framework that made it easier to use a relational database with object-oriented applications. There were both Java and .Net implementations."
},
{
   "name":        "Jakarta Cactus",
   "website":     "http://jakarta.apache.org/cactus",
   "retired":     "08/2011",
   "source code": "http://svn.apache.org/repos/asf/jakarta/cactus",
   "issues":      "https://issues.apache.org/jira/projects/CACTUS",
   "wiki":        "",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-cactus-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/jakarta-cactus-user"
                  },
   "description": "Apache akarta previously hosted Cactus, a simple test framework for unit testing server-side java code."
},
{
   "name":        "Jakarta ECS",
   "website":     "http://jakarta.apache.org/ecs",
   "retired":     "09/2010",
   "source code": "http://svn.apache.org/repos/asf/jakarta/ecs",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-ecs-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/jakarta-ecs-user"
                  },
   "description": "Jakarta previously hosted ECS (Element Construction Set), a Java API for generating elements for any of a variety of markup languages (examples included HTML 4.0 and XML)."
},
{
   "name":        "Jakarta ORO",
   "website":     "http://jakarta.apache.org/oro",
   "retired":     "09/2010",
   "source code": "http://svn.apache.org/repos/asf/jakarta/oro",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-oro-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/jakarta-oro-user"
                  },
   "description": "Jakarta previously hosted ORO, a set of text-processing Java classes that provide Perl5 compatible regular expressions, AWK-like regular expressions, glob expressions, and utility classes for performing substitutions, splits, filtering filenames, etc."
},
{
   "name":        "Jakarta Regexp",
   "website":     "http://jakarta.apache.org/regexp",
   "retired":     "04/2011",
   "source code": "http://svn.apache.org/repos/asf/jakarta/regexp",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-regexp-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/jakarta-regexp-user/"
                  },
   "description": "Jakarta previously hosted Regexp, a 100% Pure Java Regular Expression package."
},
{
   "name":        "Jakarta Taglibs",
   "website":     "",
   "retired":     "06/2008",
   "source code": "http://svn.apache.org/repos/asf/jakarta/taglibs",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-taglibs-dev"
                  },
   "description": "Jakarta hosted the Jakarta Taglibs project, a large collection of JSP Tag Libraries. They ranged from simple utility libraries and UI libraries, to Dreamweaver extensions and an implementation of the JSP Standard Tag Library (JSTL) specification."
},
{
   "name":        "Jakarta",
   "website":     "http://jakarta.apache.org",
   "retired":     "12/2011",
   "source code": "http://svn.apache.org/repos/asf/jakarta",
   "issues":      "",
   "wiki":        "https://wiki.apache.org/jakarta",
   "maillists":   {"announcements": "http://mail-archives.apache.org/mod_mbox/jakarta-announcements",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-dev"
                  },
   "description": "Jakarta Project housed a diverse set of popular open source Java solutions."
},
{
   "name":        "Lenya",
   "website":     "http://lenya.apache.org",
   "retired":     "04/2015",
   "source code": "http://svn.apache.org/repos/asf/lenya",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/lenya-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/lenya-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/lenya-user"
                  },
   "description": "Lenya was an Open Source Java/XML Content Management System that came with revision control, multi-site management, scheduling, search, WYSIWYG editors, and workflow."
},
{
   "name":        "MRUnit",
   "website":     "http://mrunit.apache.org",
   "retired":     "04/2016",
   "source code": "http://svn.apache.org/repos/asf/mrunit",
   "issues":      "https://issues.apache.org/jira/projects/MRUNIT",
   "wiki":        "https://cwiki.apache.org/confluence/display/MRUNIT",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/mrunit-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/mrunit-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/mrunit-user"
                  },
   "description": "Apache MRUnit was a Java library that helped developers unit test Apache Hadoop map reduce jobs."
},
{
   "name":        "OJB",
   "website":     "http://db.apache.org/ojb",
   "retired":     "01/2011",
   "source code": "http://svn.apache.org/repos/asf/db/ojb",
   "issues":      "https://issues.apache.org/jira/projects/OJB",
   "wiki":        "https://wiki.apache.org/db-ojb",
   "board":       "",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/db-ojb-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/db-ojb-user"
                  },
   "description": "Apache OJB was an Object/Relational mapping tool that allowed transparent persistence for Java Objects against relational databases."
},
{
   "name":        "Oltu",
   "website":     "http://oltu.apache.org",
   "retired":     "04/2018",
   "source code": "http://svn.apache.org/repos/asf/oltu",
   "issues":      "https://issues.apache.org/jira/projects/OLTU",
   "wiki":        "https://cwiki.apache.org/confluence/display/OLTU/Documentation",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/oltu-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/oltu-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/oltu-user"
                  },
   "description": "Apache Oltu was an OAuth protocol implementation in Java. It also covers others OAuth family related implementations such as JWT, JWS and OpenID Connect"
},
{
   "name":        "Onami",
   "website":     "http://onami.apache.org",
   "retired":     "01/2016",
   "source code": "http://svn.apache.org/repos/asf/onami",
   "issues":      "https://issues.apache.org/jira/projects/ONAMI",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/onami-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/onami-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/onami-user"
                  },
   "description": "Apache Onami was a project focused on the development and maintenance of a set of Google Guice extensions not provided out of the box by the library itself."
},
{
   "name":        "Quetzalcoatl",
   "website":     "http://quetz.apache.org",
   "retired":     "06/2010",
   "source code": "http://svn.apache.org/repos/asf/quetzalcoatl/",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/quetz-mod_python-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/quetz-mod_python-dev/"
                  },
   "description": "Quetzalcoatl, or Quetz as it was more commonly known, was a project charged with the creation and maintenance of open-source software related to mod_python and the Python programming language.  Mainly formed around the mod_python subproject, it didn't have activity in the mod_python community to drive the larger project along."
},
{
   "name":        "Rave",
   "website":     "http://rave.apache.org",
   "retired":     "01/2016",
   "source code": "http://svn.apache.org/repos/asf/rave",
   "issues":      "https://issues.apache.org/jira/projects/RAVE",
   "wiki":        "https://wiki.apache.org/rave",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/rave-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/rave-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/rave-users"
                  },
   "description": "Apache Rave was a web and social mashup engine that aggregated and served web widgets. It was targeted as an engine for internet and intranet portals."
},
{
   "name":        "Shale",
   "website":     "http://shale.apache.org",
   "retired":     "05/2009",
   "source code": "http://svn.apache.org/repos/asf/shale",
   "issues":      "",
   "wiki":        "https://wiki.apache.org/shale",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/shale-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/shale-dev",
                   "issues":  "http://mail-archives.apache.org/mod_mbox/shale-issues",
                   "user":    "http://mail-archives.apache.org/mod_mbox/shale-user"
                  },
   "description": "Shale was a web application framework, fundamentally based on JavaServer Faces."
},
{
   "name":        "Shindig",
   "website":     "http://shindig.apache.org",
   "retired":     "11/2015",
   "source code": "http://svn.apache.org/repos/asf/shindig",
   "issues":      "https://issues.apache.org/jira/projects/SHINDIG",
   "wiki":        "https://cwiki.apache.org/confluence/display/SHINDIG",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/shindig-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/shindig-dev",
                   "issues":  "http://mail-archives.apache.org/mod_mbox/shindig-issues",
                   "user":    "http://mail-archives.apache.org/mod_mbox/shindig-users"
                  },
   "description": "Apache Shindig was an OpenSocial container to help you to start hosting OpenSocial apps quickly."
},
{
   "name":        "Slide",
   "website":     "http://jakarta.apache.org/slide",
   "retired":     "11/2007",
   "source code": "http://svn.apache.org/repos/asf/jakarta/slide",
   "issues":      "https://bz.apache.org/bugzilla/describecomponents.cgi?product=Slide",
   "wiki":        "https://wiki.apache.org/jakarta-slide",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/jakarta-slide-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/jakarta-slide-user"
                  },
   "description": "Jakarta previously hosted Slide, a content repository which could serve as a basis for a content management system as well as other purposes. Among its features was full WebDAV support."
},
{
   "name":        "STDCXX",
   "website":     "http://stdcxx.apache.org",
   "retired":     "07/2013",
   "source code": "http://svn.apache.org/repos/asf/stdcxx",
   "issues":      "https://issues.apache.org/jira/projects/STDCXX",
   "wiki":        "",
   "board":       "Cxx_Standard_Library",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/stdcxx-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/stdcxx-dev",
                   "issues":  "http://mail-archives.apache.org/mod_mbox/stdcxx-issues",
                   "user":    "http://mail-archives.apache.org/mod_mbox/stdcxx-user"
                  },
   "description": "The Apache C++ Standard Library project was a collection of algorithms, containers, iterators, and other fundamental components of every piece of software, implemented as C++ classes, templates, and functions essential for writing C++ programs."
},
{
   "name":        "Stratos",
   "website":     "http://stratos.apache.org",
   "retired":     "01/2017",
   "source code": "http://svn.apache.org/repos/asf/stratos/",
   "issues":      "https://issues.apache.org/jira/projects/STRATOS",
   "wiki":        "https://cwiki.apache.org/confluence/display/STRATOS",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/stratos-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/stratos-dev"
                  },
   "description": "Stratos was a highly-extensible Platform-as-a-Service (PaaS) framework that helped run Apache Tomcat, PHP, and MySQL applications, and could be extended to support many more environments on all major cloud infrastructures."
},
{
   "name":        "Tuscany",
   "website":     "http://tuscany.apache.org",
   "retired":     "05/2016",
   "source code": "http://svn.apache.org/repos/asf/tuscany",
   "issues":      "https://issues.apache.org/jira/projects/TUSCANY",
   "wiki":        "https://cwiki.apache.org/confluence/display/TUSCANY",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/tuscany-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/tuscany-dev",
                   "notification": "http://mail-archives.apache.org/mod_mbox/tuscany-notification",
                   "user":    "http://mail-archives.apache.org/mod_mbox/tuscany-user"
                  },
   "description": "Tuscany simplified the task of developing service-oriented architectured solutions by providing a comprehensive infrastructure for development and management, based on the Service Component Architecture standard."
},
{
   "name":        "Whirr",
   "website":     "http://whirr.apache.org",
   "retired":     "03/2015",
   "source code": "http://svn.apache.org/repos/asf/whirr",
   "issues":      "https://issues.apache.org/jira/projects/WHIRR",
   "wiki":        "https://cwiki.apache.org/confluence/display/WHIRR",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/whirr-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/whirr-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/whirr-user"
                  },
   "description": "Apache Whirr was a set of libraries for running cloud services and deploying clusters."
},
{
   "name":        "Wink",
   "website":     "http://wink.apache.org",
   "retired":     "04/2017",
   "source code": "http://svn.apache.org/repos/asf/wink",
   "issues":      "https://issues.apache.org/jira/projects/WINK",
   "wiki":        "https://cwiki.apache.org/confluence/display/WINK",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/wink-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/wink-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/wink-user"
                  },
   "description": "Apache Wink was a simple yet solid framework for building RESTful Web services. It is comprised of a Server module and a Client module for developing and consuming RESTful Web services."
},
{
   "name":        "Wookie",
   "website":     "http://wookie.apache.org",
   "retired":     "04/2016",
   "source code": "http://svn.apache.org/repos/asf/wookie",
   "issues":      "https://issues.apache.org/jira/projects/WOOKIE",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/wookie-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/wookie-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/wookie-user"
                  },
   "description": "Wookie was a Java server application that allowed you to upload and deploy W3C/OpenSocial/Google Wave widgets to your applications."
},
{
   "name":        "WS Muse",
   "website":     "",
   "retired":     "01/2013",
   "source code": "",
   "issues":      "",
   "wiki":        "",
   "board":       "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/ws-muse-commits",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/ws-muse-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/ws-muse-user"
                  },
   "description": "Muse was a Java-based implementation of the WS-ResourceFramework (WSRF), WS-BaseNotification (WSN), and WS-DistributedManagement (WSDM) specifications."
},
{
   "name":        "Xang",
   "website":     "http://xml.apache.org/xang",
   "retired":     "12/2009",
   "source code": "http://svn.apache.org/repos/asf/xml/xang",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/xml-xang-cvs",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/xml-xang-dev"
                  },
   "description": "Apache Xang was an XML Web Framework that aggregated multiple data sources, made that data URL addressable and defined custom methods to access that data."
},
{
   "name":        "Xindice",
   "website":     "http://xml.apache.org/xindice",
   "retired":     "08/2011",
   "source code": "http://svn.apache.org/repos/asf/xml/xindice",
   "issues":      "https://bz.apache.org/bugzilla/buglist.cgi?product=Xindice",
   "wiki":        "https://wiki.apache.org/xindice",
   "maillists":   {"dev":     "http://mail-archives.apache.org/mod_mbox/xml-xindice-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/xml-xindice-users"
                  },
   "description": "Apache Xindice was a native XML database."
},
{
   "name":        "XML",
   "website":     "http://xml.apache.org",
   "retired":     "04/2012",
   "source code": "http://svn.apache.org/repos/asf/xml",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/xml-bugs",
                   "announcement": "http://mail-archives.apache.org/mod_mbox/xml-announcements"
                  },
   "description": "the Apache XML Project housed a diverse set of popular open source XML solutions."
},
{
   "name":        "XMLBeans",
   "website":     "http://xml.apache.org/xmlbeans",
   "retired":     "07/2013",
   "source code": "http://svn.apache.org/repos/asf/xmlbeans",
   "issues":      "",
   "wiki":        "",
   "maillists":   {"commits": "http://mail-archives.apache.org/mod_mbox/xmlbeans-commits",
                   "cxx-dev": "http://mail-archives.apache.org/mod_mbox/xmlbeans-cxx-dev",
                   "dev":     "http://mail-archives.apache.org/mod_mbox/xmlbeans-dev",
                   "user":    "http://mail-archives.apache.org/mod_mbox/xmlbeans-user"
                  },
   "description": "Apache XMLBeans was a technology for accessing XML by binding it to Java types."
}
]
`);
// END JSON -1



var sideBar = `
<div class="column span-8 last">
  <div class="block">
    <div class="nav column span-11">
      <div>
        <div class="menuheader">The Apache Attic</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/process.html">Process</a></li>
          <li><a href="http://issues.apache.org/jira/browse/ATTIC">Process tracking</a></li>
          <li><a href="https://whimsy.apache.org/board/minutes/Attic.html">Board Minutes</a></li>
        </ul>
        <div class="menuheader">Related Apache Links</div>
        <ul>
          <li><a href="http://www.apache.org/">Foundation</a></li>
          <li><a href="http://www.apache.org/foundation/thanks.html">Sponsors</a></li>
          <li><a href="http://incubator.apache.org/">Incubator</a></li>
          <li><a href="http://apachecon.com/">ApacheCon</a></li>
        </ul>
      </div>
    </div>
    <h6>Projects in the Attic</h6>
    <div id="projList" class="nav column prepend-1 span-12 last"></div>
  </div>
</div>`



function addSidebar()
{
   var projText = "<ul>";
   var jsonLength = jsonObj.length;
   
   for (var i = 0; i < jsonLength; i++)
   {
     projText += "<li><a href=\"projects.html?" + i + "\">" + jsonObj[i]["name"] + "</a></li>\n";
   }
   projText += "</ul>";

   document.getElementById("sidebar").innerHTML = sideBar
   document.getElementById("projList").innerHTML = projText;
}

function addHref(ref, title)
{
  return "<a href=\"" + ref +"\">" + title + "</a>";
}

function addProject()
{
   var jsonProj = jsonObj[parseInt(window.location.search.substr(1))];
   var title    = "Apache " + jsonProj["name"];
   var website  = addHref(jsonProj["website"],title);

   document.title = title + " - Apache Attic";
   document.getElementById("header").innerHTML = "<h1>" + title + "</h1>";
   document.getElementById("website").innerHTML = website;

   document.getElementById("description").innerHTML = 
     "<p>" + website + " moved into the Attic in " +
     jsonProj["retired"] + ".<br>" + jsonProj["description"] + "</p>";

   var mails    = "";
   for (var key in jsonProj["maillists"])
   {
     if (mails.length > 0) { mails += " | "; }
     mails += addHref(jsonProj["maillists"][key],key);
   }
   document.getElementById("mails").innerHTML = mails;

   if (jsonProj["issues"] != "")
   {
      document.getElementById("issue").innerHTML =
         addHref(jsonProj["issues"],"Issues");
   }

   if (jsonProj["wiki"] != "")
   {
      document.getElementById("wiki").innerHTML =
         addHref(jsonProj["wiki"],"Wiki");
   }

   var board = jsonProj["name"]
   if ("board" in jsonProj)
   {
     board = jsonProj["board"]
   }
   if (board != "")
   {
      document.getElementById("board").innerHTML =
         addHref("https://whimsy.apache.org/board/minutes/" +
         board +".html","Minutes");
   }

   document.getElementById("source").innerHTML = addHref(jsonProj["source code"], "Repo");
}

