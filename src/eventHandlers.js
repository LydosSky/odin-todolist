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

  return { projectCardClick };
})();

export default Handlers;
