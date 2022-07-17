import{g as S,r as l,o as u,h as k,a as d,w as v,i as $,b as B,j as I,k as R,l as V,m as h,n as w,F as E,p as M,q as j,c as q,f as x,t as A,s as O}from"./index.37de88b8.js";import{E as n,_ as D}from"./BaseBox.78f36854.js";const F=S("category",{state:()=>({list:[]}),actions:{getList(){return n.getCategoryList().then(t=>this.list=t).catch(t=>console.dir(t))},addItem(t){return n.createCategory(t).then(({data:e})=>this.list.push(e)).catch(e=>console.dir(e))},updateItem(t){return n.updateCategory(t).then(({data:e})=>{this.list=this.list.map(s=>s.id===e.id?{...s,...e}:s)}).catch(e=>console.dir(e))}}}),P=S("subcategory",{state:()=>({list:[]}),actions:{getList(t){return n.getSubcategoryList(t).then(e=>this.list=e).catch(e=>console.dir(e))},addItem(t){return n.createSubcategory(t).then(({data:e})=>this.list.push(e)).catch(e=>console.dir(e))},updateItem(t){return n.updateSubcategory(t).then(({data:e})=>{this.list=this.list.map(s=>s.id===e.id?{...s,...e}:s)}).catch(e=>console.dir(e))}}});const T={class:"list-item"},U={__name:"ListItem",props:{to:{type:[String,Object],default:""}},emits:["click:edit"],setup(t){return(e,s)=>{const a=l("router-link");return u(),k("div",T,[d(a,{to:t.to,"active-class":"list-item__link--active",class:"list-item__link"},{default:v(()=>[$(e.$slots,"default")]),_:3},8,["to"]),d(B,{theme:"transparent","pre-icon":"pencil-icon",class:"list-item__button",onClick:s[0]||(s[0]=c=>e.$emit("click:edit"))})])}}};var z=(t,e)=>{const s=t.__vccOpts||t;for(const[a,c]of e)s[a]=c;return s};const f={categories:{title:"Categories",routeName:"category"},subcategories:{title:"Subcategories",routeName:"subcategory"}},G=I({name:"CatalogView",components:{BaseBox:D,ListItem:U},props:{type:{type:String,required:!0,validator:t=>Object.keys(f).includes(t)}},setup(t){const{successNotify:e,errorNotify:s}=O(),a={categories:F,subcategories:P}[t.type](),{open:c,close:C}=V(),_=j(),m=h(()=>{var o;return(o=f[t.type])==null?void 0:o.title}),p=h(()=>{var o;return(o=f[t.type])==null?void 0:o.routeName}),i=h(()=>a.list),g=o=>a.getList(o),b=(o,y)=>c({request:o,params:y}).then(r=>{C(),e(r)}).catch(r=>r&&s(r)),L=()=>b(a.addItem,{}),N=o=>b(a.updateItem,o);return g(_.params.category),w((o,y)=>{t.type==="subcategories"&&o.params.category!==y.params.category&&g(o.params.category)}),{title:m,routeName:p,list:i,onClickAdd:L,onClickEdit:N}}}),H={class:"catalog"},J={class:"catalog__content"};function K(t,e,s,a,c,C){const _=l("ListItem"),m=l("BaseBox"),p=l("RouterView");return u(),k("div",H,[d(m,{title:t.title,class:"catalog__aside","onClick:add":t.onClickAdd},{default:v(()=>[(u(!0),k(E,null,M(t.list,i=>(u(),q(_,{key:i.id,to:{name:t.routeName,params:{[t.routeName]:i.id}},"onClick:edit":g=>t.onClickEdit(i)},{default:v(()=>[x(A(i.title),1)]),_:2},1032,["to","onClick:edit"]))),128))]),_:1},8,["title","onClick:add"]),R("div",J,[d(p)])])}var X=z(G,[["render",K]]);export{X as default};