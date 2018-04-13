const fs = require('fs');

const asistentes = JSON.parse(fs.readFileSync(__dirname + '/asistentes.json', 'utf8'));
const asistentesHtml  = asistentes.feed.entry
    .map(e => `

<tr>
<td style="border-bottom:thin solid black">
  <img src="${e.gsx$foto.$t}" alt="Avatar" style="width:40px">
</td>
<td style="border-bottom:thin solid black">
<b>${e.gsx$nombre.$t}</b>
( ${e.gsx$twitter.$t} )
</td>
<td style="border-bottom:thin solid black">${e.gsx$grupo.$t}</td>
<td style="border-bottom:thin solid black"></td>
</td>
`).reduce((a,b) => a+b, '');

fs.writeFileSync("../asistentes/asistentes-tabla.html", `


<table style="width:90%;margin-left:10px;">
<thead>
<tr>
<th>foto</th>
<th>nombre</th>
<th>grupo</th>
<th>desvirtualizado</th>
</tr>
</thead>
<tbody>

${asistentesHtml + ''}
</tbody>
</table>

`);
