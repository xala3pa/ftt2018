const fs = require('fs');
//const showdown = require('showdown');
//var converter = new showdown.Converter();


const entryToMarkdown = e => {
    return `# Quién
${e.gsx$tucorreoelectrógeno.$t}
# Qué
${e.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t}
# Por qué
${e.gsx$_cpzh4.$t}
# Cuándo
${e.gsx$_cre1l.$t}
# Links
${e.gsx$_chk2m.$t}
`;
};

const formulario = JSON.parse(fs.readFileSync(__dirname + '/experiencias.json', 'utf8'));
const entries  = formulario.feed.entry
    .map(entryToMarkdown);
//    .reduce((a,b) => a+b, '<hr/>');
    //.map(e => converter.makeHtml(e));

entries.forEach((text, i) => {
    console.log(i);
    fs.writeFileSync("../experiencias/" + i + '.md', text)
});

const experienciasHtml = entries.map((text, i) => {
    const link = `/experiencias/${i}.html`;
    return `<li><a href='${link}'>${link}</a></li>`;
}).reduce((a,b) => a+b, '');

fs.writeFileSync("../experiencias/experiencias.md", `<ul>${experienciasHtml}</ul>`);
