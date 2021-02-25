const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    const pokemonUrl = 'http://pokeapi.co/api/v2/pokemon?limit=151'
    const response = await axios.get(pokemonUrl)
    const pokemon = response.data.results
    
    res.render('pokemon/index', { pokemon: pokemon })
})

module.exports = router