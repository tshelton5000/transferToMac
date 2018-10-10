const url = "https://api.edamam.com/search?q=chicken&app_id=b8109408&app_key=9f53be1601f0baf1e90ed6c7d50ba286";

const butt = document.getElementById('butt');

butt.addEventListener('click', fetchResults);

function fetchResults(e){
  fetch(url)
    .then(function(results){
      return results.json();
    })
    .then(function (json){
      console.log(json);
    })
}