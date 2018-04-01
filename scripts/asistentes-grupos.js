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
        id: '10',
        name: 'Grupo 10: tardones'
    }
];

const entryToMarkdown = e => {
    const a = `- ${e.gsx$nombre.$t}`;
    const b = `- Twitter : [${e.gsx$twitter.$t}](https://twitter.com/${e.gsx$twitter.$t})`;
    const c = `- [Experiencia](http://ftt.programania.net/experiencias/${e.gsx$id.$t}.html) `;
    const d = `- ![Foto](${e.gsx$foto.$t})`;
    return a+"\n"+b+"\n"+c+"\n"+d+"\n";
};

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));

const entries = grupos.map( grupo => {
    let filtrados = asistentes.feed.entry
        .filter(asistente => {
            return asistente.gsx$grupo.$t === grupo.id;
        });

    let s = filtrados
        .map(entryToMarkdown)
        .reduce((a, b) => a + b, '');
    return  `<h1>Grupo: ${grupo.name}</h1> 

${s} `;
}).reduce((a,b) => a+b, '');

fs.writeFileSync('../asistentes-grupos/grupos.md', entries);

