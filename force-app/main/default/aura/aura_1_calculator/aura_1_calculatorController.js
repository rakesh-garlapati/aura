({
    add : function(component, event, helper) {
           var aval = component.get("v.aval");
          var  bval = component.get("v.bval");
          var  result = parseInt(aval) +parseInt(bval);
           component.set("v.result",result);
    },
    sub : function(component, event, helper) {

    }
})
