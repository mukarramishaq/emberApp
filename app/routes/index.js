import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  i18n: Ember.inject.service(),
  beforeModel(){
    this.set("i18n.locale", "es");
  }
});
