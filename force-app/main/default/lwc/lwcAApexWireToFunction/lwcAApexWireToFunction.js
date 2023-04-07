import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';


export default class LwcAApexWireToFunction extends LightningElement {
    Accounts;
    error;
    @wire(getAccount)
    wiredContacts({error , data}){
        if(data){
            this.Accounts = data ;
            this.error = undefined;
        }else if(error){
            this.Accounts = undefined;
            this.error = error;
        }

    }
}