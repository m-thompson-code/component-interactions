"use strict";(self.webpackChunkcomponent_interactions=self.webpackChunkcomponent_interactions||[]).push([[68],{4068:($,d,o)=>{o.r(d),o.d(d,{DependencyInjectModule:()=>r});var p=o(6895),h=o(1135),e=o(8274);const m=Symbol("unset");class c{constructor(){this.value=m}set(n){this.value=n}get(){if(this.value===m)throw new Error("Data value is not set");return this.value}}c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac});class i{constructor(n){this.dataService=n,this.first$=new h.X(0),this.second$=new h.X(0),this.dataService.set({first$:this.first$,second$:this.second$})}handleFirstChange(n){this.first$.next(+n.target.value)}handleSecondChange(n){this.second$.next(+n.target.value)}}i.\u0275fac=function(n){return new(n||i)(e.Y36(c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dependency-inject"]],features:[e._Bn([c])],decls:20,vars:6,consts:[[1,"navigation"],["routerLink","/ngrx-component-store"],["routerLink","/child-pipes"],[1,"container"],["placeholder","first","type","number",3,"value","input"],["placeholder","second","type","number",3,"value","input"],["productComponent",""]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"Previous"),e.qZA(),e.TgZ(3,"a",2),e._uU(4,"Next"),e.qZA()(),e.TgZ(5,"h1"),e._uU(6,"Single Service Involving Dependency Injection and Tokens"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"This solution more complex than the using a Service or something like an NgRx Component Store"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"But one thing is nice is that it results in less boilerplate"),e.qZA(),e.TgZ(11,"div",3)(12,"input",4),e.NdJ("input",function(u){return t.handleFirstChange(u)}),e.ALo(13,"async"),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"input",5),e.NdJ("input",function(u){return t.handleSecondChange(u)}),e.ALo(16,"async"),e.qZA(),e._UZ(17,"br")(18,"app-product",3,6),e.qZA()),2&n&&(e.xp6(12),e.Q6J("value",e.lcZ(13,2,t.first$)),e.xp6(3),e.Q6J("value",e.lcZ(16,4,t.second$)))}});var v=o(102),f=o(9841),y=o(4004);class a{constructor(n){this.dataService=n;const{first$:t,second$:l}=this.dataService.get();this.first$=t,this.second$=l,this.product$=(0,f.a)([this.first$,this.second$]).pipe((0,y.U)(([u,Z])=>u*Z))}}a.\u0275fac=function(n){return new(n||a)(e.Y36(c))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-product"]],decls:4,vars:9,template:function(n,t){1&n&&(e._uU(0),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async")),2&n&&e.lnq("",e.lcZ(1,3,t.first$)," x ",e.lcZ(2,5,t.second$)," = ",e.lcZ(3,7,t.product$),"\n")},dependencies:[p.Ov],styles:["[_nghost-%COMP%]{display:block}"]});var g=o(433);class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,g.u5,v.Bz.forChild([{path:"",component:i}])]}),e.B6R(i,function(){return[v.rH,a]},function(){return[p.Ov]})}}]);