public with sharing class createaccountandreturn {
    @auraEnabled
    public static account createaccount(string name , string phone , string Rating){
        account a = new account();
        a.Name = name ;
        a.phone = phone;
        a.Rating = Rating;
        insert a ;
        return a;
    }
}