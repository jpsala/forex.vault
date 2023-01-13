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
<% tp.file.cursor() %>
