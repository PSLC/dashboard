import Ember from 'ember';

export function getSkillMastery(params/*, hash*/) {
  var skillMasteries = params[0];
  var skillId = params[1];
  var studentId = params[2];
  return skillMasteries[skillId + '-' + studentId];
}

export default Ember.Helper.helper(getSkillMastery);
