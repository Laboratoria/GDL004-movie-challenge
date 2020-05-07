let moviesPromises = [];
for (let i = 1; i <= 8; i++) {
  let newKey = "";
  let number = i;
  moviesPromises.push(
    fetch(
      `http://www.omdbapi.com/?t=Game of Thrones&Season=${number}&apikey=842dc72`
    )
  );
}

Promise.all(moviesPromises)
  .then((results) => {
    let jsonDataArray = results.map((response) => response.json());

    return Promise.all(jsonDataArray);
  })
  .then((dataArray) => {
    renderMovieGrid(dataArray);

    console.log(dataArray)

  })
  .catch((err) => {});







function renderMovieGrid(dataArray) {

   const readSeries = document.getElementById("temporada");
    readSeries.innerHTML = "";

    const containerTemporada = document.createElement("div");
    containerTemporada.setAttribute("class","containerTemporada");

    dataArray.forEach((element) => {

    console.log(element)
    console.log(element.Title)
    console.log(element.Season)
    console.log(element.Episodes)
    console.log(element.Episodes.length)

    /*
    const imgTemporada = document.createElement("img");
    imgTemporada.setAttribute('src', './imagenesGOT');*/

    const containerTemporada = document.createElement("div");
    containerTemporada.setAttribute("id","containerTemporada");
    containerTemporada.setAttribute("class","series")
    
    const imgElm = document.createElement("img");
    imgElm.setAttribute("src", `./img/seasons-got-0${element.Season}.jpg`);
    imgElm.setAttribute("width", "200");
    imgElm.setAttribute("height", "300");

    const titleContainer = document.createElement("h2")
    const title = document.createTextNode(`${element.Title}`);
    
    titleContainer.appendChild(title)

    const SeasonContainer = document.createElement("h3")
    const season = document.createTextNode("Temporada: " + `${element.Season}`);

    SeasonContainer.appendChild(season)


    const episodesContainer= document.createElement("h4")
    const episodes = document.createTextNode("Número de Episodios: "+`${element.Episodes.length}`);

    episodesContainer.appendChild(episodes)
    containerTemporada.appendChild(imgElm)
    containerTemporada.appendChild(titleContainer)
    containerTemporada.appendChild(SeasonContainer)
    containerTemporada.appendChild(episodesContainer)
    temporada.appendChild(containerTemporada)

  });
};



/*
var contenidoE = document.getElementById('divUno');
let keyArrayE = [];
for(let i = 1; i <= 8; i++){
  let newKeyE = '';
  let numberE = i;
  var keyE = 'http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=842dc72';
  newKeyE = keyE.replace(1, numberE);
  keyArrayE.push(newKeyE);
}
console.log(keyArrayE);
keyArrayE.forEach((item) => {
    fetch(item)
    .then(data => data.json())
    .then(data=>{
          console.log(data)
          // contenido.innerHTML = `${data.totalSeasons}`
      })
});
*/







