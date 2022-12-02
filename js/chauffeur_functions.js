$(window).on('load', function () {
    $( ".loading_image4" ).show();
}) 

function send_value(id){
	document.getElementById('deal_id').value=id;
}

function check_stat(){
    $("#btna").hide();
    $("#btnb").show();
}

function check_stat(){
    $("#btna").hide();
    $("#btnb").show();
}

function go_up2(){
	$('html, body').animate({
        scrollTop: $("#myTab").offset().top
    }, 400);	
}

function submit_form_air(){
    var emirate=document.getElementById("emirate").value;
    var check_location = document.getElementById("check_location").value;
    var autocomplete = document.getElementById("autocomplete").value;
           
    if(check_location != autocomplete){     
        console.log('a' + check_location);
        console.log('b' + autocomplete);
    }
    var dt = new Date();
    dt.setHours( dt.getHours() + 5 );
	var date=document.getElementById("pickup-date").value;
    var date_str = date.split("/");
        
	var time=document.getElementById("field-car-pickup-time").value;
    var curr = date_str[2] + '-'  + date_str[1] + '-' + date_str[0] + ' ' + time;
    var d = new Date(curr);
        
    if(dt < d || d == 'Invalid Date' || dt == 'Invalid Date'){
        //alert('correct');
    } else {
        //alert('Sorry! We need atleast 5 hours from right now.');
        //return false;
    }

    /* previous date checking */
       
    var pick_date =$("#pickup-date").val();
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today_date = mm+'/'+dd+'/'+yyyy;
    
    var from = pick_date.split("/");
    var f = new Date(from[2], from[1], from[0]);
    var pick_date = from[1] + "/" + from[0] + "/" + from[2];
    
    var date1 = new Date(pick_date);
    var date2 = new Date(today_date);
    
    var timeDiff = date2.getTime() - date1.getTime();

    if(timeDiff>0) {
    $("#pickup-date").css({"border": "1px solid red"});
    $("#invalid_date").html('Please select a valid date');
        return false;
    }
    else {
    return true;
    }
}

function submit_form2(){
    var emirate=document.getElementById("emirate").value;
    var check_location = document.getElementById("check_location").value;
    var autocomplete = document.getElementById("autocomplete").value;
           
    if(check_location != autocomplete){     
        console.log('a' + check_location);
        console.log('b' + autocomplete);
    }
    var dt = new Date();
    dt.setHours( dt.getHours() + 5 );
	var date=document.getElementById("pickup-date").value;
    var date_str = date.split("/");
        
	var time=document.getElementById("field-car-pickup-time").value;
    var curr = date_str[2] + '-'  + date_str[1] + '-' + date_str[0] + ' ' + time;
    var d = new Date(curr);
        
    if(dt < d || d == 'Invalid Date' || dt == 'Invalid Date'){
        //alert('correct');
    } else {
        //alert('Sorry! We need atleast 5 hours from right now.');
        //return false;
    }

    /* previous date checking */
       
    var pick_date =$("#pickup-date").val();
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today_date = mm+'/'+dd+'/'+yyyy;
    
    var from = pick_date.split("/");
    var f = new Date(from[2], from[1], from[0]);
    var pick_date = from[1] + "/" + from[0] + "/" + from[2];
    
    var date1 = new Date(pick_date);
    var date2 = new Date(today_date);
    
    var timeDiff = date2.getTime() - date1.getTime();

    if(timeDiff>0) {
    $("#pickup-date").css({"border": "1px solid red"});
    $("#invalid_date").html('Please select a valid date');
        return false;
    }
    else {
    return true;
    }

    /*previous date checking */
    return true;
            var timeStart = new DateTime("today").getHours();
            var timeEnd = new Date(date + time).getHours();
            
            var hourDiff = timeEnd - timeStart;
            


    if(hourDiff>5)	 
    {	
        document.getElementById("search").submit();
        return true;
	}
	else
	{
        alert("The requested start time is too close based on the minimum booking time - no vehicle can be booked.");
        return false;
	}
}
function submit_form(){
	var date=document.getElementById("pickup-date").value;
	var time=document.getElementById("field-car-pickup-time").value;
	var actions	=document.getElementById("emirate2").value;
	document.getElementById("search2").action = actions;
	document.getElementById("emirate2").value=actions.replace("/","");
	document.getElementById("search2").submit();	
}

