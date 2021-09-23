window.onload = iniciar;

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

	if (imcred <= 18) {
		lectura.innerHTML = "Delgadez Muy Severa";
	   document.getElementById("15oM").style.backgroundColor = "#F1C40F";
	}
	else if (imcred > 18 && imcred < 22.5) {
		lectura.innerHTML = "Delgadez Severa";
		document.getElementById("DelgadezS").style.backgroundColor = "#F1C40F";
	}
	else if (imcred >= 22.5 && imcred < 25){
		lectura.innerHTML = "Delgadez";
		document.getElementById("Delgadez").style.backgroundColor = "#F1C40F";
		
	}
	else if (imcred >= 25 && imcred <40){
		lectura.innerHTML = "Normal";
		document.getElementById("PesoS").style.backgroundColor = "#F1C40F";
	}
	