(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{5766:function(e,r,t){Promise.resolve().then(t.bind(t,489))},489:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(7437),a=t(4597),s=t(2265),o=t(7648),i=t(2869),l=t(5186),d=t(8850),c=t(6818),u=t(5012);function h(){let[e,r]=(0,s.useState)({name:"",email:"",phone:"",background:""}),t=()=>{r({name:"",email:"",phone:"",background:""})},h=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,n.jsxs)("div",{className:"min-h-screen bg-black text-white",dir:"rtl",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("header",{className:"border-b border-red-800 backdrop-blur-xl bg-black/50",children:(0,n.jsx)("div",{className:"container py-4",children:(0,n.jsxs)(o.default,{href:"/",className:"inline-flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors",children:["חזרה לדף הבית",(0,n.jsx)(u.Z,{className:"w-4 h-4 mr-2"})]})})}),(0,n.jsx)("main",{className:"container py-12 md:py-16 lg:py-20",children:(0,n.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,n.jsxs)("div",{className:"mb-8 md:mb-12",children:[(0,n.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-l from-white to-red-500 bg-clip-text text-transparent",children:"מידע אישי"}),(0,n.jsx)("p",{className:"text-gray-400",children:"ספר לנו על עצמך ועל הרקע הרפואי שלך"})]}),(0,n.jsxs)("form",{onSubmit:r=>{a.Z.isUserExist()?(r.preventDefault(),a.Z.setDocument("PersonalInfo",e.phone,e.name,e.email,e.phone,e.background),console.log("Form submitted:",e)):alert("User has not signed in"),t()},className:"space-y-6",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(d._,{htmlFor:"name",className:"text-sm text-gray-300",children:"שם מלא"}),(0,n.jsx)(l.I,{id:"name",name:"name",value:e.name,onChange:h,className:"h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"הכנס את שמך המלא",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(d._,{htmlFor:"email",className:"text-sm text-gray-300",children:"כתובת אימייל"}),(0,n.jsx)(l.I,{id:"email",name:"email",type:"email",value:e.email,onChange:h,className:"h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"you@example.com",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(d._,{htmlFor:"phone",className:"text-sm text-gray-300",children:"מספר טלפון"}),(0,n.jsx)(l.I,{id:"phone",name:"phone",type:"tel",value:e.phone,onChange:h,className:"h-12 bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"050-1234567",required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(d._,{htmlFor:"background",className:"text-sm text-gray-300",children:"רקע רפואי"}),(0,n.jsx)(c.g,{id:"background",name:"background",value:e.background,onChange:h,className:"min-h-[120px] bg-white/5 border-red-800 text-white placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500",placeholder:"ספר לנו על הניסיון והכישורים הרפואיים שלך...",required:!0})]}),(0,n.jsx)(i.z,{type:"submit",className:"w-full h-12 bg-red-600 hover:bg-red-500 text-white font-medium transition-colors",children:"שלח בקשה"})]})]})})]})]})}},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(7437),a=t(2265),s=t(5293),o=t(535),i=t(4508);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:o,className:t})),ref:r,...c})});d.displayName="Button"},5186:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(7437),a=t(2265),s=t(4508);let o=a.forwardRef((e,r)=>{let{className:t,type:a,...o}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...o})});o.displayName="Input"},8850:function(e,r,t){"use strict";t.d(r,{_:function(){return u}});var n=t(7437),a=t(2265);t(4887);var s=t(5293),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=a.forwardRef((e,t)=>{let{asChild:a,...o}=e,i=a?s.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(i,{...o,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),i=a.forwardRef((e,r)=>(0,n.jsx)(o.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var l=t(535),d=t(4508);let c=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(i,{ref:r,className:(0,d.cn)(c(),t),...a})});u.displayName=i.displayName},6818:function(e,r,t){"use strict";t.d(r,{g:function(){return o}});var n=t(7437),a=t(2265),s=t(4508);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...a})});o.displayName="Textarea"},4597:function(e,r,t){"use strict";var n=t(738),a=t(4752),s=t(6834),o=t(5978);class i{authStateChanged(e){e?this.currentUser=e.uid:this.currentUser=null}isUserExist(){return this.currentUser}async signInWithGoogle(){try{let e=await (0,a.rh)(this.auth,this.googleProvider);console.log(e),this.currentUser=e.user.uid}catch(e){throw console.error("Error signing in with Google:",e),e}}async signOut(){try{null!=this.auth?(this.currentUser="",await (0,a.w7)(this.auth)):console.warn("Auth instance not found. Skipping sign out.")}catch(e){throw console.error("Error signing out:",e),e}}logAnalyticsEvent(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.analytics)try{(0,s.Kz)(this.analytics,e,r)}catch(e){console.error("Error logging analytics event:",e)}else console.warn("Analytics event logging skipped (window or analytics not available).")}async addDocument(e,r,t,n,a){try{return(await (0,o.ET)((0,o.hJ)(this.db,e),{experience:r,members:t,subject:n,teamName:a,userId:this.currentUser,createdAt:new Date})).id}catch(e){throw console.error("Error adding document:",e),e}}async setDocument(e,r,t,n,a,s){try{let i=(0,o.JU)(this.db,e,r);return await (0,o.pl)(i,{firstName:t,emailAddress:n,phoneNum:a,medicalInfo:s,userId:this.currentUser,updatedAt:new Date}),r}catch(e){throw console.error("Error setting document:",e),e}}async getDocument(e,r){try{let t=(0,o.JU)(this.db,e,r),n=await (0,o.QT)(t);if(n.exists())return{id:n.id,...n.data()};return null}catch(e){throw console.error("Error getting document:",e),e}}async getCollection(e){try{return(await (0,o.PL)((0,o.hJ)(this.db,e))).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error("Error getting collection:",e),e}}async queryDocuments(e,r,t,n){try{let a=(0,o.IO)((0,o.hJ)(this.db,e),(0,o.ar)(r,t,n));return(await (0,o.PL)(a)).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error("Error querying documents:",e),e}}constructor(){this.currentUser="";let e=(0,n.ZF)({apiKey:"AIzaSyCLXqeaqd6oNsd4lJ47M-h0VNtxin0_swE",authDomain:"bhd10-8a30d.firebaseapp.com",projectId:"bhd10-8a30d",storageBucket:"bhd10-8a30d.firebasestorage.app",messagingSenderId:"413037593495",appId:"1:413037593495:web:79debb18c56afcda23bad2",measurementId:"G-05PP9RDNCS"});this.auth=(0,a.v0)(e),this.googleProvider=new a.hJ,this.db=(0,o.ad)(e),console.log("firebase init"),(0,s.Gb)().then(r=>{r?this.analytics=(0,s.IH)(e):(console.warn("Analytics is not supported in this environment."),this.analytics=null)}).catch(e=>{console.error("Error checking analytics support:",e),this.analytics=null})}}let l=new i;r.Z=l},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(1994),a=t(3335);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},5012:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:r,...o,width:a,height:a,stroke:t,strokeWidth:l?24*Number(i)/Number(a):i,className:s("lucide",d),...h},[...u.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),l=((e,r)=>{let t=(0,n.forwardRef)((t,o)=>{let{className:l,...d}=t;return(0,n.createElement)(i,{ref:o,iconNode:r,className:s("lucide-".concat(a(e)),l),...d})});return t.displayName="".concat(e),t})("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},7648:function(e,r,t){"use strict";t.d(r,{default:function(){return a.a}});var n=t(2972),a=t.n(n)}},function(e){e.O(0,[358,400,772,972,971,117,744],function(){return e(e.s=5766)}),_N_E=e.O()}]);