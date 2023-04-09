({
    showme : function(component, event, helper) {
        var action = component.get("c.accountid");
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var res = response.getReturnValue();
                component.set("v.acc",res);
            }
        });
        $A.enqueueAction(action);
    },
    getaccount : function(component, event, helper) {
        var action = component.get("c.accountwitha");
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var res = response.getReturnValue();
                component.set("v.accwitha",res);
            }
        });
        $A.enqueueAction(action);
    }

})
