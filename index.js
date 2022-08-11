function openSlideMenu() {
    let canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("side-menu").style.width = "100%";
  }
}

function closeSlideMenu() {
    let canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("side-menu").style.width = "0";
  }
}

/*

*/

window.onload = function(){
  let canHover = window.matchMedia("(hover: hover)").matches;

if (canHover) {
  document.getElementById("doc").height = innerHeight - 80;
} else {
  document.getElementById("doc").height = innerHeight - 160;
  document.getElementById("doc").width = innerWidth;
}
}
