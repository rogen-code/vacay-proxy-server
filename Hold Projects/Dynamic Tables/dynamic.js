
var numDice = 30;
var arr = [];
$('input[type=number]').attr('placeholder', numDice );


$(".displayValue").keypress(function(){
	if(event.which===13) {
		arr = [$("#diceOne").val(), $("#diceTwo").val(), $("#diceThree").val(), $("#diceFour").val(), $("#diceFive").val()];
		calcNumDice();
		numDice = numDice - countDice();
		calcOdds();
		makeZeroes(firstRow);
		makeZeroes(secondRow);
		makeZeroes(thirdRow);
		makeZeroes(fourthRow);
		makeZeroes(fifthRow);
		makeZeroes(sixthRow);
		collectDice(arr);
		numDice = numDice - 1 + countDice();
		runTables();
	}
});

$("#rollBtn").on("click",function(){
		arr = [$("#diceOne").val(), $("#diceTwo").val(), $("#diceThree").val(), $("#diceFour").val(), $("#diceFive").val()];
		calcNumDice();
		numDice = numDice - countDice();
		calcOdds();
		makeZeroes(firstRow);
		makeZeroes(secondRow);
		makeZeroes(thirdRow);
		makeZeroes(fourthRow);
		makeZeroes(fifthRow);
		makeZeroes(sixthRow);
		collectDice(arr);
		numDice = numDice - 1 + countDice();
		runTables();
});











//Doing Calculations For Probablility Here
var oneRolled = Number(100 - calcProb(numDice,0).toString().slice(0,3));
var twoRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1)).toString().slice(0,3));
var threeRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2)).toString().slice(0,3));
var fourRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3)).toString().slice(0,3));
var fiveRolled =  Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4)).toString().slice(0,3));
var sixRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5)).toString().slice(0,3));
var sevenRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6)).toString().slice(0,3));
var eightRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7)).toString().slice(0,3));
var nineRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7) + calcProb(numDice, 8)).toString().slice(0,3));
var tenRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7) + calcProb(numDice, 8) + calcProb(numDice,9)).toString().slice(0,3))

var firstRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
var secondRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
var thirdRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
var fourthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
var fifthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
var sixthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];


function countDice(){
	var count = 0;
	var arr = [$("#diceOne").val(), $("#diceTwo").val(), $("#diceThree").val(), $("#diceFour").val(), $("#diceFive").val()];
	for (var z =0; z < arr.length; z++) {
		if (arr[z] === ""){
			count++;
		}
	}
	return 5 - count;
}



function calcOdds () {
	oneRolled = Number(100 - calcProb(numDice,0).toString().slice(0,3));
	twoRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1)).toString().slice(0,3));
	threeRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2)).toString().slice(0,3));
	fourRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3)).toString().slice(0,3));
	fiveRolled =  Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4)).toString().slice(0,3));
	sixRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5)).toString().slice(0,3));
	sevenRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6)).toString().slice(0,3));
	eightRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7)).toString().slice(0,3));
	nineRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7) + calcProb(numDice, 8)).toString().slice(0,3));
	tenRolled = Number(100 - (calcProb(numDice,0) + calcProb(numDice,1) + calcProb(numDice,2) + calcProb(numDice,3) + calcProb(numDice,4) + calcProb(numDice,5) + calcProb(numDice,6) + calcProb(numDice,7) + calcProb(numDice, 8) + calcProb(numDice,9)).toString().slice(0,3))
	firstRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
	secondRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
	thirdRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
	fourthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
	fifthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
	sixthRow = [oneRolled, twoRolled, threeRolled, fourRolled, fiveRolled, sixRolled, sevenRolled, eightRolled, nineRolled, tenRolled];
}



function calcNumDice() {
	if (Number($(".displayValue").val()) > 0) {
		numDice = Number($(".displayValue").val());
	}
};



