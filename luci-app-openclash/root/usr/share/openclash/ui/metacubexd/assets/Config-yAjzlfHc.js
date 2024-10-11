import{b as O,y as Z,u as U,b0 as N,D as z,d as e,i as t,ac as C,S as w,t as o,z as x,b1 as J,c as H,A as Y,f as X,B as y,F as A,r as ee,b2 as _,b3 as te,b4 as le,b5 as re,b6 as ne,b7 as ae,b8 as se,b9 as ie,ba as oe,bb as ce,bc as ue,bd as de,be as ge,bf as Q,bg as he,bh as ve,bi as pe,g as V,a$ as fe,l as me,bj as be,bk as q,bl as $e,bm as _e,bn as xe,bo as G,bp as Ce,bq as ke,br as E,bs as j,q as L,a0 as M,K,v as W,j as ye,bt as we,bu as Se,bv as Ie,bw as De}from"./index-B2UtOO5P.js";import{D as Ae}from"./DocumentTitle-CREjclRv.js";var Pe=o("<input type=checkbox>"),Te=o("<input>"),Fe=o("<select>"),Ne=o('<label><span class="label-text truncate">'),Be=o("<option>A"),Ue=o("<option>AAAA"),Ee=o("<option>MX"),je=o('<div class="flex flex-col p-4">'),Le=o('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><div class="flex items-center gap-2">'),Me=o("<div class=py-2>"),Re=o("<option>Mixed"),Qe=o("<option>gVisor"),Ve=o("<option>System"),qe=o("<option>LWIP"),Ge=o('<div class="grid grid-cols-3 gap-2"><div class=form-control></div><div class=form-control></div><div class=form-control>'),Oe=o('<form class="grid grid-cols-3 gap-2 sm:grid-cols-5">'),ze=o('<div class="flex flex-col gap-4"><div class="grid grid-cols-3 gap-2"><div class=form-control></div><div class=form-control></div><div class=form-control></div></div><div class="grid grid-cols-2 gap-4 sm:grid-cols-3">'),T=o("<option>"),He=o("<div class=form-control>"),Xe=o('<div class="flex flex-col gap-2"><div class="flex flex-col"></div><div class="flex flex-col">'),Ke=o('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col items-center"></div><div class="flex flex-col"></div><div class="flex flex-col"><div class="py-2 text-center text-lg font-semibold">&nbsp;</div></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center">'),We=o('<span class="absolute -right-1 -top-1 flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),Ze=o('<div class="grid grid-cols-2 gap-4"><div class=relative><kbd class="kbd w-full"></kbd></div><div class=relative><kbd class="kbd w-full">'),Je=o('<div class="mx-auto flex max-w-screen-md flex-col gap-4">');const B=s=>{const[l,d]=E(s,["class"]);return(()=>{var n=Pe();return j(n,L({get class(){return M("toggle",l.class)}},d),!1,!1),n})()},F=s=>{const[l,d]=E(s,["class"]);return(()=>{var n=Te();return j(n,L({get class(){return M("input input-bordered min-w-0",l.class)}},d),!1,!1),n})()},P=s=>{const[l,d]=E(s,["class"]);return(()=>{var n=Fe();return j(n,L({get class(){return M("select select-bordered",l.class)}},d),!1,!0),t(n,()=>K(()=>d.children)()),n})()},I=s=>{const[l,d]=E(s,["class"]);return(()=>{var n=Ne(),h=n.firstChild;return j(n,L({get class(){return M("label",l.class)}},d),!1,!0),t(h,()=>K(()=>d.children)()),n})()},Ye=x.object({name:x.string(),type:x.string()}),et=()=>{const[s]=U(),l=J(),{form:d,isSubmitting:n}=H({extend:W({schema:Ye}),onSubmit:u=>l.get("dns/query",{searchParams:{name:u.name,type:u.type}}).json().then(({Answer:a})=>c((a==null?void 0:a.map(({data:m})=>m))||[])).catch(a=>ye.error(a.message))}),[h,c]=Y([]);return(()=>{var u=Le(),a=u.firstChild,m=a.firstChild;return X(d,a,()=>d),t(a,e(F,{type:"search",name:"name",class:"flex-1",placeholder:"google.com",onInput:r=>{r.target.value||c([])}}),m),t(m,e(P,{name:"type",get children(){return[Be(),Ue(),Ee()]}}),null),t(m,e(y,{type:"submit",class:"btn-primary",get loading(){return n()},get children(){return s("dnsQuery")}}),null),t(u,e(w,{get when(){return h().length>0},get children(){var r=je();return t(r,e(A,{get each(){return h()},children:g=>(()=>{var v=Me();return t(v,g),v})()})),r}}),null),u})()},tt=x.object({port:x.number(),"socks-port":x.number(),"redir-port":x.number(),"tproxy-port":x.number(),"mixed-port":x.number()}),lt=({isSingBox:s})=>{const[l]=U(),d=[{label:()=>l("port",{name:"Mixed"}),key:"mixed-port",onChange:r=>void _("mixed-port",Number(r.target.value),a)},{label:()=>l("port",{name:"HTTP"}),key:"port",onChange:r=>void _("port",Number(r.target.value),a)},{label:()=>l("port",{name:"Socks"}),key:"socks-port",onChange:r=>void _("socks-port",Number(r.target.value),a)},{label:()=>l("port",{name:"Redir"}),key:"redir-port",onChange:r=>void _("redir-port",Number(r.target.value),a)},{label:()=>l("port",{name:"TProxy"}),key:"tproxy-port",onChange:r=>void _("tproxy-port",Number(r.target.value),a)}],{form:n,setInitialValues:h,reset:c}=H({extend:W({schema:tt})}),[u,{refetch:a}]=N(we);ee(()=>{const r=u();r&&(h(r),c())});const m=z(()=>{var r;return((r=u())==null?void 0:r.modes)||["rule","direct","global"]});return(()=>{var r=ze(),g=r.firstChild,v=g.firstChild,D=v.nextSibling,$=D.nextSibling,b=g.nextSibling;return t(v,e(I,{for:"enable-allow-lan",get children(){return l("allowLan")}}),null),t(v,e(B,{id:"enable-allow-lan",get checked(){var i;return(i=u())==null?void 0:i["allow-lan"]},onChange:i=>void _("allow-lan",i.target.checked,a)}),null),t(D,e(I,{for:"mode",get children(){return l("runningMode")}}),null),t(D,e(P,{id:"mode",get value(){var i;return(i=u())==null?void 0:i.mode},onChange:i=>void _("mode",i.target.value,a),get children(){return e(A,{get each(){return m()},children:i=>(()=>{var p=T();return p.value=i,t(p,()=>l(i)),p})()})}}),null),t($,e(I,{for:"interface-name",get children(){return l("outboundInterfaceName")}}),null),t($,e(F,{id:"interface-name",get value(){var i;return(i=u())==null?void 0:i["interface-name"]},onChange:i=>void _("interface-name",i.target.value,a)}),null),t(r,e(w,{get when(){return!s()},get children(){return[(()=>{var i=Ge(),p=i.firstChild,S=p.nextSibling,R=S.nextSibling;return t(p,e(I,{for:"enable-tun-device",get children(){return l("enableTunDevice")}}),null),t(p,e(B,{id:"enable-tun-device",get checked(){var f,k;return(k=(f=u())==null?void 0:f.tun)==null?void 0:k.enable},onChange:f=>void _("tun",{enable:f.target.checked},a)}),null),t(S,e(I,{for:"tun-ip-stack",get children(){return l("tunModeStack")}}),null),t(S,e(P,{id:"tun-ip-stack",get value(){var f,k;return(k=(f=u())==null?void 0:f.tun)==null?void 0:k.stack},onChange:f=>void _("tun",{stack:f.target.value},a),get children(){return[Re(),Qe(),Ve(),qe()]}}),null),t(R,e(I,{for:"device-name",get children(){return l("tunDeviceName")}}),null),t(R,e(F,{id:"device-name",get value(){var f,k;return(k=(f=u())==null?void 0:f.tun)==null?void 0:k.device},onChange:f=>void _("tun",{device:f.target.value},a)}),null),i})(),(()=>{var i=Oe();return X(n,i,()=>n),t(i,e(A,{each:d,children:p=>(()=>{var S=He();return t(S,e(I,{get for(){return p.key},get children(){return p.label()}}),null),t(S,e(F,{get id(){return p.key},get name(){return p.key},type:"number",get placeholder(){return p.label()},get onChange(){return p.onChange}}),null),S})()})),i})()]}}),b),t(b,e(y,{class:"btn-primary",get loading(){return te()},onClick:le,get children(){return l("reloadConfig")}}),null),t(b,e(y,{class:"btn-accent",get loading(){return re()},onClick:ne,get children(){return l("flushFakeIP")}}),null),t(b,e(y,{class:"btn-warning",get loading(){return ae()},onClick:se,get children(){return l("restartCore")}}),null),t(b,e(w,{get when(){return!s()},get children(){return[e(y,{class:"btn-secondary",get loading(){return ie()},onClick:oe,get children(){return l("updateGEODatabases")}}),e(y,{class:"btn-info",get loading(){return ce()},onClick:ue,get children(){return l("upgradeUI")}}),e(y,{class:"btn-error",get loading(){return de()},onClick:ge,get children(){return l("upgradeCore")}})]}}),null),r})()},rt=()=>{const[s]=U(),l=O(),d=[{label:()=>s("en"),value:Q.EN},{label:()=>s("zh"),value:Q.ZH}];return(()=>{var n=Ke(),h=n.firstChild,c=h.firstChild,u=c.nextSibling,a=u.nextSibling;a.firstChild;var m=h.nextSibling,r=m.firstChild;return t(c,e(C,{get children(){return s("useTwemoji")}}),null),t(c,e(B,{get checked(){return he()},onChange:g=>ve(g.target.checked)}),null),t(u,e(C,{get children(){return s("switchLanguage")}}),null),t(u,e(P,{onChange:g=>pe(g.target.value),get children(){return e(A,{each:d,children:g=>(()=>{var v=T();return t(v,()=>g.label()),V(()=>v.selected=fe()===g.value),V(()=>v.value=g.value),v})()})}}),null),t(a,e(y,{class:"btn-info",onClick:()=>{me(""),l(be.Setup)},get children(){return s("switchEndpoint")}}),null),t(r,e(C,{get children(){return s("autoSwitchTheme")}}),null),t(r,e(B,{get checked(){return q()},onChange:g=>$e(g.target.checked)}),null),t(m,e(w,{get when(){return q()},get children(){var g=Xe(),v=g.firstChild,D=v.nextSibling;return t(v,e(C,{get children(){return s("favDayTheme")}}),null),t(v,e(P,{get value(){return _e()},onChange:$=>xe($.target.value),get children(){return e(A,{each:G,children:$=>(()=>{var b=T();return b.value=$,t(b,$),b})()})}}),null),t(D,e(C,{get children(){return s("favNightTheme")}}),null),t(D,e(P,{get value(){return Ce()},onChange:$=>ke($.target.value),get children(){return e(A,{each:G,children:$=>(()=>{var b=T();return b.value=$,t(b,$),b})()})}}),null),g}}),null),n})()},nt=({frontendVersion:s,backendVersion:l})=>{const[d]=N(()=>Se(s)),[n]=N(()=>Ie(l())),h=()=>We();return(()=>{var c=Ze(),u=c.firstChild,a=u.firstChild,m=u.nextSibling,r=m.firstChild;return t(u,e(w,{get when(){return d()},get children(){return e(h,{})}}),a),t(a,()=>"1.161.0"),t(m,e(w,{get when(){return n()},get children(){return e(h,{})}}),r),t(r,l),c})()},it=()=>{const s=O();if(!Z())return s("/setup",{replace:!0}),null;const[l]=U(),d="v1.161.0",[n]=N(De,{initialValue:""}),h=z(()=>{var c;return((c=n())==null?void 0:c.includes("sing-box"))||!1});return[e(Ae,{get children(){return l("config")}}),(()=>{var c=Je();return t(c,e(w,{get when(){return!h()},get children(){return[e(C,{withDivider:!0,get children(){return l("dnsQuery")}}),e(et,{})]}}),null),t(c,e(C,{withDivider:!0,get children(){return l("coreConfig")}}),null),t(c,e(lt,{isSingBox:h}),null),t(c,e(C,{withDivider:!0,get children(){return l("xdConfig")}}),null),t(c,e(rt,{}),null),t(c,e(C,{withDivider:!0,get children(){return l("version")}}),null),t(c,e(w,{get when(){return!n.loading},get children(){return e(nt,{frontendVersion:d,backendVersion:n})}}),null),c})()]};export{it as default};
