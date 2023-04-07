public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount(){
        
            return  [SELECT Id,Name,Phone FROM Account ];
        
        
    }
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccount1(string searchText){
        string hey = '%' + searchText + '%';
            return  [SELECT Id,Name,Phone FROM Account WHERE Name LIKE :hey ];
    
    }
}