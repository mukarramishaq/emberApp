import Controller from '@ember/controller';

export default Controller.extend({
    modelProperties : ['name', 'credit_hours'],

    actions : {
        //create teacher
        createOne({name, credit_hours}){
            let course = this.store.createRecord('course', {name, credit_hours});
            course.save();
        },

        //read all courses
        readAll(){

        },

        //read one course
        readOne(){

        },

        //update one course
        updateOne(){

        },

        //delete one course
        deleteOne({id, name, credit_hours}){
            this.store.findRecord('course', id, { reload: true }).then(course=>{
                console.log(course);
                course.destroyRecord();
            });
        }
    }
});
