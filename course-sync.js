(()=>{
  const RECOMMENDED=new Set(["C3-01-L01","C3-01-L02","C3-01-L03","C3-01-L08","C3-01-L09","C3-01-L10","C3-01-L11","C3-02-L01","C3-02-L02","C3-02-L03","C3-02-L12","C3-02-L13","C3-03-L05","C3-03-L06","C3-03-L07","C3-04-L09","C3-05-L03","C3-05-L05","C3-05-L06","C3-05-L09","C3-05-L11","C3-05-L12","C3-06-L10","C3-07-L04","C3-07-L06","C3-07-L07","C3-07-L09","C3-08-L03","C3-09-L13"]);
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
  function loadOptionalVideos(){
    if(!document.querySelector('link[data-optional-videos]')){const l=document.createElement('link');l.rel='stylesheet';l.href='./optional-videos.css';l.dataset.optionalVideos='1';document.head.appendChild(l);}
    if(window.OPTIONAL_VIDEO_MAP){if(!document.querySelector('script[data-optional-video-ui]')){const u=document.createElement('script');u.src='./optional-videos-ui.js';u.dataset.optionalVideoUi='1';document.body.appendChild(u);}return;}
    if(!document.querySelector('script[data-optional-video-map]')){const m=document.createElement('script');m.src='./optional-videos.js';m.dataset.optionalVideoMap='1';m.onload=()=>{if(!document.querySelector('script[data-optional-video-ui]')){const u=document.createElement('script');u.src='./optional-videos-ui.js';u.dataset.optionalVideoUi='1';document.body.appendChild(u);}};document.body.appendChild(m);}
  }
  function install(){
    applyData();if(state&&state.app!=="DA Mentor Engineering — Data Engineering"){state.app="DA Mentor Engineering — Data Engineering";persist();}
    const style=document.createElement("style");style.textContent=".courseVideoStatus{margin-top:4px;font-weight:650}";document.head.appendChild(style);
    if(typeof render==="function"){const base=render;render=function(){base();decorate()};render();}
    const b=document.getElementById("exportJsonBtn");if(b)b.onclick=()=>download(`DA_Mentor_Engineering_Backup_${todayKey()}.json`,JSON.stringify(state,null,2),"application/json");
    loadOptionalVideos();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();
