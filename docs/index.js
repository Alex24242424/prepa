

function openSlideMenu() {
  let canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
  //if (innerWidth>700) {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("side-menu").style.width = "100%";
  }
}

function closeSlideMenu() {
  let canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
  //if (innerWidth>700) {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("side-menu").style.width = "0";
  }
}

/*

*/

document.write('\
<nav class="navbar">\
    <div class="open-slide">\
      <a href="#" onclick="openSlideMenu()">\
        <img class="hamburger" src="/prepa/docs/icones/hamburger.svg" />\
      </a>\
    </div>\
    <div style="flex: 1"></div>\
    <img class="logo" src="/prepa/docs/icones/etoile.svg" />\
  </nav>\
  <div id="side-menu" class="side-nav">\
    <a href="#" class="btn-close" onclick="closeSlideMenu()">&times;</a>\
    <div class="liens">\
    <a href="/prepa/docs/index.html">Accueil</a>\
    <a href="/prepa/docs/Maths/maths.html">Mathématiques</a>\
    <a href="/prepa/docs/Physique/physique.html">Physique</a>\
    <a href="/prepa/docs/IPT/IPT.html">I.P.T.</a>\
    <a class="dernier" href="/prepa/docs/Fiches/fiches.html">Fiches</a>\
    </div>\
  </div>\
');

window.onload = function(){
let canHover = window.matchMedia("(hover: hover)").matches;

if (canHover) {
//if (innerWidth>700) {
    document.getElementById("doc").height = innerHeight - 80;
  } else {
    document.getElementById("doc").height = innerHeight - 160;
    document.getElementById("doc").width = innerWidth;
  }
}
