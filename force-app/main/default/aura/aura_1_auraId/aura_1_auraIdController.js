({
    clickme : function(component, event, helper) {
        var evt = event.getSource();
var localIDvalue = evt.getLocalId();

var a = component.find("a").get("v.value");
var b = component.find("b").get("v.value");

if(localIDvalue == 'addition')
{
    var result = parseInt(a)+ parseInt(b);
    component.find("res").set("v.value",result);

}
else if(localIDvalue =='subtration')
{
    var result = parseInt(a)- parseInt(b);  
    component.find("res").set("v.value",result);
}
else
{
    var result = parseInt(a)* parseInt(b); 
    component.find("res").set("v.value",result);
}


    }
})
