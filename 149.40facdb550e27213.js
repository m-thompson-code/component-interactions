"use strict";(self.webpackChunkcomponent_interactions=self.webpackChunkcomponent_interactions||[]).push([[149],{149:(C,c,i)=>{i.r(c),i.d(c,{ViewChildModule:()=>s});var h=i(6895),n=i(8274),d=i(433),a=i(102);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-product"]],inputs:{first:"first",second:"second"},decls:1,vars:3,template:function(e,o){1&e&&n._uU(0),2&e&&n.lnq("",o.first," x ",o.second," = ",o.product,"")},styles:["[_nghost-%COMP%]{display:block}"]});const m=["productComponent"];class u{constructor(){this.first=0,this.second=0}handleChange(){this.productComponent.product=this.first*this.second}}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-view-child"]],viewQuery:function(e,o){if(1&e&&n.Gf(m,7),2&e){let l;n.iGM(l=n.CRH())&&(o.productComponent=l.first)}},decls:20,vars:4,consts:[[1,"navigation"],["routerLink","/local-template-variables"],["routerLink","/services"],[1,"container"],["placeholder","first","type","number",3,"ngModel","ngModelChange","input"],["placeholder","second","type","number",3,"ngModel","ngModelChange","input"],[1,"container",3,"first","second"],["productComponent",""]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"a",1),n._uU(2,"Previous"),n.qZA(),n.TgZ(3,"a",2),n._uU(4,"Next"),n.qZA()(),n.TgZ(5,"h1"),n._uU(6,"View Child"),n.qZA(),n.TgZ(7,"p"),n._uU(8,"This solution implicitly updates the child Component when you know its value should change."),n.qZA(),n.TgZ(9,"p"),n._uU(10,"This solution isn't very declarative either, so it should be avoided."),n.qZA(),n.TgZ(11,"p"),n._uU(12,"This kind of solution can be confusing since elements of ViewChild aren't available until some lifecycle hook."),n.qZA(),n.TgZ(13,"div",3)(14,"input",4),n.NdJ("ngModelChange",function(r){return o.first=r})("input",function(){return o.handleChange()}),n.qZA(),n._UZ(15,"br"),n.TgZ(16,"input",5),n.NdJ("ngModelChange",function(r){return o.second=r})("input",function(){return o.handleChange()}),n.qZA(),n._UZ(17,"br")(18,"app-product",6,7),n.qZA()),2&e&&(n.xp6(14),n.Q6J("ngModel",o.first),n.xp6(2),n.Q6J("ngModel",o.second),n.xp6(2),n.Q6J("first",o.first)("second",o.second))},dependencies:[d.Fj,d.wV,d.JJ,d.On,a.rH,p]});class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[h.ez,d.u5,a.Bz.forChild([{path:"",component:u}])]})}}]);