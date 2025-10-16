var Input = "0";
var mathOperator = "";
var numInput = Number(Input);
var result = "0";
var process = document.getElementById("process");
console.log(numInput);


var buttons = document.querySelectorAll(".button");
var displayResult = document.getElementById("result");


for(let i = 0; i<buttons.length; i++){
    var button = buttons[i];
    button.addEventListener("click", checkInput);
    button.addEventListener("keyup", checkInput);
 }



  
 function checkInput(){
    
    if(this.textContent === "C"){
       reset();
    }


    if (!isNaN(this.textContent)){
        
        if(Input === "0"){
            
            Input = this.textContent;
            
            
            
        } else{
            Input += this.textContent;
        }
        calculate();
        
    }


    if(this.innerHTML === "*" ||
        this.innerHTML === "/" ||
        this.innerHTML === "+" ||
        this.innerHTML === "-"){
        mathOperator = this.textContent;

        Input = "0";
        
    }if(mathOperator === ""){
        result = Input;
    }

    if(this.textContent == "="){        
        refreshProcess(this.textContent);
    } 
    refreshProcess(this.textContent);
    console.log("Input: " + Input);
    console.log("result: " + result);
    console.log("Math-operator " + mathOperator);
    
 }

 function showResult(){
    displayResult.classList.remove("invisible");
 }
 function reset(){
    Input = "0";
    result = "0";
}
 // Input und Resultat verrechnen
 function calculate(){

    var numResult = Number(result);
    var numInput = Number(Input);
    switch (mathOperator){
        case "": 
        numResult+=numInput;
        
        break;

        case "+": 
        numResult += numInput;
        result = numResult;
        console.log("numresult = " + numResult);
        console.log("numInput = " + numInput);
        displayResult.textContent = numResult;
        showResult();
        
        return result;
        break;
        


        case "*": 
        numResult *= numInput;
        result = numResult;
        displayResult.textContent = numResult;
        showResult();
        
        return result;
        break;

        case "-": 
        numResult -= numInput;
        result = numResult;
        displayResult.textContent = numResult;
        showResult();

        return result;
        break;

        case "/": 
        numResult /= numInput;
        result = numResult;
        displayResult.textContent = numResult;
        showResult();
        
        return result;
        break;
    }
 }
// aktualisieren des Displayergebnisses WIP
function refreshDisplayResult(eingabe){

}

// aktualisieren der Prozessanzeige
 function refreshProcess(eingabe){
    
    if(process.textContent != "0"){

        switch(eingabe) {
            case isNaN(eingabe): 
            break;

            case "=": 
            displayResult.classList.add("invisible");
            process.textContent = result;
            break;

            case "C":
                displayResult.classList.add("invisible");
                process.textContent = "0";
                break;

            default:
                process.textContent += eingabe;
            }
        } else {
            process.textContent = eingabe;
        } 
        return process.textContent;
 }
