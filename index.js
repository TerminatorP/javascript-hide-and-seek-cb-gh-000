function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let rankedListItems = document.querySelectorAll('.ranked-list li');
  return rankedListItems.forEach(el => el.innerText++);
}
