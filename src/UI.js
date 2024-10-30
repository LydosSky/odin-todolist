import Handlers from "./eventHandlers";

const contentContainer = document.querySelector("#content-container");

const Ui = (function () {
  let sidebar, projectView, projectList, todoList, formModal;

  function initialView() {
    sidebar = document.createElement("div");
    projectView = document.createElement("div");
    projectList = document.createElement("ul");
    todoList = document.createElement("ul");

    sidebar.id = "sidebar-container";
    projectView.id = "project-view-container";
    projectList.id = "project-list";
    todoList.id = "todo-list";

    sidebar.appendChild(projectList);
    contentContainer.appendChild(sidebar);
    contentContainer.appendChild(projectView);
  }

  function addProject(project, index) {
    const li = document.createElement("li");
    const projectTitle = document.createElement("h2");
    const projectDetail = document.createElement("small");

    projectTitle.innerText = project.name;
    projectDetail.innerText = project.details;

    li.classList.add("project");
    li.setAttribute("index", index);
    li.appendChild(projectTitle);
    li.appendChild(projectDetail);
    li.classList.add("project-card");
    li.addEventListener("click", Handlers.projectCardClick);
    projectList.appendChild(li);
  }

  function displayProject(project) {
    projectView.innerText = "";

    const name = document.createElement("h1");
    const details = document.createElement("p");
    const todos = document.createElement("p");
    name.innerText = project.name;
    details.innerText = project.details;
    todos.innerText = "Todos: ";

    projectView.appendChild(name);
    projectView.appendChild(details);
    projectView.appendChild(todos);
    projectView.appendChild(todoList);

    todoList.innerText = "";
    for (let todo of project.todos) {
      displayTodo(todo);
    }
  }

  function displayTodo(todo) {
    const todoItem = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("small");

    todoItem.classList.add("todo");
    title.innerText = todo.title;
    description.innerText = todo.description;
    if (todo.dueDate !== null) dueDate.innerText = `Due: ${todo.dueDate}`;

    todoItem.appendChild(title);
    todoItem.appendChild(description);
    todoItem.appendChild(dueDate);
    todoList.appendChild(todoItem);
  }

  return { initialView, addProject, displayProject };
})();

export default Ui;
