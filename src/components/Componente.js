import React, { Component} from 'react';

/*
 Hay dos formas de crear un componente:
 - Componente de Clases de
 - Componente de función.
 */

 // Componente de Clases

class Componente extends Component {
    constructor(props) {
        super(props);
        this.nombre = props.nombre;
        this.meses = props.meses;
        this.objeto = props.objeto;
    }
     render () {
        return (
        <div>
            <ol> 
                <h1>Mi Primer componente {this.nombre}</h1>
            {
                this.meses.map((mes, index) => (
                    <li key={index}>{mes}</li>
                ))
            }
            </ol>
        </div>
            );
     }
 }

 //Componente funcional

/*function Componente() {
    
     return (<h1> Mi primer compontente funcional</h1>);
 }

const Componente = (props) => (
    
<h1>
{props.pintado ? "Verdadero voy a pintar" : "Falso no voy a pintar"} 
Mi primer componente de {props.nombre} --- {props.id}</h1>
);*/

export default Componente;