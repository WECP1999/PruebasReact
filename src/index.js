import React from 'react'
import ReactDom from 'react-dom'

class ComopnentByClass extends React.Component{
    constructor(){
        super()

        this.state = {
            cantidad: 50
        }
    }
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <span>{this.state.cantidad}</span>
                <br/>
                <button onClick={
                    () => {
                        this.setState({cantidad: this.state.cantidad + 1});
                    }
                }>agregar</button>
                <hr></hr>
                <p>Descripción ....</p>
            </div>
        )
    }
}

const App = () => (
    <ComopnentByClass name="Cmbiar de nombre"></ComopnentByClass>
)

const root = document.getElementById('root')

ReactDom.render(<App></App>, root)