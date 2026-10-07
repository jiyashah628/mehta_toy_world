const PHONE='918140092255';
const products=[
['Hot Wheels 5-Car Gift Pack','hotwheels','https://www.funcorp.in/cdn/shop/files/71AYmH6FMJL._SL1500.jpg?v=1741698863','Actual product image · check current stock'],
['Hot Wheels Mega-Wrex Monster Truck','hotwheels','https://cdn11.bigcommerce.com/s-cpuexkide6/images/stencil/1280x1280/products/4048/26291/8a678e48-83d5-42ba-9f1a-b9fc3d83e63e__51620.1721680122.jpg?c=2%3Fimbypass%3Don','Monster Trucks range · check current stock'],
['Ride-On Kids Car','rideons','https://fliptoy.in/cdn/shop/products/61cfV1wvvSL._SL1500.jpg?v=1698398819','Battery ride-on category · exact model may vary'],
['Remote Control Car','rc','https://baybee.co.in/cdn/shop/files/001_a13e8b69-e5e6-473b-b8cd-54be881bb60b.jpg?v=1772023209&width=2000','RC vehicle category · exact model may vary'],
['The Game of Life','board','https://www.funcorp.in/cdn/shop/files/E82770791_195166190693_combo_21-S_1200x.jpg?v=1683368277','Family board game · check current edition and stock'],
['CATAN 5th Edition','board','https://bonlavie.com/cdn/shop/files/Catan_1.jpg?v=1769772972&width=416','Strategy board game · check stock'],
['Business India','board','https://mmtoyworld.com/cdn/shop/files/71gvT_1VQZL._SL1500__1.jpg?v=1689839766','Family/business game · check stock'],
['Spin Art Machine','creative','https://www.funcorp.in/cdn/shop/products/funvention_spin_art_machine_-_diy_rotating_color_drop_abstract_painting_stem_learning_kit_2.jpg?v=1675942703','Creative maker activity · check stock'],
['Baby Stroller','baby','https://www.luvlap.com/cdn/shop/files/20097_EliteStroller_Ecom_Frame_1.jpg?v=1774010897&width=416','Stroller category · exact model/colour may vary'],
['Dolls & Soft Toys','dolls','assets/cat-dolls.png','Dolls, plush and pretend play'],
['Educational Toys','educational','assets/cat-educational.png','Learning, STEM and activity toys'],
['Outdoor & Sports','outdoor','assets/cat-outdoor.png','Balls, sports and active play'],
['Gaming & Consoles','gaming','assets/cat-gaming.png','Gaming products and accessories'],
['Action & Blasters','action','assets/cat-action.png','Action figures and blaster toys'],
['Gift Ideas','gifts','assets/cat-gifts.png','Birthday and return-gift ideas'],
];
function wa(name){return `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi Mehta Toy World, I am interested in '+name+'. Please share price and availability.')}`}
function card(p){return `<article class="catalog-card"><div class="catalog-img"><img loading="lazy" src="${p[2]}" alt="${p[0]}"></div><div class="catalog-info"><span class="mini-tag">${p[1].replace('hotwheels','HOT WHEELS').replace('rideons','RIDE-ONS').replace('rc','RC').replace('board','BOARD GAMES').replace('creative','CREATIVE').replace('baby','BABY').replace('dolls','DOLLS').replace('educational','EDUCATIONAL').replace('outdoor','OUTDOOR').replace('gaming','GAMING').replace('action','ACTION').replace('gifts','GIFTS')}</span><h3>${p[0]}</h3><p>${p[3]}</p><a class="enquire" href="${wa(p[0])}" target="_blank" rel="noopener">Ask price & stock ↗</a></div></article>`}
function render(){const root=document.querySelector('#catalogue');if(!root)return;const q=(document.querySelector('#search')?.value||'').toLowerCase();const c=document.querySelector('#category')?.value||'all';const list=products.filter(p=>(c==='all'||p[1]===c)&&(!q||(p[0]+' '+p[1]+' '+p[3]).toLowerCase().includes(q)));root.innerHTML=list.map(card).join('')||'<div class="empty-state">No matching category found. Try another search or ask us on WhatsApp.</div>'}
document.addEventListener('DOMContentLoaded',()=>{render();document.querySelectorAll('#search,#category').forEach(e=>e?.addEventListener('input',render));const params=new URLSearchParams(location.search);const cat=params.get('cat');if(cat&&document.querySelector('#category')){document.querySelector('#category').value=cat;render()}});
