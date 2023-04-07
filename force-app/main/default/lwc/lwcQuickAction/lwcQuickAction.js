import { api, LightningElement } from 'lwc';

export default class LwcQuickAction extends LightningElement {
    @api invoke(){
        console.log('this is qick action');
    }
}