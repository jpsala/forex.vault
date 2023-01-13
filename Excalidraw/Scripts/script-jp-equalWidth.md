/**
```javascript
*/
const elements = ea.getViewSelectedElements();
if(elements.length < 2) return

let firstEl = elements[0]
elements.forEach(el => {
  if(el.y < firstEl.y) firstEl = el
})
let lastEl = firstEl

elements.forEach(el => {
  if(el === firstEl) return
  const ratio = firstEl.width / el.width;
  const newHeight = el.height * ratio;
  el.width = firstEl.width
  el.height = newHeight
  
  lastEl = el
});
await ea.addElementsToView(false,true);
