<%*
  const pair = (await tp.system.prompt("Pair")).toUpperCase();
  const title = pair + "." + tp.date.now("YYMMDD.HHmm") + ".study";
  const folder = 'Study/Draws';
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.style.strokeColor = "red";
  ea.addText(0,0,"#study");
  ea.addText(0,25,"#" + pair);
  await ea.create({
    filename : title,
    foldername : folder,
    templatePath: 'Excalidraw/Template.excalidraw',
    onNewPane : false
  });
  
  await this.app.workspace.activeLeaf.openFile( folder+"/"+title );

%>
