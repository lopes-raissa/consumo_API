'use strict';

const pesquisar = document.getElementById('txtPesquisa');
const btn = document.querySelector('#btnBusca');

function formatar (texto){
    let aux = texto.toLowerCase();
    aux = aux.trim();
    aux = aux.replace(' ', '-');
    return aux
}



const preencherCampos = (data) => {
    
    let imagem = `https://www.vagalume.com.br/${data['artist']['pic_medium']}`;
    document.getElementById('imgArtista').src=imagem;
    
    
    document.getElementById('txtPesquisa').value = data.artist.desc;
    
    document.getElementById('topMusicas0').value = data.artist.toplyrics.item[0].desc;
    document.getElementById('topMusicas1').value = data.artist.toplyrics.item[1].desc;
    document.getElementById('topMusicas2').value = data.artist.toplyrics.item[2].desc;
    document.getElementById('topMusicas3').value = data.artist.toplyrics.item[3].desc;
    document.getElementById('topMusicas4').value = data.artist.toplyrics.item[4].desc;
    document.getElementById('topMusicas5').value = data.artist.toplyrics.item[5].desc;
    document.getElementById('topMusicas6').value = data.artist.toplyrics.item[6].desc; 

    document.getElementById('topAlbuns0').value = data.artist.albums.item[0].desc;
    document.getElementById('topAlbuns1').value = data.artist.albums.item[1].desc;
    document.getElementById('topAlbuns2').value = data.artist.albums.item[2].desc;
    document.getElementById('topAlbuns3').value = data.artist.albums.item[3].desc;
    document.getElementById('topAlbuns4').value = data.artist.albums.item[4].desc;
    document.getElementById('topAlbuns5').value = data.artist.albums.item[5].desc;
    document.getElementById('topAlbuns6').value = data.artist.albums.item[6].desc;
    
    document.getElementById('genero0').value = data.artist.genre[0].name;
    document.getElementById('genero1').value = data.artist.genre[1].name;
    document.getElementById('genero2').value = data.artist.genre[2].name;
    document.getElementById('genero2').value = data.artist.genre[3].name;
    document.getElementById('genero2').value = data.artist.genre[4].name;
    document.getElementById('genero2').value = data.artist.genre[5].name;
    document.getElementById('genero2').value = data.artist.genre[6].name;
       
}

/*CAMPOS*/

const viaLink = (pesquisar) =>{
    pesquisar = formatar(pesquisar);
    const url = `https://www.vagalume.com.br/${pesquisar}/index.js`;
    fetch(url).then(response => response.json())
              .then(data=> preencherCampos(data));
}

const pesquisarCampos = () => {
    viaLink(pesquisar.value);
}

/*EVENTOS*/


btn.addEventListener('click', pesquisarCampos);


