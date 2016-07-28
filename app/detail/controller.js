import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    sortBySkill(skillId) {
      var skillMasteries = this.get("skillMasteries");
      var model = this.get("model");
      var students = [];
      if (skillMasteries[skillId]) {
        model.students.forEach(function(item) {
          var studentId = item.id;
          if (skillMasteries[skillId][studentId]) {
            students.push(item);
          }
        });
        model.students.forEach(function(item) {
          var studentId = item.id;
          if (!skillMasteries[skillId][studentId]) {
            students.push(item);
          }
        });
        this.set('skillSelected', skillId);
        this.set('students', students);
      } else {
        this.set('skillSelected', null);
        this.set('students', model.students);
      }
    }
  }
});
