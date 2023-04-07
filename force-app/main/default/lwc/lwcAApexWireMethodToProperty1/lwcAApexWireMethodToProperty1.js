import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactController1.getContact';

export default class LwcAApexWireMethodToProperty1 extends LightningElement {
    @wire(getContact) contacts;
}