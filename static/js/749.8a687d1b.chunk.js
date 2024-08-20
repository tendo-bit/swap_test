"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[749],{37525:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(45779),r=t(68090),o=t.n(r);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("polyline",{points:"18 15 12 9 6 15"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ChevronUp";const d=c},57809:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(45779),r=t(68090),o=t.n(r);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus";const d=c},39753:(e,n,t)=>{t.d(n,{q:()=>C,w:()=>T});var i=t(92936),r=t(60281),o=t(6823),l=t(21926),s=t(43454),c=t(6282),d=t(22953),a=t(47856),p=t(47632),h=t(31744),x=t(14411),u=t(54972),f=t(55874),g=t(72993),m=t(94284);const j=x.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,x.default)(s.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,y=(0,x.default)(u.Tv.H1Small).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,x.default)(l.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(m.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(s.rU,{to:e,children:(0,i.jsx)(b,{})}),(0,i.jsx)(y,{children:(0,i.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const w=(0,x.default)(u.Tv.H1Small).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function T({adding:e,creating:n,autoSlippage:t,children:l}){const s=(0,g.x)(),u=(0,x.useTheme)(),f=(0,a.T)(),y=(0,c.s0)();return(0,i.jsx)(j,{children:(0,i.jsxs)(m.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(v,{to:"..",onClick:n=>{n.preventDefault(),y(-1),e&&(f((0,p.dA)()),f((0,h.dA)()))},flex:l?"1":void 0,children:(0,i.jsx)(b,{stroke:u.neutral2})}),(0,i.jsx)(w,{$center:!l,children:n?(0,i.jsx)(o.cC,{children:"Create a pair"}):e?(0,i.jsx)(o.cC,{children:"Add liquidity"}):(0,i.jsx)(o.cC,{children:"Remove liquidity"})}),l&&(0,i.jsx)(d.xu,{style:{marginRight:".5rem"},children:l}),(0,i.jsx)(r.Z,{autoSlippage:t,chainId:s,hideRoutingSettings:!0})]})})}},40926:(e,n,t)=>{t.d(n,{DC:()=>s,ER:()=>c,bb:()=>d,im:()=>l,pr:()=>a});var i=t(32546),r=t(22953),o=t(14411);const l=o.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,s=(0,o.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=o.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=o.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,a=(0,o.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},8548:(e,n,t)=>{t.r(n),t.d(n,{default:()=>$});var i,r=t(92936),o=t(5985),l=t(26729),s=t(47583),c=t(26073),d=t(81069),a=t(6823),p=t(61592),h=t.n(p),x=t(45779),u=t(57809),f=t(6282),g=t(22953),m=t(54972),j=t(69780),v=t(61182),y=t(44591),b=t(5967),C=t(39753),w=t(52223),T=t(94284),O=t(24210),_=t(10672),S=t(64370),k=t(41047),N=t(73720),I=t(28098),E=t(17202),A=t(65118),z=t(40926);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}));const L={showCommonBases:!0};function $(){var e;const n=new URLSearchParams((0,f.TH)().search),{account:t,chainId:p}=(0,l.G)(),[$,P]=(0,x.useState)(!1),[q,W]=(0,x.useState)(i.TOKEN1),[B,K]=(0,x.useState)((()=>p?(0,S.gX)(p):null)),[Z,D]=(0,x.useState)(null),[G,R]=(0,k.Oo)(B??void 0,Z??void 0),H=(0,I.uB)();(0,x.useEffect)((()=>{R&&H(R)}),[R,H]);const M=G===k._G.NOT_EXISTS||Boolean(G===k._G.EXISTS&&R&&h().equal(R.reserve0.quotient,h().BigInt(0))&&h().equal(R.reserve1.quotient,h().BigInt(0))),U=(0,N.mM)(t??void 0,null===(e=R)||void 0===e?void 0:e.liquidityToken),X=Boolean(U&&h().greaterThan(U.quotient,h().BigInt(0))),F=(0,x.useCallback)((e=>{q===i.TOKEN0?K(e):D(e)}),[q]),V=(0,x.useCallback)((()=>{P(!1)}),[P]),J=(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(g.xv,{textAlign:"center",children:t?(0,r.jsx)(a.cC,{children:"Select a token to find your v2 liquidity."}):(0,r.jsx)(a.cC,{children:"Connect to a wallet to find pools"})})});return(0,d.G)()?(0,r.jsx)(s.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(C.q,{origin:n.get("origin")??"/pools/v2"}),(0,r.jsxs)(y.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(v.Pj,{children:(0,r.jsx)(y.Tz,{gap:"10px",children:(0,r.jsx)(m.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsxs)(a.cC,{children:[(0,r.jsx)("b",{children:"Tip:"})," Use this tool to find v2 pools that don't automatically appear in the interface."]})})})}),(0,r.jsx)(j.KA,{onClick:()=>{P(!0),W(i.TOKEN0)},children:B?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:B}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(a.cC,{children:"Select a token"})})}),(0,r.jsx)(y.lg,{children:(0,r.jsx)(u.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(j.KA,{onClick:()=>{P(!0),W(i.TOKEN1)},children:Z?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:Z}),(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:Z.symbol})]}):(0,r.jsx)(g.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(a.cC,{children:"Select a token"})})}),X&&(0,r.jsxs)(y.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(a.cC,{children:"Pool found!"})}),(0,r.jsx)(m.m_,{to:"pools/v2",children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(a.cC,{children:"Manage this pool."})})})]}),B&&Z?G===k._G.EXISTS?X&&R?(0,r.jsx)(w.WP,{pair:R,border:"1px solid #CED0D9"}):(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(y.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(a.cC,{children:"You don\u2019t have liquidity in this pool yet."})}),(0,r.jsx)(m.m_,{to:`/add/v2/${(0,E.H)(B)}/${(0,E.H)(Z)}`,children:(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(a.cC,{children:"Add liquidity."})})})]})}):M?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsxs)(y.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(g.xv,{textAlign:"center",children:(0,r.jsx)(a.cC,{children:"No pool found."})}),(0,r.jsx)(m.m_,{to:`/add/${(0,E.H)(B)}/${(0,E.H)(Z)}`,children:(0,r.jsx)(a.cC,{children:"Create pool."})})]})}):G===k._G.INVALID?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(y.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(g.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(a.cC,{children:"Invalid pair."})})})}):G===k._G.LOADING?(0,r.jsx)(v.hl,{padding:"45px 10px",children:(0,r.jsx)(y.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(g.xv,{textAlign:"center",children:[(0,r.jsx)(a.cC,{children:"Loading"}),(0,r.jsx)(z.bb,{})]})})}):null:J]}),(0,r.jsx)(O.Z,{isOpen:$,onCurrencySelect:F,onDismiss:V,selectedCurrency:(q===i.TOKEN0?Z:B)??void 0,currencySearchFilters:L})]}),(0,r.jsx)(_.c,{})]})}):(0,r.jsx)(c.A,{})}}}]);
//# sourceMappingURL=749.8a687d1b.chunk.js.map