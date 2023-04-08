({
    callme : function(component, event, helper) {
        var amount = component.get("v.amount");
        var rate =component.get("v.rate");
        var year =component.get("v.year");
        var intrest = (parseInt(amount)*parseInt(rate)*parseInt(year))/100;
if(intrest> 100){
    component.get("v.flag",true);
}
    }
})
