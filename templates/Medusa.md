<<<<<<< HEAD
---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
<<<<<<<< HEAD:templates/Medusa.md
<% 'Tags:' %> medusa
========
doc-type: note
<% 'Tags:' %> note
>>>>>>>> 246775ab6a40e2eb13fbd673e847211bdfdf179d:templates/note.md
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
<<<<<<<< HEAD:templates/Medusa.md
    await tp.file.move("Medusa/" + title);
========
    await tp.file.move("Notes/" + title);
>>>>>>>> 246775ab6a40e2eb13fbd673e847211bdfdf179d:templates/note.md
  }
%>
<% tp.file.cursor() %>
=======
<<<<<<< HEAD
---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
<<<<<<<< HEAD:templates/Medusa.md
<% 'Tags:' %> medusa
========
doc-type: note
<% 'Tags:' %> note
>>>>>>>> 246775ab6a40e2eb13fbd673e847211bdfdf179d:templates/note.md
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
<<<<<<<< HEAD:templates/Medusa.md
    await tp.file.move("Medusa/" + title);
========
    await tp.file.move("Notes/" + title);
>>>>>>>> 246775ab6a40e2eb13fbd673e847211bdfdf179d:templates/note.md
  }
%>
<% tp.file.cursor() %>
=======
---
datetime: <% tp.date.now("YYYY-MM-DD ddd HH:mm:ss") %>
<% 'Tags:' %> medusa
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.move("Medusa/" + title);
  }
%>
<% tp.file.cursor() %>
>>>>>>> 246775ab6a40e2eb13fbd673e847211bdfdf179d
