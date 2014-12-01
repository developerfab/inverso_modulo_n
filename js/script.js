function inverso(){


	var a = document.getElementById('var_a').value;
	var n = document.getElementById('var_n').value;
	var prueba = document.getElementById('prueba');
	prueba.innerHTML="";

	if(!comprobar(a,n)){
		var texto = "<div class='alert alert-danger alert-dismissible fade in'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'></span><span class='sr-only'>Close</span></button><strong>los numeros no son primos relativos</strong></div>";
		document.getElementById('rta').innerHTML = texto;
		return;
	}
	var x = 1;
	while(((a*x)%n)!=1){
		x++;	
	}
	var texto = "<div class='alert alert-warning alert-dismissible fade in'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'></span><span class='sr-only'>Close</span></button><strong>inverso de "+a+" es: "+x+"</strong></div>";
	document.getElementById('rta').innerHTML = texto;
	prueba.innerHTML="<strong>PRUEBA</strong><br>( "+a+" ) * ( "+x+" ) mod "+n+" = 1";
}

/** comprobar
* Esta funcion 
*/
function comprobar(a, n){
	var primos_a = new Array(), naturales_a = new Array();
	var primos_n = new Array(), naturales_n = new Array();

	var divisor_a = new Array();
	var divisor_n = new Array();
	//se llenan los arreglos
	for (var i = 1; i < a; i++) {
		naturales_a[i]=i+1;
	};
	
	//
	for (var i = 1; i < n; i++) {
		naturales_n[i]=i+1;
	};
	
	//se averiguan los primos_a
	for(var i=1;i<Math.sqrt(naturales_a[naturales_a.length-1]);i++){
		naturales_a = criba(naturales_a[i],i, naturales_a);
	}
	primos_a = naturales_a;
	
	//se averiguan los primos_n
	for(var i=1;i<Math.sqrt(naturales_n[naturales_n.length-1]);i++){
		naturales_n = criba(naturales_n[i],i, naturales_n);
	}
	primos_n = naturales_n;
	
	//se miran los divisores primos de cada numero

	for(var i =1;i<primos_a.length;i++){
		while((a%(primos_a[i]))!=0){
			primos_a.splice(i,1);
			if(!primos_a[i]){
				break;
			}
		}
	}
	divisor_a = primos_a;
	
	//se miran los divisores primos de cada numero

	for(var i =1;i<primos_n.length;i++){
		while((n%(primos_n[i]))!=0){
			primos_n.splice(i,1);
			
			if(!primos_n[i]){
				break;
			}
		}
	}

	divisor_n = primos_n;
	
	var largo = divisor_a.length<=divisor_n.length;

	if (largo){
		for (var i = 0; i < divisor_a.length; i++) {
			if(divisor_n.indexOf(divisor_a[i])!=-1){
				 return false;
			}
		};
	}
	else{
		for (var i = 0; i < divisor_n.length; i++) {
			if(divisor_a.indexOf(divisor_n[i])!=-1){
				 return false;
			}
		};
	}
	return true;
}

/** criba
* para calcular los numeros primos se hace uso de la criba de eratostenes
*/
function criba(numero,inicio, arreglo){
	var pos;
	for (var i = inicio+1; i <arreglo.length; i++) {
		if(arreglo[i]%numero==0){
			pos = arreglo.indexOf(arreglo[i]);
			pos!=-1 ? arreglo.splice(pos, 1):null;
		}
	};
	return arreglo;
}