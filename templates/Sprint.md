<%*
const year = tp.date.now("YYYY")
const sn = await tp.system.prompt("sprint number");
var name = "Sprint " + year + "." + sn
await tp.file.move("Sprints/" + name);
-%>
---
active: true
alias: ['Non Billable Code Review', 'Non Billable Training']
sprint-number: <% sn  %>
sprint-name: <% name  %>
tags: active
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm") %>
---
# <% name  %>
---

## Non billable Tickets

#### <% name  %> Non-Billable 
^non-billable
#### <% name  %> Ticketing 
^tickting
#### <% name  %> Training 
^DRU-training

<% tp.file.cursor() %>
