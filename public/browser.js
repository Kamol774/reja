
function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.reja}</span>  
    <div>
      <button data_id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
      <button data_id="${item._id}" class="btn btn-danger" style="border-radius:20px">O'chirish</button> 
    </div>
  </li>`
}

let createField = document.getElementById("create-field");

document
  .getElementById(create-form)
  .addEventListener("submit", function (e) {
    e.preventDefault();

    axios.post("/create-item", {reja: createField.value})
    .then((response) => {
      document.getElementById("item-list").insertAdjacentHTML("beforehand", itemTemplate(response.data));
      createField.value = "";
      createField.focus()
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling");
    };)
  });