let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('screen');

function buttonClick(value){
	if(isNaN(value)){
		handlerSymbol(value)
	} else{
			handlerNumber(value)
	}
	screeh.innerText = buffer
}

function handlerSymbol(symbol){
	switch(symbol){
		case 'C':
			buffer = '0'
			runningTotal = 0
			break;
		
	}
}