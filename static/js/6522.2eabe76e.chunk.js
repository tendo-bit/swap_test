"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6522],{8963:(e,i,n)=>{n.d(i,{Z:()=>s});var t=n(92936),r=n(14411);const o=r.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,d=r.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:i})=>i?e.surface1:"none"};
  color: ${({theme:e,isActive:i})=>i?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:i})=>i?e.neutral2:e.neutral3};
  }
`;function s({currencyA:e,currencyB:i,handleRateToggle:n}){var r,s;const l=null===(r=e)||void 0===r?void 0:r.wrapped,c=null===(s=i)||void 0===s?void 0:s.wrapped,a=l&&c&&l.sortsBefore(c);return l&&c?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:n,children:(0,t.jsxs)(o,{width:"fit-content",children:[(0,t.jsx)(d,{isActive:a,fontSize:"12px",children:a?e.symbol:i.symbol}),(0,t.jsx)(d,{isActive:!a,fontSize:"12px",children:a?i.symbol:e.symbol})]})}):null}},42938:(e,i,n)=>{n.d(i,{t:()=>h});var t=n(11604),r=n(76078),o=n(84938),d=n(70152),s=n(45779),l=n(5347),c=n(7151);function a(e,i,n,t,r,o,d){try{var s=e[o](d),l=s.value}catch(c){return void n(c)}s.done?i(l):Promise.resolve(l).then(t,r)}const u=t.O$.from(2).pow(128).sub(1);function h(e,i,n=!1){var t,h;const x=(0,c.GL)(!1),p=null===(t=(0,o.Wk)(i?x:null,"ownerOf",[i]).result)||void 0===t?void 0:t[0],m=null===(h=i)||void 0===h?void 0:h.toHexString(),v=(0,d.ZP)(),[f,g]=(0,s.useState)();return(0,s.useEffect)((()=>{!function(){var e,i=(e=function*(){if(x&&m&&p)try{const e=yield x.callStatic.collect({tokenId:m,recipient:p,amount0Max:u,amount1Max:u},{from:p});g([e.amount0,e.amount1])}catch{}},function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function d(e){a(o,t,r,d,s,"next",e)}function s(e){a(o,t,r,d,s,"throw",e)}d(void 0)}))});return function(){return i.apply(this,arguments)}}()()}),[x,m,p,v]),e&&f?[r.CurrencyAmount.fromRawAmount(n?e.token0:(0,l.B)(e.token0),f[0].toString()),r.CurrencyAmount.fromRawAmount(n?e.token1:(0,l.B)(e.token1),f[1].toString())]:[void 0,void 0]}},26522:(e,i,n)=>{n.r(i),n.d(i,{PositionPageUnsupportedContent:()=>ke,default:()=>De});var t=n(92936),r=n(11604),o=n(5985),d=n(76078),s=n(21651),l=n(47583),c=n(61077),a=n(69780),u=n(61182),h=n(44591),x=n(32546),p=n(5967),m=n(94284),v=n(67716),f=n(99819),g=n(56536),j=n(57852),y=n(18569),w=n(39671),b=n(7151),C=n(57899),T=n(55660),P=n(32682),I=n(42938),k=n(40413),D=n(6823),M=n(84938),A=n(24509),_=n(45779),S=n(437),z=n(43454),R=n(6282),$=n(31744),L=n(99454),N=n(14411),q=n(54972),B=n(17202),E=n(63420),O=n(66136),U=n(5347),W=n(72993),H=n(47841),Z=n(51001),F=n(5931),G=n(590),J=n(73499),Q=n(90652),V=n(8963),Y=n(10672);const K="data:application/json;base64,";var X=n(47186),ee=n(64510),ie=n(54703),ne=n(40926);function te(e,i,n,t,r,o,d){try{var s=e[o](d),l=s.value}catch(c){return void n(c)}s.done?i(l):Promise.resolve(l).then(t,r)}function re(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var o=e.apply(i,n);function d(e){te(o,t,r,d,s,"next",e)}function s(e){te(o,t,r,d,s,"throw",e)}d(void 0)}))}}const oe=(0,N.default)(a.DF).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-fbc4d04e-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,de=N.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-fbc4d04e-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,se=N.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-fbc4d04e-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,le=(0,N.default)((({end:e,...i})=>(0,t.jsx)(q.Tv.DeprecatedLabel,{...i}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-fbc4d04e-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ce=N.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-fbc4d04e-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,ae=(0,N.default)(q.Tv.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-fbc4d04e-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,ue=N.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-fbc4d04e-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,he=(0,N.default)(m.m0).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-fbc4d04e-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,xe=(0,N.default)(he).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-fbc4d04e-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,pe=(0,N.default)(a.gn).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-fbc4d04e-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,me=N.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-fbc4d04e-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,ve=N.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-fbc4d04e-11"})`
  grid-area: overlap;
