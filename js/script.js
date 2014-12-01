function inverso(){
	var a = document.getElementById('var_a').value;
	var n = document.getElementById('var_n').value;
	var x = 1;
	while(((a*x)%n)!=1){
		x++;
	}
	var texto = "<div class='alert alert-warning alert-dismissible fade in'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'></span><span class='sr-only'>Close</span></button><strong>inverso de "+a+" es: "+x+"</strong></div>";
	document.getElementById('rta').innerHTML = texto;
}