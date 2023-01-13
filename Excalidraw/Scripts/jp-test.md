/**
```javascript
*/
const elements = ea.getViewElements();
// if(elements.length < 2) return

// let firstEl = elements[0]
// elements.forEach(el => {
//   if(el.y < firstEl.y) firstEl = el
// })

// let lastEl = firstEl

// elements.forEach(el => {
//   if(el === firstEl) return
//   el.x = firstEl.x
//   lastEl = el
// });
// ea.deleteViewElements(elements);
// await ea.addElementsToView(false,false,true);
// ea.selectElementsInView(ea.getElements());
// await await ea.addElementsToView(false,true);
// ea.addElementsToView(true)
ea.selectElementsInView(ea.getElements());
