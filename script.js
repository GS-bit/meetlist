function genList(){
	document.getElementById("output").value = "";

	let s = (document.getElementById("input").value).split('\n'); // s is an array containing all the lines of the input

	for(let i = 0; i < s.length; i++){
		if(!isNaN(parseInt(s[i][0] + s[i][1])) && !isNaN(parseInt(s[i][3] + s[i][4])) && s[i][2] == ":" && s[i].length == 5){
			document.getElementById("output").value += s[i-1].replace(":", "\n"); // Adding the names in the output
		}
	}
	document.getElementById("output").value = document.getElementById("output").value.substr(0, document.getElementById("output").value.length - 1); // This line removes the \n at the final line in the output
}
