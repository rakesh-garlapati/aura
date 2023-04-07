import { LightningElement ,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class LwcApexWireMethodToProperty extends LightningElement {
    @wire(getContactList) contact;
}