`,fe=N.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-fbc4d04e-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`,ge=(0,N.default)(z.rU).withConfig({displayName:"PositionPage__StyledPoolLink",componentId:"sc-fbc4d04e-13"})`
  text-decoration: none;
  ${q.iV}
`,je=(0,N.default)(q.Tv.H1Medium).withConfig({displayName:"PositionPage__PairHeader",componentId:"sc-fbc4d04e-14"})`
  margin-right: 10px;
`;function ye({inverted:e,pool:i,currencyQuote:n,currencyBase:r}){var o,d;const{formatPrice:s}=(0,O.Gb)();return i&&n&&r?(0,t.jsx)(u.hl,{padding:"12px",children:(0,t.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ce,{children:(0,t.jsx)(D.cC,{children:"Current price"})}),(0,t.jsx)(q.Tv.DeprecatedMediumHeader,{textAlign:"center",children:s({price:e?i.token1Price:i.token0Price,type:O.sw.TokenTx})}),(0,t.jsx)(ce,{children:(0,t.jsxs)(D.cC,{children:[{sym:null===(o=n)||void 0===o?void 0:o.symbol}," per ",{base:null===(d=r)||void 0===d?void 0:d.symbol}]})})]})}):null}const we=({children:e,chainId:i,address:n})=>{const r=(0,y.dG)({address:n,chain:(0,j.tq)({chainId:i})});return(0,t.jsx)(q.bm,{to:r,children:e})},be=({children:e,chainId:i,address:n})=>(0,t.jsx)(q.dL,{href:(0,ie.E)(i,n,ie.r.TOKEN),children:e});function Ce({chainId:e,currency:i}){var n,r;const o=null===(n=i)||void 0===n?void 0:n.address,d=(0,j.Jw)(e),s=(0,y.bx)(d)?we:be;return(0,t.jsx)(s,{chainId:e,address:o,children:(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(p.Z,{currency:i,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsxs)(q.Tv.DeprecatedMain,{children:[null===(r=i)||void 0===r?void 0:r.symbol," \u2197"]})]})})}function Te(e,i,n){const t=i.getContext("2d");if(t){let{width:r,height:o}=e;const d=r/o;o=n,r=Math.round(d*n),i.width=r*devicePixelRatio,i.height=o*devicePixelRatio,i.style.width=r+"px",i.style.height=o+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,o),t.drawImage(e,0,0,r,o)}}function Pe({image:e,height:i}){const[n,r]=(0,_.useState)(!1),o=(0,_.useRef)(null),d=(0,_.useRef)(null);return(0,t.jsxs)(me,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{d.current&&o.current&&Te(d.current,o.current,i),r(!1)},children:[(0,t.jsx)(ve,{ref:o}),(0,t.jsx)(fe,{ref:d,src:e,hidden:!n,onLoad:()=>{d.current&&o.current&&Te(d.current,o.current,i)}})]})}const Ie=({priceLower:e,priceUpper:i,quote:n,base:t,invert:r})=>{var o,d;return{priceUpper:r?null===(o=e)||void 0===o?void 0:o.invert():i,priceLower:r?null===(d=i)||void 0===d?void 0:d.invert():e,quote:r?t:n,base:r?n:t}};function ke(){return(0,t.jsx)(de,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(q.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(D.cC,{children:"Position unavailable"})}),(0,t.jsx)(q.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(D.cC,{children:"To view a position, you must be connected to the network it belongs to."})}),(0,t.jsx)(oe,{as:z.rU,to:"/pool",width:"fit-content",children:(0,t.jsx)(D.cC,{children:"Back to Pool"})})]})})}function De(){const e=(0,W.x)();return(0,j.Nb)(e)?(0,t.jsx)(Ae,{}):(0,t.jsx)(ke,{})}const Me=(0,N.default)(m.DA).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-fbc4d04e-15"})({flexWrap:"wrap",gap:8});function Ae(){var e,i,n,W,te,oe,me,ve,fe,we,be,Te,De,Ae,_e,Se,ze,Re,$e,Le,Ne,qe,Be,Ee,Oe,Ue,We,He,Ze,Fe,Ge;const{tokenId:Je}=(0,R.UO)(),Qe=(0,G.m)(),Ve=(0,j.Jw)(Qe.chainId),Ye=(0,Z.z)(),Ke=(0,N.useTheme)(),{formatCurrencyAmount:Xe,formatDelta:ei,formatTickPrice:ii}=(0,O.Gb)(),ni=function(e){if(e)try{return r.O$.from(e)}catch(i){return}}(Je),{loading:ti,position:ri}=(0,k.n)(ni),{token0:oi,token1:di,fee:si,liquidity:li,tickLower:ci,tickUpper:ai,tokenId:ui}=ri||{},hi=null===(e=li)||void 0===e?void 0:e.eq(0),xi=function(e){const i=(0,b.GL)(),n=(0,_.useMemo)((()=>{var i;return[e instanceof r.O$?e.toHexString():null===(i=e)||void 0===i?void 0:i.toString(16)]}),[e]),{result:t,error:o,loading:d,valid:s}=(0,M.Wk)(i,"tokenURI",n,{...M.DB,gasRequired:3e6});return(0,_.useMemo)((()=>{if(o||!s||!e)return{valid:!1,loading:!1};if(d)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[i]=t;if(!i||!i.startsWith(K))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(i.slice(K.length)))}}catch(o){return{valid:!1,loading:!1}}}),[o,d,t,e,s])}(ni),pi=(0,w.dQ)(oi),mi=(0,w.dQ)(di),vi=pi?(0,U.B)(pi):void 0,fi=mi?(0,U.B)(mi):void 0,[gi,ji]=(0,_.useState)(!1),yi=(0,A.Z)(Ve).wrapped.symbol,wi=pi&&mi&&si?s.Pool.getAddress(pi,mi,si):void 0,[bi,Ci]=(0,T.AI)(pi??void 0,mi??void 0,si),Ti=(0,_.useMemo)((()=>{if(Ci&&li&&"number"===typeof ci&&"number"===typeof ai)return new s.Position({pool:Ci,liquidity:li.toString(),tickLower:ci,tickUpper:ai})}),[li,Ci,ci,ai]),Pi=(0,C.Z)(si,ci,ai),Ii=(0,Q.N)(Ti),[ki,Di]=(0,_.useState)(!1),{priceLower:Mi,priceUpper:Ai,base:_i}=Ie({priceLower:Ii.priceLower,priceUpper:Ii.priceUpper,quote:Ii.quote,base:Ii.base,invert:ki}),Si=mi?null===(i=_i)||void 0===i?void 0:i.equals(mi):void 0,zi=Si?vi:fi,Ri=Si?fi:vi,$i=(0,_.useMemo)((()=>Mi&&Ci&&Ai?function(e,i,n){try{if(!i.greaterThan(e))return 100;if(!i.lessThan(n))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(n.toSignificant(15)),o=Number.parseFloat(i.toSignificant(15)),d=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*o))/(o-Math.sqrt(r*o))+1)*100);if(d<0||d>100)throw Error("Out of range");return d}catch{return}}(Si?Ai.invert():Mi,Ci.token0Price,Si?Mi.invert():Ai):void 0),[Si,Ci,Mi,Ai]),[Li,Ni]=(0,I.t)(Ci??void 0,null===(n=ri)||void 0===n?void 0:n.tokenId,gi),qi=Ci?gi?Ci.token0:(0,U.B)(Ci.token0):void 0,Bi=Ci?gi?Ci.token1:(0,U.B)(Ci.token1):void 0,[Ei,Oi]=(0,_.useState)(!1),[Ui,Wi]=(0,_.useState)(null),Hi=(0,L.ub)(Ui??void 0),[Zi,Fi]=(0,_.useState)(!1),Gi=(0,P.ZP)(pi??void 0),Ji=(0,P.ZP)(mi??void 0),Qi=(0,_.useMemo)((()=>{var e,i;if(!Gi||!Ji||!Li||!Ni)return null;const n=null===(e=Li)||void 0===e?void 0:e.wrapped,t=null===(i=Ni)||void 0===i?void 0:i.wrapped;if(!n||!t)return null;const r=Gi.quote(n),o=Ji.quote(t);return r.add(o)}),[Gi,Ji,Li,Ni]),Vi=(0,_.useMemo)((()=>{if(!Gi||!Ji||!Ti)return null;const e=Gi.quote(Ti.amount0),i=Ji.quote(Ti.amount1);return e.add(i)}),[Gi,Ji,Ti]),Yi=(0,L.h7)(),Ki=(0,b.GL)(),Xi=(0,_.useCallback)(re((function*(){if(!qi||!Bi||"connected"!==Qe.status||!Ki||!ui||!Ye)return;Oi(!0);const{calldata:e,value:i}=s.NonfungiblePositionManager.collectCallParameters({tokenId:ui.toString(),expectedCurrencyOwed0:Li??d.CurrencyAmount.fromRawAmount(qi,0),expectedCurrencyOwed1:Ni??d.CurrencyAmount.fromRawAmount(Bi,0),recipient:Qe.address}),n={to:Ki.address,data:e,value:i},t=yield Ye.getChainId();if(Qe.chainId!==t)throw new E.CJ;Ye.estimateGas(n).then((e=>{const i={...n,gasLimit:(0,ee.y)(e)};return Ye.sendTransaction(i).then((e=>{var i,n;Wi(e.hash),Oi(!1),(0,l._P)(o.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[qi.symbol,Bi.symbol].join("/")}),Yi(e,{type:X.i.COLLECT_FEES,currencyId0:(0,B.H)(qi),currencyId1:(0,B.H)(Bi),expectedCurrencyOwed0:(null===(i=Li)||void 0===i?void 0:i.quotient.toString())??d.CurrencyAmount.fromRawAmount(qi,0).toExact(),expectedCurrencyOwed1:(null===(n=Ni)||void 0===n?void 0:n.quotient.toString())??d.CurrencyAmount.fromRawAmount(Bi,0).toExact()})}))})).catch((e=>{Oi(!1),console.error(e)}))})),[qi,Bi,Qe.status,Qe.address,Qe.chainId,Ki,ui,Ye,Li,Ni,Yi]),en=null===(W=(0,M.Wk)(ui?Ki:null,"ownerOf",[ui]).result)||void 0===W?void 0:W[0],nn=en===Qe.address||(null===(te=ri)||void 0===te?void 0:te.operator)===Qe.address,tn=Si?Li:Ni,rn=Si?Ni:Li,on=Ci&&"number"===typeof ci?Ci.tickCurrent<ci:void 0,dn=Ci&&"number"===typeof ai?Ci.tickCurrent>=ai:void 0,sn="boolean"===typeof on&&"boolean"===typeof dn&&(!on&&!dn);function ln(){var e,i,n,r,o,d;return(0,t.jsxs)(h.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(e=tn)||void 0===e?void 0:e.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:tn?Xe({amount:tn}):"-"})]}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:null===(n=tn)||void 0===n||null===(i=n.currency)||void 0===i?void 0:i.symbol})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(r=rn)||void 0===r?void 0:r.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:rn?Xe({amount:rn}):"-"})]}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:null===(d=rn)||void 0===d||null===(o=d.currency)||void 0===o?void 0:o.symbol})]})]})}),(0,t.jsx)(F.xv,{fontSize:12,fontStyle:"italic",color:"$neutral2",children:(0,t.jsx)(D.cC,{children:"Collecting fees will withdraw currently available fees for you."})}),(0,t.jsx)(a.DF,{"data-testid":"modal-collect-fees-button",onClick:Xi,children:(0,t.jsx)(D.cC,{children:"Collect"})})]})}const cn=Boolean(nn&&((null===(oe=Li)||void 0===oe?void 0:oe.greaterThan(0))||(null===(me=Ni)||void 0===me?void 0:me.greaterThan(0)))&&vi&&fi&&(vi.isNative||fi.isNative)&&!Ui);return ri||ti?ti||bi===T.tK.LOADING||!si?(0,t.jsxs)(ne.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsx)(l.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Helmet,{children:(0,t.jsx)("title",{children:(0,D.t)("Manage {{quoteSymbol}}/{{baseSymbol}} pool liquidity on Uniswap",{quoteSymbol:null===(ve=zi)||void 0===ve?void 0:ve.symbol,baseSymbol:null===(fe=Ri)||void 0===fe?void 0:fe.symbol})})}),(0,t.jsxs)(de,{children:[(0,t.jsx)(f.Z,{isOpen:Zi,onDismiss:()=>Fi(!1),attemptingTxn:Ei,hash:Ui??"",reviewContent:()=>(0,t.jsx)(f.p,{title:(0,t.jsx)(D.cC,{children:"Claim fees"}),onDismiss:()=>Fi(!1),topContent:ln}),pendingText:(0,t.jsx)(D.cC,{children:"Collecting fees"})}),(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(h.Tz,{gap:"sm",children:[(0,t.jsx)(z.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pool",children:(0,t.jsx)(ae,{children:(0,t.jsx)(D.cC,{children:"\u2190 Back to Pool"})})}),(0,t.jsxs)(he,{children:[(0,t.jsxs)(Me,{children:[(0,t.jsx)(H.ge,{currencies:[Ri,zi],size:24}),(0,t.jsx)(ge,{to:wi?(0,y.Ah)(wi,(0,j.tq)({chainId:Ve,withFallback:!0})):"",children:(0,t.jsxs)(je,{children:["\xa0",null===(we=zi)||void 0===we?void 0:we.symbol,"\xa0/\xa0",null===(be=Ri)||void 0===be?void 0:be.symbol]})}),(0,t.jsx)(c.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(se,{children:ei(parseFloat(new d.Percent(si,1e6).toSignificant()))})}),(0,t.jsx)(J.Z,{removed:hi,inRange:sn})]}),nn&&(0,t.jsxs)(xe,{children:[vi&&fi&&si&&ui?(0,t.jsx)(a.Ux,{as:z.rU,to:`/add/${(0,B.H)(vi)}/${(0,B.H)(fi)}/${si}/${ui}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(D.cC,{children:"Increase liquidity"})}):null,ui&&!hi?(0,t.jsx)(a.Hm,{as:z.rU,to:`/remove/${ui}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(D.cC,{children:"Remove liquidity"})}):null]})]})]}),(0,t.jsxs)(he,{align:"flex-start",children:[(0,t.jsx)(q.Pw,{style:{height:"100%",marginRight:12},children:"result"in xi?(0,t.jsxs)(u.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(Pe,{image:xi.result.image,height:400}),"number"===typeof Qe.chainId&&en&&!nn?(0,t.jsx)(q.dL,{href:(0,ie.E)(Qe.chainId,en,ie.r.ADDRESS),children:(0,t.jsx)(D.cC,{children:"Owner"})}):null]}):(0,t.jsx)(u.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(x.tG,{})})}),(0,t.jsxs)(h.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(h.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsx)(le,{children:(0,t.jsx)(D.cC,{children:"Liquidity"})}),(null===(Te=Vi)||void 0===Te?void 0:Te.greaterThan(new d.Fraction(1,100)))?(0,t.jsx)(q.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:Xe({amount:Vi,type:O.sw.FiatTokenPrice})}):(0,t.jsx)(q.Tv.DeprecatedLargeHeader,{color:Ke.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(D.cC,{children:"-"})})]}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(Ce,{chainId:Qe.chainId??d.ChainId.MAINNET,currency:zi}),(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(q.Tv.DeprecatedMain,{children:Xe({amount:Si?null===(De=Ti)||void 0===De?void 0:De.amount0:null===(Ae=Ti)||void 0===Ae?void 0:Ae.amount1})}),"number"!==typeof $i||hi?null:(0,t.jsx)(c.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(se,{children:(0,t.jsxs)(D.cC,{children:[{pct:Si?$i:100-$i},"%"]})})})]})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(Ce,{chainId:Qe.chainId??d.ChainId.MAINNET,currency:Ri}),(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(q.Tv.DeprecatedMain,{children:Xe({amount:Si?null===(_e=Ti)||void 0===_e?void 0:_e.amount1:null===(Se=Ti)||void 0===Se?void 0:Se.amount0})}),"number"!==typeof $i||hi?null:(0,t.jsx)(c.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(se,{children:(0,t.jsxs)(D.cC,{children:[{pct:Si?100-$i:$i},"%"]})})})]})]})]})})]})}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(h.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(h.Tz,{gap:"md",children:(0,t.jsxs)(m.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsx)(le,{children:(0,t.jsx)(D.cC,{children:"Unclaimed fees"})}),(null===(ze=Qi)||void 0===ze?void 0:ze.greaterThan(new d.Fraction(1,100)))?(0,t.jsx)(q.Tv.DeprecatedLargeHeader,{color:Ke.success,fontSize:"36px",fontWeight:535,children:Xe({amount:Qi,type:O.sw.FiatTokenPrice})}):(0,t.jsx)(q.Tv.DeprecatedLargeHeader,{color:Ke.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),nn&&((null===(Re=Li)||void 0===Re?void 0:Re.greaterThan(0))||(null===($e=Ni)||void 0===$e?void 0:$e.greaterThan(0))||Ui)?(0,t.jsx)(pe,{"data-testid":"collect-fees-button",disabled:Ei||!!Ui,confirmed:!!Ui&&!Hi,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>Fi(!0),children:Ui&&!Hi?(0,t.jsx)(q.Tv.DeprecatedMain,{color:Ke.neutral1,children:(0,t.jsx)(D.cC,{children:" Collected"})}):Hi||Ei?(0,t.jsxs)(q.Tv.DeprecatedMain,{color:Ke.neutral1,children:[" ",(0,t.jsx)(g.bb,{children:(0,t.jsx)(D.cC,{children:"Collecting"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.Tv.DeprecatedMain,{color:Ke.white,children:(0,t.jsx)(D.cC,{children:"Collect fees"})})})}):null]})}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(Le=tn)||void 0===Le?void 0:Le.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:null===(qe=tn)||void 0===qe||null===(Ne=qe.currency)||void 0===Ne?void 0:Ne.symbol})]}),(0,t.jsx)(m.DA,{children:(0,t.jsx)(q.Tv.DeprecatedMain,{children:tn?Xe({amount:tn}):"-"})})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(p.Z,{currency:null===(Be=rn)||void 0===Be?void 0:Be.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(q.Tv.DeprecatedMain,{children:null===(Oe=rn)||void 0===Oe||null===(Ee=Oe.currency)||void 0===Ee?void 0:Ee.symbol})]}),(0,t.jsx)(m.DA,{children:(0,t.jsx)(q.Tv.DeprecatedMain,{children:rn?Xe({amount:rn}):"-"})})]})]})}),cn&&(0,t.jsx)(h.Tz,{gap:"md",children:(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(q.Tv.DeprecatedMain,{children:(0,t.jsxs)(D.cC,{children:["Collect as ",{nativeWrappedSymbol:yi}]})}),(0,t.jsx)(v.Z,{id:"receive-as-weth",isActive:gi,toggle:()=>ji((e=>!e))})]})})]})})]})]}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(h.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(le,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(D.cC,{children:"Price range"})}),(0,t.jsx)(q.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(J.Z,{removed:hi,inRange:sn}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(m.DA,{children:Ri&&zi&&(0,t.jsx)(V.Z,{currencyA:Ri,currencyB:zi,handleRateToggle:()=>Di(!ki)})})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ce,{children:(0,t.jsx)(D.cC,{children:"Min price"})}),(0,t.jsx)(q.Tv.DeprecatedMediumHeader,{textAlign:"center",children:ii({price:Mi,atLimit:Pi,direction:$.Mb.LOWER,numberType:O.sw.TokenTx})}),(0,t.jsxs)(ce,{children:[" ",(0,t.jsxs)(D.cC,{children:[{symbol:null===(Ue=zi)||void 0===Ue?void 0:Ue.symbol}," per ",{base:null===(We=Ri)||void 0===We?void 0:We.symbol}]})]}),sn&&(0,t.jsx)(F.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsxs)(D.cC,{children:["Your position will be 100% ",{symbol:null===(He=Ri)||void 0===He?void 0:He.symbol}," at this price."]})})]})}),(0,t.jsx)(ue,{children:"\u27f7"}),(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(h.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ce,{children:(0,t.jsx)(D.cC,{children:"Max price"})}),(0,t.jsx)(q.Tv.DeprecatedMediumHeader,{textAlign:"center",children:ii({price:Ai,atLimit:Pi,direction:$.Mb.UPPER,numberType:O.sw.TokenTx})}),(0,t.jsxs)(ce,{children:[" ",(0,t.jsxs)(D.cC,{children:[{symbol:null===(Ze=zi)||void 0===Ze?void 0:Ze.symbol}," per ",{base:null===(Fe=Ri)||void 0===Fe?void 0:Fe.symbol}]})]}),sn&&(0,t.jsx)(F.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsxs)(D.cC,{children:["Your position will be 100% ",{symbol:null===(Ge=zi)||void 0===Ge?void 0:Ge.symbol}," at this price."]})})]})})]}),(0,t.jsx)(ye,{inverted:Si,pool:Ci,currencyQuote:zi,currencyBase:Ri})]})})]})]}),(0,t.jsx)(Y.c,{})]})}):(0,t.jsx)(ke,{})}}}]);
//# sourceMappingURL=6522.2eabe76e.chunk.js.map