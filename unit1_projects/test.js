var evenArray = [4,21,18,39];
	var oddArray = [23,233,2,34,32];
	//defined two arrays. one with 4 elements and one with 5 elements.


	var sortedEvenArray = evenArray.sort(function(a,b) {
		return a-b; 
		});

	var sortedOddArray = oddArray.sort(function(a,b) {
		return a-b;
		});

	//sorted the arrays in ascending order and assigned them to new variables.
	function Calculator() {
				this.sum = function(array) {
							var final_sum = 0;
							for (var i = 0; i < array.length; i++) {
								final_sum += array[i];
							}
							return final_sum;
				};
	}

	//created sum function to add up all elements of the array then return the final sum.
	var checkCalculator = new Calculator();


	if (typeof checkCalculator.sum === "function") {
		console.log("I'm a function");
	}
	else {
		console.log("the variable sum is not a function");
	}
	//test to see if 'sum' is a function

	
	if (checkCalculator instanceof Calculator) {
		console.log("checkCalculator is an instance of calculator.");
	}
	else {
		console.log("checkCalculator is not an instance of calculator.");
	}
	//test to see if the variable sum is an instance of instanceOfSum.