import { DATE_FORMAT } from ".";
import { format } from "date-fns";

class Project {
  constructor(name, details, createdAt) {
    this.name = name;
    this.details = details;
    this.createdAt = createdAt;
    this.completed = false;
    this.completedAt = null;
  }

  changeName(newName) {
    this.name = newName;
  }

  changeDetails(newDetails) {
    this.details = newDetails;
  }

  toggleComplete() {
    if (this.completedAt !== null) {
      this.completedAt = null;
    } else {
      this.#setCompletedAt(new Date());
    }

    this.completed = !this.completed;
  }

  #setCompletedAt(date) {
    this.completedAt = format(date, DATE_FORMAT);
  }
}

export default Project;
