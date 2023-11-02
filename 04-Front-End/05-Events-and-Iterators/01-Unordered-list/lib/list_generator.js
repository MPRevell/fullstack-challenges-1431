/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/list_generator_examiner.js";

const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

// Below is the one-liner version:
// const listItem = content => `<li class="list-group-item">${content}</li>`;

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  const content = items.map((item) => listItem(item)).join("\n  ");
  return `<ul class="list-group">${content}</ul>`;
};

// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    // TODO: call unorderedList() passing the right element
    // TODO: display the list in the browser
    const groceries = ["milk", "butter", "bread"];
    const list = document.getElementById("list");
    list.innerHTML = unorderedList(groceries);
  });
}

runChallenges(listItem, unorderedList); // Do not remove.
export { listItem, unorderedList };
