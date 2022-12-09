const buttonSearch = document.getElementById("search");
const soundButton = document.getElementById("sound-button");
var musicOn = true;

soundButton.onclick = () => {
    const music = document.getElementById("pokemon-music");
    const music_text = document.getElementById("text-music");
    if (!musicOn) {
        music.play();
        music_text.innerHTML = "ON";
    } else {
        music.pause();
        music.currentTime = 0;
        music_text.innerHTML = "OFF";
    }
    musicOn = !musicOn;
}

buttonSearch.onclick = () => {
    const pokemonInput = document.getElementById("pokeName-input");
    const pokemon = (pokemonInput.value).toLowerCase();
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const statistics = ["hp", "atk", "def", "spatk", "spdef", "speed"];
    fetch (pokeURL)
        .then (res => {
            if (res.status == 200) {
                return res.json();
            }
            return false;
        })
        .then (data => {
            if (data) {
                let types = "";
                let moves = "";
                let amount = 0;
                let movesCount = data.moves.length;
                if (movesCount > 5) movesCount = 5;
                for (let i = 0; i < data.types.length; i++) {
                    if (i < (data.types.length)-1) {
                        types += data.types[i].type.name + ", ";
                    } else {
                        types += data.types[i].type.name + ".";
                    }
                }
                for (let i = 0; i < movesCount; i ++) {
                    if (i < (movesCount)-1) {
                        moves += data.moves[i].move.name + ", ";
                    } else {
                        moves += data.moves[i].move.name + ".";
                    }
                }
                document.getElementById("nombre").textContent = data.species.name;
                document.getElementById("type").textContent = types;
                document.getElementById("movements").textContent = moves;
                document.getElementById("weight-span").textContent = data.weight;
                document.getElementById("height-span").textContent = data.height;
                putPokeImage(data.sprites.front_default);
                for (let i = 0; i < 6; i++) {
                    let amount = data.stats[i].base_stat;
                    putStatistic(document.getElementById("amount-" + statistics[i]), amount, "rgb(63, 101, 189)");
                    console.log("amount: ", amount, "statistic: " , statistics[i]);
                }
            } else {
                document.getElementById("nombre").textContent = "?";
                document.getElementById("type").textContent = "?";
                document.getElementById("movements").textContent = "?";
                document.getElementById("weight-span").textContent = "?";
                document.getElementById("height-span").textContent = "?";
                putPokeImage("./images/pokebola.png");
                statistics.forEach((element) => {
                    putStatistic(document.getElementById("amount-" + element), 0, "white");
                    console.log("id: ", `amount-${element}`);
                });
            }
        });
}

const putPokeImage = (pokeImage) => {
    const pokemonImage = document.getElementById("pokeimage");
    pokemonImage.src = pokeImage;
}

const putStatistic = (statistic, amount, color) => {
    let boxShadowStyle = "";
    let i = 36;
    amount = amount > 100 ? 100 : amount;
    // console.log("Initial amount: ", (((amount + (10 - amount%10))/10)*4 - 4));
    amount = 40 - (((amount + (10 - amount%10))/10)*4 - 4);
    // console.log("Actual amount: ", amount);
    for (i = 36; i >= amount && i > 0; i -= 4) {
        let shadow  = `0 ${i}px ${color}`;
        if (i > 4) {
            boxShadowStyle += shadow + ", ";
        } else {
            boxShadowStyle += shadow;
        }
    }
    for (i = i; i > 0; i -= 4) {
        let shadow  = `0 ${i}px white`;
        if (i > 4) {
            boxShadowStyle += shadow + ", ";
        } else {
            boxShadowStyle += shadow;
        }
    }
    if (amount == 0) {
        statistic.style.backgroundColor = color;
    } else {
        statistic.style.backgroundColor = "white";
    }
    // console.log(boxShadowStyle);
    statistic.style.boxShadow = boxShadowStyle;
}
