const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

// Explain APIs

function fetchSpace(e) {
  e.preventDefault();
  // console.log(e);

  // Explain Fetch and Async Programming
  fetch(baseURL)

    // Explain promises
    .then(function(results){
      return jsonify(results)
    })
    .then(json => {
      console.log(json);

      // Explain callbacks
      displayRockets(json)
    })
    .catch(err => {
      console.log(err);
    })
}

function jsonify(results) {
  return results.json();
}

function displayRockets(json) {
  // console.log('Results:', json);
  let rockets = json.forEach(r => {
    let rocket = document.createElement('li');
    rocket.innerText = r.name;
    spaceShips.appendChild(rocket);
  })
}

