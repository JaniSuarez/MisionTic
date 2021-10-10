
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

	var fila= document.getElementById("filaimc");
    var imctabla = document.getElementById("imc-tabla");
    var escalatabla = document.getElementById("escala-tabla");
    var resultadotabla = document.getElementById("resultado-tabla");
   
    if (imcred < 18.5) {
     
        fila.style.backgroundColor = "#96C7EB" ;
        imctabla.innerHTML = imcred;           ////
        escalatabla.innerHTML = "< 18.5";
        resultadotabla.innerHTML = "Bajo peso, estar debajo del peso apropiado puede deberse a una ingesta insuficiente de alimentos o de que padece de una enfermedad. Consulte a su médico para un diagnostico riguroso." ;
    }

    else if (imcred >= 18.5 && imcred < 25) {
 
        fila.style.backgroundColor = "#A3D486";
        imctabla.innerHTML = imcred;
        escalatabla.innerHTML = "18.5 - 24.9";
        resultadotabla.innerHTML = "Peso normal, conserve su peso dentro de este rango, un peso saludable puede mantenerse con una dieta sana y equilibrada y le aleja de complicaciones relacionadas a un IMC bajo o elevado." ;
    }
    else if (imcred >= 25 && imcred < 30){

        fila.style.backgroundColor = "#F7F263";
        imctabla.innerHTML = imcred;
        escalatabla.innerHTML = "25 - 29.9";
        resultadotabla.innerHTML = "Con sobrepeso, las personas con sobrepeso aumentan el riesgo de padecer varias enfermedades. Consulte a un profesional de la salud para seguir un plan encaminado a un control y reducción de su peso mediante una correcta nutrición y un estilo de vida más saludable. " ;
        
    }
    else if (imcred >= 30 && imcred <35){
        
        fila.style.backgroundColor = "#EFBD6D";
        imctabla.innerHTML = imcred;
        escalatabla.innerHTML = "30 - 34.9";
        resultadotabla.innerHTML = "Con Obesidad, el exceso de grasa corporal afecta negativamente la salud y  puede  reducir su capacidad fisica. Consulte a su médico, nutricionista o a un especialista en control de peso. La actividad física y un regimen alimenticio son esenciales para un adecuado control de la obesidad." ;
    }
    else if (imcred >= 35 ){
    
        fila.style.backgroundColor = "#E56E6E";
        imctabla.innerHTML = imcred;
        escalatabla.innerHTML = ">35"
        resultadotabla.innerHTML = "Extremadamente obeso, consulte cuanto antes a su provedor de atención medica, la obesidad extrema es algo grave que perjudica la calidad de vida e incrementa grandemente el riesgo de contraer y padecer enfermedades , como diabetes, enfermedades cardiovasculares , osteoartritis y varios tipos de canceres." ;
    }
}

