"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1298,5118],{60281:(e,n,t)=>{t.d(n,{Z:()=>ge});var i,o=t(92936),a=t(56708),d=t(42725),s=t(44591),r=t(94284),c=t(433),p=t(57852),l=t(97341),u=t(89464),h=t(30520),x=t(6823),g=t(60040),m=t(45779),f=t(63194),j=t(1356),b=t(29021),w=t(91325),_=t(14411),y=t(54972),C=t(62587),$=t(95625),I=t(39063),v=t(72993),S=t(35465),T=t(31770),Z=t(28098),k=t(10307),N=t(66136),P=t(76078);!function(e){e[e.TooLow=0]="TooLow",e[e.TooHigh=1]="TooHigh",e[e.Valid=2]="Valid"}(i||(i={}));const B=new P.Percent(5,1e4),M=new P.Percent(1,100);const W=(0,_.default)(T.Z).withConfig({displayName:"MenuButton__Icon",componentId:"sc-8483422-0"})`
  height: 24px;
  width: 24px;
  > * {
    fill: ${({theme:e})=>e.neutral2};
  }
`,z=_.default.button.withConfig({displayName:"MenuButton__Button",componentId:"sc-8483422-1"})`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  :not([disabled]):hover {
    opacity: 0.7;
  }

  ${({isActive:e})=>e&&"opacity: 0.7"}
`,A=(0,_.default)(r.ZP).withConfig({displayName:"MenuButton__IconContainer",componentId:"sc-8483422-2"})`
  padding: 6px 12px;
  border-radius: 16px;
`,E=(0,_.default)(A).withConfig({displayName:"MenuButton__IconContainerWithSlippage",componentId:"sc-8483422-3"})`
  div {
    color: ${({theme:e,displayWarning:n})=>n?e.deprecated_accentWarning:e.neutral2};
  }

  background-color: ${({theme:e,displayWarning:n})=>n?e.deprecated_accentWarningSoft:e.surface2};
