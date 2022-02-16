import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('multi-execute.execute', () => {
		if (!vscode.window.activeTextEditor || !vscode.window.activeTextEditor.selections) return;

		let box = vscode.window.showInputBox({
			 title: 'Eval Expression',
			 prompt: 'Enter JavaScript Expression to evaluate. (x, i, l, n, a) => expr',
			 placeHolder: 'x',
			}).then((expression) => {
				if (expression != '') {
					let editor = vscode.window.activeTextEditor!
					let selections = editor.selections!;
					let textSelections = selections.map(selection => editor.document.getText(selection))
					editor.edit((edit) => {
						selections.forEach((selection, i) => {
							let text = editor.document.getText(selection);
							let replacement = Function('"use strict";return function(x, i, l, n, a){return (' + expression + ')}')()(text, i, selections?.length - 1, selections?.length, textSelections);
							edit.replace(selection, replacement)
						})
					})
				}
			})


		
		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
