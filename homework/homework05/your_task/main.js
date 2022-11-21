const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    
    let trackEndpoint = baseURL + "?";
    trackEndpoint += "q=" + term + "&type=track";
    console.log(trackEndpoint);

    const trackData = await fetch(trackEndpoint).then(response => response.json());
    console.log(trackData);

    console.log(trackData[0].name);

    document.querySelector('#tracks').innerHTML = trackData[0].name;

    const template = `
        <section class="track-item preview">
            <img src="https://i.scdn.co/image/1aacaefb0ef07755e5a155d96ee7f1073063e428">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>Black Swan</h2>
                <p>
                    BTS
                </p>
            </div>
        </section>`;
    
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

        document.querySelector('#tracks').innerHTML = template;
}

async function getAlbums (term) {
    
    let albumEndpoint = baseURL + "?";
    albumEndpoint += "q=" + term + "&type=album";
    console.log(albumEndpoint);

    const albumData = await fetch(albumEndpoint).then(response => response.json());
    console.log(albumData);
    
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    // console.log(artistData);
    console.log(artistData[0].name);
    console.log(artistData[0].image_url)

    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);

    document.querySelector('#artist-section h1').innerHTML = artistData[0].name;
    // document.querySelector('#artist img').innerHTML = src = artistData[0].image_url;
    const html = `<img src="${artistData[0].image_url}" />`;
    document.querySelector('#artist').innerHTML = html;
    console.log(html)
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}