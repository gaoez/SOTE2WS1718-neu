function addTexttoHtml(){
	var newText = document.getElementById("textfeld").value;
	var node = document.createElement("p");
	var textNode = document.createTextNode(newText);
	node.appendChild(textNode);
	document.getElementById("add").appendChild(node);
	
}