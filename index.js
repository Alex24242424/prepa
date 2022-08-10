alert(innerWidth);

function openSlideMenu() {
  if (innerWidth > 500) {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("side-menu").style.width = "100%";
  }
}

function closeSlideMenu() {
  if (innerWidth > 500) {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("side-menu").style.width = "0";
  }
}