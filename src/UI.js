const contentContainer = document.querySelector("#content-container");

const Ui = (function () {
  let sidebar, projectView, projectList, todoList;

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

  function addProject(project) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const projectTitle = document.createElement("h2");
    const projectDetail = document.createElement("small");

    projectTitle.innerText = project.name;
    projectDetail.innerText = project.details;

    li.classList.add("project");

    li.appendChild(div);
    div.appendChild(projectTitle);
    div.appendChild(projectDetail);
    div.classList.add("project-card");

    projectList.appendChild(li);
  }

  function displayProject(project) {
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

    for (let todo of project.todos) {
      displayTodo(todo);
    }
  }

  function displayTodo(todo) {
    const todoItem = document.createElement("li");
    const title = document.createElement("p");
    const description = document.createElement("p");

    todoItem.classList.add("todo");
    title.innerText = todo.title;
    description.innerText = todo.description;

    todoItem.appendChild(title);
    todoItem.appendChild(description);
    todoList.appendChild(todoItem);
  }

  function displayForm() {
    const body = document.querySelector("body");
  }

  function hideForm() {}

  return { initialView, addProject, displayProject };
})();

export default Ui;
