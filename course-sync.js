(()=>{
  const RECOMMENDED=new Set(["C3-00-L02","C3-00-L04","C3-00-L11","C3-02-L03","C3-02-L10","C3-03-L02","C3-03-L03","C3-03-L04","C3-03-L06","C3-03-L07","C3-03-L08","C3-03-L10","C3-03-L12","C3-04-L08","C3-04-L11","C3-05-L01","C3-05-L02","C3-05-L10","C3-05-L11","C3-05-L13","C3-05-L14","C3-06-L01","C3-06-L02","C3-06-L03","C3-06-L04","C3-06-L05","C3-06-L06","C3-06-L08","C3-06-L09","C3-06-L10","C3-06-L11","C3-06-L13","C3-07-L03","C3-07-L04","C3-07-L05","C3-07-L06","C3-07-L07","C3-07-L08","C3-07-L09","C3-07-L10","C3-07-L12","C3-07-L13","C3-07-L14","C3-07-L15"]);
  const status=id=>RECOMMENDED.has(id)?"☑ Recommended visual":"☐ Not required";
  function applyData(){if(typeof COURSE3!=="undefined")COURSE3.forEach(p=>p.lessons.forEach(l=>l.videoStatus=status(l.id)));}
  function decorate(){
    const p=typeof phaseObj==="function"?phaseObj(state.currentPhase):null;if(!p)return;
    document.querySelectorAll("#lessonList .lessonRow").forEach((row,i)=>{
      row.querySelector(".courseVideoStatus")?.remove();const l=p.lessons[i];if(!l)return;
      const el=document.createElement("div");el.className="muted tiny courseVideoStatus";el.textContent=`Video: ${l.videoStatus||status(l.id)}`;
      row.querySelector(".grow")?.appendChild(el);
    });
  }
  function install(){
    applyData();if(state&&state.app!=="DA Mentor Engineering — Data Engineering"){state.app="DA Mentor Engineering — Data Engineering";persist();}
    const style=document.createElement("style");style.textContent=".courseVideoStatus{margin-top:4px;font-weight:650}";document.head.appendChild(style);
    if(typeof render==="function"){const base=render;render=function(){base();decorate()};render();}
    const b=document.getElementById("exportJsonBtn");if(b)b.onclick=()=>download(`DA_Mentor_Engineering_Backup_${todayKey()}.json`,JSON.stringify(state,null,2),"application/json");
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();
