/*
aaron ekdahl
cis242
final-project
03/13/2019
*/



var fltBase = 0.0;
var fltTaxRate = 0.095;

/*
function orderSummary()
purpose:		recalculate the current order information
parameters:		none
*/
function orderSummary(){

	var fltSub = fltBase;
  var fltTop;
  var fltSpecial;
  var intBuild;
	var intSize;
  var intCrust;
  var fltTop;
  var intTop;
  var intSpecial;
	var fltTax = 0;
	var fltTotal = 0;
	var intOptionCount = 0;
	var strPizza = "Order Summary:<br/>";
	var strSummary = "";
	var strPriceSum = "";
	var intWhichSpec = 0;

	/*---------------------------works--------------------------------*/
  // check to see which type of pizza is selected
	for (var i = 0; i < document.forms[0].rdoBuild.length; i++){
		if (document.forms[0].rdoBuild[i].checked){
			intBuild = i;
		}
	}

	// set the DHTML display to include the type
	switch(intBuild){
		case 0:
		  strPizza = strPizza + '<br/>Build-Your-Own ';
		  break;
		case 1:
		  strPizza = strPizza + '<br/>Specialty ';
		  break;
	}
  /*----------------------------------------------------------------*/

/*---------------------------works--------------------------------*/
  //check to see which size is chosen
	for (var i = 0; i < document.forms[0].rdoSize.length; i++) {
		if (document.forms[0].rdoSize[i].checked){
			intSize = i;
		}
	}

	// set the DHTML display to include the size
	switch(intSize){
		case 0:
		  strPizza = strPizza + '<br/>Small 12" ' + "($10.00)";
		  fltSub += 10.00;
		  break;
		case 1:
		  strPizza = strPizza + '<br/>Medium 14" ' + "($14.00)";
		  fltSub += 14.00;
		  break;
		case 2:
		  strPizza = strPizza + '<br/>Large 16" ' + "($18.00)";
		  fltSub += 18.00;
		  break;
	}
/*----------------------------------------------------------------*/

/*---------------------------works--------------------------------*/
  // check to see which crust is chosen
	for (var i = 0; i < document.forms[0].rdoCrust.length; i++){
		if (document.forms[0].rdoCrust[i].checked){
			intCrust = i;
		}
	}

	// set the DHTML display to include the crust
	switch(intCrust){
		case 0:
      strPizza = strPizza + '<br/>Hand-Tossed ' + "(Included)";
      fltSub += 0;
		  break;
		case 1:
		  strPizza = strPizza + '<br/>Crispy Thin Crust ' + "($1.00)";
      fltSub += 1;
		  break;
		case 2:
		  strPizza = strPizza + '<br/>Deep Dish ' + "($2.00)";
      fltSub += 2;
		  break;
	}
/*----------------------------------------------------------------*/

/*---------------------------works--------------------------------*/
/*check whether topping has been selected and collect its value*/

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
        		if (document.forms[0].chkTop[0].checked) {
            		fltSub += parseFloat(document.forms[0].chkTop[0].value);
								strPizza = strPizza + '<br/>Pepperoni ' + "($1.00)";
        		}
    		}

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
		        if (document.forms[0].chkTop[1].checked) {
		            fltSub += parseFloat(document.forms[0].chkTop[1].value);
								strPizza = strPizza + '<br/>Italian Sausage ' + "($1.00)";
		        }
		    }

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
		        if (document.forms[0].chkTop[2].checked) {
		            fltSub += parseFloat(document.forms[0].chkTop[2].value);
								strPizza = strPizza + '<br/>Canadian Bacon ' + "($1.00)";
		        }
		    }

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
		        if (document.forms[0].chkTop[3].checked) {
		            fltSub += parseFloat(document.forms[0].chkTop[3].value);
								strPizza = strPizza + '<br/>Bell Pepper ' + "($0.75)";
		        }
		    }

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
						if (document.forms[0].chkTop[4].checked) {
								fltSub += parseFloat(document.forms[0].chkTop[4].value);
								strPizza = strPizza + '<br/>Pineapple ' + "($0.75)";
						}
				}

		for (var i = 0; i < document.forms[0].chkTop.length; i++); {
						if (document.forms[0].chkTop[5].checked) {
								fltSub += parseFloat(document.forms[0].chkTop[5].value);
								strPizza = strPizza + '<br/>Mushrooms ' + "($0.75)";
						}
				}

/*----------------------------------------------------------------*/


