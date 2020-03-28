
			window.onload = function what(){

			 document.body.innerHTML ="";

  				 //addChildByID(body_tag='',parent_id='',inner_text='', tag, style='',id='',value='');
				let student=new Student();

				student.addChildByID("body","","Student Database","p","","","");
				student.addChildByID("body","","", "table","width:100%","std_tab","");
				
				student.addChildByID("","std_tab","", "input","","row_count","0");
				document.getElementById("row_count").setAttribute("type", "hidden");
				
				document.getElementById("std_tab").setAttribute("border", "1");
				document.getElementById("std_tab").setAttribute("width", "100%");

				student.addChildByID("","std_tab",'<th>Roll</th><th>Name</th><th>Action<br/><br/><button type="button" onclick="add_pop_window()">ADD New Row</button></th>', "tr","","","0");
			};

			class Student {

				roll:any;
				name:string;
				id:number;
				
				add_pop_window() {
					
					this.roll = prompt("Roll:", "");
				    this.name = prompt("Name:", "");
					
					if (this.roll == null || this.roll == ""|| this.name == null || this.name == "") {
					  alert("Roll and Name is required.");
					} else {
					  this.addRow(this.roll,this.name)
					}
				}

			
				edit_pop_window(id:number) {

					let roll_val=document.getElementById("std_rw_"+id).getElementsByTagName("td")[0].innerHTML;
					let name_val=document.getElementById("std_rw_"+id).getElementsByTagName("td")[1].innerHTML;
	  
					this.roll = prompt("Roll:", roll_val);
					this.name = prompt("Name:", name_val);
					
	  
					if (this.roll == null || this.roll == ""|| this.name == null || this.name == "") {
					  alert("Roll and Name is required.");
					  return false;
					} else {
						document.getElementById("std_rw_"+id).getElementsByTagName("td")[2].innerHTML='';
					  this.updateRow(id,this.roll,this.name)
					}
				  }

				addChildByID(body_tag:string='',parent_id:string='',inner_text:string='', tag:string, style:string='',id:string='',value:any='') 
				  {
					  let title = document.createElement(tag);
					  
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
						  (<HTMLInputElement>document.getElementById(id)).value=value;
					  }
				}

			    addRow(roll,name) {
					var table = document.getElementById("std_tab");
					var max_row=parseInt((<HTMLInputElement>document.getElementById("row_count")).value)+1;

					if(name==''|| roll=='')
					{
						alert('Name and Roll is required.');
						return false;
					}


					this.addChildByID("","std_tab",'<input type="hidden" id="str_no" value="'+max_row+'" /><td>'+roll+'</td><td>'+name+'</td><td><button onclick="edit_pop_window('+max_row+') ">Edit</button><button type="button"  onclick="deleteRow('+max_row+') ">Delete</button>', "tr","","std_rw_"+max_row,"0");

					(document.getElementById('row_count') as HTMLInputElement).value = String(max_row);
					parseInt((document.getElementById('row_count') as HTMLInputElement).value);
				}

				updateRow(id:number,roll:any,name:string) {

					if(name==''|| roll=='')
					{
						alert('Name and Roll is required.');
						return false;
					}
	
	
					document.getElementById("std_rw_"+id).innerHTML='<td>'+roll+'</td><td>'+name+'</td><td><button onclick="edit_pop_window('+id+') ">Edit</button><button type="button"  onclick="deleteRow('+id+') ">Delete</button>';
	
				}

				deleteRow(id) {
					if(id<1)
					{
						return false;
					}
					var table = document.getElementById("std_rw_"+id).remove();

					var max_row=parseInt((<HTMLInputElement>document.getElementById("row_count")).value)-1;				(document.getElementById('row_count') as HTMLInputElement).value = String(max_row);
				parseInt((document.getElementById('row_count') as HTMLInputElement).value);	
				}
			} 

			let student=new Student();

			let add_pop_window=():any=> {
				student.add_pop_window();
			}
			let edit_pop_window=(id:number):any=> {
				student.edit_pop_window(id);
			}
			let addChildByID=(body_tag:string='',parent_id:string='',inner_text:string='', tag:string, style:string='',id:string='',value:any=''):any=> {
				student.addChildByID(body_tag,parent_id,inner_text, tag, style,id,value);
			}
			let addRow=(roll:any,name:string):any=> {
				student.addRow(roll,name);
			}
			let updateRow=(id:number,roll:any,name:string):any=> {
				student.updateRow(id,roll,name);
			}
			let deleteRow=(id:number):any=> {
				student.deleteRow(id);
			}

			
			
			
			
			
			
			

