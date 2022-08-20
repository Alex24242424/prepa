let debut = '<div id="main" class="pdf">\
<iframe\
  id="doc"\
  src="'

let fin = '"\
width="700"\
height="400"\
>\
</iframe>\
</div>'

// lien = 'https://drive.google.com/file/d/1Is2P7NIw-6ig8BRJscbKl5fK_o3b-JfQ/preview'

let nonTrouve = 
`<div id="main" class="main">\
<div></div>\
<div class="presentation">\
  <h1>Indisponible</h1>\
  Ce document n'est pas encore disponible, mais il est probablement en cours de rédaction. Patience !\
</div>\
<div></div>\
</div>`

let lien = localStorage.getItem("link");

if (lien !== 'indefini'){
  let code = debut + lien + fin
  document.write(code)
} else {
  let code = nonTrouve
  document.write(nonTrouve)
}