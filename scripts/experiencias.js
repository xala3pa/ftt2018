const fs = require('fs');
const emailToId = {};
const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
asistentes.feed.entry
    .forEach(e => {
        emailToId[e.gsx$email.$t.toLowerCase()] = {
            id: e.gsx$id.$t,
            name: e.gsx$nombre.$t
        };
    });

const formulario = JSON.parse(fs.readFileSync(__dirname + '/experiencias.json', 'utf8'));
const entries  = formulario.feed.entry
    .map(e => {
        const email = e.gsx$tucorreoelectrógeno.$t;
        const quien = emailToId[email.toLowerCase()];
        let titulo = e.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t;
        const text =  `# Quién
${quien.name}

# Qué
${titulo}

# Por qué
${e.gsx$_cpzh4.$t}

# Cuándo
${e.gsx$_cre1l.$t}

# Links
${e.gsx$_chk2m.$t}
`;
        return {
            id: quien.id,
            name: quien.name,
            title: titulo,
            text: text
        };
});

entries.forEach((obj) => {
    fs.writeFileSync("../experiencias/" + obj.id + '.md', obj.text)
});