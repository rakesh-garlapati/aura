import { api, LightningElement } from 'lwc';

export default class LwcPToggle extends LightningElement {
    @api val;
    change(event){
        this.val = event.target.checked;
    }
}