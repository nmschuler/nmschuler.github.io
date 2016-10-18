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
