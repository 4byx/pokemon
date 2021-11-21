const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container')

for (let i = 1; i < 151; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add("pokemon")
    const label = document.createElement('span')
    const newIMG = document.createElement('img')
    newIMG.src = `${baseURL}${i}.png`
    label.innerText = `#${i}`
    newDiv.appendChild(label)
    newDiv.appendChild(newIMG)
    container.appendChild(newDiv)
}