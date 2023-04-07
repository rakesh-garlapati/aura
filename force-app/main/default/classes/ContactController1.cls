public with sharing class ContactController1 {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContact(){
        return [SELECT Id,Name, firstName from Contact];
    }
}