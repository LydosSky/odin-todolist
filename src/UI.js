const contentContainer = document.querySelector("#content-container");

const Ui = (function () {
  let sidebar, projectView, projectList;

  function initialView() {
    sidebar = document.createElement("div");
    projectView = document.createElement("div");
    projectList = document.createElement("ul");

    sidebar.id = "sidebar-container";
    projectView.id = "project-view-container";
    projectList.id = "project-list";

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

  return { initialView, addProject };
})();

export default Ui;
