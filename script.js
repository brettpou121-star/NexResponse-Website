const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const chatToggle=document.querySelector('.chat-toggle');
const chatBox=document.querySelector('.chat-box');
const chatClose=document.querySelector('.chat-close');
chatToggle?.addEventListener('click',()=>chatBox.classList.toggle('open'));
chatClose?.addEventListener('click',()=>chatBox.classList.remove('open'));
document.querySelectorAll('.chat-body button').forEach(btn=>btn.addEventListener('click',()=>{
  const topic=btn.dataset.msg;
  const body=document.querySelector('.chat-body');
  const p=document.createElement('p');
  p.innerHTML=`<b>Support Bot:</b> For <b>${topic}</b>, please email <a href="mailto:Brettpayne696@gmail.com?subject=${encodeURIComponent(topic)}">Brettpayne696@gmail.com</a> or open a ticket in our Discord.`;
  body.appendChild(p);
}));
