import AppService from "./modules/app.service";
import {config} from './modules/config' //импортируем объект config при помощи деструктуризации
import './modules/header.component'

console.log('Config key: ', config.key)

const service = new AppService('Hello world!')
service.log()