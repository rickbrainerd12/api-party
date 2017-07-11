import React, { Component } from 'react'

import './Pokemon.css'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchPokeData(props)  
  }

  fetchPokemonData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.forms.name}`)
      .then(data => data.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchPokemonData(nextProps)
    }
  }

  render() {
    const { pokemon } = this.state
    return (
      <div className="pokemon">
        <img src={pokemon.forms.url} alt="pokemon avatar" />
        <h2>{pokemon.name}</h2>
        <h3>Base XP: {pokemon.base_experience}</h3>
        <h3>height: {pokemon.height}</h3>
        <h3>weight: {pokemon.weight}</h3>
        <a href={pokemon.forms.url} target="_">Link to {pokemon.name}'s profile</a>
      </div>
    )
  }
}
export default Pokemon