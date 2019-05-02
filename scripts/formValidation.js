
function submitIt (project) {
	
	var re = /^\w+\s\w+$/ //variable created as a requirement for full name. 
	
	var re2 = /^\w+([\._-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //variable created as a requirement for a valid email address. 
	
	if (!re.test(project.txtname.value)){						//if statement for name section. 
		alert ("Type your first name and last name please.");
			project.txtname.focus();							//refocus to the section if it's not valid.
			project.textname.select();							//select the section if it's not valid 
		return false;
		}
	
	if (!re2.test(project.txtemail.value)){						//if statement for email section 
		alert ("Invalid email address");
			project.txtemail.focus();
			project.txtemail.select();
		return false;
		}
		
	if(project.txtartist.value == "") {							//if statement for artist section 	
      alert("Please provide artist name");
			project.txtartist.focus();
			project.txtartist.select();
      return false;
	}
	
	if(project.txtalbum.value == "") {							//if statement for album statement
      alert("Please provide album name");
			project.txtalbum.focus();
			project.txtalbum.select();
      return false;
	}
		
	if(project.txtcomments.value == "") {						//if statement for comments statement
      alert("Please provide comments");
			project.txtcomments.focus();
			project.txtcomments.select();
      return false;
	}
	
	alert ("Thank you, " + project.txtname.value + "!");			//It will shows alert box if every section filled in with the correct format as above. 
	return true;
}

function validate (project) {										// fuction for confirming the form. 
	var result = document.getElementById("project").value;			//create variable of the value in "project" form. 
	
	/*if statement to show the details of the form and if it is correct then the user can click "OK", it will confirm the form. However, if it's not confirmed by the user by click on cancel, it will return false the information will remain on the form and the user can readjust their form */
	if (confirm("Your name: " + txtname.value +						
				"\nEmail address: " + txtemail.value +
				"\nArtist: " + txtartist.value +
				"\nSong or Album: " + txtalbum.value +
				"\nComments: " + txtcomments.value +
				"\nDo you really want to submit the form?")){
	}
	else {
		return false;
	}
}
/*resource for confirmation dialog box: https://stackoverflow.com/questions/9139075/how-to-show-a-confirm-message-before-delete */