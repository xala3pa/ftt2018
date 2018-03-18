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

const fs = require('fs');
const showdown = require('showdown');
var converter = new showdown.Converter();

const formulario = JSON.parse(fs.readFileSync(__dirname + '/ftt-data.json', 'utf8'));

const entries  = formulario.feed.entry
    .map(entryToMarkdown);
//    .reduce((a,b) => a+b, '<hr/>');
    //.map(e => converter.makeHtml(e));

entries.forEach((text, i) => {
    console.log(i);
    fs.writeFileSync("../" + i + '.md', text)
});
