const fs = require('fs');

const entryToMarkdown = e => {
    const a = `- ${e.gsx$nombre.$t}`;
    const b = `- Twitter : [${e.gsx$twitter.$t}](https://twitter.com/${e.gsx$twitter.$t})`;
    const c = `- [Experiencia](http:://ftt.programania.net/experiencias/${e.gsx$id.$t}.html) `;
    const d = `- ![Foto](${e.gsx$foto.$t})`;
    return a+"\n"+b+"\n"+c+"\n"+d+"\n";
};

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
const asistentesHtml  = asistentes.feed.entry
    .map(entryToMarkdown)
    .reduce((a,b) => a+b, '');

fs.writeFileSync("../asistentes/asistentes.md", `${asistentesHtml}`);
