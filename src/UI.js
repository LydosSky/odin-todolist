import data from "./projects.json";
import Project from "./Project.js";
import Todo from "./Todo";

const contentContainer = document.querySelector("#content-container");

const UI = (function () {
  let sidebar,
    projectView,
    projects = [];

  function addProject(project) {
    projects.push(project);
  }

  function populateProjects() {
    for (let project of data) {
      const projectObj = new Project(
        project.name,
        project.details,
        project.createdAt,
      );
      projectObj.completed = project.completed;
      for (let todo of project.todos) {
        const newTodo = new Todo(
          todo.title,
          todo.description,
          todo.priority,
          todo.dueDate,
        );
        projectObj.addTodo(newTodo);
      }

      addProject(projectObj);
    }
  }


  function initialView() {
    populateProjects();

    sidebar = document.createElement("div");
    projectView = document.createElement("div");

    sidebar.id = "sidebar-container";
    projectView.id = "project-view-container";

    contentContainer.appendChild(sidebar);
    contentContainer.appendChild(projectView);
  }

  return { initialView };
})();

export default UI;
