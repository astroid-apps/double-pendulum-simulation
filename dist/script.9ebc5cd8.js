parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hAwa":[function(require,module,exports) {
var n=function(n,t){return n.map(function(n,r){return n+t[r]})},t=function(n,t,r,u){return n.map(function(n,e){return n+t[e]+r[e]+u[e]})},r=function(n,t){return t.map(function(t){return t*n})};module.exports=function(u,e,i){var o=0,c=.5*u,f=u/6;this.step=function(){var a=i(o,e),m=i(o+c,n(e,r(c,a))),p=i(o+c,n(e,r(c,m))),s=i(o+u,n(e,r(u,p)));e=n(e,r(f,t(a,r(2,m),r(2,p),s))),o+=u},this.getX=function(){return e},this.getTime=function(){return o}};
},{}],"tjbw":[function(require,module,exports) {
var t=function(t){return Math.pow(t/7870*3/(4*Math.PI),1/3)},e=function(t,e){t.beginPath(),t.arc(0,0,e,0,2*Math.PI),t.fill()},a=function(t,e,a){t.beginPath(),t.moveTo(0,0),t.lineTo(0,e),t.stroke(),t.closePath(),t.beginPath(),t.arc(0,e,a,0,2*Math.PI),t.fill()};module.exports=function(n,r,o,i){var l=document.getElementById(n);l.width=r,l.height=o;var h=l.getContext("2d");h.fillStyle="rgba(0,0,0,1.0)",h.strokeStyle="rgba(0,0,0,1.0)",this.draw=function(n,l,c,s,f,g){h.save(),h.clearRect(0,0,r,o),h.translate(.5*r,.5*o),e(h,5),h.rotate(-n),a(h,l*i,t(c)*i),h.translate(0,l*i),h.rotate(n-s),a(h,f*i,t(g)*i),h.restore()}};
},{}],"mpVp":[function(require,module,exports) {
var t=require("./RungeKuttaSolver.js"),e=require("./Viewer.js"),o=document.getElementById("info"),a=function(t,e){return(e-t)*Math.random()+t},i=a(1,5),n=a(.1,.9),r=a(-3,3),d=a(1,5),h=a(.1,1-n),s=a(-3,3),M=9.80665,c=1+i/d,u=new t(.001,[r,0,s,0],function(t,e){var o=Math.sin(e[0]),a=Math.sin(e[2]),i=Math.sin(e[0]-e[2]),r=Math.cos(e[0]-e[2]),d=n*Math.pow(e[1],2),s=h*Math.pow(e[3],2),u=c-Math.pow(r,2);return[e[1],(M*(a*r-c*o)-(s+d*r)*i)/(n*u),e[3],(M*c*(o*r-a)+(c*d+s*r)*i)/(h*u)]}),x=new e("cv",300,300,150);setInterval(function(){var t=u.getX()[0],e=u.getX()[1],a=u.getX()[2],r=u.getX()[3],s=n*e*Math.cos(t),c=n*e*Math.sin(t),F=s+h*r*Math.cos(a),g=c+h*r*Math.sin(a),v=-n*Math.cos(t),w=v-h*Math.cos(a),m=i*(s*s+c*c)*.5,f=d*(F*F+g*g)*.5,p=i*M*(n+v),X=d*M*(n+h+w);x.draw(t,n,i,a,h,d),o.innerHTML=["t[s]="+u.getTime().toFixed(2),"th1[rad]="+t.toFixed(2),"th1'[rad/s]="+e.toFixed(2),"th2[rad]="+a.toFixed(2),"th2'[rad/s]="+r.toFixed(2),"L1[m]="+n.toFixed(2),"M1[kg]="+i.toFixed(2),"L2[m]="+h.toFixed(2),"M2[kg]="+d.toFixed(2),"E[J]="+(m+f+p+X).toFixed(4)].join("<br>");for(var j=0;j<30;j++)u.step()},30);
},{"./RungeKuttaSolver.js":"hAwa","./Viewer.js":"tjbw"}]},{},["mpVp"], null)
//# sourceMappingURL=script.9ebc5cd8.js.map