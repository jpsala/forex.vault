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
  el.y = lastEl.y + lastEl.height + 35
  lastEl = el
});
await ea.addElementsToView(false,true);
