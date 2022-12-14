document.write('\
<nav class="navbar">\
    <div class="open-slide">\
      <a href="#" onclick="openSlideMenu()">\
        <img class="hamburger" src="/icones/hamburger.svg" />\
      </a>\
    </div>\
    <div style="flex: 1"></div>\
    <a href="/"><img class="logo" src="/icones/etoile.svg" /></a>\
  </nav>\
  <div id="side-menu" class="side-nav">\
    <a href="#" class="btn-close" onclick="closeSlideMenu()">&times;</a>\
    <div class="liens">\
      <a href="/"><img src="/icones/home.svg" />Accueil</a>\
      <a href="/sites/Maths/maths.html"><img src="/icones/maths.svg" />Mathématiques</a>\
      <a href="/sites/Physique/physique.html"><img src="/icones/physique.svg" />Physique</a>\
      <a href="/sites/IPT/IPT.html"><img src="/icones/ipt.svg" />I.P.T.</a>\
      <a href="/sites/Fiches/fiches.html"><img src="/icones/fiches.svg" />Fiches</a>\
    </div>\
  </div>\
');

function openSlideMenu() {
  let canHover = window.matchMedia('(hover: hover)').matches;
  let orient = window.matchMedia("(orientation: landscape)").matches
  if (canHover || orient) {
  //if (innerWidth>700) {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("side-menu").style.width = "100%";
  }
}

function closeSlideMenu() {
  let canHover = window.matchMedia('(hover: hover)').matches;
  let orient = window.matchMedia("(orientation: landscape)").matches
  if (canHover || orient) {
  //if (innerWidth>700) {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}