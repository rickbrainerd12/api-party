import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './Pokeapi.css'
import Pokemon from './Pokemon'

class Pokeapi extends Component {
    state ={
        pokeName: '',
    }

    handleChange = (ev) => {
        this.setState({
            pokeName: ev.target.value
        })        
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({pokeName: ''})
        this.props.history.push(`/pokeapi.co/api/v2/pokemon/${this.state.pokeName}`)
    }

    render (){
        return (
            <div className = "pokeapi">
                <img className="pokeapi-logo" 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png' 
                    alt='pokeapi logo' />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' 
                                value = {this.state.pokeName}
                                onChange = {this.handleChange}/>
                    </div>
                    <div>
                        <button>Look up a Pokemon</button>                    
                    </div>
                </form>

                <Route exact path="/pokeapi.co" render={ ()=> <h3>Please enter a Pokemon</h3> }/>
                <Route path="/pokeapi.co/:pokeName" component={Pokeapi}/>
            </div>
        )
    }
}

export default Pokeapi