<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  
<script type="text/javascript">
console.log($);
  
  $.getJSON('https://spreadsheets.google.com/feeds/list/1O69PulSKrQO2vFkpb19GJBYN7C7aCjFgiXGYIefAVqA/og2i2rn/public/values?alt=json').then(a => console.log(a.feed.entry.forEach(e => console.log(JSON.stringify(e)))))
  
  
</script>
