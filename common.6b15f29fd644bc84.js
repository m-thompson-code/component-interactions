"use strict";(self.webpackChunkcomponent_interactions=self.webpackChunkcomponent_interactions||[]).push([[592],{4707:(h,d,_)=>{_.d(d,{t:()=>a});var f=_(7579),c=_(6063);class a extends f.x{constructor(e=1/0,i=1/0,t=c.l){super(),this._bufferSize=e,this._windowTime=i,this._timestampProvider=t,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=i===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,i)}next(e){const{isStopped:i,_buffer:t,_infiniteTimeWindow:o,_timestampProvider:n,_windowTime:s}=this;i||(t.push(e),!o&&t.push(n.now()+s)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const i=this._innerSubscribe(e),{_infiniteTimeWindow:t,_buffer:o}=this,n=o.slice();for(let s=0;s<n.length&&!e.closed;s+=t?1:2)e.next(n[s]);return this._checkFinalizedStatuses(e),i}_trimBuffer(){const{_bufferSize:e,_timestampProvider:i,_buffer:t,_infiniteTimeWindow:o}=this,n=(o?1:2)*e;if(e<1/0&&n<t.length&&t.splice(0,t.length-n),!o){const s=i.now();let u=0;for(let r=1;r<t.length&&t[r]<=s;r+=2)u=r;u&&t.splice(0,u+1)}}}},6063:(h,d,_)=>{_.d(d,{l:()=>f});const f={now:()=>(f.delegate||Date).now(),delegate:void 0}}}]);