// ----------------------------Burger-menu-----------------------------
document.querySelector("#burger").onmouseover = burgerShow
document.querySelector("#burger").onmouseout = burgerHide
function burgerShow() {
	document.querySelector("#burger").style.right = '0'
	myFunction()
}
function burgerHide() {
	document.querySelector("#burger").style.right = "-1000px"
	myFunction()
}
document.onkeydown = function(event){
	if(event.code == 'ArrowRight') burgerHide()
	if(event.code == 'ArrowLeft') burgerShow()
}
function myFunction() {
	document.querySelector(".burger__button-touch").classList.toggle("change")
}