/**
 * @NApiVersion 2.1
 * @author Daksh Chauhan
 * @NScriptType UserEventScript
 * @author Daksh Chauhan
 */
define(['N/ui/serverWidget','N/record'], function (serverWidget,record) {
 function beforeLoad(context) 
 {
 if (context.type !== context.UserEventType.VIEW) return;
 var rec = context.newRecord;
 var orderStatus = rec.getValue({ fieldId: 'orderstatus'});
 if(orderStatus !== 'A')
 {
 var form = context.form;
 form.clientScriptModulePath = './demo_show_popup_create_subscription_CS.js';
 form.addButton({
 id: 'custpage_btn_create_subscription',
 label: 'Create Subscription',
 functionName: 'showPopup'
 });
 }
 
 
 }
 return {
 beforeLoad: beforeLoad
 };
});
