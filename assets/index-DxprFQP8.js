var Jc=Object.defineProperty;var Zc=(i,t,e)=>t in i?Jc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var G=(i,t,e)=>Zc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="160",Qc=0,bo=1,tl=2,ac=1,lc=2,Sn=3,kn=0,Ve=1,cn=2,Nn=0,Ii=1,os=2,Ro=3,Co=4,el=5,Yn=100,nl=101,il=102,Lo=103,Po=104,sl=200,rl=201,ol=202,al=203,Jr=204,Zr=205,cl=206,ll=207,hl=208,ul=209,dl=210,fl=211,pl=212,ml=213,gl=214,_l=0,vl=1,xl=2,$s=3,yl=4,Ml=5,Sl=6,El=7,hc=0,Tl=1,wl=2,Fn=0,Al=1,bl=2,Rl=3,uc=4,Cl=5,Ll=6,dc=300,Ui=301,Oi=302,Qr=303,to=304,Qs=306,Jn=1e3,ln=1001,eo=1002,Be=1003,Io=1004,gr=1005,Ze=1006,Pl=1007,as=1008,Bn=1009,Il=1010,Dl=1011,uo=1012,fc=1013,Un=1014,On=1015,cs=1016,pc=1017,mc=1018,Zn=1020,Ul=1021,hn=1023,Ol=1024,Nl=1025,Qn=1026,Ni=1027,Fl=1028,gc=1029,Bl=1030,_c=1031,vc=1033,_r=33776,vr=33777,xr=33778,yr=33779,Do=35840,Uo=35841,Oo=35842,No=35843,xc=36196,Fo=37492,Bo=37496,zo=37808,ko=37809,Go=37810,Ho=37811,Vo=37812,Wo=37813,$o=37814,Xo=37815,qo=37816,jo=37817,Yo=37818,Ko=37819,Jo=37820,Zo=37821,Mr=36492,Qo=36494,ta=36495,zl=36283,ea=36284,na=36285,ia=36286,yc=3e3,ti=3001,kl=3200,Gl=3201,Mc=0,Hl=1,tn="",Pe="srgb",An="srgb-linear",fo="display-p3",tr="display-p3-linear",Xs="linear",ge="srgb",qs="rec709",js="p3",oi=7680,sa=519,Vl=512,Wl=513,$l=514,Sc=515,Xl=516,ql=517,jl=518,Yl=519,no=35044,ra="300 es",io=1035,En=2e3,Ys=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oa=1234567;const is=Math.PI/180,Fi=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function po(i,t){return(i%t+t)%t}function Kl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jl(i,t,e){return i!==t?(e-i)/(t-i):0}function ss(i,t,e){return(1-e)*i+e*t}function Zl(i,t,e,n){return ss(i,t,1-Math.exp(-e*n))}function Ql(i,t=1){return t-Math.abs(po(i,t*2)-t)}function th(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function eh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ih(i,t){return i+Math.random()*(t-i)}function sh(i){return i*(.5-Math.random())}function rh(i){i!==void 0&&(oa=i);let t=oa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oh(i){return i*is}function ah(i){return i*Fi}function so(i){return(i&i-1)===0&&i!==0}function ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ks(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),p=a((t-n)/2),v=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*d,c*p,o*h);break;case"YZY":i.set(c*p,o*u,c*d,o*h);break;case"ZXZ":i.set(c*d,c*p,o*u,o*h);break;case"XZX":i.set(o*u,c*x,c*v,o*h);break;case"YXY":i.set(c*v,o*u,c*x,o*h);break;case"ZYZ":i.set(c*x,c*v,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ei={DEG2RAD:is,RAD2DEG:Fi,generateUUID:Tn,clamp:ze,euclideanModulo:po,mapLinear:Kl,inverseLerp:Jl,lerp:ss,damp:Zl,pingpong:Ql,smoothstep:th,smootherstep:eh,randInt:nh,randFloat:ih,randFloatSpread:sh,seededRandom:rh,degToRad:oh,radToDeg:ah,isPowerOfTwo:so,ceilPowerOfTwo:ch,floorPowerOfTwo:Ks,setQuaternionFromProperEuler:lh,normalize:ue,denormalize:gn};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,a,o,c,h){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],p=n[2],v=n[5],x=n[8],y=s[0],_=s[3],f=s[6],C=s[1],w=s[4],b=s[7],O=s[2],P=s[5],L=s[8];return r[0]=a*y+o*C+c*O,r[3]=a*_+o*w+c*P,r[6]=a*f+o*b+c*L,r[1]=h*y+u*C+d*O,r[4]=h*_+u*w+d*P,r[7]=h*f+u*b+d*L,r[2]=p*y+v*C+x*O,r[5]=p*_+v*w+x*P,r[8]=p*f+v*b+x*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,p=o*c-u*r,v=h*r-a*c,x=e*d+n*p+s*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(s*h-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=p*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=v*y,t[7]=(n*c-h*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Jt;function Ec(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){const i=Js("canvas");return i.style.display="block",i}const aa={};function rs(i){i in aa||(aa[i]=!0,console.warn(i))}const ca=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),la=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[An]:{transfer:Xs,primaries:qs,toReference:i=>i,fromReference:i=>i},[Pe]:{transfer:ge,primaries:qs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tr]:{transfer:Xs,primaries:js,toReference:i=>i.applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca)},[fo]:{transfer:ge,primaries:js,toReference:i=>i.convertSRGBToLinear().applyMatrix3(la),fromReference:i=>i.applyMatrix3(ca).convertLinearToSRGB()}},uh=new Set([An,tr]),de={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ps[t].toReference,s=ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ps[i].primaries},getTransfer:function(i){return i===tn?Xs:ps[i].transfer}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ai;class Tc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Js("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dh=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Tn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tr(s[a].image)):r.push(Tr(s[a]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class We extends Vi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ln,s=ln,r=Ze,a=as,o=hn,c=Bn,h=We.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Tn(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ti?Pe:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?ti:yc}set encoding(t){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?Pe:tn}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=dc;We.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],u=c[4],d=c[8],p=c[1],v=c[5],x=c[9],y=c[2],_=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+y)<.1&&Math.abs(x+_)<.1&&Math.abs(h+v+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,b=(v+1)/2,O=(f+1)/2,P=(u+p)/4,L=(d+y)/4,K=(x+_)/4;return w>b&&w>O?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=P/n,r=L/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=P/s,r=K/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=K/r),this.set(n,s,r,e),this}let C=Math.sqrt((_-x)*(_-x)+(d-y)*(d-y)+(p-u)*(p-u));return Math.abs(C)<.001&&(C=1),this.x=(_-x)/C,this.y=(d-y)/C,this.z=(p-u)/C,this.w=Math.acos((h+v+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?Pe:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ac extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3];const p=r[a+0],v=r[a+1],x=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=v,t[e+2]=x,t[e+3]=y;return}if(d!==y||c!==p||h!==v||u!==x){let _=1-o;const f=c*p+h*v+u*x+d*y,C=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,f*C);_=Math.sin(_*P)/O,o=Math.sin(o*P)/O}const b=o*C;if(c=c*_+p*b,h=h*_+v*b,u=u*_+x*b,d=d*_+y*b,_===1-o){const O=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=O,h*=O,u*=O,d*=O}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a],p=r[a+1],v=r[a+2],x=r[a+3];return t[e]=o*x+u*d+c*v-h*p,t[e+1]=c*x+u*p+h*d-o*v,t[e+2]=h*x+u*v+o*p-c*d,t[e+3]=u*x-o*d-c*p-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),v=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*u*d+h*v*x,this._y=h*v*d-p*u*x,this._z=h*u*x+p*v*d,this._w=h*u*d-p*v*x;break;case"YXZ":this._x=p*u*d+h*v*x,this._y=h*v*d-p*u*x,this._z=h*u*x-p*v*d,this._w=h*u*d+p*v*x;break;case"ZXY":this._x=p*u*d-h*v*x,this._y=h*v*d+p*u*x,this._z=h*u*x+p*v*d,this._w=h*u*d-p*v*x;break;case"ZYX":this._x=p*u*d-h*v*x,this._y=h*v*d+p*u*x,this._z=h*u*x-p*v*d,this._w=h*u*d+p*v*x;break;case"YZX":this._x=p*u*d+h*v*x,this._y=h*v*d+p*u*x,this._z=h*u*x-p*v*d,this._w=h*u*d-p*v*x;break;case"XZY":this._x=p*u*d-h*v*x,this._y=h*v*d-p*u*x,this._z=h*u*x+p*v*d,this._w=h*u*d+p*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(u-c)*v,this._y=(r-h)*v,this._z=(a-s)*v}else if(n>o&&n>d){const v=2*Math.sqrt(1+n-o-d);this._w=(u-c)/v,this._x=.25*v,this._y=(s+a)/v,this._z=(r+h)/v}else if(o>d){const v=2*Math.sqrt(1+o-n-d);this._w=(r-h)/v,this._x=(s+a)/v,this._y=.25*v,this._z=(c+u)/v}else{const v=2*Math.sqrt(1+d-n-o);this._w=(a-s)/v,this._x=(r+h)/v,this._y=(c+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const v=1-e;return this._w=v*a+e*this._w,this._x=v*n+e*this._x,this._y=v*s+e*this._y,this._z=v*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=s+c*d+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new N,ha=new ls;class Ce{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),gs.subVectors(this.max,qi),ci.subVectors(t.a,qi),li.subVectors(t.b,qi),hi.subVectors(t.c,qi),Rn.subVectors(li,ci),Cn.subVectors(hi,li),Hn.subVectors(ci,hi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!Ar(e,ci,li,hi,gs)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,ci,li,hi,gs))?!1:(_s.crossVectors(Rn,Cn),e=[_s.x,_s.y,_s.z],Ar(e,ci,li,hi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new N,new N,new N,new N,new N,new N,new N,new N],rn=new N,ms=new Ce,ci=new N,li=new N,hi=new N,Rn=new N,Cn=new N,Hn=new N,qi=new N,gs=new N,_s=new N,Vn=new N;function Ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),h=e.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const gh=new Ce,ji=new N,br=new N;class er{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(br)),this.expandByPoint(ji.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new N,Rr=new N,vs=new N,Ln=new N,Cr=new N,xs=new N,Lr=new N;class mo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vs),o=Ln.dot(this.direction),c=-Ln.dot(vs),h=Ln.lengthSq(),u=Math.abs(1-a*a);let d,p,v,x;if(u>0)if(d=a*c-o,p=a*o-c,x=r*u,d>=0)if(p>=-x)if(p<=x){const y=1/u;d*=y,p*=y,v=d*(d+a*p+2*o)+p*(a*d+p+2*c)+h}else p=r,d=Math.max(0,-(a*p+o)),v=-d*d+p*(p+2*c)+h;else p=-r,d=Math.max(0,-(a*p+o)),v=-d*d+p*(p+2*c)+h;else p<=-x?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),v=-d*d+p*(p+2*c)+h):p<=x?(d=0,p=Math.min(Math.max(-r,-c),r),v=p*(p+2*c)+h):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),v=-d*d+p*(p+2*c)+h);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),v=-d*d+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rr).addScaledVector(vs,p),v}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),xs.subVectors(n,t),Lr.crossVectors(Cr,xs);let a=this.direction.dot(Lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,t);const c=o*this.direction.dot(xs.crossVectors(Ln,xs));if(c<0)return null;const h=o*this.direction.dot(Cr.cross(Ln));if(h<0||c+h>a)return null;const u=-o*Ln.dot(Lr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,a,o,c,h,u,d,p,v,x,y,_){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,d,p,v,x,y,_)}set(t,e,n,s,r,a,o,c,h,u,d,p,v,x,y,_){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=u,f[10]=d,f[14]=p,f[3]=v,f[7]=x,f[11]=y,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*u,v=a*d,x=o*u,y=o*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=v+x*h,e[5]=p-y*h,e[9]=-o*c,e[2]=y-p*h,e[6]=x+v*h,e[10]=a*c}else if(t.order==="YXZ"){const p=c*u,v=c*d,x=h*u,y=h*d;e[0]=p+y*o,e[4]=x*o-v,e[8]=a*h,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=v*o-x,e[6]=y+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*u,v=c*d,x=h*u,y=h*d;e[0]=p-y*o,e[4]=-a*d,e[8]=x+v*o,e[1]=v+x*o,e[5]=a*u,e[9]=y-p*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*u,v=a*d,x=o*u,y=o*d;e[0]=c*u,e[4]=x*h-v,e[8]=p*h+y,e[1]=c*d,e[5]=y*h+p,e[9]=v*h-x,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,v=a*h,x=o*c,y=o*h;e[0]=c*u,e[4]=y-p*d,e[8]=x*d+v,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=v*d+x,e[10]=p-y*d}else if(t.order==="XZY"){const p=a*c,v=a*h,x=o*c,y=o*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=p*d+y,e[5]=a*u,e[9]=v*d-x,e[2]=x*d-v,e[6]=o*u,e[10]=y*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Pn.crossVectors(n,Xe),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Pn.crossVectors(n,Xe)),Pn.normalize(),ys.crossVectors(Xe,Pn),s[0]=Pn.x,s[4]=ys.x,s[8]=Xe.x,s[1]=Pn.y,s[5]=ys.y,s[9]=Xe.y,s[2]=Pn.z,s[6]=ys.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],p=n[9],v=n[13],x=n[2],y=n[6],_=n[10],f=n[14],C=n[3],w=n[7],b=n[11],O=n[15],P=s[0],L=s[4],K=s[8],T=s[12],R=s[1],q=s[5],j=s[9],ht=s[13],F=s[2],H=s[6],Y=s[10],J=s[14],Q=s[3],et=s[7],nt=s[11],at=s[15];return r[0]=a*P+o*R+c*F+h*Q,r[4]=a*L+o*q+c*H+h*et,r[8]=a*K+o*j+c*Y+h*nt,r[12]=a*T+o*ht+c*J+h*at,r[1]=u*P+d*R+p*F+v*Q,r[5]=u*L+d*q+p*H+v*et,r[9]=u*K+d*j+p*Y+v*nt,r[13]=u*T+d*ht+p*J+v*at,r[2]=x*P+y*R+_*F+f*Q,r[6]=x*L+y*q+_*H+f*et,r[10]=x*K+y*j+_*Y+f*nt,r[14]=x*T+y*ht+_*J+f*at,r[3]=C*P+w*R+b*F+O*Q,r[7]=C*L+w*q+b*H+O*et,r[11]=C*K+w*j+b*Y+O*nt,r[15]=C*T+w*ht+b*J+O*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],p=t[10],v=t[14],x=t[3],y=t[7],_=t[11],f=t[15];return x*(+r*c*d-s*h*d-r*o*p+n*h*p+s*o*v-n*c*v)+y*(+e*c*v-e*h*p+r*a*p-s*a*v+s*h*u-r*c*u)+_*(+e*h*d-e*o*v-r*a*d+n*a*v+r*o*u-n*h*u)+f*(-s*o*u-e*c*d+e*o*p+s*a*d-n*a*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],p=t[10],v=t[11],x=t[12],y=t[13],_=t[14],f=t[15],C=d*_*h-y*p*h+y*c*v-o*_*v-d*c*f+o*p*f,w=x*p*h-u*_*h-x*c*v+a*_*v+u*c*f-a*p*f,b=u*y*h-x*d*h+x*o*v-a*y*v-u*o*f+a*d*f,O=x*d*c-u*y*c-x*o*p+a*y*p+u*o*_-a*d*_,P=e*C+n*w+s*b+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=C*L,t[1]=(y*p*r-d*_*r-y*s*v+n*_*v+d*s*f-n*p*f)*L,t[2]=(o*_*r-y*c*r+y*s*h-n*_*h-o*s*f+n*c*f)*L,t[3]=(d*c*r-o*p*r-d*s*h+n*p*h+o*s*v-n*c*v)*L,t[4]=w*L,t[5]=(u*_*r-x*p*r+x*s*v-e*_*v-u*s*f+e*p*f)*L,t[6]=(x*c*r-a*_*r-x*s*h+e*_*h+a*s*f-e*c*f)*L,t[7]=(a*p*r-u*c*r+u*s*h-e*p*h-a*s*v+e*c*v)*L,t[8]=b*L,t[9]=(x*d*r-u*y*r-x*n*v+e*y*v+u*n*f-e*d*f)*L,t[10]=(a*y*r-x*o*r+x*n*h-e*y*h-a*n*f+e*o*f)*L,t[11]=(u*o*r-a*d*r-u*n*h+e*d*h+a*n*v-e*o*v)*L,t[12]=O*L,t[13]=(u*y*s-x*d*s+x*n*p-e*y*p-u*n*_+e*d*_)*L,t[14]=(x*o*s-a*y*s-x*n*c+e*y*c+a*n*_-e*o*_)*L,t[15]=(a*d*s-u*o*s+u*n*c-e*d*c-a*n*p+e*o*p)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,d=o+o,p=r*h,v=r*u,x=r*d,y=a*u,_=a*d,f=o*d,C=c*h,w=c*u,b=c*d,O=n.x,P=n.y,L=n.z;return s[0]=(1-(y+f))*O,s[1]=(v+b)*O,s[2]=(x-w)*O,s[3]=0,s[4]=(v-b)*P,s[5]=(1-(p+f))*P,s[6]=(_+C)*P,s[7]=0,s[8]=(x+w)*L,s[9]=(_-C)*L,s[10]=(1-(p+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ui.set(s[0],s[1],s[2]).length();const a=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const h=1/r,u=1/a,d=1/o;return on.elements[0]*=h,on.elements[1]*=h,on.elements[2]*=h,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=En){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let v,x;if(o===En)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ys)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En){const c=this.elements,h=1/(e-t),u=1/(n-s),d=1/(a-r),p=(e+t)*h,v=(n+s)*u;let x,y;if(o===En)x=(a+r)*d,y=-2*d;else if(o===Ys)x=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new N,on=new ye,_h=new N(0,0,0),vh=new N(1,1,1),Pn=new N,ys=new N,Xe=new N,ua=new ye,da=new ls;class Bi{constructor(t=0,e=0,n=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],p=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return da.setFromEuler(this),this.setFromQuaternion(da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const fa=new N,di=new ls,xn=new ye,Ms=new N,Yi=new N,yh=new N,Mh=new ls,pa=new N(1,0,0),ma=new N(0,1,0),ga=new N(0,0,1),Sh={type:"added"},Eh={type:"removed"};class Me extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new N,e=new Bi,n=new ls,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(pa,t)}rotateY(t){return this.rotateOnAxis(ma,t)}rotateZ(t){return this.rotateOnAxis(ga,t)}translateOnAxis(t,e){return fa.copy(t).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pa,t)}translateY(t){return this.translateOnAxis(ma,t)}translateZ(t){return this.translateOnAxis(ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Yi,Ms,this.up):xn.lookAt(Ms,Yi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),v=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new N(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,yn=new N,Pr=new N,Mn=new N,fi=new N,pi=new N,_a=new N,Ir=new N,Dr=new N,Ur=new N;let Ss=!1;class Qe{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),yn.subVectors(n,e),Pr.subVectors(t,e);const a=an.dot(an),o=an.dot(yn),c=an.dot(Pr),h=yn.dot(yn),u=yn.dot(Pr),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,v=(h*c-o*u)*p,x=(a*u-o*c)*p;return r.set(1-v-x,x,v)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),yn.subVectors(t,e),an.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),Ir.subVectors(t,n);const c=fi.dot(Ir),h=pi.dot(Ir);if(c<=0&&h<=0)return e.copy(n);Dr.subVectors(t,s);const u=fi.dot(Dr),d=pi.dot(Dr);if(u>=0&&d<=u)return e.copy(s);const p=c*d-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(fi,a);Ur.subVectors(t,r);const v=fi.dot(Ur),x=pi.dot(Ur);if(x>=0&&v<=x)return e.copy(r);const y=v*h-c*x;if(y<=0&&h>=0&&x<=0)return o=h/(h-x),e.copy(n).addScaledVector(pi,o);const _=u*x-v*d;if(_<=0&&d-u>=0&&v-x>=0)return _a.subVectors(r,s),o=(d-u)/(d-u+(v-x)),e.copy(s).addScaledVector(_a,o);const f=1/(_+y+p);return a=y*f,o=p*f,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=po(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Or(a,r,t+1/3),this.g=Or(a,r,t),this.b=Or(a,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return de.fromWorkingColorSpace(Ue.copy(this),t),Math.round(ze(Ue.r*255,0,255))*65536+Math.round(ze(Ue.g*255,0,255))*256+Math.round(ze(Ue.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Pe){de.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Es);const n=ss(In.h,Es.h,e),s=ss(In.s,Es.s,e),r=ss(In.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Zt;Zt.NAMES=bc;let Th=0;class ri extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Ii,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Zr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new N,Ts=new jt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class Rc extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cc extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wh=0;const Je=new ye,Nr=new Me,mi=new N,qe=new Ce,Ki=new Ce,Re=new N;class $e extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ec(t)?Cc:Rc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(qe.min,Ki.min),qe.expandByPoint(Re),Re.addVectors(qe.max,Ki.max),qe.expandByPoint(Re)):(qe.expandByPoint(Ki.min),qe.expandByPoint(Ki.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Re.fromBufferAttribute(o,h),c&&(mi.fromBufferAttribute(t,h),Re.add(mi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let R=0;R<o;R++)h[R]=new N,u[R]=new N;const d=new N,p=new N,v=new N,x=new jt,y=new jt,_=new jt,f=new N,C=new N;function w(R,q,j){d.fromArray(s,R*3),p.fromArray(s,q*3),v.fromArray(s,j*3),x.fromArray(a,R*2),y.fromArray(a,q*2),_.fromArray(a,j*2),p.sub(d),v.sub(d),y.sub(x),_.sub(x);const ht=1/(y.x*_.y-_.x*y.y);isFinite(ht)&&(f.copy(p).multiplyScalar(_.y).addScaledVector(v,-y.y).multiplyScalar(ht),C.copy(v).multiplyScalar(y.x).addScaledVector(p,-_.x).multiplyScalar(ht),h[R].add(f),h[q].add(f),h[j].add(f),u[R].add(C),u[q].add(C),u[j].add(C))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,q=b.length;R<q;++R){const j=b[R],ht=j.start,F=j.count;for(let H=ht,Y=ht+F;H<Y;H+=3)w(n[H+0],n[H+1],n[H+2])}const O=new N,P=new N,L=new N,K=new N;function T(R){L.fromArray(r,R*3),K.copy(L);const q=h[R];O.copy(q),O.sub(L.multiplyScalar(L.dot(q))).normalize(),P.crossVectors(K,q);const ht=P.dot(u[R])<0?-1:1;c[R*4]=O.x,c[R*4+1]=O.y,c[R*4+2]=O.z,c[R*4+3]=ht}for(let R=0,q=b.length;R<q;++R){const j=b[R],ht=j.start,F=j.count;for(let H=ht,Y=ht+F;H<Y;H+=3)T(n[H+0]),T(n[H+1]),T(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,d=new N;if(t)for(let p=0,v=t.count;p<v;p+=3){const x=t.getX(p+0),y=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,_),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,v=e.count;p<v;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,d=o.normalized,p=new h.constructor(c.length*u);let v=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?v=c[y]*o.data.stride+o.offset:v=c[y]*u;for(let f=0;f<u;f++)p[x++]=h[v++]}return new en(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const p=h[u],v=t(p,n);c.push(v)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,p=h.length;d<p;d++){const v=h[d];u.push(v.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],d=r[h];for(let p=0,v=d.length;p<v;p++)u.push(d[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new ye,Wn=new mo,ws=new er,xa=new N,gi=new N,_i=new N,vi=new N,Fr=new N,As=new N,bs=new jt,Rs=new jt,Cs=new jt,ya=new N,Ma=new N,Sa=new N,Ls=new N,Ps=new N;class Tt extends Me{constructor(t=new $e,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){As.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(Fr.fromBufferAttribute(d,t),a?As.addScaledVector(Fr,u):As.addScaledVector(Fr.sub(e),u))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(ws.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(ws,xa)===null||Wn.origin.distanceToSquared(xa)>(t.far-t.near)**2))&&(va.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(va),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,v=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){const _=p[x],f=a[_.materialIndex],C=Math.max(_.start,v.start),w=Math.min(o.count,Math.min(_.start+_.count,v.start+v.count));for(let b=C,O=w;b<O;b+=3){const P=o.getX(b),L=o.getX(b+1),K=o.getX(b+2);s=Is(this,f,t,n,h,u,d,P,L,K),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,v.start),y=Math.min(o.count,v.start+v.count);for(let _=x,f=y;_<f;_+=3){const C=o.getX(_),w=o.getX(_+1),b=o.getX(_+2);s=Is(this,a,t,n,h,u,d,C,w,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=p.length;x<y;x++){const _=p[x],f=a[_.materialIndex],C=Math.max(_.start,v.start),w=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let b=C,O=w;b<O;b+=3){const P=b,L=b+1,K=b+2;s=Is(this,f,t,n,h,u,d,P,L,K),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,v.start),y=Math.min(c.count,v.start+v.count);for(let _=x,f=y;_<f;_+=3){const C=_,w=_+1,b=_+2;s=Is(this,a,t,n,h,u,d,C,w,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Ah(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;Ps.copy(o),Ps.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ps);return h<e.near||h>e.far?null:{distance:h,point:Ps.clone(),object:i}}function Is(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,gi),i.getVertexPosition(c,_i),i.getVertexPosition(h,vi);const u=Ah(i,t,e,n,gi,_i,vi,Ls);if(u){s&&(bs.fromBufferAttribute(s,o),Rs.fromBufferAttribute(s,c),Cs.fromBufferAttribute(s,h),u.uv=Qe.getInterpolation(Ls,gi,_i,vi,bs,Rs,Cs,new jt)),r&&(bs.fromBufferAttribute(r,o),Rs.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,h),u.uv1=Qe.getInterpolation(Ls,gi,_i,vi,bs,Rs,Cs,new jt),u.uv2=u.uv1),a&&(ya.fromBufferAttribute(a,o),Ma.fromBufferAttribute(a,c),Sa.fromBufferAttribute(a,h),u.normal=Qe.getInterpolation(Ls,gi,_i,vi,ya,Ma,Sa,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new N,materialIndex:0};Qe.getNormal(gi,_i,vi,d.normal),u.face=d}return u}class pe extends $e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let p=0,v=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(d,2));function x(y,_,f,C,w,b,O,P,L,K,T){const R=b/L,q=O/K,j=b/2,ht=O/2,F=P/2,H=L+1,Y=K+1;let J=0,Q=0;const et=new N;for(let nt=0;nt<Y;nt++){const at=nt*q-ht;for(let ut=0;ut<H;ut++){const X=ut*R-j;et[y]=X*C,et[_]=at*w,et[f]=F,h.push(et.x,et.y,et.z),et[y]=0,et[_]=0,et[f]=P>0?1:-1,u.push(et.x,et.y,et.z),d.push(ut/L),d.push(1-nt/K),J+=1}}for(let nt=0;nt<K;nt++)for(let at=0;at<L;at++){const ut=p+at+H*nt,X=p+at+H*(nt+1),it=p+(at+1)+H*(nt+1),xt=p+(at+1)+H*nt;c.push(ut,X,xt),c.push(X,it,xt),Q+=6}o.addGroup(v,Q,T),v+=Q,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const s in n)t[s]=n[s]}return t}function bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){return i.getRenderTarget()===null?i.outputColorSpace:de.workingColorSpace}const Rh={clone:zi,merge:Fe};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ge extends Pc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class Ph extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(xi,yi,t,e);s.layers=this.layers,this.add(s);const r=new Ge(xi,yi,t,e);r.layers=this.layers,this.add(r);const a=new Ge(xi,yi,t,e);a.layers=this.layers,this.add(a);const o=new Ge(xi,yi,t,e);o.layers=this.layers,this.add(o);const c=new Ge(xi,yi,t,e);c.layers=this.layers,this.add(c);const h=new Ge(xi,yi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,p,v),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ic extends We{constructor(t,e,n,s,r,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?Pe:tn),this.texture=new Ic(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pe(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Nn});r.uniforms.tEquirect.value=e;const a=new Tt(s,r),o=e.minFilter;return e.minFilter===as&&(e.minFilter=Ze),new Ph(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Br=new N,Dh=new N,Uh=new Jt;class qn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Br.subVectors(n,e).cross(Dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uh.getNormalMatrix(t),s=this.coplanarPoint(Br).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new er,Ds=new N;class _o{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],v=s[8],x=s[9],y=s[10],_=s[11],f=s[12],C=s[13],w=s[14],b=s[15];if(n[0].setComponents(c-r,p-h,_-v,b-f).normalize(),n[1].setComponents(c+r,p+h,_+v,b+f).normalize(),n[2].setComponents(c+a,p+u,_+x,b+C).normalize(),n[3].setComponents(c-a,p-u,_-x,b-C).normalize(),n[4].setComponents(c-o,p-d,_-y,b-w).normalize(),e===En)n[5].setComponents(c+o,p+d,_+y,b+w).normalize();else if(e===Ys)n[5].setComponents(o,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Oh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(h,u){const d=h.array,p=h.usage,v=d.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,d,p),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,u,d){const p=u.array,v=u._updateRange,x=u.updateRanges;if(i.bindBuffer(d,h),v.count===-1&&x.length===0&&i.bufferSubData(d,0,p),x.length!==0){for(let y=0,_=x.length;y<_;y++){const f=x[y];e?i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}v.count!==-1&&(e?i.bufferSubData(d,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):i.bufferSubData(d,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);if(d===void 0)n.set(h,s(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:a,remove:o,update:c}}class pn extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,d=t/o,p=e/c,v=[],x=[],y=[],_=[];for(let f=0;f<u;f++){const C=f*p-a;for(let w=0;w<h;w++){const b=w*d-r;x.push(b,-C,0),y.push(0,0,1),_.push(w/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<o;C++){const w=C+h*f,b=C+h*(f+1),O=C+1+h*(f+1),P=C+1+h*f;v.push(w,b,P),v.push(b,O,P)}this.setIndex(v),this.setAttribute("position",new we(x,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Nh,alphahash_pars_fragment:Fh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:kh,alphatest_pars_fragment:Gh,aomap_fragment:Hh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:$h,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:jh,iridescence_fragment:Yh,bumpmap_pars_fragment:Kh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:tu,color_fragment:eu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,cube_uv_reflection_fragment:ou,defaultnormal_vertex:au,displacementmap_pars_vertex:cu,displacementmap_vertex:lu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Cu,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:yu,fog_fragment:Mu,fog_pars_fragment:Su,gradientmap_pars_fragment:Eu,lightmap_fragment:Tu,lightmap_pars_fragment:wu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:bu,lights_pars_begin:Ru,lights_toon_fragment:Lu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Du,lights_physical_fragment:Uu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Nu,lights_fragment_maps:Fu,lights_fragment_end:Bu,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Hu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:$u,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:ju,morphcolor_vertex:Yu,morphnormal_vertex:Ku,morphtarget_pars_vertex:Ju,morphtarget_vertex:Zu,normal_fragment_begin:Qu,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:cd,opaque_fragment:ld,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:yd,skinbase_vertex:Md,skinning_pars_vertex:Sd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:wd,specularmap_pars_fragment:Ad,tonemapping_fragment:bd,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Pd,uv_pars_vertex:Id,uv_vertex:Dd,worldpos_vertex:Ud,background_vert:Od,background_frag:Nd,backgroundCube_vert:Fd,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:kd,depth_vert:Gd,depth_frag:Hd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:$d,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:jd,meshbasic_vert:Yd,meshbasic_frag:Kd,meshlambert_vert:Jd,meshlambert_frag:Zd,meshmatcap_vert:Qd,meshmatcap_frag:tf,meshnormal_vert:ef,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:cf,meshtoon_frag:lf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Fe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Fe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Fe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Fe([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Fe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Fe([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Fe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Fe([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Fe([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Fe([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Us={r:0,b:0,g:0};function gf(i,t,e,n,s,r,a){const o=new Zt(0);let c=r===!0?0:1,h,u,d=null,p=0,v=null;function x(_,f){let C=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=(f.backgroundBlurriness>0?e:t).get(w)),w===null?y(o,c):w&&w.isColor&&(y(w,1),C=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Qs)?(u===void 0&&(u=new Tt(new pe(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:zi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=de.getTransfer(w.colorSpace)!==ge,(d!==w||p!==w.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,p=w.version,v=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Tt(new pn(2,2),new ii({name:"BackgroundMaterial",uniforms:zi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=de.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||p!==w.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,p=w.version,v=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function y(_,f){_.getRGB(Us,Lc(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(_,f=1){o.set(_),c=f,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,y(o,c)},render:x}}function _f(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=_(null);let h=c,u=!1;function d(F,H,Y,J,Q){let et=!1;if(a){const nt=y(J,Y,H);h!==nt&&(h=nt,v(h.object)),et=f(F,J,Y,Q),et&&C(F,J,Y,Q)}else{const nt=H.wireframe===!0;(h.geometry!==J.id||h.program!==Y.id||h.wireframe!==nt)&&(h.geometry=J.id,h.program=Y.id,h.wireframe=nt,et=!0)}Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(et||u)&&(u=!1,K(F,H,Y,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function v(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function y(F,H,Y){const J=Y.wireframe===!0;let Q=o[F.id];Q===void 0&&(Q={},o[F.id]=Q);let et=Q[H.id];et===void 0&&(et={},Q[H.id]=et);let nt=et[J];return nt===void 0&&(nt=_(p()),et[J]=nt),nt}function _(F){const H=[],Y=[],J=[];for(let Q=0;Q<s;Q++)H[Q]=0,Y[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:J,object:F,attributes:{},index:null}}function f(F,H,Y,J){const Q=h.attributes,et=H.attributes;let nt=0;const at=Y.getAttributes();for(const ut in at)if(at[ut].location>=0){const it=Q[ut];let xt=et[ut];if(xt===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(xt=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(xt=F.instanceColor)),it===void 0||it.attribute!==xt||xt&&it.data!==xt.data)return!0;nt++}return h.attributesNum!==nt||h.index!==J}function C(F,H,Y,J){const Q={},et=H.attributes;let nt=0;const at=Y.getAttributes();for(const ut in at)if(at[ut].location>=0){let it=et[ut];it===void 0&&(ut==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),ut==="instanceColor"&&F.instanceColor&&(it=F.instanceColor));const xt={};xt.attribute=it,it&&it.data&&(xt.data=it.data),Q[ut]=xt,nt++}h.attributes=Q,h.attributesNum=nt,h.index=J}function w(){const F=h.newAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]=0}function b(F){O(F,0)}function O(F,H){const Y=h.newAttributes,J=h.enabledAttributes,Q=h.attributeDivisors;Y[F]=1,J[F]===0&&(i.enableVertexAttribArray(F),J[F]=1),Q[F]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),Q[F]=H)}function P(){const F=h.newAttributes,H=h.enabledAttributes;for(let Y=0,J=H.length;Y<J;Y++)H[Y]!==F[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function L(F,H,Y,J,Q,et,nt){nt===!0?i.vertexAttribIPointer(F,H,Y,Q,et):i.vertexAttribPointer(F,H,Y,J,Q,et)}function K(F,H,Y,J){if(n.isWebGL2===!1&&(F.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const Q=J.attributes,et=Y.getAttributes(),nt=H.defaultAttributeValues;for(const at in et){const ut=et[at];if(ut.location>=0){let X=Q[at];if(X===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){const it=X.normalized,xt=X.itemSize,wt=e.get(X);if(wt===void 0)continue;const Pt=wt.buffer,Gt=wt.type,Ht=wt.bytesPerElement,Nt=n.isWebGL2===!0&&(Gt===i.INT||Gt===i.UNSIGNED_INT||X.gpuType===fc);if(X.isInterleavedBufferAttribute){const te=X.data,W=te.stride,oe=X.offset;if(te.isInstancedInterleavedBuffer){for(let Ut=0;Ut<ut.locationSize;Ut++)O(ut.location+Ut,te.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ut=0;Ut<ut.locationSize;Ut++)b(ut.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Ut=0;Ut<ut.locationSize;Ut++)L(ut.location+Ut,xt/ut.locationSize,Gt,it,W*Ht,(oe+xt/ut.locationSize*Ut)*Ht,Nt)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<ut.locationSize;te++)O(ut.location+te,X.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<ut.locationSize;te++)b(ut.location+te);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let te=0;te<ut.locationSize;te++)L(ut.location+te,xt/ut.locationSize,Gt,it,xt*Ht,xt/ut.locationSize*te*Ht,Nt)}}else if(nt!==void 0){const it=nt[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(ut.location,it);break;case 3:i.vertexAttrib3fv(ut.location,it);break;case 4:i.vertexAttrib4fv(ut.location,it);break;default:i.vertexAttrib1fv(ut.location,it)}}}}P()}function T(){j();for(const F in o){const H=o[F];for(const Y in H){const J=H[Y];for(const Q in J)x(J[Q].object),delete J[Q];delete H[Y]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;const H=o[F.id];for(const Y in H){const J=H[Y];for(const Q in J)x(J[Q].object),delete J[Q];delete H[Y]}delete o[F.id]}function q(F){for(const H in o){const Y=o[H];if(Y[F.id]===void 0)continue;const J=Y[F.id];for(const Q in J)x(J[Q].object),delete J[Q];delete Y[F.id]}}function j(){ht(),u=!0,h!==c&&(h=c,v(h.object))}function ht(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:j,resetDefaultState:ht,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:w,enableAttribute:b,disableUnusedAttributes:P}}function vf(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,d){i.drawArrays(r,u,d),e.update(d,r,1)}function c(u,d,p){if(p===0)return;let v,x;if(s)v=i,x="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](r,u,d,p),e.update(d,r,p)}function h(u,d,p){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<p;x++)this.render(u[x],d[x]);else{v.multiDrawArraysWEBGL(r,u,0,d,0,p);let x=0;for(let y=0;y<p;y++)x+=d[y];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function xf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,b=a||t.has("OES_texture_float"),O=w&&b,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:O,maxSamples:P}}function yf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const v=d.length!==0||p||n!==0||s;return s=p,n=d.length,v},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,v){const x=d.clippingPlanes,y=d.clipIntersection,_=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!_)r?u(null):h();else{const C=r?0:n,w=C*4;let b=f.clippingState||null;c.value=b,b=u(x,p,w,v);for(let O=0;O!==w;++O)b[O]=e[O];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,v,x){const y=d!==null?d.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const f=v+y*4,C=p.matrixWorldInverse;o.getNormalMatrix(C),(_===null||_.length<f)&&(_=new Float32Array(f));for(let w=0,b=v;w!==y;++w,b+=4)a.copy(d[w]).applyMatrix4(C,o),a.normal.toArray(_,b),_[b+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function Mf(i){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Ui:o===to&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===to)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Ih(c.height/2);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uc extends Pc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,Ea=[.125,.215,.35,.446,.526,.582],Kn=20,zr=new Uc,Ta=new Zt;let kr=null,Gr=0,Hr=0;const jn=(1+Math.sqrt(5))/2,Mi=1/jn,wa=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,jn,Mi),new N(0,jn,-Mi),new N(Mi,0,jn),new N(-Mi,0,jn),new N(jn,Mi,0),new N(-jn,Mi,0)];class Aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Gr,Hr),t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:cs,format:hn,colorSpace:An,depthBuffer:!1},s=ba(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ba(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=Ef(r,t,e)}return s}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s){const o=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ta),u.toneMapping=Fn,u.autoClear=!1;const v=new wn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),x=new Tt(new pe,v);let y=!1;const _=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,y=!0):(v.color.copy(Ta),y=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):C===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));const w=this._cubeSize;Os(s,C*w,f>2?w:0,w,w),u.setRenderTarget(s),y&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ui||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ra());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wa[(s-1)%wa.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Tt(this._lodPlanes[s],h),p=h.uniforms,v=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*Kn-1),y=r/x,_=isFinite(r)?1+Math.floor(u*y):Kn;_>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kn}`);const f=[];let C=0;for(let L=0;L<Kn;++L){const K=L/y,T=Math.exp(-K*K/2);f.push(T),L===0?C+=T:L<_&&(C+=2*T)}for(let L=0;L<f.length;L++)f[L]=f[L]/C;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:w}=this;p.dTheta.value=x,p.mipInt.value=w-n;const b=this._sizeLods[s],O=3*b*(s>w-Li?s-w+Li:0),P=4*(this._cubeSize-b);Os(e,O,P,3*b,2*b),c.setRenderTarget(e),c.render(d,zr)}}function Sf(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+Ea.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Li?c=Ea[a-i+Li-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,d=1+h,p=[u,u,d,u,d,d,u,u,d,d,u,d],v=6,x=6,y=3,_=2,f=1,C=new Float32Array(y*x*v),w=new Float32Array(_*x*v),b=new Float32Array(f*x*v);for(let P=0;P<v;P++){const L=P%3*2/3-1,K=P>2?0:-1,T=[L,K,0,L+2/3,K,0,L+2/3,K+1,0,L,K,0,L+2/3,K+1,0,L,K+1,0];C.set(T,y*x*P),w.set(p,_*x*P);const R=[P,P,P,P,P,P];b.set(R,f*x*P)}const O=new $e;O.setAttribute("position",new en(C,y)),O.setAttribute("uv",new en(w,_)),O.setAttribute("faceIndex",new en(b,f)),t.push(O),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ba(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ef(i,t,e){const n=new Float32Array(Kn),s=new N(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ra(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ca(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Qr||c===to,u=c===Ui||c===Oi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Aa(i)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(h&&d&&d.height>0||u&&d&&s(d)){e===null&&(e=new Aa(i));const p=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Af(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let _=0,f=y.length;_<f;_++)t.remove(y[_])}p.removeEventListener("dispose",a),delete s[p.id];const v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const x in p)t.update(p[x],i.ARRAY_BUFFER);const v=d.morphAttributes;for(const x in v){const y=v[x];for(let _=0,f=y.length;_<f;_++)t.update(y[_],i.ARRAY_BUFFER)}}function h(d){const p=[],v=d.index,x=d.attributes.position;let y=0;if(v!==null){const C=v.array;y=v.version;for(let w=0,b=C.length;w<b;w+=3){const O=C[w+0],P=C[w+1],L=C[w+2];p.push(O,P,P,L,L,O)}}else if(x!==void 0){const C=x.array;y=x.version;for(let w=0,b=C.length/3-1;w<b;w+=3){const O=w+0,P=w+1,L=w+2;p.push(O,P,P,L,L,O)}}else return;const _=new(Ec(p)?Cc:Rc)(p,1);_.version=y;const f=r.get(d);f&&t.remove(f),r.set(d,_)}function u(d){const p=r.get(d);if(p){const v=d.index;v!==null&&p.version<v.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function bf(i,t,e,n){const s=n.isWebGL2;let r;function a(v){r=v}let o,c;function h(v){o=v.type,c=v.bytesPerElement}function u(v,x){i.drawElements(r,x,o,v*c),e.update(x,r,1)}function d(v,x,y){if(y===0)return;let _,f;if(s)_=i,f="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](r,x,o,v*c,y),e.update(x,r,y)}function p(v,x,y){if(y===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<y;f++)this.render(v[f]/c,x[f]);else{_.multiDrawElementsWEBGL(r,x,0,o,v,0,y);let f=0;for(let C=0;C<y;C++)f+=x[C];e.update(f,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Rf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cf(i,t){return i[0]-t[0]}function Lf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Pf(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new _e,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,d){const p=h.morphTargetInfluences;if(t.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=x!==void 0?x.length:0;let _=r.get(u);if(_===void 0||_.count!==y){let H=function(){ht.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var v=H;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,O=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],K=u.morphAttributes.color||[];let T=0;w===!0&&(T=1),b===!0&&(T=2),O===!0&&(T=3);let R=u.attributes.position.count*T,q=1;R>t.maxTextureSize&&(q=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const j=new Float32Array(R*q*4*y),ht=new Ac(j,R,q,y);ht.type=On,ht.needsUpdate=!0;const F=T*4;for(let Y=0;Y<y;Y++){const J=P[Y],Q=L[Y],et=K[Y],nt=R*q*4*Y;for(let at=0;at<J.count;at++){const ut=at*F;w===!0&&(a.fromBufferAttribute(J,at),j[nt+ut+0]=a.x,j[nt+ut+1]=a.y,j[nt+ut+2]=a.z,j[nt+ut+3]=0),b===!0&&(a.fromBufferAttribute(Q,at),j[nt+ut+4]=a.x,j[nt+ut+5]=a.y,j[nt+ut+6]=a.z,j[nt+ut+7]=0),O===!0&&(a.fromBufferAttribute(et,at),j[nt+ut+8]=a.x,j[nt+ut+9]=a.y,j[nt+ut+10]=a.z,j[nt+ut+11]=et.itemSize===4?a.w:1)}}_={count:y,texture:ht,size:new jt(R,q)},r.set(u,_),u.addEventListener("dispose",H)}let f=0;for(let w=0;w<p.length;w++)f+=p[w];const C=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",C),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const x=p===void 0?0:p.length;let y=n[u.id];if(y===void 0||y.length!==x){y=[];for(let b=0;b<x;b++)y[b]=[b,0];n[u.id]=y}for(let b=0;b<x;b++){const O=y[b];O[0]=b,O[1]=p[b]}y.sort(Lf);for(let b=0;b<8;b++)b<x&&y[b][1]?(o[b][0]=y[b][0],o[b][1]=y[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Cf);const _=u.morphAttributes.position,f=u.morphAttributes.normal;let C=0;for(let b=0;b<8;b++){const O=o[b],P=O[0],L=O[1];P!==Number.MAX_SAFE_INTEGER&&L?(_&&u.getAttribute("morphTarget"+b)!==_[P]&&u.setAttribute("morphTarget"+b,_[P]),f&&u.getAttribute("morphNormal"+b)!==f[P]&&u.setAttribute("morphNormal"+b,f[P]),s[b]=L,C+=L):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const w=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function If(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Oc extends We{constructor(t,e,n,s,r,a,o,c,h,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qn&&(n=Un),n===void 0&&u===Ni&&(n=Zn),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nc=new We,Fc=new Oc(1,1);Fc.compareFunction=Sc;const Bc=new Ac,zc=new mh,kc=new Ic,La=[],Pa=[],Ia=new Float32Array(16),Da=new Float32Array(9),Ua=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=La[s];if(r===void 0&&(r=new Float32Array(s),La[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nr(i,t){let e=Pa[t];e===void 0&&(e=new Int32Array(t),Pa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Ua.set(n),i.uniformMatrix2fv(this.addr,!1,Ua),be(e,n)}}function Bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Da.set(n),i.uniformMatrix3fv(this.addr,!1,Da),be(e,n)}}function zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Ia.set(n),i.uniformMatrix4fv(this.addr,!1,Ia),be(e,n)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Fc:Nc;e.setTexture2D(t||r,s)}function Yf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function Kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kc,s)}function Jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function Zf(i){switch(i){case 5126:return Df;case 35664:return Uf;case 35665:return Of;case 35666:return Nf;case 35674:return Ff;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return $f;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Jf}}function Qf(i,t){i.uniform1fv(this.addr,t)}function tp(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function ep(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function np(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function ip(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sp(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rp(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function op(i,t){i.uniform1iv(this.addr,t)}function ap(i,t){i.uniform2iv(this.addr,t)}function cp(i,t){i.uniform3iv(this.addr,t)}function lp(i,t){i.uniform4iv(this.addr,t)}function hp(i,t){i.uniform1uiv(this.addr,t)}function up(i,t){i.uniform2uiv(this.addr,t)}function dp(i,t){i.uniform3uiv(this.addr,t)}function fp(i,t){i.uniform4uiv(this.addr,t)}function pp(i,t,e){const n=this.cache,s=t.length,r=nr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nc,r[a])}function mp(i,t,e){const n=this.cache,s=t.length,r=nr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zc,r[a])}function gp(i,t,e){const n=this.cache,s=t.length,r=nr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kc,r[a])}function _p(i,t,e){const n=this.cache,s=t.length,r=nr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bc,r[a])}function vp(i){switch(i){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return op;case 35667:case 35671:return ap;case 35668:case 35672:return cp;case 35669:case 35673:return lp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zf(e.type)}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vp(e.type)}}class Mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Oa(i,t){i.seq.push(t),i.map[t.id]=t}function Sp(i,t,e){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Oa(e,h===void 0?new xp(o,i,t):new yp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Mp(o),Oa(e,d)),e=d}}}class Hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Na(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ep=37297;let Tp=0;function wp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ap(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===js&&e===qs?n="LinearDisplayP3ToLinearSRGB":t===qs&&e===js&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case tr:return[n,"LinearTransferOETF"];case Pe:case fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wp(i.getShaderSource(t),a)}else return s}function bp(i,t){const e=Ap(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rp(i,t){let e;switch(t){case Al:e="Linear";break;case bl:e="Reinhard";break;case Rl:e="OptimizedCineon";break;case uc:e="ACESFilmic";break;case Ll:e="AgX";break;case Cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Lp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Pp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ip(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Pi(i){return i!==""}function Ba(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function za(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(Dp,Op)}const Up=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Op(i,t){let e=Kt[t];if(e===void 0){const n=Up.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(i){return i.replace(Np,Fp)}function Fp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ga(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function zp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Oi:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Tl:t="ENVMAP_BLENDING_MIX";break;case wl:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Bp(e),h=zp(e),u=kp(e),d=Gp(e),p=Hp(e),v=e.isWebGL2?"":Cp(e),x=Lp(e),y=Pp(r),_=s.createProgram();let f,C,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pi).join(`
`),f.length>0&&(f+=`
`),C=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pi).join(`
`),C.length>0&&(C+=`
`)):(f=[Ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),C=[v,Ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),a=ro(a),a=Ba(a,e),a=za(a,e),o=ro(o),o=Ba(o,e),o=za(o,e),a=ka(a),o=ka(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const b=w+f+a,O=w+C+o,P=Na(s,s.VERTEX_SHADER,b),L=Na(s,s.FRAGMENT_SHADER,O);s.attachShader(_,P),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function K(j){if(i.debug.checkShaderErrors){const ht=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(L).trim();let Y=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,L);else{const Q=Fa(s,P,"vertex"),et=Fa(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+Q+`
`+et)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(F===""||H==="")&&(J=!1);J&&(j.diagnostics={runnable:Y,programLog:ht,vertexShader:{log:F,prefix:f},fragmentShader:{log:H,prefix:C}})}s.deleteShader(P),s.deleteShader(L),T=new Hs(s,_),R=Ip(s,_)}let T;this.getUniforms=function(){return T===void 0&&K(this),T};let R;this.getAttributes=function(){return R===void 0&&K(this),R};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(_,Ep)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=L,this}let Wp=0;class $p{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}}class Xp{constructor(t){this.id=Wp++,this.code=t,this.usedTimes=0}}function qp(i,t,e,n,s,r,a){const o=new go,c=new $p,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return T===0?"uv":`uv${T}`}function _(T,R,q,j,ht){const F=j.fog,H=ht.geometry,Y=T.isMeshStandardMaterial?j.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),Q=J&&J.mapping===Qs?J.image.height:null,et=x[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=nt!==void 0?nt.length:0;let ut=0;H.morphAttributes.position!==void 0&&(ut=1),H.morphAttributes.normal!==void 0&&(ut=2),H.morphAttributes.color!==void 0&&(ut=3);let X,it,xt,wt;if(et){const Le=mn[et];X=Le.vertexShader,it=Le.fragmentShader}else X=T.vertexShader,it=T.fragmentShader,c.update(T),xt=c.getVertexShaderID(T),wt=c.getFragmentShaderID(T);const Pt=i.getRenderTarget(),Gt=ht.isInstancedMesh===!0,Ht=ht.isBatchedMesh===!0,Nt=!!T.map,te=!!T.matcap,W=!!J,oe=!!T.aoMap,Ut=!!T.lightMap,kt=!!T.bumpMap,At=!!T.normalMap,ce=!!T.displacementMap,Wt=!!T.emissiveMap,A=!!T.metalnessMap,E=!!T.roughnessMap,V=T.anisotropy>0,ct=T.clearcoat>0,ot=T.iridescence>0,lt=T.sheen>0,Rt=T.transmission>0,gt=V&&!!T.anisotropyMap,Mt=ct&&!!T.clearcoatMap,Ft=ct&&!!T.clearcoatNormalMap,Vt=ct&&!!T.clearcoatRoughnessMap,st=ot&&!!T.iridescenceMap,ae=ot&&!!T.iridescenceThicknessMap,Yt=lt&&!!T.sheenColorMap,zt=lt&&!!T.sheenRoughnessMap,bt=!!T.specularMap,St=!!T.specularColorMap,$t=!!T.specularIntensityMap,ne=Rt&&!!T.transmissionMap,me=Rt&&!!T.thicknessMap,Xt=!!T.gradientMap,dt=!!T.alphaMap,D=T.alphaTest>0,vt=!!T.alphaHash,_t=!!T.extensions,Bt=!!H.attributes.uv1,Ot=!!H.attributes.uv2,le=!!H.attributes.uv3;let he=Fn;return T.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(he=i.toneMapping),{isWebGL2:u,shaderID:et,shaderType:T.type,shaderName:T.name,vertexShader:X,fragmentShader:it,defines:T.defines,customVertexShaderID:xt,customFragmentShaderID:wt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Ht,instancing:Gt,instancingColor:Gt&&ht.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:An,map:Nt,matcap:te,envMap:W,envMapMode:W&&J.mapping,envMapCubeUVHeight:Q,aoMap:oe,lightMap:Ut,bumpMap:kt,normalMap:At,displacementMap:p&&ce,emissiveMap:Wt,normalMapObjectSpace:At&&T.normalMapType===Hl,normalMapTangentSpace:At&&T.normalMapType===Mc,metalnessMap:A,roughnessMap:E,anisotropy:V,anisotropyMap:gt,clearcoat:ct,clearcoatMap:Mt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:Vt,iridescence:ot,iridescenceMap:st,iridescenceThicknessMap:ae,sheen:lt,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:bt,specularColorMap:St,specularIntensityMap:$t,transmission:Rt,transmissionMap:ne,thicknessMap:me,gradientMap:Xt,opaque:T.transparent===!1&&T.blending===Ii,alphaMap:dt,alphaTest:D,alphaHash:vt,combine:T.combine,mapUv:Nt&&y(T.map.channel),aoMapUv:oe&&y(T.aoMap.channel),lightMapUv:Ut&&y(T.lightMap.channel),bumpMapUv:kt&&y(T.bumpMap.channel),normalMapUv:At&&y(T.normalMap.channel),displacementMapUv:ce&&y(T.displacementMap.channel),emissiveMapUv:Wt&&y(T.emissiveMap.channel),metalnessMapUv:A&&y(T.metalnessMap.channel),roughnessMapUv:E&&y(T.roughnessMap.channel),anisotropyMapUv:gt&&y(T.anisotropyMap.channel),clearcoatMapUv:Mt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&y(T.sheenRoughnessMap.channel),specularMapUv:bt&&y(T.specularMap.channel),specularColorMapUv:St&&y(T.specularColorMap.channel),specularIntensityMapUv:$t&&y(T.specularIntensityMap.channel),transmissionMapUv:ne&&y(T.transmissionMap.channel),thicknessMapUv:me&&y(T.thicknessMap.channel),alphaMapUv:dt&&y(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(At||V),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Bt,vertexUv2s:Ot,vertexUv3s:le,pointsUvs:ht.isPoints===!0&&!!H.attributes.uv&&(Nt||dt),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ht.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:ut,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Nt&&T.map.isVideoTexture===!0&&de.getTransfer(T.map.colorSpace)===ge,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===cn,flipSided:T.side===Ve,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:_t&&T.extensions.derivatives===!0,extensionFragDepth:_t&&T.extensions.fragDepth===!0,extensionDrawBuffers:_t&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function f(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)R.push(q),R.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(C(R,T),w(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function C(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function w(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function b(T){const R=x[T.type];let q;if(R){const j=mn[R];q=Rh.clone(j.uniforms)}else q=T.uniforms;return q}function O(T,R){let q;for(let j=0,ht=h.length;j<ht;j++){const F=h[j];if(F.cacheKey===R){q=F,++q.usedTimes;break}}return q===void 0&&(q=new Vp(i,R,T,r),h.push(q)),q}function P(T){if(--T.usedTimes===0){const R=h.indexOf(T);h[R]=h[h.length-1],h.pop(),T.destroy()}}function L(T){c.remove(T)}function K(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:b,acquireProgram:O,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:K}}function jp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ha(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Va(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,v,x,y,_){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:v,groupOrder:x,renderOrder:d.renderOrder,z:y,group:_},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=v,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=_),t++,f}function o(d,p,v,x,y,_){const f=a(d,p,v,x,y,_);v.transmission>0?n.push(f):v.transparent===!0?s.push(f):e.push(f)}function c(d,p,v,x,y,_){const f=a(d,p,v,x,y,_);v.transmission>0?n.unshift(f):v.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,p){e.length>1&&e.sort(d||Yp),n.length>1&&n.sort(p||Ha),s.length>1&&s.sort(p||Ha)}function u(){for(let d=t,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Kp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Va,i.set(n,[a])):s>=r.length?(a=new Va,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qp=0;function tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function em(i,t){const e=new Jp,n=Zp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,a=new ye,o=new ye;function c(u,d){let p=0,v=0,x=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let y=0,_=0,f=0,C=0,w=0,b=0,O=0,P=0,L=0,K=0,T=0;u.sort(tm);const R=d===!0?Math.PI:1;for(let j=0,ht=u.length;j<ht;j++){const F=u[j],H=F.color,Y=F.intensity,J=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=H.r*Y*R,v+=H.g*Y*R,x+=H.b*Y*R;else if(F.isLightProbe){for(let et=0;et<9;et++)s.probe[et].addScaledVector(F.sh.coefficients[et],Y);T++}else if(F.isDirectionalLight){const et=e.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const nt=F.shadow,at=n.get(F);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,s.directionalShadow[y]=at,s.directionalShadowMap[y]=Q,s.directionalShadowMatrix[y]=F.shadow.matrix,b++}s.directional[y]=et,y++}else if(F.isSpotLight){const et=e.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(H).multiplyScalar(Y*R),et.distance=J,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,s.spot[f]=et;const nt=F.shadow;if(F.map&&(s.spotLightMap[L]=F.map,L++,nt.updateMatrices(F),F.castShadow&&K++),s.spotLightMatrix[f]=nt.matrix,F.castShadow){const at=n.get(F);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,s.spotShadow[f]=at,s.spotShadowMap[f]=Q,P++}f++}else if(F.isRectAreaLight){const et=e.get(F);et.color.copy(H).multiplyScalar(Y),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),s.rectArea[C]=et,C++}else if(F.isPointLight){const et=e.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity*R),et.distance=F.distance,et.decay=F.decay,F.castShadow){const nt=F.shadow,at=n.get(F);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,at.shadowCameraNear=nt.camera.near,at.shadowCameraFar=nt.camera.far,s.pointShadow[_]=at,s.pointShadowMap[_]=Q,s.pointShadowMatrix[_]=F.shadow.matrix,O++}s.point[_]=et,_++}else if(F.isHemisphereLight){const et=e.get(F);et.skyColor.copy(F.color).multiplyScalar(Y*R),et.groundColor.copy(F.groundColor).multiplyScalar(Y*R),s.hemi[w]=et,w++}}C>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=v,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==y||q.pointLength!==_||q.spotLength!==f||q.rectAreaLength!==C||q.hemiLength!==w||q.numDirectionalShadows!==b||q.numPointShadows!==O||q.numSpotShadows!==P||q.numSpotMaps!==L||q.numLightProbes!==T)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=C,s.point.length=_,s.hemi.length=w,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=P+L-K,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=K,s.numLightProbes=T,q.directionalLength=y,q.pointLength=_,q.spotLength=f,q.rectAreaLength=C,q.hemiLength=w,q.numDirectionalShadows=b,q.numPointShadows=O,q.numSpotShadows=P,q.numSpotMaps=L,q.numLightProbes=T,s.version=Qp++)}function h(u,d){let p=0,v=0,x=0,y=0,_=0;const f=d.matrixWorldInverse;for(let C=0,w=u.length;C<w;C++){const b=u[C];if(b.isDirectionalLight){const O=s.directional[p];O.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),p++}else if(b.isSpotLight){const O=s.spot[x];O.position.setFromMatrixPosition(b.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),x++}else if(b.isRectAreaLight){const O=s.rectArea[y];O.position.setFromMatrixPosition(b.matrixWorld),O.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){const O=s.point[v];O.position.setFromMatrixPosition(b.matrixWorld),O.position.applyMatrix4(f),v++}else if(b.isHemisphereLight){const O=s.hemi[_];O.direction.setFromMatrixPosition(b.matrixWorld),O.direction.transformDirection(f),_++}}}return{setup:c,setupView:h,state:s}}function Wa(i,t){const e=new em(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function c(d){e.setup(n,d)}function h(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function nm(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Wa(i,t),e.set(r,[c])):a>=o.length?(c=new Wa(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class im extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sm extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function am(i,t,e){let n=new _o;const s=new jt,r=new jt,a=new _e,o=new im({depthPacking:Gl}),c=new sm,h={},u=e.maxTextureSize,d={[kn]:Ve,[Ve]:kn,[cn]:cn},p=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:rm,fragmentShader:om}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const x=new $e;x.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Tt(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(P,L,K){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const T=i.getRenderTarget(),R=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Nn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ht=f!==Sn&&this.type===Sn,F=f===Sn&&this.type!==Sn;for(let H=0,Y=P.length;H<Y;H++){const J=P[H],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const et=Q.getFrameExtents();if(s.multiply(et),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,Q.mapSize.y=r.y)),Q.map===null||ht===!0||F===!0){const at=this.type!==Sn?{minFilter:Be,magFilter:Be}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ni(s.x,s.y,at),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const nt=Q.getViewportCount();for(let at=0;at<nt;at++){const ut=Q.getViewport(at);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),j.viewport(a),Q.updateMatrices(J,at),n=Q.getFrustum(),b(L,K,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Sn&&C(Q,K),Q.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,R,q)};function C(P,L){const K=t.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,K,p,y,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,K,v,y,null)}function w(P,L,K,T){let R=null;const q=K.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)R=q;else if(R=K.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const j=R.uuid,ht=L.uuid;let F=h[j];F===void 0&&(F={},h[j]=F);let H=F[ht];H===void 0&&(H=R.clone(),F[ht]=H,L.addEventListener("dispose",O)),R=H}if(R.visible=L.visible,R.wireframe=L.wireframe,T===Sn?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:d[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=i.properties.get(R);j.light=K}return R}function b(P,L,K,T,R){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Sn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld);const ht=t.update(P),F=P.material;if(Array.isArray(F)){const H=ht.groups;for(let Y=0,J=H.length;Y<J;Y++){const Q=H[Y],et=F[Q.materialIndex];if(et&&et.visible){const nt=w(P,et,T,R);P.onBeforeShadow(i,P,L,K,ht,nt,Q),i.renderBufferDirect(K,null,ht,nt,P,Q),P.onAfterShadow(i,P,L,K,ht,nt,Q)}}}else if(F.visible){const H=w(P,F,T,R);P.onBeforeShadow(i,P,L,K,ht,H,null),i.renderBufferDirect(K,null,ht,H,P,null),P.onAfterShadow(i,P,L,K,ht,H,null)}}const j=P.children;for(let ht=0,F=j.length;ht<F;ht++)b(j[ht],L,K,T,R)}function O(P){P.target.removeEventListener("dispose",O);for(const K in h){const T=h[K],R=P.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function cm(i,t,e){const n=e.isWebGL2;function s(){let D=!1;const vt=new _e;let _t=null;const Bt=new _e(0,0,0,0);return{setMask:function(Ot){_t!==Ot&&!D&&(i.colorMask(Ot,Ot,Ot,Ot),_t=Ot)},setLocked:function(Ot){D=Ot},setClear:function(Ot,le,he,se,Le){Le===!0&&(Ot*=se,le*=se,he*=se),vt.set(Ot,le,he,se),Bt.equals(vt)===!1&&(i.clearColor(Ot,le,he,se),Bt.copy(vt))},reset:function(){D=!1,_t=null,Bt.set(-1,0,0,0)}}}function r(){let D=!1,vt=null,_t=null,Bt=null;return{setTest:function(Ot){Ot?Ht(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(Ot){vt!==Ot&&!D&&(i.depthMask(Ot),vt=Ot)},setFunc:function(Ot){if(_t!==Ot){switch(Ot){case _l:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Ot}},setLocked:function(Ot){D=Ot},setClear:function(Ot){Bt!==Ot&&(i.clearDepth(Ot),Bt=Ot)},reset:function(){D=!1,vt=null,_t=null,Bt=null}}}function a(){let D=!1,vt=null,_t=null,Bt=null,Ot=null,le=null,he=null,se=null,Le=null;return{setTest:function(ee){D||(ee?Ht(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ee){vt!==ee&&!D&&(i.stencilMask(ee),vt=ee)},setFunc:function(ee,Te,ke){(_t!==ee||Bt!==Te||Ot!==ke)&&(i.stencilFunc(ee,Te,ke),_t=ee,Bt=Te,Ot=ke)},setOp:function(ee,Te,ke){(le!==ee||he!==Te||se!==ke)&&(i.stencilOp(ee,Te,ke),le=ee,he=Te,se=ke)},setLocked:function(ee){D=ee},setClear:function(ee){Le!==ee&&(i.clearStencil(ee),Le=ee)},reset:function(){D=!1,vt=null,_t=null,Bt=null,Ot=null,le=null,he=null,se=null,Le=null}}}const o=new s,c=new r,h=new a,u=new WeakMap,d=new WeakMap;let p={},v={},x=new WeakMap,y=[],_=null,f=!1,C=null,w=null,b=null,O=null,P=null,L=null,K=null,T=new Zt(0,0,0),R=0,q=!1,j=null,ht=null,F=null,H=null,Y=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,et=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Q=et>=1):nt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Q=et>=2);let at=null,ut={};const X=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),xt=new _e().fromArray(X),wt=new _e().fromArray(it);function Pt(D,vt,_t,Bt){const Ot=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<_t;he++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(vt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return le}const Gt={};Gt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Gt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ht(i.DEPTH_TEST),c.setFunc($s),Wt(!1),A(bo),Ht(i.CULL_FACE),At(Nn);function Ht(D){p[D]!==!0&&(i.enable(D),p[D]=!0)}function Nt(D){p[D]!==!1&&(i.disable(D),p[D]=!1)}function te(D,vt){return v[D]!==vt?(i.bindFramebuffer(D,vt),v[D]=vt,n&&(D===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=vt),D===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function W(D,vt){let _t=y,Bt=!1;if(D)if(_t=x.get(vt),_t===void 0&&(_t=[],x.set(vt,_t)),D.isWebGLMultipleRenderTargets){const Ot=D.texture;if(_t.length!==Ot.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let le=0,he=Ot.length;le<he;le++)_t[le]=i.COLOR_ATTACHMENT0+le;_t.length=Ot.length,Bt=!0}}else _t[0]!==i.COLOR_ATTACHMENT0&&(_t[0]=i.COLOR_ATTACHMENT0,Bt=!0);else _t[0]!==i.BACK&&(_t[0]=i.BACK,Bt=!0);Bt&&(e.isWebGL2?i.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function oe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Ut={[Yn]:i.FUNC_ADD,[nl]:i.FUNC_SUBTRACT,[il]:i.FUNC_REVERSE_SUBTRACT};if(n)Ut[Lo]=i.MIN,Ut[Po]=i.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Ut[Lo]=D.MIN_EXT,Ut[Po]=D.MAX_EXT)}const kt={[sl]:i.ZERO,[rl]:i.ONE,[ol]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[dl]:i.SRC_ALPHA_SATURATE,[hl]:i.DST_COLOR,[cl]:i.DST_ALPHA,[al]:i.ONE_MINUS_SRC_COLOR,[Zr]:i.ONE_MINUS_SRC_ALPHA,[ul]:i.ONE_MINUS_DST_COLOR,[ll]:i.ONE_MINUS_DST_ALPHA,[fl]:i.CONSTANT_COLOR,[pl]:i.ONE_MINUS_CONSTANT_COLOR,[ml]:i.CONSTANT_ALPHA,[gl]:i.ONE_MINUS_CONSTANT_ALPHA};function At(D,vt,_t,Bt,Ot,le,he,se,Le,ee){if(D===Nn){f===!0&&(Nt(i.BLEND),f=!1);return}if(f===!1&&(Ht(i.BLEND),f=!0),D!==el){if(D!==C||ee!==q){if((w!==Yn||P!==Yn)&&(i.blendEquation(i.FUNC_ADD),w=Yn,P=Yn),ee)switch(D){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,O=null,L=null,K=null,T.set(0,0,0),R=0,C=D,q=ee}return}Ot=Ot||vt,le=le||_t,he=he||Bt,(vt!==w||Ot!==P)&&(i.blendEquationSeparate(Ut[vt],Ut[Ot]),w=vt,P=Ot),(_t!==b||Bt!==O||le!==L||he!==K)&&(i.blendFuncSeparate(kt[_t],kt[Bt],kt[le],kt[he]),b=_t,O=Bt,L=le,K=he),(se.equals(T)===!1||Le!==R)&&(i.blendColor(se.r,se.g,se.b,Le),T.copy(se),R=Le),C=D,q=!1}function ce(D,vt){D.side===cn?Nt(i.CULL_FACE):Ht(i.CULL_FACE);let _t=D.side===Ve;vt&&(_t=!_t),Wt(_t),D.blending===Ii&&D.transparent===!1?At(Nn):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const Bt=D.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ht(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){j!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),j=D)}function A(D){D!==Qc?(Ht(i.CULL_FACE),D!==ht&&(D===bo?i.cullFace(i.BACK):D===tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),ht=D}function E(D){D!==F&&(Q&&i.lineWidth(D),F=D)}function V(D,vt,_t){D?(Ht(i.POLYGON_OFFSET_FILL),(H!==vt||Y!==_t)&&(i.polygonOffset(vt,_t),H=vt,Y=_t)):Nt(i.POLYGON_OFFSET_FILL)}function ct(D){D?Ht(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function ot(D){D===void 0&&(D=i.TEXTURE0+J-1),at!==D&&(i.activeTexture(D),at=D)}function lt(D,vt,_t){_t===void 0&&(at===null?_t=i.TEXTURE0+J-1:_t=at);let Bt=ut[_t];Bt===void 0&&(Bt={type:void 0,texture:void 0},ut[_t]=Bt),(Bt.type!==D||Bt.texture!==vt)&&(at!==_t&&(i.activeTexture(_t),at=_t),i.bindTexture(D,vt||Gt[D]),Bt.type=D,Bt.texture=vt)}function Rt(){const D=ut[at];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(D){xt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),xt.copy(D))}function ne(D){wt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),wt.copy(D))}function me(D,vt){let _t=d.get(vt);_t===void 0&&(_t=new WeakMap,d.set(vt,_t));let Bt=_t.get(D);Bt===void 0&&(Bt=i.getUniformBlockIndex(vt,D.name),_t.set(D,Bt))}function Xt(D,vt){const Bt=d.get(vt).get(D);u.get(vt)!==Bt&&(i.uniformBlockBinding(vt,Bt,D.__bindingPointIndex),u.set(vt,Bt))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},at=null,ut={},v={},x=new WeakMap,y=[],_=null,f=!1,C=null,w=null,b=null,O=null,P=null,L=null,K=null,T=new Zt(0,0,0),R=0,q=!1,j=null,ht=null,F=null,H=null,Y=null,xt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Ht,disable:Nt,bindFramebuffer:te,drawBuffers:W,useProgram:oe,setBlending:At,setMaterial:ce,setFlipSided:Wt,setCullFace:A,setLineWidth:E,setPolygonOffset:V,setScissorTest:ct,activeTexture:ot,bindTexture:lt,unbindTexture:Rt,compressedTexImage2D:gt,compressedTexImage3D:Mt,texImage2D:bt,texImage3D:St,updateUBOMapping:me,uniformBlockBinding:Xt,texStorage2D:Yt,texStorage3D:zt,texSubImage2D:Ft,texSubImage3D:Vt,compressedTexSubImage2D:st,compressedTexSubImage3D:ae,scissor:$t,viewport:ne,reset:dt}}function lm(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,E){return v?new OffscreenCanvas(A,E):Js("canvas")}function y(A,E,V,ct){let ot=1;if((A.width>ct||A.height>ct)&&(ot=ct/Math.max(A.width,A.height)),ot<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const lt=E?Ks:Math.floor,Rt=lt(ot*A.width),gt=lt(ot*A.height);d===void 0&&(d=x(Rt,gt));const Mt=V?x(Rt,gt):d;return Mt.width=Rt,Mt.height=gt,Mt.getContext("2d").drawImage(A,0,0,Rt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Rt+"x"+gt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function _(A){return so(A.width)&&so(A.height)}function f(A){return o?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==Be&&A.minFilter!==Ze}function C(A,E){return A.generateMipmaps&&E&&A.minFilter!==Be&&A.minFilter!==Ze}function w(A){i.generateMipmap(A)}function b(A,E,V,ct,ot=!1){if(o===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt=E;if(E===i.RED&&(V===i.FLOAT&&(lt=i.R32F),V===i.HALF_FLOAT&&(lt=i.R16F),V===i.UNSIGNED_BYTE&&(lt=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(lt=i.R8UI),V===i.UNSIGNED_SHORT&&(lt=i.R16UI),V===i.UNSIGNED_INT&&(lt=i.R32UI),V===i.BYTE&&(lt=i.R8I),V===i.SHORT&&(lt=i.R16I),V===i.INT&&(lt=i.R32I)),E===i.RG&&(V===i.FLOAT&&(lt=i.RG32F),V===i.HALF_FLOAT&&(lt=i.RG16F),V===i.UNSIGNED_BYTE&&(lt=i.RG8)),E===i.RGBA){const Rt=ot?Xs:de.getTransfer(ct);V===i.FLOAT&&(lt=i.RGBA32F),V===i.HALF_FLOAT&&(lt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(lt=Rt===ge?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function O(A,E,V){return C(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Ze?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function P(A){return A===Be||A===Io||A===gr?i.NEAREST:i.LINEAR}function L(A){const E=A.target;E.removeEventListener("dispose",L),T(E),E.isVideoTexture&&u.delete(E)}function K(A){const E=A.target;E.removeEventListener("dispose",K),q(E)}function T(A){const E=n.get(A);if(E.__webglInit===void 0)return;const V=A.source,ct=p.get(V);if(ct){const ot=ct[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(A),Object.keys(ct).length===0&&p.delete(V)}n.remove(A)}function R(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const V=A.source,ct=p.get(V);delete ct[E.__cacheKey],a.memory.textures--}function q(A){const E=A.texture,V=n.get(A),ct=n.get(E);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(V.__webglFramebuffer[ot]))for(let lt=0;lt<V.__webglFramebuffer[ot].length;lt++)i.deleteFramebuffer(V.__webglFramebuffer[ot][lt]);else i.deleteFramebuffer(V.__webglFramebuffer[ot]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[ot])}else{if(Array.isArray(V.__webglFramebuffer))for(let ot=0;ot<V.__webglFramebuffer.length;ot++)i.deleteFramebuffer(V.__webglFramebuffer[ot]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ot=0;ot<V.__webglColorRenderbuffer.length;ot++)V.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[ot]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ot=0,lt=E.length;ot<lt;ot++){const Rt=n.get(E[ot]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(E[ot])}n.remove(E),n.remove(A)}let j=0;function ht(){j=0}function F(){const A=j;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),j+=1,A}function H(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Y(A,E){const V=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const ct=A.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,A,E);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function J(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){xt(V,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function Q(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){xt(V,A,E);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function et(A,E){const V=n.get(A);if(A.version>0&&V.__version!==A.version){wt(V,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const nt={[Jn]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},at={[Be]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},ut={[Vl]:i.NEVER,[Yl]:i.ALWAYS,[Wl]:i.LESS,[Sc]:i.LEQUAL,[$l]:i.EQUAL,[jl]:i.GEQUAL,[Xl]:i.GREATER,[ql]:i.NOTEQUAL};function X(A,E,V){if(V?(i.texParameteri(A,i.TEXTURE_WRAP_S,nt[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==ln||E.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,P(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Be&&E.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Be||E.minFilter!==gr&&E.minFilter!==as||E.type===On&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===cs&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function it(A,E){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",L));const ct=E.source;let ot=p.get(ct);ot===void 0&&(ot={},p.set(ct,ot));const lt=H(E);if(lt!==A.__cacheKey){ot[lt]===void 0&&(ot[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ot[lt].usedTimes++;const Rt=ot[A.__cacheKey];Rt!==void 0&&(ot[A.__cacheKey].usedTimes--,Rt.usedTimes===0&&R(E)),A.__cacheKey=lt,A.__webglTexture=ot[lt].texture}return V}function xt(A,E,V){let ct=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=i.TEXTURE_3D);const ot=it(A,E),lt=E.source;e.bindTexture(ct,A.__webglTexture,i.TEXTURE0+V);const Rt=n.get(lt);if(lt.version!==Rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);const gt=de.getPrimaries(de.workingColorSpace),Mt=E.colorSpace===tn?null:de.getPrimaries(E.colorSpace),Ft=E.colorSpace===tn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Vt=f(E)&&_(E.image)===!1;let st=y(E.image,Vt,!1,s.maxTextureSize);st=Wt(E,st);const ae=_(st)||o,Yt=r.convert(E.format,E.colorSpace);let zt=r.convert(E.type),bt=b(E.internalFormat,Yt,zt,E.colorSpace,E.isVideoTexture);X(ct,E,ae);let St;const $t=E.mipmaps,ne=o&&E.isVideoTexture!==!0&&bt!==xc,me=Rt.__version===void 0||ot===!0,Xt=O(E,st,ae);if(E.isDepthTexture)bt=i.DEPTH_COMPONENT,o?E.type===On?bt=i.DEPTH_COMPONENT32F:E.type===Un?bt=i.DEPTH_COMPONENT24:E.type===Zn?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:E.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qn&&bt===i.DEPTH_COMPONENT&&E.type!==uo&&E.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Un,zt=r.convert(E.type)),E.format===Ni&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,zt=r.convert(E.type))),me&&(ne?e.texStorage2D(i.TEXTURE_2D,1,bt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,bt,st.width,st.height,0,Yt,zt,null));else if(E.isDataTexture)if($t.length>0&&ae){ne&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,bt,$t[0].width,$t[0].height);for(let dt=0,D=$t.length;dt<D;dt++)St=$t[dt],ne?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Yt,zt,St.data):e.texImage2D(i.TEXTURE_2D,dt,bt,St.width,St.height,0,Yt,zt,St.data);E.generateMipmaps=!1}else ne?(me&&e.texStorage2D(i.TEXTURE_2D,Xt,bt,st.width,st.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Yt,zt,st.data)):e.texImage2D(i.TEXTURE_2D,0,bt,st.width,st.height,0,Yt,zt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,bt,$t[0].width,$t[0].height,st.depth);for(let dt=0,D=$t.length;dt<D;dt++)St=$t[dt],E.format!==hn?Yt!==null?ne?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,st.depth,Yt,St.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,bt,St.width,St.height,st.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,st.depth,Yt,zt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,bt,St.width,St.height,st.depth,0,Yt,zt,St.data)}else{ne&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,bt,$t[0].width,$t[0].height);for(let dt=0,D=$t.length;dt<D;dt++)St=$t[dt],E.format!==hn?Yt!==null?ne?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Yt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Yt,zt,St.data):e.texImage2D(i.TEXTURE_2D,dt,bt,St.width,St.height,0,Yt,zt,St.data)}else if(E.isDataArrayTexture)ne?(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,bt,st.width,st.height,st.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Yt,zt,st.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,st.width,st.height,st.depth,0,Yt,zt,st.data);else if(E.isData3DTexture)ne?(me&&e.texStorage3D(i.TEXTURE_3D,Xt,bt,st.width,st.height,st.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Yt,zt,st.data)):e.texImage3D(i.TEXTURE_3D,0,bt,st.width,st.height,st.depth,0,Yt,zt,st.data);else if(E.isFramebufferTexture){if(me)if(ne)e.texStorage2D(i.TEXTURE_2D,Xt,bt,st.width,st.height);else{let dt=st.width,D=st.height;for(let vt=0;vt<Xt;vt++)e.texImage2D(i.TEXTURE_2D,vt,bt,dt,D,0,Yt,zt,null),dt>>=1,D>>=1}}else if($t.length>0&&ae){ne&&me&&e.texStorage2D(i.TEXTURE_2D,Xt,bt,$t[0].width,$t[0].height);for(let dt=0,D=$t.length;dt<D;dt++)St=$t[dt],ne?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Yt,zt,St):e.texImage2D(i.TEXTURE_2D,dt,bt,Yt,zt,St);E.generateMipmaps=!1}else ne?(me&&e.texStorage2D(i.TEXTURE_2D,Xt,bt,st.width,st.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,zt,st)):e.texImage2D(i.TEXTURE_2D,0,bt,Yt,zt,st);C(E,ae)&&w(ct),Rt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function wt(A,E,V){if(E.image.length!==6)return;const ct=it(A,E),ot=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const lt=n.get(ot);if(ot.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+V);const Rt=de.getPrimaries(de.workingColorSpace),gt=E.colorSpace===tn?null:de.getPrimaries(E.colorSpace),Mt=E.colorSpace===tn||Rt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Vt=E.image[0]&&E.image[0].isDataTexture,st=[];for(let dt=0;dt<6;dt++)!Ft&&!Vt?st[dt]=y(E.image[dt],!1,!0,s.maxCubemapSize):st[dt]=Vt?E.image[dt].image:E.image[dt],st[dt]=Wt(E,st[dt]);const ae=st[0],Yt=_(ae)||o,zt=r.convert(E.format,E.colorSpace),bt=r.convert(E.type),St=b(E.internalFormat,zt,bt,E.colorSpace),$t=o&&E.isVideoTexture!==!0,ne=lt.__version===void 0||ct===!0;let me=O(E,ae,Yt);X(i.TEXTURE_CUBE_MAP,E,Yt);let Xt;if(Ft){$t&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,me,St,ae.width,ae.height);for(let dt=0;dt<6;dt++){Xt=st[dt].mipmaps;for(let D=0;D<Xt.length;D++){const vt=Xt[D];E.format!==hn?zt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,St,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,vt.width,vt.height,zt,bt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,St,vt.width,vt.height,0,zt,bt,vt.data)}}}else{Xt=E.mipmaps,$t&&ne&&(Xt.length>0&&me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,me,St,st[0].width,st[0].height));for(let dt=0;dt<6;dt++)if(Vt){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,st[dt].width,st[dt].height,zt,bt,st[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,St,st[dt].width,st[dt].height,0,zt,bt,st[dt].data);for(let D=0;D<Xt.length;D++){const _t=Xt[D].image[dt].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,_t.width,_t.height,zt,bt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,St,_t.width,_t.height,0,zt,bt,_t.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,zt,bt,st[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,St,zt,bt,st[dt]);for(let D=0;D<Xt.length;D++){const vt=Xt[D];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,zt,bt,vt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,St,zt,bt,vt.image[dt])}}}C(E,Yt)&&w(i.TEXTURE_CUBE_MAP),lt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Pt(A,E,V,ct,ot,lt){const Rt=r.convert(V.format,V.colorSpace),gt=r.convert(V.type),Mt=b(V.internalFormat,Rt,gt,V.colorSpace);if(!n.get(E).__hasExternalTextures){const Vt=Math.max(1,E.width>>lt),st=Math.max(1,E.height>>lt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,lt,Mt,Vt,st,E.depth,0,Rt,gt,null):e.texImage2D(ot,lt,Mt,Vt,st,0,Rt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),At(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,n.get(V).__webglTexture,0,kt(E)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,n.get(V).__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ct=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||At(E)){const ot=E.depthTexture;ot&&ot.isDepthTexture&&(ot.type===On?ct=i.DEPTH_COMPONENT32F:ot.type===Un&&(ct=i.DEPTH_COMPONENT24));const lt=kt(E);At(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,ct,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ct,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ct=kt(E);V&&At(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,E.width,E.height):At(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ct=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ot=0;ot<ct.length;ot++){const lt=ct[ot],Rt=r.convert(lt.format,lt.colorSpace),gt=r.convert(lt.type),Mt=b(lt.internalFormat,Rt,gt,lt.colorSpace),Ft=kt(E);V&&At(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Mt,E.width,E.height):At(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ct=n.get(E.depthTexture).__webglTexture,ot=kt(E);if(E.depthTexture.format===Qn)At(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(E.depthTexture.format===Ni)At(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const E=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ht(E.__webglFramebuffer,A)}else if(V){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]=i.createRenderbuffer(),Gt(E.__webglDepthbuffer[ct],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Gt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,E,V){const ct=n.get(A);E!==void 0&&Pt(ct.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Nt(A)}function W(A){const E=A.texture,V=n.get(A),ct=n.get(E);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=E.version,a.memory.textures++);const ot=A.isWebGLCubeRenderTarget===!0,lt=A.isWebGLMultipleRenderTargets===!0,Rt=_(A)||o;if(ot){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)V.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else V.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)V.__webglFramebuffer[gt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(lt)if(s.drawBuffers){const gt=A.texture;for(let Mt=0,Ft=gt.length;Mt<Ft;Mt++){const Vt=n.get(gt[Mt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&At(A)===!1){const gt=lt?E:[E];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Mt=0;Mt<gt.length;Mt++){const Ft=gt[Mt];V.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Mt]);const Vt=r.convert(Ft.format,Ft.colorSpace),st=r.convert(Ft.type),ae=b(Ft.internalFormat,Vt,st,Ft.colorSpace,A.isXRRenderTarget===!0),Yt=kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,V.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),X(i.TEXTURE_CUBE_MAP,E,Rt);for(let gt=0;gt<6;gt++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Pt(V.__webglFramebuffer[gt][Mt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else Pt(V.__webglFramebuffer[gt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);C(E,Rt)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const gt=A.texture;for(let Mt=0,Ft=gt.length;Mt<Ft;Mt++){const Vt=gt[Mt],st=n.get(Vt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),X(i.TEXTURE_2D,Vt,Rt),Pt(V.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),C(Vt,Rt)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ct.__webglTexture),X(gt,E,Rt),o&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Pt(V.__webglFramebuffer[Mt],A,E,i.COLOR_ATTACHMENT0,gt,Mt);else Pt(V.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,gt,0);C(E,Rt)&&w(gt),e.unbindTexture()}A.depthBuffer&&Nt(A)}function oe(A){const E=_(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ct=0,ot=V.length;ct<ot;ct++){const lt=V[ct];if(C(lt,E)){const Rt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(lt).__webglTexture;e.bindTexture(Rt,gt),w(Rt),e.unbindTexture()}}}function Ut(A){if(o&&A.samples>0&&At(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ct=A.height;let ot=i.COLOR_BUFFER_BIT;const lt=[],Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),Mt=A.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Ft=0;Ft<E.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ft=0;Ft<E.length;Ft++){lt.push(i.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&lt.push(Rt);const Vt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Vt===!1&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ft]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Rt])),Mt){const st=n.get(E[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,V,ct,0,0,V,ct,ot,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Ft=0;Ft<E.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ft]);const Vt=n.get(E[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function kt(A){return Math.min(s.maxSamples,A.samples)}function At(A){const E=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(A){const E=a.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Wt(A,E){const V=A.colorSpace,ct=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===io||V!==An&&V!==tn&&(de.getTransfer(V)===ge?o===!1?t.has("EXT_sRGB")===!0&&ct===hn?(A.format=io,A.minFilter=Ze,A.generateMipmaps=!1):E=Tc.sRGBToLinear(E):(ct!==hn||ot!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=F,this.resetTextureUnits=ht,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=te,this.setupRenderTarget=W,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=At}function hm(i,t,e){const n=e.isWebGL2;function s(r,a=tn){let o;const c=de.getTransfer(a);if(r===Bn)return i.UNSIGNED_BYTE;if(r===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Il)return i.BYTE;if(r===Dl)return i.SHORT;if(r===uo)return i.UNSIGNED_SHORT;if(r===fc)return i.INT;if(r===Un)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===cs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ul)return i.ALPHA;if(r===hn)return i.RGBA;if(r===Ol)return i.LUMINANCE;if(r===Nl)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Ni)return i.DEPTH_STENCIL;if(r===io)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fl)return i.RED;if(r===gc)return i.RED_INTEGER;if(r===Bl)return i.RG;if(r===_c)return i.RG_INTEGER;if(r===vc)return i.RGBA_INTEGER;if(r===_r||r===vr||r===xr||r===yr)if(c===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===_r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===_r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Do||r===Uo||r===Oo||r===No)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Do)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fo||r===Bo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fo)return c===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zo||r===ko||r===Go||r===Ho||r===Vo||r===Wo||r===$o||r===Xo||r===qo||r===jo||r===Yo||r===Ko||r===Jo||r===Zo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ko)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Go)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ho)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$o)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ko)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mr||r===Qo||r===ta)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Mr)return c===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ta)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zl||r===ea||r===na||r===ia)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Mr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ea)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===na)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ia)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class um extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ye extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const y of t.hand.values()){const _=e.getJointPose(y,n),f=this._getHandJoint(h,y);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=u.position.distanceTo(d.position),v=.02,x=.005;h.inputState.pinching&&p>v+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=v-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fm extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,p=null,v=null,x=null;const y=e.getContextAttributes();let _=null,f=null;const C=[],w=[],b=new jt;let O=null;const P=new Ge;P.layers.enable(1),P.viewport=new _e;const L=new Ge;L.layers.enable(2),L.viewport=new _e;const K=[P,L],T=new um;T.layers.enable(1),T.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=C[X];return it===void 0&&(it=new Wr,C[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=C[X];return it===void 0&&(it=new Wr,C[X]=it),it.getGripSpace()},this.getHand=function(X){let it=C[X];return it===void 0&&(it=new Wr,C[X]=it),it.getHandSpace()};function j(X){const it=w.indexOf(X.inputSource);if(it===-1)return;const xt=C[it];xt!==void 0&&(xt.update(X.inputSource,X.frame,h||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function ht(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",F);for(let X=0;X<C.length;X++){const it=w[X];it!==null&&(w[X]=null,C[X].disconnect(it))}R=null,q=null,t.setRenderTarget(_),v=null,p=null,d=null,s=null,f=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),f=new ni(v.framebufferWidth,v.framebufferHeight,{format:hn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let it=null,xt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?Ni:Qn,xt=y.stencil?Zn:Un);const Pt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(Pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new ni(p.textureWidth,p.textureHeight,{format:hn,type:Bn,depthTexture:new Oc(p.textureWidth,p.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Gt=t.properties.get(f);Gt.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(X){for(let it=0;it<X.removed.length;it++){const xt=X.removed[it],wt=w.indexOf(xt);wt>=0&&(w[wt]=null,C[wt].disconnect(xt))}for(let it=0;it<X.added.length;it++){const xt=X.added[it];let wt=w.indexOf(xt);if(wt===-1){for(let Gt=0;Gt<C.length;Gt++)if(Gt>=w.length){w.push(xt),wt=Gt;break}else if(w[Gt]===null){w[Gt]=xt,wt=Gt;break}if(wt===-1)break}const Pt=C[wt];Pt&&Pt.connect(xt)}}const H=new N,Y=new N;function J(X,it,xt){H.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const wt=H.distanceTo(Y),Pt=it.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,Ht=Pt[14]/(Pt[10]-1),Nt=Pt[14]/(Pt[10]+1),te=(Pt[9]+1)/Pt[5],W=(Pt[9]-1)/Pt[5],oe=(Pt[8]-1)/Pt[0],Ut=(Gt[8]+1)/Gt[0],kt=Ht*oe,At=Ht*Ut,ce=wt/(-oe+Ut),Wt=ce*-oe;it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Wt),X.translateZ(ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Ht+ce,E=Nt+ce,V=kt-Wt,ct=At+(wt-Wt),ot=te*Nt/E*A,lt=W*Nt/E*A;X.projectionMatrix.makePerspective(V,ct,ot,lt,A,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Q(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;T.near=L.near=P.near=X.near,T.far=L.far=P.far=X.far,(R!==T.near||q!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,q=T.far);const it=X.parent,xt=T.cameras;Q(T,it);for(let wt=0;wt<xt.length;wt++)Q(xt[wt],it);xt.length===2?J(T,P,L):T.projectionMatrix.copy(P.projectionMatrix),et(X,T,it)};function et(X,it,xt){xt===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)};let nt=null;function at(X,it){if(u=it.getViewerPose(h||a),x=it,u!==null){const xt=u.views;v!==null&&(t.setRenderTargetFramebuffer(f,v.framebuffer),t.setRenderTarget(f));let wt=!1;xt.length!==T.cameras.length&&(T.cameras.length=0,wt=!0);for(let Pt=0;Pt<xt.length;Pt++){const Gt=xt[Pt];let Ht=null;if(v!==null)Ht=v.getViewport(Gt);else{const te=d.getViewSubImage(p,Gt);Ht=te.viewport,Pt===0&&(t.setRenderTargetTextures(f,te.colorTexture,p.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(f))}let Nt=K[Pt];Nt===void 0&&(Nt=new Ge,Nt.layers.enable(Pt),Nt.viewport=new _e,K[Pt]=Nt),Nt.matrix.fromArray(Gt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Gt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Pt===0&&(T.matrix.copy(Nt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),wt===!0&&T.cameras.push(Nt)}}for(let xt=0;xt<C.length;xt++){const wt=w[xt],Pt=C[xt];wt!==null&&Pt!==void 0&&Pt.update(wt,it,h||a)}nt&&nt(X,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),x=null}const ut=new Dc;ut.setAnimationLoop(at),this.setAnimationLoop=function(X){nt=X},this.dispose=function(){}}}function pm(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,Lc(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,C,w,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),d(_,f)):f.isMeshPhongMaterial?(r(_,f),u(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&v(_,f,b)):f.isMeshMatcapMaterial?(r(_,f),x(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),y(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?c(_,f,C,w):f.isSpriteMaterial?h(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Ve&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Ve&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const C=t.get(f).envMap;if(C&&(_.envMap.value=C,_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*w,e(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,C,w){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*C,_.scale.value=w*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),t.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function v(_,f,C){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,f){f.matcap&&(_.matcap.value=f.matcap)}function y(_,f){const C=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,w){const b=w.program;n.uniformBlockBinding(C,b)}function h(C,w){let b=s[C.id];b===void 0&&(x(C),b=u(C),s[C.id]=b,C.addEventListener("dispose",_));const O=w.program;n.updateUBOMapping(C,O);const P=t.render.frame;r[C.id]!==P&&(p(C),r[C.id]=P)}function u(C){const w=d();C.__bindingPointIndex=w;const b=i.createBuffer(),O=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const w=s[C.id],b=C.uniforms,O=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,L=b.length;P<L;P++){const K=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,R=K.length;T<R;T++){const q=K[T];if(v(q,P,T,O)===!0){const j=q.__offset,ht=Array.isArray(q.value)?q.value:[q.value];let F=0;for(let H=0;H<ht.length;H++){const Y=ht[H],J=y(Y);typeof Y=="number"||typeof Y=="boolean"?(q.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,j+F,q.__data)):Y.isMatrix3?(q.__data[0]=Y.elements[0],q.__data[1]=Y.elements[1],q.__data[2]=Y.elements[2],q.__data[3]=0,q.__data[4]=Y.elements[3],q.__data[5]=Y.elements[4],q.__data[6]=Y.elements[5],q.__data[7]=0,q.__data[8]=Y.elements[6],q.__data[9]=Y.elements[7],q.__data[10]=Y.elements[8],q.__data[11]=0):(Y.toArray(q.__data,F),F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(C,w,b,O){const P=C.value,L=w+"_"+b;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{const K=O[L];if(typeof P=="number"||typeof P=="boolean"){if(K!==P)return O[L]=P,!0}else if(K.equals(P)===!1)return K.copy(P),!0}return!1}function x(C){const w=C.uniforms;let b=0;const O=16;for(let L=0,K=w.length;L<K;L++){const T=Array.isArray(w[L])?w[L]:[w[L]];for(let R=0,q=T.length;R<q;R++){const j=T[R],ht=Array.isArray(j.value)?j.value:[j.value];for(let F=0,H=ht.length;F<H;F++){const Y=ht[F],J=y(Y),Q=b%O;Q!==0&&O-Q<J.boundary&&(b+=O-Q),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=J.storage}}}const P=b%O;return P>0&&(b+=O-P),C.__size=b,C.__cache={},this}function y(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function _(C){const w=C.target;w.removeEventListener("dispose",_);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:h,dispose:f}}class Gc{constructor(t={}){const{canvas:e=hh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const v=new Uint32Array(4),x=new Int32Array(4);let y=null,_=null;const f=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const w=this;let b=!1,O=0,P=0,L=null,K=-1,T=null;const R=new _e,q=new _e;let j=null;const ht=new Zt(0);let F=0,H=e.width,Y=e.height,J=1,Q=null,et=null;const nt=new _e(0,0,H,Y),at=new _e(0,0,H,Y);let ut=!1;const X=new _o;let it=!1,xt=!1,wt=null;const Pt=new ye,Gt=new jt,Ht=new N,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return L===null?J:1}let W=n;function oe(S,I){for(let k=0;k<S.length;k++){const U=S[k],z=e.getContext(U,I);if(z!==null)return z}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",vt,!1),W===null){const I=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&I.shift(),W=oe(I,S),W===null)throw oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ut,kt,At,ce,Wt,A,E,V,ct,ot,lt,Rt,gt,Mt,Ft,Vt,st,ae,Yt,zt,bt,St,$t,ne;function me(){Ut=new wf(W),kt=new xf(W,Ut,t),Ut.init(kt),St=new hm(W,Ut,kt),At=new cm(W,Ut,kt),ce=new Rf(W),Wt=new jp,A=new lm(W,Ut,At,Wt,kt,St,ce),E=new Mf(w),V=new Tf(w),ct=new Oh(W,kt),$t=new _f(W,Ut,ct,kt),ot=new Af(W,ct,ce,$t),lt=new If(W,ot,ct,ce),Yt=new Pf(W,kt,A),Vt=new yf(Wt),Rt=new qp(w,E,V,Ut,kt,$t,Vt),gt=new pm(w,Wt),Mt=new Kp,Ft=new nm(Ut,kt),ae=new gf(w,E,V,At,lt,p,c),st=new am(w,lt,kt),ne=new mm(W,ce,kt,At),zt=new vf(W,Ut,ce,kt),bt=new bf(W,Ut,ce,kt),ce.programs=Rt.programs,w.capabilities=kt,w.extensions=Ut,w.properties=Wt,w.renderLists=Mt,w.shadowMap=st,w.state=At,w.info=ce}me();const Xt=new fm(w,W);this.xr=Xt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const S=Ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(H,Y,!1))},this.getSize=function(S){return S.set(H,Y)},this.setSize=function(S,I,k=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,Y=I,e.width=Math.floor(S*J),e.height=Math.floor(I*J),k===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(H*J,Y*J).floor()},this.setDrawingBufferSize=function(S,I,k){H=S,Y=I,J=k,e.width=Math.floor(S*k),e.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,I,k,U){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,I,k,U),At.viewport(R.copy(nt).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(at)},this.setScissor=function(S,I,k,U){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,I,k,U),At.scissor(q.copy(at).multiplyScalar(J).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(S){At.setScissorTest(ut=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){et=S},this.getClearColor=function(S){return S.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(S=!0,I=!0,k=!0){let U=0;if(S){let z=!1;if(L!==null){const tt=L.texture.format;z=tt===vc||tt===_c||tt===gc}if(z){const tt=L.texture.type,rt=tt===Bn||tt===Un||tt===uo||tt===Zn||tt===pc||tt===mc,$=ae.getClearColor(),ft=ae.getClearAlpha(),Dt=$.r,yt=$.g,pt=$.b;rt?(v[0]=Dt,v[1]=yt,v[2]=pt,v[3]=ft,W.clearBufferuiv(W.COLOR,0,v)):(x[0]=Dt,x[1]=yt,x[2]=pt,x[3]=ft,W.clearBufferiv(W.COLOR,0,x))}else U|=W.COLOR_BUFFER_BIT}I&&(U|=W.DEPTH_BUFFER_BIT),k&&(U|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Ft.dispose(),Wt.dispose(),E.dispose(),V.dispose(),lt.dispose(),$t.dispose(),ne.dispose(),Rt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Le),Xt.removeEventListener("sessionend",ee),wt&&(wt.dispose(),wt=null),Te.stop()};function dt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=ce.autoReset,I=st.enabled,k=st.autoUpdate,U=st.needsUpdate,z=st.type;me(),ce.autoReset=S,st.enabled=I,st.autoUpdate=k,st.needsUpdate=U,st.type=z}function vt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _t(S){const I=S.target;I.removeEventListener("dispose",_t),Bt(I)}function Bt(S){Ot(S),Wt.remove(S)}function Ot(S){const I=Wt.get(S).programs;I!==void 0&&(I.forEach(function(k){Rt.releaseProgram(k)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,U,z,tt){I===null&&(I=Nt);const rt=z.isMesh&&z.matrixWorld.determinant()<0,$=Lt(S,I,k,U,z);At.setMaterial(U,rt);let ft=k.index,Dt=1;if(U.wireframe===!0){if(ft=ot.getWireframeAttribute(k),ft===void 0)return;Dt=2}const yt=k.drawRange,pt=k.attributes.position;let It=yt.start*Dt,xe=(yt.start+yt.count)*Dt;tt!==null&&(It=Math.max(It,tt.start*Dt),xe=Math.min(xe,(tt.start+tt.count)*Dt)),ft!==null?(It=Math.max(It,0),xe=Math.min(xe,ft.count)):pt!=null&&(It=Math.max(It,0),xe=Math.min(xe,pt.count));const fe=xe-It;if(fe<0||fe===1/0)return;$t.setup(z,U,$,k,ft);let Se,qt=zt;if(ft!==null&&(Se=ct.get(ft),qt=bt,qt.setIndex(Se)),z.isMesh)U.wireframe===!0?(At.setLineWidth(U.wireframeLinewidth*te()),qt.setMode(W.LINES)):qt.setMode(W.TRIANGLES);else if(z.isLine){let Ct=U.linewidth;Ct===void 0&&(Ct=1),At.setLineWidth(Ct*te()),z.isLineSegments?qt.setMode(W.LINES):z.isLineLoop?qt.setMode(W.LINE_LOOP):qt.setMode(W.LINE_STRIP)}else z.isPoints?qt.setMode(W.POINTS):z.isSprite&&qt.setMode(W.TRIANGLES);if(z.isBatchedMesh)qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)qt.renderInstances(It,fe,z.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bn=Math.min(k.instanceCount,Ct);qt.renderInstances(It,fe,bn)}else qt.render(It,fe)};function le(S,I,k){S.transparent===!0&&S.side===cn&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,M(S,I,k),S.side=kn,S.needsUpdate=!0,M(S,I,k),S.side=cn):M(S,I,k)}this.compile=function(S,I,k=null){k===null&&(k=S),_=Ft.get(k),_.init(),C.push(_),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),S!==k&&S.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights(w._useLegacyLights);const U=new Set;return S.traverse(function(z){const tt=z.material;if(tt)if(Array.isArray(tt))for(let rt=0;rt<tt.length;rt++){const $=tt[rt];le($,k,z),U.add($)}else le(tt,k,z),U.add(tt)}),C.pop(),_=null,U},this.compileAsync=function(S,I,k=null){const U=this.compile(S,I,k);return new Promise(z=>{function tt(){if(U.forEach(function(rt){Wt.get(rt).currentProgram.isReady()&&U.delete(rt)}),U.size===0){z(S);return}setTimeout(tt,10)}Ut.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let he=null;function se(S){he&&he(S)}function Le(){Te.stop()}function ee(){Te.start()}const Te=new Dc;Te.setAnimationLoop(se),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(S){he=S,Xt.setAnimationLoop(S),S===null?Te.stop():Te.start()},Xt.addEventListener("sessionstart",Le),Xt.addEventListener("sessionend",ee),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(I),I=Xt.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,I,L),_=Ft.get(S,C.length),_.init(),C.push(_),Pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(Pt),xt=this.localClippingEnabled,it=Vt.init(this.clippingPlanes,xt),y=Mt.get(S,f.length),y.init(),f.push(y),ke(S,I,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Q,et),this.info.render.frame++,it===!0&&Vt.beginShadows();const k=_.state.shadowsArray;if(st.render(k,S,I),it===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(y,S),_.setupLights(w._useLegacyLights),I.isArrayCamera){const U=I.cameras;for(let z=0,tt=U.length;z<tt;z++){const rt=U[z];fs(y,S,rt,rt.viewport)}}else fs(y,S,I);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(w,S,I),$t.resetDefaultState(),K=-1,T=null,C.pop(),C.length>0?_=C[C.length-1]:_=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ke(S,I,k,U){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){U&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const rt=lt.update(S),$=S.material;$.visible&&y.push(S,rt,$,k,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const rt=lt.update(S),$=S.material;if(U&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ht.copy(rt.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray($)){const ft=rt.groups;for(let Dt=0,yt=ft.length;Dt<yt;Dt++){const pt=ft[Dt],It=$[pt.materialIndex];It&&It.visible&&y.push(S,rt,It,k,Ht.z,pt)}}else $.visible&&y.push(S,rt,$,k,Ht.z,null)}}const tt=S.children;for(let rt=0,$=tt.length;rt<$;rt++)ke(tt[rt],I,k,U)}function fs(S,I,k,U){const z=S.opaque,tt=S.transmissive,rt=S.transparent;_.setupLightsView(k),it===!0&&Vt.setGlobalState(w.clippingPlanes,k),tt.length>0&&m(z,tt,I,k),U&&At.viewport(R.copy(U)),z.length>0&&l(z,I,k),tt.length>0&&l(tt,I,k),rt.length>0&&l(rt,I,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function m(S,I,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const tt=kt.isWebGL2;wt===null&&(wt=new ni(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")?cs:Bn,minFilter:as,samples:tt?4:0})),w.getDrawingBufferSize(Gt),tt?wt.setSize(Gt.x,Gt.y):wt.setSize(Ks(Gt.x),Ks(Gt.y));const rt=w.getRenderTarget();w.setRenderTarget(wt),w.getClearColor(ht),F=w.getClearAlpha(),F<1&&w.setClearColor(16777215,.5),w.clear();const $=w.toneMapping;w.toneMapping=Fn,l(S,k,U),A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt);let ft=!1;for(let Dt=0,yt=I.length;Dt<yt;Dt++){const pt=I[Dt],It=pt.object,xe=pt.geometry,fe=pt.material,Se=pt.group;if(fe.side===cn&&It.layers.test(U.layers)){const qt=fe.side;fe.side=Ve,fe.needsUpdate=!0,g(It,k,U,xe,fe,Se),fe.side=qt,fe.needsUpdate=!0,ft=!0}}ft===!0&&(A.updateMultisampleRenderTarget(wt),A.updateRenderTargetMipmap(wt)),w.setRenderTarget(rt),w.setClearColor(ht,F),w.toneMapping=$}function l(S,I,k){const U=I.isScene===!0?I.overrideMaterial:null;for(let z=0,tt=S.length;z<tt;z++){const rt=S[z],$=rt.object,ft=rt.geometry,Dt=U===null?rt.material:U,yt=rt.group;$.layers.test(k.layers)&&g($,I,k,ft,Dt,yt)}}function g(S,I,k,U,z,tt){S.onBeforeRender(w,I,k,U,z,tt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(w,I,k,U,S,tt),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,w.renderBufferDirect(k,I,U,z,S,tt),z.side=kn,z.needsUpdate=!0,w.renderBufferDirect(k,I,U,z,S,tt),z.side=cn):w.renderBufferDirect(k,I,U,z,S,tt),S.onAfterRender(w,I,k,U,z,tt)}function M(S,I,k){I.isScene!==!0&&(I=Nt);const U=Wt.get(S),z=_.state.lights,tt=_.state.shadowsArray,rt=z.state.version,$=Rt.getParameters(S,z.state,tt,I,k),ft=Rt.getProgramCacheKey($);let Dt=U.programs;U.environment=S.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(S.isMeshStandardMaterial?V:E).get(S.envMap||U.environment),Dt===void 0&&(S.addEventListener("dispose",_t),Dt=new Map,U.programs=Dt);let yt=Dt.get(ft);if(yt!==void 0){if(U.currentProgram===yt&&U.lightsStateVersion===rt)return Z(S,$),yt}else $.uniforms=Rt.getUniforms(S),S.onBuild(k,$,w),S.onBeforeCompile($,w),yt=Rt.acquireProgram($,ft),Dt.set(ft,yt),U.uniforms=$.uniforms;const pt=U.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(pt.clippingPlanes=Vt.uniform),Z(S,$),U.needsLights=Qt(S),U.lightsStateVersion=rt,U.needsLights&&(pt.ambientLightColor.value=z.state.ambient,pt.lightProbe.value=z.state.probe,pt.directionalLights.value=z.state.directional,pt.directionalLightShadows.value=z.state.directionalShadow,pt.spotLights.value=z.state.spot,pt.spotLightShadows.value=z.state.spotShadow,pt.rectAreaLights.value=z.state.rectArea,pt.ltc_1.value=z.state.rectAreaLTC1,pt.ltc_2.value=z.state.rectAreaLTC2,pt.pointLights.value=z.state.point,pt.pointLightShadows.value=z.state.pointShadow,pt.hemisphereLights.value=z.state.hemi,pt.directionalShadowMap.value=z.state.directionalShadowMap,pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,pt.spotShadowMap.value=z.state.spotShadowMap,pt.spotLightMatrix.value=z.state.spotLightMatrix,pt.spotLightMap.value=z.state.spotLightMap,pt.pointShadowMap.value=z.state.pointShadowMap,pt.pointShadowMatrix.value=z.state.pointShadowMatrix),U.currentProgram=yt,U.uniformsList=null,yt}function B(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Hs.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Z(S,I){const k=Wt.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Lt(S,I,k,U,z){I.isScene!==!0&&(I=Nt),A.resetTextureUnits();const tt=I.fog,rt=U.isMeshStandardMaterial?I.environment:null,$=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:An,ft=(U.isMeshStandardMaterial?V:E).get(U.envMap||rt),Dt=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,yt=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),pt=!!k.morphAttributes.position,It=!!k.morphAttributes.normal,xe=!!k.morphAttributes.color;let fe=Fn;U.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=w.toneMapping);const Se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=Se!==void 0?Se.length:0,Ct=Wt.get(U),bn=_.state.lights;if(it===!0&&(xt===!0||S!==T)){const Ke=S===T&&U.id===K;Vt.setState(U,S,Ke)}let ie=!1;U.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==bn.state.version||Ct.outputColorSpace!==$||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||Ct.envMap!==ft||U.fog===!0&&Ct.fog!==tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Vt.numPlanes||Ct.numIntersection!==Vt.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==yt||Ct.morphTargets!==pt||Ct.morphNormals!==It||Ct.morphColors!==xe||Ct.toneMapping!==fe||kt.isWebGL2===!0&&Ct.morphTargetsCount!==qt)&&(ie=!0):(ie=!0,Ct.__version=U.version);let nn=Ct.currentProgram;ie===!0&&(nn=M(U,I,z));let sn=!1,dn=!1,fr=!1;const Ie=nn.getUniforms(),Gn=Ct.uniforms;if(At.useProgram(nn.program)&&(sn=!0,dn=!0,fr=!0),U.id!==K&&(K=U.id,dn=!0),sn||T!==S){Ie.setValue(W,"projectionMatrix",S.projectionMatrix),Ie.setValue(W,"viewMatrix",S.matrixWorldInverse);const Ke=Ie.map.cameraPosition;Ke!==void 0&&Ke.setValue(W,Ht.setFromMatrixPosition(S.matrixWorld)),kt.logarithmicDepthBuffer&&Ie.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ie.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,dn=!0,fr=!0)}if(z.isSkinnedMesh){Ie.setOptional(W,z,"bindMatrix"),Ie.setOptional(W,z,"bindMatrixInverse");const Ke=z.skeleton;Ke&&(kt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ie.setValue(W,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ie.setOptional(W,z,"batchingTexture"),Ie.setValue(W,"batchingTexture",z._matricesTexture,A));const pr=k.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&kt.isWebGL2===!0)&&Yt.update(z,k,nn),(dn||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,Ie.setValue(W,"receiveShadow",z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Gn.envMap.value=ft,Gn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),dn&&(Ie.setValue(W,"toneMappingExposure",w.toneMappingExposure),Ct.needsLights&&Et(Gn,fr),tt&&U.fog===!0&&gt.refreshFogUniforms(Gn,tt),gt.refreshMaterialUniforms(Gn,U,J,Y,wt),Hs.upload(W,B(Ct),Gn,A)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Hs.upload(W,B(Ct),Gn,A),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ie.setValue(W,"center",z.center),Ie.setValue(W,"modelViewMatrix",z.modelViewMatrix),Ie.setValue(W,"normalMatrix",z.normalMatrix),Ie.setValue(W,"modelMatrix",z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ke=U.uniformsGroups;for(let mr=0,Kc=Ke.length;mr<Kc;mr++)if(kt.isWebGL2){const Ao=Ke[mr];ne.update(Ao,nn),ne.bind(Ao,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function Et(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Qt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,I,k){Wt.get(S.texture).__webglTexture=I,Wt.get(S.depthTexture).__webglTexture=k;const U=Wt.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=k===void 0,U.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const k=Wt.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,k=0){L=S,O=I,P=k;let U=!0,z=null,tt=!1,rt=!1;if(S){const ft=Wt.get(S);ft.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(W.FRAMEBUFFER,null),U=!1):ft.__webglFramebuffer===void 0?A.setupRenderTarget(S):ft.__hasExternalTextures&&A.rebindTextures(S,Wt.get(S.texture).__webglTexture,Wt.get(S.depthTexture).__webglTexture);const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(rt=!0);const yt=Wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(yt[I])?z=yt[I][k]:z=yt[I],tt=!0):kt.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?z=Wt.get(S).__webglMultisampledFramebuffer:Array.isArray(yt)?z=yt[k]:z=yt,R.copy(S.viewport),q.copy(S.scissor),j=S.scissorTest}else R.copy(nt).multiplyScalar(J).floor(),q.copy(at).multiplyScalar(J).floor(),j=ut;if(At.bindFramebuffer(W.FRAMEBUFFER,z)&&kt.drawBuffers&&U&&At.drawBuffers(S,z),At.viewport(R),At.scissor(q),At.setScissorTest(j),tt){const ft=Wt.get(S.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+I,ft.__webglTexture,k)}else if(rt){const ft=Wt.get(S.texture),Dt=I||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ft.__webglTexture,k||0,Dt)}K=-1},this.readRenderTargetPixels=function(S,I,k,U,z,tt,rt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&($=$[rt]),$){At.bindFramebuffer(W.FRAMEBUFFER,$);try{const ft=S.texture,Dt=ft.format,yt=ft.type;if(Dt!==hn&&St.convert(Dt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pt=yt===cs&&(Ut.has("EXT_color_buffer_half_float")||kt.isWebGL2&&Ut.has("EXT_color_buffer_float"));if(yt!==Bn&&St.convert(yt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(yt===On&&(kt.isWebGL2||Ut.has("OES_texture_float")||Ut.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-U&&k>=0&&k<=S.height-z&&W.readPixels(I,k,U,z,St.convert(Dt),St.convert(yt),tt)}finally{const ft=L!==null?Wt.get(L).__webglFramebuffer:null;At.bindFramebuffer(W.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(S,I,k=0){const U=Math.pow(2,-k),z=Math.floor(I.image.width*U),tt=Math.floor(I.image.height*U);A.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,k,0,0,S.x,S.y,z,tt),At.unbindTexture()},this.copyTextureToTexture=function(S,I,k,U=0){const z=I.image.width,tt=I.image.height,rt=St.convert(k.format),$=St.convert(k.type);A.setTexture2D(k,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,U,S.x,S.y,z,tt,rt,$,I.image.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,U,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,rt,I.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,U,S.x,S.y,rt,$,I.image),U===0&&k.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(S,I,k,U,z=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const tt=S.max.x-S.min.x+1,rt=S.max.y-S.min.y+1,$=S.max.z-S.min.z+1,ft=St.convert(U.format),Dt=St.convert(U.type);let yt;if(U.isData3DTexture)A.setTexture3D(U,0),yt=W.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),yt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,U.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,U.unpackAlignment);const pt=W.getParameter(W.UNPACK_ROW_LENGTH),It=W.getParameter(W.UNPACK_IMAGE_HEIGHT),xe=W.getParameter(W.UNPACK_SKIP_PIXELS),fe=W.getParameter(W.UNPACK_SKIP_ROWS),Se=W.getParameter(W.UNPACK_SKIP_IMAGES),qt=k.isCompressedTexture?k.mipmaps[z]:k.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,qt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,S.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,S.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?W.texSubImage3D(yt,z,I.x,I.y,I.z,tt,rt,$,ft,Dt,qt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(yt,z,I.x,I.y,I.z,tt,rt,$,ft,qt.data)):W.texSubImage3D(yt,z,I.x,I.y,I.z,tt,rt,$,ft,Dt,qt),W.pixelStorei(W.UNPACK_ROW_LENGTH,pt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,It),W.pixelStorei(W.UNPACK_SKIP_PIXELS,xe),W.pixelStorei(W.UNPACK_SKIP_ROWS,fe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Se),z===0&&U.generateMipmaps&&W.generateMipmap(yt),At.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),At.unbindTexture()},this.resetState=function(){O=0,P=0,L=null,At.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fo?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===tr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?ti:yc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?Pe:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gm extends Gc{}gm.prototype.isWebGL1Renderer=!0;class xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _m extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new N;class Zs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hc extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Si;const Ji=new N,Ei=new N,Ti=new N,wi=new jt,Zi=new jt,Vc=new ye,Ns=new N,Qi=new N,Fs=new N,$a=new jt,$r=new jt,Xa=new jt;class xm extends Me{constructor(t=new Hc){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new $e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vm(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new Zs(n,3,0,!1)),Si.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Si,this.material=t,this.center=new jt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),Vc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Bs(Ns.set(-.5,-.5,0),Ti,a,Ei,s,r),Bs(Qi.set(.5,-.5,0),Ti,a,Ei,s,r),Bs(Fs.set(.5,.5,0),Ti,a,Ei,s,r),$a.set(0,0),$r.set(1,0),Xa.set(1,1);let o=t.ray.intersectTriangle(Ns,Qi,Fs,!1,Ji);if(o===null&&(Bs(Qi.set(-.5,.5,0),Ti,a,Ei,s,r),$r.set(0,1),o=t.ray.intersectTriangle(Ns,Fs,Qi,!1,Ji),o===null))return;const c=t.ray.origin.distanceTo(Ji);c<t.near||c>t.far||e.push({distance:c,point:Ji.clone(),uv:Qe.getInterpolation(Ji,Ns,Qi,Fs,$a,$r,Xa,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(i,t,e,n,s,r){wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zi.x=r*wi.x-s*wi.y,Zi.y=s*wi.x+r*wi.y):Zi.copy(wi),i.copy(t),i.x+=Zi.x,i.y+=Zi.y,i.applyMatrix4(Vc)}class Wc extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qa=new ye,oo=new mo,zs=new er,ks=new N;class ym extends Me{constructor(t=new $e,e=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;qa.copy(s).invert(),oo.copy(t.ray).applyMatrix4(qa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=p,y=v;x<y;x++){const _=h.getX(x);ks.fromBufferAttribute(d,_),ja(ks,_,c,s,t,e,this)}}else{const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=p,y=v;x<y;x++)ks.fromBufferAttribute(d,x),ja(ks,x,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ja(i,t,e,n,s,r,a){const o=oo.distanceSqToPoint(i);if(o<e){const c=new N;oo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class bi extends We{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends $e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new N,u=new jt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const v=n+d/e*s;h.x=t*Math.cos(v),h.y=t*Math.sin(v),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends $e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],p=[],v=[];let x=0;const y=[],_=n/2;let f=0;C(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(v,2));function C(){const b=new N,O=new N;let P=0;const L=(e-t)/n;for(let K=0;K<=r;K++){const T=[],R=K/r,q=R*(e-t)+t;for(let j=0;j<=s;j++){const ht=j/s,F=ht*c+o,H=Math.sin(F),Y=Math.cos(F);O.x=q*H,O.y=-R*n+_,O.z=q*Y,d.push(O.x,O.y,O.z),b.set(H,L,Y).normalize(),p.push(b.x,b.y,b.z),v.push(ht,1-R),T.push(x++)}y.push(T)}for(let K=0;K<s;K++)for(let T=0;T<r;T++){const R=y[T][K],q=y[T+1][K],j=y[T+1][K+1],ht=y[T][K+1];u.push(R,q,ht),u.push(q,j,ht),P+=6}h.addGroup(f,P,0),f+=P}function w(b){const O=x,P=new jt,L=new N;let K=0;const T=b===!0?t:e,R=b===!0?1:-1;for(let j=1;j<=s;j++)d.push(0,_*R,0),p.push(0,R,0),v.push(.5,.5),x++;const q=x;for(let j=0;j<=s;j++){const F=j/s*c+o,H=Math.cos(F),Y=Math.sin(F);L.x=T*Y,L.y=_*R,L.z=T*H,d.push(L.x,L.y,L.z),p.push(0,R,0),P.x=H*.5+.5,P.y=Y*.5*R+.5,v.push(P.x,P.y),x++}for(let j=0;j<s;j++){const ht=O+j,F=q+j;b===!0?u.push(F,F+1,ht):u.push(F+1,F,ht),K+=3}h.addGroup(f,K,b===!0?1:2),f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $i extends He{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new N,p=new N,v=[],x=[],y=[],_=[];for(let f=0;f<=n;f++){const C=[],w=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&c===Math.PI&&(b=-.5/e);for(let O=0;O<=e;O++){const P=O/e;d.x=-t*Math.cos(s+P*r)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(s+P*r)*Math.sin(a+w*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),y.push(p.x,p.y,p.z),_.push(P+b,1-w),C.push(h++)}u.push(C)}for(let f=0;f<n;f++)for(let C=0;C<e;C++){const w=u[f][C+1],b=u[f][C],O=u[f+1][C],P=u[f+1][C+1];(f!==0||a>0)&&v.push(w,b,P),(f!==n-1||c<Math.PI)&&v.push(b,O,P)}this.setIndex(v),this.setAttribute("position",new we(x,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ir extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],h=[],u=new N,d=new N,p=new N;for(let v=0;v<=n;v++)for(let x=0;x<=s;x++){const y=x/s*r,_=v/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(y),d.y=(t+e*Math.cos(_))*Math.sin(y),d.z=e*Math.sin(_),o.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),h.push(x/s),h.push(v/n)}for(let v=1;v<=n;v++)for(let x=1;x<=s;x++){const y=(s+1)*v+x-1,_=(s+1)*(v-1)+x-1,f=(s+1)*(v-1)+x,C=(s+1)*v+x;a.push(y,_,C),a.push(_,f,C)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class re extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Xr=new ye,Ya=new N,Ka=new N;class So{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ya.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ya),Ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ka),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mm extends So{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Fi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class $c extends sr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ja=new ye,ts=new N,qr=new N;class Sm extends So{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),qr.copy(n.position),qr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qr),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),Ja.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja)}}class Ri extends sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Em extends So{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Za extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tm extends sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qa(){return(typeof performance>"u"?Date:performance).now()}class Am{constructor(t,e,n=0,s=1/0){this.ray=new mo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ao(t,this,n,e),n.sort(tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ao(t[s],this,n,e);return n.sort(tc),n}}function tc(i,t){return i.distance-t.distance}function ao(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)ao(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);class bm{constructor(t,e){G(this,"scene");G(this,"camera");G(this,"fog");G(this,"flashlight");G(this,"flashlightCone");G(this,"flashlightOn",!0);G(this,"batteryLevel",100);G(this,"flickeringLights",[]);G(this,"lightningLight");G(this,"lightningTimer",0);G(this,"isLightningFlashing",!1);G(this,"flashStep",0);G(this,"onThunder");G(this,"rainCount",1800);G(this,"rainGeo");G(this,"rainMaterial");G(this,"rainParticles");G(this,"rainPositions");G(this,"rainVelocities");G(this,"splashGeo");G(this,"splashParticles");this.scene=t,this.camera=e,this.fog=new xo(661030,.018),this.scene.fog=this.fog,this.scene.background=new Zt(661030);const n=new Tm(3493224,2.5);this.scene.add(n);const s=new Za(8299980,2.2);s.position.set(10,30,20),this.scene.add(s),this.lightningLight=new Za(12441855,0),this.lightningLight.position.set(10,30,10),this.scene.add(this.lightningLight);const r=new Ri(16775914,3,18,1.2);r.position.set(0,0,.1),this.camera.add(r),this.flashlight=new $c(16777215,8,40,Math.PI/4,.5,1),this.flashlight.position.set(0,0,0),this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.width=1024,this.flashlight.shadow.mapSize.height=1024,this.flashlight.shadow.camera.near=.2,this.flashlight.shadow.camera.far=40;const a=new Me;a.position.set(0,0,-15),this.camera.add(a),this.flashlight.target=a,this.scene.add(a),this.camera.add(this.flashlight);const o=new $i(2.4,10,20,1,!0);o.translate(0,-5,0),o.rotateX(-Math.PI/2);const c=new wn({color:16774347,transparent:!0,opacity:.08,blending:os,side:cn,depthWrite:!1});this.flashlightCone=new Tt(o,c),this.flashlightCone.position.set(.2,-.15,0),this.camera.add(this.flashlightCone),this.initRain()}registerFlickeringLight(t){this.flickeringLights.push({light:t,baseIntensity:t.intensity,phase:Math.random()*100})}setQuality(t){t==="low"?(this.flashlight.castShadow=!1,this.rainCount=600,this.flashlightCone.visible=!1):t==="medium"?(this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(512,512),this.rainCount=1200,this.flashlightCone.visible=this.flashlightOn):(this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(1024,1024),this.rainCount=2200,this.flashlightCone.visible=this.flashlightOn)}toggleFlashlight(){return this.batteryLevel<=0?this.flashlightOn=!1:this.flashlightOn=!this.flashlightOn,this.flashlight.visible=this.flashlightOn,this.flashlightCone.visible=this.flashlightOn,this.flashlightOn}initRain(){this.rainPositions=new Float32Array(this.rainCount*3),this.rainVelocities=new Float32Array(this.rainCount);for(let t=0;t<this.rainCount;t++)this.rainPositions[t*3+0]=(Math.random()-.5)*50,this.rainPositions[t*3+1]=Math.random()*25,this.rainPositions[t*3+2]=(Math.random()-.5)*50,this.rainVelocities[t]=16+Math.random()*10;this.rainGeo=new $e,this.rainGeo.setAttribute("position",new en(this.rainPositions,3)),this.rainMaterial=new Wc({color:9152193,size:.12,transparent:!0,opacity:.65,blending:os}),this.rainParticles=new ym(this.rainGeo,this.rainMaterial),this.scene.add(this.rainParticles)}update(t,e){if(this.flashlightOn)if(this.batteryLevel=Math.max(0,this.batteryLevel-t*.4),this.batteryLevel<=0)this.flashlightOn=!1,this.flashlight.visible=!1,this.flashlightCone.visible=!1;else if(this.batteryLevel<20){const s=Math.random()>.3?1:.2;this.flashlight.intensity=4.5*(this.batteryLevel/20)*s,this.flashlightCone.material.opacity=.08*s}else this.flashlight.intensity=4.5,this.flashlightCone.material.opacity=.08;for(const s of this.flickeringLights)s.phase+=t*15,Math.sin(s.phase)*Math.cos(s.phase*2.3)>.75?s.light.intensity=.05:s.light.intensity=s.baseIntensity*(.85+Math.random()*.25);this.lightningTimer+=t,!this.isLightningFlashing&&this.lightningTimer>18+Math.random()*20&&(this.isLightningFlashing=!0,this.lightningTimer=0,this.flashStep=0,this.onThunder&&setTimeout(()=>{var s;return(s=this.onThunder)==null?void 0:s.call(this)},600)),this.isLightningFlashing&&(this.flashStep+=t*12,this.flashStep<.2?(this.lightningLight.intensity=6,this.scene.background=new Zt(3162712)):this.flashStep<.35?this.lightningLight.intensity=.4:this.flashStep<.6?(this.lightningLight.intensity=8.5,this.scene.background=new Zt(4216176)):(this.lightningLight.intensity=0,this.scene.background=new Zt(264205),this.isLightningFlashing=!1));const n=this.rainGeo.attributes.position.array;for(let s=0;s<this.rainCount;s++)n[s*3+1]-=this.rainVelocities[s]*t,n[s*3+0]-=t*3.5,n[s*3+1]<0&&(n[s*3+1]=22,n[s*3+0]=e.x+(Math.random()-.5)*40,n[s*3+2]=e.z+(Math.random()-.5)*40);this.rainGeo.attributes.position.needsUpdate=!0}}class Rm{constructor(t,e){G(this,"root");G(this,"walls",[]);G(this,"interactables",[]);G(this,"atmosphere");G(this,"gateDoor",null);G(this,"generatorLight",null);G(this,"radioTowerLight",null);G(this,"safeDoor",null);this.root=new Ye,this.root.name="clinic_environment",t.add(this.root),this.atmosphere=new bm(t,e),this.buildClinic()}buildClinic(){const t=this.createTileFloorMaterial(),e=this.createConcreteWallMaterial(),n=new re({color:4668721,roughness:.9,metalness:.4}),s=new re({color:4008218,roughness:.8}),r=new re({color:6583435,roughness:.2,transparent:!0,opacity:.35}),a=new pn(120,120),o=new re({color:3030320,roughness:.75,metalness:.1}),c=new Tt(a,o);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.root.add(c),this.createFence(-35,0,70,!1),this.createFence(35,0,70,!1),this.createFence(0,-35,70,!0),this.createFence(0,35,70,!0);for(let nt=0;nt<35;nt++){const at=nt/35*Math.PI*2,ut=32+Math.random()*8,X=Math.cos(at)*ut,it=Math.sin(at)*ut;this.createJungleTree(X,it)}const h=new pn(24,24),u=new Tt(h,t);u.rotation.x=-Math.PI/2,u.position.set(0,.02,0),u.receiveShadow=!0,this.root.add(u),this.createPuddle(0,.03,3,2.5,1.8),this.createPuddle(-5,.03,-4,2,1.5),this.createPuddle(4,.03,-8,1.8,2.2),this.createBloodSplatter(.5,.04,2.5,1.4),this.createBloodSplatter(5.5,.04,-6.5,1.8),this.createBloodWallDecal(7.9,1.6,-7,0,-Math.PI/2,0);const d=new pn(24,24),p=new re({color:1712414,roughness:.9}),v=new Tt(d,p);v.rotation.x=Math.PI/2,v.position.set(0,4,0),this.root.add(v),this.addWall(0,2,-12,24,4,.4,e),this.addWall(-12,2,0,.4,4,24,e),this.addWall(12,2,0,.4,4,24,e),this.addWall(-7,2,10,10,4,.4,e),this.addWall(7,2,10,10,4,.4,e),this.addWall(0,3.5,10,4,1,.4,e);const x=new pe(3.6,3,.1);this.gateDoor=new Tt(x,n),this.gateDoor.position.set(0,1.5,10),this.gateDoor.castShadow=!0,this.root.add(this.gateDoor),this.walls.push(new Ce().setFromObject(this.gateDoor));const y=new Ri(16758605,4.5,25,1.4);y.position.set(0,3.4,10.5),y.castShadow=!0,this.root.add(y),this.atmosphere.registerFlickeringLight(y),this.interactables.push({id:"clinic_gate",type:"GATE",mesh:this.gateDoor,promptSi:"ගේට්ටුව අගුළු හැරීමට යතුර අවශ්‍යයි (Locked)",promptEn:"Clinic Gate (Locked - Requires Key)",position:new N(0,1.5,10),interacted:!1}),this.addWall(-7,2,0,10,4,.3,e),this.addWall(7,2,0,10,4,.3,e),this.addWall(-2.5,2,-6,.3,4,12,e),this.addWall(2.5,2,-6,.3,4,12,e);const _=new Ri(10863828,1.8,14,1.8);_.position.set(0,3.6,5),this.root.add(_),this.atmosphere.registerFlickeringLight(_);const f=new Tt(new pe(.3,.1,1.5),new re({emissive:10863828,emissiveIntensity:.8,color:2236962}));f.position.set(0,3.9,5),this.root.add(f);const C=new Ri(9221794,1.5,12,1.8);C.position.set(0,3.6,-6),this.root.add(C),this.atmosphere.registerFlickeringLight(C);const w=new Tt(new pe(3.5,1.1,1.2),s);w.position.set(3,.55,6),w.castShadow=!0,this.root.add(w),this.walls.push(new Ce().setFromObject(w));const b=new Tt(new pe(3.4,.8,.05),r);b.position.set(3,1.5,6),this.root.add(b),this.createGurney(-4,0,5,.4),this.createGurney(-1,0,-8,-.2),this.createChair(1.5,0,4.5,1.2),this.createChair(-2.5,0,7.5,-.8);const O=new ir(.08,.02,6,12),P=new re({color:16436245,metalness:.9,roughness:.2,emissive:16436245,emissiveIntensity:.4}),L=new Tt(O,P);L.position.set(2.8,1.15,6),this.root.add(L),this.interactables.push({id:"gate_key",type:"GATE_KEY",mesh:L,promptSi:"ප්‍රධාන ගේට්ටුවේ යතුර ගන්න (Take Gate Key)",promptEn:"Pick up Main Gate Key [E]",position:L.position.clone(),interacted:!1});const K=new Tt(new pe(.8,.8,.5),n);K.position.set(11.6,1.5,-7),this.root.add(K),this.walls.push(new Ce().setFromObject(K));const T=new pe(.7,.7,.08);this.safeDoor=new Tt(T,new re({color:2042167,metalness:.8,roughness:.3})),this.safeDoor.position.set(11.35,1.5,-7),this.root.add(this.safeDoor),this.interactables.push({id:"doctor_safe",type:"DOCTOR_SAFE",mesh:this.safeDoor,promptSi:"සේප්පුව විවෘත කරන්න (Unlock Safe Code)",promptEn:"Doctor's Safe (Enter Code) [E]",position:this.safeDoor.position.clone(),interacted:!1}),this.createWallNote(11.8,2.2,-5.5,"කේතය: 739"),this.createShelves(7,0,-11.5,4,3);const R=new pe(.35,.12,.25),q=new re({color:3359061,roughness:.4}),j=new Tt(R,q);j.position.set(8.5,.85,-6.5),this.root.add(j),this.interactables.push({id:"audio_recorder",type:"AUDIO_RECORDER",mesh:j,promptSi:"හඬ පටය අසන්න (Play Emergency Tape)",promptEn:"Audio Recorder (Listen Tape) [E]",position:j.position.clone(),interacted:!1});const ht=new pe(2,1.5,1.6),F=new re({color:2240552,metalness:.6,roughness:.7}),H=new Tt(ht,F);H.position.set(-8,.75,-8),H.castShadow=!0,this.root.add(H),this.walls.push(new Ce().setFromObject(H)),this.generatorLight=new Ri(16720418,1.2,5),this.generatorLight.position.set(-8,1.7,-7.2),this.root.add(this.generatorLight),this.interactables.push({id:"generator",type:"GENERATOR",mesh:H,promptSi:"උත්පාදක යන්ත්‍රය: ෆියුස් එකක් අවශ්‍යයි (Needs Fuse)",promptEn:"Backup Generator (Insert Fuse) [E]",position:H.position.clone(),interacted:!1});const Y=new He(.06,.06,.25,8),J=new re({color:16096779,emissive:16096779,emissiveIntensity:.5}),Q=new Tt(Y,J);Q.position.set(-10.5,.9,-3.5),this.root.add(Q),this.interactables.push({id:"clinic_fuse",type:"CLINIC_FUSE",mesh:Q,promptSi:"විදුලි ෆියුස් එක ගන්න (Take Clinic Fuse)",promptEn:"Clinic Industrial Fuse [E]",position:Q.position.clone(),interacted:!1}),this.createStaircase(0,0,-11,4);const et=new Tt(new pn(24,24),new re({color:1580578,roughness:.95}));et.rotation.x=-Math.PI/2,et.position.set(0,4.02,0),et.receiveShadow=!0,this.root.add(et),this.addWall(0,4.6,-12,24,1.2,.4,e),this.addWall(0,4.6,12,24,1.2,.4,e),this.addWall(-12,4.6,0,.4,1.2,24,e),this.addWall(12,4.6,0,.4,1.2,24,e),this.createRadioTower(0,4,2)}addWall(t,e,n,s,r,a,o){const c=new Tt(new pe(s,r,a),o);c.position.set(t,e,n),c.castShadow=!0,c.receiveShadow=!0,this.root.add(c),this.walls.push(new Ce().setFromObject(c))}createRadioTower(t,e,n){const s=new He(.3,.8,10,4),r=new re({color:14251782,metalness:.8,roughness:.3}),a=new Tt(s,r);a.position.set(t,e+5,n),this.root.add(a),this.radioTowerLight=new Ri(16711680,3,20),this.radioTowerLight.position.set(t,e+10.2,n),this.root.add(this.radioTowerLight);const o=new Tt(new pe(1.6,1.2,1),new re({color:1976635,roughness:.5}));o.position.set(t,e+.6,n+1.2),this.root.add(o),this.walls.push(new Ce().setFromObject(o)),this.interactables.push({id:"rooftop_radio",type:"ROOFTOP_RADIO",mesh:o,promptSi:"හදිසි SOS සංඥාව විකාශනය කරන්න (Send SOS Signal)",promptEn:"Transmit Rooftop SOS Emergency [E]",position:o.position.clone(),interacted:!1})}createStaircase(t,e,n,s){const o=s/14;for(let c=0;c<14;c++){const h=new Tt(new pe(2.2,o,.35),new re({color:3359061,metalness:.7,roughness:.5}));h.position.set(t,e+(c+.5)*o,n+c*.35),h.castShadow=!0,h.receiveShadow=!0,this.root.add(h),this.walls.push(new Ce().setFromObject(h))}}createGurney(t,e,n,s){const r=new Ye;r.position.set(t,e,n),r.rotation.y=s;const a=new Tt(new pe(.8,.15,2),new re({color:6583435,roughness:.9}));a.position.y=.85,r.add(a);const o=new re({color:9741240,metalness:.9,roughness:.2});for(let c of[-.35,.35])for(let h of[-.85,.85]){const u=new Tt(new He(.03,.03,.8,6),o);u.position.set(c,.4,h),r.add(u)}this.root.add(r),this.walls.push(new Ce().setFromObject(r))}createChair(t,e,n,s){const r=new Tt(new pe(.5,.5,.5),new re({color:165063,roughness:.6}));r.position.set(t,e+.25,n),r.rotation.z=s,this.root.add(r)}createShelves(t,e,n,s,r){const a=new re({color:3359061,metalness:.5,roughness:.7}),o=new Tt(new pe(s,r,.5),a);o.position.set(t,e+r/2,n),this.root.add(o),this.walls.push(new Ce().setFromObject(o))}createPuddle(t,e,n,s,r){const a=new yo(1,16),o=new re({color:725784,roughness:.05,metalness:.9}),c=new Tt(a,o);c.rotation.x=-Math.PI/2,c.position.set(t,e,n),c.scale.set(s,r,1),this.root.add(c)}createBloodSplatter(t,e,n,s){const r=document.createElement("canvas");r.width=128,r.height=128;const a=r.getContext("2d");a.fillStyle="#660505",a.beginPath(),a.arc(64,64,35,0,Math.PI*2),a.fill();for(let u=0;u<18;u++){const d=Math.random()*Math.PI*2,p=25+Math.random()*32;a.beginPath(),a.arc(64+Math.cos(d)*p,64+Math.sin(d)*p,3+Math.random()*4,0,Math.PI*2),a.fill()}const o=new bi(r),c=new wn({map:o,transparent:!0,opacity:.85}),h=new Tt(new pn(s,s),c);h.rotation.x=-Math.PI/2,h.position.set(t,e,n),this.root.add(h)}createBloodWallDecal(t,e,n,s,r,a){const o=document.createElement("canvas");o.width=128,o.height=128;const c=o.getContext("2d");c.fillStyle="#540303",c.fillRect(45,20,38,70),c.beginPath(),c.arc(64,25,25,0,Math.PI*2),c.fill();const h=new bi(o),u=new wn({map:h,transparent:!0,opacity:.8}),d=new Tt(new pn(1.2,1.2),u);d.position.set(t,e,n),d.rotation.set(s,r,a),this.root.add(d)}createWallNote(t,e,n,s){const r=document.createElement("canvas");r.width=256,r.height=128;const a=r.getContext("2d");a.fillStyle="#8b0000",a.font='bold 36px "Noto Sans Sinhala", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(s,128,64);const o=new bi(r),c=new wn({map:o,transparent:!0,opacity:.9}),h=new Tt(new pn(1.4,.7),c);h.position.set(t-.05,e,n),h.rotation.y=-Math.PI/2,this.root.add(h)}createJungleTree(t,e){const n=new He(.3,.45,9,6),s=new re({color:1317395,roughness:.95}),r=new Tt(n,s);r.position.set(t,4.5,e);const a=new $i(3.5,6,6),o=new re({color:660493,roughness:.9}),c=new Tt(a,o);c.position.set(t,8.5,e),this.root.add(r),this.root.add(c),this.walls.push(new Ce().setFromObject(r))}createFence(t,e,n,s){const r=new He(.08,.08,2.8,6),a=new re({color:2371128,metalness:.8,roughness:.5}),o=Math.floor(n/3.5);for(let c=0;c<=o;c++){const h=s?t-n/2+c*3.5:t,u=s?e:e-n/2+c*3.5,d=new Tt(r,a);d.position.set(h,1.4,u),this.root.add(d),this.walls.push(new Ce().setFromObject(d))}}createTileFloorMaterial(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#22292f",e.fillRect(0,0,256,256),e.strokeStyle="#11171d",e.lineWidth=4;for(let s=0;s<=256;s+=64)e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.stroke(),e.beginPath(),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const n=new bi(t);return n.wrapS=Jn,n.wrapT=Jn,n.repeat.set(8,8),new re({map:n,roughness:.45,metalness:.3})}createConcreteWallMaterial(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#313936",e.fillRect(0,0,128,128),e.fillStyle="rgba(20, 25, 20, 0.4)";for(let s=0;s<40;s++)e.fillRect(Math.random()*128,Math.random()*128,Math.random()*12,Math.random()*12);const n=new bi(t);return n.wrapS=Jn,n.wrapT=Jn,n.repeat.set(4,2),new re({map:n,roughness:.85,metalness:.1})}update(t,e){this.atmosphere.update(t,e),this.radioTowerLight&&(this.radioTowerLight.intensity=Math.sin(Date.now()*.005)>.2?3.5:.2)}}class Cm{constructor(){G(this,"mesh");G(this,"torso");G(this,"head");G(this,"jaw");G(this,"leftArmUpper");G(this,"leftArmLower");G(this,"rightArmUpper");G(this,"rightArmLower");G(this,"leftLegUpper");G(this,"leftLegLower");G(this,"rightLegUpper");G(this,"rightLegLower");G(this,"eyeGlintLeft");G(this,"eyeGlintRight");G(this,"spineBones",[]);G(this,"currentState","PATROL");G(this,"animTime",0);G(this,"twitchCooldown",0);G(this,"targetHeadJerk",new Bi);G(this,"currentHeadJerk",new Bi);G(this,"isAttacking",!1);G(this,"attackProgress",0);this.mesh=new Ye,this.mesh.name="creature_root";const t=new re({color:9081486,roughness:.85,metalness:.1}),e=new re({color:2962486,roughness:.9}),n=new wn({color:16726832}),s=new wn({color:656645}),r=new He(.24,.16,1.2,8);this.torso=new Tt(r,t),this.torso.position.y=1.35,this.torso.castShadow=!0,this.mesh.add(this.torso);for(let K=0;K<5;K++){const T=new ir(.22-K*.015,.02,6,12,Math.PI*1.3),R=new Tt(T,e);R.rotation.x=Math.PI/2,R.rotation.z=Math.PI*.35,R.position.set(0,.35-K*.15,.02),this.torso.add(R),this.spineBones.push(R)}this.head=new Ye,this.head.position.set(0,.75,.08),this.torso.add(this.head);const a=new pe(.28,.42,.32),o=new Tt(a,t);o.position.y=.1,this.head.add(o);const c=new pe(.08,.08,.05),h=new Tt(c,s);h.position.set(-.07,.12,.16),this.head.add(h);const u=new Tt(c,s);u.position.set(.07,.12,.16),this.head.add(u);const d=new Mo(.018,6,6);this.eyeGlintLeft=new Tt(d,n),this.eyeGlintLeft.position.set(-.07,.12,.18),this.head.add(this.eyeGlintLeft),this.eyeGlintRight=new Tt(d,n),this.eyeGlintRight.position.set(.07,.12,.18),this.head.add(this.eyeGlintRight);const p=new pe(.22,.22,.28);this.jaw=new Tt(p,t),this.jaw.position.set(0,-.16,.08),this.head.add(this.jaw);const v=new pe(.18,.16,.22),x=new Tt(v,s);x.position.set(0,-.05,.09),this.head.add(x),this.leftArmUpper=new Ye,this.leftArmUpper.position.set(-.32,.45,0),this.torso.add(this.leftArmUpper);const y=new He(.05,.04,.7,6),_=new Tt(y,t);_.position.y=-.35,this.leftArmUpper.add(_);const f=new He(.04,.025,.85,6);this.leftArmLower=new Tt(f,t),this.leftArmLower.position.y=-.8,this.leftArmUpper.add(this.leftArmLower);const C=new $i(.02,.25,4);for(let K=-1;K<=1;K++){const T=new Tt(C,e);T.rotation.x=Math.PI,T.position.set(K*.035,-.5,0),this.leftArmLower.add(T)}this.rightArmUpper=new Ye,this.rightArmUpper.position.set(.32,.45,0),this.torso.add(this.rightArmUpper);const w=new Tt(y,t);w.position.y=-.35,this.rightArmUpper.add(w),this.rightArmLower=new Tt(f,t),this.rightArmLower.position.y=-.8,this.rightArmUpper.add(this.rightArmLower);for(let K=-1;K<=1;K++){const T=new Tt(C,e);T.rotation.x=Math.PI,T.position.set(K*.035,-.5,0),this.rightArmLower.add(T)}this.leftLegUpper=new Ye,this.leftLegUpper.position.set(-.16,-.6,0),this.torso.add(this.leftLegUpper);const b=new He(.07,.05,.75,6),O=new Tt(b,t);O.position.y=-.35,O.rotation.x=.25,this.leftLegUpper.add(O);const P=new He(.05,.03,.8,6);this.leftLegLower=new Tt(P,t),this.leftLegLower.position.set(0,-.8,-.15),this.leftLegLower.rotation.x=-.3,this.leftLegUpper.add(this.leftLegLower),this.rightLegUpper=new Ye,this.rightLegUpper.position.set(.16,-.6,0),this.torso.add(this.rightLegUpper);const L=new Tt(b,t);L.position.y=-.35,L.rotation.x=.25,this.rightLegUpper.add(L),this.rightLegLower=new Tt(P,t),this.rightLegLower.position.set(0,-.8,-.15),this.rightLegLower.rotation.x=-.3,this.rightLegUpper.add(this.rightLegLower)}setState(t){this.currentState=t,t==="ATTACK"&&(this.isAttacking=!0,this.attackProgress=0)}update(t,e){if(this.animTime+=t,this.twitchCooldown-=t,this.twitchCooldown<=0){this.twitchCooldown=.25+Math.random()*.9;const c=(Math.random()-.5)*.7,h=(Math.random()-.5)*.9,u=(Math.random()-.5)*.6;this.targetHeadJerk.set(c,h,u)}this.currentHeadJerk.x=ei.lerp(this.currentHeadJerk.x,this.targetHeadJerk.x,t*18),this.currentHeadJerk.y=ei.lerp(this.currentHeadJerk.y,this.targetHeadJerk.y,t*18),this.currentHeadJerk.z=ei.lerp(this.currentHeadJerk.z,this.targetHeadJerk.z,t*18);const n=Math.sin(this.animTime*45)*.05+.12;this.jaw.position.y=-.16-n;const s=Math.random()>.92?.3:1;this.eyeGlintLeft.material.color.setRGB(s,.1,.1),this.eyeGlintRight.material.color.setRGB(s,.1,.1);const r=Math.sin(this.animTime*3)*.04;this.torso.scale.set(1+r,1,1+r);const a=this.currentState==="CHASE"?14:6,o=Math.sin(this.animTime*a);if(e?(this.leftLegUpper.rotation.x=o*.65,this.rightLegUpper.rotation.x=-o*.65,this.currentState==="CHASE"?(this.torso.rotation.x=.55+Math.sin(this.animTime*a*2)*.08,this.leftArmUpper.rotation.x=-1.2+Math.cos(this.animTime*a)*.8,this.rightArmUpper.rotation.x=-1.2-Math.cos(this.animTime*a)*.8):(this.torso.rotation.x=.25,this.leftArmUpper.rotation.x=-o*.4,this.rightArmUpper.rotation.x=o*.4)):(this.leftLegUpper.rotation.x=0,this.rightLegUpper.rotation.x=0,this.torso.rotation.x=.15+Math.sin(this.animTime*2)*.03,this.leftArmUpper.rotation.x=Math.sin(this.animTime*3)*.1,this.rightArmUpper.rotation.x=-Math.sin(this.animTime*3)*.1),this.head.rotation.set(this.currentHeadJerk.x,this.currentHeadJerk.y,this.currentHeadJerk.z),this.isAttacking){this.attackProgress+=t*4;const c=Math.sin(Math.min(Math.PI,this.attackProgress));this.leftArmUpper.rotation.x=-1.8*c,this.rightArmUpper.rotation.x=-1.8*c,this.torso.position.z=c*.4,this.attackProgress>=Math.PI&&(this.isAttacking=!1,this.torso.position.z=0)}}}class Lm{constructor(t){G(this,"mesh");G(this,"id");G(this,"head");G(this,"torso");G(this,"leftLeg");G(this,"rightLeg");G(this,"flashlightMesh");G(this,"spotlight");G(this,"lightCone");G(this,"nameSprite");G(this,"animTime",0);G(this,"targetPosition",new N);G(this,"targetRotationY",0);G(this,"targetPitch",0);this.id=t.id,this.mesh=new Ye,this.mesh.name=`player_${t.id}`;const e=new re({color:4016957,roughness:.7}),n=new re({color:2042167,roughness:.8}),s=new re({color:11897455,roughness:.6}),r=new pe(.5,.75,.3);this.torso=new Tt(r,e),this.torso.position.y=1.1,this.torso.castShadow=!0,this.mesh.add(this.torso);const a=new pe(.3,.32,.3);this.head=new Tt(a,s),this.head.position.set(0,.55,0),this.torso.add(this.head);const o=new pe(.18,.75,.2);this.leftLeg=new Tt(o,n),this.leftLeg.position.set(-.14,.4,0),this.leftLeg.castShadow=!0,this.mesh.add(this.leftLeg),this.rightLeg=new Tt(o,n),this.rightLeg.position.set(.14,.4,0),this.rightLeg.castShadow=!0,this.mesh.add(this.rightLeg);const c=new He(.04,.05,.2,8),h=new re({color:1976635,metalness:.8,roughness:.3});this.flashlightMesh=new Tt(c,h),this.flashlightMesh.rotation.x=Math.PI/2,this.flashlightMesh.position.set(.18,.2,.18),this.torso.add(this.flashlightMesh),this.spotlight=new $c(16774102,4,18,Math.PI/6,.4,1.5),this.spotlight.position.set(.18,.2,.25);const u=new Me;u.position.set(.18,.2,5),this.torso.add(u),this.spotlight.target=u,this.torso.add(this.spotlight);const d=new $i(1.6,6,16,1,!0);d.translate(0,-3,0),d.rotateX(-Math.PI/2);const p=new wn({color:16773307,transparent:!0,opacity:.08,blending:os,side:cn,depthWrite:!1});this.lightCone=new Tt(d,p),this.lightCone.position.set(.18,.2,.25),this.torso.add(this.lightCone),this.nameSprite=this.createNameSprite(t.name),this.nameSprite.position.set(0,2.05,0),this.mesh.add(this.nameSprite),this.updateState(t)}createNameSprite(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(0, 0, 0, 0.65)",n.roundRect?n.roundRect(10,10,236,44,8):n.rect(10,10,236,44),n.fill(),n.strokeStyle="#38bdf8",n.lineWidth=2,n.roundRect?n.roundRect(10,10,236,44,8):n.strokeRect(10,10,236,44),n.stroke(),n.fillStyle="#ffffff",n.font='bold 22px "Noto Sans Sinhala", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(t,128,32);const s=new bi(e),r=new Hc({map:s,transparent:!0}),a=new xm(r);return a.scale.set(1.4,.35,1),a}updateState(t){this.targetPosition.set(t.position.x,t.position.y,t.position.z),this.targetRotationY=t.rotationY,this.targetPitch=t.pitch,this.spotlight.visible=t.flashlightOn,this.lightCone.visible=t.flashlightOn,t.isCrouching?(this.torso.position.y=.75,this.leftLeg.scale.y=.6,this.rightLeg.scale.y=.6,this.leftLeg.position.y=.25,this.rightLeg.position.y=.25,this.nameSprite.position.y=1.6):(this.torso.position.y=1.1,this.leftLeg.scale.y=1,this.rightLeg.scale.y=1,this.leftLeg.position.y=.4,this.rightLeg.position.y=.4,this.nameSprite.position.y=2.05)}update(t){if(this.animTime+=t,this.mesh.position.lerp(this.targetPosition,Math.min(1,t*15)),this.mesh.rotation.y=ei.lerp(this.mesh.rotation.y,this.targetRotationY,Math.min(1,t*15)),this.head.rotation.x=ei.lerp(this.head.rotation.x,this.targetPitch,Math.min(1,t*15)),this.mesh.position.distanceTo(this.targetPosition)>.05){const n=Math.sin(this.animTime*10);this.leftLeg.rotation.x=n*.5,this.rightLeg.rotation.x=-n*.5}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0}dispose(){this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose()})}}class Pm{constructor(){G(this,"ctx",null);G(this,"masterGain",null);G(this,"sfxGain",null);G(this,"ambienceGain",null);G(this,"isInitialized",!1);G(this,"rainSource",null);G(this,"rainFilter",null);G(this,"heartbeatInterval",null);G(this,"currentHeartRate",60);G(this,"radioPanner",null);G(this,"radioGain",null);G(this,"isRadioPlaying",!1);G(this,"monsterPanner",null);G(this,"monsterGroanTimeout",null)}init(){if(!this.isInitialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(1,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.ambienceGain=this.ctx.createGain(),this.ambienceGain.gain.setValueAtTime(.5,this.ctx.currentTime),this.ambienceGain.connect(this.masterGain),this.isInitialized=!0,this.startRainAmbience(),this.startHeartbeatLoop()}catch(t){console.warn("AudioContext initialization deferred until user gesture:",t)}}ensureContext(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMasterVolume(t){this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime)}updateListenerPosition(t,e,n,s,r,a){if(!this.ctx)return;const o=this.ctx.listener,c=this.ctx.currentTime;o.positionX?(o.positionX.setValueAtTime(t,c),o.positionY.setValueAtTime(e,c),o.positionZ.setValueAtTime(n,c),o.forwardX.setValueAtTime(s,c),o.forwardY.setValueAtTime(r,c),o.forwardZ.setValueAtTime(a,c)):(o.setPosition(t,e,n),o.setOrientation(s,r,a,0,1,0))}playFootstep(t,e,n){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const s=this.ctx.currentTime,r=t?.35:e?1.3:.8,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n?120:80,s),a.frequency.exponentialRampToValueAtTime(30,s+.08),o.gain.setValueAtTime(.4*r,s),o.gain.exponentialRampToValueAtTime(.001,s+.09),a.connect(o),o.connect(this.sfxGain),a.start(s),a.stop(s+.1);const c=this.ctx.sampleRate*.08,h=this.ctx.createBuffer(1,c,this.ctx.sampleRate),u=h.getChannelData(0);for(let x=0;x<c;x++)u[x]=(Math.random()*2-1)*Math.exp(-x/(c*.3));const d=this.ctx.createBufferSource();d.buffer=h;const p=this.ctx.createBiquadFilter();p.type=n?"bandpass":"lowpass",p.frequency.setValueAtTime(n?2200:700,s);const v=this.ctx.createGain();v.gain.setValueAtTime((n?.5:.25)*r,s),v.gain.exponentialRampToValueAtTime(.001,s+.08),d.connect(p),p.connect(v),v.connect(this.sfxGain),d.start(s)}playFlashlightToggle(t){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(t?900:600,e),n.frequency.setValueAtTime(t?1400:400,e+.02),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.05)}playItemPickup(){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const t=this.ctx.currentTime;[440,659.25,880].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+s*.06),a.gain.setValueAtTime(0,t),a.gain.setValueAtTime(.3,t+s*.06),a.gain.exponentialRampToValueAtTime(.001,t+s*.06+.25),r.connect(a),a.connect(this.sfxGain),r.start(t+s*.06),r.stop(t+s*.06+.26)})}playKeypadBeep(t){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"sine":"sawtooth",n.frequency.setValueAtTime(t?1046.5:180,e),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(.001,e+(t?.2:.35)),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.36)}playDoorCreak(){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(80,t),e.frequency.linearRampToValueAtTime(220,t+.4),e.frequency.linearRampToValueAtTime(110,t+.8),n.type="bandpass",n.frequency.setValueAtTime(400,t),n.Q.setValueAtTime(6,t),s.gain.setValueAtTime(.4,t),s.gain.exponentialRampToValueAtTime(.001,t+.85),e.connect(n),n.connect(s),s.connect(this.sfxGain),e.start(t),e.stop(t+.9)}playRadioBroadcast(t,e,n){if(!this.ctx||!this.sfxGain||(this.ensureContext(),this.isRadioPlaying))return;this.isRadioPlaying=!0,this.radioPanner=this.ctx.createPanner(),this.radioPanner.panningModel="HRTF",this.radioPanner.distanceModel="inverse",this.radioPanner.refDistance=2,this.radioPanner.maxDistance=25,this.radioPanner.rolloffFactor=1.2,this.radioPanner.positionX.setValueAtTime(t,this.ctx.currentTime),this.radioPanner.positionY.setValueAtTime(e,this.ctx.currentTime),this.radioPanner.positionZ.setValueAtTime(n,this.ctx.currentTime),this.radioGain=this.ctx.createGain(),this.radioGain.gain.setValueAtTime(.6,this.ctx.currentTime),this.radioGain.connect(this.radioPanner),this.radioPanner.connect(this.sfxGain);const s=[350,420,280,520,310,480,260];let r=0;for(let u=0;u<28;u++){const d=s[u%s.length],p=u%3===0?.22:.09,v=this.ctx.currentTime+r,x=this.ctx.createOscillator(),y=this.ctx.createGain();x.type="sawtooth",x.frequency.setValueAtTime(d,v);const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.setValueAtTime(800+u%5*150,v),_.Q.setValueAtTime(8,v),y.gain.setValueAtTime(.3,v),y.gain.exponentialRampToValueAtTime(.001,v+p),x.connect(_),_.connect(y),y.connect(this.radioGain),x.start(v),x.stop(v+p+.05),r+=p+.05}const a=this.ctx.sampleRate*2.5,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=o.getChannelData(0);for(let u=0;u<a;u++)c[u]=(Math.random()*2-1)*.15;const h=this.ctx.createBufferSource();h.buffer=o,h.connect(this.radioGain),h.start(this.ctx.currentTime),setTimeout(()=>{this.isRadioPlaying=!1},r*1e3+500)}playMonsterGroan(t,e,n){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const s=this.ctx.currentTime,r=this.ctx.createPanner();r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=3,r.maxDistance=40,r.positionX.setValueAtTime(t,s),r.positionY.setValueAtTime(e,s),r.positionZ.setValueAtTime(n,s);const a=this.ctx.createOscillator(),o=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(65,s),a.frequency.exponentialRampToValueAtTime(45,s+1.2),o.type="square",o.frequency.setValueAtTime(67.5,s),o.frequency.exponentialRampToValueAtTime(43,s+1.2),c.type="lowpass",c.frequency.setValueAtTime(320,s),c.Q.setValueAtTime(5,s),h.gain.setValueAtTime(0,s),h.gain.linearRampToValueAtTime(.7,s+.3),h.gain.exponentialRampToValueAtTime(.001,s+1.4),a.connect(c),o.connect(c),c.connect(h),h.connect(r),r.connect(this.sfxGain),a.start(s),o.start(s),a.stop(s+1.5),o.stop(s+1.5)}playMonsterChaseScream(t,e,n){if(!this.ctx||!this.sfxGain)return;this.ensureContext();const s=this.ctx.currentTime,r=this.ctx.createPanner();r.panningModel="HRTF",r.positionX.setValueAtTime(t,s),r.positionY.setValueAtTime(e,s),r.positionZ.setValueAtTime(n,s);const a=this.ctx.createOscillator(),o=this.ctx.createGain(),c=this.ctx.createWaveShaper(),h=256,u=new Float32Array(h);for(let d=0;d<h;++d){const p=d*2/h-1;u[d]=(Math.PI+10)*p/(Math.PI+10*Math.abs(p))}c.curve=u,a.type="sawtooth",a.frequency.setValueAtTime(600,s),a.frequency.exponentialRampToValueAtTime(2200,s+.3),a.frequency.exponentialRampToValueAtTime(380,s+1.8),o.gain.setValueAtTime(.01,s),o.gain.linearRampToValueAtTime(1,s+.15),o.gain.exponentialRampToValueAtTime(.001,s+1.9),a.connect(c),c.connect(o),o.connect(r),r.connect(this.sfxGain),a.start(s),a.stop(s+2),this.playHorrorStinger()}playHorrorStinger(){if(!this.ctx||!this.sfxGain)return;const t=this.ctx.currentTime;[130.81,138.59,174.61,233.08].forEach(n=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(n,t),r.gain.setValueAtTime(.35,t),r.gain.exponentialRampToValueAtTime(.001,t+1.5),s.connect(r),r.connect(this.sfxGain),s.start(t),s.stop(t+1.6)})}playThunder(){if(!this.ctx||!this.ambienceGain)return;this.ensureContext();const t=this.ctx.currentTime,e=this.ctx.sampleRate*3,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(450,t),a.frequency.exponentialRampToValueAtTime(90,t+2.8);const o=this.ctx.createGain();o.gain.setValueAtTime(.01,t),o.gain.linearRampToValueAtTime(.9,t+.1),o.gain.exponentialRampToValueAtTime(.001,t+2.9),r.connect(a),a.connect(o),o.connect(this.ambienceGain),r.start(t)}updateHeartbeatTension(t,e){e?this.currentHeartRate=145:this.currentHeartRate=Math.round(65+t*60)}startHeartbeatLoop(){const t=()=>{this.ctx&&this.currentHeartRate>75&&this.playHeartbeatThump();const e=60/this.currentHeartRate*1e3;this.heartbeatInterval=window.setTimeout(t,e)};t()}playHeartbeatThump(){if(!this.ctx||!this.sfxGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(75,t),e.frequency.exponentialRampToValueAtTime(40,t+.12),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.001,t+.13),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.14);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(65,t+.18),s.frequency.exponentialRampToValueAtTime(35,t+.32),r.gain.setValueAtTime(.4,t+.18),r.gain.exponentialRampToValueAtTime(.001,t+.33),s.connect(r),r.connect(this.sfxGain),s.start(t+.18),s.stop(t+.34)}startRainAmbience(){if(!this.ctx||!this.ambienceGain)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let s=0;for(let r=0;r<t;r++){const a=Math.random()*2-1;n[r]=(s+.02*a)/1.02,s=n[r],n[r]*=3.5}this.rainSource=this.ctx.createBufferSource(),this.rainSource.buffer=e,this.rainSource.loop=!0,this.rainFilter=this.ctx.createBiquadFilter(),this.rainFilter.type="lowpass",this.rainFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.rainSource.connect(this.rainFilter),this.rainFilter.connect(this.ambienceGain),this.rainSource.start()}dispose(){this.heartbeatInterval&&clearTimeout(this.heartbeatInterval),this.monsterGroanTimeout&&clearTimeout(this.monsterGroanTimeout),this.ctx&&this.ctx.close()}}class Im{constructor(){G(this,"state",{forward:0,strafe:0,yawDelta:0,pitchDelta:0,isSprinting:!1,isCrouching:!1,interactPressed:!1,flashlightToggled:!1});G(this,"isPointerLocked",!1);G(this,"sensitivity",1);G(this,"invertY",!1);G(this,"isMobile",!1);G(this,"keys",{});G(this,"joystickTouchId",null);G(this,"joystickCenter",{x:0,y:0});G(this,"joystickRadius",50);G(this,"joystickBaseEl",null);G(this,"joystickThumbEl",null);G(this,"lookTouchId",null);G(this,"lastLookPos",{x:0,y:0});G(this,"onInteract");G(this,"onFlashlightToggle");this.detectDevice(),this.setupKeyboardListeners(),this.setupMouseListeners(),this.setupTouchListeners()}detectDevice(){this.isMobile="ontouchstart"in window||navigator.maxTouchPoints>0;const t=document.getElementById("mobile-controls");t&&(this.isMobile?t.classList.remove("hidden"):t.classList.add("hidden"))}setTouchMode(t){const e=document.getElementById("mobile-controls");e&&(t==="auto"?this.detectDevice():t==="on"?(this.isMobile=!0,e.classList.remove("hidden")):(this.isMobile=!1,e.classList.add("hidden")))}setupKeyboardListeners(){window.addEventListener("keydown",t=>{var e,n;this.keys[t.code]=!0,t.code==="KeyE"&&(this.state.interactPressed=!0,(e=this.onInteract)==null||e.call(this)),t.code==="KeyF"&&(this.state.flashlightToggled=!0,(n=this.onFlashlightToggle)==null||n.call(this)),t.code==="KeyC"&&(this.state.isCrouching=!this.state.isCrouching)}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,t.code==="KeyE"&&(this.state.interactPressed=!1)})}setupMouseListeners(){const t=document.getElementById("canvas-container");document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===t}),window.addEventListener("mousemove",e=>{if(!this.isPointerLocked)return;const n=.002*this.sensitivity;this.state.yawDelta-=e.movementX*n;const s=e.movementY*n*(this.invertY?-1:1);this.state.pitchDelta-=s}),t==null||t.addEventListener("click",()=>{var e;!this.isMobile&&!this.isPointerLocked&&((e=t.requestPointerLock)==null||e.call(t))})}setupTouchListeners(){const t=document.getElementById("joystick-zone"),e=document.getElementById("look-zone");this.joystickBaseEl=document.getElementById("joystick-base"),this.joystickThumbEl=document.getElementById("joystick-thumb");const n=document.getElementById("touch-btn-interact"),s=document.getElementById("touch-btn-flashlight"),r=document.getElementById("touch-btn-sprint"),a=document.getElementById("touch-btn-crouch");n==null||n.addEventListener("touchstart",h=>{var u;h.preventDefault(),this.state.interactPressed=!0,(u=this.onInteract)==null||u.call(this)}),n==null||n.addEventListener("touchend",h=>{h.preventDefault(),this.state.interactPressed=!1}),s==null||s.addEventListener("touchstart",h=>{var u;h.preventDefault(),this.state.flashlightToggled=!0,(u=this.onFlashlightToggle)==null||u.call(this)}),r==null||r.addEventListener("touchstart",h=>{h.preventDefault(),this.state.isSprinting=!this.state.isSprinting,r.classList.toggle("touch-btn-primary",this.state.isSprinting)}),a==null||a.addEventListener("touchstart",h=>{h.preventDefault(),this.state.isCrouching=!this.state.isCrouching,a.classList.toggle("touch-btn-primary",this.state.isCrouching)}),t==null||t.addEventListener("touchstart",h=>{if(h.preventDefault(),this.joystickTouchId!==null)return;const u=h.changedTouches[0];this.joystickTouchId=u.identifier,this.joystickCenter={x:u.clientX,y:u.clientY},this.joystickBaseEl&&this.joystickThumbEl&&(this.joystickBaseEl.style.left=`${u.clientX}px`,this.joystickBaseEl.style.top=`${u.clientY}px`,this.joystickBaseEl.classList.remove("hidden"),this.joystickThumbEl.style.transform="translate(-50%, -50%)")},{passive:!1}),t==null||t.addEventListener("touchmove",h=>{h.preventDefault();for(let u=0;u<h.changedTouches.length;u++){const d=h.changedTouches[u];if(d.identifier===this.joystickTouchId){const p=d.clientX-this.joystickCenter.x,v=d.clientY-this.joystickCenter.y,x=Math.hypot(p,v),y=Math.min(x,this.joystickRadius),_=Math.atan2(v,p),f=Math.cos(_)*y,C=Math.sin(_)*y;this.joystickThumbEl&&(this.joystickThumbEl.style.transform=`translate(calc(-50% + ${f}px), calc(-50% + ${C}px))`),this.state.strafe=f/this.joystickRadius,this.state.forward=-C/this.joystickRadius}}},{passive:!1});const o=h=>{for(let u=0;u<h.changedTouches.length;u++)h.changedTouches[u].identifier===this.joystickTouchId&&(this.joystickTouchId=null,this.state.forward=0,this.state.strafe=0,this.joystickBaseEl&&this.joystickBaseEl.classList.add("hidden"))};t==null||t.addEventListener("touchend",o),t==null||t.addEventListener("touchcancel",o),e==null||e.addEventListener("touchstart",h=>{if(h.preventDefault(),this.lookTouchId!==null)return;const u=h.changedTouches[0];this.lookTouchId=u.identifier,this.lastLookPos={x:u.clientX,y:u.clientY}},{passive:!1}),e==null||e.addEventListener("touchmove",h=>{h.preventDefault();for(let u=0;u<h.changedTouches.length;u++){const d=h.changedTouches[u];if(d.identifier===this.lookTouchId){const p=d.clientX-this.lastLookPos.x,v=d.clientY-this.lastLookPos.y;this.lastLookPos={x:d.clientX,y:d.clientY};const x=.004*this.sensitivity;this.state.yawDelta-=p*x,this.state.pitchDelta-=v*x*(this.invertY?-1:1)}}},{passive:!1});const c=h=>{for(let u=0;u<h.changedTouches.length;u++)h.changedTouches[u].identifier===this.lookTouchId&&(this.lookTouchId=null)};e==null||e.addEventListener("touchend",c),e==null||e.addEventListener("touchcancel",c)}updateKeyboardInput(){if(this.joystickTouchId===null){let t=0,e=0;(this.keys.KeyW||this.keys.ArrowUp)&&(t+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t-=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),this.state.forward=t,this.state.strafe=e,this.state.isSprinting=!!(this.keys.ShiftLeft||this.keys.ShiftRight)}}consumeDeltas(){const t=this.state.yawDelta,e=this.state.pitchDelta;return this.state.yawDelta=0,this.state.pitchDelta=0,this.state.flashlightToggled=!1,{yaw:t,pitch:e}}}class Dm{constructor(t,e,n,s){G(this,"camera");G(this,"input");G(this,"scene");G(this,"sounds");G(this,"position",new N(0,1.7,14));G(this,"rotationY",0);G(this,"pitch",0);G(this,"walkSpeed",3.5);G(this,"sprintSpeed",6.2);G(this,"crouchSpeed",1.8);G(this,"stamina",100);G(this,"isExhausted",!1);G(this,"eyeHeight",1.7);G(this,"playerRadius",.4);G(this,"velocity",new N);G(this,"stepDistanceTravelled",0);G(this,"stepInterval",1.8);G(this,"raycaster",new Am);G(this,"hoveredInteractable",null);this.camera=t,this.input=e,this.scene=n,this.sounds=s,this.camera.position.copy(this.position),this.camera.rotation.order="YXZ"}update(t){const{yaw:e,pitch:n}=this.input.consumeDeltas();this.rotationY+=e,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch+n)),this.camera.rotation.y=this.rotationY,this.camera.rotation.x=this.pitch;const s=this.input.state.isCrouching?1.05:1.7;this.eyeHeight=ei.lerp(this.eyeHeight,s,t*12);let r=this.input.state.isSprinting&&!this.input.state.isCrouching&&!this.isExhausted;const a=Math.abs(this.input.state.forward)>.1||Math.abs(this.input.state.strafe)>.1;r&&a?(this.stamina=Math.max(0,this.stamina-t*22),this.stamina<=0&&(this.isExhausted=!0,r=!1)):(this.stamina=Math.min(100,this.stamina+t*14),this.stamina>25&&(this.isExhausted=!1));const o=this.input.state.isCrouching?this.crouchSpeed:r?this.sprintSpeed:this.walkSpeed,c=new N,h=this.input.state.forward,u=this.input.state.strafe;if(a){const x=new N(-Math.sin(this.rotationY),0,-Math.cos(this.rotationY)),y=new N(Math.cos(this.rotationY),0,-Math.sin(this.rotationY));c.addScaledVector(x,h),c.addScaledVector(y,u),c.normalize(),this.velocity.x=c.x*o,this.velocity.z=c.z*o}else this.velocity.x=0,this.velocity.z=0;const d=this.position.x+this.velocity.x*t,p=this.position.z+this.velocity.z*t;this.checkWallCollision(d,this.position.z)||(this.position.x=d),this.checkWallCollision(this.position.x,p)||(this.position.z=p);let v=0;if(this.position.z<-10&&Math.abs(this.position.x)<2?v=Math.max(0,Math.min(1,(-10-this.position.z)/2))*4:this.position.y>2&&this.position.z<11&&this.position.z>-11&&(v=4),this.position.y=ei.lerp(this.position.y,v+this.eyeHeight,t*15),this.camera.position.copy(this.position),a){const x=Math.hypot(this.velocity.x,this.velocity.z)*t;this.stepDistanceTravelled+=x;const y=r?1.2:this.input.state.isCrouching?2.4:1.7;if(this.stepDistanceTravelled>=y){this.stepDistanceTravelled=0;const _=this.position.y<1&&Math.abs(this.position.x)<4&&Math.abs(this.position.z-3)<3;this.sounds.playFootstep(this.input.state.isCrouching,r,_)}}this.updateInteractableHover()}checkWallCollision(t,e){const n=new Ce(new N(t-this.playerRadius,this.position.y-.5,e-this.playerRadius),new N(t+this.playerRadius,this.position.y+.5,e+this.playerRadius));for(const s of this.scene.walls)if(n.intersectsBox(s))return!0;return!1}updateInteractableHover(){this.raycaster.set(this.camera.position,this.camera.getWorldDirection(new N));let t=null,e=2.6;for(const n of this.scene.interactables){if(n.interacted&&n.type!=="GATE"&&n.type!=="DOCTOR_SAFE")continue;const s=this.camera.position.distanceTo(n.position);if(s<e){const r=n.position.clone().sub(this.camera.position).normalize(),a=this.camera.getWorldDirection(new N);r.dot(a)>.8&&(e=s,t=n)}}this.hoveredInteractable=t}}class Um{constructor(t){G(this,"callbacks");G(this,"screenMenu");G(this,"screenLobby");G(this,"screenGameover");G(this,"screenVictory");G(this,"hudRoot");G(this,"modalJoin");G(this,"modalSettings");G(this,"modalPuzzle");G(this,"batteryBar");G(this,"batteryLabel");G(this,"staminaBar");G(this,"staminaLabel");G(this,"crosshair");G(this,"interactionPrompt");G(this,"promptKeyLabel");G(this,"promptTextLabel");G(this,"objectiveText");G(this,"objectiveSubText");G(this,"climaxBanner");G(this,"climaxCountdown");G(this,"subtitleBox");G(this,"subtitleSpeaker");G(this,"subtitleContent");G(this,"vignetteOverlay");G(this,"heartbeatOverlay");G(this,"enteredCode",[]);this.callbacks=t,this.screenMenu=document.getElementById("screen-menu"),this.screenLobby=document.getElementById("screen-lobby"),this.screenGameover=document.getElementById("screen-gameover"),this.screenVictory=document.getElementById("screen-victory"),this.hudRoot=document.getElementById("hud-root"),this.modalJoin=document.getElementById("modal-join"),this.modalSettings=document.getElementById("modal-settings"),this.modalPuzzle=document.getElementById("puzzle-modal"),this.batteryBar=document.getElementById("battery-bar"),this.batteryLabel=document.getElementById("battery-label"),this.staminaBar=document.getElementById("stamina-bar"),this.staminaLabel=document.getElementById("stamina-label"),this.crosshair=document.getElementById("hud-crosshair"),this.interactionPrompt=document.getElementById("interaction-prompt"),this.promptKeyLabel=document.getElementById("prompt-key-label"),this.promptTextLabel=document.getElementById("prompt-text-label"),this.objectiveText=document.getElementById("objective-current-text"),this.objectiveSubText=document.getElementById("objective-sub-text"),this.climaxBanner=document.getElementById("climax-timer-banner"),this.climaxCountdown=document.getElementById("climax-countdown"),this.subtitleBox=document.getElementById("subtitle-box"),this.subtitleSpeaker=document.getElementById("subtitle-speaker"),this.subtitleContent=document.getElementById("subtitle-content"),this.vignetteOverlay=document.getElementById("vignette-overlay"),this.heartbeatOverlay=document.getElementById("heartbeat-overlay"),this.showScreen("menu"),this.modalJoin.classList.add("hidden"),this.modalSettings.classList.add("hidden"),this.modalPuzzle.classList.add("hidden"),this.climaxBanner.classList.add("hidden"),this.subtitleBox.classList.add("hidden"),this.initEventListeners()}initEventListeners(){var s,r,a,o,c,h,u,d,p,v,x,y,_,f,C,w;const t=document.getElementById("player-name-input");(s=document.getElementById("btn-solo"))==null||s.addEventListener("click",()=>{const b=t.value.trim()||"ක්‍රීඩකයා 1";this.callbacks.onStartSolo(b)}),(r=document.getElementById("btn-create-room"))==null||r.addEventListener("click",()=>{const b=t.value.trim()||"ක්‍රීඩකයා 1";this.callbacks.onCreateRoom(b)}),(a=document.getElementById("btn-join-dialog"))==null||a.addEventListener("click",()=>{this.modalJoin.classList.remove("hidden")}),(o=document.getElementById("btn-join-cancel"))==null||o.addEventListener("click",()=>{this.modalJoin.classList.add("hidden")}),(c=document.getElementById("btn-join-confirm"))==null||c.addEventListener("click",()=>{const O=document.getElementById("join-code-input").value.trim().toUpperCase(),P=t.value.trim()||"ක්‍රීඩකයා";if(O.length===5)this.callbacks.onJoinRoom(O,P);else{const L=document.getElementById("join-error-msg");L.textContent="අක්ෂර 5ක නිවැරදි කේතයක් ඇතුළත් කරන්න (Must be 5 characters)",L.classList.remove("hidden")}}),(h=document.getElementById("btn-toggle-ready"))==null||h.addEventListener("click",()=>{this.callbacks.onToggleReady()}),(u=document.getElementById("btn-start-game"))==null||u.addEventListener("click",()=>{this.callbacks.onStartGame()}),(d=document.getElementById("btn-leave-lobby"))==null||d.addEventListener("click",()=>{this.callbacks.onLeaveLobby(),this.showScreen("menu")}),(p=document.getElementById("btn-copy-code"))==null||p.addEventListener("click",()=>{var O,P;const b=((O=document.getElementById("lobby-room-code"))==null?void 0:O.textContent)||"";(P=navigator.clipboard)==null||P.writeText(b),alert(`කාමර කේතය පිටපත් කරන ලදී: ${b}`)}),(v=document.getElementById("btn-open-settings"))==null||v.addEventListener("click",()=>{this.modalSettings.classList.remove("hidden")}),(x=document.getElementById("touch-btn-pause"))==null||x.addEventListener("click",()=>{this.modalSettings.classList.remove("hidden")}),(y=document.getElementById("btn-close-settings"))==null||y.addEventListener("click",()=>{this.modalSettings.classList.add("hidden")}),document.querySelectorAll("#graphics-preset-selector .seg-btn").forEach(b=>{b.addEventListener("click",O=>{document.querySelectorAll("#graphics-preset-selector .seg-btn").forEach(L=>L.classList.remove("active")),O.target.classList.add("active");const P=O.target.getAttribute("data-quality");this.callbacks.onQualityChange(P)})}),document.querySelectorAll("#touch-mode-selector .seg-btn").forEach(b=>{b.addEventListener("click",O=>{document.querySelectorAll("#touch-mode-selector .seg-btn").forEach(L=>L.classList.remove("active")),O.target.classList.add("active");const P=O.target.getAttribute("data-touch");this.callbacks.onTouchModeChange(P)})});const e=document.getElementById("mouse-sens-slider");e==null||e.addEventListener("input",()=>{const b=parseFloat(e.value);document.getElementById("sens-value").textContent=b.toFixed(1),this.callbacks.onSensitivityChange(b)});const n=document.getElementById("master-volume-slider");n==null||n.addEventListener("input",()=>{const b=parseInt(n.value,10);document.getElementById("vol-value").textContent=`${b}%`,this.callbacks.onVolumeChange(b/100)}),document.querySelectorAll(".keypad-btn").forEach(b=>{b.addEventListener("click",O=>{const P=O.target.getAttribute("data-key");P==="C"?this.enteredCode=[]:P==="E"?this.callbacks.onSafeCodeSubmit(this.enteredCode.join("")):P&&this.enteredCode.length<3&&this.enteredCode.push(P),this.updateKeypadDisplay()})}),(_=document.getElementById("btn-close-puzzle"))==null||_.addEventListener("click",()=>{this.modalPuzzle.classList.add("hidden")}),(f=document.getElementById("btn-restart-defeat"))==null||f.addEventListener("click",()=>{this.callbacks.onRestart()}),(C=document.getElementById("btn-menu-defeat"))==null||C.addEventListener("click",()=>{this.showScreen("menu")}),(w=document.getElementById("btn-menu-victory"))==null||w.addEventListener("click",()=>{this.showScreen("menu")})}showScreen(t){var e,n,s,r;this.screenMenu.classList.add("hidden"),this.screenLobby.classList.add("hidden"),this.hudRoot.classList.add("hidden"),this.screenGameover.classList.add("hidden"),this.screenVictory.classList.add("hidden"),(e=document.getElementById("mobile-controls"))==null||e.classList.add("hidden"),t==="menu"&&this.screenMenu.classList.remove("hidden"),t==="lobby"&&this.screenLobby.classList.remove("hidden"),t==="game"&&(this.hudRoot.classList.remove("hidden"),"ontouchstart"in window||navigator.maxTouchPoints>0?(n=document.getElementById("mobile-controls"))==null||n.classList.remove("hidden"):(r=(s=document.getElementById("canvas-container"))==null?void 0:s.requestPointerLock)==null||r.call(s)),t==="defeat"&&this.screenGameover.classList.remove("hidden"),t==="victory"&&this.screenVictory.classList.remove("hidden")}updateServerStatus(t){const e=document.getElementById("server-status-badge"),n=e==null?void 0:e.querySelector(".status-dot"),s=document.getElementById("status-text");n&&s&&(t?(n.className="status-dot online",s.textContent="සේවාදායකය සූදානම් (Server Online)"):(n.className="status-dot pinging",s.textContent="සේවාදායකය සූදානම් වෙමින් පවතී... (Cold Start)"))}updateLobby(t,e){document.getElementById("lobby-room-code").textContent=t.roomCode;const n=Object.values(t.players);document.getElementById("lobby-capacity-tag").textContent=`${n.length} / 4 ක්‍රීඩකයින්`;const s=document.getElementById("lobby-player-list");s.innerHTML="";for(let a=0;a<4;a++){const o=n[a],c=document.createElement("div");o?(c.className=`player-card ${o.isReady?"ready":""}`,c.innerHTML=`
          <div class="player-avatar">${o.isHost?"👑":"👤"}</div>
          <div class="player-name">${o.name}</div>
          <div class="player-badge ${o.isHost?"host":o.isReady?"status-ready":""}">
            ${o.isHost?"ප්‍රධානියා (Host)":o.isReady?"සූදානම් (Ready)":"රැඳී සිටින්න"}
          </div>
        `):(c.className="player-card empty",c.innerHTML=`
          <div class="player-avatar">➕</div>
          <div class="player-name">හිස් ආසනයක්</div>
          <div class="player-badge">සම්බන්ධ වීමට විවෘතයි</div>
        `),s.appendChild(c)}const r=document.getElementById("btn-start-game");r&&(e&&n.length>=1?r.classList.remove("hidden"):r.classList.add("hidden"))}updateHUD(t,e){this.batteryBar.style.width=`${t}%`,this.batteryLabel.textContent=`${Math.round(t)}%`,this.staminaBar.style.width=`${e}%`,this.staminaLabel.textContent=`${Math.round(e)}%`}setInteractionPrompt(t,e,n){t?(this.crosshair.classList.add("hovered"),this.interactionPrompt.classList.remove("hidden"),this.promptKeyLabel.textContent=n?"[TAP]":"[E]",this.promptTextLabel.textContent=e):(this.crosshair.classList.remove("hovered"),this.interactionPrompt.classList.add("hidden"))}updateObjective(t,e){this.objectiveText.textContent=t,this.objectiveSubText.textContent=e}showClimaxTimer(t,e){if(t){this.climaxBanner.classList.remove("hidden");const n=Math.floor(e/60),s=Math.floor(e%60);this.climaxCountdown.textContent=`${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}else this.climaxBanner.classList.add("hidden")}showSubtitle(t,e,n=4500){this.subtitleSpeaker.textContent=t,this.subtitleContent.textContent=e,this.subtitleBox.classList.remove("hidden"),setTimeout(()=>{this.subtitleBox.classList.add("hidden")},n)}updateProximityTension(t,e){const n=Math.max(0,Math.min(1,(25-t)/25));n>.4||e>60?this.heartbeatOverlay.style.opacity=`${(n-.2)*1.2}`:this.heartbeatOverlay.style.opacity="0"}openPuzzleModal(){this.enteredCode=[],this.updateKeypadDisplay(),this.modalPuzzle.classList.remove("hidden")}closePuzzleModal(){this.modalPuzzle.classList.add("hidden")}updateKeypadDisplay(){const t=document.getElementById("keypad-digit-1"),e=document.getElementById("keypad-digit-2"),n=document.getElementById("keypad-digit-3");t.textContent=this.enteredCode[0]||"-",e.textContent=this.enteredCode[1]||"-",n.textContent=this.enteredCode[2]||"-"}}var ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Om(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),e}var Xc={};ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var ki={},rr={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerError=i.CloseCode=void 0,function(e){e[e.CONSENTED=4e3]="CONSENTED",e[e.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(i.CloseCode||(i.CloseCode={}));class t extends Error{constructor(n,s){super(s),this.name="ServerError",this.code=n}}i.ServerError=t})(rr);var hs={},Gi={};Object.defineProperty(Gi,"__esModule",{value:!0});Gi.decode=Gi.encode=void 0;function Xi(i,t){if(this._offset=t,i instanceof ArrayBuffer)this._buffer=i,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(i))this._buffer=i.buffer,this._view=new DataView(this._buffer,i.byteOffset,i.byteLength);else throw new Error("Invalid argument")}function Nm(i,t,e){for(var n="",s=0,r=t,a=t+e;r<a;r++){var o=i.getUint8(r);if(!(o&128)){n+=String.fromCharCode(o);continue}if((o&224)===192){n+=String.fromCharCode((o&31)<<6|i.getUint8(++r)&63);continue}if((o&240)===224){n+=String.fromCharCode((o&15)<<12|(i.getUint8(++r)&63)<<6|(i.getUint8(++r)&63)<<0);continue}if((o&248)===240){s=(o&7)<<18|(i.getUint8(++r)&63)<<12|(i.getUint8(++r)&63)<<6|(i.getUint8(++r)&63)<<0,s>=65536?(s-=65536,n+=String.fromCharCode((s>>>10)+55296,(s&1023)+56320)):n+=String.fromCharCode(s);continue}throw new Error("Invalid byte "+o.toString(16))}return n}Xi.prototype._array=function(i){for(var t=new Array(i),e=0;e<i;e++)t[e]=this._parse();return t};Xi.prototype._map=function(i){for(var t="",e={},n=0;n<i;n++)t=this._parse(),e[t]=this._parse();return e};Xi.prototype._str=function(i){var t=Nm(this._view,this._offset,i);return this._offset+=i,t};Xi.prototype._bin=function(i){var t=this._buffer.slice(this._offset,this._offset+i);return this._offset+=i,t};Xi.prototype._parse=function(){var i=this._view.getUint8(this._offset++),t,e=0,n=0,s=0,r=0;if(i<192)return i<128?i:i<144?this._map(i&15):i<160?this._array(i&15):this._str(i&31);if(i>223)return(255-i+1)*-1;switch(i){case 192:return null;case 194:return!1;case 195:return!0;case 196:return e=this._view.getUint8(this._offset),this._offset+=1,this._bin(e);case 197:return e=this._view.getUint16(this._offset),this._offset+=2,this._bin(e);case 198:return e=this._view.getUint32(this._offset),this._offset+=4,this._bin(e);case 199:if(e=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var a=this._view.getUint32(this._offset);return s=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((s*4294967296+r)*1e3+a/1e6)}return[n,this._bin(e)];case 200:return e=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(e)];case 201:return e=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(e)];case 202:return t=this._view.getFloat32(this._offset),this._offset+=4,t;case 203:return t=this._view.getFloat64(this._offset),this._offset+=8,t;case 204:return t=this._view.getUint8(this._offset),this._offset+=1,t;case 205:return t=this._view.getUint16(this._offset),this._offset+=2,t;case 206:return t=this._view.getUint32(this._offset),this._offset+=4,t;case 207:return s=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,s+r;case 208:return t=this._view.getInt8(this._offset),this._offset+=1,t;case 209:return t=this._view.getInt16(this._offset),this._offset+=2,t;case 210:return t=this._view.getInt32(this._offset),this._offset+=4,t;case 211:return s=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,s+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(t=this._view.getUint32(this._offset),this._offset+=4,new Date(t*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return s=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(s+r);if(n===-1){s=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var o=(s&3)*4294967296+r;return new Date(o*1e3+(s>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return e=this._view.getUint8(this._offset),this._offset+=1,this._str(e);case 218:return e=this._view.getUint16(this._offset),this._offset+=2,this._str(e);case 219:return e=this._view.getUint32(this._offset),this._offset+=4,this._str(e);case 220:return e=this._view.getUint16(this._offset),this._offset+=2,this._array(e);case 221:return e=this._view.getUint32(this._offset),this._offset+=4,this._array(e);case 222:return e=this._view.getUint16(this._offset),this._offset+=2,this._map(e);case 223:return e=this._view.getUint32(this._offset),this._offset+=4,this._map(e)}throw new Error("Could not parse")};function Fm(i,t=0){var e=new Xi(i,t),n=e._parse();if(e._offset!==i.byteLength)throw new Error(i.byteLength-e._offset+" trailing bytes");return n}Gi.decode=Fm;var Bm=4294967296-1,zm=17179869184-1;function km(i,t,e){for(var n=0,s=0,r=e.length;s<r;s++)n=e.charCodeAt(s),n<128?i.setUint8(t++,n):n<2048?(i.setUint8(t++,192|n>>6),i.setUint8(t++,128|n&63)):n<55296||n>=57344?(i.setUint8(t++,224|n>>12),i.setUint8(t++,128|n>>6&63),i.setUint8(t++,128|n&63)):(s++,n=65536+((n&1023)<<10|e.charCodeAt(s)&1023),i.setUint8(t++,240|n>>18),i.setUint8(t++,128|n>>12&63),i.setUint8(t++,128|n>>6&63),i.setUint8(t++,128|n&63))}function Gm(i){for(var t=0,e=0,n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Ci(i,t,e){var n=typeof e,s=0,r=0,a=0,o=0,c=0,h=0;if(n==="string"){if(c=Gm(e),c<32)i.push(c|160),h=1;else if(c<256)i.push(217,c),h=2;else if(c<65536)i.push(218,c>>8,c),h=3;else if(c<4294967296)i.push(219,c>>24,c>>16,c>>8,c),h=5;else throw new Error("String too long");return t.push({_str:e,_length:c,_offset:i.length}),h+c}if(n==="number")return Math.floor(e)!==e||!isFinite(e)?(i.push(203),t.push({_float:e,_length:8,_offset:i.length}),9):e>=0?e<128?(i.push(e),1):e<256?(i.push(204,e),2):e<65536?(i.push(205,e>>8,e),3):e<4294967296?(i.push(206,e>>24,e>>16,e>>8,e),5):(a=e/Math.pow(2,32)>>0,o=e>>>0,i.push(207,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9):e>=-32?(i.push(e),1):e>=-128?(i.push(208,e),2):e>=-32768?(i.push(209,e>>8,e),3):e>=-2147483648?(i.push(210,e>>24,e>>16,e>>8,e),5):(a=Math.floor(e/Math.pow(2,32)),o=e>>>0,i.push(211,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),9);if(n==="object"){if(e===null)return i.push(192),1;if(Array.isArray(e)){if(c=e.length,c<16)i.push(c|144),h=1;else if(c<65536)i.push(220,c>>8,c),h=3;else if(c<4294967296)i.push(221,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Array too large");for(s=0;s<c;s++)h+=Ci(i,t,e[s]);return h}if(e instanceof Date){var u=e.getTime(),d=Math.floor(u/1e3),p=(u-d*1e3)*1e6;return d>=0&&p>=0&&d<=zm?p===0&&d<=Bm?(i.push(214,255,d>>24,d>>16,d>>8,d),6):(a=d/4294967296,o=d&4294967295,i.push(215,255,p>>22,p>>14,p>>6,a,o>>24,o>>16,o>>8,o),10):(a=Math.floor(d/4294967296),o=d>>>0,i.push(199,12,255,p>>24,p>>16,p>>8,p,a>>24,a>>16,a>>8,a,o>>24,o>>16,o>>8,o),15)}if(e instanceof ArrayBuffer){if(c=e.byteLength,c<256)i.push(196,c),h=2;else if(c<65536)i.push(197,c>>8,c),h=3;else if(c<4294967296)i.push(198,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Buffer too large");return t.push({_bin:e,_length:c,_offset:i.length}),h+c}if(typeof e.toJSON=="function")return Ci(i,t,e.toJSON());var v=[],x="",y=Object.keys(e);for(s=0,r=y.length;s<r;s++)x=y[s],e[x]!==void 0&&typeof e[x]!="function"&&v.push(x);if(c=v.length,c<16)i.push(c|128),h=1;else if(c<65536)i.push(222,c>>8,c),h=3;else if(c<4294967296)i.push(223,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Object too large");for(s=0;s<c;s++)x=v[s],h+=Ci(i,t,x),h+=Ci(i,t,e[x]);return h}if(n==="boolean")return i.push(e?195:194),1;if(n==="undefined")return i.push(192),1;if(typeof e.toJSON=="function")return Ci(i,t,e.toJSON());throw new Error("Could not encode")}function Hm(i){var t=[],e=[],n=Ci(t,e,i),s=new ArrayBuffer(n),r=new DataView(s),a=0,o=0,c=-1;e.length>0&&(c=e[0]._offset);for(var h,u=0,d=0,p=0,v=t.length;p<v;p++)if(r.setUint8(o+p,t[p]),p+1===c){if(h=e[a],u=h._length,d=o+c,h._bin)for(var x=new Uint8Array(h._bin),y=0;y<u;y++)r.setUint8(d+y,x[y]);else h._str?km(r,d,h._str):h._float!==void 0&&r.setFloat64(d,h._float);a++,o+=u,e[a]&&(c=e[a]._offset)}return s}Gi.encode=Hm;var or={},ar={},Vm=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Wm=ve&&ve.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(ar,"__esModule",{value:!0});ar.WebSocketTransport=void 0;const $m=Wm(Vm),jr=globalThis.WebSocket||$m.default;class Xm{constructor(t){this.events=t}send(t){t instanceof ArrayBuffer?this.ws.send(t):Array.isArray(t)&&this.ws.send(new Uint8Array(t).buffer)}connect(t,e){try{this.ws=new jr(t,{headers:e,protocols:this.protocols})}catch{this.ws=new jr(t,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(t,e){this.ws.close(t,e)}get isOpen(){return this.ws.readyState===jr.OPEN}}ar.WebSocketTransport=Xm;Object.defineProperty(or,"__esModule",{value:!0});or.Connection=void 0;const qm=ar;class jm{constructor(){this.events={},this.transport=new qm.WebSocketTransport(this.events)}send(t){this.transport.send(t)}connect(t,e){this.transport.connect(t,e)}close(t,e){this.transport.close(t,e)}get isOpen(){return this.transport.isOpen}}or.Connection=jm;var Eo={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.utf8Length=i.utf8Read=i.ErrorCode=i.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(i.Protocol||(i.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(i.ErrorCode||(i.ErrorCode={}));function t(n,s){const r=n[s++];for(var a="",o=0,c=s,h=s+r;c<h;c++){var u=n[c];if(!(u&128)){a+=String.fromCharCode(u);continue}if((u&224)===192){a+=String.fromCharCode((u&31)<<6|n[++c]&63);continue}if((u&240)===224){a+=String.fromCharCode((u&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((u&248)===240){o=(u&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,o>=65536?(o-=65536,a+=String.fromCharCode((o>>>10)+55296,(o&1023)+56320)):a+=String.fromCharCode(o);continue}throw new Error("Invalid byte "+u.toString(16))}return a}i.utf8Read=t;function e(n=""){let s=0,r=0;for(let a=0,o=n.length;a<o;a++)s=n.charCodeAt(a),s<128?r+=1:s<2048?r+=2:s<55296||s>=57344?r+=3:(a++,r+=4);return r+1}i.utf8Length=e})(Eo);var si={};Object.defineProperty(si,"__esModule",{value:!0});si.getSerializer=si.registerSerializer=void 0;const qc={};function Ym(i,t){qc[i]=t}si.registerSerializer=Ym;function Km(i){const t=qc[i];if(!t)throw new Error("missing serializer: "+i);return t}si.getSerializer=Km;var us={};Object.defineProperty(us,"__esModule",{value:!0});us.createNanoEvents=void 0;const Jm=()=>({emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n](...t)},events:{},on(i,t){var e;return!((e=this.events[i])===null||e===void 0)&&e.push(t)||(this.events[i]=[t]),()=>{var n;this.events[i]=(n=this.events[i])===null||n===void 0?void 0:n.filter(s=>t!==s)}}});us.createNanoEvents=Jm;var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.createSignal=Hi.EventEmitter=void 0;class jc{constructor(){this.handlers=[]}register(t,e=!1){return this.handlers.push(t),this}invoke(...t){this.handlers.forEach(e=>e.apply(this,t))}invokeAsync(...t){return Promise.all(this.handlers.map(e=>e.apply(this,t)))}remove(t){const e=this.handlers.indexOf(t);this.handlers[e]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Hi.EventEmitter=jc;function Zm(){const i=new jc;function t(e){return i.register(e,this===null)}return t.once=e=>{const n=function(...s){e.apply(this,s),i.remove(n)};i.register(n)},t.remove=e=>i.remove(e),t.invoke=(...e)=>i.invoke(...e),t.invokeAsync=(...e)=>i.invokeAsync(...e),t.clear=()=>i.clear(),t}Hi.createSignal=Zm;var co={exports:{}};(function(i,t){(function(e,n){n(t)})(ve,function(e){var n=function(m,l){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,M){g.__proto__=M}||function(g,M){for(var B in M)Object.prototype.hasOwnProperty.call(M,B)&&(g[B]=M[B])},n(m,l)};function s(m,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");n(m,l);function g(){this.constructor=m}m.prototype=l===null?Object.create(l):(g.prototype=l.prototype,new g)}function r(m,l,g,M){var B=arguments.length,Z=B<3?l:M,Lt;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Z=Reflect.decorate(m,l,g,M);else for(var Et=m.length-1;Et>=0;Et--)(Lt=m[Et])&&(Z=(B<3?Lt(Z):B>3?Lt(l,g,Z):Lt(l,g))||Z);return B>3&&Z&&Object.defineProperty(l,g,Z),Z}function a(m,l,g){if(arguments.length===2)for(var M=0,B=l.length,Z;M<B;M++)(Z||!(M in l))&&(Z||(Z=Array.prototype.slice.call(l,0,M)),Z[M]=l[M]);return m.concat(Z||Array.prototype.slice.call(l))}typeof SuppressedError=="function"&&SuppressedError;var o=255,c=213;e.OPERATION=void 0,function(m){m[m.ADD=128]="ADD",m[m.REPLACE=0]="REPLACE",m[m.DELETE=64]="DELETE",m[m.DELETE_AND_ADD=192]="DELETE_AND_ADD",m[m.TOUCH=1]="TOUCH",m[m.CLEAR=10]="CLEAR"}(e.OPERATION||(e.OPERATION={}));var h=function(){function m(l,g,M){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=l,this.setParent(g,M)}return m.prototype.setParent=function(l,g,M){var B=this;if(this.indexes||(this.indexes=this.ref instanceof se?this.ref._definition.indexes:{}),this.parent=l,this.parentIndex=M,!!g)if(this.root=g,this.ref instanceof se){var Z=this.ref._definition;for(var Lt in Z.schema){var Et=this.ref[Lt];if(Et&&Et.$changes){var Qt=Z.indexes[Lt];Et.$changes.setParent(this.ref,g,Qt)}}}else typeof this.ref=="object"&&this.ref.forEach(function(S,I){if(S instanceof se){var k=S.$changes,U=B.ref.$changes.indexes[I];k.setParent(B.ref,B.root,U)}})},m.prototype.operation=function(l){this.changes.set(--this.currentCustomOperation,l)},m.prototype.change=function(l,g){g===void 0&&(g=e.OPERATION.ADD);var M=typeof l=="number"?l:this.indexes[l];this.assertValidIndex(M,l);var B=this.changes.get(M);(!B||B.op===e.OPERATION.DELETE||B.op===e.OPERATION.TOUCH)&&this.changes.set(M,{op:B&&B.op===e.OPERATION.DELETE?e.OPERATION.DELETE_AND_ADD:g,index:M}),this.allChanges.add(M),this.changed=!0,this.touchParents()},m.prototype.touch=function(l){var g=typeof l=="number"?l:this.indexes[l];this.assertValidIndex(g,l),this.changes.has(g)||this.changes.set(g,{op:e.OPERATION.TOUCH,index:g}),this.allChanges.add(g),this.touchParents()},m.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},m.prototype.getType=function(l){if(this.ref._definition){var g=this.ref._definition;return g.schema[g.fieldsByIndex[l]]}else{var g=this.parent._definition,M=g.schema[g.fieldsByIndex[this.parentIndex]];return Object.values(M)[0]}},m.prototype.getChildrenFilter=function(){var l=this.parent._definition.childFilters;return l&&l[this.parentIndex]},m.prototype.getValue=function(l){return this.ref.getByIndex(l)},m.prototype.delete=function(l){var g=typeof l=="number"?l:this.indexes[l];if(g===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(l," (").concat(g,")"));return}var M=this.getValue(g);this.changes.set(g,{op:e.OPERATION.DELETE,index:g}),this.allChanges.delete(g),delete this.caches[g],M&&M.$changes&&(M.$changes.parent=void 0),this.changed=!0,this.touchParents()},m.prototype.discard=function(l,g){var M=this;l===void 0&&(l=!1),g===void 0&&(g=!1),this.ref instanceof se||this.changes.forEach(function(B){if(B.op===e.OPERATION.DELETE){var Z=M.ref.getIndex(B.index);delete M.indexes[Z]}}),this.changes.clear(),this.changed=l,g&&this.allChanges.clear(),this.currentCustomOperation=0},m.prototype.discardAll=function(){var l=this;this.changes.forEach(function(g){var M=l.getValue(g.index);M&&M.$changes&&M.$changes.discardAll()}),this.discard()},m.prototype.cache=function(l,g){this.caches[l]=g},m.prototype.clone=function(){return new m(this.ref,this.parent,this.root)},m.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},m.prototype.assertValidIndex=function(l,g){if(l===void 0)throw new Error('ChangeTree: missing index for field "'.concat(g,'"'))},m}();function u(m,l,g,M){return m[l]||(m[l]=[]),m[l].push(g),M==null||M.forEach(function(B,Z){return g(B,Z)}),function(){return p(m[l],m[l].indexOf(g))}}function d(m){var l=this,g=typeof this.$changes.getType()!="string";this.$items.forEach(function(M,B){m.push({refId:l.$changes.refId,op:e.OPERATION.DELETE,field:B,value:void 0,previousValue:M}),g&&l.$changes.root.removeRef(M.$changes.refId)})}function p(m,l){if(l===-1||l>=m.length)return!1;for(var g=m.length-1,M=l;M<g;M++)m[M]=m[M+1];return m.length=g,!0}var v=function(m,l){var g=m.toString(),M=l.toString();return g<M?-1:g>M?1:0};function x(m){return m.$proxy=!0,m=new Proxy(m,{get:function(l,g){return typeof g!="symbol"&&!isNaN(g)?l.at(g):l[g]},set:function(l,g,M){if(typeof g!="symbol"&&!isNaN(g)){var B=Array.from(l.$items.keys()),Z=parseInt(B[g]||g);M==null?l.deleteAt(Z):l.setAt(Z,M)}else l[g]=M;return!0},deleteProperty:function(l,g){return typeof g=="number"?l.deleteAt(g):delete l[g],!0},has:function(l,g){return typeof g!="symbol"&&!isNaN(Number(g))?l.$items.has(Number(g)):Reflect.has(l,g)}}),m}var y=function(){function m(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,l)}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,l)},m.is=function(l){return Array.isArray(l)||l.array!==void 0},Object.defineProperty(m.prototype,"length",{get:function(){return this.$items.size},set:function(l){l===0?this.clear():this.splice(l,this.length-l)},enumerable:!1,configurable:!0}),m.prototype.push=function(){for(var l=this,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];var B;return g.forEach(function(Z){B=l.$refId++,l.setAt(B,Z)}),B},m.prototype.pop=function(){var l=Array.from(this.$indexes.values()).pop();if(l!==void 0){this.$changes.delete(l),this.$indexes.delete(l);var g=this.$items.get(l);return this.$items.delete(l),g}},m.prototype.at=function(l){if(l=Math.trunc(l)||0,l<0&&(l+=this.length),!(l<0||l>=this.length)){var g=Array.from(this.$items.keys())[l];return this.$items.get(g)}},m.prototype.setAt=function(l,g){var M,B;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(l)!==g){g.$changes!==void 0&&g.$changes.setParent(this,this.$changes.root,l);var Z=(B=(M=this.$changes.indexes[l])===null||M===void 0?void 0:M.op)!==null&&B!==void 0?B:e.OPERATION.ADD;this.$changes.indexes[l]=l,this.$indexes.set(l,l),this.$items.set(l,g),this.$changes.change(l,Z)}},m.prototype.deleteAt=function(l){var g=Array.from(this.$items.keys())[l];return g===void 0?!1:this.$deleteAt(g)},m.prototype.$deleteAt=function(l){return this.$changes.delete(l),this.$indexes.delete(l),this.$items.delete(l)},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&d.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.concat=function(){for(var l,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];return new(m.bind.apply(m,a([void 0],(l=Array.from(this.$items.values())).concat.apply(l,g),!1)))},m.prototype.join=function(l){return Array.from(this.$items.values()).join(l)},m.prototype.reverse=function(){var l=this,g=Array.from(this.$items.keys()),M=Array.from(this.$items.values()).reverse();return M.forEach(function(B,Z){l.setAt(g[Z],B)}),this},m.prototype.shift=function(){var l=Array.from(this.$items.keys()),g=l.shift();if(g!==void 0){var M=this.$items.get(g);return this.$deleteAt(g),M}},m.prototype.slice=function(l,g){var M=new m;return M.push.apply(M,Array.from(this.$items.values()).slice(l,g)),M},m.prototype.sort=function(l){var g=this;l===void 0&&(l=v);var M=Array.from(this.$items.keys()),B=Array.from(this.$items.values()).sort(l);return B.forEach(function(Z,Lt){g.setAt(M[Lt],Z)}),this},m.prototype.splice=function(l,g){g===void 0&&(g=this.length-l);for(var M=[],B=2;B<arguments.length;B++)M[B-2]=arguments[B];for(var Z=Array.from(this.$items.keys()),Lt=[],Et=l;Et<l+g;Et++)Lt.push(this.$items.get(Z[Et])),this.$deleteAt(Z[Et]);for(var Et=0;Et<M.length;Et++)this.setAt(l+Et,M[Et]);return Lt},m.prototype.unshift=function(){for(var l=this,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];var B=this.length,Z=g.length,Lt=Array.from(this.$items.values());return g.forEach(function(Et,Qt){l.setAt(Qt,Et)}),Lt.forEach(function(Et,Qt){l.setAt(Z+Qt,Et)}),B+Z},m.prototype.indexOf=function(l,g){return Array.from(this.$items.values()).indexOf(l,g)},m.prototype.lastIndexOf=function(l,g){return g===void 0&&(g=this.length-1),Array.from(this.$items.values()).lastIndexOf(l,g)},m.prototype.every=function(l,g){return Array.from(this.$items.values()).every(l,g)},m.prototype.some=function(l,g){return Array.from(this.$items.values()).some(l,g)},m.prototype.forEach=function(l,g){Array.from(this.$items.values()).forEach(l,g)},m.prototype.map=function(l,g){return Array.from(this.$items.values()).map(l,g)},m.prototype.filter=function(l,g){return Array.from(this.$items.values()).filter(l,g)},m.prototype.reduce=function(l,g){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},m.prototype.reduceRight=function(l,g){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},m.prototype.find=function(l,g){return Array.from(this.$items.values()).find(l,g)},m.prototype.findIndex=function(l,g){return Array.from(this.$items.values()).findIndex(l,g)},m.prototype.fill=function(l,g,M){throw new Error("ArraySchema#fill() not implemented")},m.prototype.copyWithin=function(l,g,M){throw new Error("ArraySchema#copyWithin() not implemented")},m.prototype.toString=function(){return this.$items.toString()},m.prototype.toLocaleString=function(){return this.$items.toLocaleString()},m.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},m.prototype.includes=function(l,g){return Array.from(this.$items.values()).includes(l,g)},m.prototype.flatMap=function(l,g){throw new Error("ArraySchema#flatMap() is not supported.")},m.prototype.flat=function(l){throw new Error("ArraySchema#flat() is not supported.")},m.prototype.findLast=function(){var l=Array.from(this.$items.values());return l.findLast.apply(l,arguments)},m.prototype.findLastIndex=function(){var l=Array.from(this.$items.values());return l.findLastIndex.apply(l,arguments)},m.prototype.with=function(l,g){var M=Array.from(this.$items.values());return M[l]=g,new(m.bind.apply(m,a([void 0],M,!1)))},m.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},m.prototype.toSorted=function(l){return Array.from(this.$items.values()).sort(l)},m.prototype.toSpliced=function(l,g){var M=Array.from(this.$items.values());return M.toSpliced.apply(M,arguments)},m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){return this.toArray().map(function(l){return typeof l.toJSON=="function"?l.toJSON():l})},m.prototype.clone=function(l){var g;return l?g=new(m.bind.apply(m,a([void 0],Array.from(this.$items.values()),!1))):g=new(m.bind.apply(m,a([void 0],this.map(function(M){return M.$changes?M.clone():M}),!1))),g},m}();function _(m){return m.$proxy=!0,m=new Proxy(m,{get:function(l,g){return typeof g!="symbol"&&typeof l[g]>"u"?l.get(g):l[g]},set:function(l,g,M){return typeof g!="symbol"&&g.indexOf("$")===-1&&g!=="onAdd"&&g!=="onRemove"&&g!=="onChange"?l.set(g,M):l[g]=M,!0},deleteProperty:function(l,g){return l.delete(g),!0}}),m}var f=function(){function m(l){var g=this;if(this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l)if(l instanceof Map||l instanceof m)l.forEach(function(B,Z){return g.set(Z,B)});else for(var M in l)this.set(M,l[M])}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),e.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,l)},m.is=function(l){return l.map!==void 0},m.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(m.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.set=function(l,g){if(g==null)throw new Error("MapSchema#set('".concat(l,"', ").concat(g,"): trying to set ").concat(g," value on '").concat(l,"'."));l=l.toString();var M=typeof this.$changes.indexes[l]<"u",B=M?this.$changes.indexes[l]:this.$refId++,Z=M?e.OPERATION.REPLACE:e.OPERATION.ADD,Lt=g.$changes!==void 0;if(Lt&&g.$changes.setParent(this,this.$changes.root,B),!M)this.$changes.indexes[l]=B,this.$indexes.set(B,l);else{if(!Lt&&this.$items.get(l)===g)return;Lt&&this.$items.get(l)!==g&&(Z=e.OPERATION.ADD)}return this.$items.set(l,g),this.$changes.change(l,Z),this},m.prototype.get=function(l){return this.$items.get(l)},m.prototype.delete=function(l){return this.$changes.delete(l.toString()),this.$items.delete(l)},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&d.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){return this.$items.has(l)},m.prototype.forEach=function(l){this.$items.forEach(l)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toJSON=function(){var l={};return this.forEach(function(g,M){l[M]=typeof g.toJSON=="function"?g.toJSON():g}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M,B){M.$changes?g.set(B,M.clone()):g.set(B,M)})),g},m}(),C={};function w(m,l){C[m]=l}function b(m){return C[m]}var O=function(){function m(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return m.create=function(l){var g=new m;return g.schema=Object.assign({},l&&l.schema||{}),g.indexes=Object.assign({},l&&l.indexes||{}),g.fieldsByIndex=Object.assign({},l&&l.fieldsByIndex||{}),g.descriptors=Object.assign({},l&&l.descriptors||{}),g.deprecated=Object.assign({},l&&l.deprecated||{}),g},m.prototype.addField=function(l,g){var M=this.getNextFieldIndex();this.fieldsByIndex[M]=l,this.indexes[l]=M,this.schema[l]=Array.isArray(g)?{array:g[0]}:g},m.prototype.hasField=function(l){return this.indexes[l]!==void 0},m.prototype.addFilter=function(l,g){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[l]]=g,this.indexesWithFilters.push(this.indexes[l]),!0},m.prototype.addChildrenFilter=function(l,g){var M=this.indexes[l],B=this.schema[l];if(b(Object.keys(B)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[M]=g,!0;console.warn("@filterChildren: field '".concat(l,"' can't have children. Ignoring filter."))},m.prototype.getChildrenFilter=function(l){return this.childFilters&&this.childFilters[this.indexes[l]]},m.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},m}();function P(m){return m._context&&m._context.useFilters}var L=function(){function m(){this.types={},this.schemas=new Map,this.useFilters=!1}return m.prototype.has=function(l){return this.schemas.has(l)},m.prototype.get=function(l){return this.types[l]},m.prototype.add=function(l,g){g===void 0&&(g=this.schemas.size),l._definition=O.create(l._definition),l._typeid=g,this.types[g]=l,this.schemas.set(l,g)},m.create=function(l){return l===void 0&&(l={}),function(g){return l.context||(l.context=new m),T(g,l)}},m}(),K=new L;function T(m,l){return l===void 0&&(l={}),function(g,M){var B=l.context||K,Z=g.constructor;if(Z._context=B,!m)throw new Error("".concat(Z.name,': @type() reference provided for "').concat(M,`" is undefined. Make sure you don't have any circular dependencies.`));B.has(Z)||B.add(Z);var Lt=Z._definition;if(Lt.addField(M,m),Lt.descriptors[M]){if(Lt.deprecated[M])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(M,"' definition on '").concat(Z.name,`'.
Check @type() annotation`))}catch(U){var Et=U.stack.split(`
`)[4].trim();throw new Error("".concat(U.message," ").concat(Et))}}var Qt=y.is(m),S=!Qt&&f.is(m);if(typeof m!="string"&&!se.is(m)){var I=Object.values(m)[0];typeof I!="string"&&!B.has(I)&&B.add(I)}if(l.manual){Lt.descriptors[M]={enumerable:!0,configurable:!0,writable:!0};return}var k="_".concat(M);Lt.descriptors[k]={enumerable:!1,configurable:!1,writable:!0},Lt.descriptors[M]={get:function(){return this[k]},set:function(U){U!==this[k]&&(U!=null?(Qt&&!(U instanceof y)&&(U=new(y.bind.apply(y,a([void 0],U,!1)))),S&&!(U instanceof f)&&(U=new f(U)),U.$proxy===void 0&&(S?U=_(U):Qt&&(U=x(U))),this.$changes.change(M),U.$changes&&U.$changes.setParent(this,this.$changes.root,this._definition.indexes[M])):this[k]!==void 0&&this.$changes.delete(M),this[k]=U)},enumerable:!0,configurable:!0}}}function R(m){return function(l,g){var M=l.constructor,B=M._definition;B.addFilter(g,m)&&(M._context.useFilters=!0)}}function q(m){return function(l,g){var M=l.constructor,B=M._definition;B.addChildrenFilter(g,m)&&(M._context.useFilters=!0)}}function j(m){return m===void 0&&(m=!0),function(l,g){var M=l.constructor,B=M._definition;B.deprecated[g]=!0,m&&(B.descriptors[g]={get:function(){throw new Error("".concat(g," is deprecated."))},set:function(Z){},enumerable:!1,configurable:!0})}}function ht(m,l,g){g===void 0&&(g={}),g.context||(g.context=m._context||g.context||K);for(var M in l)T(l[M],g)(m.prototype,M);return m}function F(m){for(var l=0,g=0,M=0,B=m.length;M<B;M++)l=m.charCodeAt(M),l<128?g+=1:l<2048?g+=2:l<55296||l>=57344?g+=3:(M++,g+=4);return g}function H(m,l,g){for(var M=0,B=0,Z=g.length;B<Z;B++)M=g.charCodeAt(B),M<128?m[l++]=M:M<2048?(m[l++]=192|M>>6,m[l++]=128|M&63):M<55296||M>=57344?(m[l++]=224|M>>12,m[l++]=128|M>>6&63,m[l++]=128|M&63):(B++,M=65536+((M&1023)<<10|g.charCodeAt(B)&1023),m[l++]=240|M>>18,m[l++]=128|M>>12&63,m[l++]=128|M>>6&63,m[l++]=128|M&63)}function Y(m,l){m.push(l&255)}function J(m,l){m.push(l&255)}function Q(m,l){m.push(l&255),m.push(l>>8&255)}function et(m,l){m.push(l&255),m.push(l>>8&255)}function nt(m,l){m.push(l&255),m.push(l>>8&255),m.push(l>>16&255),m.push(l>>24&255)}function at(m,l){var g=l>>24,M=l>>16,B=l>>8,Z=l;m.push(Z&255),m.push(B&255),m.push(M&255),m.push(g&255)}function ut(m,l){var g=Math.floor(l/Math.pow(2,32)),M=l>>>0;at(m,M),at(m,g)}function X(m,l){var g=l/Math.pow(2,32)>>0,M=l>>>0;at(m,M),at(m,g)}function it(m,l){Ht(m,l)}function xt(m,l){Nt(m,l)}var wt=new Int32Array(2),Pt=new Float32Array(wt.buffer),Gt=new Float64Array(wt.buffer);function Ht(m,l){Pt[0]=l,nt(m,wt[0])}function Nt(m,l){Gt[0]=l,nt(m,wt[0]),nt(m,wt[1])}function te(m,l){return J(m,l?1:0)}function W(m,l){l||(l="");var g=F(l),M=0;if(g<32)m.push(g|160),M=1;else if(g<256)m.push(217),J(m,g),M=2;else if(g<65536)m.push(218),et(m,g),M=3;else if(g<4294967296)m.push(219),at(m,g),M=5;else throw new Error("String too long");return H(m,m.length,l),M+g}function oe(m,l){if(isNaN(l))return oe(m,0);if(isFinite(l)){if(l!==(l|0))return m.push(203),Nt(m,l),9}else return oe(m,l>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return l>=0?l<128?(J(m,l),1):l<256?(m.push(204),J(m,l),2):l<65536?(m.push(205),et(m,l),3):l<4294967296?(m.push(206),at(m,l),5):(m.push(207),X(m,l),9):l>=-32?(m.push(224|l+32),1):l>=-128?(m.push(208),Y(m,l),2):l>=-32768?(m.push(209),Q(m,l),3):l>=-2147483648?(m.push(210),nt(m,l),5):(m.push(211),ut(m,l),9)}var Ut=Object.freeze({__proto__:null,boolean:te,float32:it,float64:xt,int16:Q,int32:nt,int64:ut,int8:Y,number:oe,string:W,uint16:et,uint32:at,uint64:X,uint8:J,utf8Write:H,writeFloat32:Ht,writeFloat64:Nt});function kt(m,l,g){for(var M="",B=0,Z=l,Lt=l+g;Z<Lt;Z++){var Et=m[Z];if(!(Et&128)){M+=String.fromCharCode(Et);continue}if((Et&224)===192){M+=String.fromCharCode((Et&31)<<6|m[++Z]&63);continue}if((Et&240)===224){M+=String.fromCharCode((Et&15)<<12|(m[++Z]&63)<<6|(m[++Z]&63)<<0);continue}if((Et&248)===240){B=(Et&7)<<18|(m[++Z]&63)<<12|(m[++Z]&63)<<6|(m[++Z]&63)<<0,B>=65536?(B-=65536,M+=String.fromCharCode((B>>>10)+55296,(B&1023)+56320)):M+=String.fromCharCode(B);continue}console.error("Invalid byte "+Et.toString(16))}return M}function At(m,l){return ce(m,l)<<24>>24}function ce(m,l){return m[l.offset++]}function Wt(m,l){return A(m,l)<<16>>16}function A(m,l){return m[l.offset++]|m[l.offset++]<<8}function E(m,l){return m[l.offset++]|m[l.offset++]<<8|m[l.offset++]<<16|m[l.offset++]<<24}function V(m,l){return E(m,l)>>>0}function ct(m,l){return Vt(m,l)}function ot(m,l){return st(m,l)}function lt(m,l){var g=V(m,l),M=E(m,l)*Math.pow(2,32);return M+g}function Rt(m,l){var g=V(m,l),M=V(m,l)*Math.pow(2,32);return M+g}var gt=new Int32Array(2),Mt=new Float32Array(gt.buffer),Ft=new Float64Array(gt.buffer);function Vt(m,l){return gt[0]=E(m,l),Mt[0]}function st(m,l){return gt[0]=E(m,l),gt[1]=E(m,l),Ft[0]}function ae(m,l){return ce(m,l)>0}function Yt(m,l){var g=m[l.offset++],M;g<192?M=g&31:g===217?M=ce(m,l):g===218?M=A(m,l):g===219&&(M=V(m,l));var B=kt(m,l.offset,M);return l.offset+=M,B}function zt(m,l){var g=m[l.offset];return g<192&&g>160||g===217||g===218||g===219}function bt(m,l){var g=m[l.offset++];if(g<128)return g;if(g===202)return Vt(m,l);if(g===203)return st(m,l);if(g===204)return ce(m,l);if(g===205)return A(m,l);if(g===206)return V(m,l);if(g===207)return Rt(m,l);if(g===208)return At(m,l);if(g===209)return Wt(m,l);if(g===210)return E(m,l);if(g===211)return lt(m,l);if(g>223)return(255-g+1)*-1}function St(m,l){var g=m[l.offset];return g<128||g>=202&&g<=211}function $t(m,l){return m[l.offset]<160}function ne(m,l){return m[l.offset-1]===o&&(m[l.offset]<128||m[l.offset]>=202&&m[l.offset]<=211)}var me=Object.freeze({__proto__:null,arrayCheck:$t,boolean:ae,float32:ct,float64:ot,int16:Wt,int32:E,int64:lt,int8:At,number:bt,numberCheck:St,readFloat32:Vt,readFloat64:st,string:Yt,stringCheck:zt,switchStructureCheck:ne,uint16:A,uint32:V,uint64:Rt,uint8:ce}),Xt=function(){function m(l){var g=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l&&l.forEach(function(M){return g.add(M)})}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,l)},m.is=function(l){return l.collection!==void 0},m.prototype.add=function(l){var g=this.$refId++,M=l.$changes!==void 0;return M&&l.$changes.setParent(this,this.$changes.root,g),this.$changes.indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,l),this.$changes.change(g),g},m.prototype.at=function(l){var g=Array.from(this.$items.keys())[l];return this.$items.get(g)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(l){for(var g=this.$items.entries(),M,B;(B=g.next())&&!B.done;)if(l===B.value[1]){M=B.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&d.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){return Array.from(this.$items.values()).some(function(g){return g===l})},m.prototype.forEach=function(l){var g=this;this.$items.forEach(function(M,B,Z){return l(M,B,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var l=[];return this.forEach(function(g,M){l.push(typeof g.toJSON=="function"?g.toJSON():g)}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M){M.$changes?g.add(M.clone()):g.add(M)})),g},m}(),dt=function(){function m(l){var g=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l&&l.forEach(function(M){return g.add(M)})}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks=[]),e.OPERATION.REPLACE,l)},m.is=function(l){return l.set!==void 0},m.prototype.add=function(l){var g,M;if(this.has(l))return!1;var B=this.$refId++;l.$changes!==void 0&&l.$changes.setParent(this,this.$changes.root,B);var Z=(M=(g=this.$changes.indexes[B])===null||g===void 0?void 0:g.op)!==null&&M!==void 0?M:e.OPERATION.ADD;return this.$changes.indexes[B]=B,this.$indexes.set(B,B),this.$items.set(B,l),this.$changes.change(B,Z),B},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(l){for(var g=this.$items.entries(),M,B;(B=g.next())&&!B.done;)if(l===B.value[1]){M=B.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&d.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:e.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){for(var g=this.$items.values(),M=!1,B;(B=g.next())&&!B.done;)if(l===B.value){M=!0;break}return M},m.prototype.forEach=function(l){var g=this;this.$items.forEach(function(M,B,Z){return l(M,B,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var l=[];return this.forEach(function(g,M){l.push(typeof g.toJSON=="function"?g.toJSON():g)}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M){M.$changes?g.add(M.clone()):g.add(M)})),g},m}(),D=function(){function m(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return m.prototype.addRefId=function(l){this.refIds.has(l)||(this.refIds.add(l),this.containerIndexes.set(l,new Set))},m.get=function(l){return l.$filterState===void 0&&(l.$filterState=new m),l.$filterState},m}(),vt=function(){function m(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return m.prototype.getNextUniqueId=function(){return this.nextUniqueId++},m.prototype.addRef=function(l,g,M){M===void 0&&(M=!0),this.refs.set(l,g),M&&(this.refCounts[l]=(this.refCounts[l]||0)+1)},m.prototype.removeRef=function(l){var g=this.refCounts[l];if(g===void 0){console.warn("trying to remove reference ".concat(l," that doesn't exist"));return}if(g===0){console.warn("trying to remove reference ".concat(l," with 0 refCount"));return}this.refCounts[l]=g-1,this.deletedRefs.add(l)},m.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},m.prototype.garbageCollectDeletedRefs=function(){var l=this;this.deletedRefs.forEach(function(g){if(!(l.refCounts[g]>0)){var M=l.refs.get(g);if(M instanceof se)for(var B in M._definition.schema)typeof M._definition.schema[B]!="string"&&M[B]&&M[B].$changes&&l.removeRef(M[B].$changes.refId);else{var Z=M.$changes.parent._definition,Lt=Z.schema[Z.fieldsByIndex[M.$changes.parentIndex]];typeof Object.values(Lt)[0]=="function"&&Array.from(M.values()).forEach(function(Et){return l.removeRef(Et.$changes.refId)})}l.refs.delete(g),delete l.refCounts[g]}}),this.deletedRefs.clear()},m}(),_t=function(m){s(l,m);function l(){return m!==null&&m.apply(this,arguments)||this}return l}(Error);function Bt(m,l,g,M){var B,Z=!1;switch(l){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":B="number",isNaN(m)&&console.log('trying to encode "NaN" in '.concat(g.constructor.name,"#").concat(M));break;case"string":B="string",Z=!0;break;case"boolean":return}if(typeof m!==B&&(!Z||Z&&m!==null)){var Lt="'".concat(JSON.stringify(m),"'").concat(m&&m.constructor&&" (".concat(m.constructor.name,")")||"");throw new _t("a '".concat(B,"' was expected, but ").concat(Lt," was provided in ").concat(g.constructor.name,"#").concat(M))}}function Ot(m,l,g,M){if(!(m instanceof l))throw new _t("a '".concat(l.name,"' was expected, but '").concat(m.constructor.name,"' was provided in ").concat(g.constructor.name,"#").concat(M))}function le(m,l,g,M,B){Bt(g,m,M,B);var Z=Ut[m];if(Z)Z(l,g);else throw new _t("a '".concat(m,"' was expected, but ").concat(g," was provided in ").concat(M.constructor.name,"#").concat(B))}function he(m,l,g){return me[m](l,g)}var se=function(){function m(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];Object.defineProperties(this,{$changes:{value:new h(this,void 0,new vt),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var M=this._definition.descriptors;M&&Object.defineProperties(this,M),l[0]&&this.assign(l[0])}return m.onError=function(l){console.error(l)},m.is=function(l){return l._definition&&l._definition.schema!==void 0},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.REPLACE,l)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),e.OPERATION.DELETE,l)},m.prototype.assign=function(l){return Object.assign(this,l),this},Object.defineProperty(m.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),m.prototype.setDirty=function(l,g){this.$changes.change(l,g)},m.prototype.listen=function(l,g,M){var B=this;return M===void 0&&(M=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[l]||(this.$callbacks[l]=[]),this.$callbacks[l].push(g),M&&this[l]!==void 0&&g(this[l],void 0),function(){return p(B.$callbacks[l],B.$callbacks[l].indexOf(g))}},m.prototype.decode=function(l,g,M){g===void 0&&(g={offset:0}),M===void 0&&(M=this);var B=[],Z=this.$changes.root,Lt=l.length,Et=0;for(Z.refs.set(Et,this);g.offset<Lt;){var Qt=l[g.offset++];if(Qt==o){Et=bt(l,g);var S=Z.refs.get(Et);if(!S)throw new Error('"refId" not found: '.concat(Et));M=S;continue}var I=M.$changes,k=M._definition!==void 0,U=k?Qt>>6<<6:Qt;if(U===e.OPERATION.CLEAR){M.clear(B);continue}var z=k?Qt%(U||255):bt(l,g),tt=k?M._definition.fieldsByIndex[z]:"",rt=I.getType(z),$=void 0,ft=void 0,Dt=void 0;if(k?ft=M["_".concat(tt)]:(ft=M.getByIndex(z),(U&e.OPERATION.ADD)===e.OPERATION.ADD?(Dt=M instanceof f?Yt(l,g):z,M.setIndex(z,Dt)):Dt=M.getIndex(z)),(U&e.OPERATION.DELETE)===e.OPERATION.DELETE&&(U!==e.OPERATION.DELETE_AND_ADD&&M.deleteByIndex(z),ft&&ft.$changes&&Z.removeRef(ft.$changes.refId),$=null),tt===void 0){console.warn("@colyseus/schema: definition mismatch");for(var yt={offset:g.offset};g.offset<Lt&&!(ne(l,g)&&(yt.offset=g.offset+1,Z.refs.has(bt(l,yt))));)g.offset++;continue}else if(U!==e.OPERATION.DELETE)if(m.is(rt)){var pt=bt(l,g);if($=Z.refs.get(pt),U!==e.OPERATION.REPLACE){var It=this.getSchemaType(l,g,rt);$||($=this.createTypeInstance(It),$.$changes.refId=pt,ft&&($.$callbacks=ft.$callbacks,ft.$changes.refId&&pt!==ft.$changes.refId&&Z.removeRef(ft.$changes.refId))),Z.addRef(pt,$,$!==ft)}}else if(typeof rt=="string")$=he(rt,l,g);else{var xe=b(Object.keys(rt)[0]),fe=bt(l,g),Se=Z.refs.has(fe)?ft||Z.refs.get(fe):new xe.constructor;if($=Se.clone(!0),$.$changes.refId=fe,ft&&($.$callbacks=ft.$callbacks,ft.$changes.refId&&fe!==ft.$changes.refId)){Z.removeRef(ft.$changes.refId);for(var qt=ft.entries(),Ct=void 0;(Ct=qt.next())&&!Ct.done;){var bn=Ct.value,ie=bn[0],nn=bn[1];B.push({refId:fe,op:e.OPERATION.DELETE,field:ie,value:void 0,previousValue:nn})}}Z.addRef(fe,$,Se!==ft)}if($!=null){if($.$changes&&$.$changes.setParent(I.ref,I.root,z),M instanceof m)M[tt]=$;else if(M instanceof f){var ie=Dt;M.$items.set(ie,$),M.$changes.allChanges.add(z)}else if(M instanceof y)M.setAt(z,$);else if(M instanceof Xt){var sn=M.add($);M.setIndex(z,sn)}else if(M instanceof dt){var sn=M.add($);sn!==!1&&M.setIndex(z,sn)}}ft!==$&&B.push({refId:Et,op:U,field:tt,dynamicIndex:Dt,value:$,previousValue:ft})}return this._triggerChanges(B),Z.garbageCollectDeletedRefs(),B},m.prototype.encode=function(l,g,M){l===void 0&&(l=!1),g===void 0&&(g=[]),M===void 0&&(M=!1);for(var B=this.$changes,Z=new WeakSet,Lt=[B],Et=1,Qt=0;Qt<Et;Qt++){var S=Lt[Qt],I=S.ref,k=I instanceof m;S.ensureRefId(),Z.add(S),S!==B&&(S.changed||l)&&(J(g,o),oe(g,S.refId));for(var U=l?Array.from(S.allChanges):Array.from(S.changes.values()),z=0,tt=U.length;z<tt;z++){var rt=l?{op:e.OPERATION.ADD,index:U[z]}:U[z],$=rt.index,ft=k?I._definition.fieldsByIndex&&I._definition.fieldsByIndex[$]:$,Dt=g.length;if(rt.op!==e.OPERATION.TOUCH)if(k)J(g,$|rt.op);else{if(J(g,rt.op),rt.op===e.OPERATION.CLEAR)continue;oe(g,$)}if(!k&&(rt.op&e.OPERATION.ADD)==e.OPERATION.ADD&&I instanceof f){var yt=S.ref.$indexes.get($);W(g,yt)}if(rt.op!==e.OPERATION.DELETE){var pt=S.getType($),It=S.getValue($);if(It&&It.$changes&&!Z.has(It.$changes)&&(Lt.push(It.$changes),It.$changes.ensureRefId(),Et++),rt.op!==e.OPERATION.TOUCH){if(m.is(pt))Ot(It,pt,I,ft),oe(g,It.$changes.refId),(rt.op&e.OPERATION.ADD)===e.OPERATION.ADD&&this.tryEncodeTypeId(g,pt,It.constructor);else if(typeof pt=="string")le(pt,g,It,I,ft);else{var xe=b(Object.keys(pt)[0]);Ot(I["_".concat(ft)],xe.constructor,I,ft),oe(g,It.$changes.refId)}M&&S.cache($,g.slice(Dt))}}}!l&&!M&&S.discard()}return g},m.prototype.encodeAll=function(l){return this.encode(!0,[],l)},m.prototype.applyFilters=function(l,g){var M,B;g===void 0&&(g=!1);for(var Z=this,Lt=new Set,Et=D.get(l),Qt=[this.$changes],S=1,I=[],k=function(z){var tt=Qt[z];if(Lt.has(tt.refId))return"continue";var rt=tt.ref,$=rt instanceof m;J(I,o),oe(I,tt.refId);var ft=Et.refIds.has(tt),Dt=g||!ft;Et.addRefId(tt);var yt=Et.containerIndexes.get(tt),pt=Dt?Array.from(tt.allChanges):Array.from(tt.changes.values());if(!g&&$&&rt._definition.indexesWithFilters){var It=rt._definition.indexesWithFilters;It.forEach(function(dn){!yt.has(dn)&&tt.allChanges.has(dn)&&(Dt?pt.push(dn):pt.push({op:e.OPERATION.ADD,index:dn}))})}for(var xe=0,fe=pt.length;xe<fe;xe++){var Se=Dt?{op:e.OPERATION.ADD,index:pt[xe]}:pt[xe];if(Se.op===e.OPERATION.CLEAR){J(I,Se.op);continue}var qt=Se.index;if(Se.op===e.OPERATION.DELETE){$?J(I,Se.op|qt):(J(I,Se.op),oe(I,qt));continue}var Ct=tt.getValue(qt),bn=tt.getType(qt);if($){var ie=rt._definition.filters&&rt._definition.filters[qt];if(ie&&!ie.call(rt,l,Ct,Z)){Ct&&Ct.$changes&&Lt.add(Ct.$changes.refId);continue}}else{var nn=tt.parent,ie=tt.getChildrenFilter();if(ie&&!ie.call(nn,l,rt.$indexes.get(qt),Ct,Z)){Ct&&Ct.$changes&&Lt.add(Ct.$changes.refId);continue}}if(Ct.$changes&&(Qt.push(Ct.$changes),S++),Se.op!==e.OPERATION.TOUCH)if(Se.op===e.OPERATION.ADD||$)I.push.apply(I,(M=tt.caches[qt])!==null&&M!==void 0?M:[]),yt.add(qt);else if(yt.has(qt))I.push.apply(I,(B=tt.caches[qt])!==null&&B!==void 0?B:[]);else{if(yt.add(qt),J(I,e.OPERATION.ADD),oe(I,qt),rt instanceof f){var sn=tt.ref.$indexes.get(qt);W(I,sn)}Ct.$changes?oe(I,Ct.$changes.refId):Ut[bn](I,Ct)}else if(Ct.$changes&&!$){if(J(I,e.OPERATION.ADD),oe(I,qt),rt instanceof f){var sn=tt.ref.$indexes.get(qt);W(I,sn)}oe(I,Ct.$changes.refId)}}},U=0;U<S;U++)k(U);return I},m.prototype.clone=function(){var l,g=new this.constructor,M=this._definition.schema;for(var B in M)typeof this[B]=="object"&&typeof((l=this[B])===null||l===void 0?void 0:l.clone)=="function"?g[B]=this[B].clone():g[B]=this[B];return g},m.prototype.toJSON=function(){var l=this._definition.schema,g=this._definition.deprecated,M={};for(var B in l)!g[B]&&this[B]!==null&&typeof this[B]<"u"&&(M[B]=typeof this[B].toJSON=="function"?this[B].toJSON():this["_".concat(B)]);return M},m.prototype.discardAllChanges=function(){this.$changes.discardAll()},m.prototype.getByIndex=function(l){return this[this._definition.fieldsByIndex[l]]},m.prototype.deleteByIndex=function(l){this[this._definition.fieldsByIndex[l]]=void 0},m.prototype.tryEncodeTypeId=function(l,g,M){g._typeid!==M._typeid&&(J(l,c),oe(l,M._typeid))},m.prototype.getSchemaType=function(l,g,M){var B;return l[g.offset]===c&&(g.offset++,B=this.constructor._context.get(bt(l,g))),B||M},m.prototype.createTypeInstance=function(l){var g=new l;return g.$changes.root=this.$changes.root,g},m.prototype._triggerChanges=function(l){for(var g,M,B,Z,Lt,Et,Qt,S,I,k=new Set,U=this.$changes.root.refs,z=function(rt){var $=l[rt],ft=$.refId,Dt=U.get(ft),yt=Dt.$callbacks;if(($.op&e.OPERATION.DELETE)===e.OPERATION.DELETE&&$.previousValue instanceof m&&((M=(g=$.previousValue.$callbacks)===null||g===void 0?void 0:g[e.OPERATION.DELETE])===null||M===void 0||M.forEach(function(pt){return pt()})),!yt)return"continue";if(Dt instanceof m){if(!k.has(ft))try{(B=yt==null?void 0:yt[e.OPERATION.REPLACE])===null||B===void 0||B.forEach(function(pt){return pt()})}catch(pt){m.onError(pt)}try{yt.hasOwnProperty($.field)&&((Z=yt[$.field])===null||Z===void 0||Z.forEach(function(pt){return pt($.value,$.previousValue)}))}catch(pt){m.onError(pt)}}else $.op===e.OPERATION.ADD&&$.previousValue===void 0?(Lt=yt[e.OPERATION.ADD])===null||Lt===void 0||Lt.forEach(function(pt){var It;return pt($.value,(It=$.dynamicIndex)!==null&&It!==void 0?It:$.field)}):$.op===e.OPERATION.DELETE?$.previousValue!==void 0&&((Et=yt[e.OPERATION.DELETE])===null||Et===void 0||Et.forEach(function(pt){var It;return pt($.previousValue,(It=$.dynamicIndex)!==null&&It!==void 0?It:$.field)})):$.op===e.OPERATION.DELETE_AND_ADD&&($.previousValue!==void 0&&((Qt=yt[e.OPERATION.DELETE])===null||Qt===void 0||Qt.forEach(function(pt){var It;return pt($.previousValue,(It=$.dynamicIndex)!==null&&It!==void 0?It:$.field)})),(S=yt[e.OPERATION.ADD])===null||S===void 0||S.forEach(function(pt){var It;return pt($.value,(It=$.dynamicIndex)!==null&&It!==void 0?It:$.field)})),$.value!==$.previousValue&&((I=yt[e.OPERATION.REPLACE])===null||I===void 0||I.forEach(function(pt){var It;return pt($.value,(It=$.dynamicIndex)!==null&&It!==void 0?It:$.field)}));k.add(ft)},tt=0;tt<l.length;tt++)z(tt)},m._definition=O.create(),m}();function Le(m){for(var l=[m.$changes],g=1,M={},B=M,Z=function(Et){var Qt=l[Et];Qt.changes.forEach(function(S){var I=Qt.ref,k=S.index,U=I._definition?I._definition.fieldsByIndex[k]:I.$indexes.get(k);B[U]=Qt.getValue(k)})},Lt=0;Lt<g;Lt++)Z(Lt);return M}var ee={context:new L},Te=function(m){s(l,m);function l(){return m!==null&&m.apply(this,arguments)||this}return r([T("string",ee)],l.prototype,"name",void 0),r([T("string",ee)],l.prototype,"type",void 0),r([T("number",ee)],l.prototype,"referencedType",void 0),l}(se),ke=function(m){s(l,m);function l(){var g=m!==null&&m.apply(this,arguments)||this;return g.fields=new y,g}return r([T("number",ee)],l.prototype,"id",void 0),r([T([Te],ee)],l.prototype,"fields",void 0),l}(se),fs=function(m){s(l,m);function l(){var g=m!==null&&m.apply(this,arguments)||this;return g.types=new y,g}return l.encode=function(g){var M,B=g.constructor,Z=new l;Z.rootType=B._typeid;var Lt=function(I,k){for(var U in k){var z=new Te;z.name=U;var tt=void 0;if(typeof k[U]=="string")tt=k[U];else{var rt=k[U],$=void 0;se.is(rt)?(tt="ref",$=k[U]):(tt=Object.keys(rt)[0],typeof rt[tt]=="string"?tt+=":"+rt[tt]:$=rt[tt]),z.referencedType=$?$._typeid:-1}z.type=tt,I.fields.push(z)}Z.types.push(I)},Et=(M=B._context)===null||M===void 0?void 0:M.types;for(var Qt in Et){var S=new ke;S.id=Number(Qt),Lt(S,Et[Qt]._definition.schema)}return Z.encodeAll()},l.decode=function(g,M){var B=new L,Z=new l;Z.decode(g,M);var Lt=Z.types.reduce(function(k,U){var z=function(rt){s($,rt);function $(){return rt!==null&&rt.apply(this,arguments)||this}return $}(se),tt=U.id;return k[tt]=z,B.add(z,tt),k},{});Z.types.forEach(function(k){var U=Lt[k.id];k.fields.forEach(function(z){var tt;if(z.referencedType!==void 0){var rt=z.type,$=Lt[z.referencedType];if(!$){var ft=z.type.split(":");rt=ft[0],$=ft[1]}rt==="ref"?T($,{context:B})(U.prototype,z.name):T((tt={},tt[rt]=$,tt),{context:B})(U.prototype,z.name)}else T(z.type,{context:B})(U.prototype,z.name)})});var Et=Lt[Z.rootType],Qt=new Et;for(var S in Et._definition.schema){var I=Et._definition.schema[S];typeof I!="string"&&(Qt[S]=typeof I=="function"?new I:new(b(Object.keys(I)[0])).constructor)}return Qt},r([T([ke],ee)],l.prototype,"types",void 0),r([T("number",ee)],l.prototype,"rootType",void 0),l}(se);w("map",{constructor:f}),w("array",{constructor:y}),w("set",{constructor:dt}),w("collection",{constructor:Xt}),e.ArraySchema=y,e.CollectionSchema=Xt,e.Context=L,e.MapSchema=f,e.Reflection=fs,e.ReflectionField=Te,e.ReflectionType=ke,e.Schema=se,e.SchemaDefinition=O,e.SetSchema=dt,e.decode=me,e.defineTypes=ht,e.deprecated=j,e.dumpChanges=Le,e.encode=Ut,e.filter=R,e.filterChildren=q,e.hasFilter=P,e.registerType=w,e.type=T})})(co,co.exports);var Yc=co.exports,Qm=ve&&ve.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var s=Object.getOwnPropertyDescriptor(t,e);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,s)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),tg=ve&&ve.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),eg=ve&&ve.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&Qm(t,i,e);return tg(t,i),t};Object.defineProperty(hs,"__esModule",{value:!0});hs.Room=void 0;const ec=eg(Gi),ng=or,Oe=Eo,nc=si,ig=us,Gs=Hi,je=Yc,ic=rr;class To{constructor(t,e){this.onStateChange=(0,Gs.createSignal)(),this.onError=(0,Gs.createSignal)(),this.onLeave=(0,Gs.createSignal)(),this.onJoin=(0,Gs.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,ig.createNanoEvents)(),this.roomId=null,this.name=t,e&&(this.serializer=new((0,nc.getSerializer)("schema")),this.rootSchema=e,this.serializer.state=new e),this.onError((n,s)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${s}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(t,e,n=this,s){const r=new ng.Connection;n.connection=r,r.events.onmessage=To.prototype.onMessageCallback.bind(n),r.events.onclose=function(a){var o;if(!n.hasJoined){(o=console.warn)===null||o===void 0||o.call(console,`Room connection was closed unexpectedly (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason);return}a.code===ic.CloseCode.DEVMODE_RESTART&&e?e():(n.onLeave.invoke(a.code,a.reason),n.destroy())},r.events.onerror=function(a){var o;(o=console.warn)===null||o===void 0||o.call(console,`Room, onError (${a.code}): ${a.reason}`),n.onError.invoke(a.code,a.reason)},r.connect(t,s)}leave(t=!0){return new Promise(e=>{this.onLeave(n=>e(n)),this.connection?t?this.connection.send([Oe.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(ic.CloseCode.CONSENTED)})}onMessage(t,e){return this.onMessageHandlers.on(this.getMessageHandlerKey(t),e)}send(t,e){const n=[Oe.Protocol.ROOM_DATA];typeof t=="string"?je.encode.string(n,t):je.encode.number(n,t);let s;if(e!==void 0){const r=ec.encode(e);s=new Uint8Array(n.length+r.byteLength),s.set(new Uint8Array(n),0),s.set(new Uint8Array(r),n.length)}else s=new Uint8Array(n);this.connection.send(s.buffer)}sendBytes(t,e){const n=[Oe.Protocol.ROOM_DATA_BYTES];typeof t=="string"?je.encode.string(n,t):je.encode.number(n,t);let s;s=new Uint8Array(n.length+(e.byteLength||e.length)),s.set(new Uint8Array(n),0),s.set(new Uint8Array(e),n.length),this.connection.send(s.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(t){const e=Array.from(new Uint8Array(t.data)),n=e[0];if(n===Oe.Protocol.JOIN_ROOM){let s=1;const r=(0,Oe.utf8Read)(e,s);if(s+=(0,Oe.utf8Length)(r),this.serializerId=(0,Oe.utf8Read)(e,s),s+=(0,Oe.utf8Length)(this.serializerId),!this.serializer){const a=(0,nc.getSerializer)(this.serializerId);this.serializer=new a}e.length>s&&this.serializer.handshake&&this.serializer.handshake(e,{offset:s}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([Oe.Protocol.JOIN_ROOM])}else if(n===Oe.Protocol.ERROR){const s={offset:1},r=je.decode.number(e,s),a=je.decode.string(e,s);this.onError.invoke(r,a)}else if(n===Oe.Protocol.LEAVE_ROOM)this.leave();else if(n===Oe.Protocol.ROOM_DATA_SCHEMA){const s={offset:1},a=this.serializer.getState().constructor._context.get(je.decode.number(e,s)),o=new a;o.decode(e,s),this.dispatchMessage(a,o)}else if(n===Oe.Protocol.ROOM_STATE)e.shift(),this.setState(e);else if(n===Oe.Protocol.ROOM_STATE_PATCH)e.shift(),this.patch(e);else if(n===Oe.Protocol.ROOM_DATA){const s={offset:1},r=je.decode.stringCheck(e,s)?je.decode.string(e,s):je.decode.number(e,s),a=e.length>s.offset?ec.decode(t.data,s.offset):void 0;this.dispatchMessage(r,a)}else if(n===Oe.Protocol.ROOM_DATA_BYTES){const s={offset:1},r=je.decode.stringCheck(e,s)?je.decode.string(e,s):je.decode.number(e,s);this.dispatchMessage(r,new Uint8Array(e.slice(s.offset)))}}setState(t){this.serializer.setState(t),this.onStateChange.invoke(this.serializer.getState())}patch(t){this.serializer.patch(t),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(t,e){var n;const s=this.getMessageHandlerKey(t);this.onMessageHandlers.events[s]?this.onMessageHandlers.emit(s,e):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",t,e):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${t}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(t){switch(typeof t){case"function":return`$${t._typeid}`;case"string":return t;case"number":return`i${t}`;default:throw new Error("invalid message type.")}}}hs.Room=To;var cr={};function sc(i,t){t.headers=i.headers||{},t.statusMessage=i.statusText,t.statusCode=i.status,t.data=i.response}function un(i,t,e){return new Promise(function(n,s){e=e||{};var r=new XMLHttpRequest,a,o,c,h=e.body,u=e.headers||{};e.timeout&&(r.timeout=e.timeout),r.ontimeout=r.onerror=function(d){d.timeout=d.type=="timeout",s(d)},r.open(i,t.href||t),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),sc(r,r);o=c.shift();)o=o.split(": "),r.headers[o.shift().toLowerCase()]=o.join(": ");if(o=r.headers["content-type"],o&&~o.indexOf("application/json"))try{r.data=JSON.parse(r.data,e.reviver)}catch(d){return sc(r,d),s(d)}(r.status>=400?s:n)(r)},typeof FormData<"u"&&h instanceof FormData||h&&typeof h=="object"&&(u["content-type"]="application/json",h=JSON.stringify(h)),r.withCredentials=!!e.withCredentials;for(a in u)r.setRequestHeader(a,u[a]);r.send(h)})}var sg=un.bind(un,"GET"),rg=un.bind(un,"POST"),og=un.bind(un,"PATCH"),ag=un.bind(un,"DELETE"),cg=un.bind(un,"PUT");const lg=Object.freeze(Object.defineProperty({__proto__:null,del:ag,get:sg,patch:og,post:rg,put:cg,send:un},Symbol.toStringTag,{value:"Module"})),hg=Om(lg);var ug=ve&&ve.__createBinding||(Object.create?function(i,t,e,n){n===void 0&&(n=e);var s=Object.getOwnPropertyDescriptor(t,e);(!s||("get"in s?!t.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(i,n,s)}:function(i,t,e,n){n===void 0&&(n=e),i[n]=t[e]}),dg=ve&&ve.__setModuleDefault||(Object.create?function(i,t){Object.defineProperty(i,"default",{enumerable:!0,value:t})}:function(i,t){i.default=t}),fg=ve&&ve.__importStar||function(i){if(i&&i.__esModule)return i;var t={};if(i!=null)for(var e in i)e!=="default"&&Object.prototype.hasOwnProperty.call(i,e)&&ug(t,i,e);return dg(t,i),t};Object.defineProperty(cr,"__esModule",{value:!0});cr.HTTP=void 0;const pg=rr,mg=fg(hg);class gg{constructor(t,e={}){this.client=t,this.headers=e}get(t,e={}){return this.request("get",t,e)}post(t,e={}){return this.request("post",t,e)}del(t,e={}){return this.request("del",t,e)}put(t,e={}){return this.request("put",t,e)}request(t,e,n={}){return mg[t](this.client.getHttpEndpoint(e),this.getOptions(n)).catch(s=>{var r;const a=s.statusCode,o=((r=s.data)===null||r===void 0?void 0:r.error)||s.statusMessage||s.message;throw!a&&!o?s:new pg.ServerError(a,o)})}getOptions(t){return t.headers=Object.assign({},this.headers,t.headers),this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(t.withCredentials=!0),t}}cr.HTTP=gg;var ds={},zn={};Object.defineProperty(zn,"__esModule",{value:!0});zn.getItem=zn.removeItem=zn.setItem=void 0;let es;function wo(){if(!es)try{es=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return es||(es={cache:{},setItem:function(i,t){this.cache[i]=t},getItem:function(i){this.cache[i]},removeItem:function(i){delete this.cache[i]}}),es}function _g(i,t){wo().setItem(i,t)}zn.setItem=_g;function vg(i){wo().removeItem(i)}zn.removeItem=vg;function xg(i,t){const e=wo().getItem(i);typeof Promise>"u"||!(e instanceof Promise)?t(e):e.then(n=>t(n))}zn.getItem=xg;var Xn=ve&&ve.__awaiter||function(i,t,e,n){function s(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(u){try{h(n.next(u))}catch(d){a(d)}}function c(u){try{h(n.throw(u))}catch(d){a(d)}}function h(u){u.done?r(u.value):s(u.value).then(o,c)}h((n=n.apply(i,t||[])).next())})},Ai=ve&&ve.__classPrivateFieldGet||function(i,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(i):n?n.value:t.get(i)},ns=ve&&ve.__classPrivateFieldSet||function(i,t,e,n,s){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!s:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?s.call(i,e):s?s.value=e:t.set(i,e),e},Vs,lo,Dn,Ws;Object.defineProperty(ds,"__esModule",{value:!0});ds.Auth=void 0;const Yr=zn,yg=us;class Mg{constructor(t){this.http=t,this.settings={path:"/auth",key:"colyseus-auth-token"},Vs.set(this,!1),lo.set(this,void 0),Dn.set(this,void 0),Ws.set(this,(0,yg.createNanoEvents)()),(0,Yr.getItem)(this.settings.key,e=>this.token=e)}set token(t){this.http.authToken=t}get token(){return this.http.authToken}onChange(t){const e=Ai(this,Ws,"f").on("change",t);return Ai(this,Vs,"f")||ns(this,lo,new Promise((n,s)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),ns(this,Vs,!0,"f"),e}getUserData(){return Xn(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(t,e,n){return Xn(this,void 0,void 0,function*(){const s=(yield this.http.post(`${this.settings.path}/register`,{body:{email:t,password:e,options:n}})).data;return this.emitChange(s),s})}signInWithEmailAndPassword(t,e){return Xn(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:t,password:e}})).data;return this.emitChange(n),n})}signInAnonymously(t){return Xn(this,void 0,void 0,function*(){const e=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:t}})).data;return this.emitChange(e),e})}sendPasswordResetEmail(t){return Xn(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:t}})).data})}signInWithProvider(t,e={}){return Xn(this,void 0,void 0,function*(){return new Promise((n,s)=>{const r=e.width||480,a=e.height||768,o=this.token?`?token=${this.token}`:"",c=`Login with ${t[0].toUpperCase()+t.substring(1)}`,h=this.http.client.getHttpEndpoint(`${e.prefix||`${this.settings.path}/provider`}/${t}${o}`),u=screen.width/2-r/2,d=screen.height/2-a/2;ns(this,Dn,window.open(h,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+a+", top="+d+", left="+u),"f");const p=x=>{x.data.user===void 0&&x.data.token===void 0||(clearInterval(v),Ai(this,Dn,"f").close(),ns(this,Dn,void 0,"f"),window.removeEventListener("message",p),x.data.error!==void 0?s(x.data.error):(n(x.data),this.emitChange(x.data)))},v=setInterval(()=>{(!Ai(this,Dn,"f")||Ai(this,Dn,"f").closed)&&(ns(this,Dn,void 0,"f"),s("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return Xn(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(t){t.token!==void 0&&(this.token=t.token,t.token===null?(0,Yr.removeItem)(this.settings.key):(0,Yr.setItem)(this.settings.key,t.token)),Ai(this,Ws,"f").emit("change",t)}}ds.Auth=Mg;Vs=new WeakMap,lo=new WeakMap,Dn=new WeakMap,Ws=new WeakMap;var lr={};Object.defineProperty(lr,"__esModule",{value:!0});lr.discordURLBuilder=void 0;function Sg(i){var t;const e=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",n=i.hostname.split("."),s=!i.hostname.includes("trycloudflare.com")&&!i.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return i.pathname.startsWith("/.proxy")?`${i.protocol}//${e}${s}${i.pathname}${i.search}`:`${i.protocol}//${e}/.proxy/colyseus${s}${i.pathname}${i.search}`}lr.discordURLBuilder=Sg;var fn=ve&&ve.__awaiter||function(i,t,e,n){function s(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(u){try{h(n.next(u))}catch(d){a(d)}}function c(u){try{h(n.throw(u))}catch(d){a(d)}}function h(u){u.done?r(u.value):s(u.value).then(o,c)}h((n=n.apply(i,t||[])).next())})},Kr;Object.defineProperty(ki,"__esModule",{value:!0});ki.Client=ki.MatchMakeError=void 0;const Eg=rr,Tg=hs,wg=cr,Ag=ds,bg=lr;class hr extends Error{constructor(t,e){super(t),this.code=e,Object.setPrototypeOf(this,hr.prototype)}}ki.MatchMakeError=hr;const rc=typeof window<"u"&&typeof((Kr=window==null?void 0:window.location)===null||Kr===void 0?void 0:Kr.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class Rg{constructor(t=rc,e){var n,s;if(typeof t=="string"){const r=t.startsWith("/")?new URL(t,rc):new URL(t),a=r.protocol==="https:"||r.protocol==="wss:",o=Number(r.port||(a?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:o,secure:a}}else t.port===void 0&&(t.port=t.secure?443:80),t.pathname===void 0&&(t.pathname=""),this.settings=t;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new wg.HTTP(this,(e==null?void 0:e.headers)||{}),this.auth=new Ag.Auth(this.http),this.urlBuilder=e==null?void 0:e.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((s=(n=window==null?void 0:window.location)===null||n===void 0?void 0:n.hostname)===null||s===void 0)&&s.includes("discordsays.com"))&&(this.urlBuilder=bg.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(t,e={},n){return fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",t,e,n)})}create(t,e={},n){return fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",t,e,n)})}join(t,e={},n){return fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",t,e,n)})}joinById(t,e={},n){return fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",t,e,n)})}reconnect(t,e){return fn(this,void 0,void 0,function*(){if(typeof t=="string"&&typeof e=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,s]=t.split(":");if(!n||!s)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:s},e)})}getAvailableRooms(t=""){return fn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${t}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(t,e,n){return fn(this,void 0,void 0,function*(){const s=this.createRoom(t.room.name,e);s.roomId=t.room.roomId,s.sessionId=t.sessionId;const r={sessionId:s.sessionId};t.reconnectionToken&&(r.reconnectionToken=t.reconnectionToken);const a=n||s;return s.connect(this.buildEndpoint(t.room,r),t.devMode&&(()=>fn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${s.roomId}'...`);let o=0,c=8;const h=()=>fn(this,void 0,void 0,function*(){o++;try{yield this.consumeSeatReservation(t,e,a),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${s.roomId}'`)}catch{o<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${o} out of ${c})`),setTimeout(h,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(h,2e3)})),a,this.http.headers),new Promise((o,c)=>{const h=(u,d)=>c(new Eg.ServerError(u,d));a.onError.once(h),a.onJoin.once(()=>{a.onError.remove(h),o(a)})})})}createMatchMakeRequest(t,e,n={},s,r){return fn(this,void 0,void 0,function*(){const a=(yield this.http.post(`matchmake/${t}/${e}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(a.error)throw new hr(a.error,a.code);return t==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(a,s,r)})}createRoom(t,e){return new Tg.Room(t,e)}buildEndpoint(t,e={}){const n=[];for(const a in e)e.hasOwnProperty(a)&&n.push(`${a}=${e[a]}`);let s=this.settings.secure?"wss://":"ws://";t.publicAddress?s+=`${t.publicAddress}`:s+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${s}/${t.processId}/${t.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(t=""){const e=t.startsWith("/")?t:`/${t}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${e}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}ki.Client=Rg;var ur={};Object.defineProperty(ur,"__esModule",{value:!0});ur.SchemaSerializer=void 0;const oc=Yc;class Cg{setState(t){return this.state.decode(t)}getState(){return this.state}patch(t){return this.state.decode(t)}teardown(){var t,e;(e=(t=this.state)===null||t===void 0?void 0:t.$changes)===null||e===void 0||e.root.clearRefs()}handshake(t,e){this.state?new oc.Reflection().decode(t,e):this.state=oc.Reflection.decode(t,e)}}ur.SchemaSerializer=Cg;var dr={};Object.defineProperty(dr,"__esModule",{value:!0});dr.NoneSerializer=void 0;class Lg{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}}dr.NoneSerializer=Lg;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SchemaSerializer=i.registerSerializer=i.Auth=i.Room=i.ErrorCode=i.Protocol=i.MatchMakeError=i.Client=void 0;var t=ki;Object.defineProperty(i,"Client",{enumerable:!0,get:function(){return t.Client}}),Object.defineProperty(i,"MatchMakeError",{enumerable:!0,get:function(){return t.MatchMakeError}});var e=Eo;Object.defineProperty(i,"Protocol",{enumerable:!0,get:function(){return e.Protocol}}),Object.defineProperty(i,"ErrorCode",{enumerable:!0,get:function(){return e.ErrorCode}});var n=hs;Object.defineProperty(i,"Room",{enumerable:!0,get:function(){return n.Room}});var s=ds;Object.defineProperty(i,"Auth",{enumerable:!0,get:function(){return s.Auth}});const r=ur;Object.defineProperty(i,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const a=dr,o=si;Object.defineProperty(i,"registerSerializer",{enumerable:!0,get:function(){return o.registerSerializer}}),(0,o.registerSerializer)("schema",r.SchemaSerializer),(0,o.registerSerializer)("none",a.NoneSerializer)})(Xc);class Pg{constructor(t){G(this,"client");G(this,"room",null);G(this,"isSoloMode",!1);G(this,"localPlayerId","player_local");G(this,"localPlayerName","ක්‍රීඩකයා 1");G(this,"currentRoomCode","SOLO1");G(this,"isHost",!0);G(this,"state",{roomCode:"SOLO1",phase:"LOBBY",players:{},enemy:{state:"PATROL",position:{x:0,y:0,z:-4},rotationY:0,targetPlayerId:null,alertLevel:0},objectives:[{id:1,titleSi:"සායනයේ ප්‍රධාන ගේට්ටුවේ යතුර සොයාගන්න",descriptionSi:"පිළිගැනීමේ කවුන්ටරය (Reception Desk) පරීක්ෂා කර යතුර ලබාගන්න.",completed:!1},{id:2,titleSi:"උත්පාදක යන්ත්‍රය (Generator) සඳහා ෆියුස් එකක් සොයා විදුලිය ලබාදෙන්න",descriptionSi:"විදුලි කාමරයේ ඇති ෆියුස් එක සොයාගෙන උත්පාදක යන්ත්‍රයට සවි කරන්න.",completed:!1},{id:3,titleSi:"වෛද්‍යවරයාගේ රහස් සේප්පුව (Safe Code 739) විවෘත කරන්න",descriptionSi:"බිත්තියේ සටහන් කර ඇති කේතය (739) භාවිතයෙන් සේප්පුව විවෘත කරන්න.",completed:!1},{id:4,titleSi:"හඬ පටය (Audio Recorder) අසන්න",descriptionSi:"වෛද්‍ය කාර්යාලයේ ඇති කැසට් රෙකෝඩරය ක්‍රියාත්මක කර විකාශනයට සවන් දෙන්න.",completed:!1},{id:5,titleSi:"වහලයේ රේඩියෝ කුළුණෙන් SOS සංඥාව යවා බේරෙන්න",descriptionSi:"පඩිපෙළ ඔස්සේ වහලයට නැගී හදිසි සංඥාව සම්ප්‍රේෂණය කර ගලවාගැනීමේ හෙලිකොප්ටරය එනතුරු රැඳී සිටින්න.",completed:!1}],currentObjectiveIndex:0,hasGateKey:!1,gateOpened:!1,hasClinicFuse:!1,powerRestored:!1,hasAudioRecorder:!1,symbolPuzzleSolved:!1,radioTransmitted:!1});G(this,"callbacks");G(this,"serverUrl");this.callbacks=t;const e=window.location.hostname,n=window.location.protocol==="https:"?"wss:":"ws:",s=window.__COLSEUS_URL__;s?this.serverUrl=s:e==="localhost"||e==="127.0.0.1"?this.serverUrl=`${n}//${e}:2567`:this.serverUrl="wss://the-last-signal-server.onrender.com",this.client=new Xc.Client(this.serverUrl)}async pingServer(){try{const t=this.serverUrl.replace(/^ws/,"http"),e=await fetch(`${t}/colyseus`,{method:"GET",signal:AbortSignal.timeout(3500)});return e.ok||e.status===404}catch{return!1}}startSoloGame(t){this.isSoloMode=!0,this.localPlayerName=t,this.localPlayerId="player_solo_"+Math.random().toString(36).substring(2,6),this.currentRoomCode="SOLO",this.isHost=!0,this.state.players={[this.localPlayerId]:{id:this.localPlayerId,name:t,position:{x:0,y:1.7,z:18},rotationY:Math.PI,pitch:0,isSprinting:!1,isCrouching:!1,flashlightOn:!0,flashlightBattery:100,isHost:!0,isReady:!0,connected:!0}},this.state.phase="PLAYING",this.callbacks.onPhaseChange("PLAYING"),this.callbacks.onStateUpdate(this.state)}async createMultiplayerRoom(t){this.isSoloMode=!1,this.localPlayerName=t;try{return this.room=await this.client.create("game_room",{playerName:t}),this.setupRoomListeners(),this.localPlayerId=this.room.sessionId,this.isHost=!0,this.room.id}catch(e){console.warn("Could not create Colyseus room, falling back to local host emulation:",e),this.isSoloMode=!0;const n="K9H2M";return this.currentRoomCode=n,this.localPlayerId="host_"+Math.random().toString(36).substring(2,6),this.isHost=!0,this.state.roomCode=n,this.state.players[this.localPlayerId]={id:this.localPlayerId,name:t,position:{x:0,y:1.7,z:18},rotationY:Math.PI,pitch:0,isSprinting:!1,isCrouching:!1,flashlightOn:!0,flashlightBattery:100,isHost:!0,isReady:!0,connected:!0},this.callbacks.onStateUpdate(this.state),n}}async joinMultiplayerRoom(t,e){this.isSoloMode=!1,this.localPlayerName=e;try{return this.room=await this.client.joinById(t,{playerName:e}),this.setupRoomListeners(),this.localPlayerId=this.room.sessionId,this.isHost=!1,!0}catch(n){return console.error("Failed to join room:",n),this.callbacks.onError("කාමරයට සම්බන්ධ විය නොහැක (Room not found or full)"),!1}}setupRoomListeners(){this.room&&(this.room.onStateChange(t=>{this.state=t,this.callbacks.onStateUpdate(t)}),this.room.onMessage("phase_changed",t=>{this.state.phase=t,this.callbacks.onPhaseChange(t)}),this.room.onMessage("objective_updated",t=>{this.state.currentObjectiveIndex=t,this.callbacks.onObjectiveChange(t)}),this.room.onLeave(t=>{console.log("Left room code:",t)}),this.room.onError((t,e)=>{console.error("Room error:",t,e),this.callbacks.onError(e||"සම්බන්ධතාව ඇණහිටුණි")}))}sendInput(t){if(this.isSoloMode){const e=this.state.players[this.localPlayerId];e&&(e.position.x=t.x,e.position.z=t.z,e.rotationY=t.rotationY,e.pitch=t.pitch,e.isSprinting=t.isSprinting,e.isCrouching=t.isCrouching,e.flashlightOn=t.flashlightOn);return}this.room&&this.room.send("player_input",t)}sendInteract(t){if(this.isSoloMode){this.handleSoloInteraction(t);return}this.room&&this.room.send("player_interact",t)}setReady(t){if(this.isSoloMode){this.state.players[this.localPlayerId]&&(this.state.players[this.localPlayerId].isReady=t,this.callbacks.onStateUpdate(this.state));return}this.room&&this.room.send("set_ready",{isReady:t})}startGame(){if(this.isSoloMode){this.state.phase="PLAYING",this.callbacks.onPhaseChange("PLAYING"),this.callbacks.onStateUpdate(this.state);return}this.room&&this.isHost&&this.room.send("start_game")}handleSoloInteraction(t){switch(t.action){case"PICKUP_KEY":this.state.hasGateKey=!0,this.state.gateOpened=!0,this.state.objectives[0].completed=!0,this.state.currentObjectiveIndex=1,this.callbacks.onObjectiveChange(1);break;case"PICKUP_FUSE":this.state.hasClinicFuse=!0;break;case"ACTIVATE_GENERATOR":this.state.hasClinicFuse&&(this.state.powerRestored=!0,this.state.objectives[1].completed=!0,this.state.currentObjectiveIndex=2,this.callbacks.onObjectiveChange(2));break;case"SOLVE_PUZZLE":t.puzzleCode==="739"&&(this.state.symbolPuzzleSolved=!0,this.state.objectives[2].completed=!0,this.state.currentObjectiveIndex=3,this.callbacks.onObjectiveChange(3));break;case"PICKUP_RECORDER":this.state.hasAudioRecorder=!0,this.state.objectives[3].completed=!0,this.state.currentObjectiveIndex=4,this.callbacks.onObjectiveChange(4);break;case"TRANSMIT_RADIO":this.state.radioTransmitted=!0,this.state.objectives[4].completed=!0,this.state.phase="CLIMAX",this.callbacks.onPhaseChange("CLIMAX");break}this.callbacks.onStateUpdate(this.state)}}class Ig{constructor(t,e,n,s,r,a){G(this,"scene");G(this,"sounds");G(this,"ui");G(this,"network");G(this,"creature");G(this,"player");G(this,"isClimaxActive",!1);G(this,"climaxTimer",90);G(this,"isGameOver",!1);this.scene=t,this.sounds=e,this.ui=n,this.network=s,this.creature=r,this.player=a}handleInteraction(t){if(!this.isGameOver)switch(t.type){case"GATE_KEY":t.interacted=!0,t.mesh.visible=!1,this.sounds.playItemPickup(),this.ui.showSubtitle("පණිවිඩය","ඔබ ප්‍රධාන ගේට්ටුවේ යතුර ලබා ගත්තා! ගේට්ටුව විවෘත කරන්න."),this.network.sendInteract({targetId:t.id,action:"PICKUP_KEY"});break;case"GATE":this.network.state.hasGateKey?this.scene.gateDoor&&(this.scene.gateDoor.position.x=-3.5,this.scene.gateDoor.rotation.y=Math.PI/2,this.sounds.playDoorCreak(),this.ui.showSubtitle("පණිවිඩය","ප්‍රධාන ගේට්ටුව විවෘත විය. සායනය ඇතුළට ගොස් විදුලිය ලබා දෙන්න."),this.scene.walls=this.scene.walls.filter(e=>!e.intersectsBox(new Ce().setFromObject(this.scene.gateDoor)))):this.ui.showSubtitle("පද්ධතිය","ගේට්ටුව අගුළු දමා ඇත. පිළිගැනීමේ කවුන්ටරයෙන් යතුර සොයාගන්න.");break;case"CLINIC_FUSE":t.interacted=!0,t.mesh.visible=!1,this.sounds.playItemPickup(),this.ui.showSubtitle("පණිවිඩය","ඔබ කාර්මික විදුලි ෆියුස් එකක් සොයා ගත්තා! උත්පාදක යන්ත්‍රයට සවි කරන්න."),this.network.sendInteract({targetId:t.id,action:"PICKUP_FUSE"});break;case"GENERATOR":this.network.state.hasClinicFuse?this.network.state.powerRestored||(this.sounds.playItemPickup(),this.scene.generatorLight&&this.scene.generatorLight.color.setHex(1096065),this.ui.showSubtitle("පද්ධතිය","විදුලිය සායනයට නැවත ලබා දුනි! දැන් වෛද්‍යවරයාගේ සේප්පුව පරීක්ෂා කරන්න."),this.network.sendInteract({targetId:t.id,action:"ACTIVATE_GENERATOR"})):this.ui.showSubtitle("පද්ධතිය","උත්පාදක යන්ත්‍රය ක්‍රියාත්මක කිරීමට ෆියුස් එකක් (Fuse) අවශ්‍යයි.");break;case"DOCTOR_SAFE":this.ui.openPuzzleModal();break;case"AUDIO_RECORDER":this.sounds.playRadioBroadcast(t.position.x,t.position.y,t.position.z),this.ui.showSubtitle("ගුවන්විදුලි විකාශනය (Dr. Senanayake)","...අවධානය යොමු කරන්න... කිසිවෙකුත් එළියට නොයන්න... අඳුරේ සිටින ජීවියා ආලෝකයට සහ ශබ්දයට සංවේදීයි... වහලයේ ඇති SOS ඇන්ටෙනාව ක්‍රියාත්මක කරන්න..."),this.network.sendInteract({targetId:t.id,action:"PICKUP_RECORDER"});break;case"ROOFTOP_RADIO":this.isClimaxActive||(this.isClimaxActive=!0,this.climaxTimer=90,this.sounds.playHorrorStinger(),this.sounds.playRadioBroadcast(t.position.x,t.position.y,t.position.z),this.ui.showSubtitle("හදිසි අනතුරු ඇඟවීම (SOS Beacon Active)","හදිසි SOS සංඥාව විකාශනය විය! ගලවාගැනීමේ හෙලිකොප්ටරය තත්පර 90කින් පැමිණේ. දිවි ගලවා ගන්න!"),this.network.sendInteract({targetId:t.id,action:"TRANSMIT_RADIO"}),this.creature.mesh.position.set(0,4,-8),this.creature.setState("CHASE"),this.sounds.playMonsterChaseScream(0,4,-8));break}}handleSafeCode(t){t==="739"?(this.sounds.playKeypadBeep(!0),this.ui.closePuzzleModal(),this.scene.safeDoor&&(this.scene.safeDoor.rotation.y=Math.PI/2),this.ui.showSubtitle("පද්ධතිය","කේතය නිවැරදියි! සේප්පුව විවෘත විය. හඬ පටය (Audio Recorder) අසන්න."),this.network.sendInteract({targetId:"doctor_safe",action:"SOLVE_PUZZLE",puzzleCode:"739"})):(this.sounds.playKeypadBeep(!1),this.ui.showSubtitle("පද්ධතිය","කේතය වැරදියි! බිත්තියේ සටහන නැවත පරීක්ෂා කරන්න (Code 739)."))}update(t){if(this.isGameOver)return;const e=this.network.state.objectives[this.network.state.currentObjectiveIndex];if(e&&this.ui.updateObjective(e.titleSi,e.descriptionSi),this.isClimaxActive&&(this.climaxTimer-=t,this.ui.showClimaxTimer(!0,Math.max(0,this.climaxTimer)),this.climaxTimer<=0)){this.isGameOver=!0,this.ui.showClimaxTimer(!1,0),this.ui.showScreen("victory");const s=document.getElementById("victory-stats");s.innerHTML=`
          <div>දිවි ගැලවීම: සාර්ථකයි</div>
          <div>සාමාජිකයින්: 1 - 4</div>
          <div>පරිච්ඡේදය: 1 (අඳුරු සායනය) සම්පූර්ණයි</div>
        `}const n=this.player.position.distanceTo(this.creature.mesh.position);this.ui.updateProximityTension(n,this.network.state.enemy.alertLevel),this.sounds.updateHeartbeatTension(Math.max(0,(25-n)/25),this.network.state.enemy.state==="CHASE"),n<1.6&&!this.isGameOver&&(this.isGameOver=!0,this.creature.setState("ATTACK"),this.sounds.playMonsterChaseScream(this.creature.mesh.position.x,this.creature.mesh.position.y,this.creature.mesh.position.z),setTimeout(()=>{this.ui.showScreen("defeat");const s=document.getElementById("defeat-stats");s.innerHTML=`
          <div>ජීවියාගේ දුර: 0.0 m</div>
          <div>මෙහෙයුම: ${e?e.titleSi:"අසාර්ථකයි"}</div>
        `},1200))}}class Dg{constructor(){G(this,"renderer");G(this,"scene");G(this,"camera");G(this,"clock",new wm);G(this,"clinicScene");G(this,"creature");G(this,"sounds");G(this,"input");G(this,"player");G(this,"ui");G(this,"network");G(this,"director");G(this,"remotePlayers",new Map);G(this,"waypoints",[new N(0,0,5),new N(0,0,-6),new N(6,0,-6),new N(-6,0,-6)]);G(this,"currentWaypointIdx",0);G(this,"monsterSpeed",2.4);G(this,"animate",()=>{requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);this.input.updateKeyboardInput(),this.player.update(t);const e=this.camera.getWorldDirection(new N);this.sounds.updateListenerPosition(this.camera.position.x,this.camera.position.y,this.camera.position.z,e.x,e.y,e.z),this.clinicScene.update(t,this.player.position),this.updateMonsterSoloAI(t);for(const s of this.remotePlayers.values())s.update(t);this.director.update(t),this.ui.updateHUD(this.clinicScene.atmosphere.batteryLevel,this.player.stamina);const n=this.player.hoveredInteractable;this.ui.setInteractionPrompt(n!==null,n?n.promptSi:"",this.input.isMobile),this.network.sendInput({x:this.player.position.x,z:this.player.position.z,rotationY:this.player.rotationY,pitch:this.player.pitch,isSprinting:this.input.state.isSprinting,isCrouching:this.input.state.isCrouching,flashlightOn:this.clinicScene.atmosphere.flashlightOn}),this.renderer.render(this.scene,this.camera)});this.initThree(),this.initSystems(),this.initNetwork(),this.setupResize(),this.animate(),this.checkServer()}initThree(){const t=document.getElementById("canvas-container");this.scene=new _m,this.camera=new Ge(75,window.innerWidth/window.innerHeight,.1,60),this.renderer=new Gc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.renderer.toneMapping=uc,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.scene.add(this.camera)}initSystems(){this.sounds=new Pm,this.input=new Im,this.clinicScene=new Rm(this.scene,this.camera),this.creature=new Cm,this.creature.mesh.position.set(0,0,-6),this.scene.add(this.creature.mesh),this.player=new Dm(this.camera,this.input,this.clinicScene,this.sounds),this.ui=new Um({onStartSolo:t=>{this.sounds.ensureContext(),this.network.startSoloGame(t),this.ui.showScreen("game"),this.ui.showSubtitle("ක්‍රීඩාව ආරම්භ විය","සායනයේ ප්‍රධාන ගේට්ටුවේ යතුර සොයාගන්න (Check Reception Desk).")},onCreateRoom:async t=>{this.sounds.ensureContext(),await this.network.createMultiplayerRoom(t),this.ui.showScreen("lobby"),this.ui.updateLobby(this.network.state,!0)},onJoinRoom:async(t,e)=>{this.sounds.ensureContext(),await this.network.joinMultiplayerRoom(t,e)&&(this.ui.showScreen("lobby"),this.ui.updateLobby(this.network.state,!1))},onToggleReady:()=>{const t=this.network.state.players[this.network.localPlayerId];this.network.setReady(!(t!=null&&t.isReady))},onStartGame:()=>{this.network.startGame()},onLeaveLobby:()=>{this.ui.showScreen("menu")},onQualityChange:t=>{this.clinicScene.atmosphere.setQuality(t),this.renderer.shadowMap.enabled=t!=="low"},onTouchModeChange:t=>{this.input.setTouchMode(t)},onSensitivityChange:t=>{this.input.sensitivity=t},onVolumeChange:t=>{this.sounds.setMasterVolume(t)},onSafeCodeSubmit:t=>{this.director.handleSafeCode(t)},onRestart:()=>{window.location.reload()}}),this.director=new Ig(this.clinicScene,this.sounds,this.ui,this.network,this.creature,this.player),this.clinicScene.atmosphere.onThunder=()=>{this.sounds.playThunder()},this.input.onInteract=()=>{this.sounds.ensureContext(),this.player.hoveredInteractable&&this.director.handleInteraction(this.player.hoveredInteractable)},this.input.onFlashlightToggle=()=>{this.sounds.ensureContext();const t=this.clinicScene.atmosphere.toggleFlashlight();this.sounds.playFlashlightToggle(t)}}initNetwork(){this.network=new Pg({onStateUpdate:t=>{t.phase==="LOBBY"&&this.ui.updateLobby(t,this.network.isHost),this.syncRemotePlayers(t.players),this.network.isSoloMode||(this.creature.mesh.position.set(t.enemy.position.x,t.enemy.position.y,t.enemy.position.z),this.creature.mesh.rotation.y=t.enemy.rotationY,this.creature.setState(t.enemy.state))},onPlayerJoined:t=>{console.log("Player joined room:",t.name)},onPlayerLeft:t=>{const e=this.remotePlayers.get(t);e&&(this.scene.remove(e.mesh),e.dispose(),this.remotePlayers.delete(t))},onPhaseChange:t=>{t==="PLAYING"?this.ui.showScreen("game"):t==="CLIMAX"?(this.director.isClimaxActive=!0,this.director.climaxTimer=90):t==="COMPLETED"?this.ui.showScreen("victory"):t==="FAILED"&&this.ui.showScreen("defeat")},onObjectiveChange:t=>{const e=this.network.state.objectives[t];e&&(this.ui.updateObjective(e.titleSi,e.descriptionSi),this.sounds.playItemPickup())},onError:t=>{alert(t)}})}async checkServer(){const t=await this.network.pingServer();this.ui.updateServerStatus(t)}syncRemotePlayers(t){for(const[e,n]of Object.entries(t)){if(e===this.network.localPlayerId)continue;let s=this.remotePlayers.get(e);s?s.updateState(n):(s=new Lm(n),this.remotePlayers.set(e,s),this.scene.add(s.mesh))}for(const[e,n]of this.remotePlayers.entries())t[e]||(this.scene.remove(n.mesh),n.dispose(),this.remotePlayers.delete(e))}updateMonsterSoloAI(t){if(!this.network.isSoloMode||this.director.isGameOver)return;const e=this.creature.mesh.position,n=this.player.position,s=e.distanceTo(n),r=this.input.state.isSprinting&&Math.abs(this.input.state.forward)>.1,a=this.clinicScene.atmosphere.flashlightOn,o=s<12&&a||s<9&&r||s<5;this.director.isClimaxActive?(this.creature.setState("CHASE"),this.monsterSpeed=5.2):o?(this.network.state.enemy.state!=="CHASE"&&this.sounds.playMonsterChaseScream(e.x,e.y,e.z),this.creature.setState("CHASE"),this.network.state.enemy.state="CHASE",this.monsterSpeed=4.8):s>18&&this.network.state.enemy.state==="CHASE"&&(this.creature.setState("PATROL"),this.network.state.enemy.state="PATROL",this.monsterSpeed=2.4);let c=this.waypoints[this.currentWaypointIdx];this.network.state.enemy.state==="CHASE"&&(c=n);const h=new N().subVectors(c,e);h.y=0,h.length()>.3?(h.normalize(),e.addScaledVector(h,this.monsterSpeed*t),this.creature.mesh.rotation.y=Math.atan2(h.x,h.z),this.creature.update(t,!0)):(this.network.state.enemy.state==="PATROL"&&(this.currentWaypointIdx=(this.currentWaypointIdx+1)%this.waypoints.length),this.creature.update(t,!1)),Math.random()<.003&&this.sounds.playMonsterGroan(e.x,e.y,e.z)}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}}window.addEventListener("DOMContentLoaded",()=>{new Dg});
//# sourceMappingURL=index-DxprFQP8.js.map
