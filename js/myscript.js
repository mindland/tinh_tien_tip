function shareMoney(event){
    event.preventDefault(); 
    var tongTien =new Number(document.getElementById("total").value) ;
    var soNguoi = new Number(document.getElementById("numberPeople").value) ;
    var moneyTip = new Number( document.getElementById("inputTip").value);



    if(tongTien.length == 0 || soNguoi == "" || moneyTip == ""){
        alert("Vui lòng nhập đủ thông tin!");
        return false
    }

    var moneyShare =  (tongTien * moneyTip * 0.01 ) / soNguoi;
    var tipShare = parseFloat(moneyShare).toFixed(2);


    var resultTag = document.getElementById("result"); 
    resultTag.classList.add("result"); 

    var message = document.getElementById("moneyShare"); 
    message.innerHTML = tipShare;
    
}