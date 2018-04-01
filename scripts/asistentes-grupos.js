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

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));

const entries = grupos.map(grupo => {
    let filtrados = asistentes.feed.entry
        .filter(asistente => {
            return asistente.gsx$grupo.$t === grupo.id;
        });

    const s = filtrados
        .map(e => {
            const a = `${e.gsx$nombre.$t}`;
            const b = `[${e.gsx$twitter.$t}](https://twitter.com/${e.gsx$twitter.$t})`;
            const c = `[Experiencia](http://ftt.programania.net/experiencias/${e.gsx$id.$t}.html) `;
            return a + " | " + b + " | " + c + "\n";
        }).reduce((a, b) => a + b, "");
    const grupoContent = `# ${grupo.name} 

${s} `;

    return {
        id: grupo.id,
        name: grupo.name,
        content: grupoContent
    };
});

entries.forEach(g => {
    fs.writeFileSync('../asistentes-grupos/grupo' + g.id + '.md', g.content);
});


