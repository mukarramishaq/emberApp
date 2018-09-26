import Component from '@ember/component';

export default Component.extend({
    actions:{
        createIt(model){
            console.log(model.name, model.roll_no);
            this.createObject(model);
        },

        editIt(model){
            console.log("Updating...",model.id, model.name, model.roll_no);
            this.updateObject(model);
        }
    }
});
