import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<header class=\"top-header\">\n<nav class=\"main-nav\">\n<a href=\"#\">Start</a>\n<a>Comic</a>\n<a href=\"/about\">About</a>\n<a>Contact</a>\n</nav>\n</header>\n<main class=\"main-section\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</main>\n<footer class=\"main-footer\">\n</footer>\n");
  return buffer;
  
});
