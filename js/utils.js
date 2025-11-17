// utils.js - helper functions used across pages
function showModal(title, body, actions = [{label:'OK', cb:()=>hideModal()}]) {
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalBody').innerHTML = body;
  const actionsDiv = document.getElementById('modalActions') || document.querySelector('.modal-actions');
  if(actionsDiv){
    actionsDiv.innerHTML = '';
    actions.forEach(a=>{
      const btn = document.createElement('button');
      btn.className = a.className || 'btn primary';
      btn.innerText = a.label;
      btn.onclick = ()=>{ a.cb && a.cb(); };
      actionsDiv.appendChild(btn);
    });
  }
  modal.classList.remove('hidden');
}
function hideModal(){
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}
// basic email regex
function validEmail(e){ return /^\S+@\S+\.\S+$/.test(e); }
function requireLogin(){
  const u = localStorage.getItem('ed_user');
  if(!u){ location.href = 'index.html'; return null; }
  return JSON.parse(u);
}
