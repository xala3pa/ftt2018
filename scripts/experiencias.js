const fs = require('fs');
//const showdown = require('showdown');
//var converter = new showdown.Converter();


const emailToId = {};
const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
asistentes.feed.entry
    .forEach(e => {
        emailToId[e.gsx$email.$t.toLowerCase()] = {
            id: e.gsx$id.$t,
            name: e.gsx$nombre.$t
        };
    });

console.log(emailToId);
const formulario = JSON.parse(fs.readFileSync(__dirname + '/experiencias.json', 'utf8'));
const entries  = formulario.feed.entry
    .map(e => {
        const email = e.gsx$tucorreoelectrógeno.$t;
        const quien = emailToId[email.toLowerCase()];
        const text =  `# Quién
${quien.name}

# Qué
${e.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t}

# Por qué
${e.gsx$_cpzh4.$t}

# Cuándo
${e.gsx$_cre1l.$t}

# Links
${e.gsx$_chk2m.$t}
`;
        return {
            id: quien.id,
            text: text
        };
});

entries.forEach((obj) => {
    fs.writeFileSync("../experiencias/" + obj.id + '.md', obj.text)
});

const experienciasHtml = entries.map((obj) => {
    const link = `/experiencias/${obj.id}.html`;
    return `<li><a href='${link}'>${link}</a></li>`;
}).reduce((a,b) => a+b, '');

fs.writeFileSync("../experiencias/experiencias.md", `<ul>${experienciasHtml}</ul>`);
