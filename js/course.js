// course.js
const userCourse = requireLogin();
if(!userCourse) throw '';
const sel = localStorage.getItem('ed_selected_course');
if(!sel){ showModal('No course selected', 'Please select a course from the catalog.', [{label:'Back', cb:()=>{ location.href='catalog.html'; }}]); }
const course = COURSES.find(c=>c.id===sel);
const container = document.getElementById('courseOverview');
container.innerHTML = `<h2>${course.title}</h2>
  <p class="muted">${course.category} • Instructor: ${course.instructor.name}</p>
  <div class="card" style="margin-top:12px">${course.overview}</div>
  <h3 style="margin-top:12px">Instructor</h3>
  <p>${course.instructor.name} — <span class="muted">${course.instructor.bio}</span></p>
  <h3 style="margin-top:12px">Resources</h3>
  <div class="resources">${course.resources.map((r,i)=>'<a class="resource-link" href="'+r+'">Resource '+(i+1)+'</a>').join('')}</div>
  <div class="footer-actions"><button id="startQuiz" class="btn primary">Start Quiz</button></div>
`;
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  localStorage.removeItem('ed_user'); localStorage.removeItem('ed_selected_course'); location.href='index.html';
});
document.getElementById('startQuiz').addEventListener('click', ()=>{ location.href='quiz.html'; });
