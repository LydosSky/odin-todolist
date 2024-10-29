import data from "./projects.json";
import Project from "./Project.js";
import Todo from "./Todo";
import Ui from "./UI.js";

const Controller = (function () {
  const projects = [];

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

  function listProjects() {
    for (let project of projects) {
      Ui.addProject(project);
    }
  }

  function main() {
    populateProjects();
    console.log(projects);
    Ui.initialView();
    listProjects();
  }

  return { main };
})();

export default Controller;
