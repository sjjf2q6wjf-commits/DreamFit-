let members = JSON.parse(localStorage.getItem("members")) || [];

function displayMembers() {

let table = document.getElementById("memberTable");

table.innerHTML = "";

members.forEach(member => {

table.innerHTML += `
<tr>
<td>${member.name}</td>
<td>${member.phone}</td>
<td>${member.plan}</td>
</tr>
`;

});

}

function addMember() {

let name = document.getElementById("memberName").value;
let phone = document.getElementById("memberPhone").value;
let plan = document.getElementById("memberPlan").value;

members.push({
name:name,
phone:phone,
plan:plan
});

localStorage.setItem("members", JSON.stringify(members));

displayMembers();

}

displayMembers();