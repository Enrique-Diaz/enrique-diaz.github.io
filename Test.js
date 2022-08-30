function myFunction(auth) {
  document.getElementById("body").innerHTML = auth;
}

function call(auth){
	
	var xmlhttp = new XMLHttpRequest();
    //xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", "https://nexusforinsurance-dev.sbp.eyclienthub.com/nexuscommon/ni/nexus-wiremock-app/dev/wiremock/services/commercial-sme-policy/methods/get", false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    //xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
    //xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send("{}");
    //alert(xmlhttp.responseText);
	
	var response_header_style = document.getElementById('response-header').style;
	var response_body_style = document.getElementById('response-body').style;
	response_header_style.display = 'table-row';
	response_body_style.display = 'table-row';
	
	document.getElementById("response").innerHTML = JSON.stringify(JSON.parse(xmlhttp.responseText), null, 4);
}

function callbackFunction(xmlhttp) 
{
    alert(xmlhttp.responseXML);
}
