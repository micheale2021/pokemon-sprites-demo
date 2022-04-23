// htttps://raw.githubusercontent.com/PokemonApi/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)

}

const btndark = document.querySelector('#dark');
btndark.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
   
});

const h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    document.h1.style.color = 'white';
});

const btnlight = document.querySelector('#light');
btnlight.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
})
