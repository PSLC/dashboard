import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    var student = this.get('student');
    var skill = this.get('skill');
    var skillMasteries = this.get('skillMasteries');
    if (skillMasteries[skill.id] && skillMasteries[skill.id][student.id]) {
      var studentInfo = skillMasteries[skill.id][student.id];
      this.set('opportunity', studentInfo.opportunity);
      if (studentInfo.percentage > 0.95) {
        this.set('status', 'Mastered');
      } else if (studentInfo.opportunity < 10) {
        this.set('status', 'Not Enough Opportunity');
      } else {
        this.set('status', 'Not Mastered');
      }
    } else {
      this.set('opportunity', 0);
      this.set('status', 'Not Enough Opportunity');
    }
  }
});
