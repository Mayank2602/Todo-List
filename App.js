const form = document.querySelector(".add");
const ul = document.querySelector(".todos");
const del = document.querySelectorAll(".delete");
const search = document.querySelector(".search input");

const generate = (todo) => {
  const li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
            </li>`;
  ul.innerHTML += li;
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = form.add.value.trim();
  if (todo.length) generate(todo);
  form.reset();
});
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
});

const filterTodo = (term) => {

    Array.from(ul.children)
    .filter(todo=> !todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(ul.children)
    .filter(todo=> todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.remove('filtered'));
 
};

search.addEventListener("keyup", (e) => {
  const term = e.target.value.trim().toLowerCase();
  filterTodo(term);
});
