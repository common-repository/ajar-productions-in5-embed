!function(e){function t(n){if(A[n])return A[n].exports;var i=A[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var A={};t.m=e,t.c=A,t.d=function(e,A,n){t.o(e,A)||Object.defineProperty(e,A,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var A=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(A,"a",A),A},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});A(1)},function(e,t,A){"use strict";var n=A(2),i=(A.n(n),A(3)),o=(A.n(i),wp.element.RawHTML),l=wp.i18n.__,c=wp.blocks.registerBlockType,r=wp.editor,a=r.BlockControls,m=r.PlainText,p=(wp.compose.withState,wp.components),d=p.Disabled,s=p.SandBox,b=p.SVG,w=(p.Path,p.Button),u=p.DropdownMenu;c("cgb/block-in5-wp-embed",{title:l("in5 Embed"),icon:wp.element.createElement(b,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("image",{id:"image0",width:"22",height:"22",x:"0",y:"0",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAkFBMVEXgTCQAAAAAAADbSiTY\nSiIAAADLRiDUSiLRRiIAAADTSCC6Px7ERCK1Ph0AAACvPBwAAACHLhYAAAA3EwcAAAC9QiCbNRm7\nQB6VNBhQHA7kTibnVCbqWijvZCrqZDnlWjTwlHf608n72s35xK/1n3r////relzvnYXtYCj3s5Xz\njV7/9fPxp5Pzg1LpcE7xbjbTB3rwAAAAGnRSTlO7DzCF7SLVVtMWRLAloQiRBWoBPh+tdcKSWeLV\ndsAAAAABYktHRCXDAckPAAAAB3RJTUUH4gsOBSYLUpDOTAAAAPJJREFUGNNt0dt2gyAQBdDBio1N\nSgixt0E0ipBE2+b//64zamovOW9sWAvOAIA3ImBhW86xmMDdN5dujk3lLcZMwv1IVY14aFrfjbzK\n4YHRh4hN4HjmdQ4biyzxGKZ07oSPAhQy+5q2zv2Zj59wq0ATH6tDRexcH0LjStwpMCvEOIR45ZZZ\ngwGLbfjNe+bpyoWppAFDfTytwsLpzPH65D4MnbOZJOaa76RNRTx8cMmCmGtiHT95JpeLo2c/5cSb\nP6PiksT6H2+ZzU8uLY1op5iL53U2/g4Jpi+vb4VhNkrIPW1ZpkTmykxM0UoUSSKF0tP6C6OtMP9L\nXovJAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTE0VDEyOjM4OjExLTA3OjAwdB3nUwAAACV0\nRVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0xNFQxMjozODoxMS0wNzowMAVAX+8AAAAASUVORK5CYII="})),category:"embed",keywords:[l("in5 Embed"),l("create-guten-block")],supports:{html:!1},attributes:{content:{type:"string",selector:".in5-embed-content"},active:{type:"string",source:"attribute",attribute:"active"},mode:{type:"string",selector:".wp-block-cgb-block-in5-wp-embed",source:"attribute",attribute:"data-mode",default:"edit"}},edit:function(e){var t=e.attributes,A=(e.className,e.setAttributes),n=(t.content,t.active,t.mode),i=[{title:l("Edit visually"),icon:"edit",onClick:function(){return A({mode:"edit"})}},{title:l("Edit as HTML"),icon:"html",onClick:function(){return A({mode:"html"})}},{title:l("Preview"),icon:"visibility",onClick:function(){return A({mode:"preview"})}}],o=function(e){A({content:e})},c=function(){A({active:"open"}),jQuery(".in5-embed-popup").show(),jQuery(".media-modal-backdrop").show(),jQuery(".in5-file-list li").length<1&&(jQuery(".in5-library.pane").hide(),jQuery(".in5-upload.pane").show(),jQuery(".tab-library").removeClass("active"),jQuery(".tab-upload").addClass("active"))};return wp.element.createElement("div",{className:"wp-block-embed wp-block-cgb-block-in5-wp-embed","data-mode":n},wp.element.createElement(a,null,wp.element.createElement("div",{className:"components-toolbar in5-dropdown-mode"},wp.element.createElement(u,{icon:"menu",label:l("Select mode"),controls:i}))),wp.element.createElement(d.Consumer,null,function(e){return"preview"===n||e?wp.element.createElement(s,{html:t.content}):"edit"===n?wp.element.createElement("div",{className:"components-placeholder wp-block-embed"},wp.element.createElement("div",{className:"components-placeholder__label"},wp.element.createElement(b,{viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("image",{id:"image0",width:"25",height:"25",x:"0",y:"0",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAkFBMVEXgTCQAAAAAAADbSiTY\nSiIAAADLRiDUSiLRRiIAAADTSCC6Px7ERCK1Ph0AAACvPBwAAACHLhYAAAA3EwcAAAC9QiCbNRm7\nQB6VNBhQHA7kTibnVCbqWijvZCrqZDnlWjTwlHf608n72s35xK/1n3r////relzvnYXtYCj3s5Xz\njV7/9fPxp5Pzg1LpcE7xbjbTB3rwAAAAGnRSTlO7DzCF7SLVVtMWRLAloQiRBWoBPh+tdcKSWeLV\ndsAAAAABYktHRCXDAckPAAAAB3RJTUUH4gsOBSYLUpDOTAAAAPJJREFUGNNt0dt2gyAQBdDBio1N\nSgixt0E0ipBE2+b//64zamovOW9sWAvOAIA3ImBhW86xmMDdN5dujk3lLcZMwv1IVY14aFrfjbzK\n4YHRh4hN4HjmdQ4biyzxGKZ07oSPAhQy+5q2zv2Zj59wq0ATH6tDRexcH0LjStwpMCvEOIR45ZZZ\ngwGLbfjNe+bpyoWppAFDfTytwsLpzPH65D4MnbOZJOaa76RNRTx8cMmCmGtiHT95JpeLo2c/5cSb\nP6PiksT6H2+ZzU8uLY1op5iL53U2/g4Jpi+vb4VhNkrIPW1ZpkTmykxM0UoUSSKF0tP6C6OtMP9L\nXovJAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTE0VDEyOjM4OjExLTA3OjAwdB3nUwAAACV0\nRVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0xNFQxMjozODoxMS0wNzowMAVAX+8AAAAASUVORK5CYII="})),"In5 Embed"),wp.element.createElement("div",{className:"components-placeholder__fieldset"},wp.element.createElement(w,{onClick:c,className:"button button-large in5-media-button",active:t.active},l("Click to embed here")))):wp.element.createElement("div",null,wp.element.createElement(m,{value:t.content,onChange:o,placeholder:l("Write HTML\u2026"),"aria-label":l("HTML"),className:"in5-embed-content"}))}))},save:function(e){var t=e.attributes;return wp.element.createElement(o,{"data-mode":t.mode},t.content)}})},function(e,t){},function(e,t){}]);