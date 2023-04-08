({
    callme : function(component, event, helper) {
        component.set("v.empname","RAKESH");
        component.set("v.empphone",7780535456);
        component.set("v.empsalary",140000000);
    },
    clearme : function(component, event, helper) {
        component.set("v.empname","");
        component.set("v.empphone","");
        component.set("v.empsalary","");
    }
})
