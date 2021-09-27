
function iniciar(){
   var btncalcular =document.getElementById("btnCalcular");
	btncalcular.addEventListener("click", calcularimc);
}

function calcularimc(){
	var txtpeso =document.getElementById("txtpeso");
	var peso = txtpeso.value;

	var txtaltura =document.getElementById("txtaltura");
	var altura = txtaltura.value;

	var imc = peso / (altura ** 2);
	var imcred = imc.toFixed(2);
	alert ("su IMC Corporal es : " +imcred)
}

