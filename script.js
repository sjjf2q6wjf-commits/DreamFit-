function addMember() {

let name = document.getElementById("memberName").value;
let phone = document.getElementById("memberPhone").value;
let plan = document.getElementById("memberPlan").value;

let table = document.getElementById("memberTable");

table.innerHTML += `
<tr>
<td>${name}</td>
<td>${phone}</td>
<td>${plan}</td>
</tr>
`;

}