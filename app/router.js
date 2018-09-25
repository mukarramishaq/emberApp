import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('students', function() {
    this.route('create');
  });
  this.route('teachers', function() {
    this.route('create');
  });
  this.route('courses', function() {
    this.route('create');
  });
});

export default Router;
