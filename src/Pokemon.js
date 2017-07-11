import React, { Component } from 'react'

import './Pokemon.css'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchPokemonData(props)  
  }

  fetchPokemonData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokeName}`)
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
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return (
      <div className="pokemon">
        <img src={url} alt="pokemon avatar"/>
        <h2>{pokemon.name}</h2>
        <h3>Base XP: {pokemon.base_experience}</h3>
        <h3>height: {pokemon.height}</h3>
        <h3>weight: {pokemon.weight}</h3>

        <a target="_">Link to {pokemon.pokeName}'s profile</a>
      </div>
    )
  }
}
export default Pokemon