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
      var percentage = item.get('percentage');
      var opportunity = item.get('opportunity');
      if (!skillMasteries[skillId]) {
        skillMasteries[skillId] = {};
      }
      skillMasteries[skillId][studentId] = {percentage: percentage, opportunity: opportunity};
    });

    var skillData = [];
    model.skills.forEach(function(item) {
      var label = item.get('name');
      var skillId = item.get('id');
      var value = 0;
      if (skillMasteries[skillId]) {
        for (var studentId in skillMasteries[skillId]) {
          var ms = skillMasteries[skillId][studentId];
          if (ms.percentage > 0.95) {
            value += 1;
          }
        }
      }
      skillData.push({
        label: label,
        value: value,
        id: skillId
      });
    });

    controller.set('model', model);
    controller.set('skills', model.skills);
    controller.set('students', model.students);
    controller.set('skillMasteries', skillMasteries);
    controller.set('skillData', skillData);
    controller.set('menu', "detail");
  }
});
