const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = dcoument.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

//NASA API
const count = 10;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray =[];

function updateDOM() {

}

// Get Images from NASA API

async function getNasaPictures() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    console.log(resultsArray)
    updateDOM();
  } catch (error) {
    //Catch error here
  }
}

getNasaPictures();


