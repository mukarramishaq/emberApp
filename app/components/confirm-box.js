import Component from '@ember/component';

export default Component.extend({
    actions : {
        confirm : model => {
            this.confirmAction(model);
        },
        cancel : model => {
            this.cancelAction(model);
        }
    }
});
