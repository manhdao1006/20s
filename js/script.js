var key_number_1 = document.getElementById("key_number_1");
var key_number_2 = document.getElementById("key_number_2");
var key_number_3 = document.getElementById("key_number_3");
var key_number_4 = document.getElementById("key_number_4");
var key_number_5 = document.getElementById("key_number_5");
var key_number_6 = document.getElementById("key_number_6");
// script change page
// start->preface
document.getElementById("audio").onplay = ()=>{
    document.getElementById("cloud").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("preface").style.visibility = "visible";

}

// preface-> key
document.getElementById("next_key").onclick = ()=>{
    document.getElementById("preface").style.visibility = "hidden";
    document.getElementById("key").style.visibility = "visible";
}

// key->restart
document.getElementById("back_restart").onclick = ()=>{
    document.getElementById("key").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "visible";
}

// restart->key
document.getElementById("restart").onclick = ()=>{
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("key").style.visibility = "visible";
}

// intro->B
document.getElementById("next_content_B").onclick = ()=>{
    document.getElementById("intro").style.visibility = "hidden";
    document.getElementById("content_gift_B").style.visibility = "visible";
}

// B->key
document.getElementById("back_key").onclick = ()=>{
    document.getElementById("content_gift_B").style.visibility = "hidden";
    document.getElementById("key").style.visibility = "visible";
    key_number_1.value = "";
    key_number_2.value = "";
    key_number_3.value = "";
    key_number_4.value = "";
    key_number_5.value = "";
    key_number_6.value = "";
}


// hint key
var check = false;
document.getElementById("hint_key").onclick = ()=>{
    check = true;
    if(check == true){
        window.alert("\n\nDON10\n\nMật khẩu này chắc cũng chỉ diu với tui biết thôi đó");
    }
}


// check key
document.getElementById("go").onclick = ()=>{
    if(key_number_1.value == "3" && key_number_2.value == "0"
        && key_number_3.value == "6" && key_number_4.value == "6"
        && key_number_5.value == "1" && key_number_6.value == "0"){
        // key->intro
        document.getElementById("key").style.visibility="hidden";
        document.getElementById("intro").style.visibility="visible";
    } else if(key_number_1.value == "" || key_number_2.value == ""
        || key_number_3.value == "" || key_number_4.value == ""
        || key_number_5.value == "" || key_number_6.value == ""){
        window.alert("\n\nDON10\n\nPhải nhập mật khẩu đã nha");
    } else {
        window.alert("\n\nDON10\n\nSai rùiii\nPassword từ diu mà ra đó, quên rồi hả");
        key_number_1.value = "";
        key_number_2.value = "";
        key_number_3.value = "";
        key_number_4.value = "";
        key_number_5.value = "";
        key_number_6.value = "";
    }
    
}

// show word B
document.getElementById("word").addEventListener("mouseover", showWord);

function showWord(event){
    document.getElementById("up_here").style.display = "none";
    document.getElementById("here").style.display = "none";
    event.target.classList.remove("hide_word_B");
    document.getElementById("minus").classList.remove("hide_minus_word_B");
    document.getElementById("define").classList.remove("hide_define_B");
    event.target.classList.add("show_word_B");
    document.getElementById("minus").classList.add("show_minus_word_B");
    document.getElementById("define").classList.add("show_define_B");
}

// show letter B
var letter_B = document.getElementById("letter_B");
var originContent = letter_B.innerHTML;
var index = 1;

document.getElementById("show_letter").onclick = ()=>{
    letter_B.innerHTML = originContent.slice(0, 1);
    document.getElementById("wait").style.display = "none";
    document.getElementById("show_letter").style.cursor = "auto";
    document.getElementById("word").style.cursor = "auto"
    letter_B.classList.remove("hide_letter_content_B");
    letter_B.classList.add("show_letter_content_B");
    setInterval(()=>{
        index++;
        letter_B.innerHTML = originContent.slice(0, index);
    }, 106)
}