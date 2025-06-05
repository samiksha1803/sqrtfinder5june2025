function find()
{
	event.preventDefault();
	let num=document.getElementById("num");

	if (num.value==="")
	{
		alert("Please enter number!");
		num.focus();
		return;
	}

	let n = parseFloat(num.value);
	let sqr=n**2;
	let ans="square = " +sqr.toFixed(2);
	localStorage.setItem("ans",ans);
	window.location.href="result.html";
}