//this function changes the value of the dice
function collectDice (arr) {
  //adjust the values of the arrays based on the collected dice
  for (var i=0; i < arr.length; i++) {
    if (arr[i]==='1') {
      firstRow.unshift(Number(100));
      firstRow.pop();
    }
    if (arr[i]==='2') {
      secondRow.unshift(Number(100));
      secondRow.pop();
    }
    if (arr[i]==='3') {
     thirdRow.unshift(Number(100));
     thirdRow.pop();
    }
    if (arr[i]==='4') {
      fourthRow.unshift(Number(100));
      fourthRow.pop();
    }
    if (arr[i]==='5') {
      fifthRow.unshift(Number(100));
      fifthRow.pop();
    }
    if (arr[i]==='6') {
      sixthRow.unshift(Number(100));
      sixthRow.pop();
    }
  }
}






//populate initial tables
runTables();


function makeZeroes(arr){
	for (var w=0; w<arr.length; w++) {
		if (arr[w] < 0) {
			arr[w] = 0;
		}
	}
}


//Building Dynamic Table Logic Here
function runTables() {
	var table = '';
	rows = 10;
	cols = 11;
	for (var r = 0; r < 1; r++) {
		table += `<table class="table">`;
		table += `<thead class="thead-light">`;
		table += '<tr>';
		table += `<th scope="col" class="text-center">#</th>`;
		  for (var c = 1; c < cols; c++) {
		  	table += `<th scope="col" class="text-center">` + Number(c) + `</th>`;
		  }
		table += '</tr>';
		table += `</thead>`;
		table += `<tbody>`;
		table += `<tr>`;
		//first
		table += `<th scope="row" class="table-active  text-center"><img class="img-fluid rounded" src="imgs/1.png"></th>`
      	for (var d = 0; d < rows; d++) {
	        if (firstRow[d] <= 100 && firstRow[d] > 75) {
	          table += `<td class="first table-success text-center align-middle">` + firstRow[d] + `</td>`;
	          }
	        if (firstRow[d] <= 75 && firstRow[d] > 50) {
	          table += `<td class="first table-info text-center align-middle">` + firstRow[d] + `</td>`;
	          }
	        if (firstRow[d] <= 50 && firstRow[d] > 25) {
	          table += `<td class="first table-warning text-center align-middle">` + firstRow[d] + `</td>`;
	          }
	        if (firstRow[d] <= 25 && firstRow[d] >= 0) {
	          table += `<td class="first table-danger text-center align-middle">` + firstRow[d] + `</td>`;
	          }
	      }

		table += `</tr>`;
		//second
		table += `<th scope="row" class="table-active text-center"><img class="img-fluid rounded" src="imgs/2.png"></th>`
			for (var e = 0; e < rows; e++) {
				if (secondRow[e] <= 100 && secondRow[e] > 75) {
		          table += `<td class="second table-success text-center align-middle">` + secondRow[e] + `</td>`;
		          }
		        if (secondRow[e] <= 75 && secondRow[e] > 50) {
		          table += `<td class="second table-info text-center align-middle">` + secondRow[e] + `</td>`;
		          }
		        if (secondRow[e] <= 50 && secondRow[e] > 25) {
		          table += `<td class="second table-warning text-center align-middle">` + secondRow[e] + `</td>`;
		          }
		        if (secondRow[e] <= 25 && secondRow[e] >= 0) {
		          table += `<td class="second table-danger text-center align-middle">` + secondRow[e] + `</td>`;
		          }
		      }
		table += `</tr>`;
		//third
		table += `<th scope="row" class="table-active text-center"><img class="img-fluid rounded" src="imgs/3.png"></th>`
			for (var f = 0; f < rows; f++) {
				if (thirdRow[f] <= 100 && thirdRow[f] > 75) {
		          table += `<td class="third table-success text-center align-middle">` + thirdRow[f] + `</td>`;
		          }
		        if (thirdRow[f] <= 75 && thirdRow[f] > 50) {
		          table += `<td class="third table-info text-center align-middle">` + thirdRow[f] + `</td>`;
		          }
		        if (thirdRow[f] <= 50 && thirdRow[f] > 25) {
		          table += `<td class="third table-warning text-center align-middle">` + thirdRow[f] + `</td>`;
		          }
		        if (thirdRow[f] <= 25 && thirdRow[f] >= 0) {
		          table += `<td class="third table-danger text-center align-middle">` + thirdRow[f] + `</td>`;
		          }
		        }
		table += `</tr>`;
		//fourth
		table += `<th scope="row" class="table-active text-center"><img class="img-fluid rounded" src="imgs/4.png"></th>`
			for (var g = 0; g < rows; g++) {
				if (fourthRow[g] <= 100 && fourthRow[g] > 75) {
		          table += `<td class="third table-success text-center align-middle">` + fourthRow[g] + `</td>`;
		          }
		        if (fourthRow[g] <= 75 && fourthRow[g] > 50) {
		          table += `<td class="third table-info text-center align-middle">` + fourthRow[g] + `</td>`;
		          }
		        if (fourthRow[g] <= 50 && fourthRow[g] > 25) {
		          table += `<td class="third table-warning text-center align-middle">` + fourthRow[g] + `</td>`;
		          }
		        if (fourthRow[g] <= 25 && fourthRow[g] >= 0) {
		          table += `<td class="third table-danger text-center align-middle">` + fourthRow[g] + `</td>`;
		          }
		        }
		table += `</tr>`;
		//fifth
		table += `<th scope="row" class="table-active text-center"><img class="img-fluid rounded" src="imgs/5.png"></th>`
			for (var h = 0; h < rows; h++) {
				if (fifthRow[h] <= 100 && fifthRow[h] > 75) {
		          table += `<td class="third table-success text-center align-middle">` + fifthRow[h] + `</td>`;
		          }
		        if (fifthRow[h] <= 75 && fifthRow[h] > 50) {
		          table += `<td class="third table-info text-center align-middle">` + fifthRow[h] + `</td>`;
		          }
		        if (fifthRow[h] <= 50 && fifthRow[h] > 25) {
		          table += `<td class="third table-warning text-center align-middle">` + fifthRow[h] + `</td>`;
		          }
		        if (fifthRow[h] <= 25 && fifthRow[h] >= 0) {
		          table += `<td class="third table-danger text-center align-middle">` + fifthRow[h] + `</td>`;
		          }
		        }
		table += `</tr>`;
		//sixth
		table += `<th scope="row" class="table-active text-center"><img class="img-fluid rounded" src="imgs/6.png"></th>`
			for (var g = 0; g < rows; g++) {
				if (sixthRow[g] <= 100 && sixthRow[g] > 75) {
		          table += `<td class="third table-success text-center align-middle">` + sixthRow[g] + `</td>`;
		          }
		        if (sixthRow[g] <= 75 && sixthRow[g] > 50) {
		          table += `<td class="third table-info text-center align-middle">` + sixthRow[g] + `</td>`;
		          }
		        if (sixthRow[g] <= 50 && sixthRow[g] > 25) {
		          table += `<td class="third table-warning text-center align-middle">` + sixthRow[g] + `</td>`;
		          }
		        if (sixthRow[g] <= 25 && sixthRow[g] >= 0) {
		          table += `<td class="third table-danger text-center align-middle">` + sixthRow[g] + `</td>`;
		          }
		         }
		        
		table += `</tr>`;
		table += `</tbody>`;
		table += `</table>`;
		}
	
	$(".addTable").html(table);
	$('input[type=number]').attr('placeholder', numDice );
	$('input[type=number]').val('');
	$('input[type=number]').text(numDice);
	$('.dice').val('');
}




//Probability Calculations Here
function calcProb(numDice, numRolled) {
  var factorialN = factorial(numDice);
  var factorialX = factorial(numRolled);
  var bottom = factorial(numDice - numRolled) * factorialX;
  var firstStatement = factorialN / bottom;

  var p = (1/6)
  var q = (5/6)

  var secondStatement = Math.pow(p,numRolled);
  var thirdPower = (numDice - numRolled);
  var thirdStatement = Math.pow(q,thirdPower);


  return Number((firstStatement * secondStatement * thirdStatement * 100).toString().slice(0,5))
}

function factorial (number) {
  number = Math.round(number);
  var accum = 1;
  for (var i = 1; i <= number; i++) {
    accum *= i;
  }
  return accum;
}

