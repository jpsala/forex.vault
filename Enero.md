/*
```dataviewjs 
//*/


const round = (n) => {    
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

const pair = 'EURUSD'
const pages = dv.pages('"Entries"').where(p=>p.pair=== pair)
const tableData = []
let totalRatio = 0
if(!pages || pages.length === 0){
  dv.paragraph(`No entries for ${pair}`)
} else {
  dv.header(2, pair)

  pages.forEach(p => {
    // dv.el('div', `## ${p.file.name}` )
    if(!p.pair || !p.etp || !p.sl){
      dv.paragraph(`missing pair, etp or sl, ${p.pair}, ${p.etp}, ${p.sl} in file ${p.file.path}`)
      return
    }
  
    const slPips = round(Math.abs(p.ep-p.sl)*10000)
    const tpPips = round(Math.abs(p.etp-p.ep)*10000)
    const estimatedRatio = round(tpPips/slPips)
    totalRatio+=estimatedRatio
    tableData.push([
      `<span style="color:red">${slPips}</span>`,
      `<span style="color:white">${tpPips}</span>`,
      `<span style="color:green">${estimatedRatio}</span>`
    ])
  })
  tableData.push([
    `---`,
    `---`,
    `---`,
  ])
  tableData.push([
    `<span style="color:white; font-weight: bold">Total</span>`,
    `<span style="color:white"></span>`,
    `<span style="color:${totalRatio < 0 ? 'red':'green'}">${totalRatio}</span>`
  ])
  dv.table(['Stop Lost', 'Estimated TP', 'Estimated Ratio'], tableData)
}
```
