import Component from '@ember/component';

export default Component.extend({
  "isH1" : false,
  actions: {
    "toggleProperty" : function(){this.toggleProperty("isH1")},
  }
});
