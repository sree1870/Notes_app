let currentNote = null;

let title = document.getElementById("title");
let description = document.getElementById("description");
let notes = document.getElementById("notes");

let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let saveBtn = document.getElementById("saveBtn");
let popupBox = document.getElementById("popupBox");

openBtn.addEventListener("click", function () {
popupBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
popupBox.style.display = "none";
currentNote = null;
title.value = "";
description.value = "";
});

saveBtn.addEventListener("click", function () {

let noteTitle = title.value;
let noteDescription = description.value;

if (noteTitle === "" || noteDescription === "") {
alert("fill both fields");
return;
}

if (currentNote) {

currentNote.querySelector("h3").textContent = noteTitle;
currentNote.querySelector("p").textContent = noteDescription;

currentNote = null;

} else {

let note = document.createElement("div");
note.className = "note";

note.innerHTML = `
<h3>${noteTitle}</h3>
<p>${noteDescription}</p>
<button class="deleteBtn">Delete</button>
<button class="editBtn">Edit</button>
`;

note.querySelector(".deleteBtn").addEventListener("click", function () {
note.remove();
});
note.querySelector(".editBtn").addEventListener("click", function () {
title.value = noteTitle;
description.value = noteDescription;
popupBox.style.display = "flex";
currentNote = note;
});

notes.appendChild(note);
}
title.value = "";
description.value = "";
popupBox.style.display = "none";

});