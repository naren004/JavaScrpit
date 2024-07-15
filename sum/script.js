function add(){
    var num1,num2
    num1 = Number(document.getElementById("val1").value)
    num2 = Number(document.getElementById("val2").value)
    res = num1 + num2;
    document.getElementById('result').innerHTML = "Total = "+res;
}
function clr(){
    document.getElementById("val1").value=""
    document.getElementById("val2").value=""
    document.getElementById("result").innerHTML=""
}