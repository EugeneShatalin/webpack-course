import $ from 'jquery' //импортируем библиотеку jquery в переменную $

$('<h1 />')//создаем элемент с помощью библиотеки
    .text('Hello world from JQuery') //вставляем текст в элемент
    .css({ //создаем стили
        textAlign: 'center',
        color: 'blue'
    })
    .appendTo($('header')) //элемент импортируем в тег header

