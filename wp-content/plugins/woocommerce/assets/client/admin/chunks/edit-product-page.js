"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3307],{89097:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(69307),o=r(70444);const n=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.Path,{d:"M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"}))},17652:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var a=r(69307),o=r(65736),n=r(67221),i=r(14599),c=r(9818),s=r(86020),l=r(85597),d=r(95659),u=r(36279),m=r(5267),p=r(98817),v=r(23374),_=r(70444);const E=(0,a.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(_.Path,{d:"M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"}));var w=r(89097),g=r(83849),h=r.n(g);function P(e){let{actionLabel:t,actionHref:r,prevHref:n,prevLabel:i,nextHref:c,nextLabel:l,className:d,...u}=e;const p={className:"posts-navigation__prev","aria-label":null!=i?i:(0,o.__)("Previous post","woocommerce"),children:(0,a.createElement)(v.Z,{icon:E,size:24,fill:"currentColor"})},_={className:"posts-navigation__next","aria-label":null!=l?l:(0,o.__)("Next post","woocommerce"),children:(0,a.createElement)(v.Z,{icon:w.Z,size:24,fill:"currentColor"})};return(0,a.createElement)("nav",(0,m.Z)({},u,{className:h()(d,"posts-navigation")}),n?(0,a.createElement)(s.Link,(0,m.Z)({},p,{type:"wc-admin",href:n})):(0,a.createElement)("div",(0,m.Z)({},p,{tabIndex:-1,role:"button","aria-disabled":"true"})),(0,a.createElement)(s.Link,{className:"posts-navigation__action",type:"wc-admin",href:r},t),c?(0,a.createElement)(s.Link,(0,m.Z)({},_,{type:"wc-admin",href:c})):(0,a.createElement)("div",(0,m.Z)({},_,{tabIndex:-1,role:"button","aria-disabled":"true"})))}var f=r(19132),b=r(55609),N=r(46530),I=r(51393),R=r(10431);const k=()=>{const{productId:e,variationId:t}=(0,l.UO)(),{isDirty:r,isValidForm:i,values:d}=(0,s.useFormContext)(),{updateProductVariation:u}=(0,c.useDispatch)(n.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME),{createNotice:m}=(0,c.useDispatch)("core/notices"),[p,v]=(0,a.useState)(!1);(0,R.useConfirmUnsavedChanges)(r,I.preventLeavingProductForm);const _=async()=>{v(!0),u({id:t,product_id:e,context:"edit"},{...d,manage_stock:"parent"===d.manage_stock||null==d?void 0:d.manage_stock}).then((()=>{m("success",`🎉‎ ${(0,o.__)("Product variation successfully updated.","woocommerce")}`)})).catch((()=>{m("error",(0,o.__)("Failed to updated product variation.","woocommerce"))})).finally((()=>{v(!1)}))};return(0,a.createElement)(N.WooHeaderItem,null,(()=>(0,a.createElement)("div",{className:"woocommerce-product-form-actions is-variation"},(0,a.createElement)(b.Button,{href:d.permalink+"?preview=true",disabled:!i||!d.permalink,target:"_blank",className:"woocommerce-product-form-actions__preview"},(0,o.__)("Preview","woocommerce")),(0,a.createElement)(b.ButtonGroup,{className:"woocommerce-product-form-actions__publish-button-group"},(0,a.createElement)(b.Button,{onClick:_,variant:"primary",isBusy:p,disabled:!i||!r},(0,o.__)("Save","woocommerce"))))))};(0,p.registerPlugin)("product-variation-action-buttons-header-item",{render:k,icon:"admin-generic"});var x=r(39616);const A=()=>(0,a.createElement)(a.Fragment,null,(0,a.createElement)(x.t,null),(0,a.createElement)(k,null)),L=e=>{let{product:t,productVariation:r}=e;const n=(0,a.useRef)(),i=(0,a.useRef)(null),c=function(e){var t;let{product:r,productVariation:a}=e;const{variations:o}=r,n=null!=o?o:[],i=n.indexOf(null!==(t=a.id)&&void 0!==t?t:-1),c=i>0,s=i<n.length-1,l=c?n[i-1]:void 0,d=s?n[i+1]:void 0,u=(0,R.getPersistedQuery)();return{actionHref:(0,R.getNewPath)(u,`/product/${r.id}`,{}),prevHref:l?(0,R.getNewPath)(u,`/product/${r.id}/variation/${l}`,{}):void 0,nextHref:d?(0,R.getNewPath)(u,`/product/${r.id}/variation/${d}`,{}):void 0}}({product:t,productVariation:r});return(0,a.useEffect)((()=>{var e;r&&n.current!==r.id&&(null===(e=i.current)||void 0===e||e.resetForm(r),n.current=r.id)}),[r]),(0,a.createElement)(s.SlotContextProvider,null,(0,a.createElement)(s.Form,{initialValues:r,errors:{},ref:i},(0,a.createElement)(A,null),(0,a.createElement)(u.a,{key:r.id,id:"variation",product:r}),(0,a.createElement)(f.H,null),(0,a.createElement)("div",{className:"product-variation-form__navigation"},(0,a.createElement)(P,(0,m.Z)({},c,{actionLabel:(0,o.__)("Return to main product","woocommerce"),prevLabel:(0,o.__)("Previous product variation","woocommerce"),nextLabel:(0,o.__)("Next product variation","woocommerce")}))),(0,a.createElement)(p.PluginArea,{scope:"woocommerce-product-editor"})))};r(33781);const T=()=>{var e,t;const{productId:r,variationId:m}=(0,l.UO)(),p=!!m,v=(0,a.useRef)(),_=(0,a.useRef)(null),{product:E,isLoading:w,isPendingAction:g,productVariation:h}=(0,c.useSelect)((e=>{const{getProduct:t,hasFinishedResolution:a,isPending:o,getPermalinkParts:i}=e(n.PRODUCTS_STORE_NAME),{hasFinishedResolution:c}=e(n.EXPERIMENTAL_PRODUCT_FORM_STORE_NAME),{getProductVariation:s,hasFinishedResolution:l}=e(n.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME);if(r){const e=t(parseInt(r,10),void 0);return{product:i(parseInt(r,10))&&e?e:void 0,productVariation:p&&s({id:parseInt(m,10),product_id:parseInt(r,10)}),isLoading:!(a("getProduct",[parseInt(r,10)])&&a("getPermalinkParts",[parseInt(r,10)])&&p&&l("getProductVariation",[parseInt(m,10)])&&c("getProductForm")),isPendingAction:o("createProduct")||o("deleteProduct",parseInt(r,10))||o("updateProduct",parseInt(r,10))}}return{isLoading:!1,isPendingAction:!1}}));(0,a.useEffect)((()=>{v.current&&E&&v.current.id!==E.id&&_.current&&_.current.resetForm(E),v.current=E}),[E]),(0,a.useEffect)((()=>{(0,i.recordEvent)("view_new_product_management_experience")}),[]);const P=(null===(e=v.current)||void 0===e?void 0:e.id)===(null==E?void 0:E.id)&&"trash"!==(null===(t=v.current)||void 0===t?void 0:t.status)&&"trash"===(null==E?void 0:E.status);return(0,a.createElement)("div",{className:"woocommerce-edit-product"},w&&!E?(0,a.createElement)("div",{className:"woocommerce-edit-product__spinner"},(0,a.createElement)(s.Spinner,null)):null,E&&"trash"===E.status&&!g&&!P&&(0,a.createElement)(u.a,{id:"error"},(0,a.createElement)("div",{className:"woocommerce-edit-product__error"},(0,o.__)("You cannot edit this item because it is in the Trash. Please restore it and try again.","woocommerce"))),window.wcAdminFeatures["product-variation-management"]&&h&&E&&(0,a.createElement)(L,{product:E,productVariation:h}),!p&&E&&("trash"!==E.status||P)&&(0,a.createElement)(d.H,{formRef:_,product:E}))}}}]);