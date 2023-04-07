public with sharing class ContactController {
   @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList(){
        list<contact> conlist = new list<contact>();
         conlist  = [select Id,firstName,lastName from contact];
        return conlist;
    }
}