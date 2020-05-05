let list = document.getElementById("series_container");
const series_number = 8;
let serieList = [1, 2, 3, 4];
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
  })
  .catch((err) => {});

function renderMovieGrid(dataArray) {
  dataArray.forEach((element) => {
    let card = `
      <div>
        <h1>${element.title}</h1>
      </div>
     `;
  });
}
