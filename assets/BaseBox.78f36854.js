import{o as Le,h as Fe,k as D,t as je,a as qe,b as ke,i as se}from"./index.37de88b8.js";var Q={exports:{}},ye=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Ie=ye,Y=Object.prototype.toString,G=function(r){return function(e){var t=Y.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return G(t)===r}}function Z(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Me(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var be=A("ArrayBuffer");function He(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&be(r.buffer),e}function Je(r){return typeof r=="string"}function Ve(r){return typeof r=="number"}function Re(r){return r!==null&&typeof r=="object"}function U(r){if(G(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var We=A("Date"),ze=A("File"),Xe=A("Blob"),Ke=A("FileList");function ee(r){return Y.call(r)==="[object Function]"}function Qe(r){return Re(r)&&ee(r.pipe)}function Ye(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Y.call(r)===e||ee(r.toString)&&r.toString()===e)}var Ge=A("URLSearchParams");function Ze(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function er(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function re(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Z(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function X(){var r={};function e(n,a){U(r[a])&&U(n)?r[a]=X(r[a],n):U(n)?r[a]=X({},n):Z(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)re(arguments[t],e);return r}function rr(r,e,t){return re(e,function(n,a){t&&typeof n=="function"?r[a]=Ie(n,t):r[a]=n}),r}function tr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function nr(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function ir(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function ar(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function sr(r){if(!r)return null;var e=r.length;if(F(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var or=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),p={isArray:Z,isArrayBuffer:be,isBuffer:Me,isFormData:Ye,isArrayBufferView:He,isString:Je,isNumber:Ve,isObject:Re,isPlainObject:U,isUndefined:F,isDate:We,isFile:ze,isBlob:Xe,isFunction:ee,isStream:Qe,isURLSearchParams:Ge,isStandardBrowserEnv:er,forEach:re,merge:X,extend:rr,trim:Ze,stripBOM:tr,inherits:nr,toFlatObject:ir,kindOf:G,kindOfTest:A,endsWith:ar,toArray:sr,isTypedArray:or,isFileList:Ke},C=p;function oe(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var we=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(C.isURLSearchParams(t))n=t.toString();else{var a=[];C.forEach(t,function(f,d){f===null||typeof f=="undefined"||(C.isArray(f)?d=d+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),a.push(oe(d)+"="+oe(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},ur=p;function j(){this.handlers=[]}j.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){ur.forEach(this.handlers,function(i){i!==null&&e(i)})};var fr=j,lr=p,cr=function(e,t){lr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Oe=p;function T(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Oe.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _e=T.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(T,Ae);Object.defineProperty(_e,"isAxiosError",{value:!0});T.from=function(r,e,t,i,n,a){var s=Object.create(_e);return Oe.toFlatObject(r,s,function(f){return f!==Error.prototype}),T.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var P=T,Se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b=p;function dr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":b.isDate(a)?a.toISOString():b.isArrayBuffer(a)||b.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(b.isPlainObject(a)||b.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),b.forEach(a,function(f,d){if(!b.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(b.endsWith(d,"{}"))f=JSON.stringify(f);else if(b.endsWith(d,"[]")&&(l=b.toArray(f))){l.forEach(function(v){!b.isUndefined(v)&&e.append(o,i(v))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Ce=dr,J=P,pr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new J("Request failed with status code "+i.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},B=p,hr=B.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),B.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),B.isString(a)&&f.push("path="+a),B.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),mr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},vr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Er=mr,yr=vr,xe=function(e,t){return e&&!Er(t)?yr(e,t):t},V=p,br=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Rr=function(e){var t={},i,n,a;return e&&V.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=V.trim(u.substr(0,a)).toLowerCase(),n=V.trim(u.substr(a+1)),i){if(t[i]&&br.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},ue=p,wr=ue.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=ue.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),K=P,Or=p;function Te(r){K.call(this,r==null?"canceled":r,K.ERR_CANCELED),this.name="CanceledError"}Or.inherits(Te,K,{__CANCEL__:!0});var q=Te,_r=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},g=p,Ar=pr,Sr=hr,Cr=we,xr=xe,Tr=Rr,Nr=wr,$r=Se,R=P,Pr=q,gr=_r,fe=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}g.isFormData(a)&&g.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+v)}var h=xr(e.baseURL,e.url);o.open(e.method.toUpperCase(),Cr(h,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ie(){if(!!o){var y="getAllResponseHeaders"in o?Tr(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,_={data:S,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Ar(function(H){i(H),d()},function(H){n(H),d()},_),o=null}}if("onloadend"in o?o.onloadend=ie:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ie)},o.onabort=function(){!o||(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",_=e.transitional||$r;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new R(S,_.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},g.isStandardBrowserEnv()){var ae=(e.withCredentials||Nr(h))&&e.xsrfCookieName?Sr.read(e.xsrfCookieName):void 0;ae&&(s[e.xsrfHeaderName]=ae)}"setRequestHeader"in o&&g.forEach(s,function(S,_){typeof a=="undefined"&&_.toLowerCase()==="content-type"?delete s[_]:o.setRequestHeader(_,S)}),g.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Pr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var M=gr(h);if(M&&["http","https","file"].indexOf(M)===-1){n(new R("Unsupported protocol "+M+":",R.ERR_BAD_REQUEST,e));return}o.send(a)})},Dr=null,c=p,le=cr,ce=P,Br=Se,Ur=Ce,Lr={"Content-Type":"application/x-www-form-urlencoded"};function de(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Fr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=fe),r}function jr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var k={transitional:Br,adapter:Fr(),transformRequest:[function(e,t){if(le(t,"Accept"),le(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return de(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Ur(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return de(t,"application/json"),jr(e);return e}],transformResponse:[function(e){var t=this.transitional||k.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?ce.from(s,ce.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){k.headers[e]={}});c.forEach(["post","put","patch"],function(e){k.headers[e]=c.merge(Lr)});var te=k,qr=p,kr=te,Ir=function(e,t,i){var n=this||kr;return qr.forEach(i,function(s){e=s.call(n,e,t)}),e},Ne=function(e){return!!(e&&e.__CANCEL__)},pe=p,W=Ir,Mr=Ne,Hr=te,Jr=q;function z(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Jr}var Vr=function(e){z(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Hr.adapter;return t(e).then(function(n){return z(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Mr(n)||(z(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=p,$e=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=d[l]||a,h=v(l);E.isUndefined(h)&&v!==f||(i[l]=h)}),i},Pe={version:"0.27.2"},Wr=Pe.version,O=P,ne={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ne[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var he={};ne.transitional=function(e,t,i){function n(a,s){return"[Axios v"+Wr+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new O(n(s," has been removed"+(t?" in "+t:"")),O.ERR_DEPRECATED);return t&&!he[s]&&(he[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function zr(r,e,t){if(typeof r!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new O("option "+a+" must be "+f,O.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new O("Unknown option "+a,O.ERR_BAD_OPTION)}}var Xr={assertOptions:zr,validators:ne},ge=p,Kr=we,me=fr,ve=Vr,I=$e,Qr=xe,De=Xr,x=De.validators;function N(r){this.defaults=r,this.interceptors={request:new me,response:new me}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&De.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(a=a&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var s=[];this.interceptors.response.forEach(function(h){s.push(h.fulfilled,h.rejected)});var u;if(!a){var f=[ve,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(v){l(v);break}}try{u=ve(d)}catch(v){return Promise.reject(v)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};N.prototype.getUri=function(e){e=I(this.defaults,e);var t=Qr(e.baseURL,e.url);return Kr(t,e.params,e.paramsSerializer)};ge.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});ge.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(I(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var Yr=N,Gr=q;function $(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Gr(n),e(t.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};$.source=function(){var e,t=new $(function(n){e=n});return{token:t,cancel:e}};var Zr=$,et=function(e){return function(i){return e.apply(null,i)}},rt=p,tt=function(e){return rt.isObject(e)&&e.isAxiosError===!0},Ee=p,nt=ye,L=Yr,it=$e,at=te;function Be(r){var e=new L(r),t=nt(L.prototype.request,e);return Ee.extend(t,L.prototype,e),Ee.extend(t,e),t.create=function(n){return Be(it(r,n))},t}var m=Be(at);m.Axios=L;m.CanceledError=q;m.CancelToken=Zr;m.isCancel=Ne;m.VERSION=Pe.version;m.toFormData=Ce;m.AxiosError=P;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=et;m.isAxiosError=tt;Q.exports=m;Q.exports.default=m;var st=Q.exports,w=st.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-type":"application/json"}});class ot{getCategoryList(){return w.get("users").then(({data:e})=>e.map(({name:t,...i})=>({...i,title:t})))}createCategory(e){return w.post("users",e)}updateCategory({id:e,...t}){return w.put(`users/${e}`,t)}getSubcategoryList(e){return w.get(`users/${e}/albums`).then(({data:t})=>t.map(({title:i,...n})=>({...n,title:i.slice(0,40).firstCharToUpperCase()})))}createSubcategory(e){return w.post("albums",e)}updateSubcategory({id:e,...t}){return w.put(`albums/${e}`,t)}getEquipmentList(e){return w.get(`albums/${e}/photos`).then(({data:t})=>t.map(({title:i,...n})=>({...n,title:i.slice(0,40).firstCharToUpperCase()})))}createEquipment(e){return w.post("photos",e)}}var ht=new ot;const ut={class:"box"},ft={class:"box__head"},lt={class:"box__title"},ct={class:"box__actions"},dt={class:"box__content"},mt={__name:"BaseBox",props:{title:{type:String,required:!0}},emits:["click:add"],setup(r){return(e,t)=>(Le(),Fe("div",ut,[D("div",ft,[D("div",lt,je(r.title),1),D("div",ct,[qe(ke,{"pre-icon":"plus-icon",onClick:t[0]||(t[0]=i=>e.$emit("click:add"))}),se(e.$slots,"actions")])]),D("div",dt,[se(e.$slots,"default")])]))}};export{ht as E,mt as _};