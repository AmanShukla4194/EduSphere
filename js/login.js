// login.js
document.getElementById('loginForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const uname = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  if(uname.length < 4){ showModal('Validation Error', 'Username must be at least 4 characters.'); return; }
  if(!validEmail(email)){ showModal('Validation Error', 'Please enter a valid email address.'); return; }
  // save user
  localStorage.setItem('ed_user', JSON.stringify({username:uname,email}));
  showModal('Login Successful — Welcome to EduSphere!', 'Hello '+uname+' — redirecting to course catalog...', [{label:'Continue', cb:()=>{ hideModal(); location.href='catalog.html'; }}]);
});
document.getElementById('modalOk').addEventListener('click', hideModal);
