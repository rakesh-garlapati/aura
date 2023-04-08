({
    callme : function(component, event, helper) {
        var amount = component.get("v.amount");
        var rate =   component.get("v.rate");   
        var year =   component.get("v.year");
      var intrest = (amount*rate*year)/100;
        component.set("v.intrest",intrest);
if(intrest > 100){
    component.set("v.flag",true);
    }else{
  component.set("v.flag",false);
    }
    }
})
