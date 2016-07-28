import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  studentId: attr(),
  skillId: attr(),
  percentage: attr(),
  opportunity: attr()
});
