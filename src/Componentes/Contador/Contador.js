import React from 'react'
import styles from './Contador.module.css'

class Contador extends React.Component{

    state = {
        body: {
            title: 'Clicks',
            clicks: 0
        },
        clicks: 0
    }

    add = () => {
        this.setState((prevState, props) => {
            return{
                body:{
                    ...prevState.body,
                    clicks: prevState.body.clicks + 1
                }
            }
        })
    }

    render(){
        return (
            <div className={styles['card']}>
                <h1>{this.state.body.title}</h1>
                <button onClick={this.add}>Agregar</button>
                <span>Clicks: ({this.state.body.clicks})</span>
            </div>
        )
    }
}

export default Contador