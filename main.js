//json.parse turns to json while stringify turns it to string
//listen for submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);
//save bookmark
function saveBookmark(e){
	//get form values // without .values it prints the whole input tag
	var sitename = document.getElementById('sitename').value;
	var siteUrl = document.getElementById('siteUrl').value;
    if(!validateForm(sitename,siteUrl)){
    	return false;
    }
	/*console.log(sitename);*/
	var bookmark ={
		name: sitename,
		url: siteUrl
	}
	//console.log(bookmark);(to print into localstorage)
	//local storage test: to save string and parse into json
	/*localStorage.setItem('test', 'helloWorld');
	console.log(localStorage.getItem('test'));
	
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
	will get 'null' as a result*/

	//test if bookmark is null
	if(localStorage.getItem('bookmarks')===null){
		//init array
		var bookmarks = [];
		//add to array
		bookmarks.push(bookmark);
		//set to local storage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		//get bookmarks from localstorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		//add bookmark to array
		bookmarks.push(bookmark);
		//reset back to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	}
	//clear form
	document.getElementById('myForm').reset();
	//refetch bookmarks
   fetchBookmarks();

//prevent form from submitting
	e.preventDefault();
}
function deleteBookmark(url){
  //get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //loop through bookmark
  for(var x = 0; x<bookmarks.length;x++){
  	if (bookmarks[x].url == url){
  		//remove from array
  		bookmarks.splice(x, 1);
  	}
  }
  //reset back to localstorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//refetch bookmarks
      fetchBookmarks();

}
function fetchBookmarks(){
	//get bookmarks from localstorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	//get output id
	var bookmarkResults = document.getElementById('bookmarkResults');
	//build output
	bookmarkResults.innerHTML ='';
	for(var x = 0; x<bookmarks.length;x++){
		var name=bookmarks[x].name;
		var url=bookmarks[x].url;
		bookmarkResults.innerHTML +='<div class="well">'+
		                             '<h3>'+name+
		                             '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
		                             '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+
		                             '</h3>'+
		                             '</div>';
	}
}
//validate form
 function validateForm(sitename, siteUrl){
 	if(!sitename || !siteUrl){
 		alert("both fields are required");
 		return false;
 	}
 	return true;
 }