import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';

export default class LwcAApexWireMethodToPropertyAccount1 extends LightningElement {
    @wire(getAccount) Accounts;
}