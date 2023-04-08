({
    clickme : function(component, event, helper) {
        var evt = event.getSource();
        var getId = evt.getLocalId();

        if(getId == 'si'){
            var amount = component.find("amt").get("v.value");
            var rate =component.find("rate").get("v.value");
            var time =component.find("time").get("v.value");

            var intrest = (parseInt(amount)*parseInt(rate)*parseInt(time))/100;

            component.find("intrest").set("v.value");
        }
if(intrest > 100){
    component.set("v.val",true);
}
    }
})
