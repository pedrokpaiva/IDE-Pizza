
document.getElementById("pizza-header").onclick = changeMenuPizza; 
document.getElementById("salad-header").onclick = changeMenuSalad;
document.getElementById("starter-header").onclick = changeMenuStarter;  

function changeMenuPizza() {
	document.getElementById("pizza-header").style.backgroundColor = "red";
	document.getElementById("salad-header").style.backgroundColor = "black";
	document.getElementById("starter-header").style.backgroundColor = "black";
	document.getElementById("container-menu-pizza").style.zIndex = "2";
	document.getElementById("container-menu-salad").style.zIndex = "-1";
	document.getElementById("container-menu-starter").style.zIndex = "-1";

	return false;
}   

function changeMenuSalad() {
	document.getElementById("salad-header").style.backgroundColor = "red";
	document.getElementById("pizza-header").style.backgroundColor = "black";
	document.getElementById("starter-header").style.backgroundColor = "black";
	document.getElementById("container-menu-pizza").style.zIndex = "-1";
	document.getElementById("container-menu-salad").style.zIndex = "2";
	document.getElementById("container-menu-starter").style.zIndex = "-1";

	return false;
}   

function changeMenuStarter() {
	document.getElementById("pizza-header").style.backgroundColor = "black";
	document.getElementById("starter-header").style.backgroundColor = "red";
	document.getElementById("salad-header").style.backgroundColor = "black";
	document.getElementById("container-menu-pizza").style.zIndex = "-1";
	document.getElementById("container-menu-salad").style.zIndex = "-1";
	document.getElementById("container-menu-starter").style.zIndex = "2";

	return false;
}   