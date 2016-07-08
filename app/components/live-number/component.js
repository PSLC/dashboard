import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.time = "";
    var self = this;
    if (!!window.EventSource) {
      var source = new EventSource('http://localhost:3000/live');
      source.addEventListener("message", function(e) {
        //console.log(JSON.parse(e.data));
        self.set("time", JSON.parse(e.data).time);
      }, false);
    }
  }
});
