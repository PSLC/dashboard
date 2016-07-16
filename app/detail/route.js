import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      skills: this.store.findAll('skill'),
      students: this.store.findAll('student'),
      skillMasteries: this.store.findAll('skill-mastery')
    });
  },
  setupController(controller, model) {
    var skillMasteries = [];

    model.skillMasteries.forEach(function(item) {
      var key = item.get('skillId') + '-' + item.get('studentId');
      skillMasteries[key] = true;
    });

    controller.set('model', model);
    controller.set("skillMasteries", skillMasteries);
  }
});
