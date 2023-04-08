({
    clickme : function(component, event, helper) {
var a = component.find("a").get("v.value");
var b = component.find("b").get("v.value");
var result = parseInt(a)+ parseInt(b);
component.find("res").set("v.value",result);
    }
})
