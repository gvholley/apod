

//NASA API
const count = 10;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray =[];

// Get Images from NASA API

async function getNasaPictures() {
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();
    console.log(resultsArray)
  } catch (error) {
    //Catch error here
  }
}

getNasaPictures();


