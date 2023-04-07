import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';


export default class LwcApexImperativeMethod extends LightningElement {

    handleLoad(){
        
        console.log('this is an example of the imerative method');
    @wire(getContactList) Contact;
    }
}