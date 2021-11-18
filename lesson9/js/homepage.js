const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject["towns"];
        let town = ["Preston", "Soda Springs", "Fish Haven"];
        
        towns.forEach((towns) => {
            if (
                towns.name === "Preston" ||
                towns.name === "Soda Springs" ||
                towns.name === "Fish Haven"
            ) {
                let townCard = document.createElement("section");
                let townName = document.createElement("h2");
                let motto = document.createElement("p");
                let yearFounded = document.createElement("p");
                let currentPopulation = document.createElement("p");
                let averageRainfall = document.createElement("p");
                let image = document.createElement("img");
                let townOrder = document.createElement("p");
                
                townName.textContent = `${towns.name}`;
                townCard.appendChild(townName);

                motto.textContent = `${towns.motto}`;
                townCard.appendChild(motto);

                yearFounded.textContent = `Year Founded: ${towns.yearFounded}`;
                townCard.appendChild(yearFounded);

                currentPopulation.textContent = `Population: ${towns.currentPopulation}`;
                townCard.appendChild(currentPopulation);

                averageRainfall.textContent = `Annual Rainfall: ${towns.averageRainfall}`;
                townCard.appendChild(averageRainfall);

                image.setAttribute("src", `images/${towns.photo}`);
                image.setAttribute("alt", `Photo of ${towns.name}`);
                townCard.appendChild(image);
                
                if (towns.name === "Preston") {
                    townCard.setAttribute("id", "town1");
                    townCard.appendChild(townOrder);
                } else if (towns.name === "Soda Springs") {
                    townCard.setAttribute("id", "town2");
                    townCard.appendChild(townOrder);
                } else if (towns.name === "Fish Haven") {
                    townCard.setAttribute("id", "town3");
                    townCard.appendChild(townOrder);
                }
                document.querySelector("div.hometown_cards").appendChild(townCard);
            }
        });
    });