/**
 * @NApiVersion 2.1
 * @author Daksh Chauhan
 * @NScriptType UserEventScript
 * @author Daksh Chauhan
 * @NModuleScope SameAccount
 */
define(['N/ui/serverWidget','N/record'], function (serverWidget,record){

 function beforeLoad_addResumeButton(context) {
 try {
 // Only run in VIEW mode
 if (context.type !== context.UserEventType.VIEW) return;

 var rec = context.newRecord;
 var trueValue = rec.getValue({ fieldId: 'custbody_check_subscription_failed' });
 log.debug('True value is',trueValue);
 
 log.debug({
 title: 'Subscription Failed Value',
 details: trueValue
 });
 var orderStatus = rec.getValue({ fieldId: 'orderstatus'});
 // If subscription failed, show Resume Subscription button
 if (trueValue && orderStatus ==='B') {
 
 context.form.addButton({
 id: 'custpage_resume_sub',
 label: 'Resume Subscription',
 functionName: 'resumeSubscriptionProcess'
 });

 // Attach the client script that handles button click
 context.form.clientScriptModulePath = './demo_show_popup_create_subscription_CS.js';
 }
 } catch (e) {
 log.error({
 title: 'Error in beforeLoad_addResumeButton',
 details: e
 });
 }
 }

 return {
 beforeLoad: beforeLoad_addResumeButton
 };

});
