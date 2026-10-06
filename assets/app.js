const PHONE='918140092255';
const products=[
['Hot Wheels Die-Cast Cars','hotwheels','assets/hotwheels-cars.png','Single cars & assorted models'],
['Hot Wheels Multi-Car Collections','hotwheels','assets/hotwheels-collection.png','Collection packs and themed sets'],
['Hot Wheels Monster Trucks','hotwheels','assets/hotwheels-monster.png','Monster Trucks range'],
['Ride-On Cars & Bikes','rideons','assets/cat-rideons.png','Electric / ride-on vehicles'],
['Remote Control Cars & Trucks','rc','assets/cat-rc.png','RC vehicles and action toys'],
['Board Games — Life','board','assets/cat-boardgames.png','Family classic · check current edition'],
['CATAN','board','assets/cat-boardgames.png','Strategy board game · check stock'],
['Business','board','assets/cat-boardgames.png','Classic family/business game · check stock'],
['Spin Art Maker','creative','assets/spin-art-box.png','Creative maker activity'],
['Colouring World Map','creative','assets/coloring-map.png','Colouring + learning activity'],
['Baby Strollers','baby','assets/baby-strollers.png','Strollers in multiple colours'],
['Dolls & Soft Toys','dolls','assets/cat-dolls.png','Dolls, plush and pretend play'],
['Educational Toys','educational','assets/cat-educational.png','Learning, STEM and activity toys'],
['Outdoor & Sports','outdoor','assets/cat-outdoor.png','Balls, sports and active play'],
['Gaming & Consoles','gaming','assets/cat-gaming.png','Gaming products and accessories'],
['Action & Blasters','action','assets/cat-action.png','Action figures and blaster toys'],
['Gift Ideas','gifts','assets/cat-gifts.png','Birthday and return-gift ideas'],
];
function wa(name){return `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi Mehta Toy World, I am interested in '+name+'. Please share price and availability.')}`}
function card(p){return `<article class="catalog-card"><div class="catalog-img"><img loading="lazy" src="${p[2]}" alt="${p[0]}"></div><div class="catalog-info"><span class="mini-tag">${p[1].replace('hotwheels','HOT WHEELS').replace('rideons','RIDE-ONS').replace('rc','RC').replace('board','BOARD GAMES').replace('creative','CREATIVE').replace('baby','BABY').replace('dolls','DOLLS').replace('educational','EDUCATIONAL').replace('outdoor','OUTDOOR').replace('gaming','GAMING').replace('action','ACTION').replace('gifts','GIFTS')}</span><h3>${p[0]}</h3><p>${p[3]}</p><a class="enquire" href="${wa(p[0])}" target="_blank">Ask price & stock ↗</a></div></article>`}
function render(){const root=document.querySelector('#catalogue');if(!root)return;const q=(document.querySelector('#search')?.value||'').toLowerCase();const c=document.querySelector('#category')?.value||'all';const list=products.filter(p=>(c==='all'||p[1]===c)&&(!q||(p[0]+' '+p[1]+' '+p[3]).toLowerCase().includes(q)));root.innerHTML=list.map(card).join('')||'<div class="empty-state">No matching category found. Try another search or ask us on WhatsApp.</div>'}
document.addEventListener('DOMContentLoaded',()=>{render();document.querySelectorAll('#search,#category').forEach(e=>e?.addEventListener('input',render));const params=new URLSearchParams(location.search);const cat=params.get('cat');if(cat&&document.querySelector('#category')){document.querySelector('#category').value=cat;render()}});
