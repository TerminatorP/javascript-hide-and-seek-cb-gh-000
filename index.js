function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let listItems = document.querySelectorAll(".ranked-list li");
  for (let item of listItems) {
    return item.innerHTML = parseInt(item.innerHTML)+n;
  }
}
