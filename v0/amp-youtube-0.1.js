(self.AMP=self.AMP||[]).push({n:"amp-youtube",ev:"0.1",l:true,v:"2106182132000",m:0,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var da={a:!0},ea={};try{ea.__proto__=da;r=ea.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t,fa=q;function ha(){return t?t:t=Promise.resolve(void 0)}function u(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var v=Array.isArray;function ia(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}var ja=Object.prototype.toString;function w(a){return"[object Object]"===ja.call(a)}function x(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function y(a){return a||{}}function z(a){return"number"===typeof a&&isFinite(a)}var A,ka="Webkit webkit Moz moz ms O o".split(" "),ma={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function B(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var h=c;if(h.startsWith("--"))f=h;else{A||(A=x());var k=A[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var n=0;n<ka.length;n++){var p=ka[n]+l;if(void 0!==f[p]){l=p;break b}}l=""}void 0!==f[l]&&(k=l)}A[h]=k}f=k}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}function na(a){for(var b=null,c="",d=m(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function oa(a){var b=na.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function pa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){oa(e)}}var qa=/vertical/,ra=new WeakMap,C=new WeakMap,sa=new WeakMap;function ta(a,b){var c=a.ownerDocument.defaultView;if(c){var d=C.get(a);d||(d=[],C.set(a,d),ua(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=sa.get(a);e&&setTimeout((function(){return va(1,b,e)}))}}}function wa(a,b){var c=C.get(a);c&&(ia(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(C.delete(a),sa.delete(a),(c=a.ownerDocument.defaultView)&&ua(c).unobserve(a)))}function ua(a){var b=ra.get(a);b||(b=new a.ResizeObserver(xa),ra.set(a,b));return b}function xa(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=C.get(e);if(f)for(sa.set(e,d),e=0;e<f.length;e++){var h=f[e];va(h.type,h.callback,d)}}}}function va(a,b,c){if(0==a)a=c.contentRect,pa(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=qa.test((a.ownerDocument.defaultView.getComputedStyle(a)||ma)["writing-mode"]),h=a.offsetHeight,k=a.offsetWidth;if(f){var l=k;var n=h}else n=k,l=h;e={inlineSize:n,blockSize:l}}pa(b,e)}}function ya(a){this.Y=a;this.$=this.C=!1;this.U=this.U.bind(this)}ya.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.$=!1,ta(this.Y,this.U)):wa(this.Y,this.U))};ya.prototype.U=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.$&&(this.$=c,a=this.Y,c||a.pause())};function D(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}}var E=self.AMP_CONFIG||{},za=("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Aa(a){if(self.document&&self.document.head&&(!self.location||!za.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}E.cdnUrl||Aa("runtime-host");E.geoApiUrl||Aa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Ba=self.__AMP_LOG;function F(){if(!Ba.user)throw Error("failed to call initLogConstructor");return Ba.user}function Ca(a,b,c){return F().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function G(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function Da(a,b){var c=I(a);c=Ea(c);return H(c,b)}function J(a,b){a=I(a);a=Ea(a);return Fa(a,b)?H(a,b):null}function I(a){return a.nodeType?G((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Ea(a){a=I(a);return a.isSingleDoc()?a.win:a}function H(a,b){Fa(a,b);a=Ga(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Ga(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Fa(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var Ha={bubbles:!0,cancelable:!0};function Ia(a){var b;null==(b=a.parentElement)||b.removeChild(a)}function Ja(a){function b(k){return k}var c=a.dataset;a={};var e,d=/^param(.+)/;for(e in c){var f=e.match(d);if(f){var h=f[1][0].toLowerCase()+f[1].substr(1);a[b(h)]=c[e]}}return a}function K(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,Ha.bubbles,Ha.cancelable);a.dispatchEvent(d)}function Ka(a){a.signals().signal("user-interacted")}y({c:!0,v:!0,a:!0,ad:!0});function La(a){a.classList.add("i-amphtml-fill-content")}var L;function M(a){a=a.ownerDocument||a;L&&L.ownerDocument===a||(L=a.createElement("div"));return Ma}function Ma(a){var b=L;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function Na(a,b,c){a=v(a)?a:[a];a=m(a);for(var d=a.next();!d.done;d=a.next()){d=d.value;var e=b.getAttribute(d);null!==e&&c.setAttribute(d,e)}}function Oa(a){try{return JSON.parse(a)}catch(b){return null}}var Pa=["<iframe frameborder=0 allowfullscreen></iframe>"];function Qa(a,b,c){if(null!=c[b]){var d=c[b];(v(d)?d:[d]).forEach((function(e){K(a,e)}))}}function Ra(a,b){var c=a.element,d=M(c)(Pa);Na(["referrerpolicy"],a.element,d);d.src=J(c,"url").assertHttpsUrl(b,c);La(d);c.appendChild(d);return d}function Sa(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")}var N;function O(a,b,c){function d(k){try{return f(k)}catch(p){var l,n;null==(n=(l=self).__AMP_REPORT_ERROR)||n.call(l,p);throw p}}var e=a,f=c,h=Ta();e.addEventListener(b,d,h?void 0:!1);return function(){var k;null==(k=e)||k.removeEventListener(b,d,h?void 0:!1);d=e=f=null}}function Ta(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N}function Ua(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function Va(a,b){var c=b,d=O(a,"loadedmetadata",(function(e){try{c(e)}finally{c=null,d()}}));return d}var Wa={title:"",artist:"",album:"",artwork:[{src:""}]};function Xa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=Oa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function Ya(a,b){var c=J(a,"url");if(b&&b.artwork){var d=b.artwork;v(d);d.forEach((function(e){e&&(e=w(e)?e.src:e,Ca(c.isProtocolValid(e)))}))}}function Za(){this.B=null}g=Za.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.B){var b=this.B;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=m(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function Q(){this.S=!1;this.na=new Za}Q.prototype.onSessionEnd=function(a){this.na.add(a)};Q.prototype.beginSession=function(){this.S=!0};Q.prototype.endSession=function(){this.S&&this.na.fire();this.S=!1};Q.prototype.isSessionActive=function(){return this.S};function $a(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;function ab(a){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;B(b,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});new Promise((function(c){return c(b.play())})).catch((function(){}));return Promise.resolve(!b.paused)}function bb(a){null==a.__AMP_AUTOPLAY&&(a.__AMP_AUTOPLAY=ab(a));return a.__AMP_AUTOPLAY}function cb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var R,db;function eb(a){R||(R=new WeakMap,db=new WeakMap);var b=db.get(a);b||(b=$a((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),R.get(f).resolve(c[e]),R.delete(f))}}),a,{needsRootBounds:!0}),db.set(a,b));return b}function fb(a){if(R&&R.has(a))return R.get(a).promise;eb(a.ownerDocument.defaultView).observe(a);var b=new u;R.set(a,b);return b.promise}var gb=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],hb=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function ib(a,b){var c=M(a)(gb);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function jb(a){var b=M(a)(hb),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}Ia(c);return b}function kb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=D((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=x());var f=cb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=cb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.da=this.O=this.o=null;this.V=H(a.win,"timer");this.ua=J(a.getHeadNode(),"action");this.ma=function(){for(var c=0;c<b.o.length;c++){var d=b.o[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();z(e)&&z(f)&&0<f&&(e=Ua(b.ampdoc.win,"video-manager.timeUpdate",y({time:e,percent:e/f})),b.ua.trigger(d.video.element,"timeUpdate",e,1))}}b.V.delay(b.ma,1e3)};this.Z=D((function(){return new T(b.ampdoc,b)}));this.V.delay(this.ma,1e3)}g=kb.prototype;g.dispose=function(){this.Z().dispose();this.O.disconnect();this.O=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};g.register=function(a){var b=this;lb(a);if(a.supportsPlatform()&&!U(this,a)){this.O||(this.O=$a((function(e){return e.forEach((function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)}))}),this.ampdoc.win,{threshold:.5}));this.O.observe(a.element);P(a.element,"reloaded",(function(){return c.videoLoaded()}));this.o=this.o||[];var c=new mb(this,a);this.o.push(c);var d=c.video.element;K(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function lb(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){Ka(a);e()}),1)}c("play",(function(){return a.play(!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(nb(a.da,b))return a.da;for(var c=0;a.o&&c<a.o.length;c++){var d=a.o[c];if(nb(d,b))return a.da=d}return null}g.registerForAutoFullscreen=function(a){this.Z().register(a)};g.Ba=function(){return this.Z()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=F().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ha()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.o.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function nb(a,b){return!!a&&(a.video===b||a.video.element===b)}function mb(a,b){var c=this;this.K=a;this.j=a.ampdoc;this.video=b;this.ea=!0;this.J=this.N=this.C=this.sa=!1;this.X=new Q;this.X.onSessionEnd((function(){return S(c,"video-session")}));this.L=new Q;this.L.onSessionEnd((function(){return S(c,"video-session-visible")}));this.pa=D((function(){return new V(c.j.win,c)}));this.fa=this.ta=!1;this.aa=null;this.qa=this.G=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.K.installAutoplayStyles();this.D=Wa;this.ya=function(){c.video.play(!1)};this.xa=function(){c.video.pause()};P(b.element,"load",(function(){return c.videoLoaded()}));P(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.fa?c.fa=!1:c.X.endSession()}));P(b.element,"play",(function(){c.qa=!0;S(c,"video-play")}));P(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.oa(),c.K.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){Ya(e,c.D);d=c.j.win;e=c.D;var f=c.ya,h=c.xa,k=d.navigator;"mediaSession"in k&&d.MediaMetadata&&(k.mediaSession.metadata=new d.MediaMetadata(Wa),k.mediaSession.metadata=new d.MediaMetadata(e),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.X.beginSession();c.J&&c.L.beginSession();c.qa||S(c,"video-play")}));P(b.element,"muted",(function(){return c.G=!0}));P(b.element,"unmuted",(function(){c.G=!1;c.K.pauseOtherVideos(c)}));P(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&ob(c,e,d.vars)}));P(b.element,"ended",(function(){c.N=!1;S(c,"video-ended")}));P(b.element,"ad_start",(function(){c.N=!0;S(c,"video-ad-start")}));P(b.element,"ad_end",(function(){c.N=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:Ca(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.K.registerForAutoFullscreen(c);c.hasAutoplay&&pb(c)}));this.oa=D((function(){var d=Ua(c.j.win,"firstPlay",y({})),e=c.video.element;J(e,"action").trigger(e,"firstPlay",d,1)}));qb(this)}g=mb.prototype;g.dispose=function(){this.pa().stop()};function ob(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function qb(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.ea=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.G};g.isPlaybackManaged=function(){return this.ea};g.videoLoaded=function(){this.sa=!0;this.aa=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=x(this.video.getMetadata()));var a=this.j.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=Xa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.aa.getAttribute("title")||this.aa.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.pa().start();this.J&&rb(this)};function rb(a){a.j.isVisible()&&bb(a.j.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.ea&&(a.J?(a.L.beginSession(),a.video.play(!0),a.ta=!0):(a.C&&a.L.endSession(),a.video.pause(),a.fa=!0)):a.J?a.L.beginSession():a.C&&a.L.endSession()}))}function pb(a){a.video.isInteractive()&&a.video.hideControls();bb(a.j.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),sb(a))}))}function sb(a){function b(n){d.mutateElementSkipRemeasure((function(){h.forEach((function(p){var la=n;void 0===la&&(la=p.hasAttribute("hidden"));la?p.removeAttribute("hidden"):p.setAttribute("hidden","")}))}))}function c(n){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",n)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=jb(e),h=[f],k=[P(e,"pause",(function(){return c(!1)})),P(e,"playing",(function(){return c(!0)})),P(e,"ad_start",(function(){b(!1);d.showControls()})),P(e,"ad_end",(function(){b(!0);d.hideControls()})),P(e,"unmuted",(function(){return Ka(d)}))];if(d.isInteractive()){d.hideControls();var l=ib(e,a.D);h.push(l);k.push(P(l,"click",(function(){return Ka(d)})))}d.mutateElementSkipRemeasure((function(){h.forEach((function(n){e.appendChild(n)}))}));a.N&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.oa();d.isInteractive()&&d.showControls();d.unmute();k.forEach((function(n){n()}));d.mutateElementSkipRemeasure((function(){h.forEach((function(n){Ia(n)}))}))}))}}g.updateVisibility=function(a){var b=this.J;this.J=a;a!=b&&this.sa&&rb(this)};g.getPlayingState=function(){return this.C?this.C&&this.ta&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.N};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([bb(this.j.win),fb(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var h=a.hasAutoplay&&d,k=b.getPlayedRanges(),l=k.reduce((function(n,p){return n+p[1]-p[0]}),0);return{autoplay:h,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.G,playedTotal:l,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.K=b;this.j=a;this.H=this.M=null;this.o=[];this.A=[];this.P=function(){return tb(c)};this.wa=function(d){return"playing_manual"==c.K.getPlayingState(d)};this.va=function(d,e){var f=d.boundingClientRect;var h=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Da(c.j,"viewport"),d=ub(e,f),e=ub(e,h),f=d<e||d>e?d-e:f.top-h.top);return f};vb(this);wb(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=G(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),O(b,"pause",this.P),O(b,"playing",this.P),O(b,"ended",this.P),a.signals().whenSignal("user-interacted").then(this.P),tb(this))};function wb(a){function b(){a.M=null}var c=a.j.getRootNode();a.A.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function vb(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.A.push(P(c.orientation,"change",(function(){return xb(a)})));a.A.push(P(b,"orientationchange",(function(){return xb(a)})))}function xb(a){a.isInLandscape()?null!=a.H&&yb(a,a.H):a.M&&zb(a,a.M)}function yb(a,b){var c=G(a.j.win,"platform");a.M=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Ab(a,b).then((function(){return b.fullscreenEnter()}))}function zb(a,b){a.M=null;Ab(a,b,"center").then((function(){return b.fullscreenExit()}))}function Ab(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Da(a.j,"viewport");return H(a.j.win,"timer").promise(330).then((function(){return fb(e)})).then((function(h){var k=h.boundingClientRect;h=k.bottom;k=k.top;var l=f.getSize().height;return 0<=k&&h<=l?ha():f.animateScrollIntoView(e,d?d:h>l?"bottom":"top")}))}function tb(a){if(a.isInLandscape())return Promise.resolve(a.H);a.H=null;var b=a.o.filter(a.wa).map((function(c){return fb(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.va)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.H=e})):a.H}))}function ub(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.V=H(a,"timer");this.R=b;this.A=null;this.W=this.ra=0}V.prototype.start=function(){var a=this,b=this.R.video.element;this.stop();this.A=this.A||[];Bb(this)?Cb(this,this.W):this.A.push(Va(b,(function(){Bb(a)&&Cb(a,a.W)})));this.A.push(P(b,"ended",(function(){Bb(a)&&Db(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.W++}};function Bb(a){var b=a.R.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.Aa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.Aa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];F().warn.apply(F(),["video-manager"].concat(b))};function Cb(a,b){if(b==a.W){var c=a.R,d=a.V,e=c.video,f=function(){return Cb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4e3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);z(l);Db(a,l);d.delay(f,h)}else d.delay(f,500)}}function Db(a,b){0>=b||a.ra==b||(a.ra=b,S(a.R,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);K(d.element,b,e)}))}var Eb=["<img placeholder referrerpolicy=origin>"];function W(a){a=AMP.BaseElement.call(this,a)||this;a.F=null;a.T=null;a.G=!1;a.ba=!1;a.ca=!1;a.h=null;a.I=null;a.la=null;a.ha=null;a.ia=null;a.ka=null;a.ja=null;a.ga=new ya(a.element);return a}var X=AMP.BaseElement;W.prototype=ba(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Fb=Object.getOwnPropertyDescriptor(X,Y);Fb&&Object.defineProperty(W,Y,Fb)}else W[Y]=X[Y];W.Ca=X.prototype;g=W.prototype;g.preconnectCallback=function(a){var b=G(this.win,"preconnect"),c=this.getAmpDoc();b.url(c,Gb(this));b.url(c,"https://s.ytimg.com",a);b.url(c,"https://i.ytimg.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.renderOutsideViewport=function(){return.75};g.buildCallback=function(){this.F=this.element.getAttribute("data-videoid");this.T=this.element.getAttribute("data-live-channelid");Hb(this);var a=new u;this.ha=a.promise;this.ia=a.resolve;a=I(this.element);var b=Ea(a),c=Ga(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});d.ctor||(d.ctor=kb,d.context=a,d.sharedInstance=!1,d.resolve&&H(b,"video-manager"))};function Gb(a){if(a.la)return a.la;Hb(a);var b="https://www.youtube"+("omit"===(a.element.getAttribute("credentials")||"include")?"-nocookie":"")+".com/embed/";var c=a.F?encodeURIComponent(a.F||"")+"?":"live_stream?channel="+encodeURIComponent(a.T||"")+"&";c=""+b+c+"enablejsapi=1&amp=1";var d=a.element;b=Ja(d);"autoplay"in b&&(delete b.autoplay,a.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in b||(b.playsinline="1");d.hasAttribute("autoplay")&&("iv_load_policy"in b||(b.iv_load_policy="3"),b.playsinline="1");"loop"in b&&a.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop");a.ba=d.hasAttribute("loop")||"loop"in b&&"1"==b.loop;a.ca="playlist"in b;a.ba&&(a.ca?b.loop="1":"loop"in b&&delete b.loop);d=[];for(k in b){var e=b[k];if(null!=e)if(v(e))for(var f=0;f<e.length;f++){var h=e[f];d.push(encodeURIComponent(k)+"="+encodeURIComponent(h))}else d.push(encodeURIComponent(k)+"="+encodeURIComponent(e))}var k=d.join("&");k&&(b=c.split("#",2),c=b[0].split("?",2),k=c[0]+(c[1]?"?"+c[1]+"&"+k:"?"+k),c=k+=b[1]?"#"+b[1]:"");return a.la=c}g.layoutCallback=function(){var a=this,b=Ra(this,Gb(this));b.title=this.element.title||"YouTube video";Sa(b);this.h=b;Da(this.element,"video-manager").register(this);this.ka=P(this.win,"message",this.za.bind(this));this.ba&&!this.ca&&(this.ja=P(this.element,"ended",(function(){return a.play(!1)})));var c=this.loadPromise(this.h).then((function(){return H(a.win,"timer").promise(300)})).then((function(){a.h&&a.h.contentWindow.postMessage(JSON.stringify(y({event:"listening"})),"*");K(a.element,"load")}));this.ia(c);return c};g.unlayoutCallback=function(){this.h&&(Ia(this.h),this.h=null);this.ka&&this.ka();this.ja&&this.ja();var a=new u;this.ha=a.promise;this.ia=a.resolve;this.ga.updatePlaying(!1);return!0};g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-videoid"]&&(this.F=this.element.getAttribute("data-videoid"),this.h&&Z(this,"loadVideoById",[this.F]))};function Hb(a){Ca(!(a.F&&a.T)&&(a.F||a.T),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",a.element)}function Z(a,b,c){a.ha.then((function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(y({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"*")}}))}g.za=function(a){var b=this.h;if(b&&a.source==b.contentWindow&&"https://www.youtube.com"==a.origin){var c=a.data;if(c&&(w(c)||c.startsWith("{"))&&(b=w(c)?c:Oa(c),null!=b)){a=b.event;var d=b.info||{};b=this.element;var e=d.playerState;if("infoDelivery"==a&&null!=e){switch(e){case 1:this.ga.updatePlaying(!0);break;case 2:case 0:this.ga.updatePlaying(!1)}a={};Qa(b,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a))}else{var f=d.muted;"infoDelivery"==a&&d&&null!=f?this.G!=f&&(this.G=f,K(b,this.G?"muted":"unmuted")):"initialDelivery"==a?(this.I=d,K(b,"loadedmetadata")):"infoDelivery"==a&&void 0!==d.currentTime&&(this.I.currentTime=d.currentTime)}}}};g.createPlaceholderCallback=function(){var a=this;if(!this.F)return null;var b=M(this.element)(Eb),c=this.F;B(b,{"object-fit":"cover",visibility:"hidden"});Na(["aria-label"],this.element,b);b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+"/sddefault.jpg#404_is_fine";b.hasAttribute("aria-label")?b.setAttribute("alt","Loading video - "+b.getAttribute("aria-label")):b.setAttribute("alt","Loading video");La(b);this.loadPromise(b).then((function(){if(120==b.naturalWidth&&90==b.naturalHeight)throw Error("sddefault.jpg is not found")})).catch((function(){b.src="https://i.ytimg.com/vi/"+encodeURIComponent(c)+"/hqdefault.jpg";return a.loadPromise(b)})).then((function(){a.getVsync().mutate((function(){B(b,{visibility:""})}))}));return b};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return this.I?this.I.currentTime:NaN};g.getDuration=function(){return this.I?this.I.duration:NaN};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-youtube","`seekTo` not supported.")};(function(a){a.registerElement("amp-youtube",W)})(self.AMP)}});//# sourceMappingURL=amp-youtube-0.1.js.map