import Handlers from "./eventHandlers";

const contentContainer = document.querySelector("#content-container");

const Ui = (function () {
  let sidebar,
    projectView,
    projectList,
    todoList,
    addTodoButton,
    addTodoForm,
    addProjectForm,
    modalBackground,
    addProjectButton;

  function initialView() {
    addTodoForm = document.querySelector("#create-todo-modal");
    addProjectForm = document.querySelector("#create-project-modal");
    modalBackground = document.querySelector("#modal-background");
    sidebar = document.createElement("div");
    projectView = document.createElement("div");
    projectList = document.createElement("ul");
    todoList = document.createElement("ul");
    addProjectButton = document.createElement("button");

    addProjectButton.innerText = "Add Project";
    addProjectButton.id = "add-project";
    addProjectButton.addEventListener("click", Handlers.displayFormModal);

    sidebar.id = "sidebar-container";
    projectView.id = "project-view-container";
    projectList.id = "project-list";
    todoList.id = "todo-list";

    sidebar.appendChild(projectList);
    contentContainer.appendChild(sidebar);
    contentContainer.appendChild(projectView);

    sidebar.appendChild(addProjectButton);
    modalBackground.addEventListener("click", Handlers.closeFormModal);
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

    addTodoButton = document.createElement("button");
    const name = document.createElement("h1");
    const details = document.createElement("p");
    const todos = document.createElement("p");
    name.innerText = project.name;
    details.innerText = project.details;
    todos.innerText = "Todos: ";
    addTodoButton.innerText = "Add Todo";
    addTodoButton.id = "add-todo";

    projectView.appendChild(name);
    projectView.appendChild(details);
    projectView.appendChild(todos);
    projectView.appendChild(todoList);

    todoList.innerText = "";
    for (let todo of project.todos) {
      displayTodo(todo);
    }

    projectView.appendChild(addTodoButton);
    addTodoButton.addEventListener("click", Handlers.displayFormModal);
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

  function toggleDisplayForm(elementId) {
    if (elementId === "add-todo") {
      addTodoForm.classList.toggle("display-none");
      modalBackground.setAttribute("form-name", "add-todo");
    } else if (elementId == "add-project") {
      addProjectForm.classList.toggle("display-none");
      modalBackground.setAttribute("form-name", "add-project");
    }
    modalBackground.classList.toggle("display-none");
  }

  return { initialView, addProject, displayProject, toggleDisplayForm };
})();

export default Ui;
