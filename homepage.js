function initobject(){
    var onerandom = Math.floor(Math.random() * 500)
    const container = document.querySelector('.CollContainerDiv');
    container.style.cssText = "display:flex !important;"
    const Artistcontainer = document.querySelector('.ArtistContainerDiv');
    Artistcontainer.style.cssText = "display:none !important;"
    
    const BtnAsset1 = document.querySelector('#btn_new_page_asset');
    BtnAsset1.style.cssText = "display:none !important;"

    const BtnArtist1 = document.querySelector('#btn_new_page_artist1');
    BtnArtist1.style.cssText = "display:flex !important;"


    const BtnAsset2 = document.querySelector('.Btnnewload')
    BtnAsset2.innerHTML = '<button class="btnnew" id="btn_new_page_asset1" onclick="initobject()">NEW COLLECTION</button>'


    fetch(`https://api.artic.edu/api/v1/artworks?page=${onerandom}&limit=12`).then(response => response.json()).then(data => {
        data.data.forEach(element => {
            if(element.image_id !== null && element.title !== null && element.artist_titles){
                container.innerHTML += `
                <div class="object_card collectionName" data-address="${element.id}">
                    <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg" alt="" class="imgCollection">
                    <div class="text_card">
                        <h3 class ="type" > ${element.artwork_type_title}</h3>
                        <h3 class="collectionName" >Title: ${element.title}</h3>
                        <h3 class="artisteName">By ${element.artist_titles} </h3>
                    </div>
                </div>
            `
            }



            // container.innerHTML += `
            //     <div class="object_card collectionName" data-address="${element.id}">
            //         <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg" alt="" class="imgCollection">
            //         <h3 class="collectionName" >${element.title}</h3>
            //         <h3 class="">${element.artist_titles} </h3>
            //     </div>
            // `
        })
        document.querySelectorAll('.collectionName').forEach(el => {
            el.addEventListener('click', event => {
                loadAssets(el.dataset.address)
                initUser()
                container.style.cssText = "display:none !important;" 
            })
        })
    })
    while (Artistcontainer.firstChild) {
        Artistcontainer.removeChild(Artistcontainer.firstChild);
        }
}
initobject()

function initartist(){
    const BtnAsset2 = document.querySelector('.Btnnewload')
    BtnAsset2.innerHTML = '<button class="btnnew" id="btn_new_page_artist1" onclick="initartist()">NEW ARTIST</button>'

    const Artistcontainer = document.querySelector('.ArtistContainerDiv');
    Artistcontainer.style.cssText = "display:flex !important;"

    const container = document.querySelector('.CollContainerDiv');
    container.style.cssText = "display:none !important;"

    const BtnArtist1 = document.querySelector('#btn_new_page_artist1');
    BtnArtist1.style.cssText = "display:none !important;"

    var random = Math.floor(Math.random() * 100)
    const BtnAsset1 = document.querySelector('#btn_new_page_asset');
    BtnAsset1.style.cssText = "display:flex !important;"
    fetch(`https://api.artic.edu/api/v1/artists?page=${random}&limit=12`).then(response => response.json()).then(data => {
        data.data.forEach(element => {
            if(element.birth_date !== null && element.death_date !== null){
                Artistcontainer.innerHTML += `
                <div class="object_card">
                    <div class="text_card">
                        <h3 class="ArtistName" data-address="${element.id}">${element.title}</h3>
                        <h3>${element.birth_date} - ${element.death_date}</h3>
                    </div>
                </div>
            `
            }
           
            // console.log(element)
        })
        document.querySelectorAll('.ArtistName').forEach(el => {
            el.addEventListener('click', event => {
                loadCollection(el.dataset.address)
                Artistcontainer.style.cssText = "display:none !important;" 
            })
        })
    })
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }
}




// function blabla(pushmoney){
//     const max = (Math.max(...pushmoney));
//     const WinnerContainer = document.querySelector(`#p${max}`);
//     WinnerContainer.style.cssText = "background-color: blue;"
    
// }



// const departMinutes = 0.1
// let temps = departMinutes * 60

// const timerElement = document.getElementById("timer")

// setInterval(() => {
// const header = document.querySelector('header')
//   let minutes = parseInt(temps / 60, 10)
//   let secondes = parseInt(temps % 60, 10)

//   minutes = minutes < 10 ? "Fin des enchères dans 0" + minutes : minutes
//   secondes = secondes < 10 ? " 0" + secondes : secondes

//   timerElement.innerText = `${minutes}:${secondes}`
//   temps = temps <= 0 ? 0 : temps - 1;
//   if (temps === 0){
//     header.style.cssText = "background-color: blue;"
//   }
// }, 1000)
 
