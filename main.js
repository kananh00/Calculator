var btn7 = document.getElementById('btn_7')
var btn8 = document.getElementById('btn_8')
var btn9 = document.getElementById('btn_9')
var btnAdd = document.getElementById('btn_+')
var btn4 = document.getElementById('btn_4')
var btn5 = document.getElementById('btn_5')
var btn6 = document.getElementById('btn_6')
var btnSub = document.getElementById('btn_-')
var btn1 = document.getElementById('btn_1')
var btn2 = document.getElementById('btn_2')
var btn3 = document.getElementById('btn_3')
var btnMul = document.getElementById('btn_*')
var btnC = document.getElementById('btn_C')
var btnDiv = document.getElementById('btn_/')
var btnEq = document.getElementById('btn_=')
var btn0 = document.getElementById('btn_0')

var inputValue = document.getElementById('inputVal')
var input1, input2, exp;
var operation, opCheck = [];
console.log(operation)
console.log(opCheck[0])
function disp(val){
    if(opCheck.length<=1){
        inputValue.value+=val;
    }
}
btn7.addEventListener('click', function(){
    disp("7")
})

btn8.addEventListener('click', function(){
    disp("8")
})
btn9.addEventListener('click', function(){
    disp("9")
})
btn4.addEventListener('click', function(){
    disp("4")
})
btn5.addEventListener('click', function(){
    disp("5")
})
btn6.addEventListener('click', function(){
    disp("6")
})
btn1.addEventListener('click', function(){
    disp("1")
})
btn2.addEventListener('click', function(){
    disp("2")
})
btn3.addEventListener('click', function(){
    disp("3")
})
btn0.addEventListener('click', function(){
    disp("0")
})
btnSub.addEventListener('click', function(){
    if(opCheck.length==0){
    operation="subtract";
    }
    opCheck.push(operation);
    disp("-")
})
btnAdd.addEventListener('click', function(){
    if(opCheck.length<=1){
    operation="add";
    }
    opCheck.push(operation);
    disp("+")
})
btnMul.addEventListener('click', function(){
    if(opCheck.length<=1){
    operation="multiply";
    }
    opCheck.push(operation);
    disp("*")
})
btnDiv.addEventListener('click', function(){
    if(opCheck.length<=1){
    operation="divide";
    }
    opCheck.push(operation);
    disp("/")
})

btnC.addEventListener('click', function(){
    inputValue.value="";
    operation = undefined;
    opCheck.splice(0, opCheck.length)
})
var clicked = false;
if(!clicked){
    btnEq.addEventListener('click', function(){
    clicked=true;
    if(operation=="add"){
        var values = inputValue.value.split('+')
        inputValue.value = parseInt(values[0])+parseInt(values[1])
    }
    if(operation=="subtract"){
        var values = inputValue.value.split('-')
        inputValue.value = parseInt(values[0])-parseInt(values[1])
    }
    if(operation=="multiply"){
        var values = inputValue.value.split('*')
        inputValue.value = parseInt(values[0])*parseInt(values[1])
    }
    if(operation=="divide"){
        var values = inputValue.value.split('/')
        inputValue.value = parseInt(values[0])/parseInt(values[1])  
    }
})
}
