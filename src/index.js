import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Richard',
    lastName: 'Moises',
    avatar: ''
}

const nombre = 'Richard'

const element = <>Hello {getUserNombre()}</>
const container = document.getElementById('root')

function getUserNombre(user){
    if(user){
        return `${user.firstName} ${user.lastName}`;
    }
    return `Hola extraño`;
}

ReactDOM.render(element,container);
