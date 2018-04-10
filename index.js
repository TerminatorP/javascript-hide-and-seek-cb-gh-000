function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let listItems = document.querySelectorAll(".ranked-list li");
  for (let item of listItems) {
    let content = parseInt(item.textContent, 10);
    return item.innerHTML = content + n;
  }
}
