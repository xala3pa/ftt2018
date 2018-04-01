const fs = require('fs');

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
const asistentesHtml  = asistentes.feed.entry
    .map(e => `
<div class="card">
  <img src="${e.gsx$foto.$t}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${e.gsx$nombre.$t}</b></h4> 
    <p><a href="/experiencias/${e.gsx$id.$t}.html">experiencia ${e.gsx$id.$t}</a></p> 
    <p><a href="/experiencias/${e.gsx$id.$t}.html">Grupo xx</a></p> 
  </div>
</div>
`).reduce((a,b) => a+b, '');

fs.writeFileSync("../asistentes/asistentes.md", `${asistentesHtml}`);
