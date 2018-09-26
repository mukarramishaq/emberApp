import Controller from '@ember/controller';

export default Controller.extend({
    modelProperties : ['name', 'roll_no'],

    actions : {
        //create student
        createOne({name, roll_no}){
            let student = this.store.createRecord('student', {name, roll_no});
            student.save();
        },

        //read all students
        readAll(){

        },

        //read one student
        readOne(){

        },

        //update one student
        updateOne({id, name, roll_no}){
            this.store.findRecord('student', id).then(student=>{
                student.set('name', name);
                student.set('roll_no', roll_no);
                student.save();
            });
        },

        //delete one student
        deleteOne(){

        }
    }
});
