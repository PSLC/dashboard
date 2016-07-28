import Ember from 'ember';

export function getSkillMastery(params/*, hash*/) {
  var skillMasteries = params[0];
  var skillId = params[1];
  var studentId = params[2];
  if (skillMasteries[skillId]) {
    return skillMasteries[skillId][studentId];
  }
  return false;
}

export default Ember.Helper.helper(getSkillMastery);