`,L=({trade:e,compact:n})=>{const[t]=(0,Z.$2)(),{formatPercent:a}=(0,N.Gb)();if(t===k.y.Auto||(0,w.pJ)(e))return(0,o.jsx)(A,{children:(0,o.jsx)(W,{})});const d=function(e){return e.lessThan(B)?i.TooLow:e.greaterThan(M)?i.TooHigh:i.Valid}(t)!==i.Valid;return(0,o.jsxs)(E,{"data-testid":"settings-icon-with-slippage",gap:"sm",displayWarning:d,children:[(0,o.jsx)(y.Tv.Caption,{children:n?a(t):(0,o.jsxs)(x.cC,{children:[{amt:a(t)}," slippage"]})}),(0,o.jsx)(W,{})]})};function R({disabled:e,onClick:n,isActive:t,compact:i,trade:a}){return(0,o.jsx)(z,{disabled:e,onClick:n,isActive:t,id:"open-settings-dialog-button","data-testid":"open-settings-dialog-button","aria-label":x.t`Transaction Settings`,children:(0,o.jsx)(L,{trade:a,compact:i})})}var F=t(54605),H=t(67716),O=t(32115);const D=(0,_.default)(y.Tv.BodySmall).withConfig({displayName:"RouterPreferenceSettings__InlineLink",componentId:"sc-e3f5fade-0"})`
  color: ${({theme:e})=>e.accent1};
  display: inline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;function V(){const[e,n]=(0,Z.si)();return(0,o.jsxs)(r.m0,{gap:"sm",children:[(0,o.jsx)(r.DA,{children:(0,o.jsxs)(s.ZP,{gap:"xs",children:[(0,o.jsx)(y.Tv.BodySecondary,{children:(0,o.jsx)(F.Z,{})}),(0,o.jsxs)(y.Tv.BodySmall,{color:"neutral2",children:[(0,o.jsx)(x.cC,{children:"When available, aggregates liquidity sources for better prices and gas free swaps."})," ",(0,o.jsx)(y.dL,{href:"https://support.uniswap.org/hc/en-us/articles/17515415311501",children:(0,o.jsx)(D,{children:"Learn more"})})]})]})}),(0,o.jsx)(H.Z,{id:"toggle-uniswap-x-button",isActive:e===O.R5.X,toggle:()=>{n(e===O.R5.X?O.R5.API:O.R5.X)}})]})}var Y=t(86082);const G=(0,_.default)(r.ZP).withConfig({displayName:"Expand__ButtonContainer",componentId:"sc-ee490e4b-0"})`
  cursor: pointer;
  justify-content: flex-end;
  width: unset;
`,J=(0,_.default)(Y.Z).withConfig({displayName:"Expand__ExpandIcon",componentId:"sc-ee490e4b-1"})`
  color: ${({theme:e})=>e.neutral2};
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform ${({theme:e})=>e.transition.duration.medium};
`,X=(0,_.default)(s.ZP).withConfig({displayName:"Expand__Content",componentId:"sc-ee490e4b-2"})`
  padding-top: ${({theme:e})=>e.grids.md};
`,q=(0,_.default)(s.ZP).withConfig({displayName:"Expand__Wrapper",componentId:"sc-ee490e4b-3"})`
  padding: ${({$padding:e})=>e};
`;function U({header:e,button:n,children:t,testId:i,isOpen:a,padding:s,onToggle:c}){return(0,o.jsxs)(q,{$padding:s,children:[(0,o.jsxs)(r.m0,{children:[e,(0,o.jsxs)(G,{"data-testid":i,onClick:c,"aria-expanded":a,children:[n,(0,o.jsx)(J,{$isOpen:a})]})]}),(0,o.jsx)(d.Z,{open:a,children:(0,o.jsx)(X,{gap:"md",children:t})})]})}var K,Q=t(92787),ee=t(41902),ne=t(13820),te=t(63490),ie=t.n(te);!function(e){e.InvalidInput="InvalidInput"}(K||(K={}));const oe=ie()("3d")/1e3,ae=/^[0-9\b]+$/;function de(){const[e,n]=(0,Z.A6)(),t=e&&e!==ne.PY?(e/60).toString():"",[i,a]=(0,m.useState)(t),[d,s]=(0,m.useState)(!1),[c,p]=(0,m.useState)(t.length>0);return(0,o.jsx)(U,{isOpen:c,onToggle:()=>p(!c),padding:"6px 0px",testId:"transaction-deadline-settings",header:(0,o.jsxs)(r.ZP,{width:"auto",children:[(0,o.jsx)(y.Tv.BodyPrimary,{children:(0,o.jsx)(x.cC,{children:"Transaction deadline"})}),(0,o.jsx)(Q.Z,{text:(0,o.jsx)(x.cC,{children:"Your transaction will revert if it is pending for more than this period of time."})})]}),button:(0,o.jsxs)(x.cC,{children:[{time:e/60},"m"]}),children:(0,o.jsx)(r.ZP,{children:(0,o.jsxs)(ee.f,{gap:"md",error:!!d,children:[(0,o.jsx)(ee.I,{"data-testid":"deadline-input",placeholder:(ne.PY/60).toString(),value:i,onChange:e=>function(e){if(!(e.length>0)||ae.test(e))if(a(e),s(!1),0!==e.length)try{const t=60*Number.parseInt(e);0===t||t>oe?s(K.InvalidInput):n(t)}catch(t){s(K.InvalidInput)}else n(ne.PY)}(e.target.value),onBlur:()=>{a(t),s(!1)}}),(0,o.jsx)(y.Tv.BodyPrimary,{children:(0,o.jsx)(x.cC,{children:"minutes"})})]})})})}const se=_.default.button.withConfig({displayName:"Settings__CloseButton",componentId:"sc-38ce4354-0"})`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  height: 24px;
  padding: 0;
  width: 24px;
`,re=_.default.div.withConfig({displayName:"Settings__Menu",componentId:"sc-38ce4354-1"})`
  position: relative;
`,ce=(0,_.default)(s.Tz).withConfig({displayName:"Settings__MenuFlyout",componentId:"sc-38ce4354-2"})`
  min-width: 20.125rem;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  position: absolute;
  top: 100%;
  margin-top: 10px;
  right: 0;
  z-index: 100;
  color: ${({theme:e})=>e.neutral1};
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    min-width: 18.125rem;
  `};
  user-select: none;
  padding: 16px;
