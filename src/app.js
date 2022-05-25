const URL = "https://random.dog/woof.json"

const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");


const fetchData = async(api)=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
}


const getCharacter = async()=> {
const data = await fetchData(URL);

console.log(data);
const carta = document.createElement('div');
const imagen = document.createElement('img');
const video = document.createElement('video');

if (/.(mp4)$/i.test(data.url)) {
    video.setAttribute('src',data.url);
    video.setAttribute('alt',data.fileSizeBytes);
    video.setAttribute('Autoplay',true)
    video.setAttribute('Loop',true);
    video.setAttribute('muted',true);
    carta.appendChild(video);
    contenedor.appendChild(carta);
}
else if (/.(jpg)$/i.test(data.url)) {
    imagen.setAttribute('src',data.url);
    imagen.setAttribute('alt',data.fileSizeBytes);
    carta.appendChild(imagen);
    contenedor.appendChild(carta);
}

carta.setAttribute('class',"cartas");

}

button.addEventListener('click',getCharacter);