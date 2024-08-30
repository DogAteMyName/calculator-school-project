const canvas = document.getElementById("graphing-canvas");
const ctx = canvas.getContext("2d");
let zoom = 1

function drawGraph() {
    ctx.beginPath();
    ctx.strokeStyle = `#000000`
    canvas.height = 2000
    canvas.width = 2000
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(0,canvas.height/2)
    ctx.lineTo(canvas.width,canvas.height/2)
    ctx.moveTo(canvas.width/2,0)
    ctx.lineTo(canvas.width/2,canvas.height)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath();
    for(let i = 0; i < 6; i++){
        ctx.lineWidth = 2
        ctx.moveTo(i*333.333333,0)
        ctx.lineTo(i*333.333333,canvas.height)
    }
    for(let i = 0; i < 6; i++){
        ctx.lineWidth = 2
        ctx.moveTo(0,i*333.333333+(canvas.height/6))
        ctx.lineTo(canvas.width,i*333.333333+(canvas.height/6))
    }
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath();
    ctx.fillStyle = `#ff0000`
    ctx.strokeStyle = `#ff0000`
    ctx.lineWidth = 15

    let formulaInput = document.getElementById("inputFormula").value

    for(let i = 0; i < 2000;i++){
        let a = (i-1000)/333.33333
        let b = (i-999)/333.33333
        if(Math.abs(0-(eval(formulaInput.split(`x`).join(`b`).split(`^`).join(`**`)))) < 4){
        ctx.moveTo(i,0-(eval(formulaInput.split(`x`).join(`a`).split(`^`).join(`**`)))*333.33333+1000)
        ctx.lineTo(i+1,0-(eval(formulaInput.split(`x`).join(`b`).split(`^`).join(`**`)))*333.33333+1001)
        }
        
    }
    ctx.closePath()
    ctx.stroke()
    }

function drawTaylorGraph(){
    drawGraph()
    ctx.beginPath();
    ctx.fillStyle = `#0000ff`
    ctx.strokeStyle = `#0000ff`
    ctx.lineWidth = 15

    for(let i = 0; i < 2000;i++){
        let a = (i-1000)/333.33333
        let b = (i-999)/333.33333
        if(Math.abs(0-(eval(taylorFormula.split("x").join(b).split("^").join("**")))) < 4){
        ctx.moveTo(i,0-(eval(taylorFormula.split("x").join(a).split("^").join("**")))*333.33333+1000)
        ctx.lineTo(i+1,0-(eval(taylorFormula.split("x").join(b).split("^").join("**")))*333.33333+1001)
        }
        
    }
    ctx.closePath()
    ctx.stroke()
}