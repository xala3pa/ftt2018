<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  
<script type="text/javascript">  
$.getJSON('https://spreadsheets.google.com/feeds/list/1O69PulSKrQO2vFkpb19GJBYN7C7aCjFgiXGYIefAVqA/og2i2rn/public/values?alt=json').then(a => console.log(a.feed.entry.forEach(e => {
  
  
const body = $('body');
  
  
  
  body.append("<h1>Quién</h1><br/>");
  body.append(e.gsx$timestamp.$t);
  body.append("<br/>");
  body.append(e.gsx$tucorreoelectrógeno.$t);
  body.append("<br/><br/>");
  body.append("<h2>Qué</h2>");
  body.append(e.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t);
  body.append("<br/><br/>");
  body.append(e.gsx$_chk2m.$t);
   body.append("<br/>");
  body.append(e.gsx$_cpzh4.$t);
  body.append("<br/>");
  body.append(e.gsx$_cre1l.$t);
  body.append("<br/><br/><br/><br/>");
   })))
  
  
</script>

