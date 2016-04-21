angular
  .module('Whatsapp')
  .controller('SanCtrl', SanCtrl);
 
function SanCtrl ($scope, $reactive, $stateParams,$ionicScrollDelegate, $timeout) {
  $reactive(this).attach($scope);
   
 
 
   this.testLogin = testLogin;
 
   function testLogin () {

	  // debugger;
	   let domain = "scasset";
	   let user = "wasanchai@scasset.com";
	     Meteor.loginWithLDAP(user, "xxxxxpassword", { dn:   user, search: '(sAMAccountName=' + user + ')' }, function(err) {
		    if (err) {
			  // login failed
			   //  debugger; 
			  alert(err);
		    }
		    else {
			  // login successful
			    // debugger;
			  alert("hi" + Meteor.user().username);
		   }
		 });
		  // meteor.loginwithldap(user, password1, { dn: domain1 + '\\' + user, search: '(samaccountname=' + user + ')' }, function(err) {
		  // // // if (err) {
			// // // // login failed
			   // // // debugger;
			// // // alert(1);
		  // // // }
		  // // // else {
			// // // // login successful
			   // // // debugger;
			// // // alert(2);
		  // // // }
		// // // });
		
   }
  
}