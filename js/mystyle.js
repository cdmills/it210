//This function stores the endorsements in JSON format in local storage
function onClick()
{
var json=[];

if(localStorage.myjson)
{
json=JSON.parse(localStorage.myjson);
}

var name= document.getElementById("name").value;
var date= document.getElementById("date").value;
json.push({"name" : name, "date" : date});

localStorage.myjson=JSON.stringify(json);
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
		}

	//calling the sortByKey function 
	json =sortByKey(json,"name");

	//Saves it to the local storage
	localStorage.myjson=JSON.stringify(json);

	//to print the new list
	testJSON();
}

function sortDate()
{

	if(localStorage.myjson)
	{
		json=JSON.parse(localStorage.myjson);
	}

	//calling the sortByKey function 
	json =sortByKey(json,"date");

	//Saves it to the local storage
	localStorage.myjson=JSON.stringify(json);

	//to print the new list
	testJSON();

}