const player = {
  name: "Dhoni",
  actions: ["play", "eat", "sleep", "surf"],
  printActions() {
    this.actions.forEach((action) => {
      console.log(`${this.name} likes to ${action}`);
    });
  },
};

player.printActions();
