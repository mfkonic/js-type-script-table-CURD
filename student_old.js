
			window.onload = function what(){

			 document.body.innerHTML ="";

  				 //addChildByID(body_tag='',parent_id='',inner_text='', tag, style='',id='',value='');

				addChildByID("body","","Student Database","p","","","");
				addChildByID("body","","", "table","width:100%","std_tab","");
				
				addChildByID("","std_tab","", "input","","row_count","0");
				document.getElementById("row_count").setAttribute("type", "hidden");
				
				document.getElementById("std_tab").setAttribute("border", "1");
				document.getElementById("std_tab").setAttribute("width", "100%");

				addChildByID("","std_tab",'<th>Roll</th><th>Name</th><th>Action<br/><br/><button type="button" onclick="add_pop_window()">ADD New Row</button></th>', "tr","","","0");
			};

			function add_pop_window() {
			  var txt;
			  var roll = prompt("Roll:", "");
			  var name = prompt("Name:", "");
			  if (roll == null || roll == ""||name == null || name == "") {
			    alert("Roll and Name is required.");
			  } else {
			    addRow(roll,name)
			  }
			}

			function edit_pop_window(id) {

			  var roll_val=document.getElementById("std_rw_"+id).getElementsByTagName("td")[0].innerHTML;
			  var name_val=document.getElementById("std_rw_"+id).getElementsByTagName("td")[1].innerHTML;


			  var roll = prompt("Roll:", roll_val);
			  var name = prompt("Name:", name_val);
			  

			  if (roll == null || roll == ""||name == null || name == "") {
			    alert("Roll and Name is required.");
			    return false;
			  } else {
			  	document.getElementById("std_rw_"+id).getElementsByTagName("td")[2].innerHTML='';
			    updateRow(id,roll,name)
			  }
			}

			function addChildByID(body_tag='',parent_id='',inner_text='', tag, style='',id='',value='') 
			{
				var title = document.createElement(tag);
				
				if(inner_text!='')
				{
					title.innerHTML = inner_text;  
				}
				
				if(style!='')
				{
					
				}
				if(id!='')
				{
						title.setAttribute("id", id); 
				}

				if(body_tag!='')
				{

					document.body.append(title)
				}
				if(parent_id!='')
				{
					document.getElementById(parent_id).append(title);
				}
				if(value!='')
				{
					document.getElementById(id).value=value;
				}
			}
			
			function addRow(roll,name) {
			  var table = document.getElementById("std_tab");
			  var max_row=parseInt(document.getElementById("row_count").value)+1;

			  if(name==''|| roll=='')
			  {
			  	alert('Name and Roll is required.');
			  	return false;
			  }


			  addChildByID("","std_tab",'<input type="hidden" id="str_no" value="'+max_row+'" /><td>'+roll+'</td><td>'+name+'</td><td><button onclick="edit_pop_window('+max_row+') ">Edit</button><button type="button"  onclick="deleteRow('+max_row+') ">Delete</button>', "tr","","std_rw_"+max_row,"0");

			  document.getElementById("row_count").value = max_row;
			}
			
			function updateRow(id,roll,name) {

			  if(name==''|| roll=='')
			  {
			  	alert('Name and Roll is required.');
			  	return false;
			  }


			  document.getElementById("std_rw_"+id).innerHTML='<td>'+roll+'</td><td>'+name+'</td><td><button onclick="edit_pop_window('+id+') ">Edit</button><button type="button"  onclick="deleteRow('+id+') ">Delete</button>';

			}
			function deleteRow(id) {
				if(id<1)
				{
					return false;
				}
				var table = document.getElementById("std_rw_"+id).remove();

				var max_row=parseInt(document.getElementById("row_count").value)-1;
				document.getElementById("row_count").value = max_row;		
			}

