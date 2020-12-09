const { default: Axios } = require('axios')

const Jokes = Axios.create({ baseURL: 'https://sv443.net/jokeapi/v2/joke' })

export default Jokes


