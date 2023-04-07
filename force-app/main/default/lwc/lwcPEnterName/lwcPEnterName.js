import { api, LightningElement } from 'lwc';

export default class LwcPEnterName extends LightningElement {
    @api greetings;
    
    changename(event){
        this.greetings = event.target.value ;
    }
}