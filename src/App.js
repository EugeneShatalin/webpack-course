import React from 'react'
import {render} from 'react-dom'
import $ from 'jquery' //импортируем библиотеку jquery в переменную $

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')//создаем элемент с помощью библиотеки
            .text('Hello world from JQuery') //вставляем текст в элемент
            .css({ //создаем стили
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header')) //элемент импортируем в тег header
    }

    render() {
        return  (
            <React.Fragment>
            <header />
            <hr />
            <div
                className="box">
                <h2 className="box-title"> Box title </h2>
                        <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                            culpa debitis dolore
                            earum facere fugit ipsum libero minima non quam.</p>
                        </div>
        </React.Fragment>
    )

    }
    }