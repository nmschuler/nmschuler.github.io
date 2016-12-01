function loadNavbar(){
   document.getElementById("navMenu").innerHTML =
      '<div class="navbar navbar-inverse navbar-static-top">' +
         '<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">' +
         '<span class="icon-bar"></span>' +
         '<span class="icon-bar"></span>' +
         '<span class="icon-bar"></span>' +
         '</button>' +
         '<div class="collapse navbar-collapse navHeaderCollapse">' +
            '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
               '<li class="#"><a href="index.html">Home</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
               '<li class="#"><a href="sections/sections.html">Sections</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-right" style="padding-right:50px; padding-left:15px">' +
               '<li class="dropdown">' +
                  '<a class="dropdown-toggle" data-toggle="dropdown">Nick Schuler' +
                     '<b class="caret"></b></a>' +
                  '<ul class="dropdown-menu">' +
                     '<li><a href="mailto:nm_schuler@yahoo.com">E-Mail</a></li>' +
                     '<li><a href="https://www.linkedin.com/in/nicholasschuler" target="_blank">LinkedIn</a></li>' +
                     '<li><a href="https://github.com/nmschuler?tab=repositories" target="_blank">GitHub</a></li>' +
                  '</ul>' +
               '</li>' +
            '</ul>' +
         '</div>' +
      '</div>';
   }

   function loadNavbarClasses(){
      document.getElementById("navMenu").innerHTML =
         '<div class="navbar navbar-inverse navbar-static-top">' +
            '<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse navHeaderCollapse">' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="../index.html">Home</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="../about.html">About Me</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px; padding-left:15px">' +
                  '<li class="#"><a href="classes.html">Classes</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="../sections/sections.html">Sections</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-right" style="padding-right:50px">' +
                  '<li><a href="#" onclick="return false">Nick Schuler</a></li>' +
               '</ul>' +
            '</div>' +
         '</div>';
      }


function loadSidebarClasses(){
   document.getElementById("sidebarClasses").innerHTML =
      '<div class="navbar navbar-static-left">' +
        '<ul class="nav navbar-stacked" style="padding-top:30px">' +
         '<h4>Subjects</h4>' +
         '<li><a href="classes.html">Overview</a></li>' +
         '<li><a href="CompInfoSys.html">Computer Information Systems</a></li>' +
         '<li><a href="DbDesign.html">Database Design</a></li>' +
         '<li><a href="DbSec.html">Database Security</a></li>' +
         '<li><a href="DevProject.html">Development Project</a></li>' +
         '<li><a href="Forensics.html">Forensics</a></li>' +
         '<li><a href="FundInfoSys.html">Fundamentals of IS</a></li>' +
         '<li><a href="InfrastructureTech.html">Infrastructure</a></li>' +
         '<li><a href="IntroInfoSec.html">Intro to Info Sec</a></li>' +
         '<li><a href="MgmtInfoSys.html">Management of IS</a></li>' +
         '<li><a href="NetworkSec.html">Network Security</a></li>' +
         '<li><a href="SoftwareDev1.html">Software Dev 1</a></li>' +
         '<li><a href="SoftwareDev2.html">Software Dev 2</a></li>' +
         '<li><a href="SysAnalAndDesign.html">Systems Analysis & Design</a></li>' +
         '<li><a href="WebArch.html">Web Architecture</a></li>' +
         '<br />' +
         '<br />' +
         '<br />' +
         '<br />' +
        '</ul>' +
      '</div>';
   }


   function loadNavbarSections(){
      document.getElementById("navMenu").innerHTML =
         '<div class="navbar navbar-inverse navbar-static-top">' +
            '<button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse navHeaderCollapse">' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="../index.html">Home</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="sections.html">Sections</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-right" style="padding-right:50px; padding-left:15px">' +
                  '<li class="dropdown">' +
                     '<a class="dropdown-toggle" data-toggle="dropdown">Nick Schuler' +
                        '<b class="caret"></b></a>' +
                     '<ul class="dropdown-menu">' +
                        '<li><a href="mailto:nm_schuler@yahoo.com">E-Mail</a></li>' +
                        '<li><a href="https://www.linkedin.com/in/nicholasschuler" target="_blank">LinkedIn</a></li>' +
                        '<li><a href="https://github.com/nmschuler?tab=repositories" target="_blank">GitHub</a></li>' +
                     '</ul>' +
                  '</li>' +
               '</ul>' +
            '</div>' +
         '</div>';
      }


   function loadSidebarSections(){
      document.getElementById("sidebarSections").innerHTML =
         '<div class="navbar navbar-static-left">' +
           '<ul class="nav navbar-stacked" style="padding-top:30px">' +
            '<h4>Sections</h4>' +
            '<li><a href="sections.html">Overview</a></li>' +
            '<li><a href="database.html">Database</a></li>' +
            '<li><a href="businessanalysis.html">Business Analysis</a></li>' +
            '<li><a href="development.html">Development</a></li>' +
            '<li><a href="security.html">Security</a></li>' +
            '<br />' +
            '<br />' +
            '<br />' +
            '<br />' +
           '</ul>' +
         '</div>';
      }
