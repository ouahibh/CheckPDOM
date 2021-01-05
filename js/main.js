var PrixT=0;
let taxe=0;
var monttc=0;
const createCard=(title, Prix)=> {
    let all = document.getElementById('ctr');
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let top = document.createElement('div');
    top.setAttribute('class', 'top')
    let titleCard = document.createElement('span')
    titleCard.setAttribute('class', 'title-card')
    titleCard.innerHTML = title
    top.appendChild(titleCard);

    let moin = document.createElement('div')
    moin.innerHTML = '<span>-</span>'
    moin.setAttribute('value', Prix)
    moin.setAttribute('class', 'moin')
    moin.setAttribute('onclick', 'deleteTag(this)')
    top.appendChild(moin);
    card.appendChild(top);

    let messageContainer = document.createElement('div')
    messageContainer.setAttribute('class', 'message-container')

    let img = document.createElement('img')
    img.setAttribute('class', 'img-c')
    img.setAttribute('src', 'img/sam.jpg')
    messageContainer.appendChild(img);
    
    let dprix = document.createElement('div')
    dprix.setAttribute('class','c-prix')
    
    let txtp = document.createElement('span')
    txtp.setAttribute('class','t-prix')
    txtp.innerHTML = 'Prix H.T :    ' + Prix + 'DA'
    
    dprix.appendChild(txtp)
    card.appendChild(messageContainer)
    card.appendChild(dprix);
    all.appendChild(card);
    incremetePrix(Prix);
    tva(taxe);
    calcPrixT(monttc);
    
}

const create=()=>{
    let title = prompt('Marque : ')
    var Prix = prompt('Prix : ')
    createCard(title, Prix);
    
}

const deleteTag=(tag)=>{
    let card = tag
        .parentNode
        .parentNode;
    let p =tag.getAttribute('value');
    let t=tag.getAttribute('valueT');
    
    decremetePrix(p)
    decremeteTaxe(t)
    card.remove()
    
}
const incremetePrix=(PrixU)=>{
    PrixT = Number(PrixT) + Number(PrixU)
    let span = document.getElementById('pTotal');
    span.innerHTML = 'Total H.T :   ' + PrixT + 'Da'
    
}

const decremetePrix=(PrixU)=>{
    
    PrixT = Number(PrixT) - Number(PrixU)
    let span = document.getElementById('pTotal');
    span.innerHTML = 'Total H.T :   ' + PrixT + 'Da'
    
}

const tva=(taxe)=>{
    
    taxe=Number(PrixT)*0.19
    let span = document.getElementById('tva');
    span.innerHTML = 'T.V.A (19%):     ' + taxe + 'Da'
    
}

const decremeteTaxe=(t)=>{
    console.log(t)
    let mt=Number(t)*0.19
    
    taxe = Number(taxe) - Number(mt)
    console.log(mt)
    let span = document.getElementById('tva');
    span.innerHTML = 'T.V.A : ' + taxe + 'Da'
    
}

const calcPrixT=(monttc)=>{
    monttc = Number(PrixT)*1.19
    let spanttc = document.getElementById('ttc');
    spanttc.innerHTML = 'Montant T.T.C : ' + monttc + 'Da'
}

