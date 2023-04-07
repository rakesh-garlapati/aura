import { LightningElement } from 'lwc';

export default class LwcPDatatable extends LightningElement {
    contact = [
        {
            id : '1',
            name :'sameera',
            phone : '7780535456'
        },
        {
            id : '2',
            name :'rakesh',
            phone : '7780535456'
        },
        {
            id : '3',
            name :'sai krishna',
            phone : '789456123'
        }
    ];
    columns = [
        {label : 'id', fieldName : 'id'},
        {label : 'name', fieldName : 'name', type : 'string'},
        {label : 'phone', fieldName : 'phone' , type : 'string'}
    ];
    select(event){
        const selected = event.detail.selectedRows ;
        for( let i = 0 ; i < selected.length ; i++){
            alert("you selected" +selected[i].id);
        }
    }
}