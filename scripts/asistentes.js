const fs = require('fs');

const entryToMarkdown = e => {
    const a = `- ${e.gsx$nombre.$t}`;
    const b = `- Twitter : [${e.gsx$twitter.$t}](https://twitter.com/${e.gsx$twitter.$t})`;
    const c = `- [Experiencia](http://ftt.programania.net/experiencias/${e.gsx$id.$t}.html) `;
    const d = `- ![Foto](${e.gsx$foto.$t})`;
    return a+"\n"+b+"\n"+c+"\n"+d+"\n";
};

const entryToHtml = e => `
<div class="card">
  <img src="${e.gsx$foto.$t}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${e.gsx$nombre.$t}</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
`;

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
const asistentesHtml  = asistentes.feed.entry
    .map(entryToHtml)
    .reduce((a,b) => a+b, '');

fs.writeFileSync("../asistentes/asistentes.md", `${asistentesHtml}`);
