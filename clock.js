$(function(){
	setInterval(updateClock, 1000);
});

function updateClock(){
	var d = new Date(); //Today's Date info
	var hr = d.getHours();//Hours
	var min = d.getMinutes();//Minutes
	var sec = d.getSeconds();//Seconds

	console.log('UPDATING')
	document.getElementById("clock").innerHTML = [hr, min, sec].join(':');
	if (sec < 10){
		return ("0" + sec);
	}
	else{
		return (sec);
	}
}

$("#clock").click(function(){
	alert("OKAY COOL YOU CLICKED IT");
});