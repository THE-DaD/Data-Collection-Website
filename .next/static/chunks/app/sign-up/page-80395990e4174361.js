(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{870:function(e,t,r){Promise.resolve().then(r.bind(r,3653))},3653:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),o=r(2869),i=r(4597);function s(){let e=async()=>{await i.Z.signInWithGoogle()};return(0,n.jsx)("div",{children:(0,n.jsx)(o.z,{onClick:e,children:"Sign With Google"})})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),o=r(2265),i=r(5293),s=r(535),a=r(4508);let c=(0,s.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:d=!1,...u}=e,l=d?i.g7:"button";return(0,n.jsx)(l,{className:(0,a.cn)(c({variant:o,size:s,className:r})),ref:t,...u})});d.displayName="Button"},4597:function(e,t,r){"use strict";var n=r(738),o=r(4752),i=r(6834),s=r(5978);class a{isUserExist(){return this.currentUser}async signInWithGoogle(){try{let e=await (0,o.rh)(this.auth,this.googleProvider);console.log(e),this.currentUser=e.user.uid}catch(e){throw console.error("Error signing in with Google:",e),e}}async signOut(){try{await this.auth.signOut(),this.logAnalyticsEvent("logout")}catch(e){throw console.error("Error signing out:",e),e}}logAnalyticsEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.analytics)try{(0,i.Kz)(this.analytics,e,t)}catch(e){console.error("Error logging analytics event:",e)}else console.warn("Analytics event logging skipped (window or analytics not available).")}async addDocument(e,t,r,n,o){try{return(await (0,s.ET)((0,s.hJ)(this.db,e),{expirence:t,members:r,subject:n,teamName:o,createdAt:new Date})).id}catch(e){throw console.error("Error adding document:",e),e}}async setDocument(e,t,r,n,o,i){try{return await (0,s.pl)((0,s.JU)(this.db,e,o),{firsName:r,emailAddress:n,phoneNum:o,medicalInfo:i,updatedAt:new Date}),t}catch(e){throw console.error("Error setting document:",e),e}}async getDocument(e,t){try{let r=(0,s.JU)(this.db,e,t),n=await (0,s.QT)(r);if(n.exists())return{id:n.id,...n.data()};return null}catch(e){throw console.error("Error getting document:",e),e}}async getCollection(e){try{return(await (0,s.PL)((0,s.hJ)(this.db,e))).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error("Error getting collection:",e),e}}async queryDocuments(e,t,r,n){try{let o=(0,s.IO)((0,s.hJ)(this.db,e),(0,s.ar)(t,r,n));return(await (0,s.PL)(o)).docs.map(e=>({id:e.id,...e.data()}))}catch(e){throw console.error("Error querying documents:",e),e}}constructor(){this.currentUser=null;let e=(0,n.ZF)({apiKey:"AIzaSyCLXqeaqd6oNsd4lJ47M-h0VNtxin0_swE",authDomain:"bhd10-8a30d.firebaseapp.com",projectId:"bhd10-8a30d",storageBucket:"bhd10-8a30d.firebasestorage.app",messagingSenderId:"413037593495",appId:"1:413037593495:web:79debb18c56afcda23bad2",measurementId:"G-05PP9RDNCS"});this.auth=(0,o.v0)(e),this.googleProvider=new o.hJ,this.db=(0,s.ad)(e),(0,i.Gb)().then(t=>{t?this.analytics=(0,i.IH)(e):(console.warn("Analytics is not supported in this environment."),this.analytics=null)}).catch(e=>{console.error("Error checking analytics support:",e),this.analytics=null})}}let c=new a;t.Z=c},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(1994),o=r(3335);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}}},function(e){e.O(0,[358,400,772,971,117,744],function(){return e(e.s=870)}),_N_E=e.O()}]);