export const animals = {
  dolphin: {
    image: "/images/dolphin.jpg",
    facts: [
      "Dolphins have been shown to give distinct names to each other!",
      "Dolphins are known to display their own culture!",
      "Dolphins have two stomachs!",
    ],
  },
  lobster: {
    image: "/images/lobster.jpg",
    facts: [
      "Lobsters taste with their legs!",
      "Lobsters chew with their stomachs!",
      "Lobsters can live as long as 100 years.",
    ],
  },
  starfish: {
    image: "/images/starfish.jpg",
    facts: [
      "Starfish can have up to 40 arms!",
      "Starfish have no brain and no blood!",
      "Starfish can regenerate their own arms!",
    ],
  },
};

const name = ""; 
const title = "Animals Fun Facts";

const images = [];

for (const animal in animals) {
  if (animals.hasOwnProperty(animal)) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
        style={{ width: "150px", height: "150px" }} // Set the width and height
      />
    );
  }
}

const showBackground = true;

export const animalsFacts = (
  <div>
    <h1>{title || "Title Here"}</h1>
    {showBackground && (
      <img className="background" alt="ocean" src="/images/ocean.jpg" />
    )}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const factsArray = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * factsArray.length);
  const funFact = factsArray[randomIndex];

  // Update the content of the 'fact' element
  const factElement = document.getElementById("fact");
  factElement.innerHTML = `Fun Fact about ${animalName}: ${funFact}`;
}
