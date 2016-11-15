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
               '<li class="#"><a href="classes.html">Classes</a></li>' +
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
                  '<li class="#"><a href="../classes.html">Classes</a></li>' +
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
         '<li><a href="subjects/CompInfoSys.html">Class 1</a></li>' +
         '<li><a href="#">Class 2</a></li>' +
         '<li><a href="#">Class 3</a></li>' +
         '<li><a href="#">Class 4</a></li>' +
         '<li><a href="#">Class 5</a></li>' +
         '<li><a href="#">Class 6</a></li>' +
         '<li><a href="#">Class 7</a></li>' +
         '<li><a href="#">Class 8</a></li>' +
         '<li><a href="#">Class 9</a></li>' +
         '<li><a href="#">Class 10</a></li>' +
         '<li><a href="#">Class 11</a></li>' +
         '<li><a href="#">Class 12</a></li>' +
         '<li><a href="#">Class 13</a></li>' +
         '<li><a href="#">Class 14</a></li>' +
        '</ul>' +
      '</div>';
   }
