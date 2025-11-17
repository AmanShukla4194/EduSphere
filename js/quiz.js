// quiz.js
const u = requireLogin();
if(!u) throw '';
const selCourse = localStorage.getItem('ed_selected_course');
if(!selCourse){ location.href='catalog.html'; }
const questions = QUIZZES[selCourse] || [];
const quizContainer = document.getElementById('quizContainer');

let answers = new Array(questions.length).fill(null);
function renderQuiz(){
  quizContainer.innerHTML = `<h2>Quiz — ${COURSES.find(c=>c.id===selCourse).title}</h2>`;
  questions.forEach((q,i)=>{
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    qDiv.innerHTML = `<strong>Q${i+1}.</strong> ${q.q}`;
    q.options.forEach((opt,j)=>{
      const btn = document.createElement('div');
      btn.className = 'option';
      btn.innerText = opt;
      btn.dataset.q = i; btn.dataset.opt = j;
      btn.addEventListener('click', ()=>{ answers[i]=j; updateSelection(); });
      qDiv.appendChild(btn);
    });
    quizContainer.appendChild(qDiv);
  });
  const footer = document.createElement('div');
  footer.className = 'footer-actions';
  footer.innerHTML = '<button id="submitQuiz" class="btn primary">Submit Quiz</button><button id="backBtn" class="btn ghost">Return to Courses</button>';
  quizContainer.appendChild(footer);
  document.getElementById('submitQuiz').addEventListener('click', submitQuiz);
  document.getElementById('backBtn').addEventListener('click', ()=>{ location.href='catalog.html'; });
  document.getElementById('logoutBtn').addEventListener('click', ()=>{ localStorage.removeItem('ed_user'); localStorage.removeItem('ed_selected_course'); location.href='index.html'; });
}
function updateSelection(){
  document.querySelectorAll('.option').forEach(o=>{
    const qi = +o.dataset.q, oi = +o.dataset.opt;
    if(answers[qi] === oi) o.classList.add('selected'); else o.classList.remove('selected');
  });
}
function submitQuiz(){
  // ensure at least one answered
  if(answers.every(a=>a===null)){ showModal('No answers', 'Please answer at least one question before submitting.'); return; }
  let score = 0;
  const correct = [];
  questions.forEach((q,i)=>{ correct.push(q.a); if(answers[i]===q.a) score++; });
  const pct = Math.round((score/questions.length)*100);
  // build result body
  let body = `<p>Your score: <strong>${score}/${questions.length}</strong> (${pct}%)</p><h3>Answers</h3><ol>`;
  questions.forEach((q,i)=>{
    const userAns = answers[i]===null ? 'No answer' : q.options[answers[i]];
    const correctAns = q.options[q.a];
    body += `<li><strong>${q.q}</strong><br/>Your answer: ${userAns}<br/>Correct: ${correctAns}</li>`;
  });
  body += `</ol>`;
  showModal('Quiz Results', body, [
    {label:'Return to Courses', cb:()=>{ localStorage.removeItem('ed_selected_course'); hideModal(); location.href='catalog.html'; }},
    {label:'Logout', cb:()=>{ localStorage.removeItem('ed_user'); localStorage.removeItem('ed_selected_course'); hideModal(); location.href='index.html'; }}
  ]);
}

renderQuiz();
