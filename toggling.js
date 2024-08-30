document.getElementById("graphing-calculator").style.display = "none"

function basicCalculatorToggle(boolean){
    if(boolean == "off"){
        document.getElementById("calculator-basic").style.display = "none"
    }
    else{
        if(boolean == "on"){
            document.getElementById("calculator-basic").style.display = "block"
        }
    }
}

function graphingCalculatorToggle(boolean){
    if(boolean == "off"){
        document.getElementById("graphing-calculator").style.display = "none"
    }
    else{
        if(boolean == "on"){
            document.getElementById("graphing-calculator").style.display = "block"
        }
    }
}

function calculatorToggleGuide(){
    if(document.getElementById("calculator-guide-div").style.display == "none"){
        document.getElementById("calculator-guide-div").style.display = "block"
    }
    else{
            document.getElementById("calculator-guide-div").style.display = "none"
            }
}

function calculatorGraphToggleGuide(){
    if(document.getElementById("graphing-calculator-guide-div").style.display == "none"){
        document.getElementById("graphing-calculator-guide-div").style.display = "block"
    }
    else{
            document.getElementById("graphing-calculator-guide-div").style.display = "none"
            }
}