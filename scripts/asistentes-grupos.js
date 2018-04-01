const fs = require('fs');

const grupos = [
    {
        id: '1',
        name: 'Grupo 1: trolleando microservicios'
    },
    {
        id: '2',
        name: 'Grupo 2: Product owner'
    },
    {
        id: '3',
        name: 'Grupo 3: frontend'
    },
    {
        id: '4',
        name: 'Grupo 4: equipos'
    },
    {
        id: '5',
        name: 'Grupo 5: coding 1'
    },
    {
        id: '6',
        name: 'Grupo 6: coding 2'
    },
    {
        id: '7',
        name: 'Grupo 7: AWS/GAE/ETC'
    },
    {
        id: '8',
        name: 'Grupo 8: Mobile'
    },
    {
        id: '9',
        name: 'Grupo 9: Otros'
    },
    {
        id: '9',
        name: 'Grupo 10: tardones'
    }
];

const entryToMarkdown = e => {
    return `<li> 
 ${e.gsx$nombre.$t}
 Twitter : ${e.gsx$twitter.$t}
 Foto: ${e.gsx$foto.$t}
</li>
`;
};

const asistentesGruposHtml = grupos.map(grupo => {
    return `<li><a href='/asistentes-grupos/${grupo.id}.html'>${grupo.name}</a></li>`;
}).reduce((a,b) => a+b, '');

fs.writeFileSync('../asistentes-grupos/grupos.md', `<ul>${asistentesGruposHtml}</ul>`);


const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));

const entries = grupos.map( grupo => {
    let filtrados = asistentes.feed.entry
        .filter(asistente => {
            return asistente.gsx$grupo.$t === grupo.id;
        });

    let s = filtrados
        .map(entryToMarkdown)
        .reduce((a, b) => a + b, '');
    return  "<h1>Grupo: "+grupo.name+"</h1> <ul>" + s + "</ul>";
});

entries.forEach((text, i) => {
    fs.writeFileSync("../asistentes-grupos/" + (i + 1) + '.md', text)
});