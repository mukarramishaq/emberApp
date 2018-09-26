import Controller from '@ember/controller';

export default Controller.extend({
    modelProperties : ['name', 'credit_hours'],

    actions : {
        //create student
        createOne(model){
            let student = this.store.createRecord('course', model);
        },

        //read all students
        readAll(){

        },

        //read one student
        readOne(){

        },

        //update one student
        updateOne(){

        },

        //delete one student
        deleteOne(){

        }
    }
});