/*---------------------------works--------------------------------*/
  // check to see which special is chosen
  for (var i = 0; i < document.forms[0].rdoSpecial.length; i++){
    if (document.forms[0].rdoSpecial[i].checked){
      intSpecial = i;
    }
  }

  // set the DHTML display to include the special
  switch(intSpecial){
    case 0:
      strPizza = strPizza + '<br/>Veggie Lovers ';
      fltSub += 1.50;
      break;
    case 1:
      strPizza = strPizza + '<br/>Hawaiin ';
      fltSub += 2;
      break;
    case 2:
      strPizza = strPizza + '<br/>Meat Lovers ';
      fltSub += 3;
      break;
  }
/*----------------------------------------------------------------*/

	fltSub = fltSub.toFixed(2);

	fltTax = fltSub * fltTaxRate;

	fltTax = fltTax.toFixed(2);
	fltTotal = parseFloat(fltSub) + parseFloat(fltTax);

	fltTotal = parseFloat(fltTotal);
	fltTotal = fltTotal.toFixed(2);

	SetCookie("strPizza", strPizza);
	SetCookie("fltSub", fltSub);
	SetCookie("fltTax", fltTax);
	SetCookie("fltTotal", fltTotal);

	strSummary = strPizza;

	strPriceSum = "<table> <tr><td>Subtotal:</td> <td align='right'>$" + fltSub + "</td></tr><tr><td>" + "Tax:</td> <td align='right' style='border-bottom-color: White; border-bottom-width: 1px; border-bottom-style: solid;'>" + fltTax + "</td></tr><tr> <td>Total:</td> <td align='right'>$" + fltTotal + "</td></tr></table>"

	document.getElementById("orderSum").innerHTML = strSummary;
	document.getElementById("priceSum").innerHTML = strPriceSum;

	return true;

}

/*---------------------------works--------------------------------*/

function disableSpecials() {
  document.getElementById("spec1").disabled = true;
  document.getElementById("spec2").disabled = true;
  document.getElementById("spec3").disabled = true;

  orderSummary();
}

function disableToppings() {
  document.getElementById("chk1").disabled = true;
  document.getElementById("chk2").disabled = true;
  document.getElementById("chk3").disabled = true;
  document.getElementById("chk4").disabled = true;
  document.getElementById("chk5").disabled = true;
  document.getElementById("chk6").disabled = true;

  orderSummary();
}

function enableSpecials() {
  document.getElementById("spec1").disabled = false;
  document.getElementById("spec2").disabled = false;
  document.getElementById("spec3").disabled = false;

  orderSummary();
}

function enableToppings() {
  document.getElementById("chk1").disabled = false;
  document.getElementById("chk2").disabled = false;
  document.getElementById("chk3").disabled = false;
  document.getElementById("chk4").disabled = false;
  document.getElementById("chk5").disabled = false;
  document.getElementById("chk6").disabled = false;

  orderSummary();
}

/*----------------------------------------------------------------*/

/*
function ckform(formIndex)
purpose:		verify that required fields are completed
parameters:		formIndex as an integer, representing the form number within the page

*/

function ckform(formIndex){

	// identifed txtFName as the field 15 of the form
	var intStartCheck = 15;
	var intNumFields = document.forms[formIndex].elements.length;
	var strCustomer = "";

	for (var i = intStartCheck; i < intNumFields; i++){
		if (document.forms[formIndex].elements[i].name != "txtApartment"){
			if (document.forms[formIndex].elements[i].value == ""){
				document.getElementById(document.forms[formIndex].elements[i].name).innerHTML = "<span style='color:yellow'>Required Field</span>";
				document.forms[formIndex].elements[i].focus();
				return false;
			}

			strCustomer += document.forms[formIndex].elements[i].value + " ";
			if (document.forms[formIndex].elements[i].name != "txtFName") {
				strCustomer += "<br />";
        }
      }
	}

     	orderSummary();


	// remove the value of the submit button from the string
	strCustomer = strCustomer.slice(0, (strCustomer.length - 23));

	SetCookie("Customer", strCustomer);

	SetCookie("custFName", document.forms[0].txtFName.value);
	SetCookie("custLName", document.forms[0].txtLName.value);
  SetCookie("custEmail", document.forms[0].txtEmail.value);
  SetCookie("custAddress", document.forms[0].txtAddress.value);
  SetCookie("custCity", document.forms[0].txtCity.value);
  SetCookie("custPhone", document.forms[0].txtPhone.value);

	return true;
}

function clearThis(){

	var formIndex = 0;
	var intStartCheck = 0;
	var intNumFields = document.forms[formIndex].elements.length - 1;

	for (var i = intStartCheck; i < intNumFields; i++){
		if (document.forms[formIndex].elements[i].name != "txtApartment"){
			document.getElementById(document.forms[formIndex].elements[i].name).innerHTML = "";
		}
	}

	return true;
}

