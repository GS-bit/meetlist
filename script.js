function genList(){
	document.getElementById("output").value = "";

	let s = (document.getElementById("input").value).split('\n'); // s is an array containing all the lines of the input

	let option = document.getElementById("algorithm-type").value;
	
	if(option == "2"){ // Remove the white spaces
		let i = 0;
  		while (i < s.length) {
    			if (s[i] == "") {
     				s.splice(i, 1);
    			} 
			
			else {
      				++i;
			}
    		}
	}
	
	if(option == "3"){
		for(let i = 0; i < s.length; i++){
			if(!isNaN(parseInt(s[i][s[i].length - 1] + s[i][s[i].length - 2])) && !isNaN(parseInt(s[i][s[i].length - 4] + s[i][s[i].length - 5])) && s[i][s[i].length - 3] == ":"){
				document.getElementById("output").value += (s[i].slice(0, s[i].length-5) + "\n") // Adding the names in the output
			}
		}
		document.getElementById("output").value = document.getElementById("output").value.substr(0, document.getElementById("output").value.length - 1); // This line removes the \n at the final line in the output	
	}
	
	else{
		for(let i = 0; i < s.length; i++){
			if(!isNaN(parseInt(s[i][0] + s[i][1])) && !isNaN(parseInt(s[i][3] + s[i][4])) && s[i][2] == ":" && s[i].length == 5){
				document.getElementById("output").value += s[i-1].replace(":", "\n"); // Adding the names in the output
			}
		}
		document.getElementById("output").value = document.getElementById("output").value.substr(0, document.getElementById("output").value.length - 1); // This line removes the \n at the final line in the output
	}
}
