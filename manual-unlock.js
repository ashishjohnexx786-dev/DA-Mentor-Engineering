(()=>{
  const basePhaseUnlocked=phaseUnlocked;
  function ensureManualUnlocks(){if(!state.manualUnlockedPhases||typeof state.manualUnlockedPhases!=='object')state.manualUnlockedPhases={}}
  phaseUnlocked=function(p){ensureManualUnlocks();return basePhaseUnlocked(p)||(entryUnlocked()&&!!state.manualUnlockedPhases[p.id])};
  function renderUnlockUI(){
    ensureManualUnlocks();const p=phaseObj(state.currentPhase),select=$('#phaseSelect');if(!p||!select)return;let btn=$('#engineeringUnlockBtn');if(!btn){btn=document.createElement('button');btn.id='engineeringUnlockBtn';btn.className='btn';select.insertAdjacentElement('afterend',btn)}
    const normal=basePhaseUnlocked(p),manual=!!state.manualUnlockedPhases[p.id];
    if(normal){btn.textContent='Sequence unlocked';btn.disabled=true;btn.title='This phase is already unlocked by normal progression';return}
    if(manual){btn.textContent='🔓 Manually unlocked';btn.disabled=true;btn.title='Earlier phases remain incomplete';return}
    if(!entryUnlocked()){btn.textContent='Course entry required';btn.disabled=true;btn.title='Manual phase unlock never bypasses the Course 2 → Course 3 entry requirement';return}
    btn.textContent='🔓 Unlock anyway';btn.disabled=false;btn.title='Open this phase without marking earlier phases complete';btn.onclick=()=>{if(!confirm(`Unlock ${p.id} — ${p.name} anyway? Earlier unfinished phases will remain incomplete and must be returned to later.`))return;state.manualUnlockedPhases[p.id]=true;persist();render()};
  }
  function init(){const baseRender=render;render=function(){baseRender();renderUnlockUI()};renderUnlockUI()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
