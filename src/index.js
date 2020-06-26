import React from 'react'
import {render} from 'react-dom'
import AppService from "./modules/app.service";
import {config} from './modules/config' //импортируем объект config при помощи деструктуризации
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
import App from './App'

console.log('Config key: ', config.key)

const service = new AppService('Hello world!')
service.log()

render(<App />, document.getElementById('app'))