import Controller from '@ember/controller';

export default Controller.extend({
    modelProperties : ['name', 'roll_no'],

    actions : {
        //create student
        createOne(model){
            $student = this.store.createRecord('student', model);
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
