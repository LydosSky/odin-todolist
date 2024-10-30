import Controller from "./Controller.js";
import UI from "./UI.js";

const Handlers = (function () {
  function projectCardClick(event) {
    let element;
    if (event.target.tagName !== "LI") {
      element = event.target.parentElement;
    } else {
      element = event.target;
    }

    const index = element.getAttribute("index");

    const project = Controller.getProject(index);
    UI.displayProject(project);

    return;
  }

  function displayFormModal(event) {
    const element = event.target;
    switch (element.id) {
      case "add-todo":
      case "add-project":
        UI.toggleDisplayForm(element.id);
      default:
        return;
    }
  }

  function closeFormModal(event) {
    const element = event.target;
    const elementId = element.getAttribute("form-name");

    if (element.id === "modal-background") UI.toggleDisplayForm(elementId);
  }

  return { projectCardClick, displayFormModal, closeFormModal };
})();

export default Handlers;
