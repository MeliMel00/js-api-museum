
function loadAssets(address, btnartist, btnasset) {
    deletebtn(btnartist, btnasset)
    const AssetContainer = document.querySelector('.AssetContainerDiv')
    AssetContainer.style.display = 'flex'
    const btndiv = document.querySelector('.btndiv')
    btndiv.style.cssText = "display:flex !important;"
    btndiv.innerHTML = '<button onclick="backToHome()" class="btnnew">Back to collections</button>'
    fetch(`https://api.artic.edu/api/v1/artworks/${address}`).then(response => response.json()).then(data => {
        AssetContainer.innerHTML += `
                <div class="object_card_insell">
                    <img src="https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg" alt="" class="imgCollection">
                    
                </div>
                <div class="object_insell_info">
                <h3 class="" >Title: ${data.data.title}</h3>
                <h3 class="Assetdimenion" >${data.data.width} - ${data.data.height}</h3>
                <h3 class="" >Date: ${data.data.date_start}  ${data.data.date_end}</h3>
                <h3 class="" >By ${data.data.artist_titles}</h3>
                </div>
            `
            if (data.data.width !== null && data.data.height !== null){
                const dimension = document.querySelector('.Assetdimenion')
                dimension.style.cssText = "display:none !important;"
            }
    })

}
function loadbtn(){
    const btnartist = document.getElementById('btn_new_page_artist1')
    const btnasset = document.getElementById('btn_new_page_asset')
    btnartist.style.cssText = "display:flex !important;"
    btnasset.style.cssText = "display:flex !important;"
    const BtnAsset2 = document.querySelector('.Btnnewload')
    BtnAsset2.style.cssText = "display:flex !important;"
}
function deletebtn(){
    const btnartist = document.getElementById('btn_new_page_artist1')
    const btnasset = document.getElementById('btn_new_page_asset')
    btnartist.style.cssText = "display:none !important;"
    btnasset.style.cssText = "display:none !important;"

    const BtnAsset2 = document.querySelector('.Btnnewload')
    BtnAsset2.style.cssText = "display:none !important;"
}

function loadCollection(address, btnartist, btnasset) {
    deletebtn(btnartist, btnasset)

    const AssetContainer = document.querySelector('.AssetContainerDiv')
    AssetContainer.style.display = 'flex'

    const btndiv = document.querySelector('.btndiv')
    btndiv.style.cssText = "display:flex !important;"
    btndiv.innerHTML = '<button onclick="backToHome()" class="btnnew">Back to collections</button>'
    fetch(`https://api.artic.edu/api/v1/artists/${address}`).then(response => response.json()).then(data => {
        data.data.artwork_ids.forEach(elements =>{
           fetch(`https://api.artic.edu/api/v1/artworks/${elements}`).then(response => response.json()).then(data => {
                AssetContainer.innerHTML += `
                <div class="object_card"  data-address="${data.data.id}">
                    <img src="https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg" alt="" class="imgCollection">
                    <div class="text_card">
                        <h3 class ="type" > ${data.data.artwork_type_title}</h3>
                        <h3 class="collectionName" >Title: ${data.data.title}</h3>
                        <h3 class="artisteName">By: ${data.data.artist_titles} </h3>
                    </div>
                </div>
                `
            })
        })
    })

}





function initUser() {
    const UserContainer = document.querySelector('.UserContainerDiv')
    UserContainer.style.display = 'flex';
    let str = '';
    var pushmoney = [];
    var random = Math.floor(Math.random() * 100)
    fetch(`https://randomuser.me/api/?page=${random}&results=16&seed=abc`).then(response => response.json()).then(data => {
        data.results.forEach(elements =>{
                i = 0
                i++
                var insertnumb =  Math.floor(Math.random() * 1000)
                pushmoney.push(insertnumb);
                str = str + i;
            UserContainer.innerHTML += `
                <div class="User_card p${insertnumb}" id="p${insertnumb}">
                    <img src="${elements.picture.medium}" alt="" class="imguser">
                    <h3 class="Firstname name${insertnumb}" id="">${elements.name.first}</h3>
                    <h3 class="Lastname">${elements.name.last}</h3>
                    <h3 class="Price">MAX ${insertnumb} $</h3>
                </div>
            `
            
    })
    
    const maxmoney = (Math.max(...pushmoney));
    // const bigbidpersonn = document.getElementById(`p${maxmoney}`);
    const namemaxname = document.querySelector(`.name${maxmoney}`)

    const namemax = namemaxname.textContent;

    const bigbiddiv = document.querySelector('.bigbid')
    bigbiddiv.style.display = 'block'
    bigbiddiv.innerHTML = `The biggest Bid is of ${maxmoney} by ${namemax}`
    })
}

function backToHome(btnartist, btnasset) {
    loadbtn(btnartist, btnasset)
    initobject()
    const container = document.querySelector('.CollContainerDiv');

    const UserContainer = document.querySelector('.UserContainerDiv')
    UserContainer.style.display = 'none'

    const bigbiddiv = document.querySelector('.bigbid')
    bigbiddiv.style.display = 'none'

    const btndiv = document.querySelector('.btndiv')
    btndiv.style.display = 'none'

    const AssetContainer = document.querySelector('.AssetContainerDiv')
    AssetContainer.style.display = 'none'

    while (AssetContainer.firstChild) {
    AssetContainer.removeChild(AssetContainer.firstChild);
    }
    while (UserContainer.firstChild) {
        UserContainer.removeChild(UserContainer.firstChild);
        }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }
}