$("input").on("keypress", function(e) {
    if ( (e.which === 32 && !this.value.length) || e.which === 13)
        e.preventDefault();
});

function time_radio()
{
    $("#time_radio").hide();
    $("#field-hotel-room-num").show();
}

function submit_main_form()
{
    document.getElementById("search").submit();
}

function clear_txt()
{
	document.getElementById("autocomplete").value="";
	$('#clear_txt').hide();
	document.getElementById("autocomplete").focus();
}

function clear_txt2()
{
	document.getElementById("autocomplete2").value="";
	$('#clear_txt2').hide();
	document.getElementById("autocomplete2").focus();
}

$('#autocomplete').keyup(function() {
    $('#clear_txt').fadeIn('slow');
});

$(document).ready(function() {
	setTimeout(function(){ 
        $("#popup2").hide();
    }, 7000);
	setTimeout(function(){ 
	    $("#popuphour").hide();
	}, 7000);
	setTimeout(function(){ 
	    $("#popuploc").hide();
	}, 7000);
	setTimeout(function(){ 
	    $("#popupprice").hide();
	}, 7000);
	
});

function whatsapp_open(listing_id) 
{
	document.getElementById('trackcall2' + listing_id).style.display="none";
	document.getElementById('trackwhatsapp2' + listing_id).style.display="inline-block";
}

function call_open(listing_id) 
{
	document.getElementById('trackwhatsapp2' + listing_id).style.display="none";
	document.getElementById('trackcall2' + listing_id).style.display="inline-block";
}

function mobsee(id) {
    var x = document.getElementById("mob-dt"+id);
    var btnText = document.getElementById("myBtn3"+id);
    if (x.style.display === "none") {
        x.style.display = "inline";
        btnText.innerHTML = " <i class='fa fa-chevron-circle-up' aria-hidden='true'></i>";

    } else {
        x.style.display = "none";
        btnText.innerHTML = " <i class='fa fa-chevron-circle-down' aria-hidden='true'></i>";

    }
}

function seemoreky() {
    var x = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
    if (x.style.display === "none") {
        x.style.display = "inline";
        btnText.innerHTML = "";

    } else {
        x.style.display = "none";
        btnText.innerHTML = "...";

    }
}

function crossbttn(e) {
    if(e.id == "keyworded2"){
       if(document.getElementById(e.id).value && document.getElementById(e.id).value != ""){
          document.getElementById("crossbtn").style.opacity = "1";
       } else {
          document.getElementById("crossbtn").style.opacity = "0";
       } 
    } else if(e.id == "myInput"){
       if(document.getElementById(e.id).value && document.getElementById(e.id).value != ""){
          document.getElementById("crossbtn2").style.opacity = "1";
       } else {
          document.getElementById("crossbtn2").style.opacity = "0";
       } 
    } else if(e.id == "myInput2"){
       if(document.getElementById(e.id).value && document.getElementById(e.id).value != ""){
          document.getElementById("crossbtn3").style.opacity = "1";
       } else {
          document.getElementById("crossbtn3").style.opacity = "0";
       } 
    }
}

function clearInput(e) {
    if(e.id == "crossbtn") {
       document.getElementById('keyworded2').value = '';
       document.getElementById("crossbtn").style.opacity = "0";
       document.getElementById("keyworded2").focus();
    } else if(e.id == "crossbtn2") {
       document.getElementById('myInput').value = '';
       document.getElementById("crossbtn2").style.opacity = "0";
       document.getElementById("myInput").focus();
    } else if(e.id == "crossbtn3") {
       document.getElementById('myInput2').value = '';
       document.getElementById("crossbtn3").style.opacity = "0";
       document.getElementById("myInput2").focus();
    }
}

$(".citydrp").click(function (e) {
    $("#mycitydrp").toggle();
    e.stopPropagation();
});

$("#mycitydrp").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    $("#mycitydrp").hide();
});

function popupHide(divId){
    $("#"+divId).hide();
}