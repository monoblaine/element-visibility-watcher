/** @license
 * element-visibility-watcher <Prathap Reddy (svap.reddy@hotmail.com)>
 * Date: 2019-03-01
 * License: Apache-2.0
 * 
 * Bundled dependencies (npm packages): 
 * 
*/
var ElementVisibilityWatcher=function(){"use strict";var i=function(t){void 0===t&&(t={}),this.observerOptions=Object.assign({root:null,rootMargin:"0px",threshold:.01},t),this.visibleElementsStack=[],this.observingElements=[],this.observingElementsCallbacks=[],this.initialize()};return i.prototype.triggerCallbacks=function(o,t){var e=this.observingElements,a=this.observingElementsCallbacks,c=o.map(function(t){return t.target}),l=t.map(function(t){return t.target});e.forEach(function(t,e){var i,n,s=c.indexOf(t),r=l.indexOf(t);-1<s&&(i=!0,n=o[s]),-1<r&&(i=!1,n=o[r]),void 0!==i&&a[e](i,n)})},i.prototype.observerCallback=function(t){var n=this,s=[],r=[];t.forEach(function(t){var e=t.target,i=n.visibleElementsStack.indexOf(e);t.isIntersecting?-1===i&&(r.push(t),n.visibleElementsStack.push(t.target)):-1<i&&(s.push(t),n.visibleElementsStack.splice(i,1))}),this.triggerCallbacks(r,s)},i.prototype.initialize=function(){var t=this.observerCallback.bind(this);this.visibilityObserver=new window.IntersectionObserver(t,this.observerOptions)},i.prototype.watch=function(t,e){t&&e&&(this.observingElements.push(t),this.observingElementsCallbacks.push(e),this.visibilityObserver.observe(t))},i.prototype.unwatch=function(t){var e=this.observingElements.indexOf(t);-1<e&&(this.observingElements.splice(e,1),this.observingElementsCallbacks.splice(e,1))},window.Ractive&&(window.Ractive.creteViewportEvent=void 0!==window.IntersectionObserver?function(t){var e=new i(t);return function(i,n){return e.watch(i,function(t,e){n({node:i,original:{visible:t,intersectionData:e}})}),{teardown:function(){e.unwatch(i)}}}}:function(t){return function(t,e){return{teardown:function(){}}}}),i}();
//# sourceMappingURL=ElementVisibilityWatcher.js.map
