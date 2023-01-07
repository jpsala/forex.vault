<%*
const ID = await tp.system.prompt("Ticket ID:");
const description = (await tp.system.prompt("Description:")).replace('/', ' ').replace('?', ' ').replace(':', ' ').replace('&', ' ').replace(',', ' ').replace('.', ' ');
const url = await tp.system.prompt("URL:");
await tp.file.move("Tickets/" + ID + ' ' + description);
-%>
---
<% 'tags:' %> active
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
ID: "<% ID %>"
description: "<% description  %>"
url: "<% url  %>"
theme-id: 
theme-customizer: ""
preview-url: ""
figma-url: ""
PR: ""
---
<span style="font-size: 15px; opacity:.2">last-modified:: `$=  moment(dv.current().file.mtime.toString()).format('YYMMDD HH:mm')`</span>
---
```dataviewjs
let url = dv.current().url
dv.paragraph(url === 'undefined' ? '' : url)
dv.paragraph("ID: " + dv.current().ID )
dv.paragraph("Description: " + dv.current().description )
dv.paragraph('Theme-ID: ' + dv.current()['theme-id'])
let figma = dv.current()['figma-url'] ? `- [Figma](${dv.current()['figma-url']})` : ''
let preview = dv.current()['preview-url'] ? `- [Preview](${dv.current()['preview-url']})` : ''
let customizer = dv.current()['theme-customizer'] ? `[Theme-customizer](${dv.current()['theme-customizer']})` : ''
let pr = dv.current()['PR'] ? `- [PR](${dv.current()['PR']})` : ''
let urls = `Urls: ${customizer} ${preview} ${pr} ${figma}
`
dv.paragraph(urls)
```
---
## Description
<% tp.file.cursor() %>
