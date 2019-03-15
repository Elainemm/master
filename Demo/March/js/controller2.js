window.onload = function () {
	alertId();
};
function alertId() {
	let txt = "Id: " + document.getElementById("myButton").id
	txt = txt + ", type: " + document.getElementById("myButton").type
	console.log("Clicked");
	console.log("alertId",txt);
};