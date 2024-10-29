import data from "./projects.json";

const contentContainer = document.querySelector("#content-container");

const UI = (function () {
  let sidebar, projectView;

  function initialView() {
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
