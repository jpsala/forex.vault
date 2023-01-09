---
<% 'Tags:' %> daily, active
Start: <% tp.date.now("HH:mm", 1) %>
---
#### << [[<% "Daily-" + tp.date.now("YYYY-MM-DD", -1)%>]] | [[<% "Daily-" + tp.date.now("YYYY-MM-DD", +1)%>]] >>
# <% tp.date.now("dddd, MMMM DD, YYYY") %>
<%*
await tp.file.move("Daily/Daily-" + tp.date.now("YYYY-MM-DD") );
-%>---
<% tp.file.cursor() %>