`,pe=(0,_.default)(s.Tz).withConfig({displayName:"Settings__ExpandColumn",componentId:"sc-38ce4354-3"})`
  gap: 8px;
  padding-top: ${({$padTop:e})=>e?"16px":"0"};
`,le=(0,_.default)(r.ZP).withConfig({displayName:"Settings__MobileMenuContainer",componentId:"sc-38ce4354-4"})`
  overflow: visible;
  position: fixed;
  height: 100%;
  top: 100vh;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${C.k.fixed};
`,ue=(0,_.default)(s.ZP).withConfig({displayName:"Settings__MobileMenuWrapper",componentId:"sc-38ce4354-5"})`
  height: min-content;
  width: 100%;
  padding: 8px 16px 24px;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  position: absolute;
  bottom: ${({$open:e})=>e?"100vh":0};
  transition: bottom ${({theme:e})=>e.transition.duration.medium};
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 12px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: 16px;
  box-shadow: unset;
  z-index: ${C.k.modal};
`,he=(0,_.default)(r.ZP).withConfig({displayName:"Settings__MobileMenuHeader",componentId:"sc-38ce4354-6"})`
  margin-bottom: 16px;
`,xe=(0,_.default)(y.iz).withConfig({displayName:"Settings__StyledDivider",componentId:"sc-38ce4354-7"})`
  margin: 16px 0px;
`;function ge({autoSlippage:e,chainId:n,trade:t,compact:i=!1,hideRoutingSettings:_=!1}){const C=(0,v.x)(),T=Boolean(n&&!p.Ny.includes(n)),Z=(0,m.useRef)(null),k=(0,j.Wt)(b.Lk.SETTINGS),N=(0,j._x)(),P=(0,m.useCallback)((()=>N(b.Lk.SETTINGS)),[N]),B=(0,j.nU)(),M=(0,l.dD)(),W=k&&M,z=k&&!M;(0,h.t)(Z,z?P:void 0),(0,u.Z)(k);const A=(0,I.ye)($.FeatureFlags.MultipleRoutingOptions),E=n&&(0,p.tD)(n),L=Boolean(E&&!_&&!A),F=(0,p.Nb)(n),H=(0,m.useMemo)((()=>(0,o.jsxs)(o.Fragment,{children:[L&&(0,o.jsx)(s.Tz,{gap:"16px",children:(0,o.jsx)(V,{})}),(0,o.jsx)(d.Z,{open:!(0,w.pJ)(t),children:(0,o.jsxs)(pe,{$padTop:L,children:[L&&(0,o.jsx)(y.iz,{}),(0,o.jsx)(S.Z,{autoSlippage:e}),T&&(0,o.jsx)(de,{})]})}),A&&(0,o.jsxs)(o.Fragment,{children:[!(0,w.pJ)(t)&&(0,o.jsx)(xe,{}),(0,o.jsx)(c.Z,{})]})]})),[e,A,T,L,t]);return(0,o.jsxs)(re,{ref:Z,children:[(0,o.jsx)(R,{disabled:!F||n!==C,isActive:k,compact:i,onClick:B,trade:t}),z&&(0,o.jsx)(ce,{children:H}),W&&(0,o.jsx)(g.h,{children:(0,o.jsxs)(le,{"data-testid":"mobile-settings-menu",children:[(0,o.jsx)(a.Z,{onClick:P,$open:!0}),(0,o.jsxs)(ue,{$open:!0,children:[(0,o.jsxs)(he,{padding:"8px 0px 4px",children:[(0,o.jsx)(se,{"data-testid":"mobile-settings-close",onClick:P,children:(0,o.jsx)(f.Z,{size:24})}),(0,o.jsx)(r.ZP,{padding:"0px 24px 0px 0px",justify:"center",children:(0,o.jsx)(y.Tv.SubHeader,{children:(0,o.jsx)(x.cC,{children:"Settings"})})})]}),H]})]})})]})}},65118:(e,n,t)=>{t.d(n,{Z:()=>s,e:()=>d});var i=t(92936),o=t(14411),a=t(62587);const d=o.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${a.k.default};
`;function s(e){return(0,i.jsx)(d,{...e})}}}]);
//# sourceMappingURL=1298.4c043716.chunk.js.map