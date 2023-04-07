import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount'

export default class LwcAApexWIreMethodToProperty extends LightningElement {
    @wire(getAccount) Accounts;
}