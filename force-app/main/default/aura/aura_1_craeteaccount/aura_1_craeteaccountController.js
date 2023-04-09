({
    callme : function(component, event, helper) {
        var name  = component.get("v.name");
        var phone  = component.get("v.phone");
        var rating  = component.get("v.rating");
      var action = component.get("v.createaccount");
      action.setParams({"name":name , "phone":phone , "rating":rating});
      action.setCallback(this,function(response){
        var state = response.getState();
        if(state  == 'SUCCESS'){
            var acc = response.getReturnValue();
            component.set("v.returnacc",acc);
        }
      });
      $A.enqueueAction(action);
    }
})
