import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    selectMenu(menuName) {
      this.set("menu", menuName);
    }
  }
});
