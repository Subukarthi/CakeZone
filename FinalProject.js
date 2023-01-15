var order=document.getElementById("orderlink")

order.addEventListener("click",function(){
    var ordermain=document.getElementById("ordermain")
    ordermain.style.display="block"
})

var closeorder=document.getElementById("closeorder")

closeorder.addEventListener("click",function(){
    var ordermain=document.getElementById("ordermain")
    ordermain.style.display="none"
})


var confirm=document.getElementById("confirmorder")
confirm.addEventListener("click",function(){
    var confirmorder=document.getElementById("confirmouter")
    confirmouter.style.display="inline-block"
    var ordermain=document.getElementById("ordermain")
    ordermain.style.display="none"
})

var ok=document.getElementById("ok")
ok.addEventListener("click",function(){
    var confirmorder=document.getElementById("confirmouter")
    confirmorder.style.display="none"
})

var expecount=document.getElementById("star")
var specount=document.getElementById("person")
var procount=document.getElementById("tick")
var cliecount=document.getElementById("project")
let sum=0
setInterval(function(){
    sum++
    expecount.textContent=sum
},1000)


let sum1=0
setInterval(function(){
    sum1++
    specount.textContent=sum1
 
},800)
let sum2=0
setInterval(function(){
    sum2++
    procount.textContent=sum2
},600)
let sum3=0
setInterval(function(){
    sum3++
    cliecount.textContent=sum3
},400)
//1
var chocoquantity=document.getElementById("chocoquantity")
chocoquantity.addEventListener("click",function(){
    var chocovalue=document.getElementById("chocoquantity").value
    var chocoresult=document.getElementById("chocoresult")
   var cr= chocoresult.textContent=chocovalue*800
   cr=this.cr
   var total=document.getElementById("total")
   total.textContent=cr
})

//2
var vanniquantity=document.getElementById("vanniquantity")
vanniquantity.addEventListener("click",function(){
    var vannivalue=document.getElementById("vanniquantity").value
    var vanniresult=document.getElementById("vanniresult")
    var vr=vanniresult.textContent=vannivalue*700
    var total=document.getElementById("total")
    total.textContent=cr+vr
})


//3

var straquantity=document.getElementById("straquantity")
straquantity.addEventListener("click",function(){
    var stravalue=document.getElementById("straquantity").value
    var straresult=document.getElementById("straresult")
    straresult.textContent=stravalue*1000
})

//4
var butterquantity=document.getElementById("butterquantity")
butterquantity.addEventListener("click",function(){
    var buttervalue=document.getElementById("butterquantity").value
    var butterresult=document.getElementById("butterresult")
    butterresult.textContent=buttervalue*1000
})

//5

var redquantity=document.getElementById("redquantity")
redquantity.addEventListener("click",function(){
    var redvalue=document.getElementById("redquantity").value
    var redresult=document.getElementById("redresult")
    redresult.textContent=redvalue*1100
})

//6
var fruitquantity=document.getElementById("fruitquantity")
fruitquantity.addEventListener("click",function(){
    var fruitvalue=document.getElementById("fruitquantity").value
    var fruitresult=document.getElementById("fruitresult")
    fruitresult.textContent=fruitvalue*900
})

//7
var pinequantity=document.getElementById("pinequantity")
pinequantity.addEventListener("click",function(){
    var pinevalue=document.getElementById("pinequantity").value
    var pineresult=document.getElementById("pineresult")
    pineresult.textContent=pinevalue*750
})

//8
var rasaquantity=document.getElementById("rasaquantity")
rasaquantity.addEventListener("click",function(){
    var rasavalue=document.getElementById("rasaquantity").value
    var rasaresult=document.getElementById("rasaresult")
    rasaresult.textContent=rasavalue*1350
})





