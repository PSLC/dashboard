import Ember from 'ember';

export function getSkillMastery(params/*, hash*/) {
  var skillMasteries = params[0];
  var skillId = params[1];
  var studentId = params[2];
  if (skillMasteries[skillId] && skillMasteries[skillId][studentId]) {
    var studentInfo = skillMasteries[skillId][studentId];
    if (studentInfo.percentage > 0.95) {
      return "skillMastered";
    } else if (studentInfo.opportunity < 10) {
      return "NotEnoughOpportunity";
    } else {
      return "skillNotMastered";
    }
  }
  return "NotEnoughOpportunity";
}

export default Ember.Helper.helper(getSkillMastery);
