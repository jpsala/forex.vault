/*<%*
//*/
  const pair = (await tp.system.prompt("Pair")).toUpperCase();
  const title = pair + "." + tp.date.now("YYMMDD.HHmm") + ".study";
  const folder = 'Study';
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.style.strokeColor = "red";
  ea.addText(0,0,"#study");
  ea.addText(0,25,"#pair/" + pair);
  await ea.create({
    filename : title,
    foldername : folder,
    templatePath: 'Excalidraw/Template.excalidraw',
    onNewPane : false
  });
  const f = this.app.vault.getAbstractFileByPath(tp.file.path(true));
  setTimeout(async ()=>{
	await this.app.workspace.activeLeaf.openFile( folder+"/"+title );
  await this.app.vault.trash(f, false)
  }, 100)
  
//%>
/*
  const title = (await tp.system.prompt("Title")).toUpperCase();
  //const title = tp.date.now("YYMMDD.HHmm") + ".study";
  const folder = '';
  const ea = ExcalidrawAutomate;
  ea.reset();
  const ff = await ea.create({
    filename : title,
    foldername : folder,
    templatePath: 'Excalidraw/Template.excalidraw',
    onNewPane : false
  });
  console.clear()
  console.log('ff', ff)
	const f = this.app.vault.getAbstractFileByPath(tp.file.path(true));
  console.log('f', f)
  console.log('deleted', deleted);
	setTimeout(async ()=>{
	  console.log('folder+"/"+title', folder+"/"+title)
	  // const path =  folder ? folder+"/"+title 
	  await this.app.workspace.activeLeaf.openFile();
    const deleted = await this.app.vault.trash(f, false)
  }, 200)
  
*/
