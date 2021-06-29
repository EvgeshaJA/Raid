'use strict'

$(function () {

    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(".menu").toggleClass("open");
    });

});

// MODAL

var modal = document.getElementById("my_modal");
var submitModal = document.getElementById("my_ok_modal");
var btn = document.querySelectorAll(".button");

var modbtn = document.querySelector(".modal-main__form-button");
var okbtn = document.querySelector("button.ok");

var xmodbutton1 = document.getElementsByClassName("modal-main__closebtn")[0];
var xmodbutton2 = document.getElementsByClassName("close_ok_modal_window")[0];


for(var i = 0; i < btn.length; i++)
    btn[i].onclick = function() {
        modal.style.display = "block";
    };

xmodbutton1.onclick = function () {
    modal.style.display = "none";
}

xmodbutton2.onclick = function () {
    submitModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == submitModal) {
        submitModal.style.display = "none";
    }
}

modbtn.onclick = function () {
    modal.style.display = "none";
    submitModal.style.display = "block";
}

okbtn.onclick = function () {
    submitModal.style.display = "none";
}


