// catalog.js
const user = JSON.parse(localStorage.getItem('ed_user') || 'null');
if(!user){ location.href = 'index.html'; }
document.getElementById('userBadge').innerText = user ? ('Hello, '+user.username) : '';
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  localStorage.removeItem('ed_user');
  localStorage.removeItem('ed_selected_course');
  location.href = 'index.html';
});

const grid = document.getElementById('coursesGrid');
const cat = document.getElementById('categoryFilter');
const search = document.getElementById('searchInput');

function renderCourses(filter='all', q='') {
  grid.innerHTML = '';
  const list = COURSES.filter(c=>{
    return (filter==='all' || c.category===filter) && (c.title.toLowerCase().includes(q.toLowerCase()) || c.short.toLowerCase().includes(q.toLowerCase()));
  });
  list.forEach(c=>{
    const card = document.createElement('div');
    card.className = 'card course-card';
    card.innerHTML = `<h3 class="course-title">${c.title}</h3>
      <p class="course-desc">${c.short}</p>
      <div class="course-meta"><span>${c.category}</span><div><button class="btn ghost" data-id="${c.id}">View Course</button></div></div>`;
    grid.appendChild(card);
  });
  // attach listeners
  grid.querySelectorAll('button[data-id]').forEach(b=>{
    b.addEventListener('click', ()=>{ localStorage.setItem('ed_selected_course', b.getAttribute('data-id')); location.href='course.html'; });
  });
}

cat.addEventListener('change', ()=>renderCourses(cat.value, search.value));
search.addEventListener('input', ()=>renderCourses(cat.value, search.value));
renderCourses();
