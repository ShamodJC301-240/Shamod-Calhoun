//tiny glow on click and demo interactivity
const join = document.getElementById('joinBtn');
join.addEventListener('click', ()=> {
  join.innerText = 'See you there!';
  join.style.boxShadow = '0 14px 40px rgba(255,80,10,0.28)';
  
  // Add confetti or simple emoji burst:
  const burst = document.createElement('div');
  burst.textContent = '🎃👻';
  burst.style.position='fixed';
  burst.style.left='50%';
  burst.style.top='20%';
  burst.style.transform='translateX(-50%)';
  burst.style.fontSize='34px';
  burst.style.zIndex=9999;
  document.body.appendChild(burst);
  setTimeout(()=> burst.remove(), 1400);
});

//toggle menu
function toggleMenu() {
  document.getElementById('menu').classList.toggle('hidden');
}