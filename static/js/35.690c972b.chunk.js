(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1135:function(e,a,t){"use strict";t.r(a);var r=t(224),s=t(225),c=t(227),n=t(226),l=t(228),o=t(3),i=t.n(o),u=t(880),m=t(881),d=t(883),b=t(885),f=t(884),p=t(35),g=t(98),v=t(108),j=t.n(v),E=t(875),N=t.n(E),O=t(876),h={tag:O.p,listTag:O.p,className:j.a.string,listClassName:j.a.string,cssModule:j.a.object,children:j.a.node,"aria-label":j.a.string},y=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,c=e.tag,n=e.listTag,l=e["aria-label"],o=Object(g.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(O.l)(N()(a),r),m=Object(O.l)(N()("breadcrumb",t),r);return i.a.createElement(c,Object(p.a)({},o,{className:u,"aria-label":l}),i.a.createElement(n,{className:m},s))};y.propTypes=h,y.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var M=y,T={tag:O.p,active:j.a.bool,className:j.a.string,cssModule:j.a.object},w=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,c=Object(g.a)(e,["className","cssModule","active","tag"]),n=Object(O.l)(N()(a,!!r&&"active","breadcrumb-item"),t);return i.a.createElement(s,Object(p.a)({},c,{className:n,"aria-current":r?"page":void 0}))};w.propTypes=T,w.defaultProps={tag:"li"};var x=w,P=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(m.a,{xs:"12"},i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Breadcrumbs"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(f.a,null,i.a.createElement(M,null,i.a.createElement(x,{active:!0},"Home")),i.a.createElement(M,null,i.a.createElement(x,null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement(x,{active:!0},"Library")),i.a.createElement(M,null,i.a.createElement(x,null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement(x,null,i.a.createElement("a",{href:"#"},"Library")),i.a.createElement(x,{active:!0},"Data")),i.a.createElement(M,{tag:"nav"},i.a.createElement(x,{tag:"a",href:"#"},"Home"),i.a.createElement(x,{tag:"a",href:"#"},"Library"),i.a.createElement(x,{tag:"a",href:"#"},"Data"),i.a.createElement(x,{active:!0,tag:"span"},"Bootstrap")))))))}}]),a}(o.Component);a.default=P},877:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},880:function(e,a,t){"use strict";var r=t(35),s=t(98),c=t(3),n=t.n(c),l=t(108),o=t.n(l),i=t(875),u=t.n(i),m=t(876),d={tag:m.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},b=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,l=e.tag,o=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.l)(u()(a,c?"no-gutters":null,o?"form-row":"row"),t);return n.a.createElement(l,Object(r.a)({},i,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},881:function(e,a,t){"use strict";var r=t(35),s=t(98),c=t(877),n=t.n(c),l=t(3),o=t.n(l),i=t(108),u=t.n(i),m=t(875),d=t.n(m),b=t(876),f=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:f,offset:f})]),g={tag:b.p,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,c=e.widths,l=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];c.forEach((function(a,r){var s=e[a];if(delete i[a],s||""===s){var c=!r;if(n()(s)){var l,o=c?"-":"-"+a+"-",m=j(c,a,s.size);u.push(Object(b.l)(d()(((l={})[m]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l)),t))}else{var f=j(c,a,s);u.push(f)}}})),u.length||u.push("col");var m=Object(b.l)(d()(a,u),t);return o.a.createElement(l,Object(r.a)({},i,{className:m}))};E.propTypes=g,E.defaultProps=v,a.a=E},883:function(e,a,t){"use strict";var r=t(35),s=t(98),c=t(3),n=t.n(c),l=t(108),o=t.n(l),i=t(875),u=t.n(i),m=t(876),d={tag:m.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.l)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(d,Object(r.a)({},f,{className:p,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},884:function(e,a,t){"use strict";var r=t(35),s=t(98),c=t(3),n=t.n(c),l=t(108),o=t.n(l),i=t(875),u=t.n(i),m=t(876),d={tag:m.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.l)(u()(a,"card-body"),t);return n.a.createElement(l,Object(r.a)({},o,{className:i,ref:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},885:function(e,a,t){"use strict";var r=t(35),s=t(98),c=t(3),n=t.n(c),l=t(108),o=t.n(l),i=t(875),u=t.n(i),m=t(876),d={tag:m.p,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(m.l)(u()(a,"card-header"),t);return n.a.createElement(c,Object(r.a)({},l,{className:o}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=35.690c972b.chunk.js.map