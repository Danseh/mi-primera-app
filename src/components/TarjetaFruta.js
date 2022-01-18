import React, { Component, useState } from 'react';

// -- Version antigua -- //
/*
class TarjetaFruta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0,
        }
        //bindeo o binding sobre los métodos que el this pierde el contexto o bloque de clase.
        this.agregar = this.agregar.bind(this);
        this.quitar = this.quitar.bind(this);
    }

    agregar(){
        this.setState({cantidad: this.state.cantidad +1})
    }

    quitar(){
        this.state.cantidad>0?
        this.setState({cantidad: this.state.cantidad -1}):
        this.setState({cantidad: this.state.cantidad});
    }
    
    limpiar = () => 
        this.setState({cantidad: 0}) //Si es función flecha no tengo que bindear o linkar el this
    ;

    render() {
        return (
            <div>
                <h3>{this.props.nombreFruta}</h3>
                <div>🛒 Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>✅</button>
                <button onClick={this.quitar}>❌</button>
                <button onClick={this.limpiar}>🗑</button>
                <hr />
                <p>{this.props.precio}💰</p>
            </div>
            
        );
    }

}*/
// Versión más moderna
// Property Initializers que no es HOOK
// Gracias a importar babel con create-creat-app cuando hemos creado la app
// y lo configura con unas características aceptadas por la comunidad, pero
// no son un estándar de programación

/*
class TarjetaFruta extends Component {
    //No hay constructor
    state = {
        cantidad: 0,
    };

    agregar = () => {
        this.setState({cantidad: this.state.cantidad +1})
    }

    quitar = () => {
        this.state.cantidad>0?
        this.setState({cantidad: this.state.cantidad -1}):
        this.setState({cantidad: this.state.cantidad});
    }   
    
    limpiar = () => 
        this.setState({cantidad: 0}); //Si es función flecha no tengo que bindear o linkar el this
    

    render() {
        return (
            <div>
                <h3>{this.props.nombreFruta}</h3>
                <div>🛒 Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>✅</button>
                <button onClick={this.quitar}>❌</button>
                <button onClick={this.limpiar}>🗑</button>
                <hr />
                <p>{this.props.precio}💰</p>
            </div>
            
        );
    }
}*/

// USO DE HOOKS (componente funcional) //debemos importar useState
// Se le puede poner valores por defecto al destructuring de las props
//TarjetaFruta.defaultProps = {cantidad: 5, precio: 3.5};

const TarjetaFruta = (props) => { 
    //como asignamos estado en un componente funcional
    const [cantidad, setCantidad] = useState(0);

    function agregar () {
        return setCantidad(cantidad+1);
    }
    
    function quitar () {
        return cantidad>0 ? setCantidad(cantidad - 1): cantidad;
    }

    function limpiar () {
        return setCantidad(0);
    }

    return (
        <div>
            <h3>{props.nombre}</h3>
            <div>🛒 Cantidad: {cantidad}</div>
            <button onClick={agregar}>✅</button>
            <button onClick={quitar}>❌</button>
            <button onClick={limpiar}>🗑</button>
            <hr />
            <p>{props.precio}💰</p>
        </div>
        
    );
}

export default TarjetaFruta;