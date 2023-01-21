/*
```javascript
*/

const elements = ea.getViewSelectedElements();
if(elements.length !== 1) return

const fixedWidth = 968.8691134952006
const el = elements[0]
const ratio = fixedWidth / el.width;
const newHeight = el.height * ratio;
el.width = fixedWidth
el.height = newHeight
await ea.addElementsToView(false,true); 
