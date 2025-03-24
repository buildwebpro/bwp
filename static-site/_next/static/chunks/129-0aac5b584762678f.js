"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{1027:(e,r,t)=>{t.d(r,{F:()=>s});var o=t(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:a}=r,i=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],o=null==a?void 0:a[e];if(null===r)return null;let l=n(r)||n(o);return s[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,i,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...d}[r]):({...a,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},2317:(e,r,t)=>{t.d(r,{DX:()=>s});var o=t(2115),n=t(8068),l=t(5155),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),i=s.find(d);if(i){let e=i.props.children,t=s.map(r=>r!==i?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(a,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(a,{...n,ref:r,children:t})});s.displayName="Slot";var a=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t),s=function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==o.Fragment&&(s.ref=r?(0,n.t)(r,e):e),o.cloneElement(t,s)}return o.Children.count(t)>1?o.Children.only(null):null});a.displayName="SlotClone";var i=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===i}},3463:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},4057:(e,r,t)=>{t.d(r,{A:()=>i});var o=t(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:i?24*Number(a)/Number(n):a,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),i=(e,r)=>{let t=(0,o.forwardRef)((t,s)=>{let{className:i,...d}=t;return(0,o.createElement)(a,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),i),...d})});return t.displayName="".concat(e),t}},8068:(e,r,t)=>{t.d(r,{s:()=>s,t:()=>l});var o=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},9795:(e,r,t)=>{t.d(r,{QP:()=>eu});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)i(t[e],o,e,r);return o},i=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){i(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},p=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r;let t=[],o=0,n=0,l=0;for(let s=0;s<e.length;s++){let a=e[s];if(0===o&&0===n){if(":"===a){t.push(e.slice(l,s)),l=s+1;continue}if("/"===a){r=s;continue}}"["===a?o++:"]"===a?o--:"("===a?n++:")"===a&&n--}let s=0===t.length?e:e.substring(l),a=b(s);return{modifiers:t,hasImportantModifier:a!==s,baseClassName:a,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},b=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,f=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},m=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],a=e.trim().split(g),i="";for(let e=a.length-1;e>=0;e-=1){let r=a[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:b}=t(r);if(d){i=r+(i.length>0?" "+i:i);continue}let f=!!b,m=o(f?p.substring(0,b):p);if(!m){if(!f||!(m=o(p))){i=r+(i.length>0?" "+i:i);continue}f=!1}let g=l(c).join(":"),h=u?g+"!":g,w=h+m;if(s.includes(w))continue;s.push(w);let v=n(m,f);for(let e=0;e<v.length;++e){let r=v[e];s.push(h+r)}i=r+(i.length>0?" "+i:i)}return i};function w(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},y=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,N=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>z.test(e),$=e=>!!e&&!Number.isNaN(Number(e)),A=e=>!!e&&Number.isInteger(Number(e)),O=e=>e.endsWith("%")&&$(e.slice(0,-1)),G=e=>j.test(e),S=()=>!0,W=e=>N.test(e)&&!C.test(e),I=()=>!1,R=e=>E.test(e),_=e=>M.test(e),V=e=>!F(e)&&!Q(e),D=e=>ee(e,es,I),F=e=>y.test(e),L=e=>ee(e,ea,W),T=e=>ee(e,ei,$),q=e=>ee(e,et,I),B=e=>ee(e,en,_),Z=e=>ee(e,I,R),Q=e=>k.test(e),X=e=>er(e,ea),H=e=>er(e,ed),J=e=>er(e,et),K=e=>er(e,es),U=e=>er(e,en),Y=e=>er(e,ec,!0),ee=(e,r,t)=>{let o=y.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},er=(e,r,t=!1)=>{let o=k.exec(e);return!!o&&(o[1]?r(o[1]):t)},et=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ea=e=>"length"===e,ei=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,o,n;let l=function(a){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(a)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(w.apply(null,arguments))}}(()=>{let e=x("color"),r=x("font"),t=x("text"),o=x("font-weight"),n=x("tracking"),l=x("leading"),s=x("breakpoint"),a=x("container"),i=x("spacing"),d=x("radius"),c=x("shadow"),u=x("inset-shadow"),p=x("drop-shadow"),b=x("blur"),f=x("perspective"),m=x("aspect"),g=x("ease"),h=x("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],y=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[Q,F,i],j=()=>[P,"full","auto",...z()],N=()=>[A,"none","subgrid",Q,F],C=()=>["auto",{span:["full",A,Q,F]},Q,F],E=()=>[A,"auto",Q,F],M=()=>["auto","min","max","fr",Q,F],W=()=>["start","end","center","between","around","evenly","stretch","baseline"],I=()=>["start","end","center","stretch"],R=()=>["auto",...z()],_=()=>[P,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],ee=()=>[e,Q,F],er=()=>[O,L],et=()=>["","none","full",d,Q,F],eo=()=>["",$,X,L],en=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],es=()=>["","none",b,Q,F],ea=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Q,F],ei=()=>["none",$,Q,F],ed=()=>["none",$,Q,F],ec=()=>[$,Q,F],eu=()=>[P,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[G],breakpoint:[G],color:[S],container:[G],"drop-shadow":[G],ease:["in","out","in-out"],font:[V],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[G],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[G],shadow:[G],spacing:["px",$],text:[G],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",P,F,Q,m]}],container:["container"],columns:[{columns:[$,F,Q,a]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),F,Q]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[A,"auto",Q,F]}],basis:[{basis:[P,"full","auto",a,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$,P,"auto","initial","none",F]}],grow:[{grow:["",$,Q,F]}],shrink:[{shrink:["",$,Q,F]}],order:[{order:[A,"first","last","none",Q,F]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":M()}],"auto-rows":[{"auto-rows":M()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...W(),"normal"]}],"justify-items":[{"justify-items":[...I(),"normal"]}],"justify-self":[{"justify-self":["auto",...I()]}],"align-content":[{content:["normal",...W()]}],"align-items":[{items:[...I(),"baseline"]}],"align-self":[{self:["auto",...I(),"baseline"]}],"place-content":[{"place-content":W()}],"place-items":[{"place-items":[...I(),"baseline"]}],"place-self":[{"place-self":["auto",...I()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:R()}],mx:[{mx:R()}],my:[{my:R()}],ms:[{ms:R()}],me:[{me:R()}],mt:[{mt:R()}],mr:[{mr:R()}],mb:[{mb:R()}],ml:[{ml:R()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:_()}],w:[{w:[a,"screen",..._()]}],"min-w":[{"min-w":[a,"screen","none",..._()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[s]},..._()]}],h:[{h:["screen",..._()]}],"min-h":[{"min-h":["screen","none",..._()]}],"max-h":[{"max-h":["screen",..._()]}],"font-size":[{text:["base",t,X,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Q,T]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",O,F]}],"font-family":[{font:[H,F,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,Q,F]}],"line-clamp":[{"line-clamp":[$,"none",Q,T]}],leading:[{leading:[l,...z()]}],"list-image":[{"list-image":["none",Q,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...en(),"wavy"]}],"text-decoration-thickness":[{decoration:[$,"from-font","auto",Q,L]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[$,"auto",Q,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),J,q]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",K,D]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},A,Q,F],radial:["",Q,F],conic:[A,Q,F]},U,B]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:er()}],"gradient-via-pos":[{via:er()}],"gradient-to-pos":[{to:er()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:et()}],"rounded-s":[{"rounded-s":et()}],"rounded-e":[{"rounded-e":et()}],"rounded-t":[{"rounded-t":et()}],"rounded-r":[{"rounded-r":et()}],"rounded-b":[{"rounded-b":et()}],"rounded-l":[{"rounded-l":et()}],"rounded-ss":[{"rounded-ss":et()}],"rounded-se":[{"rounded-se":et()}],"rounded-ee":[{"rounded-ee":et()}],"rounded-es":[{"rounded-es":et()}],"rounded-tl":[{"rounded-tl":et()}],"rounded-tr":[{"rounded-tr":et()}],"rounded-br":[{"rounded-br":et()}],"rounded-bl":[{"rounded-bl":et()}],"border-w":[{border:eo()}],"border-w-x":[{"border-x":eo()}],"border-w-y":[{"border-y":eo()}],"border-w-s":[{"border-s":eo()}],"border-w-e":[{"border-e":eo()}],"border-w-t":[{"border-t":eo()}],"border-w-r":[{"border-r":eo()}],"border-w-b":[{"border-b":eo()}],"border-w-l":[{"border-l":eo()}],"divide-x":[{"divide-x":eo()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":eo()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...en(),"hidden","none"]}],"divide-style":[{divide:[...en(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...en(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$,Q,F]}],"outline-w":[{outline:["",$,X,L]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,Z]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",Q,F,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:eo()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[$,L]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":eo()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[$,Q,F]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",Q,F]}],blur:[{blur:es()}],brightness:[{brightness:[$,Q,F]}],contrast:[{contrast:[$,Q,F]}],"drop-shadow":[{"drop-shadow":["","none",p,Q,F]}],grayscale:[{grayscale:["",$,Q,F]}],"hue-rotate":[{"hue-rotate":[$,Q,F]}],invert:[{invert:["",$,Q,F]}],saturate:[{saturate:[$,Q,F]}],sepia:[{sepia:["",$,Q,F]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,F]}],"backdrop-blur":[{"backdrop-blur":es()}],"backdrop-brightness":[{"backdrop-brightness":[$,Q,F]}],"backdrop-contrast":[{"backdrop-contrast":[$,Q,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$,Q,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$,Q,F]}],"backdrop-invert":[{"backdrop-invert":["",$,Q,F]}],"backdrop-opacity":[{"backdrop-opacity":[$,Q,F]}],"backdrop-saturate":[{"backdrop-saturate":[$,Q,F]}],"backdrop-sepia":[{"backdrop-sepia":["",$,Q,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$,"initial",Q,F]}],ease:[{ease:["linear","initial",g,Q,F]}],delay:[{delay:[$,Q,F]}],animate:[{animate:["none",h,Q,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,Q,F]}],"perspective-origin":[{"perspective-origin":ea()}],rotate:[{rotate:ei()}],"rotate-x":[{"rotate-x":ei()}],"rotate-y":[{"rotate-y":ei()}],"rotate-z":[{"rotate-z":ei()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:ec()}],"skew-x":[{"skew-x":ec()}],"skew-y":[{"skew-y":ec()}],transform:[{transform:[Q,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ea()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,F]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[$,X,L,T]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);