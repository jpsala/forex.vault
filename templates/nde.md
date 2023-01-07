---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
doc-type: nde
<% 'Tags:' %> nde
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.move("NDE/" + title);
  }
%>
<% tp.file.cursor() %>
