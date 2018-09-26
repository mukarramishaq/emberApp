import Controller from '@ember/controller';

export default Controller.extend({
    modelProperties : ['name'],

    actions : {
        //create teacher
        createOne({name}){
            let teacher = this.store.createRecord('teacher', {name});
            teacher.save();
        },

        //read all teachers
        readAll(){

        },

        //read one teacher
        readOne(){

        },

        //update one teacher
        updateOne(){

        },

        //delete one teacher
        deleteOne({id, name}){
            this.store.findRecord('teacher', id, { reload: true }).then(teacher=>{
                console.log(teacher);
                teacher.destroyRecord();
            });
        }
    }
});
