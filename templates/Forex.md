---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
doc-type: forex
<% 'Tags:' %> forex
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.move("forex/" + title);
  }
%>
<% tp.file.cursor() %>
