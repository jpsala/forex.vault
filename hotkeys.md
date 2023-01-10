# Hotkeys

```dataviewjs
const getNestedObject = (nestedObj, pathArr) => 
{ 
	return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj); 
}

function getHotkey(arr) { 
return arr.hotkeys ? [[getNestedObject(arr.hotkeys, [0, 'modifiers'])], 
					  [getNestedObject(arr.hotkeys, [0, 'key'])]].flat(2) 
					  .join(' ') 
					  .replace('Mod', 'Ctrl') 
					  //.replace('Shift', 'Shift') 
					  //.replace('Alt', 'Alt') 
					  //.replace('Ctrl', 'Ctrl') 
					  .replace('ArrowRight', 'Right') 
					  .replace('ArrowLeft', 'Left') 
					  .replace('ArrowUp', 'Up') 
					  .replace('ArrowDown', 'Down') 
					  .replace('Enter', '⏎') 
					  //.replace('Tab', '⇥') 
					  : '–'; }

let cmds = dv.array(Object.entries(app.commands.commands)).sort(v => v[1].id, 'asc'); 
cmds = cmds.map(v => [ v[1].id, v[1].name, getHotkey(v[1]), ]);
//filter for only items with hotkeys
cmds = cmds.filter(v => v[2] != '–' && v[2] >= 'A');
//order by hotkey (the 3'rd value in each object in the list)
cmds = cmds.sort(v => v[2], 'asc');
dv.paragraph(cmds.length + " commands currently enabled.<br><br>"); 
dv.table(["Command ID", "Name in current locale", "Hotkeys"], 
		 cmds);
```

