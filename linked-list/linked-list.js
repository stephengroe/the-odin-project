function createLinkedList(name) {
  return {
    name,
    head: null,

    render() {
      // Empty and refill wrapper element
      const container = document.querySelector(`.${this.name.replaceAll(" ","-")}`);

      console.log(container.firstChild);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const name = document.createElement("h2");
      name.textContent = this.name;

      const prependButton = document.createElement("button");
      prependButton.textContent = "Prepend new node";
      prependButton.addEventListener("click", () => {
        this.prependNode(Date.now());
        this.render();
        console.log(this);
      })

      const appendButton = document.createElement("button");
      appendButton.textContent = "Append new node";
      appendButton.addEventListener("click", () => {
        this.appendNode(Date.now());
        this.render();
        console.log(this);
      })

      container.append(name, prependButton, appendButton);

      // Add all nodes
      let next = this.head;
      while (next !== null) {
        const childNode = document.createElement("div");
        childNode.setAttribute("class", "child-node");
        childNode.textContent = next.value;
        container.append(childNode);

        console.log(childNode);

        next = next.nextNode;
      };
    },

    prependNode(value = null) {
      const newNode = createNode(value, this.head);
      this.head = newNode;
      console.log("Prepended:" + newNode.value + " Next: " + newNode.nextNode);
      return newNode;
    },

    appendNode(value) {
      console.log("Appended!");
      return createNode(value, null);
    }
  }
}

function createNode(value=null, nextNode=null) {
  return {
    value,
    nextNode,
  }
}

// Initialize
let counter = 1;
const lists = [];

document.querySelector("#new-list-button").addEventListener("click", () => {
  const name = `Linked list ${counter}`;
  counter += 1;

  const newList = createLinkedList(name);
  lists.push(newList);

  console.log(lists);

  const div = document.createElement("div");
  div.setAttribute("class", `list-object ${name.replaceAll(" ","-")}`);
  document.querySelector("#list-container").append(div);

  lists.forEach(list => list.render());
});