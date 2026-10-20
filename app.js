const root=document.getElementById('app');
const KEY='team-tool-intelligence-v2';
const state=JSON.parse(localStorage.getItem(KEY)||'{}');
state.statuses=state.statuses||{};
state.starred=state.starred||{};
function isStarred(u){return !!state.starred[u.id];}
let page='overview'; let filter='All'; let dateFilter='All'; let search=''; let notifOpen=false; let starredOnly=false;
// Where the real scan runs. Update this if the repo is renamed/moved.
const GITHUB_REPO='pinganto/Tools-Intelligence';
const ACTIONS_URL=`https://github.com/${GITHUB_REPO}/actions/workflows/scan.yml`;
// Fill this in once the Google Form from INBOX_SETUP.md exists.
const SUBMIT_FORM_URL='https://forms.gle/m3grLP4v8GTp2NNu7';
function sundayMidnightOnOrBefore(d){const nd=new Date(d);nd.setHours(0,0,0,0);nd.setDate(nd.getDate()-nd.getDay());return nd;}
function nextSundayAfter(d){const nd=sundayMidnightOnOrBefore(d);nd.setDate(nd.getDate()+7);return nd;}
const cats=['All',...new Set(TOOLS.map(t=>t.category))];
function prettyDate(d){if(d==='All')return d;const [y,m,day]=d.split('-');return `${m}/${day}/${y}`;}
function inDateRange(u){if(!dateFilter||dateFilter==='All')return true;const [start,end]=dateFilter.split('|');return u.date>=start&&u.date<=end;}
function dateLabel(){if(!dateFilter||dateFilter==='All')return 'All dates';const [start,end]=dateFilter.split('|');return start===end?prettyDate(start):`${prettyDate(start)} – ${prettyDate(end)}`;}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function status(u){return state.statuses[u.id]||(u.reliability==='Reliable'?'Verified':'Needs Review');}
const TOOL_LOGOS={GWI:'gwi.com',Tubular:'tubularlabs.com',Statista:'statista.com',Brandwatch:'brandwatch.com',Meltwater:'meltwater.com',CreatorIQ:'creatoriq.com',ListenFirst:'listenfirstmedia.com',Semrush:'semrush.com',Mintel:'mintel.com',Julius:'juliusworks.com',Siftsy:'siftsy.com',ChatGPT:'chatgpt.com',Slack:'slack.com',VwD:'vwd.ai',Sprinklr:'sprinklr.com'};
const TOOL_LOGINS={GWI:'https://signin.globalwebindex.com/',Tubular:'https://app.tubularlabs.com/',Statista:'https://login.statista.com/u/login/identifier?ui_locales=en',Brandwatch:'https://app.brandwatch.com/',Meltwater:'https://www.meltwater.com/en/login',CreatorIQ:'https://app.creatoriq.com/',ListenFirst:'https://app.listenfirstmedia.com/',Semrush:'https://www.semrush.com/login/',Mintel:'https://clients.mintel.com/',Julius:'https://app.juliusworks.com/login',Siftsy:'https://app.siftsy.com/',ChatGPT:'https://chatgpt.com/auth/login/',Slack:'https://slack.com/signin',VwD:'https://app.vwd.ai/',Sprinklr:'https://app.sprinklr.com/'};
function logo(tool){const domain=TOOL_LOGOS[tool];return domain?`<img class="tool-logo" src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" alt="${esc(tool)} logo" loading="lazy">`:'';}
function toolLogin(tool){return TOOL_LOGINS[tool]||`https://${TOOL_LOGOS[tool]}/`;}
function toolLoginLabel(tool){return 'Open login ↗';}
function filtered(){return UPDATES.filter(u=>(filter==='All'||u.category===filter)&&inDateRange(u)&&(!starredOnly||isStarred(u))&&(!search||`${u.tool} ${u.category} ${u.title} ${u.summary} ${u.impact} ${u.overlap.join(' ')}`.toLowerCase().includes(search.toLowerCase()))).sort((a,b)=>b.date.localeCompare(a.date))}
function nav(){return `<aside><div class="brand">THE·TEAM<span>TOOL INTELLIGENCE</span><em>by Fitz 🥸</em></div><button class="nav ${page==='overview'?'on':''}" data-page="overview">Overview</button><button class="nav ${page==='updates'?'on':''}" data-page="updates">Updates</button><button class="nav ${page==='trending'?'on':''}" data-page="trending">Trending</button><button class="nav ${page==='issues'?'on':''}" data-page="issues">Issues</button><button class="nav ${page==='tools'?'on':''}" data-page="tools">Tools</button><button class="nav ${page==='report'?'on':''}" data-page="report">Executive Brief</button><button class="nav ${page==='monthlyPptx'?'on':''}" data-page="monthlyPptx">Monthly PPTX</button><a class="nav submit-link" href="${SUBMIT_FORM_URL}" target="_blank" rel="noopener">＋ Submit an update</a><div class="side-foot">September 2026<br><span>15 tools monitored</span></div></aside>`}
function header(title,sub,mode){mode=mode||'scan';let right='';if(mode==='scan'){const meta=typeof SCAN_META!=='undefined'?SCAN_META:null;const last=meta&&meta.lastRun?new Date(meta.lastRun):null;const lastText=last&&!Number.isNaN(last.getTime())?last.toLocaleString(navigator.language,{weekday:'long',month:'long',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'}):'Never';const runTypeText=meta&&meta.runType?meta.runType.toLowerCase():'';const lastLine=last?`Last scanned ${lastText}${runTypeText?` — ${runTypeText}`:''}`:'Never scanned yet — the automated scan runs on GitHub Actions';const next=nextSundayAfter(new Date());const nextText=next.toLocaleString(navigator.language,{weekday:'long',month:'long',day:'numeric',year:'numeric'});right=`<div class="scan-wrap"><a id="scan" class="primary" href="${ACTIONS_URL}" target="_blank" rel="noopener">↻ Run monitoring scan on GitHub ↗</a><span class="last-scan">${lastLine}</span><span class="next-scan">Next automatic scan: ${nextText} at 12:00 AM UTC · manual run opens GitHub Actions, click "Run workflow" there, then refresh this page once it finishes</span></div>`;}else if(mode==='export'){right=`<div class="scan-wrap"><button id="exportPdf" class="primary">⬇ Export PDF</button><span class="last-scan">Generated ${fullDate(new Date())}</span></div>`;}else if(mode==='pptx'){right=`<div class="scan-wrap"><button id="generatePptx" class="primary">⬇ Generate PowerPoint</button><span class="last-scan" id="pptxStatus">Builds a .pptx of the last 30 days</span></div>`;}return `<header><div><h1>${title}</h1><p>${sub}</p></div>${right}</header>`}
function reliabilityFlag(u){return u.reliability==='Flagged'?'<span class="reliability-flag" title="Unverified source — review before acting">⚠ Unverified source</span>':'';}
function submittedBadge(u){if(!u.submitted)return '';return u.submitted.isTeam?`<span class="submitted-badge team" title="Submitted by a team member">★ Submitted by ${esc(u.submitted.firstName)}</span>`:'<span class="submitted-badge community" title="Submitted via the public inbox">✉ Community submission</span>';}
function notifications(){return typeof NOTIFICATIONS!=='undefined'?NOTIFICATIONS:[];}
function lastSeenNotif(){return state.lastSeenNotif||null;}
function unreadNotifCount(){const seen=lastSeenNotif();return notifications().filter(n=>!seen||n.date>seen).length;}
function notifTimeAgo(iso){const d=new Date(iso);const diffMs=Date.now()-d.getTime();const mins=Math.round(diffMs/60000);if(mins<1)return 'just now';if(mins<60)return `${mins}m ago`;const hrs=Math.round(mins/60);if(hrs<24)return `${hrs}h ago`;const days=Math.round(hrs/24);return `${days}d ago`;}
function notifIcon(type){return type==='update'?'🆕':type==='trending'?'📈':type==='issue'?'⚠':'✉';}
function notifPanel(){const list=notifications();const body=list.length?list.map(n=>`<button class="notif-item" data-notif-target='${esc(JSON.stringify(n.target))}'><span class="notif-icon">${notifIcon(n.type)}</span><span class="notif-body"><span class="notif-text">${esc(n.text)}</span><span class="notif-meta">${n.source==='inbox'?'Inbox':(n.runType||'Scan')} · ${notifTimeAgo(n.date)}</span></span></button>`).join(''):'<div class="notif-empty">No updates in the last 2 weeks.</div>';return `<div class="notif-panel"><div class="notif-panel-head"><b>Updates</b><span>Last 2 weeks</span></div><div class="notif-list">${body}</div></div>`}
function notifBell(){const count=unreadNotifCount();return `<div class="notif-wrap"><button id="notifBell" class="bell-btn" title="Recent updates">🔔${count?`<span class="bell-badge">${count>99?'99+':count}</span>`:''}</button>${notifOpen?notifPanel():''}</div>`}
function starBtn(u,cls){return `<button class="${cls} ${isStarred(u)?'on':''}" data-star="${u.id}" title="${isStarred(u)?'Unstar':'Star as important'}">${isStarred(u)?'★':'☆'}</button>`}
function cards(){let arr=filtered();return `<div class="cards">${arr.map(u=>`<article class="card ${u.submitted?(u.submitted.isTeam?'card-team-submitted':'card-community-submitted'):''}" data-id="${u.id}">${starBtn(u,'star-btn')}<div class="row"><span class="tag">${esc(u.category)}</span><span class="priority ${u.priority.toLowerCase()}">${u.priority}</span></div><h3 class="tool-title">${logo(u.tool)}<span>${esc(u.tool)}</span></h3><h2>${esc(u.title)}</h2><p>${esc(u.summary)}</p>${submittedBadge(u)}${reliabilityFlag(u)}<div class="meta"><span>${prettyDate(u.date)}</span><span class="status ${status(u).toLowerCase().replaceAll(' ','-')}">${status(u)}</span></div></article>`).join('')}</div>`}
function overview(){let hi=UPDATES.filter(u=>u.priority==='High').length;let needsReview=UPDATES.filter(u=>status(u)==='Needs Review').length; return header('Tool Intelligence','A working view of tool changes, capability overlap, and review status')+`<section class="stats"><div><b>15</b><span>Tools monitored</span></div><div><b>${UPDATES.length}</b><span>Updates tracked</span></div><div><b>${hi}</b><span>High priority</span></div><div><b>${needsReview}</b><span>Needs review</span></div></section><section class="panel"><div class="panel-head"><div><h2>Priority Updates</h2><p>Click an update to review the intelligence brief.</p></div><div class="filters">${cats.slice(0,7).map(c=>`<button class="filter ${filter===c?'sel':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div></div>${cards()}</section>`}
function updates(){let range=dateFilter==='All'?['','']:dateFilter.split('|');return header('Updates','Review the latest seeded monitoring results and triage them')+`<div class="toolbar"><input id="search" value="${esc(search)}" placeholder="Search tools or updates…"><select id="cat">${cats.map(c=>`<option ${filter===c?'selected':''}>${esc(c)}</option>`).join('')}</select><button id="starredToggle" class="filter ${starredOnly?'sel':''}">${starredOnly?'★':'☆'} Starred only</button><div class="date-filter"><button id="dateBtn" class="date-btn">▣ ${dateLabel()}</button><div id="datePopover" class="date-popover"><div><label>From</label><input type="date" id="dateStart" value="${range[0]||''}"></div><div><label>To</label><input type="date" id="dateEnd" value="${range[1]||''}"></div><div class="date-actions"><button id="dateClear">Clear</button><button id="dateApply" class="primary">Apply</button></div></div></div></div><section class="panel">${cards()}</section>`}
function tools(){const groups={};TOOLS.forEach(t=>(groups[t.category]||(groups[t.category]=[])).push(t));const banterCanvas=`<section class="panel banter-canvas"><a class="primary" href="https://the-team.enterprise.slack.com/docs/T025Q1P43/F059DPEJA94" target="_blank" rel="noopener">Logins from Banter Canvas (Click ONLY IF you're with the Analytics 🥸)</a><p>This links to a Slack channel canvas, so it'll only actually open for people who already have access to that channel — everyone else will just hit a Slack sign-in/access wall.</p></section>`;return header('Tool Registry','Click any tool to open its login page','plain')+banterCanvas+Object.entries(groups).map(([category,items])=>`<section class="panel tool-category-panel"><div class="category-head"><h2>${esc(category)}</h2><span>${items.length} tool${items.length===1?'':'s'}</span></div><div class="tool-grid">${items.map(t=>`<a class="tool" href="${toolLogin(t.name)}" target="_blank" rel="noopener" title="Open ${esc(t.name)} login"><div class="tool-name">${logo(t.name)}<span>${esc(t.name)}</span><span class="login-arrow">↗</span></div><div class="tool-category">${esc(t.category)}</div><small>Owner · ${esc(t.owner)} · ${esc(t.status)}</small><div class="tool-login">${toolLoginLabel(t.name)}</div></a>`).join('')}</div></section>`).join('')}
function report(){
const trendCutoff=new Date();trendCutoff.setHours(0,0,0,0);trendCutoff.setDate(trendCutoff.getDate()-28);
const trendItems=TRENDING.filter(t=>parseLocalDate(t.date)>=trendCutoff).sort((a,b)=>a.rank-b.rank).slice(0,10);
const highPriority=UPDATES.filter(u=>u.priority==='High').sort((a,b)=>b.date.localeCompare(a.date));
let overlap={};UPDATES.forEach(u=>u.overlap.forEach(x=>overlap[x]=(overlap[x]||0)+1));
let top=Object.entries(overlap).sort((a,b)=>b[1]-a[1]).slice(0,6);
const toolGroups={};TOOLS.forEach(t=>(toolGroups[t.category]||(toolGroups[t.category]=[])).push(t.name));
const issueItems=issuesInWindow();
const sourceLine=(label,url)=>`<div class="report-source"><span>${esc(label)} · </span><a href="${url}" target="_blank" rel="noopener">${esc(url)}</a></div>`;
const reportItem=(head,tag,date,body,label,url,logoHtml)=>`<div class="report-item"><div class="report-item-head">${logoHtml||''}<b>${esc(head)}</b><span class="tag">${esc(tag)}</span><span class="report-item-date">${prettyDate(date)}</span></div><p>${esc(body)}</p>${sourceLine(label,url)}</div>`;
return header('Executive Brief','A shareable snapshot of tool intelligence — export as PDF to distribute across teams without sharing dashboard access','export')
+`<section class="panel report-block">
  <h2>Executive summary</h2>
  <p>AI-assisted research, social intelligence and workflow automation remain the dominant themes across monitored tools this period. The strongest strategic question is where point-tool functionality is beginning to converge with general-purpose AI. This brief consolidates the highest-priority updates, the top trending tool releases, and the current tool registry into one document for sharing outside this dashboard.</p>
</section>
<section class="panel report-block">
  <h2>High-priority updates (${highPriority.length})</h2>
  ${highPriority.length?highPriority.map(u=>reportItem(u.tool,u.category,u.date,u.title,u.sourceType,u.source,logo(u.tool))).join(''):'<p>No high-priority updates in the current data set.</p>'}
</section>
<section class="panel report-block">
  <h2>Trending this period (top ${trendItems.length})</h2>
  ${trendItems.length?trendItems.map(t=>reportItem(`#${t.rank} ${t.name}`,t.category,t.date,t.summary,t.sourceType,t.source)).join(''):'<p>No trending items in the current 4-week window.</p>'}
</section>
<section class="panel report-block">
  <h2>Issues &amp; complaints (top ${issueItems.length})</h2>
  ${issueItems.length?issueItems.map(i=>reportItem(`${i.tool}${i.monitored?'':' (not a monitored tool)'}`,i.category,i.date,`${i.title} — ${i.summary}`,i.sourceType,i.source)).join(''):'<p>No issues reported in the current 4-week window.</p>'}
</section>
<section class="panel report-block">
  <h2>Capability overlap themes</h2>
  ${top.map(([k,v])=>`<div class="bar"><span>${esc(k)}</span><b>${v}</b></div>`).join('')}
</section>
<section class="panel report-block">
  <h2>Tool registry (${TOOLS.length} tools monitored)</h2>
  ${Object.entries(toolGroups).map(([cat,names])=>`<div class="report-tool-group"><b>${esc(cat)}</b><span>${names.map(esc).join(', ')}</span></div>`).join('')}
</section>
<section class="panel report-block">
  <h2>Recommended actions</h2>
  <ol><li>Verify the highest-priority updates before circulating externally.</li><li>Map overlapping capabilities to existing workflows and licenses.</li><li>Identify 2–3 tools where AI functionality could change the current stack.</li><li>Keep source URLs and confidence levels attached to each intelligence record.</li></ol>
</section>`}
function fullDate(d){return d.toLocaleString(navigator.language,{month:'long',day:'numeric',year:'numeric'});}
function parseLocalDate(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d);}
function trending(){const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-28);const inWindow=TRENDING.filter(t=>parseLocalDate(t.date)>=cutoff).sort((a,b)=>a.rank-b.rank).slice(0,10);const top3=inWindow.slice(0,3);const rest=inWindow.slice(3);const sub=`Top ${inWindow.length} tool releases from the past 4 weeks (since ${fullDate(cutoff)}) — refreshed weekly, last refreshed ${fullDate(parseLocalDate(TRENDING_REFRESHED_AT))}`;const featured=t=>`<a class="trend-featured" data-trend-name="${esc(t.name)}" href="${t.source}" target="_blank" rel="noopener"><span class="trend-rank">#${t.rank}</span><span class="tag">${esc(t.category)}</span><h3>${esc(t.name)}</h3><p>${esc(t.summary)}</p><div class="trend-meta"><span>${prettyDate(t.date)}</span><span class="trend-source">${esc(t.sourceType)} · View source ↗</span></div></a>`;const row=t=>`<a class="trend-row" data-trend-name="${esc(t.name)}" href="${t.source}" target="_blank" rel="noopener"><span class="trend-rank small">#${t.rank}</span><div class="trend-row-body"><div class="trend-row-head"><b>${esc(t.name)}</b><span class="tag">${esc(t.category)}</span><span class="trend-row-date">${prettyDate(t.date)}</span></div><p>${esc(t.summary)}</p></div><span class="trend-row-link">${esc(t.sourceType)} · View source ↗</span></a>`;return header('Trending',sub,'plain')+`<section class="trend-top3">${top3.map(featured).join('')}</section><section class="panel"><div class="panel-head"><div><h2>Also trending</h2><p>All linked to their source.</p></div></div><div class="trend-list">${rest.map(row).join('')}</div></section>`}
function issuesInWindow(){const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-28);return ISSUES.filter(i=>parseLocalDate(i.date)>=cutoff).sort((a,b)=>a.rank-b.rank).slice(0,10);}
function issueBadge(i){return i.monitored?'<span class="tag monitored">Monitored tool</span>':'<span class="tag other">Widely discussed</span>';}
function issues(){const inWindow=issuesInWindow();const top3=inWindow.slice(0,3);const rest=inWindow.slice(3);const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-28);const sub=`Top ${inWindow.length} tool issues and complaints from the past 4 weeks (since ${fullDate(cutoff)}) — monitored tools prioritized, other widely-discussed tools included — refreshed weekly, last refreshed ${fullDate(parseLocalDate(ISSUES_REFRESHED_AT))}`;const featured=i=>`<a class="trend-featured" data-issue-key="${esc(i.tool)}|${esc(i.title)}" href="${i.source}" target="_blank" rel="noopener"><span class="trend-rank">#${i.rank}</span><span class="tag">${esc(i.category)}</span>${issueBadge(i)}<h3>${esc(i.tool)} — ${esc(i.title)}</h3><p>${esc(i.summary)}</p><div class="trend-meta"><span>${prettyDate(i.date)}</span><span class="trend-source">${esc(i.sourceType)} · View source ↗</span></div></a>`;const row=i=>`<a class="trend-row" data-issue-key="${esc(i.tool)}|${esc(i.title)}" href="${i.source}" target="_blank" rel="noopener"><span class="trend-rank small">#${i.rank}</span><div class="trend-row-body"><div class="trend-row-head"><b>${esc(i.tool)}</b><span class="tag">${esc(i.category)}</span>${issueBadge(i)}<span class="trend-row-date">${prettyDate(i.date)}</span></div><p><b>${esc(i.title)}</b> — ${esc(i.summary)}</p></div><span class="trend-row-link">${esc(i.sourceType)} · View source ↗</span></a>`;return header('Issues',sub,'plain')+`<section class="trend-top3">${top3.map(featured).join('')}</section><section class="panel"><div class="panel-head"><div><h2>Also reported</h2><p>All linked to their source.</p></div></div><div class="trend-list">${rest.map(row).join('')}</div></section>`}
// ---------- Monthly PPTX report ----------
// Design modeled on a reference deck the user uses for this exact monthly
// report: cream background, bold "Play" headline font, one slide per tool
// with news this month, 3-column WHAT CHANGED / WORKFLOW SHIFT / NEW OUTCOME
// layout, a highlighted row for standout items, and a summary callout bar.
// Colors cycle through a fixed palette rather than matching the original
// exactly — the user only asked for the layout/structure to match, not colors.
const PPTX_PALETTE=[
  {accent:'C4518A',light:'FBEAF1'},{accent:'E25D52',light:'FBEAE8'},{accent:'0E8F8A',light:'E7F5F4'},
  {accent:'6757D6',light:'EEEBFA'},{accent:'1E3A5F',light:'E8EDF2'},{accent:'D79A2B',light:'FAF0DD'},
  {accent:'2E73B8',light:'E8F0F8'},{accent:'5E8F65',light:'EDF4EE'},{accent:'2563EB',light:'E8EFFD'},{accent:'6D7276',light:'EFEFEE'}
];
const PPTX_BG='F7F6F2',PPTX_INK='171A1C',PPTX_GRAY='6D7276',PPTX_LINE='E4E2DC';
const PPTX_TITLE_FONT='Play',PPTX_BODY_FONT='Arial';

function pptxWindowUpdates(){const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-30);return UPDATES.filter(u=>parseLocalDate(u.date)>=cutoff).sort((a,b)=>b.date.localeCompare(a.date));}
function pptxGroupByTool(items){const byTool={};items.forEach(u=>(byTool[u.tool]=byTool[u.tool]||[]).push(u));return byTool;}

function monthlyPptxPage(){
  const items=pptxWindowUpdates();
  const byTool=pptxGroupByTool(items);
  const toolNames=Object.keys(byTool);
  const monthLabel=new Date().toLocaleString(navigator.language,{month:'long',year:'numeric'});
  const body=toolNames.length?toolNames.map(t=>{const list=byTool[t];return `<div class="report-tool-group"><b>${esc(t)}</b><span>${list.map(u=>esc(u.title)).join(' · ')}</span></div>`}).join(''):'<p>No updates in the last 30 days — nothing to put in this month\'s deck yet.</p>';
  return header('Monthly PPTX',`Generates a ${esc(monthLabel)} PowerPoint report, one slide per tool with news in the last 30 days, in the same layout as THE·TEAM's monthly deck`,'pptx')
  +`<section class="panel report-block"><h2>Will include (${toolNames.length} tool${toolNames.length===1?'':'s'}, ${items.length} update${items.length===1?'':'s'})</h2>${body}</section>`;
}

function pptxAddFooter(slide,deckTitleFooter,pageNum){
  slide.addShape('line',{x:0.3,y:7.05,w:12.73,h:0,line:{color:PPTX_LINE,width:0.75}});
  slide.addText(deckTitleFooter,{x:0.3,y:7.1,w:6,h:0.3,fontFace:PPTX_BODY_FONT,fontSize:9,color:PPTX_GRAY,isTextBox:true});
  slide.addText(String(pageNum),{x:12.3,y:7.1,w:0.7,h:0.3,align:'right',fontFace:PPTX_BODY_FONT,fontSize:9,color:PPTX_GRAY,isTextBox:true});
}

async function generateMonthlyPptx(){
  const PptxCtor=window.PptxGenJS||window.pptxgen;
  if(!PptxCtor){alert('PowerPoint library failed to load — check your internet connection and try again.');return}
  const items=pptxWindowUpdates();
  const byTool=pptxGroupByTool(items);
  const toolNames=Object.keys(byTool);
  const toolsByName=Object.fromEntries(TOOLS.map(t=>[t.name,t]));
  const monthLabel=new Date().toLocaleString(navigator.language,{month:'long',year:'numeric'});
  const deckTitleFooter=`${monthLabel} Platform Updates`;

  const pres=new PptxCtor();
  pres.layout='LAYOUT_WIDE';

  const titleSlide=pres.addSlide();
  titleSlide.background={color:PPTX_BG};
  titleSlide.addText(deckTitleFooter,{x:0.6,y:1.0,w:10,h:1.8,fontFace:PPTX_TITLE_FONT,fontSize:40,bold:true,color:PPTX_INK,isTextBox:true,lineSpacing:44});
  titleSlide.addShape('line',{x:0.62,y:2.65,w:3.2,h:0,line:{color:'2563EB',width:3}});
  pptxAddFooter(titleSlide,deckTitleFooter,1);

  let pageNum=2;
  toolNames.forEach((toolName,idx)=>{
    const allItems=byTool[toolName].sort((a,b)=>(b.priority==='High')-(a.priority==='High'));
    const headerY=2.15,rowGap=0.18,rowsStartY=headerY+0.55,rowsMaxEndY=5.9; // leaves room for the callout bar + footer below
    let fitY=rowsStartY;const shown=[];
    for(const u of allItems){
      const estLines=Math.ceil(((u.summary||'').length)/48)+1;
      const rowH=Math.max(0.9,estLines*0.22+0.3);
      if(fitY+rowH>rowsMaxEndY&&shown.length>0)break; // always show at least one row even if it's long
      shown.push(u);fitY+=rowH+rowGap;
    }
    const overflow=allItems.length-shown.length;
    const tool=toolsByName[toolName]||{category:shown[0].category};
    const {accent,light}=PPTX_PALETTE[idx%PPTX_PALETTE.length];

    const slide=pres.addSlide();
    slide.background={color:PPTX_BG};

    slide.addText(`${toolName} — ${allItems.length} update${allItems.length>1?'s':''} this month`,{x:0.6,y:0.25,w:11.5,h:0.9,fontFace:PPTX_TITLE_FONT,fontSize:24,bold:true,color:PPTX_INK,isTextBox:true});
    const headline=shown.map(u=>u.title).join(' + ')+'.';
    slide.addText(headline,{x:0.6,y:0.95,w:9,h:0.4,fontFace:PPTX_BODY_FONT,fontSize:13,color:PPTX_GRAY,isTextBox:true});

    if(shown[0]&&shown[0].source){
      slide.addText('View source ↗',{x:10.3,y:0.3,w:2.4,h:0.3,align:'right',fontFace:PPTX_BODY_FONT,fontSize:11,color:'2563EB',underline:true,isTextBox:true,hyperlink:{url:shown[0].source}});
    }

    slide.addShape('roundRect',{x:0.6,y:1.45,w:2.6,h:0.42,rectRadius:0.21,fill:{color:light},line:{color:accent,width:1}});
    slide.addText((tool.category||'').toUpperCase(),{x:0.6,y:1.45,w:2.6,h:0.42,align:'center',valign:'middle',fontFace:PPTX_BODY_FONT,fontSize:10,bold:true,color:accent,isTextBox:true});

    const colX=[0.6,4.9,9.1],colW=[4.1,4.0,3.6];
    ['WHAT CHANGED','WORKFLOW SHIFT','NEW OUTCOME / NOW POSSIBLE'].forEach((h,i)=>{
      slide.addText(h,{x:colX[i],y:headerY,w:colW[i],h:0.3,fontFace:PPTX_BODY_FONT,fontSize:11,bold:true,color:PPTX_GRAY,isTextBox:true});
    });
    slide.addShape('line',{x:0.6,y:headerY+0.35,w:12.1,h:0,line:{color:PPTX_LINE,width:0.75}});

    let rowY=rowsStartY;
    const highlightEligible=shown.some(u=>u.priority==='High')&&shown.some(u=>u.priority!=='High');
    shown.forEach((u,i)=>{
      const estLines=Math.ceil(((u.summary||'').length)/48)+1;
      const rowH=Math.max(0.9,estLines*0.22+0.3);
      const isHighlight=highlightEligible&&u.priority==='High';

      if(isHighlight){
        slide.addShape('roundRect',{x:0.55,y:rowY-0.08,w:12.2,h:rowH+0.16,rectRadius:0.12,fill:{color:light},line:{color:accent,width:1.25}});
      }
      slide.addShape('rect',{x:0.6,y:rowY,w:0.06,h:rowH-0.1,fill:{color:accent},line:{type:'none'}});
      slide.addText([{text:u.title+'\n',options:{bold:true,fontSize:13,color:PPTX_INK,breakLine:true}},{text:u.summary||'',options:{fontSize:11,color:PPTX_INK}}],{x:0.8,y:rowY,w:colW[0]-0.25,h:rowH,fontFace:PPTX_BODY_FONT,isTextBox:true,valign:'top'});
      slide.addText(u.impact||'',{x:colX[1],y:rowY,w:colW[1],h:rowH,fontFace:PPTX_BODY_FONT,fontSize:11,color:PPTX_INK,isTextBox:true,valign:'top'});
      const outcome=Array.isArray(u.overlap)&&u.overlap.length?`Touches: ${u.overlap.join(', ')}`:'';
      slide.addText(outcome,{x:colX[2],y:rowY,w:colW[2],h:rowH,fontFace:PPTX_BODY_FONT,fontSize:11,color:PPTX_INK,isTextBox:true,valign:'top'});

      rowY+=rowH+rowGap;
      if(i<shown.length-1){slide.addShape('line',{x:0.6,y:rowY-rowGap/2,w:12.1,h:0,line:{color:PPTX_LINE,width:0.5}});}
    });
    if(overflow>0){
      slide.addText(`+ ${overflow} more update${overflow>1?'s':''} this month — see the Updates page for the full list`,{x:0.6,y:rowY,w:12.1,h:0.3,italic:true,fontFace:PPTX_BODY_FONT,fontSize:10,color:PPTX_GRAY,isTextBox:true});
      rowY+=0.35;
    }

    const top=shown.find(u=>u.priority==='High')||shown[0];
    const calloutY=Math.max(6.3,rowY+0.2);
    slide.addShape('roundRect',{x:0.6,y:calloutY,w:12.1,h:0.6,rectRadius:0.08,fill:{color:light},line:{color:accent,width:1}});
    slide.addText(top.impact||'',{x:0.85,y:calloutY,w:11.6,h:0.6,valign:'middle',fontFace:PPTX_BODY_FONT,fontSize:12,bold:true,color:PPTX_INK,isTextBox:true});

    pptxAddFooter(slide,deckTitleFooter,pageNum++);
  });

  const fileName=`${monthLabel.replace(' ','_')}_Platform_Updates.pptx`;
  await pres.writeFile({fileName});
}

function render(){root.innerHTML=`<div class="layout">${nav()}<main>${page==='overview'?overview():page==='updates'?updates():page==='trending'?trending():page==='issues'?issues():page==='tools'?tools():page==='monthlyPptx'?monthlyPptxPage():report()}</main></div>${notifBell()}<div id="modal"></div>`;bind();}
function bind(){document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;render()});document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;render()});document.querySelectorAll('.card').forEach(c=>c.onclick=()=>open(+c.dataset.id));document.querySelectorAll('.star-btn').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=+b.dataset.star;state.starred[id]=!state.starred[id];save();render()});const starredToggle=document.getElementById('starredToggle');if(starredToggle)starredToggle.onclick=()=>{starredOnly=!starredOnly;render()};const s=document.getElementById('search');if(s)s.oninput=e=>{search=e.target.value;const wrap=document.querySelector('.cards');if(wrap){const rendered=cards();const match=rendered.match(/^<div class="cards">([\s\S]*)<\/div>$/);wrap.innerHTML=match?match[1]:'';bindCards()}};const cat=document.getElementById('cat');if(cat)cat.onchange=e=>{filter=e.target.value;render()};const dateBtn=document.getElementById('dateBtn');if(dateBtn)dateBtn.onclick=()=>document.getElementById('datePopover').classList.toggle('open');const dateApply=document.getElementById('dateApply');if(dateApply)dateApply.onclick=()=>{const start=document.getElementById('dateStart').value;const end=document.getElementById('dateEnd').value;if(start&&end&&start>end){alert('End date must be on or after start date.');return}dateFilter=start?`${start}|${end||start}`:'All';render()};const dateClear=document.getElementById('dateClear');if(dateClear)dateClear.onclick=()=>{dateFilter='All';render()};const exportPdf=document.getElementById('exportPdf');if(exportPdf)exportPdf.onclick=()=>window.print();const generatePptx=document.getElementById('generatePptx');if(generatePptx)generatePptx.onclick=async()=>{const statusEl=document.getElementById('pptxStatus');generatePptx.disabled=true;generatePptx.textContent='Generating…';if(statusEl)statusEl.textContent='Building your PowerPoint…';try{await generateMonthlyPptx()}catch(err){console.error(err);alert('Could not generate the PowerPoint — see the browser console for details.')}generatePptx.disabled=false;generatePptx.textContent='⬇ Generate PowerPoint';if(statusEl)statusEl.textContent='Builds a .pptx of the last 30 days'};const notifBellBtn=document.getElementById('notifBell');if(notifBellBtn)notifBellBtn.onclick=e=>{e.stopPropagation();notifOpen=!notifOpen;if(notifOpen){state.lastSeenNotif=new Date().toISOString();save()}render()};document.querySelectorAll('[data-notif-target]').forEach(b=>b.onclick=()=>{const t=JSON.parse(b.dataset.notifTarget);notifOpen=false;page=t.page;filter='All';render();requestAnimationFrame(()=>{if(t.page==='updates'&&t.id!=null){open(t.id)}else{const sel=t.page==='trending'?`[data-trend-name="${CSS.escape(t.name)}"]`:`[data-issue-key="${CSS.escape(t.key)}"]`;const el=document.querySelector(sel);if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('flash-highlight');setTimeout(()=>el.classList.remove('flash-highlight'),2200)}}})});if(notifOpen){document.addEventListener('click',function h(e){if(!e.target.closest('.notif-wrap')){notifOpen=false;render();document.removeEventListener('click',h)}})}}
function bindCards(){document.querySelectorAll('.card').forEach(c=>c.onclick=()=>open(+c.dataset.id));document.querySelectorAll('.star-btn').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=+b.dataset.star;state.starred[id]=!state.starred[id];save();render()});}
function reliabilityBlock(u){if(u.reliability==='Flagged'){return `<div class="reliability-box flagged"><b>⚠ Unverified source</b><p>${esc(u.reliabilityNote||'This source is not an official company channel. Verify before acting on it.')}</p></div>`}return `<div class="reliability-box reliable"><b>✓ Reliable source — auto-verified</b><p>Sourced from an official company channel (${esc(u.sourceType)}), so this update is passed automatically and doesn't need manual review.</p></div>`}
function open(id){const u=UPDATES.find(x=>x.id===id);document.getElementById('modal').innerHTML=`<div class="shade"><div class="modal"><button class="close">×</button>${starBtn(u,'modal-star-btn')}<span class="tag">${esc(u.category)}</span>${submittedBadge(u)}<h2 class="modal-tool-title">${logo(u.tool)}<span>${esc(u.tool)}</span><span> — ${esc(u.title)}</span></h2><div class="modal-date">Update date · ${prettyDate(u.date)}</div><h4>What changed</h4><p>${esc(u.summary)}</p><h4>Why it matters to THE·TEAM</h4><p>${esc(u.impact)}</p><h4>Potential overlap</h4><div>${u.overlap.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><div class="detail"><span>Confidence: <b>${u.confidence}</b></span><span>Priority: <b>${u.priority}</b></span><span>Status: <b>${status(u)}</b></span></div>${reliabilityBlock(u)}<a href="${u.source}" target="_blank" rel="noopener">View source ↗</a><div class="actions"><button data-status="Verified">✓ Verify</button><button data-status="Dismissed">Dismiss</button><button data-status="Needs Review">Needs Review</button></div></div></div>`;document.querySelector('.close').onclick=close;document.querySelector('.shade').onclick=e=>{if(e.target.classList.contains('shade'))close()};document.querySelectorAll('[data-status]').forEach(b=>b.onclick=()=>{state.statuses[id]=b.dataset.status;save();close();render()});document.querySelector('.modal-star-btn').onclick=()=>{state.starred[id]=!state.starred[id];save();open(id)}}
function close(){document.getElementById('modal').innerHTML=''}
render();