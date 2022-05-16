onRequest();
async function onRequest() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=49800de893daf00d2c9e840a061b3efc"
    );
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    printData(data);
  } catch (error) {
    console.log(error);
  }
}

function printData(data) {
  const imgbox = document.getElementById("imgbox");
  const imgbox2 = document.getElementById("imgbox2");
  const imgboxdiv = document.getElementById("imgdiv");
  const posters = getMultipleRandom(data.results, 5);
  console.log(data.results.length);
  for (const poster of posters) {
    const img = document.createElement("img");
    const divon = document.createElement("div");
    divon.classList.add("on");
    img.src = `https://image.tmdb.org/t/p/w500${poster.poster_path}`;

    imgbox2.appendChild(img);
    imgbox.appendChild(imgbox2);
    imgboxdiv.appendChild(divon);
    //console.log(posters);
  }
  carrusel();
}
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
