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
ReactDOM.render(<Badge 
    firstName='Jorge'
    lastName= 'Niglia'
    avatarUrl='https://s.gravatar.com/avatar/ea8a45bd8475f4af372239e4a0a28d96?s=80'
    jobTitle = 'Material Engineer'
    twitter = 'JorgeNiglia'
   />, container)

