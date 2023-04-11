public with sharing class createaccountandreturn {
    @auraEnabled
    public static account createaccount(string name , string rating){
        account a = new account();
        a.Name = name ;
        a.Rating = rating;
        insert a ;
        return a;
    }
}