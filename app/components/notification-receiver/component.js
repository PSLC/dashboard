import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
    var self = this;
    if (!!window.EventSource) {
      var source = new EventSource('http://localhost:3000/live');
      source.addEventListener("notification", function(e) {
        if (self.get("isNotificationOn")) {
          var message = JSON.parse(e.data).message;
          var icon = JSON.parse(e.data).icon;
          var notification = new Notification('New Message', {
            icon: icon,
            body: message
          });
          notification.onclick = function() {};
        }
      }, false);
    }
  },
  actions: {
    toggleNotification() {
      this.toggleProperty('isNotificationOn');
    }
  }
});
