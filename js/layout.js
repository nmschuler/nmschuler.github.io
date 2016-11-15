function loadNavbar(){
   document.getElementById("navMenu").innerHTML =
      '<div class="navbar navbar-inverse navbar-static-top">' +
         '<div class="collapse navbar-collapse navHeaderCollapse">' +
            '<ul class="nav navbar-nav navbar-left" style="padding-left:50px">' +
               '<li class="#"><a href="index.html">Home</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
               '<li class="#"><a href="about.html">About Me</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
               '<li class="#"><a href="subjects/classes.html">Classes</a></li>' +
            '</ul>' +
            '<ul class="nav navbar-nav navbar-right" style="padding-right:50px">' +
               '<li><a href="#" onclick="return false">Nick Schuler</a></li>' +
            '</ul>' +
         '</div>' +
      '</div>';
   }


   function loadNavbarClasses(){
      document.getElementById("navMenu").innerHTML =
         '<div class="navbar navbar-inverse navbar-static-top">' +
            '<div class="collapse navbar-collapse navHeaderCollapse">' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:50px">' +
                  '<li class="#"><a href="../index.html">Home</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="../about.html">About Me</a></li>' +
               '</ul>' +
               '<ul class="nav navbar-nav navbar-left" style="padding-left:15px">' +
                  '<li class="#"><a href="classes.html">Classes</a></li>' +
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
         '<li><a href="DBDesign.html">Database Design</a></li>' +
         '<li><a href="DBSec.html">Database Security</a></li>' +
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
