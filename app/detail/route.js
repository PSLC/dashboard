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
    var skillMasteries = {};

    model.skillMasteries.forEach(function(item) {
      var skillId = item.get('skillId');
      var studentId = item.get('studentId');
      if (!skillMasteries[skillId]) {
        skillMasteries[skillId] = {};
      }
      skillMasteries[skillId][studentId] = true;
    });

    controller.set('model', model);
    controller.set('skills', model.skills);
    controller.set('students', model.students);
    controller.set("skillMasteries", skillMasteries);
  }
});
