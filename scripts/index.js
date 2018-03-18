const entryAsHtml = e => {
    return ` 
    ${e.gsx$timestamp.$t}
    <h1>Quién</h1>
    ${e.gsx$tucorreoelectrógeno.$t}
    <h2>Qué</h2>
    ${e.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t}
    <h2>Por qué</h2>
    ${e.gsx$_cpzh4.$t}
    <h2>Cuándo</h2>
    ${e.gsx$_cre1l.$t}
    <h2>Links</h2>
    ${e.gsx$_chk2m.$t}
`;
};

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

const groupEntries = formulario.feed.entry
    .filter((e, i) => i < 5)
    .map(entryToMarkdown)
    .reduce((a,b) => a+b, '<hr/>');
    //.map(e => converter.makeHtml(e));


fs.writeFileSync('build/grupo1.html', groupEntries);

/*
entries.forEach((text, i) => {
    console.log(i);
    fs.writeFileSync("build/" + i + '.html', text)
});
*/
