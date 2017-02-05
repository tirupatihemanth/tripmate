var placesList;
function doThat(list){
	
//	var newListElement = document.createElement("li");
//	newListElement.className = "list-group-item";
//	newListElement.value = list[0];
//	navList.appendChild(newListElement);
placesList = list;
document.getElementById("a").href="touristAgencies.html";
	
}

function temporary(){
	var navList = document.getElementById("navList");
	navList.innerHTML+="<li>keerthana</li>" ;
	navList.innerHTML+="<li>"+placesList[0]+"</li>" ;
}
