$(function() {
	$("#serviceName").tooltip();
	$("#serviceEndpoint").tooltip();
	$("#description").tooltip();
	$("#domain").tooltip();
	$("#subDomain").tooltip();
	$("#supportEmail").tooltip();
	$("#supportChat").tooltip();
	
	var protocols = ["HTTP", "HTTPS"];	
    $( "#protocol" ).autocomplete({ source: protocols, minLength: 0 });
    
	var serviceTypes = ["Free", "Educational", "Enterprise"];	
    $( "#serviceType" ).autocomplete({ source: serviceTypes, minLength: 0 });    
});

function Test() {

	var _this = this;
	_this.appRoot = $("#hfAppRoot").val();
	
	this.getCompany = function() {
		$.ajax({
			  type: "POST",
			  url: _this.appRoot + "/pure-rest/customer",
			  data: "id=100",			  
			  success: function(data) { 
				console.log("getSampleCustomer() success!"); 
			  },
			  error: function(err, err2) {
				  console.log("getSampleCustomer() error!");
				  console.log("getSampleCustomer() error!");
				  console.log("getSampleCustomer() error!");
			  },			  
			  complete: function() { 
				console.log("getSampleCustomer() complete."); 
			  }
		});
	};

}