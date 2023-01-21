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
  el.x = firstEl.x
  lastEl = el
});
await ea.addElementsToView(false,true);