/* ----------------------------------------------
function replaceString(stringValue)
purpose:		replaces special HTML characters in cookie values
parameters:		stringValue as string, the value to be encoded
notes:			can be used for more than cookies
---------------------------------------------- */
function replaceString(stringValue){

	newString = stringValue;

	/*newString = newString.replace('"','&quot;');
	newString = newString.replace("'", '&apos;');
	newString = newString.replace("�", '&ndash;');
	newString = newString.replace("�", '&mdash;');
	newString = newString.replace("�", '&iexcl;');
	newString = newString.replace("�", '&iquest;');
	newString = newString.replace("�", '&ldquo;');
	newString = newString.replace("�", '&rdquo;');
	newString = newString.replace("�", '&lsquo;');
	newString = newString.replace("�", '&rsquo;');
	newString = newString.replace("�", '&laquo;');
	newString = newString.replace("�", '&raquo;');
	newString = newString.replace(" ", '&nbsp;');
	newString = newString.replace("&", '&amp;');
	newString = newString.replace("�", '&cent;');
	newString = newString.replace("�", '&copy;');
	newString = newString.replace("�", '&divide;');
	newString = newString.replace(">", '&gt;');
	newString = newString.replace("<", '&lt;');
	newString = newString.replace("<", '&lt;');*/

	return newString;
}

/* ----------------------------------------------
function writePizzaCookies(){
purpose:	writes the pizza information cookies
author:
parameters:		none
---------------------------------------------- */
function writePizzaCookies(){

	SetCookie("pizzaDesc", document.getElementById("orderSum").innerHTML);
	SetCookie("PriceSum", document.getElementById("priceSum").innerHTML);
	window.location.href = "custInfo.html";

	return true;
}

/* ----------------------------------------------
function chForm(){
purpose:	checks the customer information form for complete and correct information
author:
parameters:		none
---------------------------------------------- */
function chForm(){
	var intNumFields = document.forms[0].elements.length;
	var phoneExp = /^(\d{3})(\d{3})(\d{4})$/;
	var zipExp = /\d{5}/;
	var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// check that values have been entered into required fields
	for (var i = 0; i < intNumFields; i++){
		if (document.forms[0].elements[i].name != "txtApartment"){
			if (document.forms[0].elements[i].value.length == 0){
				document.getElementById(document.forms[0].elements[i].name).innerHTML = "Required Field";
				document.forms[0].elements[i].focus();
				document.forms[0].elements[i].select();
				return false;
			}
		}
	}



	if (!emailExp.test(document.forms[0].txtEmail.value)){
		document.getElementById("txtEmail").innerHTML = "Please enter a valid email address";
		document.forms[0].txtEmail.focus();
		document.forms[0].txtEmail.select();
		return false
	}

	// customer order information is correct write cookie for customer information
	writeCustCookie();

	return true;
	//return false;
}

/* ----------------------------------------------
function writeCustCookie(){
purpose:	Writes the customer informstion cookies
author:
parameters:		none
---------------------------------------------- */
function writeCustCookie(){
	var strCustName = document.forms[0].txtFName.value + " " + document.forms[0].txtLName.value;

	SetCookie("custName", document.forms[0].txtFName.value + " " + document.forms[0].txtLName.value);
	SetCookie("custAddress", document.forms[0].txtAddress.value + " " + document.forms[0].txtApartment.value);
	SetCookie("custCity", document.forms[0].txtCity.value + ", " + document.forms[0].txtState.value + " " + document.forms[0].txtZip.value);
	SetCookie("custEmail", document.forms[0].txtEmail.value);
	SetCookie("custPhone", document.forms[0].txtPhone.value);
	return true;
}


var milisec=0;
var seconds=60;
var minutes=29;

/* ----------------------------------------------
function secondPassed(){
purpose:	Count down clock for delivery
author:
parameters:		none
---------------------------------------------- */
// 1800 seconds in 30 minutes
var seconds = 2700;
// seconds set at 20 for testing
//var seconds = 20;


function secondPassed() {
// Calculate the number of days left
    var days=Math.floor(seconds / 86400);
// After deducting the days calculate the number of hours left
    var hours = Math.floor((seconds - (days * 86400 ))/3600)
// After days and hours , how many minutes are left
    var minutes = Math.floor((seconds - (days * 86400 ) - (hours *3600 ))/60)
// Finally how many seconds left after removing days, hours and minutes.
   var secs = Math.floor((seconds - (days * 86400 ) - (hours *3600 ) - (minutes*60)))

   var x = minutes + " Minutes and " + secs + " Seconds ";
   document.getElementById('countdown').innerHTML = x;

	// create an alternate display if pizza has not arrived
	if (seconds == 0) {
   	clearInterval(countdownTimer);
      document.getElementById('countdown').innerHTML = "Please call us, your pizza should have arrived!";
   }
	else {
   	seconds--;
   }

	return true;

}

var countdownTimer = setInterval('secondPassed()', 1000);
