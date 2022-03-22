// DEMO JOKE APP
import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
