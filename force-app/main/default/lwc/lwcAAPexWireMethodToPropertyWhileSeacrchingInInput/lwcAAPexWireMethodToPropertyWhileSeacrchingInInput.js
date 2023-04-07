import { LightningElement, wire } from 'lwc';
import getAccount1 from '@salesforce/apex/AccountController.getAccount1';

export default class LwcAAPexWireMethodToPropertyWhileSeacrchingInInput extends LightningElement {
    searchtext = '';
    change(event){
        this.searchtext = event.target.value ;
    }
    @wire(getAccount1,{searchText: 'searchtext'}) Accounts;
}