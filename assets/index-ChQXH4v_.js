(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ro(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},Mn=[],vt=()=>{},Jf=()=>!1,Di=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ao=t=>t.startsWith("onUpdate:"),we=Object.assign,No=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xf=Object.prototype.hasOwnProperty,Q=(t,e)=>Xf.call(t,e),H=Array.isArray,Ln=t=>ki(t)==="[object Map]",kc=t=>ki(t)==="[object Set]",V=t=>typeof t=="function",_e=t=>typeof t=="string",Xt=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Mc=t=>(ce(t)||V(t))&&V(t.then)&&V(t.catch),Lc=Object.prototype.toString,ki=t=>Lc.call(t),Zf=t=>ki(t).slice(8,-1),Fc=t=>ki(t)==="[object Object]",xo=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_s=Ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ed=/-(\w)/g,Je=Mi(t=>t.replace(ed,(e,n)=>n?n.toUpperCase():"")),td=/\B([A-Z])/g,bn=Mi(t=>t.replace(td,"-$1").toLowerCase()),Li=Mi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=Mi(t=>t?`on${Li(t)}`:""),jt=(t,e)=>!Object.is(t,e),si=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$c=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ur=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $l;const Fi=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?rd(s):Po(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||ce(t))return t}const nd=/;(?![^(]*\))/g,sd=/:([^]+)/,id=/\/\*[^]*?\*\//g;function rd(t){const e={};return t.replace(id,"").split(nd).forEach(n=>{if(n){const s=n.split(sd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $i(t){let e="";if(_e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=$i(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ld=Ro(od);function Bc(t){return!!t||t===""}const Uc=t=>!!(t&&t.__v_isRef===!0),gt=t=>_e(t)?t:t==null?"":H(t)||ce(t)&&(t.toString===Lc||!V(t.toString))?Uc(t)?gt(t.value):JSON.stringify(t,Hc,2):String(t),Hc=(t,e)=>Uc(e)?Hc(t,e.value):Ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[hr(s,r)+" =>"]=i,n),{})}:kc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hr(n))}:Xt(e)?hr(e):ce(e)&&!H(e)&&!Fc(e)?String(e):e,hr=(t,e="")=>{var n;return Xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ad{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function cd(){return je}let oe;const fr=new WeakSet;class Vc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fr.has(this)&&(fr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bl(this),qc(this);const e=oe,n=st;oe=this,st=!0;try{return this.fn()}finally{Gc(this),oe=e,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ko(e);this.deps=this.depsTail=void 0,Bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hr(this)&&this.run()}get dirty(){return Hr(this)}}let Wc=0,gs,ms;function jc(t,e=!1){if(t.flags|=8,e){t.next=ms,ms=t;return}t.next=gs,gs=t}function Oo(){Wc++}function Do(){if(--Wc>0)return;if(ms){let e=ms;for(ms=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;gs;){let e=gs;for(gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function qc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ko(s),ud(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Hr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Kc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ns))return;t.globalVersion=Ns;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Hr(t)){t.flags&=-3;return}const n=oe,s=st;oe=t,st=!0;try{qc(t);const i=t.fn(t._value);(e.version===0||jt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{oe=n,st=s,Gc(t),t.flags&=-3}}function ko(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ko(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ud(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let st=!0;const zc=[];function Zt(){zc.push(st),st=!1}function en(){const t=zc.pop();st=t===void 0?!0:t}function Bl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=oe;oe=void 0;try{e()}finally{oe=n}}}let Ns=0;class hd{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!oe||!st||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new hd(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,Yc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=s)}return n}trigger(e){this.version++,Ns++,this.notify(e)}notify(e){Oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Do()}}}function Yc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Yc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vr=new WeakMap,hn=Symbol(""),Wr=Symbol(""),xs=Symbol("");function Te(t,e,n){if(st&&oe){let s=Vr.get(t);s||Vr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Mo),i.map=s,i.key=n),i.track()}}function Rt(t,e,n,s,i,r){const o=Vr.get(t);if(!o){Ns++;return}const l=a=>{a&&a.trigger()};if(Oo(),e==="clear")o.forEach(l);else{const a=H(t),c=a&&xo(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===xs||!Xt(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(xs)),e){case"add":a?c&&l(o.get("length")):(l(o.get(hn)),Ln(t)&&l(o.get(Wr)));break;case"delete":a||(l(o.get(hn)),Ln(t)&&l(o.get(Wr)));break;case"set":Ln(t)&&l(o.get(hn));break}}Do()}function An(t){const e=Y(t);return e===t?e:(Te(e,"iterate",xs),Ye(t)?e:e.map(Re))}function Bi(t){return Te(t=Y(t),"iterate",xs),t}const fd={__proto__:null,[Symbol.iterator](){return dr(this,Symbol.iterator,Re)},concat(...t){return An(this).concat(...t.map(e=>H(e)?An(e):e))},entries(){return dr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return It(this,"every",t,e,void 0,arguments)},filter(t,e){return It(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return It(this,"find",t,e,Re,arguments)},findIndex(t,e){return It(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return It(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return It(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return It(this,"forEach",t,e,void 0,arguments)},includes(...t){return pr(this,"includes",t)},indexOf(...t){return pr(this,"indexOf",t)},join(t){return An(this).join(t)},lastIndexOf(...t){return pr(this,"lastIndexOf",t)},map(t,e){return It(this,"map",t,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...t){return ls(this,"push",t)},reduce(t,...e){return Ul(this,"reduce",t,e)},reduceRight(t,...e){return Ul(this,"reduceRight",t,e)},shift(){return ls(this,"shift")},some(t,e){return It(this,"some",t,e,void 0,arguments)},splice(...t){return ls(this,"splice",t)},toReversed(){return An(this).toReversed()},toSorted(t){return An(this).toSorted(t)},toSpliced(...t){return An(this).toSpliced(...t)},unshift(...t){return ls(this,"unshift",t)},values(){return dr(this,"values",Re)}};function dr(t,e,n){const s=Bi(t),i=s[e]();return s!==t&&!Ye(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const dd=Array.prototype;function It(t,e,n,s,i,r){const o=Bi(t),l=o!==t&&!Ye(t),a=o[e];if(a!==dd[e]){const h=a.apply(t,r);return l?Re(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,Re(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function Ul(t,e,n,s){const i=Bi(t);let r=n;return i!==t&&(Ye(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Re(l),a,t)}),i[e](r,...s)}function pr(t,e,n){const s=Y(t);Te(s,"iterate",xs);const i=s[e](...n);return(i===-1||i===!1)&&$o(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function ls(t,e,n=[]){Zt(),Oo();const s=Y(t)[e].apply(t,n);return Do(),en(),s}const pd=Ro("__proto__,__v_isRef,__isVue"),Qc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xt));function _d(t){Xt(t)||(t=String(t));const e=Y(this);return Te(e,"has",t),e.hasOwnProperty(t)}class Jc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Sd:tu:r?eu:Zc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let a;if(o&&(a=fd[n]))return a;if(n==="hasOwnProperty")return _d}const l=Reflect.get(e,n,Ne(e)?e:s);return(Xt(n)?Qc.has(n):pd(n))||(i||Te(e,"get",n),r)?l:Ne(l)?o&&xo(n)?l:l.value:ce(l)?i?su(l):Ui(l):l}}class Xc extends Jc{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=fn(r);if(!Ye(s)&&!fn(s)&&(r=Y(r),s=Y(s)),!H(e)&&Ne(r)&&!Ne(s))return a?!1:(r.value=s,!0)}const o=H(e)&&xo(n)?Number(n)<e.length:Q(e,n),l=Reflect.set(e,n,s,Ne(e)?e:i);return e===Y(i)&&(o?jt(s,r)&&Rt(e,"set",n,s):Rt(e,"add",n,s)),l}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Rt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Xt(n)||!Qc.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",H(e)?"length":hn),Reflect.ownKeys(e)}}class gd extends Jc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const md=new Xc,yd=new gd,vd=new Xc(!0);const jr=t=>t,Js=t=>Reflect.getPrototypeOf(t);function bd(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=Ln(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?jr:e?qr:Re;return!e&&Te(r,"iterate",a?Wr:hn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ed(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(jt(i,l)&&Te(o,"get",i),Te(o,"get",l));const{has:a}=Js(o),c=e?jr:t?qr:Re;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(Y(i),"iterate",hn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(jt(i,l)&&Te(o,"has",i),Te(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=Y(l),c=e?jr:t?qr:Re;return!t&&Te(a,"iterate",hn),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return we(n,t?{add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear")}:{add(i){!e&&!Ye(i)&&!fn(i)&&(i=Y(i));const r=Y(this);return Js(r).has.call(r,i)||(r.add(i),Rt(r,"add",i,i)),this},set(i,r){!e&&!Ye(r)&&!fn(r)&&(r=Y(r));const o=Y(this),{has:l,get:a}=Js(o);let c=l.call(o,i);c||(i=Y(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?jt(r,u)&&Rt(o,"set",i,r):Rt(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Js(r);let a=o.call(r,i);a||(i=Y(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&Rt(r,"delete",i,void 0),c},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&Rt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=bd(i,t,e)}),n}function Lo(t,e){const n=Ed(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const wd={get:Lo(!1,!1)},Cd={get:Lo(!1,!0)},Id={get:Lo(!0,!1)};const Zc=new WeakMap,eu=new WeakMap,tu=new WeakMap,Sd=new WeakMap;function Td(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(t){return t.__v_skip||!Object.isExtensible(t)?0:Td(Zf(t))}function Ui(t){return fn(t)?t:Fo(t,!1,md,wd,Zc)}function nu(t){return Fo(t,!1,vd,Cd,eu)}function su(t){return Fo(t,!0,yd,Id,tu)}function Fo(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Rd(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Fn(t){return fn(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function Ye(t){return!!(t&&t.__v_isShallow)}function $o(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Ad(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&$c(t,"__v_skip",!0),t}const Re=t=>ce(t)?Ui(t):t,qr=t=>ce(t)?su(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function Nd(t){return iu(t,!1)}function xd(t){return iu(t,!0)}function iu(t,e){return Ne(t)?t:new Pd(t,e)}class Pd{constructor(e,n){this.dep=new Mo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ye(e)||fn(e);e=s?e:Y(e),jt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function $n(t){return Ne(t)?t.value:t}const Od={get:(t,e,n)=>e==="__v_raw"?t:$n(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ru(t){return Fn(t)?t:new Proxy(t,Od)}class Dd{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return jc(this,!0),!0}get value(){const e=this.dep.track();return Kc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kd(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new Dd(s,i,n)}const Zs={},ci=new WeakMap;let on;function Md(t,e=!1,n=on){if(n){let s=ci.get(n);s||ci.set(n,s=[]),s.push(t)}}function Ld(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=O=>i?O:Ye(O)||i===!1||i===0?At(O,1):At(O);let u,h,f,_,m=!1,C=!1;if(Ne(t)?(h=()=>t.value,m=Ye(t)):Fn(t)?(h=()=>c(t),m=!0):H(t)?(C=!0,m=t.some(O=>Fn(O)||Ye(O)),h=()=>t.map(O=>{if(Ne(O))return O.value;if(Fn(O))return c(O);if(V(O))return a?a(O,2):O()})):V(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){Zt();try{f()}finally{en()}}const O=on;on=u;try{return a?a(t,3,[_]):t(_)}finally{on=O}}:h=vt,e&&i){const O=h,ne=i===!0?1/0:i;h=()=>At(O(),ne)}const D=cd(),k=()=>{u.stop(),D&&D.active&&No(D.effects,u)};if(r&&e){const O=e;e=(...ne)=>{O(...ne),k()}}let P=C?new Array(t.length).fill(Zs):Zs;const F=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const ne=u.run();if(i||m||(C?ne.some((Ie,ue)=>jt(Ie,P[ue])):jt(ne,P))){f&&f();const Ie=on;on=u;try{const ue=[ne,P===Zs?void 0:C&&P[0]===Zs?[]:P,_];a?a(e,3,ue):e(...ue),P=ne}finally{on=Ie}}}else u.run()};return l&&l(F),u=new Vc(h),u.scheduler=o?()=>o(F,!1):F,_=O=>Md(O,!1,u),f=u.onStop=()=>{const O=ci.get(u);if(O){if(a)a(O,4);else for(const ne of O)ne();ci.delete(u)}},e?s?F(!0):P=u.run():o?o(F.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function At(t,e=1/0,n){if(e<=0||!ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))At(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)At(t[s],e,n);else if(kc(t)||Ln(t))t.forEach(s=>{At(s,e,n)});else if(Fc(t)){for(const s in t)At(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&At(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(t,e,n,s){try{return s?t(...s):t()}catch(i){Hi(i,e,n)}}function Et(t,e,n,s){if(V(t)){const i=js(t,e,n,s);return i&&Mc(i)&&i.catch(r=>{Hi(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Et(t[r],e,n,s));return i}}function Hi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Zt(),js(r,null,10,[t,a,c]),en();return}}Fd(t,n,i,s,o)}function Fd(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Oe=[];let _t=-1;const Bn=[];let Ut=null,xn=0;const ou=Promise.resolve();let ui=null;function lu(t){const e=ui||ou;return t?e.then(this?t.bind(this):t):e}function $d(t){let e=_t+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=Ps(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Bo(t){if(!(t.flags&1)){const e=Ps(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=Ps(n)?Oe.push(t):Oe.splice($d(e),0,t),t.flags|=1,au()}}function au(){ui||(ui=ou.then(uu))}function Bd(t){H(t)?Bn.push(...t):Ut&&t.id===-1?Ut.splice(xn+1,0,t):t.flags&1||(Bn.push(t),t.flags|=1),au()}function Hl(t,e,n=_t+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function cu(t){if(Bn.length){const e=[...new Set(Bn)].sort((n,s)=>Ps(n)-Ps(s));if(Bn.length=0,Ut){Ut.push(...e);return}for(Ut=e,xn=0;xn<Ut.length;xn++){const n=Ut[xn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,xn=0}}const Ps=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uu(t){try{for(_t=0;_t<Oe.length;_t++){const e=Oe[_t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_t<Oe.length;_t++){const e=Oe[_t];e&&(e.flags&=-2)}_t=-1,Oe.length=0,cu(),ui=null,(Oe.length||Bn.length)&&uu()}}let qe=null,hu=null;function hi(t){const e=qe;return qe=t,hu=t&&t.type.__scopeId||null,e}function Ud(t,e=qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jl(-1);const r=hi(e);let o;try{o=t(...i)}finally{hi(r),s._d&&Jl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fu(t,e){if(qe===null)return t;const n=qi(qe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=se]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&At(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function sn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Zt(),Et(a,n,8,[t.el,l,t,e]),en())}}const Hd=Symbol("_vte"),Vd=t=>t.__isTeleport;function Uo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Uo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function du(t,e){return V(t)?we({name:t.name},e,{setup:t}):t}function pu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fi(t,e,n,s,i=!1){if(H(t)){t.forEach((m,C)=>fi(m,e&&(H(e)?e[C]:e),n,s,i));return}if(ys(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&fi(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?qi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState,f=Y(h),_=h===se?()=>!1:m=>Q(f,m);if(c!=null&&c!==a&&(_e(c)?(u[c]=null,_(c)&&(h[c]=null)):Ne(c)&&(c.value=null)),V(a))js(a,l,12,[o,u]);else{const m=_e(a),C=Ne(a);if(m||C){const D=()=>{if(t.f){const k=m?_(a)?h[a]:u[a]:a.value;i?H(k)&&No(k,r):H(k)?k.includes(r)||k.push(r):m?(u[a]=[r],_(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,_(a)&&(h[a]=o)):C&&(a.value=o,t.k&&(u[t.k]=o))};o?(D.id=-1,We(D,n)):D()}}}Fi().requestIdleCallback;Fi().cancelIdleCallback;const ys=t=>!!t.type.__asyncLoader,_u=t=>t.type.__isKeepAlive;function Wd(t,e){gu(t,"a",e)}function jd(t,e){gu(t,"da",e)}function gu(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_u(i.parent.vnode)&&qd(s,e,n,i),i=i.parent}}function qd(t,e,n,s){const i=Vi(e,t,s,!0);mu(()=>{No(s[e],i)},n)}function Vi(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Zt();const l=qs(n),a=Et(e,n,t,o);return l(),en(),a});return s?i.unshift(r):i.push(r),r}}const Mt=t=>(e,n=Ae)=>{(!Ds||t==="sp")&&Vi(t,(...s)=>e(...s),n)},Gd=Mt("bm"),Kd=Mt("m"),zd=Mt("bu"),Yd=Mt("u"),Qd=Mt("bum"),mu=Mt("um"),Jd=Mt("sp"),Xd=Mt("rtg"),Zd=Mt("rtc");function ep(t,e=Ae){Vi("ec",t,e)}const tp="components";function np(t,e){return ip(tp,t,!0,e)||t}const sp=Symbol.for("v-ndc");function ip(t,e,n=!0,s=!1){const i=qe||Ae;if(i){const r=i.type;{const l=qp(r,!1);if(l&&(l===e||l===Je(e)||l===Li(Je(e))))return r}const o=Vl(i[t]||r[t],e)||Vl(i.appContext[t],e);return!o&&s?r:o}}function Vl(t,e){return t&&(t[e]||t[Je(e)]||t[Li(Je(e))])}function Wl(t,e,n,s){let i;const r=n,o=H(t);if(o||_e(t)){const l=o&&Fn(t);let a=!1;l&&(a=!Ye(t),t=Bi(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(a?Re(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Gr=t=>t?$u(t)?qi(t):Gr(t.parent):null,vs=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gr(t.parent),$root:t=>Gr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ho(t),$forceUpdate:t=>t.f||(t.f=()=>{Bo(t.update)}),$nextTick:t=>t.n||(t.n=lu.bind(t.proxy)),$watch:t=>Sp.bind(t)}),_r=(t,e)=>t!==se&&!t.__isScriptSetup&&Q(t,e),rp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(_r(s,e))return o[e]=1,s[e];if(i!==se&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==se&&Q(n,e))return o[e]=4,n[e];Kr&&(o[e]=0)}}const u=vs[e];let h,f;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&Q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return _r(i,e)?(i[e]=n,!0):s!==se&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&Q(t,o)||_r(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(vs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jl(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kr=!0;function op(t){const e=Ho(t),n=t.proxy,s=t.ctx;Kr=!1,e.beforeCreate&&ql(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:C,deactivated:D,beforeDestroy:k,beforeUnmount:P,destroyed:F,unmounted:O,render:ne,renderTracked:Ie,renderTriggered:ue,errorCaptured:lt,serverPrefetch:Lt,expose:at,inheritAttrs:Ft,components:nn,directives:ct,filters:rs}=e;if(c&&lp(c,s,null),o)for(const te in o){const z=o[te];V(z)&&(s[te]=z.bind(n))}if(i){const te=i.call(n,n);ce(te)&&(t.data=Ui(te))}if(Kr=!0,r)for(const te in r){const z=r[te],Ct=V(z)?z.bind(n,n):V(z.get)?z.get.bind(n,n):vt,$t=!V(z)&&V(z.set)?z.set.bind(n):vt,ut=et({get:Ct,set:$t});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>ut.value,set:ke=>ut.value=ke})}if(l)for(const te in l)yu(l[te],s,n,te);if(a){const te=V(a)?a.call(n):a;Reflect.ownKeys(te).forEach(z=>{ii(z,te[z])})}u&&ql(u,t,"c");function me(te,z){H(z)?z.forEach(Ct=>te(Ct.bind(n))):z&&te(z.bind(n))}if(me(Gd,h),me(Kd,f),me(zd,_),me(Yd,m),me(Wd,C),me(jd,D),me(ep,lt),me(Zd,Ie),me(Xd,ue),me(Qd,P),me(mu,O),me(Jd,Lt),H(at))if(at.length){const te=t.exposed||(t.exposed={});at.forEach(z=>{Object.defineProperty(te,z,{get:()=>n[z],set:Ct=>n[z]=Ct})})}else t.exposed||(t.exposed={});ne&&t.render===vt&&(t.render=ne),Ft!=null&&(t.inheritAttrs=Ft),nn&&(t.components=nn),ct&&(t.directives=ct),Lt&&pu(t)}function lp(t,e,n=vt){H(t)&&(t=zr(t));for(const s in t){const i=t[s];let r;ce(i)?"default"in i?r=xt(i.from||s,i.default,!0):r=xt(i.from||s):r=xt(i),Ne(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ql(t,e,n){Et(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yu(t,e,n,s){let i=s.includes(".")?Ou(n,s):()=>n[s];if(_e(t)){const r=e[t];V(r)&&ri(i,r)}else if(V(t))ri(i,t.bind(n));else if(ce(t))if(H(t))t.forEach(r=>yu(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&ri(i,r,t)}}function Ho(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>di(a,c,o,!0)),di(a,e,o)),ce(e)&&r.set(e,a),a}function di(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&di(t,r,n,!0),i&&i.forEach(o=>di(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=ap[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const ap={data:Gl,props:Kl,emits:Kl,methods:ps,computed:ps,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:ps,directives:ps,watch:up,provide:Gl,inject:cp};function Gl(t,e){return e?t?function(){return we(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function cp(t,e){return ps(zr(t),zr(e))}function zr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function ps(t,e){return t?we(Object.create(null),t,e):e}function Kl(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:we(Object.create(null),jl(t),jl(e??{})):e}function up(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=xe(t[s],e[s]);return n}function vu(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function fp(t,e){return function(s,i=null){V(s)||(s=we({},s)),i!=null&&!ce(i)&&(i=null);const r=vu(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:hp++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Kp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...h)):V(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const _=c._ceVNode||Le(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(_,u):t(_,u,f),a=!0,c._container=u,u.__vue_app__=c,qi(_.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Et(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Un;Un=c;try{return u()}finally{Un=h}}};return c}}let Un=null;function ii(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Ae||qe;if(s||Un){const i=Un?Un._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const bu={},Eu=()=>Object.create(bu),wu=t=>Object.getPrototypeOf(t)===bu;function dp(t,e,n,s=!1){const i={},r=Eu();t.propsDefaults=Object.create(null),Cu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:nu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function pp(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Wi(t.emitsOptions,f))continue;const _=e[f];if(a)if(Q(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=Je(f);i[m]=Yr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Cu(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=bn(h))===h||!Q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Yr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&Rt(t.attrs,"set","")}function Cu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(_s(a))continue;const c=e[a];let u;i&&Q(i,u=Je(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Wi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Y(n),c=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Yr(i,a,h,c[h],t,!Q(c,h))}}return o}function Yr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=qs(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===bn(n))&&(s=!0))}return s}const _p=new WeakMap;function Iu(t,e,n=!1){const s=n?_p:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[f,_]=Iu(h,e,!0);we(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ce(t)&&s.set(t,Mn),Mn;if(H(r))for(let u=0;u<r.length;u++){const h=Je(r[u]);zl(h)&&(o[h]=se)}else if(r)for(const u in r){const h=Je(u);if(zl(h)){const f=r[u],_=o[h]=H(f)||V(f)?{type:f}:we({},f),m=_.type;let C=!1,D=!0;if(H(m))for(let k=0;k<m.length;++k){const P=m[k],F=V(P)&&P.name;if(F==="Boolean"){C=!0;break}else F==="String"&&(D=!1)}else C=V(m)&&m.name==="Boolean";_[0]=C,_[1]=D,(C||Q(_,"default"))&&l.push(h)}}const c=[o,l];return ce(t)&&s.set(t,c),c}function zl(t){return t[0]!=="$"&&!_s(t)}const Su=t=>t[0]==="_"||t==="$stable",Vo=t=>H(t)?t.map(mt):[mt(t)],gp=(t,e,n)=>{if(e._n)return e;const s=Ud((...i)=>Vo(e(...i)),n);return s._c=!1,s},Tu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Su(i))continue;const r=t[i];if(V(r))e[i]=gp(i,r,s);else if(r!=null){const o=Vo(r);e[i]=()=>o}}},Ru=(t,e)=>{const n=Vo(e);t.slots.default=()=>n},Au=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},mp=(t,e,n)=>{const s=t.slots=Eu();if(t.vnode.shapeFlag&32){const i=e._;i?(Au(s,e,n),n&&$c(s,"_",i,!0)):Tu(e,s)}else e&&Ru(t,e)},yp=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:Au(i,e,n):(r=!e.$stable,Tu(e,i)),o=e}else e&&(Ru(t,e),o={default:1});if(r)for(const l in i)!Su(l)&&o[l]==null&&delete i[l]},We=Op;function vp(t){return bp(t)}function bp(t,e){const n=Fi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=vt,insertStaticContent:m}=t,C=(d,p,g,b=null,y=null,E=null,R=void 0,T=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!as(d,p)&&(b=v(d),ke(d,y,E,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:$,shapeFlag:N}=p;switch(w){case ji:D(d,p,g,b);break;case dn:k(d,p,g,b);break;case yr:d==null&&P(p,g,b,R);break;case Ze:nn(d,p,g,b,y,E,R,T,S);break;default:N&1?ne(d,p,g,b,y,E,R,T,S):N&6?ct(d,p,g,b,y,E,R,T,S):(N&64||N&128)&&w.process(d,p,g,b,y,E,R,T,S,M)}$!=null&&y&&fi($,d&&d.ref,E,p||d,!p)},D=(d,p,g,b)=>{if(d==null)s(p.el=l(p.children),g,b);else{const y=p.el=d.el;p.children!==d.children&&c(y,p.children)}},k=(d,p,g,b)=>{d==null?s(p.el=a(p.children||""),g,b):p.el=d.el},P=(d,p,g,b)=>{[d.el,d.anchor]=m(d.children,p,g,b,d.el,d.anchor)},F=({el:d,anchor:p},g,b)=>{let y;for(;d&&d!==p;)y=f(d),s(d,g,b),d=y;s(p,g,b)},O=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},ne=(d,p,g,b,y,E,R,T,S)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?Ie(p,g,b,y,E,R,T,S):Lt(d,p,y,E,R,T,S)},Ie=(d,p,g,b,y,E,R,T)=>{let S,w;const{props:$,shapeFlag:N,transition:L,dirs:U}=d;if(S=d.el=o(d.type,E,$&&$.is,$),N&8?u(S,d.children):N&16&&lt(d.children,S,null,b,y,gr(d,E),R,T),U&&sn(d,null,b,"created"),ue(S,d,d.scopeId,R,b),$){for(const re in $)re!=="value"&&!_s(re)&&r(S,re,null,$[re],E,b);"value"in $&&r(S,"value",null,$.value,E),(w=$.onVnodeBeforeMount)&&ft(w,b,d)}U&&sn(d,null,b,"beforeMount");const G=Ep(y,L);G&&L.beforeEnter(S),s(S,p,g),((w=$&&$.onVnodeMounted)||G||U)&&We(()=>{w&&ft(w,b,d),G&&L.enter(S),U&&sn(d,null,b,"mounted")},y)},ue=(d,p,g,b,y)=>{if(g&&_(d,g),b)for(let E=0;E<b.length;E++)_(d,b[E]);if(y){let E=y.subTree;if(p===E||ku(E.type)&&(E.ssContent===p||E.ssFallback===p)){const R=y.vnode;ue(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},lt=(d,p,g,b,y,E,R,T,S=0)=>{for(let w=S;w<d.length;w++){const $=d[w]=T?Ht(d[w]):mt(d[w]);C(null,$,p,g,b,y,E,R,T)}},Lt=(d,p,g,b,y,E,R)=>{const T=p.el=d.el;let{patchFlag:S,dynamicChildren:w,dirs:$}=p;S|=d.patchFlag&16;const N=d.props||se,L=p.props||se;let U;if(g&&rn(g,!1),(U=L.onVnodeBeforeUpdate)&&ft(U,g,p,d),$&&sn(p,d,g,"beforeUpdate"),g&&rn(g,!0),(N.innerHTML&&L.innerHTML==null||N.textContent&&L.textContent==null)&&u(T,""),w?at(d.dynamicChildren,w,T,g,b,gr(p,y),E):R||z(d,p,T,null,g,b,gr(p,y),E,!1),S>0){if(S&16)Ft(T,N,L,g,y);else if(S&2&&N.class!==L.class&&r(T,"class",null,L.class,y),S&4&&r(T,"style",N.style,L.style,y),S&8){const G=p.dynamicProps;for(let re=0;re<G.length;re++){const X=G[re],Ue=N[X],Se=L[X];(Se!==Ue||X==="value")&&r(T,X,Ue,Se,y,g)}}S&1&&d.children!==p.children&&u(T,p.children)}else!R&&w==null&&Ft(T,N,L,g,y);((U=L.onVnodeUpdated)||$)&&We(()=>{U&&ft(U,g,p,d),$&&sn(p,d,g,"updated")},b)},at=(d,p,g,b,y,E,R)=>{for(let T=0;T<p.length;T++){const S=d[T],w=p[T],$=S.el&&(S.type===Ze||!as(S,w)||S.shapeFlag&70)?h(S.el):g;C(S,w,$,null,b,y,E,R,!0)}},Ft=(d,p,g,b,y)=>{if(p!==g){if(p!==se)for(const E in p)!_s(E)&&!(E in g)&&r(d,E,p[E],null,y,b);for(const E in g){if(_s(E))continue;const R=g[E],T=p[E];R!==T&&E!=="value"&&r(d,E,T,R,y,b)}"value"in g&&r(d,"value",p.value,g.value,y)}},nn=(d,p,g,b,y,E,R,T,S)=>{const w=p.el=d?d.el:l(""),$=p.anchor=d?d.anchor:l("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:U}=p;U&&(T=T?T.concat(U):U),d==null?(s(w,g,b),s($,g,b),lt(p.children||[],g,$,y,E,R,T,S)):N>0&&N&64&&L&&d.dynamicChildren?(at(d.dynamicChildren,L,g,y,E,R,T),(p.key!=null||y&&p===y.subTree)&&Nu(d,p,!0)):z(d,p,g,$,y,E,R,T,S)},ct=(d,p,g,b,y,E,R,T,S)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?y.ctx.activate(p,g,b,R,S):rs(p,g,b,y,E,R,S):Sn(d,p,S)},rs=(d,p,g,b,y,E,R)=>{const T=d.component=Up(d,b,y);if(_u(d)&&(T.ctx.renderer=M),Hp(T,!1,R),T.asyncDep){if(y&&y.registerDep(T,me,R),!d.el){const S=T.subTree=Le(dn);k(null,S,p,g)}}else me(T,d,p,g,y,E,R)},Sn=(d,p,g)=>{const b=p.component=d.component;if(xp(d,p,g))if(b.asyncDep&&!b.asyncResolved){te(b,p,g);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},me=(d,p,g,b,y,E,R)=>{const T=()=>{if(d.isMounted){let{next:N,bu:L,u:U,parent:G,vnode:re}=d;{const He=xu(d);if(He){N&&(N.el=re.el,te(d,N,R)),He.asyncDep.then(()=>{d.isUnmounted||T()});return}}let X=N,Ue;rn(d,!1),N?(N.el=re.el,te(d,N,R)):N=re,L&&si(L),(Ue=N.props&&N.props.onVnodeBeforeUpdate)&&ft(Ue,G,N,re),rn(d,!0);const Se=mr(d),Xe=d.subTree;d.subTree=Se,C(Xe,Se,h(Xe.el),v(Xe),d,y,E),N.el=Se.el,X===null&&Pp(d,Se.el),U&&We(U,y),(Ue=N.props&&N.props.onVnodeUpdated)&&We(()=>ft(Ue,G,N,re),y)}else{let N;const{el:L,props:U}=p,{bm:G,m:re,parent:X,root:Ue,type:Se}=d,Xe=ys(p);if(rn(d,!1),G&&si(G),!Xe&&(N=U&&U.onVnodeBeforeMount)&&ft(N,X,p),rn(d,!0),L&&he){const He=()=>{d.subTree=mr(d),he(L,d.subTree,d,y,null)};Xe&&Se.__asyncHydrate?Se.__asyncHydrate(L,d,He):He()}else{Ue.ce&&Ue.ce._injectChildStyle(Se);const He=d.subTree=mr(d);C(null,He,g,b,d,y,E),p.el=He.el}if(re&&We(re,y),!Xe&&(N=U&&U.onVnodeMounted)){const He=p;We(()=>ft(N,X,He),y)}(p.shapeFlag&256||X&&ys(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&We(d.a,y),d.isMounted=!0,p=g=b=null}};d.scope.on();const S=d.effect=new Vc(T);d.scope.off();const w=d.update=S.run.bind(S),$=d.job=S.runIfDirty.bind(S);$.i=d,$.id=d.uid,S.scheduler=()=>Bo($),rn(d,!0),w()},te=(d,p,g)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,pp(d,p.props,b,g),yp(d,p.children,g),Zt(),Hl(d),en()},z=(d,p,g,b,y,E,R,T,S=!1)=>{const w=d&&d.children,$=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:U}=p;if(L>0){if(L&128){$t(w,N,g,b,y,E,R,T,S);return}else if(L&256){Ct(w,N,g,b,y,E,R,T,S);return}}U&8?($&16&&Ke(w,y,E),N!==w&&u(g,N)):$&16?U&16?$t(w,N,g,b,y,E,R,T,S):Ke(w,y,E,!0):($&8&&u(g,""),U&16&&lt(N,g,b,y,E,R,T,S))},Ct=(d,p,g,b,y,E,R,T,S)=>{d=d||Mn,p=p||Mn;const w=d.length,$=p.length,N=Math.min(w,$);let L;for(L=0;L<N;L++){const U=p[L]=S?Ht(p[L]):mt(p[L]);C(d[L],U,g,null,y,E,R,T,S)}w>$?Ke(d,y,E,!0,!1,N):lt(p,g,b,y,E,R,T,S,N)},$t=(d,p,g,b,y,E,R,T,S)=>{let w=0;const $=p.length;let N=d.length-1,L=$-1;for(;w<=N&&w<=L;){const U=d[w],G=p[w]=S?Ht(p[w]):mt(p[w]);if(as(U,G))C(U,G,g,null,y,E,R,T,S);else break;w++}for(;w<=N&&w<=L;){const U=d[N],G=p[L]=S?Ht(p[L]):mt(p[L]);if(as(U,G))C(U,G,g,null,y,E,R,T,S);else break;N--,L--}if(w>N){if(w<=L){const U=L+1,G=U<$?p[U].el:b;for(;w<=L;)C(null,p[w]=S?Ht(p[w]):mt(p[w]),g,G,y,E,R,T,S),w++}}else if(w>L)for(;w<=N;)ke(d[w],y,E,!0),w++;else{const U=w,G=w,re=new Map;for(w=G;w<=L;w++){const Ve=p[w]=S?Ht(p[w]):mt(p[w]);Ve.key!=null&&re.set(Ve.key,w)}let X,Ue=0;const Se=L-G+1;let Xe=!1,He=0;const os=new Array(Se);for(w=0;w<Se;w++)os[w]=0;for(w=U;w<=N;w++){const Ve=d[w];if(Ue>=Se){ke(Ve,y,E,!0);continue}let ht;if(Ve.key!=null)ht=re.get(Ve.key);else for(X=G;X<=L;X++)if(os[X-G]===0&&as(Ve,p[X])){ht=X;break}ht===void 0?ke(Ve,y,E,!0):(os[ht-G]=w+1,ht>=He?He=ht:Xe=!0,C(Ve,p[ht],g,null,y,E,R,T,S),Ue++)}const Ll=Xe?wp(os):Mn;for(X=Ll.length-1,w=Se-1;w>=0;w--){const Ve=G+w,ht=p[Ve],Fl=Ve+1<$?p[Ve+1].el:b;os[w]===0?C(null,ht,g,Fl,y,E,R,T,S):Xe&&(X<0||w!==Ll[X]?ut(ht,g,Fl,2):X--)}}},ut=(d,p,g,b,y=null)=>{const{el:E,type:R,transition:T,children:S,shapeFlag:w}=d;if(w&6){ut(d.component.subTree,p,g,b);return}if(w&128){d.suspense.move(p,g,b);return}if(w&64){R.move(d,p,g,M);return}if(R===Ze){s(E,p,g);for(let N=0;N<S.length;N++)ut(S[N],p,g,b);s(d.anchor,p,g);return}if(R===yr){F(d,p,g);return}if(b!==2&&w&1&&T)if(b===0)T.beforeEnter(E),s(E,p,g),We(()=>T.enter(E),y);else{const{leave:N,delayLeave:L,afterLeave:U}=T,G=()=>s(E,p,g),re=()=>{N(E,()=>{G(),U&&U()})};L?L(E,G,re):re()}else s(E,p,g)},ke=(d,p,g,b=!1,y=!1)=>{const{type:E,props:R,ref:T,children:S,dynamicChildren:w,shapeFlag:$,patchFlag:N,dirs:L,cacheIndex:U}=d;if(N===-2&&(y=!1),T!=null&&fi(T,null,g,d,!0),U!=null&&(p.renderCache[U]=void 0),$&256){p.ctx.deactivate(d);return}const G=$&1&&L,re=!ys(d);let X;if(re&&(X=R&&R.onVnodeBeforeUnmount)&&ft(X,p,d),$&6)Qs(d.component,g,b);else{if($&128){d.suspense.unmount(g,b);return}G&&sn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,g,M,b):w&&!w.hasOnce&&(E!==Ze||N>0&&N&64)?Ke(w,p,g,!1,!0):(E===Ze&&N&384||!y&&$&16)&&Ke(S,p,g),b&&Tn(d)}(re&&(X=R&&R.onVnodeUnmounted)||G)&&We(()=>{X&&ft(X,p,d),G&&sn(d,null,p,"unmounted")},g)},Tn=d=>{const{type:p,el:g,anchor:b,transition:y}=d;if(p===Ze){Rn(g,b);return}if(p===yr){O(d);return}const E=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:T}=y,S=()=>R(g,E);T?T(d.el,E,S):S()}else E()},Rn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Qs=(d,p,g)=>{const{bum:b,scope:y,job:E,subTree:R,um:T,m:S,a:w}=d;Yl(S),Yl(w),b&&si(b),y.stop(),E&&(E.flags|=8,ke(R,d,p,g)),T&&We(T,p),We(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(d,p,g,b=!1,y=!1,E=0)=>{for(let R=E;R<d.length;R++)ke(d[R],p,g,b,y)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[Hd];return g?f(g):p};let x=!1;const A=(d,p,g)=>{d==null?p._vnode&&ke(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),p._vnode=d,x||(x=!0,Hl(),cu(),x=!1)},M={p:C,um:ke,m:ut,r:Tn,mt:rs,mc:lt,pc:z,pbc:at,n:v,o:t};let J,he;return{render:A,hydrate:J,createApp:fp(A,J)}}function gr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ep(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Nu(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ht(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Nu(o,l)),l.type===ji&&(l.el=o.el)}}function wp(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function xu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xu(e)}function Yl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Cp=Symbol.for("v-scx"),Ip=()=>xt(Cp);function ri(t,e,n){return Pu(t,e,n)}function Pu(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=we({},n),a=e&&s||!e&&r!=="post";let c;if(Ds){if(r==="sync"){const _=Ip();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=vt,_.resume=vt,_.pause=vt,_}}const u=Ae;l.call=(_,m,C)=>Et(_,u,m,C);let h=!1;r==="post"?l.scheduler=_=>{We(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():Bo(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Ld(t,e,l);return Ds&&(c?c.push(f):a&&f()),f}function Sp(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Ou(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=qs(this),l=Pu(i,r.bind(s),n);return o(),l}function Ou(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Tp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Je(e)}Modifiers`]||t[`${bn(e)}Modifiers`];function Rp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&Tp(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>_e(u)?u.trim():u)),o.number&&(i=n.map(Ur)));let l,a=s[l=ur(e)]||s[l=ur(Je(e))];!a&&r&&(a=s[l=ur(bn(e))]),a&&Et(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Et(c,t,6,i)}}function Du(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=Du(c,e,!0);u&&(l=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ce(t)&&s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):we(o,r),ce(t)&&s.set(t,o),o)}function Wi(t,e){return!t||!Di(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,bn(e))||Q(t,e))}function mr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:_,ctx:m,inheritAttrs:C}=t,D=hi(t);let k,P;try{if(n.shapeFlag&4){const O=i||s,ne=O;k=mt(c.call(ne,O,u,h,_,f,m)),P=l}else{const O=e;k=mt(O.length>1?O(h,{attrs:l,slots:o,emit:a}):O(h,null)),P=e.props?l:Ap(l)}}catch(O){bs.length=0,Hi(O,t,1),k=Le(dn)}let F=k;if(P&&C!==!1){const O=Object.keys(P),{shapeFlag:ne}=F;O.length&&ne&7&&(r&&O.some(Ao)&&(P=Np(P,r)),F=jn(F,P,!1,!0))}return n.dirs&&(F=jn(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Uo(F,n.transition),k=F,hi(D),k}const Ap=t=>{let e;for(const n in t)(n==="class"||n==="style"||Di(n))&&((e||(e={}))[n]=t[n]);return e},Np=(t,e)=>{const n={};for(const s in t)(!Ao(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ql(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Wi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ql(s,o,c):!0:!!o;return!1}function Ql(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wi(n,r))return!0}return!1}function Pp({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ku=t=>t.__isSuspense;function Op(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Bd(t)}const Ze=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),bs=[];let Ge=null;function Pe(t=!1){bs.push(Ge=t?null:[])}function Dp(){bs.pop(),Ge=bs[bs.length-1]||null}let Os=1;function Jl(t,e=!1){Os+=t,t<0&&Ge&&e&&(Ge.hasOnce=!0)}function Mu(t){return t.dynamicChildren=Os>0?Ge||Mn:null,Dp(),Os>0&&Ge&&Ge.push(t),t}function Me(t,e,n,s,i,r){return Mu(ge(t,e,n,s,i,r,!0))}function kp(t,e,n,s,i){return Mu(Le(t,e,n,s,i,!0))}function pi(t){return t?t.__v_isVNode===!0:!1}function as(t,e){return t.type===e.type&&t.key===e.key}const Lu=({key:t})=>t??null,oi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Ne(t)||V(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function ge(t,e=null,n=null,s=0,i=null,r=t===Ze?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lu(e),ref:e&&oi(e),scopeId:hu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return l?(jo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),Os>0&&!o&&Ge&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ge.push(a),a}const Le=Mp;function Mp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===sp)&&(t=dn),pi(t)){const l=jn(t,e,!0);return n&&jo(l,n),Os>0&&!r&&Ge&&(l.shapeFlag&6?Ge[Ge.indexOf(t)]=l:Ge.push(l)),l.patchFlag=-2,l}if(Gp(t)&&(t=t.__vccOpts),e){e=Lp(e);let{class:l,style:a}=e;l&&!_e(l)&&(e.class=$i(l)),ce(a)&&($o(a)&&!H(a)&&(a=we({},a)),e.style=Po(a))}const o=_e(t)?1:ku(t)?128:Vd(t)?64:ce(t)?4:V(t)?2:0;return ge(t,e,n,s,i,o,r,!0)}function Lp(t){return t?$o(t)||wu(t)?we({},t):t:null}function jn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Fp(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lu(c),ref:e&&e.ref?n&&r?H(r)?r.concat(oi(e)):[r,oi(e)]:oi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Uo(u,a.clone(u)),u}function Wo(t=" ",e=0){return Le(ji,null,t,e)}function Fu(t="",e=!1){return e?(Pe(),kp(dn,null,t)):Le(dn,null,t)}function mt(t){return t==null||typeof t=="boolean"?Le(dn):H(t)?Le(Ze,null,t.slice()):pi(t)?Ht(t):Le(ji,null,String(t))}function Ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function jo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),jo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!wu(e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),s&64?(n=16,e=[Wo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=$i([e.class,s.class]));else if(i==="style")e.style=Po([e.style,s.style]);else if(Di(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){Et(t,e,7,[n,s])}const $p=vu();let Bp=0;function Up(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$p,r={uid:Bp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Iu(s,i),emitsOptions:Du(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Rp.bind(null,r),t.ce&&t.ce(r),r}let Ae=null,_i,Qr;{const t=Fi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};_i=e("__VUE_INSTANCE_SETTERS__",n=>Ae=n),Qr=e("__VUE_SSR_SETTERS__",n=>Ds=n)}const qs=t=>{const e=Ae;return _i(t),t.scope.on(),()=>{t.scope.off(),_i(e)}},Xl=()=>{Ae&&Ae.scope.off(),_i(null)};function $u(t){return t.vnode.shapeFlag&4}let Ds=!1;function Hp(t,e=!1,n=!1){e&&Qr(e);const{props:s,children:i}=t.vnode,r=$u(t);dp(t,s,r,e),mp(t,i,n);const o=r?Vp(t,e):void 0;return e&&Qr(!1),o}function Vp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rp);const{setup:s}=n;if(s){Zt();const i=t.setupContext=s.length>1?jp(t):null,r=qs(t),o=js(s,t,0,[t.props,i]),l=Mc(o);if(en(),r(),(l||t.sp)&&!ys(t)&&pu(t),l){if(o.then(Xl,Xl),e)return o.then(a=>{Zl(t,a,e)}).catch(a=>{Hi(a,t,0)});t.asyncDep=o}else Zl(t,o,e)}else Bu(t,e)}function Zl(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=ru(e)),Bu(t,n)}let ea;function Bu(t,e,n){const s=t.type;if(!t.render){if(!e&&ea&&!s.render){const i=s.template||Ho(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=we(we({isCustomElement:r,delimiters:l},o),a);s.render=ea(i,c)}}t.render=s.render||vt}{const i=qs(t);Zt();try{op(t)}finally{en(),i()}}}const Wp={get(t,e){return Te(t,"get",""),t[e]}};function jp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Wp),slots:t.slots,emit:t.emit,expose:e}}function qi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ru(Ad(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vs)return vs[n](t)},has(e,n){return n in e||n in vs}})):t.proxy}function qp(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Gp(t){return V(t)&&"__vccOpts"in t}const et=(t,e)=>kd(t,e,Ds);function Uu(t,e,n){const s=arguments.length;return s===2?ce(e)&&!H(e)?pi(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pi(n)&&(n=[n]),Le(t,e,n))}const Kp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jr;const ta=typeof window<"u"&&window.trustedTypes;if(ta)try{Jr=ta.createPolicy("vue",{createHTML:t=>t})}catch{}const Hu=Jr?t=>Jr.createHTML(t):t=>t,zp="http://www.w3.org/2000/svg",Yp="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,na=Tt&&Tt.createElement("template"),Qp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Tt.createElementNS(zp,t):e==="mathml"?Tt.createElementNS(Yp,t):n?Tt.createElement(t,{is:n}):Tt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{na.innerHTML=Hu(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=na.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jp=Symbol("_vtc");function Xp(t,e,n){const s=t[Jp];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sa=Symbol("_vod"),Zp=Symbol("_vsh"),e_=Symbol(""),t_=/(^|;)\s*display\s*:/;function n_(t,e,n){const s=t.style,i=_e(n);let r=!1;if(n&&!i){if(e)if(_e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&li(s,l,"")}else for(const o in e)n[o]==null&&li(s,o,"");for(const o in n)o==="display"&&(r=!0),li(s,o,n[o])}else if(i){if(e!==n){const o=s[e_];o&&(n+=";"+o),s.cssText=n,r=t_.test(n)}}else e&&t.removeAttribute("style");sa in t&&(t[sa]=r?s.display:"",t[Zp]&&(s.display="none"))}const ia=/\s*!important$/;function li(t,e,n){if(H(n))n.forEach(s=>li(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=s_(t,e);ia.test(n)?t.setProperty(bn(s),n.replace(ia,""),"important"):t[s]=n}}const ra=["Webkit","Moz","ms"],vr={};function s_(t,e){const n=vr[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return vr[e]=s;s=Li(s);for(let i=0;i<ra.length;i++){const r=ra[i]+s;if(r in t)return vr[e]=r}return e}const oa="http://www.w3.org/1999/xlink";function la(t,e,n,s,i,r=ld(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(oa,e.slice(6,e.length)):t.setAttributeNS(oa,e,n):n==null||r&&!Bc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Xt(n)?String(n):n)}function aa(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hu(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function i_(t,e,n,s){t.removeEventListener(e,n,s)}const ca=Symbol("_vei");function r_(t,e,n,s,i=null){const r=t[ca]||(t[ca]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=o_(e);if(s){const c=r[e]=c_(s,i);Pn(t,l,c,a)}else o&&(i_(t,l,o,a),r[e]=void 0)}}const ua=/(?:Once|Passive|Capture)$/;function o_(t){let e;if(ua.test(t)){e={};let s;for(;s=t.match(ua);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bn(t.slice(2)),e]}let br=0;const l_=Promise.resolve(),a_=()=>br||(l_.then(()=>br=0),br=Date.now());function c_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(u_(s,n.value),e,5,[s])};return n.value=t,n.attached=a_(),n}function u_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,h_=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Xp(t,s,o):e==="style"?n_(t,n,s):Di(e)?Ao(e)||r_(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(t,e,s,o))?(aa(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&la(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(s))?aa(t,Je(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),la(t,e,s,o))};function f_(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ha(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ha(e)&&_e(n)?!1:e in t}const fa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>si(e,n):e};function d_(t){t.target.composing=!0}function da(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Er=Symbol("_assign"),Vu={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Er]=fa(i);const r=s||i.props&&i.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ur(l)),t[Er](l)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",d_),Pn(t,"compositionend",da),Pn(t,"change",da))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Er]=fa(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ur(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},p_=we({patchProp:h_},Qp);let pa;function __(){return pa||(pa=vp(p_))}const g_=(...t)=>{const e=__().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=y_(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,m_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function m_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function y_(t){return _e(t)?document.querySelector(t):t}const Gi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},v_={name:"App"},b_={id:"app"};function E_(t,e,n,s,i,r){const o=np("router-view");return Pe(),Me("div",b_,[e[0]||(e[0]=ge("h1",null,"¡Hola desde App.vue!",-1)),Le(o)])}const w_=Gi(v_,[["render",E_]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const On=typeof document<"u";function Wu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function C_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Wu(t.default)}const Z=Object.assign;function wr(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const Es=()=>{},rt=Array.isArray,ju=/#/g,I_=/&/g,S_=/\//g,T_=/=/g,R_=/\?/g,qu=/\+/g,A_=/%5B/g,N_=/%5D/g,Gu=/%5E/g,x_=/%60/g,Ku=/%7B/g,P_=/%7C/g,zu=/%7D/g,O_=/%20/g;function qo(t){return encodeURI(""+t).replace(P_,"|").replace(A_,"[").replace(N_,"]")}function D_(t){return qo(t).replace(Ku,"{").replace(zu,"}").replace(Gu,"^")}function Xr(t){return qo(t).replace(qu,"%2B").replace(O_,"+").replace(ju,"%23").replace(I_,"%26").replace(x_,"`").replace(Ku,"{").replace(zu,"}").replace(Gu,"^")}function k_(t){return Xr(t).replace(T_,"%3D")}function M_(t){return qo(t).replace(ju,"%23").replace(R_,"%3F")}function L_(t){return t==null?"":M_(t).replace(S_,"%2F")}function ks(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const F_=/\/$/,$_=t=>t.replace(F_,"");function Cr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=V_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ks(o)}}function B_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _a(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function U_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&qn(e.matched[s],n.matched[i])&&Yu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H_(t[n],e[n]))return!1;return!0}function H_(t,e){return rt(t)?ga(t,e):rt(e)?ga(e,t):t===e}function ga(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function V_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function W_(t){if(!t)if(On){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$_(t)}const j_=/^[^#]+#/;function q_(t,e){return t.replace(j_,"#")+e}function G_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ki=()=>({left:window.scrollX,top:window.scrollY});function K_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=G_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ma(t,e){return(history.state?history.state.position-e:-1)+t}const Zr=new Map;function z_(t,e){Zr.set(t,e)}function Y_(t){const e=Zr.get(t);return Zr.delete(t),e}let Q_=()=>location.protocol+"//"+location.host;function Qu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),_a(a,"")}return _a(n,t)+s+i}function J_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Qu(t,location),m=n.value,C=e.value;let D=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}D=C?f.position-C.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:D,type:Ms.pop,direction:D?D>0?ws.forward:ws.back:ws.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(Z({},f.state,{scroll:Ki()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function ya(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ki():null}}function X_(t){const{history:e,location:n}=window,s={value:Qu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Q_()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=Z({},e.state,ya(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=Z({},i.value,e.state,{forward:a,scroll:Ki()});r(u.current,u,!0);const h=Z({},ya(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Z_(t){t=W_(t);const e=X_(t),n=J_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:t,go:s,createHref:q_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function eg(t){return typeof t=="string"||t&&typeof t=="object"}function Ju(t){return typeof t=="string"||typeof t=="symbol"}const Xu=Symbol("");var va;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(va||(va={}));function Gn(t,e){return Z(new Error,{type:t,[Xu]:!0},e)}function St(t,e){return t instanceof Error&&Xu in t&&(e==null||!!(t.type&e))}const ba="[^/]+?",tg={sensitive:!1,strict:!1,start:!0,end:!0},ng=/[.+*?^${}()[\]/\\]/g;function sg(t,e){const n=Z({},tg,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(ng,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:C,optional:D,regexp:k}=f;r.push({name:m,repeatable:C,optional:D});const P=k||ba;if(P!==ba){_+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+O.message)}}let F=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(F=D&&c.length<2?`(?:/${F})`:"/"+F),D&&(F+="?"),i+=F,_+=20,D&&(_+=-8),C&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:C,optional:D}=_,k=m in c?c[m]:"";if(rt(k)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=rt(k)?k.join("/"):k;if(!P)if(D)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function ig(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Zu(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ig(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ea(s))return 1;if(Ea(i))return-1}return i.length-s.length}function Ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rg={type:0,value:""},og=/[a-zA-Z0-9_]/;function lg(t){if(!t)return[[]];if(t==="/")return[[rg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:og.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ag(t,e,n){const s=sg(lg(t.path),n),i=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cg(t,e){const n=[],s=new Map;e=Sa({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,_){const m=!_,C=Ca(h);C.aliasOf=_&&_.record;const D=Sa(e,h),k=[C];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const ne of O)k.push(Ca(Z({},C,{components:_?_.record.components:C.components,path:ne,aliasOf:_?_.record:C})))}let P,F;for(const O of k){const{path:ne}=O;if(f&&ne[0]!=="/"){const Ie=f.record.path,ue=Ie[Ie.length-1]==="/"?"":"/";O.path=f.record.path+(ne&&ue+ne)}if(P=ag(O,f,D),_?_.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),m&&h.name&&!Ia(P)&&o(h.name)),eh(P)&&a(P),C.children){const Ie=C.children;for(let ue=0;ue<Ie.length;ue++)r(Ie[ue],P,_&&_.children[ue])}_=_||P}return F?()=>{o(F)}:Es}function o(h){if(Ju(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function a(h){const f=fg(h,n);n.splice(f,0,h),h.record.name&&!Ia(h)&&s.set(h.record.name,h)}function c(h,f){let _,m={},C,D;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw Gn(1,{location:h});D=_.record.name,m=Z(wa(f.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),h.params&&wa(h.params,_.keys.map(F=>F.name))),C=_.stringify(m)}else if(h.path!=null)C=h.path,_=n.find(F=>F.re.test(C)),_&&(m=_.parse(C),D=_.record.name);else{if(_=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!_)throw Gn(1,{location:h,currentLocation:f});D=_.record.name,m=Z({},f.params,h.params),C=_.stringify(m)}const k=[];let P=_;for(;P;)k.unshift(P.record),P=P.parent;return{name:D,path:C,params:m,matched:k,meta:hg(k)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function wa(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ca(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ug(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ug(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ia(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hg(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function Sa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fg(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Zu(t,e[r])<0?s=r:n=r+1}const i=dg(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function dg(t){let e=t;for(;e=e.parent;)if(eh(e)&&Zu(t,e)===0)return e}function eh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pg(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(qu," "),o=r.indexOf("="),l=ks(o<0?r:r.slice(0,o)),a=o<0?null:ks(r.slice(o+1));if(l in e){let c=e[l];rt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Ta(t){let e="";for(let n in t){const s=t[n];if(n=k_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&Xr(r)):[s&&Xr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function _g(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const gg=Symbol(""),Ra=Symbol(""),Go=Symbol(""),th=Symbol(""),eo=Symbol("");function cs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Gn(4,{from:n,to:e})):f instanceof Error?a(f):eg(f)?a(Gn(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function Ir(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Wu(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Vt(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const h=C_(u)?u.default:u;o.mods[l]=u,o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&Vt(_,n,s,o,l,i)()}))}}return r}function Aa(t){const e=xt(Go),n=xt(th),s=et(()=>{const a=$n(t.to);return e.resolve(a)}),i=et(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(qn.bind(null,u));if(f>-1)return f;const _=Na(a[c-2]);return c>1&&Na(u)===_&&h[h.length-1].path!==_?h.findIndex(qn.bind(null,a[c-2])):f}),r=et(()=>i.value>-1&&bg(n.params,s.value.params)),o=et(()=>i.value>-1&&i.value===n.matched.length-1&&Yu(n.params,s.value.params));function l(a={}){return vg(a)?e[$n(t.replace)?"replace":"push"]($n(t.to)).catch(Es):Promise.resolve()}return{route:s,href:et(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const mg=du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Aa,setup(t,{slots:e}){const n=Ui(Aa(t)),{options:s}=xt(Go),i=et(()=>({[xa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Uu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),yg=mg;function vg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Na(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xa=(t,e,n)=>t??e??n,Eg=du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xt(eo),i=et(()=>t.route||s.value),r=xt(Ra,0),o=et(()=>{let c=$n(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=et(()=>i.value.matched[o.value]);ii(Ra,et(()=>o.value+1)),ii(gg,l),ii(eo,i);const a=Nd();return ri(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!qn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Pa(n.default,{Component:f,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,D=Uu(f,Z({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Pa(n.default,{Component:D,route:c})||D}}});function Pa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wg=Eg;function Cg(t){const e=cg(t.routes,t),n=t.parseQuery||pg,s=t.stringifyQuery||Ta,i=t.history,r=cs(),o=cs(),l=cs(),a=xd(Bt);let c=Bt;On&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wr.bind(null,v=>""+v),h=wr.bind(null,L_),f=wr.bind(null,ks);function _(v,x){let A,M;return Ju(v)?(A=e.getRecordMatcher(v),M=x):M=v,e.addRoute(M,A)}function m(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function C(){return e.getRoutes().map(v=>v.record)}function D(v){return!!e.getRecordMatcher(v)}function k(v,x){if(x=Z({},x||a.value),typeof v=="string"){const p=Cr(n,v,x.path),g=e.resolve({path:p.path},x),b=i.createHref(p.fullPath);return Z(p,g,{params:f(g.params),hash:ks(p.hash),redirectedFrom:void 0,href:b})}let A;if(v.path!=null)A=Z({},v,{path:Cr(n,v.path,x.path).path});else{const p=Z({},v.params);for(const g in p)p[g]==null&&delete p[g];A=Z({},v,{params:h(p)}),x.params=h(x.params)}const M=e.resolve(A,x),J=v.hash||"";M.params=u(f(M.params));const he=B_(s,Z({},v,{hash:D_(J),path:M.path})),d=i.createHref(he);return Z({fullPath:he,hash:J,query:s===Ta?_g(v.query):v.query||{}},M,{redirectedFrom:void 0,href:d})}function P(v){return typeof v=="string"?Cr(n,v,a.value.path):Z({},v)}function F(v,x){if(c!==v)return Gn(8,{from:x,to:v})}function O(v){return ue(v)}function ne(v){return O(Z(P(v),{replace:!0}))}function Ie(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let M=typeof A=="function"?A(v):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),Z({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function ue(v,x){const A=c=k(v),M=a.value,J=v.state,he=v.force,d=v.replace===!0,p=Ie(A);if(p)return ue(Z(P(p),{state:typeof p=="object"?Z({},J,p.state):J,force:he,replace:d}),x||A);const g=A;g.redirectedFrom=x;let b;return!he&&U_(s,M,A)&&(b=Gn(16,{to:g,from:M}),ut(M,M,!0,!1)),(b?Promise.resolve(b):at(g,M)).catch(y=>St(y)?St(y,2)?y:$t(y):z(y,g,M)).then(y=>{if(y){if(St(y,2))return ue(Z({replace:d},P(y.to),{state:typeof y.to=="object"?Z({},J,y.to.state):J,force:he}),x||g)}else y=nn(g,M,!0,d,J);return Ft(g,M,y),y})}function lt(v,x){const A=F(v,x);return A?Promise.reject(A):Promise.resolve()}function Lt(v){const x=Rn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function at(v,x){let A;const[M,J,he]=Ig(v,x);A=Ir(M.reverse(),"beforeRouteLeave",v,x);for(const p of M)p.leaveGuards.forEach(g=>{A.push(Vt(g,v,x))});const d=lt.bind(null,v,x);return A.push(d),Ke(A).then(()=>{A=[];for(const p of r.list())A.push(Vt(p,v,x));return A.push(d),Ke(A)}).then(()=>{A=Ir(J,"beforeRouteUpdate",v,x);for(const p of J)p.updateGuards.forEach(g=>{A.push(Vt(g,v,x))});return A.push(d),Ke(A)}).then(()=>{A=[];for(const p of he)if(p.beforeEnter)if(rt(p.beforeEnter))for(const g of p.beforeEnter)A.push(Vt(g,v,x));else A.push(Vt(p.beforeEnter,v,x));return A.push(d),Ke(A)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),A=Ir(he,"beforeRouteEnter",v,x,Lt),A.push(d),Ke(A))).then(()=>{A=[];for(const p of o.list())A.push(Vt(p,v,x));return A.push(d),Ke(A)}).catch(p=>St(p,8)?p:Promise.reject(p))}function Ft(v,x,A){l.list().forEach(M=>Lt(()=>M(v,x,A)))}function nn(v,x,A,M,J){const he=F(v,x);if(he)return he;const d=x===Bt,p=On?history.state:{};A&&(M||d?i.replace(v.fullPath,Z({scroll:d&&p&&p.scroll},J)):i.push(v.fullPath,J)),a.value=v,ut(v,x,A,d),$t()}let ct;function rs(){ct||(ct=i.listen((v,x,A)=>{if(!Qs.listening)return;const M=k(v),J=Ie(M);if(J){ue(Z(J,{replace:!0}),M).catch(Es);return}c=M;const he=a.value;On&&z_(ma(he.fullPath,A.delta),Ki()),at(M,he).catch(d=>St(d,12)?d:St(d,2)?(ue(d.to,M).then(p=>{St(p,20)&&!A.delta&&A.type===Ms.pop&&i.go(-1,!1)}).catch(Es),Promise.reject()):(A.delta&&i.go(-A.delta,!1),z(d,M,he))).then(d=>{d=d||nn(M,he,!1),d&&(A.delta&&!St(d,8)?i.go(-A.delta,!1):A.type===Ms.pop&&St(d,20)&&i.go(-1,!1)),Ft(M,he,d)}).catch(Es)}))}let Sn=cs(),me=cs(),te;function z(v,x,A){$t(v);const M=me.list();return M.length?M.forEach(J=>J(v,x,A)):console.error(v),Promise.reject(v)}function Ct(){return te&&a.value!==Bt?Promise.resolve():new Promise((v,x)=>{Sn.add([v,x])})}function $t(v){return te||(te=!v,rs(),Sn.list().forEach(([x,A])=>v?A(v):x()),Sn.reset()),v}function ut(v,x,A,M){const{scrollBehavior:J}=t;if(!On||!J)return Promise.resolve();const he=!A&&Y_(ma(v.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return lu().then(()=>J(v,x,he)).then(d=>d&&K_(d)).catch(d=>z(d,v,x))}const ke=v=>i.go(v);let Tn;const Rn=new Set,Qs={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:C,resolve:k,options:t,push:O,replace:ne,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:me.add,isReady:Ct,install(v){const x=this;v.component("RouterLink",yg),v.component("RouterView",wg),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>$n(a)}),On&&!Tn&&a.value===Bt&&(Tn=!0,O(i.location).catch(J=>{}));const A={};for(const J in Bt)Object.defineProperty(A,J,{get:()=>a.value[J],enumerable:!0});v.provide(Go,x),v.provide(th,nu(A)),v.provide(eo,a);const M=v.unmount;Rn.add(v),v.unmount=function(){Rn.delete(v),Rn.size<1&&(c=Bt,ct&&ct(),ct=null,a.value=Bt,Tn=!1,te=!1),M()}}};function Ke(v){return v.reduce((x,A)=>x.then(()=>Lt(A)),Promise.resolve())}return Qs}function Ig(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>qn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>qn(c,a))||i.push(a))}return[n,s,i]}var Oa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw es(e)},es=function(t){return new Error("Firebase Database ("+nh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Tg;const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ih=function(t){const e=sh(t);return Ko.encodeByteArray(e,!0)},gi=function(t){return ih(t).replace(/\./g,"")},to=function(t){try{return Ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){return rh(void 0,t)}function rh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ag(n)||(t[n]=rh(t[n],e[n]));return t}function Ag(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=()=>Ng().__FIREBASE_DEFAULTS__,Pg=()=>{if(typeof process>"u"||typeof Oa>"u")return;const t=Oa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Og=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&to(t[1]);return e&&JSON.parse(e)},oh=()=>{try{return xg()||Pg()||Og()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dg=t=>{var e,n;return(n=(e=oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kg=t=>{const e=Dg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lh=()=>{var t;return(t=oh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gi(JSON.stringify(n)),gi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lg())}function Fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ch(){return nh.NODE_ADMIN===!0}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Bg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ug,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,s)}}function Hg(t,e){return t.replace(Vg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Vg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ls(to(r[0])||""),n=Ls(to(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Wg=function(t){const e=fh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jg=function(t){const e=fh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function no(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function so(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Da(r)&&Da(o)){if(!so(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Da(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function zn(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=1e3,Yg=2,Qg=4*60*60*1e3,Jg=.5;function ka(t,e=zg,n=Yg){const s=e*Math.pow(n,t),i=Math.round(Jg*s*(Math.random()-.5)*2);return Math.min(Qg,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(em(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zg(t){return t===ln?void 0:t}function em(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const nm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},sm=ae.INFO,im={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},rm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=im[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=sm,this._logHandler=rm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const om=(t,e)=>e.some(n=>t instanceof n);let Ma,La;function lm(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function am(){return La||(La=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dh=new WeakMap,io=new WeakMap,ph=new WeakMap,Sr=new WeakMap,Yo=new WeakMap;function cm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dh.set(n,t)}).catch(()=>{}),Yo.set(e,t),e}function um(t){if(io.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});io.set(t,e)}let ro={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ph.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hm(t){ro=t(ro)}function fm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Tr(this),e,...n);return ph.set(s,e.sort?e.sort():[e]),qt(s)}:am().includes(t)?function(...e){return t.apply(Tr(this),e),qt(dh.get(this))}:function(...e){return qt(t.apply(Tr(this),e))}}function dm(t){return typeof t=="function"?fm(t):(t instanceof IDBTransaction&&um(t),om(t,lm())?new Proxy(t,ro):t)}function qt(t){if(t instanceof IDBRequest)return cm(t);if(Sr.has(t))return Sr.get(t);const e=dm(t);return e!==t&&(Sr.set(t,e),Yo.set(e,t)),e}const Tr=t=>Yo.get(t);function _h(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=qt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(qt(o.result),a.oldVersion,a.newVersion,qt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const pm=["get","getKey","getAll","getAllKeys","count"],_m=["put","add","delete","clear"],Rr=new Map;function Fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rr.get(e))return Rr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_m.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||pm.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Rr.set(e,r),r}hm(t=>({...t,get:(e,n,s)=>Fa(e,n)||t.get(e,n,s),has:(e,n)=>!!Fa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",$a="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new zo("@firebase/app"),ym="@firebase/app-compat",vm="@firebase/analytics-compat",bm="@firebase/analytics",Em="@firebase/app-check-compat",wm="@firebase/app-check",Cm="@firebase/auth",Im="@firebase/auth-compat",Sm="@firebase/database",Tm="@firebase/data-connect",Rm="@firebase/database-compat",Am="@firebase/functions",Nm="@firebase/functions-compat",xm="@firebase/installations",Pm="@firebase/installations-compat",Om="@firebase/messaging",Dm="@firebase/messaging-compat",km="@firebase/performance",Mm="@firebase/performance-compat",Lm="@firebase/remote-config",Fm="@firebase/remote-config-compat",$m="@firebase/storage",Bm="@firebase/storage-compat",Um="@firebase/firestore",Hm="@firebase/vertexai",Vm="@firebase/firestore-compat",Wm="firebase",jm="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="[DEFAULT]",qm={[oo]:"fire-core",[ym]:"fire-core-compat",[bm]:"fire-analytics",[vm]:"fire-analytics-compat",[wm]:"fire-app-check",[Em]:"fire-app-check-compat",[Cm]:"fire-auth",[Im]:"fire-auth-compat",[Sm]:"fire-rtdb",[Tm]:"fire-data-connect",[Rm]:"fire-rtdb-compat",[Am]:"fire-fn",[Nm]:"fire-fn-compat",[xm]:"fire-iid",[Pm]:"fire-iid-compat",[Om]:"fire-fcm",[Dm]:"fire-fcm-compat",[km]:"fire-perf",[Mm]:"fire-perf-compat",[Lm]:"fire-rc",[Fm]:"fire-rc-compat",[$m]:"fire-gcs",[Bm]:"fire-gcs-compat",[Um]:"fire-fst",[Vm]:"fire-fst-compat",[Hm]:"fire-vertex","fire-js":"fire-js",[Wm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,Gm=new Map,ao=new Map;function Ba(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(ao.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,t);for(const n of yi.values())Ba(n,t);for(const n of Gm.values())Ba(n,t);return!0}function Qo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new zi("app","Firebase",Km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=jm;function gh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=lh()),!n)throw Gt.create("no-options");const r=yi.get(i);if(r){if(so(n,r.options)&&so(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new tm(i);for(const a of ao.values())o.addComponent(a);const l=new zm(n,s,o);return yi.set(i,l),l}function Qm(t=lo){const e=yi.get(t);if(!e&&t===lo&&lh())return gh();if(!e)throw Gt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=(s=qm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(l.join(" "));return}zt(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebase-heartbeat-database",Xm=1,Fs="firebase-heartbeat-store";let Ar=null;function mh(){return Ar||(Ar=_h(Jm,Xm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Ar}async function Zm(t){try{const n=(await mh()).transaction(Fs),s=await n.objectStore(Fs).get(yh(t));return await n.done,s}catch(e){if(e instanceof En)Dt.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function Ua(t,e){try{const s=(await mh()).transaction(Fs,"readwrite");await s.objectStore(Fs).put(e,yh(t)),await s.done}catch(n){if(n instanceof En)Dt.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(s.message)}}}function yh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ha();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ty}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ha(),{heartbeatsToSend:s,unsentEntries:i}=sy(this._heartbeatsCache.heartbeats),r=gi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Dt.warn(n),""}}}function Ha(){return new Date().toISOString().substring(0,10)}function sy(t,e=ey){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Va(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Va(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Va(t){return gi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){zt(new Ot("platform-logger",e=>new gm(e),"PRIVATE")),zt(new Ot("heartbeat",e=>new ny(e),"PRIVATE")),bt(oo,$a,t),bt(oo,$a,"esm2017"),bt("fire-js","")}ry("");var Wa={};const ja="@firebase/database",qa="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh="";function oy(t){vh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ly(e)}}catch{}return new ay},cn=bh("localStorage"),cy=bh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new zo("@firebase/database"),uy=function(){let t=1;return function(){return t++}}(),Eh=function(t){const e=Kg(t),n=new Gg;n.update(e);const s=n.digest();return Ko.encodeByteArray(s)},Gs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gs.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Cs=null,Ga=!0;const hy=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Hn.logLevel=ae.VERBOSE,Cs=Hn.log.bind(Hn)},be=function(...t){if(Ga===!0&&(Ga=!1,Cs===null&&cy.get("logging_enabled")===!0&&hy()),Cs){const e=Gs.apply(null,t);Cs(e)}},Ks=function(t){return function(...e){be(t,...e)}},co=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gs(...t);Hn.error(e)},kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Gs(...t)}`;throw Hn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Gs(...t);Hn.warn(e)},fy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yn="[MIN_NAME]",pn="[MAX_NAME]",Cn=function(t,e){if(t===e)return 0;if(t===Yn||e===pn)return-1;if(e===Yn||t===pn)return 1;{const n=Ka(t),s=Ka(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},py=function(t,e){return t===e?0:t<e?-1:1},us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},Jo=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=Jo(t[e[s]]);return n+="}",n},wh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ch=function(t){I(!Qi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},_y=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function my(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const yy=new RegExp("^-?(0*)\\d{1,10}$"),vy=-2147483648,by=2147483647,Ka=function(t){if(yy.test(t)){const e=Number(t);if(e>=vy&&e<=by)return e}return null},ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ey=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Is=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class ai{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ai.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="5",Ih="v",Sh="s",Th="r",Rh="f",Ah=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nh="ls",xh="p",uo="ac",Ph="websocket",Oh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Iy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kh(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Ph)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Oh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Iy(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={},xr={};function Zo(t){const e=t.toString();return Nr[e]||(Nr[e]=new Sy),Nr[e]}function Ty(t,e){const n=t.toString();return xr[n]||(xr[n]=e()),xr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ts(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="start",Ay="close",Ny="pLPCommand",xy="pRTLPCB",Mh="id",Lh="pw",Fh="ser",Py="cb",Oy="seg",Dy="ts",ky="d",My="dframe",$h=1870,Bh=30,Ly=$h-Bh,Fy=25e3,$y=3e4;class Dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ks(e),this.stats_=Zo(n),this.urlFn=a=>(this.appCheckToken&&(a[uo]=this.appCheckToken),kh(n,Oh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ry(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($y)),dy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new el((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===za)this.id=l,this.password=a;else if(o===Ay)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[za]="t",s[Fh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Py]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ih]=Xo,this.transportSessionId&&(s[Sh]=this.transportSessionId),this.lastSessionId&&(s[Nh]=this.lastSessionId),this.applicationId&&(s[xh]=this.applicationId),this.appCheckToken&&(s[uo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(s[Th]=Rh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dn.forceAllow_=!0}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){return Dn.forceAllow_?!0:!Dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_y()&&!gy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ih(n),i=wh(s,Ly);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[My]="t",s[Mh]=e,s[Lh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class el{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uy(),window[Ny+this.uniqueCallbackIdentifier]=e,window[xy+this.uniqueCallbackIdentifier]=n,this.myIFrame=el.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mh]=this.myID,e[Lh]=this.myPW,e[Fh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bh+s.length<=$h;){const o=this.pendingSegs.shift();s=s+"&"+Oy+i+"="+o.seg+"&"+Dy+i+"="+o.ts+"&"+ky+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Fy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=16384,Uy=45e3;let vi=null;typeof MozWebSocket<"u"?vi=MozWebSocket:typeof WebSocket<"u"&&(vi=WebSocket);class tt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ks(this.connId),this.stats_=Zo(n),this.connURL=tt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ih]=Xo,typeof location<"u"&&location.hostname&&Ah.test(location.hostname)&&(o[Th]=Rh),n&&(o[Sh]=n),s&&(o[Nh]=s),i&&(o[uo]=i),r&&(o[xh]=r),kh(e,Ph,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cn.set("previous_websocket_failure",!0);try{let s;ch(),this.mySock=new vi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vi!==null&&!tt.forceDisallow_}static previouslyFailed(){return cn.isInMemoryStorage||cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wh(n,By);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Uy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static get ALL_TRANSPORTS(){return[Dn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of $s.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$s.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=6e4,Vy=5e3,Wy=10*1024,jy=100*1024,Pr="t",Ya="d",qy="s",Qa="r",Gy="e",Ja="o",Xa="a",Za="n",ec="p",Ky="h";class zy{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ks("c:"+this.id+":"),this.transportManager_=new $s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pr in e){const n=e[Pr];n===Xa?this.upgradeIfSecondaryHealthy_():n===Qa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ja&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),s=us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ec,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Za,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),s=us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(Pr,e);if(Ya in e){const s=e[Ya];if(n===Ky){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Za){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qy?this.onConnectionShutdown_(s):n===Qa?this.onReset_(s):n===Gy?co("Server Error: "+s):n===Ja?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):co("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xo!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ec,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Hh{static getInstance(){return new bi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=32,nc=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new ee("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function tl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=W(t),s=W(e);if(n===null)return e;if(n===s)return Fe(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Qy(t,e){const n=Bs(t,0),s=Bs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Cn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function nl(t,e){if(Yt(t)!==Yt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Yt(t)>Yt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Jy{constructor(e,n){this.errorPrefix_=n,this.parts_=Bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Yi(this.parts_[s]);Wh(this)}}function Xy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yi(e),Wh(t)}function Zy(t){const e=t.parts_.pop();t.byteLength_-=Yi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wh(t){if(t.byteLength_>nc)throw new Error(t.errorPrefix_+"has a key path longer than "+nc+" bytes ("+t.byteLength_+").");if(t.parts_.length>tc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tc+") or object contains a cycle "+an(t))}function an(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Hh{static getInstance(){return new sl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=1e3,ev=60*5*1e3,sc=30*1e3,tv=1.3,nv=3e4,sv="server_kill",ic=3;class Pt extends Uh{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=Ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hs,this.maxReconnectDelay_=ev,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ch())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=Kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Wg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):co("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nv&&(this.reconnectDelay_=hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new zy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(sv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],no(this.interruptReasons_)&&(this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ic&&(this.reconnectDelay_=sc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ic&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vh.replace(/\./g,"-")]=1,ah()?e["framework.cordova"]=1:$g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bi.getInstance().currentlyOnline();return no(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(Yn,e),i=new q(Yn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;class jh extends Ji{static get __EMPTY_NODE(){return ei}static set __EMPTY_NODE(e){ei=e}compare(e,n){return Cn(e.name,n.name)}isDefinedOn(e){throw es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(pn,ei)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,ei)}toString(){return".key"}}const Vn=new jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??$e.EMPTY_NODE,this.right=r??$e.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class iv{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ti(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ti(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ti(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ti(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e){return Cn(t.name,e.name)}function il(t,e){return Cn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;function ov(t){ho=t}const qh=function(t){return typeof t=="number"?"number:"+Ch(t):"string:"+t},Gh=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else I(t===ho||t.isEmpty(),"priority of unexpected type.");I(t===ho||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;class ye{static set __childrenNodeConstructor(e){rc=e}static get __childrenNodeConstructor(){return rc}constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:W(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=W(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ch(this.value_):e+=this.value_,this.lazyHash_=Eh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh,zh;function lv(t){Kh=t}function av(t){zh=t}class cv extends Ji{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Cn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(pn,new ye("[PRIORITY-POST]",zh))}makePost(e,n){const s=Kh(e);return new q(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new cv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=Math.log(2);class hv{constructor(e){const n=r=>parseInt(Math.log(r)/uv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ei=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),C=i(_+1,c);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,m,C)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,C){const D=h-m,k=h;h-=m;const P=i(D+1,k),F=t[D],O=n?n(F):F;_(new ve(O,F.node,C,null,P))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const C=a.nextBitIsOne(),D=Math.pow(2,a.count-(m+1));C?f(D,ve.BLACK):(f(D,ve.BLACK),f(D,ve.RED))}return u},o=new hv(t.length),l=r(o);return new $e(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;const Nn={};class Nt{static get Default(){return I(Nn&&de,"ChildrenNode.ts has not been loaded"),Or=Or||new Nt({".priority":Nn},{".priority":de}),Or}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ei(s,e.getCompare()):l=Nn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Nt(u,c)}addToIndexes(e,n){const s=mi(this.indexes_,(i,r)=>{const o=Kn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Nn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ei(l,o.getCompare())}else return Nn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new q(e.name,l))),a.insert(e,e.node)}});return new Nt(s,this.indexSet_)}removeFromIndexes(e,n){const s=mi(this.indexes_,i=>{if(i===Nn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new Nt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class B{static get EMPTY_NODE(){return fs||(fs=new B(new $e(il),null,Nt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Gh(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fs:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fs:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=W(e);if(s===null)return n;{I(W(e)!==".priority"||Yt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qh(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Eh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fv extends B{constructor(){super(new $e(il),B.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const zs=new fv;Object.defineProperties(q,{MIN:{value:new q(Yn,B.EMPTY_NODE)},MAX:{value:new q(pn,zs)}});jh.__EMPTY_NODE=B.EMPTY_NODE;ye.__childrenNodeConstructor=B;ov(zs);av(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=!0;function pe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,pe(e))}if(!(t instanceof Array)&&dv){const n=[];let s=!1;if(Ce(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new q(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=Ei(n,rv,o=>o.name,il);if(s){const o=Ei(n,de.getCompare());return new B(r,pe(e),new Nt({".priority":o},{".priority":de}))}else return new B(r,pe(e),Nt.Default)}else{let n=B.EMPTY_NODE;return Ce(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pe(e))}}lv(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends Ji{constructor(e){super(),this.indexPath_=e,I(!j(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Cn(e.name,n.name):r}makePost(e,n){const s=pe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,zs);return new q(pn,e)}toString(){return Bs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v extends Ji{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Cn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=pe(e);return new q(n,s)}toString(){return".value"}}const gv=new _v;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){return{type:"value",snapshotNode:t}}function Qn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Us(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Qn(n,s)):o.trackChildChange(Hs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(Us(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Hs(i,r,o))}else s.trackChildChange(Qn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.indexedFilter_=new rl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vs.getStartPost_(e),this.endPost_=Vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,l)=>{r.matches(new q(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new q(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Hs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Us(n,h));const C=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Qn(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Us(c.name,c.node)),r.trackChildChange(Qn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new ol;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vv(t){return t.loadsAllData()?new rl(t.getIndex()):t.hasLimit()?new yv(t):new Vs(t)}function oc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===gv?n="$value":t.index_===Vn?n="$key":(I(t.index_ instanceof pv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Uh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ks("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wi.getListenId_(e,s),l={};this.listens_[o]=l;const a=oc(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Kn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=wi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=oc(e._queryParams),s=e._path.toString(),i=new yt;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ls(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return{value:null,children:new Map}}function ns(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=W(e);t.children.has(s)||t.children.set(s,Ci());const i=t.children.get(s);e=ie(e),ns(i,e,n)}}function fo(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(de,(s,i)=>{ns(t,new ee(s),i)}),fo(t,e)}}else if(t.children.size>0){const n=W(e);return e=ie(e),t.children.has(n)&&fo(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function po(t,e,n){t.value!==null?n(e,t.value):Ev(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);po(i,r,n)})}function Ev(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=10*1e3,Cv=30*1e3,Iv=5*60*1e3;class Sv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wv(e);const s=ac+(Cv-ac)*Math.random();Is(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ce(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Is(this.reportStats_.bind(this),Math.floor(Math.random()*2*Iv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function ll(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function al(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nt.ACK_USER_WRITE,this.source=ll()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new Ii(K(),n,this.revert)}}else return I(W(this.path)===e,"operationForChild called for unrelated child."),new Ii(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ws(this.source,K()):new Ws(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nt.OVERWRITE}operationForChild(e){return j(this.path)?new _n(this.source,K(),this.snap.getImmediateChild(e)):new _n(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new _n(this.source,K(),n.value):new Jn(this.source,K(),n)}else return I(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jn(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(mv(o.childName,o.snapshotNode))}),ds(t,i,"child_removed",e,s,n),ds(t,i,"child_added",e,s,n),ds(t,i,"child_moved",r,s,n),ds(t,i,"child_changed",e,s,n),ds(t,i,"value",e,s,n),i}function ds(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Nv(t,l,a)),o.forEach(l=>{const a=Av(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Av(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nv(t,e,n){if(e.childName==null||n.childName==null)throw es("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e){return{eventCache:t,serverCache:e}}function Ss(t,e,n,s){return Xi(new gn(e,n,s),t.serverCache)}function Qh(t,e,n,s){return Xi(t.eventCache,new gn(e,n,s))}function _o(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dr;const xv=()=>(Dr||(Dr=new $e(py)),Dr);class le{static fromObject(e){let n=new le(null);return Ce(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=xv()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(j(e))return null;{const s=W(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:fe(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=W(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new le(null)}}set(e,n){if(j(e))return new le(n,this.children);{const s=W(e),r=(this.children.get(s)||new le(null)).set(ie(e),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=W(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=W(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(j(e))return n;{const s=W(e),r=(this.children.get(s)||new le(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=W(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),fe(n,i),s):new le(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new le(null))}}function Ts(t,e,n){if(j(e))return new it(new le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new le(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function go(t,e,n){let s=t;return Ce(n,(i,r)=>{s=Ts(s,fe(e,i),r)}),s}function cc(t,e){if(j(e))return it.empty();{const n=t.writeTree_.setTree(e,new le(null));return new it(n)}}function mo(t,e){return In(t,e)!=null}function In(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function uc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Kt(t,e){if(j(e))return t;{const n=In(t,e);return n!=null?new it(new le(n)):new it(t.writeTree_.subtree(e))}}function yo(t){return t.writeTree_.isEmpty()}function Xn(t,e){return Jh(K(),t.writeTree_,e)}function Jh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Jh(fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(fe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e){return tf(e,t)}function Pv(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ts(t.visibleWrites,e,n)),t.lastWriteId=s}function Ov(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=go(t.visibleWrites,e,n),t.lastWriteId=s}function Dv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Mv(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Lv(t),!0;if(s.snap)t.visibleWrites=cc(t.visibleWrites,s.path);else{const l=s.children;Ce(l,a=>{t.visibleWrites=cc(t.visibleWrites,fe(s.path,a))})}return!0}else return!1}function Mv(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(fe(t.path,n),e))return!0;return!1}function Lv(t){t.visibleWrites=Xh(t.allWrites,Fv,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Fv(t){return t.visible}function Xh(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Fe(n,o),s=Ts(s,l,r.snap)):ze(o,n)&&(l=Fe(o,n),s=Ts(s,K(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Fe(n,o),s=go(s,l,r.children);else if(ze(o,n))if(l=Fe(o,n),j(l))s=go(s,K(),r.children);else{const a=Kn(r.children,W(l));if(a){const c=a.getChild(ie(l));s=Ts(s,K(),c)}}}else throw es("WriteRecord should have .snap or .children")}}return s}function Zh(t,e,n,s,i){if(!s&&!i){const r=In(t.visibleWrites,e);if(r!=null)return r;{const o=Kt(t.visibleWrites,e);if(yo(o))return n;if(n==null&&!mo(o,K()))return null;{const l=n||B.EMPTY_NODE;return Xn(o,l)}}}else{const r=Kt(t.visibleWrites,e);if(!i&&yo(r))return n;if(!i&&n==null&&!mo(r,K()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=Xh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Xn(l,a)}}}function $v(t,e,n){let s=B.EMPTY_NODE;const i=In(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Kt(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const a=Xn(Kt(r,new ee(o)),l);s=s.updateImmediateChild(o,a)}),uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Kt(t.visibleWrites,e);return uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Bv(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,n);if(mo(t.visibleWrites,r))return null;{const o=Kt(t.visibleWrites,r);return yo(o)?i.getChild(n):Xn(o,i.getChild(n))}}function Uv(t,e,n,s){const i=fe(e,n),r=In(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Kt(t.visibleWrites,i);return Xn(o,s.getNode().getImmediateChild(n))}else return null}function Hv(t,e){return In(t.visibleWrites,e)}function Vv(t,e,n,s,i,r,o){let l;const a=Kt(t.visibleWrites,e),c=In(a,K());if(c!=null)l=c;else if(n!=null)l=Xn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Wv(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function Si(t,e,n,s){return Zh(t.writeTree,t.treePath,e,n,s)}function hl(t,e){return $v(t.writeTree,t.treePath,e)}function hc(t,e,n,s){return Bv(t.writeTree,t.treePath,e,n,s)}function Ti(t,e){return Hv(t.writeTree,fe(t.treePath,e))}function jv(t,e,n,s,i,r){return Vv(t.writeTree,t.treePath,e,n,s,i,r)}function fl(t,e,n){return Uv(t.writeTree,t.treePath,e,n)}function ef(t,e){return tf(fe(t.treePath,e),t.writeTree)}function tf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Hs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Us(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Qn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Hs(s,e.snapshotNode,i.oldSnap));else throw es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const nf=new Gv;class dl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mn(this.viewCache_),r=jv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){return{filter:t}}function zv(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yv(t,e,n,s,i){const r=new qv;let o,l;if(n.type===nt.OVERWRITE){const c=n;c.source.fromUser?o=vo(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=Ri(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===nt.MERGE){const c=n;c.source.fromUser?o=Jv(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=bo(t,e,c.path,c.children,s,i,l,r))}else if(n.type===nt.ACK_USER_WRITE){const c=n;c.revert?o=eb(t,e,c.path,s,i,r):o=Xv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===nt.LISTEN_COMPLETE)o=Zv(t,e,n.path,s,r);else throw es("Unknown operation type: "+n.type);const a=r.getChanges();return Qv(e,o,a),{viewCache:o,changes:a}}function Qv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_o(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Yh(_o(e)))}}function sf(t,e,n,s,i,r){const o=e.eventCache;if(Ti(s,n)!=null)return e;{let l,a;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mn(e),u=c instanceof B?c:B.EMPTY_NODE,h=hl(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Si(s,mn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(n);if(c===".priority"){I(Yt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=hc(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=hc(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=fl(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Ss(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ri(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=W(n);if(!a.isCompleteForPath(n)&&Yt(n)>1)return e;const m=ie(n),D=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),D):c=u.updateChild(a.getNode(),_,D,m,nf,null)}const h=Qh(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),f=new dl(i,h,r);return sf(t,h,n,i,f,l)}function vo(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new dl(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Ss(e,c,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Ss(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),_=l.getNode().getImmediateChild(h);let m;if(j(f))m=s;else{const C=u.getCompleteChild(h);C!=null?tl(f)===".priority"&&C.getChild(Vh(f)).isEmpty()?m=C:m=C.updateChild(f,s):m=B.EMPTY_NODE}if(_.equals(m))a=e;else{const C=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=Ss(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function fc(t,e){return t.eventCache.isCompleteForChild(e)}function Jv(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=fe(n,a);fc(e,W(u))&&(l=vo(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=fe(n,a);fc(e,W(u))||(l=vo(t,l,u,c,i,r,o))}),l}function dc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function bo(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new le(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=dc(t,_,f);a=Ri(t,a,new ee(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),C=dc(t,m,f);a=Ri(t,a,new ee(h),C,i,r,o,l)}}),a}function Xv(t,e,n,s,i,r,o){if(Ti(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ri(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new le(null);return a.getNode().forEachChild(Vn,(u,h)=>{c=c.set(new ee(u),h)}),bo(t,e,n,c,i,r,l,o)}else return e}else{let c=new le(null);return s.foreach((u,h)=>{const f=fe(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),bo(t,e,n,c,i,r,l,o)}}function Zv(t,e,n,s,i){const r=e.serverCache,o=Qh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return sf(t,o,n,s,nf,i)}function eb(t,e,n,s,i,r){let o;if(Ti(s,n)!=null)return e;{const l=new dl(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Si(s,mn(e));else{const h=e.serverCache.getNode();I(h instanceof B,"serverChildren would be complete if leaf node"),u=hl(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=W(n);let h=fl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Si(s,mn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ti(s,K())!=null,Ss(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new rl(s.getIndex()),r=vv(s);this.processor_=Kv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new gn(a,o.isFullyInitialized(),i.filtersNodes()),h=new gn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Xi(h,u),this.eventGenerator_=new Tv(this.query_)}get query(){return this.query_}}function nb(t){return t.viewCache_.serverCache.getNode()}function sb(t,e){const n=mn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function pc(t){return t.eventRegistrations_.length===0}function ib(t,e){t.eventRegistrations_.push(e)}function _c(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function gc(t,e,n,s){e.type===nt.MERGE&&e.source.queryId!==null&&(I(mn(t.viewCache_),"We should always have a full cache before handling merges"),I(_o(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Yv(t.processor_,i,e,n,s);return zv(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(Qn(r,o))}),n.isFullyInitialized()&&s.push(Yh(n.getNode())),rf(t,s,n.getNode(),e)}function rf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Rv(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class ob{constructor(){this.views=new Map}}function lb(t){I(!Ai,"__referenceConstructor has already been defined"),Ai=t}function ab(){return I(Ai,"Reference.ts has not been loaded"),Ai}function cb(t){return t.views.size===0}function pl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),gc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(gc(o,e,n,s));return r}}function ub(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Si(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=hl(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Xi(new gn(l,a,!1),new gn(s,i,!1));return new tb(e,c)}return o}function hb(t,e,n,s,i,r){const o=ub(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ib(o,n),rb(o,n)}function fb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Qt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(_c(c,n,s)),pc(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(_c(a,n,s)),pc(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Qt(t)&&r.push(new(ab())(e._repo,e._path)),{removed:r,events:o}}function of(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wn(t,e){let n=null;for(const s of t.views.values())n=n||sb(s,e);return n}function lf(t,e){if(e._queryParams.loadsAllData())return Zi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function af(t,e){return lf(t,e)!=null}function Qt(t){return Zi(t)!=null}function Zi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;function db(t){I(!Ni,"__referenceConstructor has already been defined"),Ni=t}function pb(){return I(Ni,"Reference.ts has not been loaded"),Ni}let _b=1;class mc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=Wv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cf(t,e,n,s,i){return Pv(t.pendingWriteTree_,e,n,s,i),i?ss(t,new _n(ll(),e,n)):[]}function gb(t,e,n,s){Ov(t.pendingWriteTree_,e,n,s);const i=le.fromObject(n);return ss(t,new Jn(ll(),e,i))}function Wt(t,e,n=!1){const s=Dv(t.pendingWriteTree_,e);if(kv(t.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(K(),!0):Ce(s.children,o=>{r=r.set(new ee(o),!0)}),ss(t,new Ii(s.path,r,n))}else return[]}function er(t,e,n){return ss(t,new _n(al(),e,n))}function mb(t,e,n){const s=le.fromObject(n);return ss(t,new Jn(al(),e,s))}function yb(t,e){return ss(t,new Ws(al(),e))}function vb(t,e,n){const s=gl(t,n);if(s){const i=ml(s),r=i.path,o=i.queryId,l=Fe(r,e),a=new Ws(cl(o),l);return yl(t,r,a)}else return[]}function Eo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||af(o,e))){const a=fb(o,e,n,s);cb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Qt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=wb(f);for(let m=0;m<_.length;++m){const C=_[m],D=C.query,k=ff(t,C);t.listenProvider_.startListening(Rs(D),xi(t,D),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Rs(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(tr(f));t.listenProvider_.stopListening(Rs(f),_)}))}Cb(t,c)}return l}function bb(t,e,n,s){const i=gl(t,s);if(i!=null){const r=ml(i),o=r.path,l=r.queryId,a=Fe(o,e),c=new _n(cl(l),a,n);return yl(t,o,c)}else return[]}function Eb(t,e,n,s){const i=gl(t,s);if(i){const r=ml(i),o=r.path,l=r.queryId,a=Fe(o,e),c=le.fromObject(n),u=new Jn(cl(l),a,c);return yl(t,o,u)}else return[]}function yc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=Fe(f,i);r=r||Wn(_,m),o=o||Qt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Qt(l),r=r||Wn(l,K())):(l=new ob,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const C=Wn(m,K());C&&(r=r.updateImmediateChild(_,C))}));const c=af(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=tr(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Ib();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=ul(t.pendingWriteTree_,i);let h=hb(l,e,n,u,r,a);if(!c&&!o&&!s){const f=lf(l,e);h=h.concat(Sb(t,e,f))}return h}function _l(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Fe(o,e),c=Wn(l,a);if(c)return c});return Zh(i,e,r,n,!0)}function ss(t,e){return uf(e,t.syncPointTree_,null,ul(t.pendingWriteTree_,K()))}function uf(t,e,n,s){if(j(t.path))return hf(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Wn(i,K()));let r=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=ef(s,o);r=r.concat(uf(l,a,c,u))}return i&&(r=r.concat(pl(i,t,s,n))),r}}function hf(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Wn(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ef(s,o),u=t.operationForChild(o);u&&(r=r.concat(hf(u,l,a,c)))}),i&&(r=r.concat(pl(i,t,s,n))),r}function ff(t,e){const n=e.query,s=xi(t,n);return{hashFn:()=>(nb(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vb(t,n._path,s):yb(t,n._path);{const r=my(i,n);return Eo(t,n,null,r)}}}}function xi(t,e){const n=tr(e);return t.queryToTagMap.get(n)}function tr(t){return t._path.toString()+"$"+t._queryIdentifier}function gl(t,e){return t.tagToQueryMap.get(e)}function ml(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function yl(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=ul(t.pendingWriteTree_,e);return pl(s,n,i,null)}function wb(t){return t.fold((e,n,s)=>{if(n&&Qt(n))return[Zi(n)];{let i=[];return n&&(i=of(n)),Ce(s,(r,o)=>{i=i.concat(o)}),i}})}function Rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pb())(t._repo,t._path):t}function Cb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=tr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ib(){return _b++}function Sb(t,e,n){const s=e._path,i=xi(t,e),r=ff(t,n),o=t.listenProvider_.startListening(Rs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!Qt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&Qt(u))return[Zi(u).query];{let f=[];return u&&(f=f.concat(of(u).map(_=>_.query))),Ce(h,(_,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Rs(u),xi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vl(n)}node(){return this.node_}}class bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new bl(this.syncTree_,n)}node(){return _l(this.syncTree_,this.path_)}}const Tb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vc=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Rb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ab(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Rb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Ab=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},df=function(t,e,n,s){return El(e,new bl(n,t),s)},pf=function(t,e,n){return El(t,new vl(e),n)};function El(t,e,n){const s=t.getPriority().val(),i=vc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=vc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(de,(l,a)=>{const c=El(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Cl(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=W(n);for(;i!==null;){const r=Kn(s.node.children,i)||{children:{},childCount:0};s=new wl(i,s,r),n=ie(n),i=W(n)}return s}function is(t){return t.node.value}function _f(t,e){t.node.value=e,wo(t)}function gf(t){return t.node.childCount>0}function Nb(t){return is(t)===void 0&&!gf(t)}function nr(t,e){Ce(t.node.children,(n,s)=>{e(new wl(n,t,s))})}function mf(t,e,n,s){n&&!s&&e(t),nr(t,i=>{mf(i,e,!0,s)}),n&&s&&e(t)}function xb(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ys(t){return new ee(t.parent===null?t.name:Ys(t.parent)+"/"+t.name)}function wo(t){t.parent!==null&&Pb(t.parent,t.name,t)}function Pb(t,e,n){const s=Nb(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,wo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=/[\[\].#$\/\u0000-\u001F\u007F]/,Db=/[\[\].#$\u0000-\u001F\u007F]/,kr=10*1024*1024,Il=function(t){return typeof t=="string"&&t.length!==0&&!Ob.test(t)},yf=function(t){return typeof t=="string"&&t.length!==0&&!Db.test(t)},kb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yf(t)},vf=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Qi(t)||t&&typeof t=="object"&&wt(t,".sv")},Co=function(t,e,n,s){sr(zn(t,"value"),e,n)},sr=function(t,e,n){const s=n instanceof ee?new Jy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+an(s));if(typeof e=="function")throw new Error(t+"contains a function "+an(s)+" with contents = "+e.toString());if(Qi(e))throw new Error(t+"contains "+e.toString()+" "+an(s));if(typeof e=="string"&&e.length>kr/3&&Yi(e)>kr)throw new Error(t+"contains a string greater than "+kr+" utf8 bytes "+an(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Il(o)))throw new Error(t+" contains an invalid key ("+o+") "+an(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xy(s,o),sr(t,l,s),Zy(s)}),i&&r)throw new Error(t+' contains ".value" child '+an(s)+" in addition to actual children.")}},Mb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Bs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Il(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Qy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ze(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},bf=function(t,e,n,s){const i=zn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ce(e,(o,l)=>{const a=new ee(o);if(sr(i,l,fe(n,a)),tl(a)===".priority"&&!vf(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Mb(i,r)},Lb=function(t,e,n){if(Qi(e))throw new Error(zn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!vf(e))throw new Error(zn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ef=function(t,e,n,s){if(!yf(n))throw new Error(zn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ef(t,e,n)},kn=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$b=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Il(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kb(n))throw new Error(zn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ir(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!nl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wf(t,e,n){ir(t,n),Cf(t,s=>nl(s,e))}function ot(t,e,n){ir(t,n),Cf(t,s=>ze(s,e)||ze(e,s))}function Cf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Ub(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ub(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Cs&&be("event: "+n.toString()),ts(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="repo_interrupt",Vb=25;class Wb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new wl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jb(t,e,n){if(t.stats_=Zo(t.repoInfo_),t.forceRestClient_||Ey())t.server_=new wi(t.repoInfo_,(s,i,r,o)=>{bc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ec(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(s,i,r,o)=>{bc(t,s,i,r,o)},s=>{Ec(t,s)},s=>{Gb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ty(t.repoInfo_,()=>new Sv(t.stats_,t.server_)),t.infoData_=new bv,t.infoSyncTree_=new mc({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=er(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Sl(t,"connected",!1),t.serverSyncTree_=new mc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function qb(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rr(t){return Tb({timestamp:qb(t)})}function bc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=mi(n,c=>pe(c));o=Eb(t.serverSyncTree_,r,a,i)}else{const a=pe(n);o=bb(t.serverSyncTree_,r,a,i)}else if(s){const a=mi(n,c=>pe(c));o=mb(t.serverSyncTree_,r,a)}else{const a=pe(n);o=er(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Zn(t,r)),ot(t.eventQueue_,l,o)}function Ec(t,e){Sl(t,"connected",e),e===!1&&Yb(t)}function Gb(t,e){Ce(e,(n,s)=>{Sl(t,n,s)})}function Sl(t,e,n){const s=new ee("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(s,i);const r=er(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function Tl(t){return t.nextWriteId_++}function Kb(t,e,n,s,i){or(t,"set",{path:e.toString(),value:n,priority:s});const r=rr(t),o=pe(n,s),l=_l(t.serverSyncTree_,e),a=pf(o,l,r),c=Tl(t),u=cf(t.serverSyncTree_,e,a,c,!0);ir(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||De("set at "+e+" failed: "+f);const C=Wt(t.serverSyncTree_,c,!m);ot(t.eventQueue_,e,C),Jt(t,i,f,_)});const h=Al(t,e);Zn(t,h),ot(t.eventQueue_,h,[])}function zb(t,e,n,s){or(t,"update",{path:e.toString(),value:n});let i=!0;const r=rr(t),o={};if(Ce(n,(l,a)=>{i=!1,o[l]=df(fe(e,l),pe(a),t.serverSyncTree_,r)}),i)be("update() called with empty data.  Don't do anything."),Jt(t,s,"ok",void 0);else{const l=Tl(t),a=gb(t.serverSyncTree_,e,o,l);ir(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||De("update at "+e+" failed: "+c);const f=Wt(t.serverSyncTree_,l,!h),_=f.length>0?Zn(t,e):e;ot(t.eventQueue_,_,f),Jt(t,s,c,u)}),Ce(n,c=>{const u=Al(t,fe(e,c));Zn(t,u)}),ot(t.eventQueue_,e,[])}}function Yb(t){or(t,"onDisconnectEvents");const e=rr(t),n=Ci();po(t.onDisconnect_,K(),(i,r)=>{const o=df(i,r,t.serverSyncTree_,e);ns(n,i,o)});let s=[];po(n,K(),(i,r)=>{s=s.concat(er(t.serverSyncTree_,i,r));const o=Al(t,i);Zn(t,o)}),t.onDisconnect_=Ci(),ot(t.eventQueue_,K(),s)}function Qb(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&fo(t.onDisconnect_,e),Jt(t,n,s,i)})}function wc(t,e,n,s){const i=pe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ns(t.onDisconnect_,e,i),Jt(t,s,r,o)})}function Jb(t,e,n,s,i){const r=pe(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&ns(t.onDisconnect_,e,r),Jt(t,i,o,l)})}function Xb(t,e,n,s){if(no(n)){be("onDisconnect().update() called with empty data.  Don't do anything."),Jt(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Ce(n,(o,l)=>{const a=pe(l);ns(t.onDisconnect_,fe(e,o),a)}),Jt(t,s,i,r)})}function Zb(t,e,n){let s;W(e._path)===".info"?s=yc(t.infoSyncTree_,e,n):s=yc(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,s)}function eE(t,e,n){let s;W(e._path)===".info"?s=Eo(t.infoSyncTree_,e,n):s=Eo(t.serverSyncTree_,e,n),wf(t.eventQueue_,e._path,s)}function tE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Hb)}function or(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Jt(t,e,n,s){e&&ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function If(t,e,n){return _l(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Rl(t,e=t.transactionQueueTree_){if(e||lr(t,e),is(e)){const n=Tf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nE(t,Ys(e),n)}else gf(e)&&nr(e,n=>{Rl(t,n)})}function nE(t,e,n){const s=n.map(c=>c.currentWriteId),i=If(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Fe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{or(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Wt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();lr(t,Cl(t.transactionQueueTree_,e)),Rl(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ts(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zn(t,e)}},o)}function Zn(t,e){const n=Sf(t,e),s=Ys(n),i=Tf(t,n);return sE(t,i,s),s}function sE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Fe(n,a.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Vb)u=!0,h="maxretry",i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=If(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){sr("transaction failed: Data returned ",_,a.path);let m=pe(_);typeof _=="object"&&_!=null&&wt(_,".priority")||(m=m.updatePriority(f.getPriority()));const D=a.currentWriteId,k=rr(t),P=pf(m,f,k);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=P,a.currentWriteId=Tl(t),o.splice(o.indexOf(D),1),i=i.concat(cf(t.serverSyncTree_,a.path,P,a.currentWriteId,a.applyLocally)),i=i.concat(Wt(t.serverSyncTree_,D,!0))}else u=!0,h="nodata",i=i.concat(Wt(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}lr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)ts(s[l]);Rl(t,t.transactionQueueTree_)}function Sf(t,e){let n,s=t.transactionQueueTree_;for(n=W(e);n!==null&&is(s)===void 0;)s=Cl(s,n),e=ie(e),n=W(e);return s}function Tf(t,e){const n=[];return Rf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Rf(t,e,n){const s=is(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);nr(e,i=>{Rf(t,i,n)})}function lr(t,e){const n=is(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_f(e,n.length>0?n:void 0)}nr(e,s=>{lr(t,s)})}function Al(t,e){const n=Ys(Sf(t,e)),s=Cl(t.transactionQueueTree_,e);return xb(s,i=>{Mr(t,i)}),Mr(t,s),mf(s,i=>{Mr(t,i)}),n}function Mr(t,e){const n=is(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_f(e,void 0):n.length=r+1,ot(t.eventQueue_,Ys(e),i);for(let o=0;o<s.length;o++)ts(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cc=function(t,e){const n=oE(t),s=n.namespace;n.domain==="firebase.com"&&kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},oE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=iE(t.substring(u,h)));const f=rE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class aE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new yt;return Qb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){kn("OnDisconnect.remove",this._path);const e=new yt;return wc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){kn("OnDisconnect.set",this._path),Co("OnDisconnect.set",e,this._path);const n=new yt;return wc(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){kn("OnDisconnect.setWithPriority",this._path),Co("OnDisconnect.setWithPriority",e,this._path),Lb("OnDisconnect.setWithPriority",n);const s=new yt;return Jb(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){kn("OnDisconnect.update",this._path),bf("OnDisconnect.update",e,this._path);const n=new yt;return Xb(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:tl(this._path)}get ref(){return new tn(this._repo,this._path)}get _queryIdentifier(){const e=lc(this._queryParams),n=Jo(e);return n==="{}"?"default":n}get _queryObject(){return lc(this._queryParams)}isEqual(e){if(e=wn(e),!(e instanceof Nl))return!1;const n=this._repo===e._repo,s=nl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yy(this._path)}}class tn extends Nl{constructor(e,n){super(e,n,new ol,!1)}get parent(){const e=Vh(this._path);return e===null?null:new tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=Io(this.ref,e);return new Pi(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Pi(i,Io(this.ref,s),de)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dt(t,e){return t=wn(t),t._checkNotDeleted("ref"),e!==void 0?Io(t._root,e):t._root}function Io(t,e){return t=wn(t),W(t._path)===null?Fb("child","path",e):Ef("child","path",e),new tn(t._repo,fe(t._path,e))}function hE(t){return t=wn(t),new uE(t._repo,t._path)}function Ic(t){return kn("remove",t._path),Af(t,null)}function Af(t,e){t=wn(t),kn("set",t._path),Co("set",e,t._path);const n=new yt;return Kb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ni(t,e){bf("update",e,t._path);const n=new yt;return zb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class xl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new lE("value",this,new Pi(e.snapshotNode,new tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aE(this,e,n):null}matches(e){return e instanceof xl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fE(t,e,n,s,i){const r=new cE(n,void 0),o=new xl(r);return Zb(t._repo,t,o),()=>eE(t._repo,t,o)}function Lr(t,e,n,s){return fE(t,"value",e)}lb(tn);db(tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="FIREBASE_DATABASE_EMULATOR_HOST",So={};let pE=!1;function _E(t,e,n,s){t.repoInfo_=new Dh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function gE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cc(r,i),l=o.repoInfo,a;typeof process<"u"&&Wa&&(a=Wa[dE]),a?(r=`http://${a}?ns=${l.namespace}`,o=Cc(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new Cy(t.name,t.options,e);$b("Invalid Firebase Database URL",o),j(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=yE(l,t,c,new wy(t.name,n));return new vE(u,t)}function mE(t,e){const n=So[e];(!n||n[t.key]!==t)&&kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tE(t),delete n[t.key]}function yE(t,e,n,s){let i=So[e.name];i||(i={},So[e.name]=i);let r=i[t.toURLString()];return r&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Wb(t,pE,n,s),i[t.toURLString()]=r,r}class vE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tn(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function bE(t=Qm(),e){const n=Qo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=kg("database");s&&EE(n,...s)}return n}function EE(t,e,n,s={}){t=wn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ai(ai.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Mg(s.mockUserToken,t.app.options.projectId);r=new ai(o)}_E(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){oy(Ym),zt(new Ot("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bt(ja,qa,t),bt(ja,qa,"esm2017")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wE();var CE="firebase",IE="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(CE,IE,"app");const Nf="@firebase/installations",Pl="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1e4,Pf=`w:${Pl}`,Of="FIS_v2",SE="https://firebaseinstallations.googleapis.com/v1",TE=60*60*1e3,RE="installations",AE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yn=new zi(RE,AE,NE);function Df(t){return t instanceof En&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf({projectId:t}){return`${SE}/projects/${t}/installations`}function Mf(t){return{token:t.token,requestStatus:2,expiresIn:PE(t.expiresIn),creationTime:Date.now()}}async function Lf(t,e){const s=(await e.json()).error;return yn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ff({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xE(t,{refreshToken:e}){const n=Ff(t);return n.append("Authorization",OE(e)),n}async function $f(t){const e=await t();return e.status>=500&&e.status<600?t():e}function PE(t){return Number(t.replace("s","000"))}function OE(t){return`${Of} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=kf(t),i=Ff(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Of,appId:t.appId,sdkVersion:Pf},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await $f(()=>fetch(s,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mf(c.authToken)}}else throw await Lf("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/^[cdef][\w-]{21}$/,To="";function LE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FE(t);return ME.test(n)?n:To}catch{return To}}function FE(t){return kE(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;function Hf(t,e){const n=ar(t);Vf(n,e),$E(n,e)}function Vf(t,e){const n=Uf.get(t);if(n)for(const s of n)s(e)}function $E(t,e){const n=BE();n&&n.postMessage({key:t,fid:e}),UE()}let un=null;function BE(){return!un&&"BroadcastChannel"in self&&(un=new BroadcastChannel("[Firebase] FID Change"),un.onmessage=t=>{Vf(t.data.key,t.data.fid)}),un}function UE(){Uf.size===0&&un&&(un.close(),un=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firebase-installations-database",VE=1,vn="firebase-installations-store";let Fr=null;function Ol(){return Fr||(Fr=_h(HE,VE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vn)}}})),Fr}async function Oi(t,e){const n=ar(t),i=(await Ol()).transaction(vn,"readwrite"),r=i.objectStore(vn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Hf(t,e.fid),e}async function Wf(t){const e=ar(t),s=(await Ol()).transaction(vn,"readwrite");await s.objectStore(vn).delete(e),await s.done}async function cr(t,e){const n=ar(t),i=(await Ol()).transaction(vn,"readwrite"),r=i.objectStore(vn),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Hf(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t){let e;const n=await cr(t.appConfig,s=>{const i=WE(s),r=jE(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===To?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WE(t){const e=t||{fid:LE(),registrationStatus:0};return jf(e)}function jE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qE(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GE(t)}:{installationEntry:e}}async function qE(t,e){try{const n=await DE(t,e);return Oi(t.appConfig,n)}catch(n){throw Df(n)&&n.customData.serverCode===409?await Wf(t.appConfig):await Oi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GE(t){let e=await Sc(t.appConfig);for(;e.registrationStatus===1;)await Bf(100),e=await Sc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Dl(t);return s||n}return e}function Sc(t){return cr(t,e=>{if(!e)throw yn.create("installation-not-found");return jf(e)})}function jf(t){return KE(t)?{fid:t.fid,registrationStatus:0}:t}function KE(t){return t.registrationStatus===1&&t.registrationTime+xf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE({appConfig:t,heartbeatServiceProvider:e},n){const s=YE(t,n),i=xE(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Pf,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await $f(()=>fetch(s,l));if(a.ok){const c=await a.json();return Mf(c)}else throw await Lf("Generate Auth Token",a)}function YE(t,{fid:e}){return`${kf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e=!1){let n;const s=await cr(t.appConfig,r=>{if(!qf(r))throw yn.create("not-registered");const o=r.authToken;if(!e&&XE(o))return r;if(o.requestStatus===1)return n=QE(t,e),r;{if(!navigator.onLine)throw yn.create("app-offline");const l=ew(r);return n=JE(t,l),l}});return n?await n:s.authToken}async function QE(t,e){let n=await Tc(t.appConfig);for(;n.authToken.requestStatus===1;)await Bf(100),n=await Tc(t.appConfig);const s=n.authToken;return s.requestStatus===0?kl(t,e):s}function Tc(t){return cr(t,e=>{if(!qf(e))throw yn.create("not-registered");const n=e.authToken;return tw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JE(t,e){try{const n=await zE(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Oi(t.appConfig,s),n}catch(n){if(Df(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oi(t.appConfig,s)}throw n}}function qf(t){return t!==void 0&&t.registrationStatus===2}function XE(t){return t.requestStatus===2&&!ZE(t)}function ZE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TE}function ew(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tw(t){return t.requestStatus===1&&t.requestTime+xf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t){const e=t,{installationEntry:n,registrationPromise:s}=await Dl(e);return s?s.catch(console.error):kl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e=!1){const n=t;return await iw(n),(await kl(n,e)).token}async function iw(t){const{registrationPromise:e}=await Dl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){if(!t||!t.options)throw $r("App Configuration");if(!t.name)throw $r("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $r(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $r(t){return yn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="installations",ow="installations-internal",lw=t=>{const e=t.getProvider("app").getImmediate(),n=rw(e),s=Qo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},aw=t=>{const e=t.getProvider("app").getImmediate(),n=Qo(e,Gf).getImmediate();return{getId:()=>nw(n),getToken:i=>sw(n,i)}};function cw(){zt(new Ot(Gf,lw,"PUBLIC")),zt(new Ot(ow,aw,"PRIVATE"))}cw();bt(Nf,Pl);bt(Nf,Pl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="analytics",uw="firebase_id",hw="origin",fw=60*1e3,dw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ml="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new zo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new zi("analytics","Analytics",pw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){if(!t.startsWith(Ml)){const e=Qe.create("invalid-gtag-resource",{gtagURL:t});return Be.warn(e.message),""}return t}function Kf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mw(t,e){const n=gw("firebase-js-sdk-policy",{createScriptURL:_w}),s=document.createElement("script"),i=`${Ml}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function yw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vw(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const a=(await Kf(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){Be.error(l)}t("config",i,r)}async function bw(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Kf(n);for(const a of o){const c=l.find(h=>h.measurementId===a),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Be.error(r)}}function Ew(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[l,a]=o;await bw(t,e,n,l,a)}else if(r==="config"){const[l,a]=o;await vw(t,e,n,s,l,a)}else if(r==="consent"){const[l,a]=o;t("consent",l,a)}else if(r==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){Be.error(l)}}return i}function ww(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Ew(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Cw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ml)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=30,Sw=1e3;class Tw{constructor(e={},n=Sw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zf=new Tw;function Rw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Aw(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Rw(s)},r=dw.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Nw(t,e=zf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Qe.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Qe.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ow;return setTimeout(async()=>{l.abort()},fw),Yf({appId:s,apiKey:i,measurementId:r},o,l,e)}async function Yf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=zf){var r;const{appId:o,measurementId:l}=t;try{await xw(s,e)}catch(a){if(l)return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Aw(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!Pw(c)){if(i.deleteThrottleMetadata(o),l)return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?ka(n,i.intervalMillis,Iw):ka(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Be.debug(`Calling attemptFetch again in ${u} millis`),Yf(t,h,s,i)}}function xw(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Pw(t){if(!(t instanceof En)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ow{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dw(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(){if(uh())try{await hh()}catch(t){return Be.warn(Qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Be.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Mw(t,e,n,s,i,r,o){var l;const a=Nw(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Be.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Be.error(_)),e.push(a);const c=kw().then(_=>{if(_)return s.getId()}),[u,h]=await Promise.all([a,c]);Cw(r)||mw(r,u.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[hw]="firebase",f.update=!0,h!=null&&(f[uw]=h),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.app=e}_delete(){return delete As[this.app.options.appId],Promise.resolve()}}let As={},Ac=[];const Nc={};let Br="dataLayer",Fw="gtag",xc,Qf,Pc=!1;function $w(){const t=[];if(Fg()&&t.push("This is a browser extension environment."),Bg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:e});Be.warn(n.message)}}function Bw(t,e,n){$w();const s=t.options.appId;if(!s)throw Qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(As[s]!=null)throw Qe.create("already-exists",{id:s});if(!Pc){yw(Br);const{wrappedGtag:r,gtagCore:o}=ww(As,Ac,Nc,Br,Fw);Qf=r,xc=o,Pc=!0}return As[s]=Mw(t,Ac,Nc,e,xc,Br,n),new Lw(t)}function Uw(t,e,n,s){t=wn(t),Dw(Qf,As[t.app.options.appId],e,n,s).catch(i=>Be.error(i))}const Oc="@firebase/analytics",Dc="0.10.10";function Hw(){zt(new Ot(Rc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Bw(s,i,n)},"PUBLIC")),zt(new Ot("analytics-internal",t,"PRIVATE")),bt(Oc,Dc),bt(Oc,Dc,"esm2017");function t(e){try{const n=e.getProvider(Rc).getImmediate();return{logEvent:(s,i,r)=>Uw(n,s,i,r)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}Hw();const Vw={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:"",databaseURL:""},Ww=gh(Vw),pt=bE(Ww),jw={data(){return{roomLink:""}},methods:{async createRoom(){const t=Math.random().toString(36).substr(2,9),e={createdAt:new Date().toISOString(),users:{},votes:{}};try{await Af(dt(pt,`rooms/${t}`),e),this.roomLink=`${location.origin}/room/${t}`}catch(n){console.error("Error al crear la sala:",n),alert("Hubo un error al crear la sala. Por favor, inténtalo de nuevo.")}}}},qw={class:"create-room"},Gw={key:0},Kw=["href"];function zw(t,e,n,s,i,r){return Pe(),Me("div",qw,[e[2]||(e[2]=ge("h1",null,"Scrum Poker",-1)),ge("button",{onClick:e[0]||(e[0]=(...o)=>r.createRoom&&r.createRoom(...o))},"Crear Sala"),i.roomLink?(Pe(),Me("p",Gw,[e[1]||(e[1]=Wo("Enlace generado: ")),ge("a",{href:i.roomLink},gt(i.roomLink),9,Kw)])):Fu("",!0)])}const Yw=Gi(jw,[["render",zw]]),Qw={data(){return{roomId:"",errorMessage:""}},methods:{joinRoom(){if(!this.roomId.trim()){this.errorMessage="Por favor, ingresa un ID de sala válido.";return}this.$router.push(`/room/${this.roomId}`)}}},Jw={class:"join-room"},Xw={key:0,class:"error"};function Zw(t,e,n,s,i,r){return Pe(),Me("div",Jw,[e[2]||(e[2]=ge("h1",null,"Unirse a una Sala",-1)),fu(ge("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.roomId=o),placeholder:"Ingresa el ID de la sala"},null,512),[[Vu,i.roomId]]),ge("button",{onClick:e[1]||(e[1]=(...o)=>r.joinRoom&&r.joinRoom(...o))},"Unirse"),i.errorMessage?(Pe(),Me("p",Xw,gt(i.errorMessage),1)):Fu("",!0)])}const eC=Gi(Qw,[["render",Zw],["__scopeId","data-v-a1baa8e2"]]),tC={data(){return{roomId:"",userName:"",tempName:"",votes:{},userVote:null,showVotes:!1,options:["1","2","3","5","8","13","20"]}},methods:{joinRoom(){if(!this.tempName)return;this.userName=this.tempName;const t=dt(pt,`rooms/${this.roomId}/presence/${this.userName}`);ni(t,{connected:!0}),hE(t).remove(),ni(dt(pt,`rooms/${this.roomId}/users`),{[this.userName]:!0})},castVote(t){this.userName&&(ni(dt(pt,`rooms/${this.roomId}/votes`),{[this.userName]:t}),this.userVote=t)},toggleVotes(){const t=dt(pt,`rooms/${this.roomId}/showVotes`);ni(t,{value:!this.showVotes})},resetVotes(){Ic(dt(pt,`rooms/${this.roomId}/votes`)).then(()=>{console.log("Votaciones reiniciadas.")}).catch(t=>{console.error("Error al reiniciar votaciones:",t)}),this.userVote=null}},mounted(){this.roomId=this.$route.params.id;const t=dt(pt,`rooms/${this.roomId}/votes`);Lr(t,s=>{const i=s.val()||{};this.votes=i,this.userName&&i[this.userName]&&(this.userVote=i[this.userName])});const e=dt(pt,`rooms/${this.roomId}/showVotes/value`);Lr(e,s=>{s.exists()?this.showVotes=s.val():this.showVotes=!1});const n=dt(pt,`rooms/${this.roomId}/presence`);Lr(n,s=>{if(!s.exists()){const i=dt(pt,`rooms/${this.roomId}`);Ic(i).catch(r=>{console.error("Error al intentar borrar la sala:",r)})}})}},nC={class:"voting-room"},sC={key:0},iC={key:1},rC={class:"cards"},oC=["onClick"],lC={key:0},aC={key:1};function cC(t,e,n,s,i,r){return Pe(),Me("div",nC,[ge("h1",null,"Votación - Sala "+gt(i.roomId),1),i.userName?(Pe(),Me("div",iC,[ge("p",null,"¡Hola, "+gt(i.userName)+"!",1),e[4]||(e[4]=ge("p",null,"Vota seleccionando una opción:",-1)),ge("div",rC,[(Pe(!0),Me(Ze,null,Wl(i.options,o=>(Pe(),Me("button",{key:o,onClick:l=>r.castVote(o),class:$i({selected:i.userVote===o})},gt(o),11,oC))),128))]),e[5]||(e[5]=ge("h2",null,"Estado de Votaciones:",-1)),ge("ul",null,[(Pe(!0),Me(Ze,null,Wl(i.votes,(o,l)=>(Pe(),Me("li",{key:l},[Wo(gt(l)+": ",1),i.showVotes?(Pe(),Me("span",lC,gt(o),1)):(Pe(),Me("span",aC,gt(l===i.userName?"Tu voto está registrado":"Votó"),1))]))),128))]),ge("button",{onClick:e[2]||(e[2]=(...o)=>r.toggleVotes&&r.toggleVotes(...o))},gt(i.showVotes?"Ocultar":"Mostrar")+" Votaciones",1),ge("button",{onClick:e[3]||(e[3]=(...o)=>r.resetVotes&&r.resetVotes(...o))},"Reiniciar Votaciones")])):(Pe(),Me("div",sC,[fu(ge("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.tempName=o),placeholder:"Ingresa tu nombre"},null,512),[[Vu,i.tempName]]),ge("button",{onClick:e[1]||(e[1]=(...o)=>r.joinRoom&&r.joinRoom(...o))},"Unirme")]))])}const uC=Gi(tC,[["render",cC]]),hC=[{path:"/scrumpoker",component:Yw},{path:"/scrumpoker/join",component:eC},{path:"/scrumpoker/room/:id",component:uC}],fC=Cg({history:Z_(),routes:hC});g_(w_).use(fC).mount("#app");
