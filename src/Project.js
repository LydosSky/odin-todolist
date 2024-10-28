class Project {
  constructor(name, details, createdAt) {
    this.name = name;
    this.details = details;
    this.createdAt = createdAt;
    this.complete = false;
    this.completedAt = null;
  }

  changeName(newName) {
    this.name = newName;
  }

  changeDetails(newDetails) {
    this.details = newDetails;
  }
}

export default Project;
