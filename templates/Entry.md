<%*
	const pair = await tp.system.prompt("Pair");
	console.log(tp.file)
  await tp.file.move("Entries/" + pair + '-' + tp.date.now("YYMMDDHHmm"));
%>
---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
doc-type: forex
<% 'Tags:' %> forex
pair: <% pair %>
sl:
tp:
ep:
---
```dataviewjs 


const p = dv.current()

const slPips = round(Math.abs(p.ep-p.sl)*100)
const estTPips = round(Math.abs(p.etp-p.ep)*100)
const estimatedRatio = round(estTPips/slPips)
const width = 160
let content = p.ep && p.sl && p.etp ? `
  <span style="display:inline-block; min-width: ${width}px">SL  Pips</span> ${slPips}
  <span style="display:inline-block; min-width: ${width}px">Estimated TP Pips</span> ${estTPips}
  <span style="display:inline-block; min-width: ${width}px">Estimated Ratio</span> ${estimatedRatio}
`:
''
if(p.tp){
  const ratio = round((p.tp-p.ep)*100)
  content += `<span style="display:inline-block; min-width:${width}">Final Ratio</span> ${ratio<0?'Lost':ratio}`
}

dv.el('div', content)

console.log(p)
function round (n) {    
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

```
<% tp.file.cursor() %>
