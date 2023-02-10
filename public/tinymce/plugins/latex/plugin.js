!function(u){"use strict";var d=(t.render=function(t){t&&t.typeset&&t.typeset()},t.mathify=function(t){return"$$"+t+"$$"},t.renderInIframe=function(t,e,n){var a=e.body.querySelector("div");a||((a=e.createElement("div")).classList.add("math-tex-original"),e.body.appendChild(a)),a.innerHTML=this.mathify(n),this.render(t.MathJax)},t);function t(){}var e=function(t){this.renderIframeID=t.dom.uniqueId(),this.conf=t.settings.latex,this.scripts=new Array,this.scripts.push(this.conf.mathJax.lib)},m=(n.conf=function(t,e,n){this.initConf(t),this.importJavaScript(e,n.scripts)},n.initConf=function(t){t.MathJax={options:{processHtmlClass:"math-tex-original",ignoreHtmlClass:".*"}}},n.importJavaScript=function(n,t){t.forEach(function(t){var e=n.createElement("script");e.src=t,e.type="text/javascript",e.async=!1,e.charset="utf-8",n.head.appendChild(e)})},n);function n(){}function a(o){var c;function l(t){return t.getData().input.trim()}o.on("GetContent",function(t){var e=u.document.createElement("div");e.innerHTML=t.content;for(var n=0,a=e.querySelectorAll(".math-tex");n<a.length;n++){for(var i=a[n],r=i.querySelectorAll("span"),o=0;o<r.length;o++)r[o].remove();var c=i.getAttribute("data-latex");i.removeAttribute("contenteditable"),i.removeAttribute("style"),i.removeAttribute("data-latex"),i.innerHTML=c}t.content=e.innerHTML}),o.on("BeforeSetContent",function(t){var e=u.document.createElement("div");e.innerHTML=t.content;for(var n=0,a=e.querySelectorAll(".math-tex");n<a.length;n++){var i=a[n];r(i)}t.content=e.innerHTML}),o.on("SetContent",function(){d.render(o.getDoc().defaultView.MathJax)}),o.on("click",function(t){var e=t.target.closest(".math-tex");e&&n(e)});var r=function(t){var e=t.getAttribute("data-latex")||t.innerHTML;s(t,e)},s=function(t,e){t.classList.add("math-tex"),t.innerHTML="",t.style.cursor="pointer",t.style.display="inline-block",t.style.marginLeft="5px",t.style.marginRight="5px",t.setAttribute("contenteditable",!1),t.setAttribute("data-latex",e);var n=o.dom.create("span");n.innerHTML=e,n.classList.add("math-tex-original"),t.appendChild(n)},n=function(t){var n,a,e="";if(t&&t.getAttribute){var i=t.getAttribute("data-latex");4<=i.length&&(e=i.substr(2,i.length-4))}o.windowManager.open({title:"Latex 公式录入",body:{type:"panel",items:[{type:"textarea",name:"input"},{type:"htmlpanel",name:"render",html:'<iframe id="'+c.renderIframeID+'" style="width: 100%"></iframe>\n                 <p style="text-align: center; font-size: 12px; color: #1677ff;">很抱歉, 受第三方开源库MathJax 3.0限制, TinyMCE Latex暂不支持公式换行</p>'}]},buttons:[{type:"submit",text:"保存"}],size:"large",onChange:function(t){var e=l(t);d.renderInIframe(n,a,e)},onSubmit:function(t){var e=l(t),n=o.getDoc().createElement("span");s(n,d.mathify(e)),o.insertContent(n.outerHTML),t.close()},initialData:{input:e}});var r=u.document.getElementById(c.renderIframeID);n=r.contentWindow,a=r.contentDocument,m.conf(n,a,c),d.renderInIframe(n,a,e)};o.ui.registry.addButton("tinymce-latex",{text:"LaTex",onSetup:function(){c=new e(o),m.conf(o.dom.win,o.dom.doc,c)},onAction:n})}tinymce.PluginManager.add("tinymce-latex",a)}(window);