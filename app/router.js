import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('students', function() {
    this.route('create');
    this.route('edit', {path:'/edit/:student_id'});
    this.route('delete', {path:'/delete/:student_id'});
  });
  this.route('teachers', function() {
    this.route('create');
      this.route('edit', {path:'/edit/:teacher_id'});
      this.route('delete', {path:'/delete/:teacher_id'});
  });
  this.route('courses', function() {
    this.route('create');
      this.route('edit', {path:'/edit/:course_id'});
      this.route('delete', {path:'/delete/:course_id'});
  });
});

export default Router;
