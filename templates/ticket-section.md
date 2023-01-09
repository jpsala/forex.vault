<%*
	let selection = window.getSelection().toString()
	if(!selection) {
		new this.Notice("Select some text first to make the link to the new comment", 3000);
		return
	}
	const {update} = this.app.plugins.plugins["metaedit"].api;
	let fileName = tp.file.title
	let ticketId = tp.frontmatter.ID
	let cleanSelection = selection.replace('/', ' ').replace('?', ' ').replace(':', ' ').replace('&', ' ').replace(',', ' ').replace('.', ' ')
	console.log('clean', cleanSelection)
	let fullFileName = `Tickets/Comments/Comment-${fileName}-${cleanSelection}`
	tR += `[[${fullFileName}|${selection}]]` 
	let commentFile = await this.app.vault.getAbstractFileByPath(fullFileName + ".md") 
	let commentFileContent = 
`---
test: borrar
tag: ticket-comment
ticket: ${ticketId}
link: ${selection}
Status:: new
date: ${moment(new Date).format('YYYY.MM.DD')}
---
### ${fileName}-${selection}
Abstract:: ${selection}<% tp.file.cursor() %>

`
if(!commentFile) commentFile = await this.app.vault.create(fullFileName + ".md", commentFileContent)
	setTimeout(async ()=>{
		this.app.workspace.activeLeaf.openFile(commentFile)
		this.app.commands.executeCommandById('obsidian-editor-shortcuts:goToLineEnd')
		update('test', 'hola', commentFile)
	}, 0)
%>
