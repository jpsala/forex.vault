<%*
	const pair = await tp.system.prompt("Pair");
	console.log(tp.file)
  await tp.file.move("Study/" + pair + '-' + tp.date.now("YYMMDD"));
%>
---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
doc-type: forex
<% 'Tags:' %> forex, study
pair: <% pair %>
datetime-chart-start: 
---

<% tp.file.cursor() %>
