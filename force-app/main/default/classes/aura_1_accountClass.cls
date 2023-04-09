public with sharing class aura_1_accountClass {
    @auraEnabled
    public static Account accountid(){
        Account a = [select id, name,phone from Account limit 1];
        return a;
    }

    @auraEnabled
    public static account accountwitha(){
        Account a = [select id, name, phone from Account where name LIKE 'a%' limit 1];
        return a;
    }
}