window.onload = function(){
    resizeDoc()
  }
  
  function resizeDoc () {
    if (document.getElementById("doc") !== null) {
      let canHover = window.matchMedia('(hover: hover)').matches;
      if (canHover && innerWidth>700) {
        //if (innerWidth>700) {
            document.getElementById("doc").height = innerHeight - 80;
            document.getElementById("doc").width = 700;
          } else if (!canHover && window.matchMedia("(orientation: landscape)").matches) {
            document.getElementById("doc").height = innerHeight - 65;
            document.getElementById("doc").width = innerWidth;
          }
          else {
            document.getElementById("doc").height = innerHeight - 180;
            document.getElementById("doc").width = innerWidth;
          }
        }
  }
  
  function resize () {
    if (document.getElementById("side-menu") !== null) {
      if (document.getElementById("side-menu").style.width !== "0px" && document.getElementById("side-menu").style.width !== "") {
        closeSlideMenu()
        openSlideMenu()
      }
    }
    resizeDoc()
  }
  
  window.onresize = resize;