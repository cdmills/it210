//This function stores the endorsements in JSON format in local storage
function onClick()
{
	//checks to make sure there is actually keys to input
	if((localStorage.getItem("name") != null) && (localStorage.getItem("date") != null))
	{
		//puts local storage into json array if present and appends new data
		var json=[];
		if(localStorage.myjson)
		{
			json=JSON.parse(localStorage.myjson);
		}
		var name= document.getElementById("name").value;
		var date= document.getElementById("date").value;
		json.push({"name" : name, "date" : date});

		//resets local storage
		localStorage.myjson=JSON.stringify(json);
		localStorage.removeItem("name");
		localStorage.removeItem("date");
		document.getElementById("endorsements").reset();
}
}

//This autopopulates the form
function autoPopulate()
{
	if(localStorage.name)
	{
		document.getElementById("name").value=localStorage.name;
	}
	if(localStorage.date)
	{
		document.getElementById("date").value=localStorage.date;
	}
}

//Updates local storage onkeyup
function showLocal()
{
	localStorage.name=document.getElementById("name").value;
	localStorage.date=document.getElementById("date").value;
}

//This array prints local storage to page
function testJSON() {
    var out = "";
    var i;
    var json = []
    json=JSON.parse(localStorage.myjson);
    for(i = 0; i<json.length; i++) {
        out += '<tr> <td>' + json[i].name + '</td> <td>' + json[i].date + '</td> </tr>';
    }
    document.getElementById("id01").innerHTML = out;
}

//the function to sort it 
function sortByKey(array, key) 
{
    return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function sortName()
{

	if(localStorage.myjson)
		{
			json=JSON.parse(localStorage.myjson);

			json =sortByKey(json,"name");

			//Saves to local storage
			localStorage.myjson=JSON.stringify(json);
			//prints updated info
			testJSON();
		}
}

function sortDate()
{

	if(localStorage.myjson)
	{
		json=JSON.parse(localStorage.myjson);
		json=sortByKey(json,"date");

		//Saves to local storage
		localStorage.myjson=JSON.stringify(json);
		//prints updated info
		testJSON();
	}

}

function loadJSON()
{
	$.getJSON("js/test.json", function(data) 
	{ 
		var json=[];
		$.each(data, function(key,val)
		{
			var name = key;
			var date = val;
			json.push({"name" : name, "date" : date});
		})
		localStorage.myjson=JSON.stringify(json);
	})
}

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
console.log("HELLO");
}