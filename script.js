let members = JSON.parse(localStorage.getItem("members")) || [];

function displayMembers() {

let table = document.getElementById("memberTable");
table.innerHTML = "";

members.forEach((member, index) => {

table.innerHTML += `
<tr>
<td>${member.id}</td>
<td>${member.name}</td>
<td>${member.phone}</td>
<td>${member.plan}</td>
<td>
<button onclick="deleteMember(${index})">
Delete
</button>
</td>
</tr>
`;

});

}

function addMember() {

let name = document.getElementById("memberName").value;
let phone = document.getElementById("memberPhone").value;
let plan = document.getElementById("memberPlan").value;

let id = "DF" + String(members.length + 1).padStart(3, "0");

members.push({
id: id,
name: name,
phone: phone,
plan: plan
});

localStorage.setItem("members", JSON.stringify(members));

displayMembers();

}

function deleteMember(index) {

members.splice(index, 1);

localStorage.setItem("members", JSON.stringify(members));

displayMembers();

}

displayMembers();