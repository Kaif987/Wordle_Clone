const words = [
    "hello",
    "board",
    "abide",
    "abode",
    "abort",
    "about",
    "above",
    "abuse",
    "abuts",
    "abyss",
    "cabal",
    "caber",
    "cabin",
    "cable",
    "cacao",
    "cache",
    "cacti",
    "caddy",
    "cadet",
    "cadre",
    "cafes",
    "cabby"
]

const randomWords = () =>{
    return words[Math.floor(Math.random() * words.length)]
}

export {randomWords}



