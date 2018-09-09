/**************************
OBJECTS
11-objects
**************************/

//introduce a complex object below, have them see use of . notation and [] brackets to navigate

var netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo : [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Magazine Profile"},
                { episode: 3, episodeName: "Shots and Salsa"},
                { episode: 4, episodeName: "Mannequin"},
                { episode: 5, episodeName: "Shoplifter"},
                { episode: 6, episodeName: "Secret Shopper"},
                { episode: 7, episodeName: "Color Wars"},
                { episode: 8, episodeName: "Wedding Day Sale"},
                { episode: 9, episodeName: "All-Nighter"},
                { episode: 10, episodeName: "Demotion"},
                { episode: 11, episodeName: "Labor"}
            ]
        }
    },
    season2: {},
    season3: {}
};
/*
How do we access data with objects?  Where arrays used the [value] appended to the end of it, objects use dot notation.
*/

console.log("All data:", netflix); // All data: { id: 9, name: 'Super Store', season1: { seasonInfo: { episodeInfo: [Object] } }, season2: {}, season3: {} }
console.log("Just season info: ", netflix.season1.seasonInfo); // Just season info: { episodeInfo: [{ episode: 1, episodeName: 'Pilot' }, ...]}
console.log("Episode Name: ", netflix.season1.seasonInfo.episodeInfo[4].episodeName); // Shoplifter

/*
Challenge:
Pick an episode to show.
Using dot notation, walk through the netflix object and print off both the episode and the episode name.
*/


// JSON

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      "when": "$(basename).ts"
    },
    "**/*.js.map": {
      "when": "$(basename)"
    }
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {}
}


// Object.keys() and Object.values()

let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs Bunny',
    rabbit2: 'Lola Bunny',
    duck: 'Daffy Duck',
    tDevel: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky Pig'
  },
  monstars: {
    0: 'Bupkus',
    1: 'Bang',
    2: 'Nawt',
    3: 'Pound',
    4: 'Blanko'
  },
  nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

console.log(Object.keys(spaceJam.toonSquad)); // ['human', 'rabbit1', 'rabbit2', ...]
console.log(Object.keys(spaceJam.toonSquad.duck)); // ['0', '1', '2', ... '9'] => (Just gives the index numbers of 'Daffy Duck')
console.log(Object.keys(spaceJam.toonSquad).toString()); // human, rabbit1, rabbit2, ...

let x = '5';
console.log(x)

console.log(Object.values(spaceJam.toonSquad)); // ['Michael Jordan', 'Bugs Bunny', 'Lola Bunny', ...]

// Square Bracket Notation

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
};

console.log(garden.vegetable); // 'zucchini'

let x = 'vegetable';

console.log(garden.x, garden[x]); // undefined 'zucchini' -> show them alternate use of 'vegetable' in brackets

//below, show use of square bracket notation mixed with . notation, and adding properties to objects
let baking = {};
baking['zucchini'] = 'better make some zucchini bread!';
baking.banana = 'banana bread is yummy too!'

console.log(baking['banana'], baking.zucchini);

//the below code shows a complex use of Object.keys, forEach from earlier, fat arrow functions, strict equality, and square bracket notation
//repeat of above object

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
};

let key = 'water';

Object.keys(garden).forEach(g => {
  if (key === g) {
    console.log(garden[key]); // true
  }
})