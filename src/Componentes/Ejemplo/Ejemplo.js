import React from 'react'
import styles from './Ejemplo.module.css'


class ComopnentByClass extends React.Component{
    state = {
        cantidad: 0
    }
    
    agregar = () => {
        this.setState({cantidad: this.state.cantidad + 1});
    }

    restar = () => {
        this.setState({cantidad: this.state.cantidad - 1});
    }

    render(){
        const hasItem = this.state.cantidad > 0;
        const clases = styles['card'] + ' ' + (hasItem? styles['card_active']: '')
        return(
            <div className={clases}>
                <h3>{this.props.name}</h3>
                <span>{this.state.cantidad}</span>
                <br/>
                <button onClick={this.agregar}>agregar</button>
                <button onClick={this.restar}>Restar</button>
                <hr></hr>
                <p>Descripción ....</p>
            </div>
        )
    }
}

export default ComopnentByClass