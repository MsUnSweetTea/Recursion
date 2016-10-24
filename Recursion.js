 function isEven(num){
    if(num === 0){
        return(true);
    } else if (num === 1){
        return(false);
    } else {
        return(isEven(num - 2));
    }
}
console.log(isEven(6) + " " + "Exercise 1: Take an integer as input, and return a boolean indicating whether the value is even or odd.");
//--------------------------------------------------------------------------------------------------------------

function doubleNum(arr, item) {
	item = item || 0; //if item is undefined, then it will automatically set to 0
	if (item < arr.length) {
		arr[item] = arr[item] * 2;
		
		return doubleNum(arr, item + 1);
		//[1, 2, 3, 4] arr.length = 4
			//doubleNum([1, 2 , 3, 4], 0 + 1); --> doubleNum([1, 2 , 3, 4], 1);
	}
	return arr;
}

console.log(doubleNum([1, 2 , 3, 4]) + " Exercise 2: Take an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays. Don't worry about error checking to make sure that the array you're given is valid input.")

//----------------------------------------------------------------------------------------------------------------

function reverseString(str) {
	//michelle
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.substr(0,1);
    //reverse('ichelle' + 'm'); --> ichellem
    	//reverse('chellem' + 'i') --> chellemi
    		//reverse('hellemi' + 'c') --> hellemic (ETC)
}

reverseString(".gnirts wen eht nruter dna ,gnirts eht esrever ,tupni sa gnirts a ekaT :3 esicrexE");


//----------------------------------------------------------------------------------------------------------------

function triangularNum(num) {
	if (num === 0) {
		return 0;
	}
	return triangularNum(num - 1) + num;
	
	num + (num - 1)
	(num-1) + ((num-1) -1)
}	
	/*
	triangularNum(3);
	triangularNum(3 - 1) + 3; --> triangularNum(2) + 3;
								  triangularNum(2 - 1) + 2; --> triangularNum(1) + 2;
								  								triangularNum(1-1) + 1 --> triangularNum(0) + 1
		triangularNum(3 - 1) + 3; --> 0 + 1 + 2; + 3; == 6
								  triangularNum(2 - 1) + 2; --> 
								  								triangularNum(1-1) + 1 --> 				  
								
	num = 3
	*/
	
console.log("this is the triangular number of 3:  " + triangularNum(3) + ". Exercise 4: Calculates the nth triangular number.")

//----------------------------------------------------------------------------------------------------------------



//It takes the string and finds the defined separator and seperates string
function splitString (strings, separator) {
	var stringindexofseparator = strings.indexOf(separator);
	//returns whole string if not found
	if (strings.indexOf(separator) == -1){
		return [strings];
	}
	else {
		//finds string index of 0 and the first separator
		//then adds the function, which adds the beginning of the next separator to the end of the separator, 
		//then repeats by finding the defined separator and adds to array until it is not found.
			return [strings.slice(0, stringindexofseparator)].concat(
			splitString(strings.slice(stringindexofseparator + separator.length), separator))
	} 
}

console.log("Exercise 5: Split a string based upon a separator." + " Example: " + splitString("(Michelle is uhh..)", " "));
