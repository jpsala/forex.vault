---
<%*
	const pair = (await tp.system.prompt("Pair")).toUpperCase();
	const folder = "Entries"
	const filename = pair + '-' + tp.date.now("YYMMDD.HHmm")
	await tp.file.move(folder+'/'+filename );
  const transcludePath = folder + '/Draws/' + filename + '.excalidraw';
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.style.strokeColor = "red";
  ea.addText(300,0,"#entry");
  ea.addText(300,25,"#" + pair);
  
  await ea.create({
    filename,
    foldername : folder+"/Draws",
    templatePath: 'Excalidraw/Template.excalidraw',
    onNewPane : false
  });

%>
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
doc-type: forex
<% 'Tags:' %> forex entry
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
let content= p.ep && p.sl && p.etp ? `
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
<%*   tR = '![['+transcludePath+']]'; %>
<% tp.file.cursor() %>
