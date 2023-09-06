var key_number_1 = document.getElementById("key_number_1");
var key_number_2 = document.getElementById("key_number_2");
var key_number_3 = document.getElementById("key_number_3");
var key_number_4 = document.getElementById("key_number_4");
var key_number_5 = document.getElementById("key_number_5");
var key_number_6 = document.getElementById("key_number_6");
// script change page
// start->key
document.getElementById("start").onclick = ()=>{
    document.getElementById("start").style.visibility = "hidden";
    // document.getElementById("start").style.transform
    document.getElementById("key").style.visibility = "visible";
    // document.getElementById("audio").onplay;
}

// key->start
document.getElementById("back_start").onclick = ()=>{
    document.getElementById("key").style.visibility="hidden";
    document.getElementById("start").style.visibility="visible";
}

// B->key
document.getElementById("back_key").onclick = ()=>{
    document.getElementById("key").style.visibility = "visible";
    document.getElementById("intro_gift_B").style.visibility="hidden";
    key_number_1.value = "";
    key_number_2.value = "";
    key_number_3.value = "";
    key_number_4.value = "";
    key_number_5.value = "";
    key_number_6.value = "";
}


// hint key
var check = false;
document.getElementById("hint_key").onclick = function(){
    check = true;
    if(check == true){
        window.alert("DON10\nMật khẩu này chắc cũng chỉ diu với tui biết thôi đó");
    }
}


// check key
document.getElementById("go").onclick = function(){
    if(key_number_1.value == "3" && key_number_2.value == "0"
        && key_number_3.value == "6" && key_number_4.value == "6"
        && key_number_5.value == "1" && key_number_6.value == "0"){
        // key->B
        document.getElementById("key").style.visibility="hidden";
        document.getElementById("intro_gift_B").style.visibility="visible";
    } else if(key_number_1.value == "" || key_number_2.value == ""
        || key_number_3.value == "" || key_number_4.value == ""
        || key_number_5.value == "" || key_number_6.value == ""){
        window.alert("Phải nhập mật khẩu đã nha");
    } else {
        window.alert("Sai rùiii\nPassword từ diu mà ra đó, quên rồi hả");
        key_number_1.value = "";
        key_number_2.value = "";
        key_number_3.value = "";
        key_number_4.value = "";
        key_number_5.value = "";
        key_number_6.value = "";
    }
    
}