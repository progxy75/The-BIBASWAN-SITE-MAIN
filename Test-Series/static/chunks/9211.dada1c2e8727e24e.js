"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9211],{71358:function(e,t,n){n.d(t,{y:function(){return r}});var l=n(2784),i=n(70867),a=n(20259),r=function(e){var t=(0,l.useState)(a.F[e]),n=t[0],r=t[1],o=(0,i.Y)(a.F);return(0,l.useEffect)(function(){if(o&&null==o.configInstance||!(null!=o&&o.configInstance)){console.warn("remoteContext context is null",o,e);return}var t=function(){r(o.configInstance.getFeatureFlag(e))};return t(),o.configInstance.on("updated",t),function(){var e;null===(e=o.configInstance)||void 0===e||e.off("updated",t)}},[e,o]),n}},33871:function(e,t,n){n.d(t,{$p:function(){return a},MN:function(){return r},eo:function(){return o},sk:function(){return i}});var l=n(89041),i=[{id:"tab_01",icon:"message-question",color:l._.PRIMARY,label:"Personal details",value:"profile",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"profile"}}}},{id:"tab_02",icon:"message-notification",color:l._.PRIMARY,label:"Noticeboard",value:"noticeboard",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"noticeboard"}}}},{id:"tab_03",icon:"receipt",color:l._.PRIMARY,label:"Order details",value:"order",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"order"}}}},{id:"tab_04",icon:"message-question",color:l._.PRIMARY,label:"Help & support",value:"help",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"help"}}}},{id:"tab_05",icon:"profile",color:l._.PRIMARY,label:"Manage address",value:"address",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"address"}}}},{id:"tab_06",icon:"setting-5",color:l._.PRIMARY,label:"Settings",value:"settings",action:{type:"NAVIGATION",data:{uri:"/profile",query:{view:"settings"}}}}],a=[{id:"footer_tab_01",label:"PRIVACY POLICY",value:"privacy-policy",action:{type:"NAVIGATION",data:{uri:"/privacy-policy"}}},{id:"footer_tab_02",label:"TERMS & CONDITION",value:"tnc",action:{type:"NAVIGATION",data:{uri:"/tnc"}}}],r={logo:{action:{type:"NAVIGATION",data:{uri:"/"}}},logo_uri:"",tabs:[{label:"Exams",sections:[{list:{items:[{label:"NEET",action:{type:"NAVIGATION",data:{uri:"/neet-ug"}}},{label:"JEE",action:{type:"NAVIGATION",data:{uri:"/jee-advanced"}}},{label:"Grade 6-10",action:{type:"NAVIGATION",data:{uri:"/grade-6-10"}}}]}}]},{label:"Programs",sections:[{list:{items:[{label:"Online Programs",action:{type:"NAVIGATION",data:{uri:"/ultimate-program-live-courses"}}},{label:"Classroom Programs",action:{type:"EXTERNAL_NAVIGATION",data:{url:"https://www.allen.ac.in/"}}},{label:"Distance Learning",action:{type:"EXTERNAL_NAVIGATION",data:{url:"https://dlp.allen.ac.in/"}}}]}}]},{label:"Scholarships",sections:[{list:{items:[{label:"ADSAT",action:{type:"NAVIGATION",data:{uri:"/adsat-register"}}},{label:"TALLENTEX",action:{type:"EXTERNAL_NAVIGATION",data:{url:"https://www.tallentex.com/"}}}]}}]},{label:"Test Series",tag_name:"NEW",action:{type:"NAVIGATION",data:{uri:"/online-test-series"}}}],cta:{label:"Login",action:{type:"SHOW_LOGIN_DRAWER",data:null}},callbackCta:{label:"Talk to us",action:{type:"NAVIGATION",data:{uri:"/schedule-a-call-back"}}}},o="Logout"},8830:function(e,t,n){n.d(t,{O_:function(){return o},_S:function(){return a},hY:function(){return c},s:function(){return r},zL:function(){return s}});var l=n(2101),i=n(33871),a={title:"Your profile",tabs:i.sk,footer_tabs:i.$p},r={PROFILE:"profile",NOTICEBOARD:"noticeboard",ORDER:"order",ADDRESS:"address",HELP:"help",SETTINGS:"settings"},o={ARROW_RIGHT_ICON:"arrow-right-simple",ARROW_COLOR:l.r$.WHITE,ARROW_RIGHT_ALT_TEXT:"Arrow Icon",LOG_OUT_LINK:"Logout",LOG_OUT_TEXT:"Are you sure you want to logout?",WEL_COME:"Welcome, ",FREE_USER:"FREE USER",MSG:"To manage your account and save your progress",LOGIN_BUTTON:"Login",CHANGE_LINK:"Change",TOGGLE_THEME:"Toggle Theme"},s={type:"NAVIGATION",data:{uri:"/profile"}},c={type:"SHOW_LOGIN_DRAWER",data:null}},19211:function(e,t,n){n.d(t,{Z:function(){return ee}});var l=n(95235),i=n(23769),a=n(2784),r=n(33871),o=n(6358),s=n(12524),c=n.n(s),d=n(86152),u=n.n(d),m=n(99695),v=n(87153),f=n(52801),x=n(20406),p=n(28526),h=n.n(p),b=n(92679),_=n(71859),N=n(42603),g=n(24862),y=n(74630),j=n(5632),O=n(8830),w=n(91636),I=n(38274),C=n(38617),A=n(62964),T=n(71358),L=n(91137),k=n(2642),E=n(17231),R=n(87453),G=n(59068),M=n(89041),S=n(61853),P=n(5530),V=n(52322),D=function(e){var t,n,l=e.closeProfileDropDown,i=O._S.tabs,a=O._S.footer_tabs,r=(0,j.useRouter)(),o=(0,E.T)(),s=(0,E.C)(L.Vf),c=(0,E.C)(f.P_),d=(0,E.C)(L.mO),u=(0,E.C)(L.jl),v=(0,E.C)(f.av),x=(0,E.T)(),p=(0,E.C)(L.Gi),h=(0,C.F)(),b=h.resolvedTheme,_=h.setTheme,N=(0,E.C)(L.G$),g=(0,T.y)("enable_theme_change"),y=(0,k.Z)(),D=function(e){l(),e&&(0,m.Y)(e)},K=function(){x((0,I.ON)())},W=function(){if(!y){K();return}(0,w.ne)()(o).then(function(){l(),_(P.bM.DARK)}),(0,A.sc)("LOGOUT_STUDENT_CONFIRM",{user_id:N,name:p})};return u?(0,V.jsxs)("div",{className:"w-64 right-5 md:right-auto rounded-xl bg-tertiary",children:[(0,V.jsxs)("div",{className:"flex justify-between cursor-pointer",onClick:function(){return D(O.zL)},children:[(0,V.jsx)("div",{className:"text-primary text-sm font-semibold leading-5",children:p}),(0,V.jsx)("div",{className:"w-6 h-6",children:(0,V.jsx)(R.fb,{url:"",name:O.O_.ARROW_RIGHT_ICON,themeColor:M._.PRIMARY,alt_text:O.O_.ARROW_RIGHT_ALT_TEXT,width:24,height:24,className:"w-full h-full"})})]}),(0,V.jsx)("div",{className:"mt-2 text-primary text-xs font-medium",children:s}),d&&(0,V.jsx)("div",{className:"w-fit bg-quaternary-light px-2 py-1 mt-3 rounded items-center",children:(0,V.jsx)("div",{className:"text-primary text-xs font-bold tracking-wide",children:d})}),(0,V.jsx)("div",{className:"mt-5",children:(0,V.jsx)("div",{className:"mt-5 flex-col space-y-6",children:i.map(function(e,t){var n,l;return t>0&&(0,V.jsxs)("div",{className:"flex gap-x-2 md:gap-x-5 text-primary-inverse",children:[(0,V.jsx)(R.fb,{url:"",name:null!==(n=null==e?void 0:e.icon)&&void 0!==n?n:"",themeColor:M._.PRIMARY,alt_text:null!==(l=null==e?void 0:e.icon)&&void 0!==l?l:"",width:24,height:24,className:"w-4 h-4 md:w-5 md:h-5"}),(0,V.jsx)("div",{className:"text-secondary text-xs md:text-sm font-medium cursor-pointer",onClick:function(){return D(e.action)},children:e.label})]},e.id)})})}),(0,V.jsxs)("div",{className:"flex justify-between",children:[(0,V.jsx)("div",{"data-testid":"dropdown_logout_btn",className:"mt-6 inline-flex text-accent text-xs md:text-sm font-medium cursor-pointer",onClick:function(){x((0,I.WF)({heading:O.O_.LOG_OUT_LINK,description:O.O_.LOG_OUT_TEXT,handleClose:K,primaryBtnLabel:O.O_.LOG_OUT_LINK,primaryBtnClick:W,secondaryBtnLabel:S.Z.CANCEL,secondaryBtnClick:K,popupSize:"sm"})),l()},children:O.O_.LOG_OUT_LINK}),g?(0,V.jsx)("div",{className:"inline-flex",onClick:function(){_(b===P.bM.DARK?P.bM.LIGHT:P.bM.DARK),r.reload()},children:(0,V.jsx)("div",{className:"mt-6 inline-flex text-accent text-xs md:text-sm font-medium cursor-pointer",children:O.O_.TOGGLE_THEME})}):(0,V.jsx)(V.Fragment,{})]}),(0,V.jsx)("div",{className:"mt-4 w-full h-1 border-b border-dashed border-tertiary"}),(0,V.jsx)("div",{className:"mt-4 flex flex-wrap gap-y-2 gap-x-4",children:a.map(function(e){return(0,V.jsx)("div",{className:"text-tertiary text-3xs md:text-2xs font-semibold tracking-wide cursor-pointer",onClick:function(){return D(e.action)},children:e.label},e.id)})})]}):(0,V.jsxs)("div",{className:"w-64 rounded-xl bg-tertiary p-0 md:p-4",children:[(0,V.jsxs)("div",{className:"text-primary text-sm font-semibold leading-5",children:[O.O_.WEL_COME,null!==(t=null==v?void 0:null===(n=v.full_name)||void 0===n?void 0:n.value)&&void 0!==t?t:""]}),(0,V.jsxs)("div",{className:"mt-2 text-secondary-disabled text-xs font-medium flex items-center justify-between",children:[c,(0,V.jsx)("div",{className:"text-accent font-semibold cursor-pointer",onClick:function(){o((0,I.Sn)()),l()},children:O.O_.CHANGE_LINK})]}),(0,V.jsx)("div",{className:"flex mt-2",children:(0,V.jsx)("div",{className:"p-2 rounded text-primary text-2xs font-bold tracking-wider bg-gradient-to-r from-profileDropDownStart from-5.26 to-profileDropDownEnd to-127.63",children:O.O_.FREE_USER})}),(0,V.jsx)("div",{className:"my-4 w-full h-1 border-b border-dashed border-tertiary"}),(0,V.jsx)("div",{className:"mb-4 w-4/5 text-xs leading-4 text-primary-disabled",children:O.O_.MSG}),(0,V.jsx)(G.Z,{text:O.O_.LOGIN_BUTTON,onClick:function(){return D(O.hY)},className:"py-3 rounded-[100px] flex items-center justify-center w-24 bg-primary-inverse text-primary-inverse text-base font-semibold leading-4"})]})},K=n(7019),W=n(52034),B=n(18299);function H(e){var t,n,l,i,s=e.data,d=(0,E.T)(),p=(0,j.useRouter)(),C=(0,a.useState)(!1),A=C[0],T=C[1],k=(0,a.useState)(null),G=k[0],P=k[1],H=function(e){P(function(t){return t===e?null:e})},U=(0,E.C)(L.jl),Y=(0,a.useState)(!1),F=Y[0],Z=Y[1],z=(0,E.C)(f.cs),X=(0,E.C)(f.sF),q=(0,E.C)(L.Gi),$=(0,E.C)(L.mO),J=(0,a.useCallback)(function(){return U?q:z&&null!=X&&X.full_name&&"string"==typeof(null==X?void 0:X.full_name)?X.full_name:""},[U,q,z,null==X?void 0:X.full_name])(),Q=function(){T(!1)};(0,a.useEffect)(function(){return function(){return T(!1)}},[]);var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,v.K)({event_name:B.W1.BUTTON_CLICK,event_properties:{current_screen_section:"header",flow:"",button_name:e}})},et=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,v.K)({event_name:B.W1.BUTTON_CLICK,event_properties:{current_screen_section:"header",flow:"",button_name:t}}),null!=e&&void 0!=e&&(T(!1),(0,m.Y)(e))},en=function(e){(0,v.K)({event_name:B.W1.NAV_BAR_CLICK,event_properties:{current_screen_section:"header",flow:"",tab_name:"Allen",tab_position:"0"}}),e&&(T(!1),(0,m.Y)(e))},el=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"headerTab",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,v.K)({event_name:B.W1.DROPDOWN_CLICK,event_properties:{current_screen_section:"header",flow:"",section_name:e}}),H(t)},ei=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";(0,v.K)({event_name:B.W1.NAV_BAR_SELECTION_CLICK,event_properties:{current_screen_section:"header",flow:"",section_name:t,sub_section_name:n,link_text_cta:l}}),e&&(0,m.Y)(e),T(!1)},ea=(t=(0,x.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ee(r.eo),e.next=3,(0,w.ne)()(d).then(function(){T(!1),p.push("/")});case 3:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),er=function(){d((0,I.ON)())},eo=function(){d((0,I.WF)({heading:O.O_.LOG_OUT_LINK,description:O.O_.LOG_OUT_TEXT,handleClose:er,primaryBtnLabel:O.O_.LOG_OUT_LINK,primaryBtnClick:ea,secondaryBtnLabel:S.Z.CANCEL,secondaryBtnClick:er,popupSize:"sm"})),T(!1)};return(0,a.useEffect)(function(){return A?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),function(){document.body.classList.remove("overflow-hidden")}},[A]),(0,V.jsxs)("div",{className:"sticky bg-primary top-0 z-100 lg:hidden",children:[(0,V.jsx)("div",{className:"relative container py-4 flex items-center justify-between cursor-default z-50",children:(0,V.jsxs)("div",{className:"flex items-center content-center w-full justify-between",children:[(0,V.jsxs)("div",{className:"flex items-center",children:[(0,V.jsx)(N.Z,{"data-testid":"menuIcon",className:"cursor-pointer mr-2 self-center",onClick:function(){(0,v.K)({event_name:B.W1.BUTTON_CLICK,event_properties:{current_screen_section:"header",flow:"",button_name:"Hamburger Menu"}}),T(!0)}}),(0,V.jsxs)("div",{onClick:function(){var e;return en(null==s?void 0:null===(e=s.logo)||void 0===e?void 0:e.action)},children:[(0,V.jsx)("div",{className:"dark:hidden block",children:(0,V.jsx)(R.fb,{url:"/logo_light.svg",alt_text:"ALLEN",className:"object-contain w-18 h-3.5","data-testId":"logo",width:10,height:10,name:""})}),(0,V.jsx)("div",{className:"hidden dark:block",children:(0,V.jsx)(R.fb,{url:"/logo_dark.svg",alt_text:"ALLEN",className:"object-contain w-18 h-3.5","data-testId":"logo",width:10,height:10,name:""})})]})]}),(0,V.jsxs)("div",{className:"flex items-center",children:[(null==s?void 0:s.callbackCta)&&!$&&(0,V.jsxs)("div",{className:"flex items-center space-x-3 text-info text-xs font-semibold leading-5 mr-4",onClick:function(){var e,t,n;return et(null==s?void 0:null===(e=s.callbackCta)||void 0===e?void 0:e.action,null!==(t=null===(n=s.callbackCta)||void 0===n?void 0:n.label)&&void 0!==t?t:"")},children:[(0,V.jsx)(R.fb,{name:"call-calling-bold",url:"",width:24,height:24,alt_text:"",themeColor:M._.INFO}),(0,V.jsx)("div",{children:null===(n=s.callbackCta)||void 0===n?void 0:n.label})]}),(U||z)&&(0,V.jsxs)(o.Menu,{open:F,handler:Z,allowHover:!0,children:[(0,V.jsx)(o.MenuHandler,{children:(0,V.jsx)("div",{className:"flex items-center gap-x-2 cursor-pointer",children:(0,V.jsx)(W.Z,{userNameInital:null==J?void 0:null===(l=J.charAt(0))||void 0===l?void 0:l.toUpperCase(),avatarSize:10,type:"withUserName"})})}),(0,V.jsx)(o.MenuList,{placeholder:"menu",className:"flex items-start justify-between bg-tertiary rounded-xl px-5 py-4 mt-2",children:(0,V.jsx)(D,{closeProfileDropDown:function(){return Z(!1)}})})]})]})]})}),(0,V.jsx)(y.ZP,{variant:"persistent",anchor:"left",open:A,onClose:function(){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&Q()}},ModalProps:{hideBackdrop:!1,keepMounted:!1},PaperProps:{style:{border:0}},children:(0,V.jsxs)(g.Z,{role:"presentation",className:"flex flex-col flex-1 w-[calc(100vw-4rem)] bg-secondary",children:[(0,V.jsxs)("div",{className:"py-8 pl-4 flex justify-between",children:[(0,V.jsxs)("div",{className:"flex self-center",onClick:function(){var e;return en(null==s?void 0:null===(e=s.logo)||void 0===e?void 0:e.action)},children:[(0,V.jsx)("div",{className:"dark:hidden block cursor-pointer",children:(0,V.jsx)(R.fb,{url:"/logo_light.svg",alt_text:"ALLEN",className:"object-contain w-18 h-3.5","data-testId":"logo",width:10,height:10,name:""})}),(0,V.jsx)("div",{className:"hidden dark:block cursor-pointer",children:(0,V.jsx)(R.fb,{url:"/logo_dark.svg",alt_text:"ALLEN",className:"object-contain w-18 h-3.5","data-testId":"logo",width:10,height:10,name:""})})]}),(0,V.jsx)(b.Z,{"data-testid":"closeIcon",className:"self-center text-primary mx-4",onClick:Q})]}),u()(null==s?void 0:s.tabs)&&(0,V.jsx)("div",{className:"mt-4 mx-5",children:s.tabs.map(function(e,t){var n,l;return null!=e&&e.sections&&(null==e?void 0:null===(n=e.sections)||void 0===n?void 0:n.length)>0?(0,V.jsxs)(o.Accordion,{placeholder:"accordion",open:G===t,icon:(0,V.jsx)(_.Z,{className:c()("mx-auto text-primary h-4 w-4 transition-transform",{"rotate-180":G===t})}),children:[(0,V.jsx)(o.AccordionHeader,{placeholder:e.label,onClick:function(){return el(e.label,t)},className:"border-b-0 py-2",children:(0,V.jsx)(o.Typography,{placeholder:e.label,className:c()("mr-auto text-sm font-light hover:font-semibold text-primary",{"font-semibold":G===t}),children:e.label})}),(0,V.jsx)(o.AccordionBody,{className:"mt-2 border-y border-primary",children:null==e?void 0:null===(l=e.sections)||void 0===l?void 0:l.map(function(t,n){return(0,V.jsxs)(o.List,{placeholder:t.list.title,className:"p-0",children:[t.list.title&&(0,V.jsx)(o.Typography,{className:"mr-auto text-xs py-2 font-bold text-accent",placeholder:t.list.title,children:t.list.title}),t.list.items.map(function(l){return(0,V.jsx)(o.ListItem,{placeholder:l.label,className:"py-2 ml-2",onClick:function(){return ei(null==l?void 0:l.action,t.list.title,e.label,l.label)},children:(0,V.jsx)(o.Typography,{placeholder:l.label,className:"mr-auto text-sm py-2 font-normal text-primary hover:font-semibold",children:(0,V.jsx)(K.Z,{cta:l})})},"".concat(e.label,"_menu_").concat(n,"_").concat(l.label))})]},"".concat(t.list.title,"_menu_").concat(n))})})]},"".concat(e.label,"_").concat(t)):(0,V.jsxs)(o.Typography,{onClick:function(){return et(null==e?void 0:e.action,e.label)},className:"flex flex-row items-center gap-2 mr-auto text-sm py-4 font-light text-primary hover:font-semibold",placeholder:e.label,children:[e.label,(null==e?void 0:e.tag_name)&&(0,V.jsx)("span",{className:"px-1.5 leading-4 tracking-wide bg-warning pt-0 text-3xs font-bold text-bgPrimary rounded-r-lg rounded-l-lg",children:e.tag_name})]},"".concat(e.label,"_").concat(t))})}),(0,V.jsx)("div",{className:"h-8 mt-8 py-8 pl-4 rounded-full justify-start items-center inline-flex",children:(0,V.jsx)("div",{"data-testid":"ctaButton",className:"text-accent text-base md:text-lg font-semibold cursor-pointer",onClick:function(){var e,t;return U?eo():et(null===r.MN||void 0===r.MN?void 0:null===(e=r.MN.cta)||void 0===e?void 0:e.action,null===r.MN||void 0===r.MN?void 0:null===(t=r.MN.cta)||void 0===t?void 0:t.label)},children:U?r.eo:null===r.MN||void 0===r.MN?void 0:null===(i=r.MN.cta)||void 0===i?void 0:i.label})})]})})]})}var U=n(22002),Y=n(83460),F=n(44124),Z=n(84703),z=function(e){var t=e.data,n=e.section,l=e.menuIndex;if(!(null!=t&&t.length))return(0,V.jsx)(V.Fragment,{});var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(e){switch(null==e?void 0:e.type){case U.e.NAVIGATION:case U.e.EXTERNAL_NAVIGATION:break;default:(0,m.Y)(e)}(0,v.K)({event_name:B.W1.NAV_BAR_SELECTION_CLICK,event_properties:{current_screen_section:"header",flow:"",section_name:n,sub_section_name:t,link_text_cta:i}}),(0,Z.rV)({event:Y.F.navigation_bar_clicked,data:{name:n,position:l+1,clicked_subtype_name:t}});try{(0,Z.rV)({event:Y.F.stream_selection,data:{stream:i}})}catch(e){console.log("Error in sending event to GTM")}}};return(0,V.jsx)(o.MenuList,{placeholder:"menu",className:"flex items-start justify-between relative bg-tertiary rounded-xl p-4 mt-2",id:"headerTabDropDown",children:null==t?void 0:t.map(function(e,t){var n=e.list,l=n.items,a=n.title;return(0,V.jsx)(o.MenuItem,{placeholder:"menu",className:"w-fit cursor-default",children:(0,V.jsxs)("div",{className:c()("flex flex-col gap-y-5",{"border-l-2 border-dashed border-primary pl-6":t>0}),children:[a&&(0,V.jsx)("div",{className:"text-accent text-xs font-bold leading-4 tracking-wider uppercase",children:a}),(0,V.jsx)("ul",{className:"list-none flex flex-col gap-y-5",children:l&&(null==l?void 0:l.map(function(e){var t,n,l,r,o,s;return(0,V.jsx)("li",{className:c()("text-primary non-italic leading-5 cursor-pointer",{"text-base font-semibold":(0,F.Hl)(null==e?void 0:null===(t=e.action)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:null===(l=n.uri)||void 0===l?void 0:l.split("/").at(-1)),"text-sm font-normal":!(0,F.Hl)(null==e?void 0:null===(r=e.action)||void 0===r?void 0:null===(o=r.data)||void 0===o?void 0:null===(s=o.uri)||void 0===s?void 0:s.split("/").at(-1))}),onClick:function(){return i(null==e?void 0:e.action,a,null==e?void 0:e.label)},children:(0,V.jsx)(K.Z,{cta:e})},null==e?void 0:e.label)}))})]})},t+"item")})})},X=function(e){var t,n=e.menu,l=e.index,i=(0,a.useState)(!1),r=i[0],s=i[1],d=function(){(0,v.K)({event_name:B.W1.NAV_BAR_CLICK,event_properties:{current_screen_section:"header",flow:"",tab_name:null==n?void 0:n.label,tab_position:l+""}}),null!=n&&n.action&&((0,m.Y)(n.action),s(!1),(0,Z.rV)({event:Y.F.navigation_bar_clicked,data:{name:null==n?void 0:n.label,position:l+1,clicked_subtype_name:""}}))};return(0,a.useEffect)(function(){var e=function(){s(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),null!=n&&n.action?(0,V.jsxs)("div",{"data-testid":null==n?void 0:n.label,onClick:d,className:c()("relative group text-base font-medium leading-6 text-primary cursor-pointer",{"mr-8":null==n?void 0:n.tag_name}),children:[(0,V.jsx)("div",{className:"text-center text-nowrap",children:null==n?void 0:n.label}),(null==n?void 0:n.tag_name)&&(0,V.jsx)("span",{className:"absolute -right-1 top-3 -translate-y-full translate-x-full px-1.5 leading-4.5 tracking-wide bg-warning pt-[1px] text-2xs font-bold text-bgPrimary rounded-r-lg rounded-t-lg",children:n.tag_name}),(0,V.jsx)("div",{className:"bar h-1 mt-2 rounded-xl group-hover:bg-accent"})]}):(0,V.jsxs)(o.Menu,{open:r,handler:s,allowHover:!0,children:[(0,V.jsx)(o.MenuHandler,{children:(0,V.jsxs)("div",{"data-testid":null==n?void 0:n.label,onClick:d,className:"text-base font-medium leading-6 text-primary cursor-pointer flex-col items-center justify-center",children:[(0,V.jsx)("div",{className:"text-center",children:null==n?void 0:n.label}),(0,V.jsx)("div",{className:c()("bar h-1 mt-2 rounded-xl",{"bg-accent":r})})]})}),(null==n?void 0:n.sections)&&(0,V.jsx)(z,{data:null==n?void 0:n.sections,section:null!==(t=null==n?void 0:n.label)&&void 0!==t?t:"",menuIndex:l})]})};function q(e){var t,n,l,i=e.data,r=(0,a.useState)(!1),s=r[0],d=r[1],x=(0,E.C)(L.Vf),p=(0,E.C)(L.jl),h=(0,E.C)(f.cs),b=(0,E.C)(f.sF),_=(0,E.C)(f.P_),N=(0,E.C)(L.Gi),g=(0,E.C)(L.mO),y=(0,a.useCallback)(function(){return p?N:h?null==b?void 0:b.full_name:""},[p,N,h,null==b?void 0:b.full_name])(),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null!=e&&void 0!=e&&((0,v.K)({event_name:B.W1.BUTTON_CLICK,event_properties:{current_screen_section:"header",flow:"",button_name:t}}),(0,m.Y)(e))},O=function(e){e&&((0,m.Y)(e),(0,v.K)({event_name:B.W1.NAV_BAR_CLICK,event_properties:{current_screen_section:"header",flow:"",tab_name:"Allen",tab_position:"0"}}))};return(0,a.useEffect)(function(){return s?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),function(){document.body.classList.remove("overflow-hidden")}},[s]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:c()("sticky top-0 z-100 bg-primary",{"border-b border-tertiary":g}),children:(0,V.jsxs)("div",{className:"hidden container min-h-10v 2xl:min-h-auto lg:px-28 py-0 lg:flex items-stretch justify-between cursor-default sticky top-0 z-100",children:[(0,V.jsxs)("div",{className:"w-3/5 flex items-center",children:[(0,V.jsxs)("div",{className:"w-32 h-8",onClick:function(){return O(i.logo.action)},children:[(0,V.jsx)("div",{className:"dark:hidden block",children:(0,V.jsx)(R.fb,{url:"/logo_light.svg",name:"",alt_text:"ALLEN",width:0,height:0,className:"w-full h-8 cursor-pointer",testId:"cardImage"})}),(0,V.jsx)("div",{className:"hidden dark:block",children:(0,V.jsx)(R.fb,{url:"/logo_dark.svg",name:"",alt_text:"ALLEN",width:0,height:0,className:"w-full h-8 cursor-pointer",testId:"cardImage"})})]}),!g&&(0,V.jsx)("div",{className:"ml-10 xl:ml-14 gap-x-6 xl:gap-x-8 self-end pb-4 flex items-center justify-center",children:u()(null==i?void 0:i.tabs)&&i.tabs.map(function(e,t){return(0,V.jsx)(a.Fragment,{children:(0,V.jsx)(X,{menu:e,index:t})},null==e?void 0:e.label)})})]}),(0,V.jsxs)("div",{className:"relative w-2/5 flex py-4 justify-end",children:[(null==i?void 0:i.callbackCta)&&!g&&(0,V.jsxs)("div",{className:"ml-0 mr-5 my-1 px-4 py-2 font-medium bg-primary-inverse text-primary-inverse leading-5 rounded-full flex items-center justify-center space-x-3 truncate cursor-pointer",onClick:function(){var e,t,n;return j(null===(e=i.callbackCta)||void 0===e?void 0:e.action,null!==(t=null===(n=i.callbackCta)||void 0===n?void 0:n.label)&&void 0!==t?t:"")},children:[(0,V.jsx)(R.fb,{name:"call-calling-bold",url:"",width:24,height:24,alt_text:"",themeColor:M._.CONTENT_PRIMARY_INVERSE}),(0,V.jsx)("div",{children:null===(t=i.callbackCta)||void 0===t?void 0:t.label})]}),(null==i?void 0:i.cta)&&!p&&!h&&(0,V.jsx)("div",{children:(0,V.jsx)(G.Z,{testId:"loginCtaButton",fontSize:"sm",type:"submit",text:null===(n=i.cta)||void 0===n?void 0:n.label,className:"w-full py-3 font-medium bg-primary text-primary leading-5 rounded-full flex items-center justify-center truncate text-base",onClick:function(){var e,t,n;return j(null===(e=i.cta)||void 0===e?void 0:e.action,null!==(t=null===(n=i.cta)||void 0===n?void 0:n.label)&&void 0!==t?t:"Login/signup")}})}),(p||h)&&(0,V.jsxs)(o.Menu,{open:s,handler:d,allowHover:!0,children:[(0,V.jsx)(o.MenuHandler,{children:(0,V.jsxs)("div",{className:"flex items-center gap-x-2 cursor-pointer",children:[(0,V.jsx)(W.Z,{userNameInital:null==y?void 0:null===(l=y.charAt(0))||void 0===l?void 0:l.toUpperCase(),avatarSize:10,type:"withUserName"}),(0,V.jsxs)("div",{className:"min-w-fit",children:[(0,V.jsx)("div",{"data-testid":"user-name",className:"text-primary text-xs font-medium",children:y}),(x||_)&&(0,V.jsx)("div",{"data-testid":"user-title",className:"mt-1 text-primary text-2xs",children:p?x:_})]})]})}),(0,V.jsx)(o.MenuList,{placeholder:"menu",className:"flex items-start justify-between bg-tertiary rounded-xl px-5 py-4 mt-2",children:(0,V.jsx)(D,{closeProfileDropDown:function(){return d(!1)}})})]})]})]})}),(0,V.jsx)(H,{data:i})]})}var $=function(){return(0,V.jsx)(q,{data:r.MN})},J=n(64599);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,l)}return n}function ee(e){return function(t){var n=(0,i.Z)({},t);return(0,V.jsxs)("div",{className:"bg-primary min-h-screen min-w-fit",children:[!(0,J.SI)()&&(0,V.jsx)($,{}),(0,V.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n))]})}}}}]);
//# sourceMappingURL=9211.dada1c2e8727e24e.js.map