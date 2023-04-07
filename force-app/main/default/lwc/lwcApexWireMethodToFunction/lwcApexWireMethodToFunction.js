import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';


export default class LwcApexWireMethodToFunction extends LightningElement {
    contact;
    error;
    @wire(getContactList)
    wireContacts({ error,data }){
        if(data){
            this.contact = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.contact = undefined;
        }
    }

}