const fs = require('fs');

const entryToMarkdown = e => {
    return `<li> 
 ${e.gsx$nombre.$t}
 Twitter : ${e.gsx$twitter.$t}
 Foto: ${e.gsx$foto.$t}
</li>
`;
};

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
const asistentesHtml  = asistentes.feed.entry
    .map(entryToMarkdown)
    .reduce((a,b) => a+b, '');

fs.writeFileSync("../asistentes/asistentes.html", `<ul>${asistentesHtml}</ul>`);
