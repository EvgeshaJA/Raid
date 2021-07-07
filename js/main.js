'use strict'

$(function () {

    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
    });

    
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });

    $('.menu__list-item').on('click', function () {
        $('.menu').removeClass('menu--open');
    });

});

// MODAL

// блокировка скролла модального окна

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    })
};


// Модальное окно

var modal = document.getElementById("my_modal");
var submitModal = document.getElementById("my_ok_modal");
var btn = document.querySelectorAll(".button");

var modbtn = document.querySelector(".modal-main__form-button");
var okbtn = document.querySelector(".modal-gratitude__btn");

var xmodbutton1 = document.getElementsByClassName("modal-main__closebtn")[0];
var xmodbutton2 = document.getElementsByClassName("modal-gratitude__closebtn")[0];


for(var i = 0; i < btn.length; i++)
    btn[i].onclick = function() {
        modal.style.display = "block";
        disableScroll();
    };

xmodbutton1.onclick = function () {
    modal.style.display = "none";
    enableScroll();
}

modal.onclick = function () {
    modal.style.display = "none";
    enableScroll();

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

