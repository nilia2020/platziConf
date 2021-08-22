import React from 'react';
import ReactDOM from 'react-dom';
//Importo el componente Badge
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'
//const element = <h1>Hello, Platzi Badges!!!!</h1>
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')
const container = document.getElementById('app')
// ReactDOM.render(__elemnento__, __dónde__)
// agrego < y /> a la clase Badge para que lo tome como un elemento
ReactDOM.render(<Badge/>, container)

