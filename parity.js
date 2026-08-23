(()=>{
  const NAMES={amoled:'AMOLED Black',midnight:'Midnight',slate:'Slate',forest:'Forest',ocean:'Ocean',ember:'Ember',graphite:'Graphite'};
  const DESC={amoled:'Pure black, lowest glow',midnight:'Deep neutral violet',slate:'Cool professional',forest:'Muted green',ocean:'Muted blue',ember:'Warm restrained',graphite:'Minimal monochrome'};
  const SW={amoled:'linear-gradient(135deg,#000,#202226)',midnight:'linear-gradient(135deg,#080a10,#252a35)',slate:'linear-gradient(135deg,#0c0f13,#2a3139)',forest:'linear-gradient(135deg,#080d0b,#25332c)',ocean:'linear-gradient(135deg,#070c10,#25323a)',ember:'linear-gradient(135deg,#0d0907,#342921)',graphite:'linear-gradient(135deg,#090a0c,#2b2e33)'};

  document.body.classList.add('mentor-modern');
  document.title='DA Mentor Engineering — Course 3';
  const logo=document.querySelector('.brand .logo');if(logo)logo.textContent='⌁';
  const brand=document.querySelector('.brand>div:nth-child(2)');if(brand)brand.innerHTML='DA Mentor Engineering <span>Course 3 • Data Engineering</span>';
  const footer=document.querySelector('footer');if(footer)footer.textContent='DA Mentor Engineering v2.0 • Course 3 • protected competency Gates • restrained depth UI • offline-first';

  function ensureParityState(){
    if(!state.studyTools)state.studyTools={};
    if(state.studyTools.backupEvery===undefined)state.studyTools.backupEvery=7;
    if(state.studyTools.lastBackup===undefined)state.studyTools.lastBackup='';
    if(state.app!=='DA Mentor Engineering')state.app='DA Mentor Engineering';
  }
  ensureParityState();persist();

  const grid=document.querySelector('#themePopover .themeGrid');
  const themeInput=document.getElementById('themeInput');
  if(grid)grid.innerHTML=Object.keys(NAMES).map(k=>`<button type="button" data-eng-theme="${k}"><i class="swatch" style="background:${SW[k]}"></i><span>${NAMES[k]}<small>${DESC[k]}</small></span></button>`).join('');
  if(themeInput)themeInput.innerHTML=Object.entries(NAMES).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  const themeCount=document.querySelector('#themePopover .popoverHead .muted');if(themeCount)themeCount.textContent='7 low-glow themes';

  function syncTheme(){
    const t=state.theme||'midnight';
    document.body.dataset.theme=t;
    const name=document.getElementById('themeName');if(name)name.textContent=NAMES[t]||t;
    if(themeInput)themeInput.value=t;
    document.querySelectorAll('[data-eng-theme]').forEach(b=>b.classList.toggle('active',b.dataset.engTheme===t));
  }
  grid?.addEventListener('click',e=>{const b=e.target.closest('[data-eng-theme]');if(!b)return;state.theme=b.dataset.engTheme;document.getElementById('themePopover')?.classList.remove('show');save();syncTheme()});

  const actions=document.querySelector('.actions');
  let backupBtn=document.getElementById('backupBtn');
  if(actions&&!backupBtn){backupBtn=document.createElement('button');backupBtn.className='btn';backupBtn.id='backupBtn';backupBtn.textContent='💾 Backup';actions.insertBefore(backupBtn,document.getElementById('restoreBtn'))}

  const targetCard=document.getElementById('targetText')?.closest('.card');
  let backupCard=document.getElementById('engineeringBackupStatus');
  if(targetCard&&!backupCard){backupCard=document.createElement('section');backupCard.id='engineeringBackupStatus';backupCard.className='card backupStatusCard';backupCard.innerHTML='<div class="row space"><h2>💾 Backup status</h2><span class="pill" id="backupState">Not exported</span></div><div class="muted tiny backupMeta" id="backupMeta"></div>';targetCard.insertAdjacentElement('afterend',backupCard)}

  const settingsGrid=document.querySelector('#settingsModal .settingsGrid');
  let backupLabel=document.getElementById('backupEveryInput')?.closest('label');
  if(settingsGrid&&!backupLabel){backupLabel=document.createElement('label');backupLabel.innerHTML='Backup reminder<select id="backupEveryInput"><option value="3">Every 3 days</option><option value="7">Every 7 days</option><option value="14">Every 14 days</option></select>';settingsGrid.appendChild(backupLabel)}

  function renderBackupStatus(){
    ensureParityState();
    const meta=document.getElementById('backupMeta'),pill=document.getElementById('backupState');if(!meta||!pill)return;
    if(!state.studyTools.lastBackup){pill.textContent='Not exported';pill.className='pill warn';meta.textContent='Export a JSON backup after your first real Engineering study session.';return}
    const a=new Date(state.studyTools.lastBackup+'T00:00:00'),b=new Date(todayKey()+'T00:00:00'),days=Math.max(0,Math.floor((b-a)/86400000)),due=days>=Math.max(1,+state.studyTools.backupEvery||7);
    pill.textContent=due?'Backup due':'Current';pill.className='pill '+(due?'warn':'ok');meta.textContent=due?`Last backup was ${days} day(s) ago. Create a fresh JSON backup.`:`Last backup: ${state.studyTools.lastBackup}. Reminder every ${state.studyTools.backupEvery} day(s).`;
  }

  function backupNow(){ensureParityState();state.studyTools.lastBackup=todayKey();persist();download(`DA_Mentor_Engineering_Backup_${todayKey()}.json`,JSON.stringify(state,null,2),'application/json');renderBackupStatus()}
  backupBtn?.addEventListener('click',backupNow);
  const jsonBtn=document.getElementById('exportJsonBtn');if(jsonBtn)jsonBtn.onclick=backupNow;

  const lessonsCsv=document.getElementById('exportLessonsCsvBtn');if(lessonsCsv)lessonsCsv.onclick=()=>{const rows=[['Phase','Lesson ID','Lesson Title','Status','Lesson Book','Practice Pack','Review Pack']];COURSE3.forEach(p=>p.lessons.forEach(l=>rows.push([p.id,l.id,l.title,state.lesson[l.id],p.artifacts.lesson,p.artifacts.practice,p.artifacts.review])));download(`DA_Mentor_Engineering_Lessons_${todayKey()}.csv`,toCSV(rows),'text/csv')};
  const evidenceCsv=document.getElementById('exportEvidenceCsvBtn');if(evidenceCsv)evidenceCsv.onclick=()=>{const rows=[['Date','Skill','Type','Strength','Sanitized Evidence'],...state.evidence.map(e=>[e.date,e.skill,e.type,e.strength,e.action])];download(`DA_Mentor_Engineering_Evidence_${todayKey()}.csv`,toCSV(rows),'text/csv')};
  const gatesCsv=document.getElementById('exportGatesCsvBtn');if(gatesCsv)gatesCsv.onclick=()=>{const rows=[['Gate','Attempt','Date','Score','Result','Critical Failures']];COURSE3.forEach(p=>state.phase[p.id].gate.history.forEach(h=>rows.push([p.artifacts.gate,h.attempt,h.date,h.score,h.result,(h.cf||[]).join('|')])));state.finalGate.history.forEach(h=>rows.push(['C3-113',h.attempt,h.date,h.score,h.result,(h.cf||[]).join('|')]));download(`DA_Mentor_Engineering_Gates_${todayKey()}.csv`,toCSV(rows),'text/csv')};

  const stuckBtn=document.getElementById('stuckBtn');
  if(stuckBtn&&!document.getElementById('finishTodayBtn')){const finish=document.createElement('button');finish.className='btn';finish.id='finishTodayBtn';finish.textContent='Finish today';stuckBtn.insertAdjacentElement('afterend',finish);finish.onclick=()=>{const today=todayKey(),mins=(state.studyTools?.focusLog||[]).filter(x=>x.date===today).reduce((n,x)=>n+(+x.minutes||0),0),box=document.getElementById('nextAction');if(box){box.innerHTML=`<b>Close today:</b><br>Mark only work you genuinely completed, write a short Daily Note, leave tomorrow’s first task visible, and record any unresolved weakness in Error & Repair Center.${mins?` You logged ${mins} focus minute(s) today.`:''}`;box.scrollIntoView({behavior:'smooth',block:'center'})}}}

  document.getElementById('settingsBtn')?.addEventListener('click',()=>setTimeout(()=>{ensureParityState();const el=document.getElementById('backupEveryInput');if(el)el.value=String(state.studyTools.backupEvery||7);syncTheme()},0));
  document.getElementById('saveSettingsBtn')?.addEventListener('click',()=>{const el=document.getElementById('backupEveryInput');if(el)state.studyTools.backupEvery=Math.max(1,+el.value||7);persist();renderBackupStatus()});

  const baseRender=render;
  render=function(){ensureParityState();baseRender();syncTheme();renderBackupStatus()};
  render();
})();
