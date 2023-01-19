
<%*
  const title = tp.date.now("YYMMDD.HHmm")+'.'+tp.file.title;
  //const title = await tp.system.prompt("Title of the drawing?", defaultTitle);
  const folder = tp.file.folder(true);
  const transcludePath = (folder== '/' ? '' : folder + '/') + title + '.excalidraw';
  tR = '![['+transcludePath+']]';
  const ea = ExcalidrawAutomate;
  ea.reset();
  await ea.create({
    filename : title,
    foldername : folder,
    templatePath: 'Excalidraw/Template.excalidraw',
    onNewPane : false
  });
%>