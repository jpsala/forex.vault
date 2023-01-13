/* [period:: '2023-01/2023-01-99']
```dataviewjs 
//*/


let period=dv.current().period
const [periodStart, periodEnd ] = period.split('/')
console.log('230102'.substring(0,6) );

const pages = dv.pages('"Entries"')
  .filter(
    p => p.datetime.substring(0,10) >= periodStart && p.datetime.substring(0,10) <= periodEnd
    )
  .groupBy(p => p.pair)
  
const tableData = []
let totalRatio = 0
if(!pages || pages.length === 0){
  dv.paragraph(`No entries`)
} else {
  
  pages.forEach(p => { 
    dv.header(2, p.key)
    p.rows.sort(p => p.datetime, 'asc').forEach(p=>{
      if(!p.pair || !p.etp || !p.sl){
        dv.paragraph(`missing pair, etp or sl, ${p.pair}, ${p.etp}, ${p.sl} in file ${p.file.path}`)
        return
      }
    
      const slPips = round(Math.abs(p.ep-p.sl)*10000)
      const tpPips = round(Math.abs(p.etp-p.ep)*10000)
      const estimatedRatio = round(tpPips/slPips)

      totalRatio+=estimatedRatio
      tableData.push([
        `<span style="">${p.datetime.substr(0,10)} ${p.datetime.substr(15,5)}</span>`,
        `<span style="color:red">${slPips}</span>`,
        `<span style="color:white">${tpPips}</span>`,
        `<span style="color:green">${estimatedRatio}</span>`
      ])
    })
  })

  tableData.push([
    `---`,
    `---`,
    `---`,
    `---`,
  ])

  tableData.push([
    `<span style="color:white">Total</span>`,
    `<span style="color:white"></span>`,
    `<span style="color:white"></span>`,
    `<span style="color:${totalRatio < 0 ? 'red':'green'}">${totalRatio}</span>`
  ])

  dv.table(['datetime', 'Stop Lost', 'Estimated TP', 'Estimated Ratio'], tableData)
}
function round (n) {    
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

```
