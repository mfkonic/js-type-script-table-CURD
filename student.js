window.onload = function what() {
    document.body.innerHTML = "";
    //addChildByID(body_tag='',parent_id='',inner_text='', tag, style='',id='',value='');
    var student = new Student();
    student.addChildByID("body", "", "Student Database", "p", "", "", "");
    student.addChildByID("body", "", "", "table", "width:100%", "std_tab", "");
    student.addChildByID("", "std_tab", "", "input", "", "row_count", "0");
    document.getElementById("row_count").setAttribute("type", "hidden");
    document.getElementById("std_tab").setAttribute("border", "1");
    document.getElementById("std_tab").setAttribute("width", "100%");
    student.addChildByID("", "std_tab", '<th>Roll</th><th>Name</th><th>Action<br/><br/><button type="button" onclick="add_pop_window()">ADD New Row</button></th>', "tr", "", "", "0");
};
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.add_pop_window = function () {
        this.roll = prompt("Roll:", "");
        this.name = prompt("Name:", "");
        if (this.roll == null || this.roll == "" || this.name == null || this.name == "") {
            alert("Roll and Name is required.");
        }
        else {
            this.addRow(this.roll, this.name);
        }
    };
    Student.prototype.edit_pop_window = function (id) {
        var roll_val = document.getElementById("std_rw_" + id).getElementsByTagName("td")[0].innerHTML;
        var name_val = document.getElementById("std_rw_" + id).getElementsByTagName("td")[1].innerHTML;
        this.roll = prompt("Roll:", roll_val);
        this.name = prompt("Name:", name_val);
        if (this.roll == null || this.roll == "" || this.name == null || this.name == "") {
            alert("Roll and Name is required.");
            return false;
        }
        else {
            document.getElementById("std_rw_" + id).getElementsByTagName("td")[2].innerHTML = '';
            this.updateRow(id, this.roll, this.name);
        }
    };
    Student.prototype.addChildByID = function (body_tag, parent_id, inner_text, tag, style, id, value) {
        if (body_tag === void 0) { body_tag = ''; }
        if (parent_id === void 0) { parent_id = ''; }
        if (inner_text === void 0) { inner_text = ''; }
        if (style === void 0) { style = ''; }
        if (id === void 0) { id = ''; }
        if (value === void 0) { value = ''; }
        var title = document.createElement(tag);
        if (inner_text != '') {
            title.innerHTML = inner_text;
        }
        if (style != '') {
        }
        if (id != '') {
            title.setAttribute("id", id);
        }
        if (body_tag != '') {
            document.body.append(title);
        }
        if (parent_id != '') {
            document.getElementById(parent_id).append(title);
        }
        if (value != '') {
            document.getElementById(id).value = value;
        }
    };
    Student.prototype.addRow = function (roll, name) {
        var table = document.getElementById("std_tab");
        var max_row = parseInt(document.getElementById("row_count").value) + 1;
        if (name == '' || roll == '') {
            alert('Name and Roll is required.');
            return false;
        }
        this.addChildByID("", "std_tab", '<input type="hidden" id="str_no" value="' + max_row + '" /><td>' + roll + '</td><td>' + name + '</td><td><button onclick="edit_pop_window(' + max_row + ') ">Edit</button><button type="button"  onclick="deleteRow(' + max_row + ') ">Delete</button>', "tr", "", "std_rw_" + max_row, "0");
        document.getElementById('row_count').value = String(max_row);
        parseInt(document.getElementById('row_count').value);
    };
    Student.prototype.updateRow = function (id, roll, name) {
        if (name == '' || roll == '') {
            alert('Name and Roll is required.');
            return false;
        }
        document.getElementById("std_rw_" + id).innerHTML = '<td>' + roll + '</td><td>' + name + '</td><td><button onclick="edit_pop_window(' + id + ') ">Edit</button><button type="button"  onclick="deleteRow(' + id + ') ">Delete</button>';
    };
    Student.prototype.deleteRow = function (id) {
        if (id < 1) {
            return false;
        }
        var table = document.getElementById("std_rw_" + id).remove();
        var max_row = parseInt(document.getElementById("row_count").value) - 1;
        document.getElementById('row_count').value = String(max_row);
        parseInt(document.getElementById('row_count').value);
    };
    return Student;
}());
var student = new Student();
var add_pop_window = function () {
    student.add_pop_window();
};
var edit_pop_window = function (id) {
    student.edit_pop_window(id);
};
var addChildByID = function (body_tag, parent_id, inner_text, tag, style, id, value) {
    if (body_tag === void 0) { body_tag = ''; }
    if (parent_id === void 0) { parent_id = ''; }
    if (inner_text === void 0) { inner_text = ''; }
    if (style === void 0) { style = ''; }
    if (id === void 0) { id = ''; }
    if (value === void 0) { value = ''; }
    student.addChildByID(body_tag, parent_id, inner_text, tag, style, id, value);
};
var addRow = function (roll, name) {
    student.addRow(roll, name);
};
var updateRow = function (id, roll, name) {
    student.updateRow(id, roll, name);
};
var deleteRow = function (id) {
    student.deleteRow(id);
};
