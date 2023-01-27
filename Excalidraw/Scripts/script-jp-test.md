/*
```javascript
*/

const elements = ea.getViewSelectedElements();
const topGroups = ea.getMaximumGroups(elements).sort((g1, g2) => {
  console.log(g1,g2)
  return 1
})
console.log('----')
console.log(topGroups[0])
console.log('----')
console.log(topGroups[1])

if(elements.length < 2) return 
