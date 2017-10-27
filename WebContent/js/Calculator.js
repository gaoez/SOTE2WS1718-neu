var a,b,result;
function setValue(){
	a= Number(document.getElementById("a").value);
	b= Number(document.getElementById("b").value);
	
}
function add(){
	setValue();
	result= a+b;
	alert("Das Ergebnis ist"+ " "+ result);
}
function sub(){
	setValue();
	result= a-b;
	alert("Das Ergebnis ist"+ " "+ result);
}
function mult(){
	setValue();
	result= a*b;
	alert("Das Ergebnis ist"+ " "+ result);
}
function div(){
	setValue();
	result= a/b;
	alert("Das Ergebnis ist"+ " "+ result);
}