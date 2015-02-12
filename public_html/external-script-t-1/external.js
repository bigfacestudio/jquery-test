

$(document).ready(function () {
    $("#button_toggle").click(toggle);

    $("#button_fade").click(fade);
    $("#button_val").click(val);
    $("#button_attr").click(attr);
    $("#button_attr_callback").click(attr_callback);
    
    $("#button_get").click(get);
});


function toggle()
{
    $("p").toggle();
}

function fade()
{
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
}

function val()
{
    alert($("#field_name").val());

}

function attr()
{
    $("#w3s").attr({
        "href": "http://www.w3schools.com/jquery",
        "title": "W3Schools jQuery Tutorial"
    });

}


function attr_callback()
{
    $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery"; 
    });
}

function afterText() {
    var txt1 = "<b>I </b>";                   // Create element with HTML
    var txt2 = $("<i></i>").text("love ");    // Create with jQuery
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);      // Insert new elements after img
}


function get()
{
    $.get("http://www.  esp8266.bbst.org", function(data,status)
    {
        alert("Data: " + data + "\nStatus: " + status);
    });
}