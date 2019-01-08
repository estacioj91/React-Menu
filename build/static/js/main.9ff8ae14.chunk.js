(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(71)},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(20),i=a(12),o=a(5),c=a(6),l=a(8),u=a(7),m=a(9),h=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"top"},n.a.createElement("h1",null,e.name,n.a.createElement("span",{className:"ofThe"},n.a.createElement("span",{className:"of"},"Of"),n.a.createElement("span",{className:"the"},"The")),"Day"),n.a.createElement("h3",{className:"tagline"},n.a.createElement("span",null,e.tagline))))},p=a(11),f=a.n(p),d=a(15),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).nameRef=n.a.createRef(),a.priceRef=n.a.createRef(),a.statusRef=n.a.createRef(),a.descRef=n.a.createRef(),a.imageRef=n.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{action:"",className:"fish-edit",onSubmit:this.createFish},n.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),n.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),n.a.createElement("select",{name:"status",ref:this.statusRef,placeholder:"Status"},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),n.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),n.a.createElement("button",{type:"submit"},"+ Add Item"))}}]),t}(n.a.Component),v=a(21),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){var t=Object(i.a)({},a.props.fish,Object(v.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateItem(a.props.index,t)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"fish-edit"},n.a.createElement("input",{name:"name",value:this.props.fish.name,ref:this.nameRef,type:"text",onChange:this.handleChange}),n.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",value:this.props.fish.price,onChange:this.handleChange}),n.a.createElement("select",{name:"status",ref:this.statusRef,value:this.props.fish.status,onChange:this.handleChange},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",ref:this.descRef,value:this.props.fish.desc,onChange:this.handleChange}),n.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",value:this.props.fish.image,onChange:this.handleChange}),n.a.createElement("button",{onClick:function(){e.props.deleteItem(e.props.index)}},"Remove Item"))}}]),t}(n.a.Component),y=function(e){return n.a.createElement("nav",null,n.a.createElement("h2",null,"Login"),n.a.createElement("p",null,"Sign in to manage your store's inventory."),n.a.createElement("button",{className:"facebook",onClick:function(t){e.authenticate("Facebook")}},"Log In With Facebook"))},O=a(14),S=a.n(O),E=a(31),N=a.n(E),j=S.a.initializeApp({apiKey:"AIzaSyA3tczfT-BN6nOAKFN0a5d_hX9R4DxSNHM",authDomain:"catch-of-the-day-john-e.firebaseapp.com",databaseURL:"https://catch-of-the-day-john-e.firebaseio.com"}),k=N.a.createClass(j.database()),w={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},C={cut1:{name:"Slow Roaster Prime Rib",image:"/images/prime-rib.png",desc:"Seasoned with an herb crust, served with au jus and hand-carved to order. Choose either original roasted or wood-fire grilled.",price:2699,status:"available"},cut2:{name:"Bone-in Natural Cut Ribeye",image:"/images/bone-in-ribeye.png",desc:"Bone-in and extra marbled for maximum tenderness. Seasoned and wood-fire grilled over oak.",price:3149,status:"available"},cut3:{name:"Melbourne Porterhouse",image:"/images/melbourne-porterhouse.png",desc:"Porterhouse features a flavorful strip and filet tenderloin together. Seasoned with our special blend of herbs and spices then seared.",price:3149,status:"available"},cut4:{name:"Outback Center Cut Sirloin",image:"/images/center-sirloin.png",desc:"Center-cut for tenderness. Lean, hearty and full of flavor. Seasoned and seared. ",price:2179,status:"available"},cut5:{name:"Ayers Rock NY Strip",image:"/images/ayers-ny-strip.png",desc:"NY Strip full of rich flavor. Seasoned and seared to perfection.",price:2599,status:"available"},cut6:{name:"Victoria's Filet Migon",image:"/images/filet-mignon.png",desc:"The most tender and juicy thick cut seasoned and seared.!",price:2899,status:"available"}},I=(a(52),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadSampleFishes=function(){a.setState({fishes:w})},a.loadSampleCuts=function(){a.setState({cuts:C})},a.addFish=function(e){var t=Object(i.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var s=Object(i.a)({},a.state.fishes);s[e]=t,a.setState({fishes:s})},a.updateCut=function(e,t){var s=Object(i.a)({},a.state.cuts);s[e]=t,a.setState({cuts:s})},a.deleteFish=function(e){var t=Object(i.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t}),localStorage.getItem("guest-fishes")&&(delete t[e],localStorage.setItem("guest-fishes",JSON.stringify(t)))},a.deleteCuts=function(e){var t=Object(i.a)({},a.state.cuts);t[e]=null,a.setState({cuts:t}),localStorage.getItem("guest-cuts")&&(delete t[e],localStorage.setItem("guest-cuts",JSON.stringify(t)))},a.logout=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.auth().signOut();case 2:a.setState({uid:null}),a.props.history.go(-2);case 4:case"end":return e.stop()}},e,this)})),a.returnToOptions=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.history.goBack("/".concat(a.storeName));case 1:case"end":return e.stop()}},e,this)})),a.storeName=a.props.location.state.storeName,a.uid=a.props.location.state.uid,a.owner=a.props.location.state.owner,a.fishes=a.props.location.state.fishes,a.cuts=a.props.location.state.cuts,a.state={uid:a.uid,owner:a.owner,fishes:a.fishes,cuts:a.cuts},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){if(localStorage.getItem("guest-fishes")){JSON.stringify(this.state.fishes);localStorage.setItem("guest-fishes",JSON.stringify(this.state.fishes))}if(localStorage.getItem("guest-cuts")){JSON.stringify(this.state.cuts);localStorage.setItem("guest-cuts",JSON.stringify(this.state.cuts))}}},{key:"componentDidMount",value:function(){if("default"!==this.uid)this.ref=k.syncState("".concat(this.storeName,"/fishes"),{context:this,state:"fishes"}),this.ref=k.syncState("".concat(this.storeName,"/cuts"),{context:this,state:"cuts"});else{var e=localStorage.getItem("guest-fishes");e&&this.setState({fishes:JSON.parse(e)});var t=localStorage.getItem("guest-cuts");t&&this.setState({cuts:JSON.parse(t)})}}},{key:"render",value:function(){var e=this,t=n.a.createElement("button",{onClick:this.logout},"Log Out!"),a=n.a.createElement("button",{onClick:this.returnToOptions},"Back");return n.a.createElement("div",{className:"catch-of-the-day"},n.a.createElement("div",{className:"inventory"},n.a.createElement("h2",null,"Inventory"),a,"default"===this.storeName?"":t,Object.keys(this.state.fishes).map(function(t){return n.a.createElement(b,{updateItem:e.updateFish,key:t,index:t,fish:e.state.fishes[t],deleteItem:e.deleteFish})}),n.a.createElement(g,{addFish:this.addFish}),n.a.createElement("button",{onClick:this.loadSampleFishes},"Load Sample Fishes")),n.a.createElement("div",{className:"inventory"},n.a.createElement("h2",null,"Inventory"),Object.keys(this.state.cuts).map(function(t){return n.a.createElement(b,{updateItem:e.updateCut,key:t,index:t,fish:e.state.cuts[t],deleteItem:e.deleteCuts})}),n.a.createElement(g,{addFish:this.addFish}),n.a.createElement("button",{onClick:this.loadSampleCuts},"Load Sample Steaks")))}}]),t}(n.a.Component));function x(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}var R=a(18),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderOrder=function(e){var t=a.props.fishes[e]||{},s=a.props.cuts[e]||{},r=a.props.order[e],i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t&&"available"===t.status||s&&"available"===s.status?n.a.createElement(R.CSSTransition,i,n.a.createElement("li",{key:e},n.a.createElement("span",null,n.a.createElement(R.TransitionGroup,{component:"span",className:"count"},n.a.createElement(R.CSSTransition,{classNames:"count",key:r,timeout:{enter:500,exit:500}},n.a.createElement("span",null,r))),t.name?"lbs":"-"," ",t.name||s.name," ",x(r*(t.price||s.price)),n.a.createElement("button",{onClick:function(){a.props.removeFromOrder(e)}},"\xd7")))):n.a.createElement(R.CSSTransition,i,n.a.createElement("li",null,"Sorry ",t?t.name:"fish"," is no longer avaiable"))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var s=e.props.fishes[a]||{},n=e.props.cuts[a]||{},r=e.props.order[a];return s&&"available"===s.status||n&&"available"===n.status?t+r*(s.price||n.price):t},0);return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null,"Order"),n.a.createElement(R.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),n.a.createElement("div",{className:"total"},n.a.createElement("strong",null,"Total: ",x(a))))}}]),t}(n.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,s=t.name,r=t.price,i=t.desc,o="available"===t.status;return n.a.createElement("li",{className:"menu-fish"},n.a.createElement("img",{src:a,alt:s}),n.a.createElement("h3",{className:"fish-name"},s,n.a.createElement("span",{className:"price"},x(r))),n.a.createElement("p",null,i),n.a.createElement("button",{disabled:!o,onClick:function(){return e.props.addToOrder(e.props.index)}},o?"ADD TO Order":"SOLD OUT"))}}]),t}(n.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={order:{}},a.addToOrder=function(e){var t=Object(i.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(i.a)({},a.state.order);delete t[e],a.setState({order:t})},a.returnToOptions=function(){a.props.history.goBack("/".concat(a.storeName))},a.storeName=a.props.location.state.storeName,a.uid=a.props.location.state.uid,a.owner=a.props.location.state.owner,a.fishes=a.props.location.state.fishes,a.cuts=a.props.location.state.cuts,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=k.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"}),this.ref=k.syncState("".concat(e.storeId,"/cuts"),{context:this,state:"cuts"});var a=localStorage.getItem("guest-fishes");a&&(this.fishes=JSON.parse(a));var s=localStorage.getItem("guest-cuts");s&&(this.cuts=JSON.parse(s))}},{key:"componentWillUnmount",value:function(){k.removeBinding(this.ref)}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this,t=n.a.createElement("button",{onClick:this.returnToOptions},"Back");return n.a.createElement("div",{className:"catch-of-the-day"},n.a.createElement("div",{className:"menu"},t,n.a.createElement(h,{name:"Catch",tagline:"FRESH SEAFOOD MARKET"}),n.a.createElement("ul",{className:"fishes"},Object.keys(this.fishes).map(function(t){return n.a.createElement(F,{key:t,index:t,details:e.fishes[t],addToOrder:e.addToOrder})}))),n.a.createElement(T,{fishes:this.fishes,cuts:this.cuts,order:this.state.order,removeFromOrder:this.removeFromOrder}),n.a.createElement("div",{className:"menu"},n.a.createElement(h,{name:"Steak",tagline:"FRESH Steak MARKET"}),n.a.createElement("ul",{className:"fishes"},Object.keys(this.cuts).map(function(t){return n.a.createElement(F,{key:t,index:t,details:e.cuts[t],addToOrder:e.addToOrder})}))))}}]),t}(n.a.Component),J=a(73),D=a(75),M=a(74),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fishes:{},cuts:{}},a.goToStore=function(e){a.props.history.push({pathname:"/store/".concat(a.storeName,"/menu"),state:{uid:a.uid,owner:a.owner,storeName:a.storeName,fishes:a.state.fishes,cuts:a.state.cuts}})},a.goToInventory=function(e){a.props.history.push({pathname:"/store/".concat(a.storeName,"/inventory"),state:{uid:a.uid,owner:a.owner,fishes:a.state.fishes,cuts:a.state.cuts,storeName:a.storeName}})},a.logout=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.auth().signOut();case 2:a.setState({uid:null}),a.props.history.goBack("/");case 4:case"end":return e.stop()}},e,this)})),a.storeName=a.props.location.state.storeName,a.uid=a.props.location.state.uid,a.owner=a.props.location.state.owner,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"default"!==this.uid?(this.ref=k.syncState("".concat(this.storeName,"/fishes"),{context:this,state:"fishes"}),this.ref=k.syncState("".concat(this.storeName,"/cuts"),{context:this,state:"cuts"})):(localStorage.getItem("guest-fishes")||(localStorage.setItem("guest-fishes",JSON.stringify(this.state.fishes)),localStorage.setItem("guest-cuts",JSON.stringify(this.state.cuts))),localStorage.getItem("guest-cuts")||(localStorage.setItem("guest-cuts",JSON.stringify(this.state.fishes)),localStorage.setItem("guest-cuts",JSON.stringify(this.state.cuts))))}},{key:"render",value:function(){var e=this,t=n.a.createElement("button",{onClick:this.logout},"default"===this.storeName?"back":"Log Out!");return n.a.createElement("div",null,n.a.createElement("div",{className:"store-selector"},n.a.createElement("h2",null,"Welcome"),n.a.createElement("input",{ref:this.myInput,type:"text",required:!0,placeholder:"Store Name",defaultValue:"default"===this.storeName?"Guest":this.storeName}),n.a.createElement("button",{onClick:function(){e.goToStore()}},"Visit Store"),n.a.createElement("button",{onClick:function(){e.goToInventory()}},"Inventory"),t))}}]),t}(n.a.Component),B=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Not Found"))},P=a(19),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={uid:null,owner:null,storeName:null,fishes:{},cuts:{}},a.authHandler=function(){var e=Object(d.a)(f.a.mark(function e(t){var s,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=(s=t.additionalUserInfo.profile.name).replace(/\s+/g,"-"),a.setState({storeName:s}),e.next=5,k.fetch(s,{context:Object(P.a)(Object(P.a)(a))});case 5:if(n=e.sent,a.setState({fishes:n.fishes,cuts:n.cuts}),n.owner){e.next=10;break}return e.next=10,k.post("".concat(s,"/owner"),{data:t.user.uid});case 10:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid}),a.props.history.push({pathname:"/store/".concat(s),state:{uid:a.state.uid,owner:a.state.owner,storeName:a.state.storeName,fishes:a.state.fishes,cuts:a.state.cuts}});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(S.a.auth["".concat(e,"AuthProvider")]);j.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.auth().signOut();case 2:a.setState({uid:null});case 3:case"end":return e.stop()}},e,this)})),a.guestView=function(){a.props.history.push({pathname:"/store/default",state:{uid:"default",owner:"default",storeName:"default"}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"store-selector"},n.a.createElement(y,{authenticate:this.authenticate}),n.a.createElement("button",{className:"facebook",onClick:this.guestView},"Continue as Guest")))}}]),t}(n.a.Component),W=function(){return n.a.createElement(J.a,null,n.a.createElement(D.a,null,n.a.createElement(M.a,{exact:!0,path:"/",component:U}),n.a.createElement(M.a,{path:"/store/:storeId/menu",component:A}),n.a.createElement(M.a,{path:"/store/:storeId/inventory",component:I}),n.a.createElement(M.a,{path:"/store/:storeId",component:L}),n.a.createElement(M.a,{component:B}),n.a.createElement(M.a,null)))};a(69);Object(r.render)(n.a.createElement(W,null),document.querySelector("#main"))}},[[33,2,1]]]);
//# sourceMappingURL=main.9ff8ae14.chunk.js.map