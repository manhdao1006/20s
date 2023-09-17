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
    document.getElementById("key").classList.add("show_block_key");
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
    document.getElementById("main_word_B").style.visibility = "visible";
}

// B->key
document.getElementById("back_key").onclick = ()=>{
    document.getElementById("main_word_B").style.visibility = "hidden";
    document.getElementById("content_gift_B").style.visibility = "hidden";
    document.getElementById("key").style.visibility = "visible";
    key_number_1.value = "";
    key_number_2.value = "";
    key_number_3.value = "";
    key_number_4.value = "";
    key_number_5.value = "";
    key_number_6.value = "";
}

// B->F
document.getElementById("next_word_F").onclick = ()=>{
    document.getElementById("main_word_B").style.visibility = "hidden";
    document.getElementById("content_gift_B").style.visibility = "hidden";
    document.getElementById("main_word_F").style.visibility = "visible";
    document.getElementById("content_gift_F").style.visibility = "visible";
}

// F->B
document.getElementById("back_word_B").onclick = ()=>{
    document.getElementById("main_word_F").style.visibility = "hidden";
    document.getElementById("content_gift_F").style.visibility = "hidden";
    document.getElementById("main_word_B").style.visibility = "visible";
    document.getElementById("content_gift_B").style.visibility = "visible";
}


// hint key
// var check = false;
// document.getElementById("hint_key").onclick = ()=>{
//     check = true;
//     if(check == true){
//         window.alert("\n\nDON10\n\nMật khẩu này chắc cũng chỉ diu với tui biết thôi đó");
//     }
// }

document.getElementById("hint_key").onmouseover = ()=>{
    document.getElementById("img_hint").style.visibility = "visible";
    document.getElementById("img_hint").style.transition = "1s";
}

document.getElementById("hint_key").onmouseout = ()=>{
    document.getElementById("img_hint").style.visibility = "hidden";
}


// check key
var isClick = true;
document.getElementById("go").onclick = ()=>{
    if(isClick){
        if(key_number_1.value == "3" && key_number_2.value == "0"
            && key_number_3.value == "6" && key_number_4.value == "6"
            && key_number_5.value == "1" && key_number_6.value == "0"){
            // key->intro
            document.getElementById("key").style.visibility="hidden";
            document.getElementById("intro").style.visibility="visible";
            isClick = false;
        } else if(key_number_1.value == "" || key_number_2.value == ""
            || key_number_3.value == "" || key_number_4.value == ""
            || key_number_5.value == "" || key_number_6.value == ""){
            window.alert("\n\nDON10\n\nPhải nhập mật khẩu đã nha, không được để trống đâu đó");
            isClick = true;
        } else {
            window.alert("\n\nDON10\n\nSai rùiii\nPassword từ diu mà ra đó, quên rồi hả");
            key_number_1.value = "";
            key_number_2.value = "";
            key_number_3.value = "";
            key_number_4.value = "";
            key_number_5.value = "";
            key_number_6.value = "";
            isClick = true;
        }
    } else{
        if(key_number_1.value == "3" && key_number_2.value == "0"
            && key_number_3.value == "6" && key_number_4.value == "6"
            && key_number_5.value == "1" && key_number_6.value == "0"){
            // key->B
            document.getElementById("key").style.visibility = "hidden";
            document.getElementById("content_gift_B").style.visibility = "visible";
            document.getElementById("main_word_B").style.visibility = "visible";
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
}

// show word B
document.getElementById("word_B").addEventListener("mouseover", showWord_B);

function showWord_B(event){
    document.getElementById("up_here_B").style.display = "none";
    document.getElementById("here_B").style.display = "none";
    event.target.classList.remove("hide_word_B");
    document.getElementById("minus_B").classList.remove("hide_minus_word_B");
    document.getElementById("define_B").classList.remove("hide_define_B");
    event.target.classList.add("show_word_B");
    document.getElementById("minus_B").classList.add("show_minus_word_B");
    document.getElementById("define_B").classList.add("show_define_B");
}

// show word F
document.getElementById("word_F").addEventListener("mouseover", showWord_F);

function showWord_F(event){
    document.getElementById("up_here_F").style.display = "none";
    document.getElementById("here_F").style.display = "none";
    event.target.classList.remove("hide_word_F");
    document.getElementById("minus_F").classList.remove("hide_minus_word_F");
    document.getElementById("define_F").classList.remove("hide_define_F");
    event.target.classList.add("show_word_F");
    document.getElementById("minus_F").classList.add("show_minus_word_F");
    document.getElementById("define_F").classList.add("show_define_F");
}

// show letter B
var letter_B = document.getElementById("letter_B");
var originContent_B = letter_B.innerHTML;
var index_B = 1;

document.getElementById("show_letter_B").onclick = ()=>{
    letter_B.innerHTML = originContent_B.slice(0, 1);
    document.getElementById("wait_B").style.display = "none";
    document.getElementById("show_letter_B").style.cursor = "auto";
    document.getElementById("word_B").style.cursor = "auto"
    letter_B.classList.remove("hide_letter_content_B");
    letter_B.classList.add("show_letter_content_B");
    setInterval(()=>{
        index_B++;
        letter_B.innerHTML = originContent_B.slice(0, index_B);
    }, 60)
}

// show letter F
var letter_F = document.getElementById("letter_F");
var originContent_F = letter_F.innerHTML;
var index_F = 1;

document.getElementById("show_letter_F").onclick = ()=>{
    letter_F.innerHTML = originContent_F.slice(0, 1);
    document.getElementById("wait_F").style.display = "none";
    document.getElementById("show_letter_F").style.cursor = "auto";
    document.getElementById("word_F").style.cursor = "auto"
    letter_F.classList.remove("hide_letter_content_F");
    letter_F.classList.add("show_letter_content_F");
    setInterval(()=>{
        index_F++;
        letter_F.innerHTML = originContent_F.slice(0, index_F);
    }, 60)
}

// show end
var word_end = document.getElementById("word_end");
var originContent_end = word_end.innerHTML;
var index_end = 0;
var isForward = true;

document.getElementById("next_end").onclick = ()=>{
    word_end.innerHTML = originContent_end.slice(0, 1);
    document.getElementById("main_word_F").style.visibility = "hidden";
    document.getElementById("content_gift_F").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "visible";
    setInterval(()=>{
        if(isForward){
            index_end++;
            if(index_end >= originContent_end.length){
                isForward = false;
            }
        } else{
            index_end--;
            if(index_end <= 0){
                isForward = true;
            }
        }
        word_end.innerHTML = originContent_end.slice(0, index_end);
    }, 200)
}