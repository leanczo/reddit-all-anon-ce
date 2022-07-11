const newUsername = "Anonymus";
const observer = new MutationObserver(function (mutations) {
  let added = [];
  for (let i = 0; i < mutations.length; i++) {
    let m = mutations[i];
    for (let j = 0; j < m.addedNodes.length; j++) {
      document.documentElement.translate = "no";
      document.title = newUsername;
      Array.prototype.slice
        .call(document.querySelectorAll('[data-testid="post_author_link"]'))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];

      Array.prototype.slice
        .call(document.querySelectorAll('[data-testid="comment_author_link"]'))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];

      Array.prototype.slice
        .call(document.querySelectorAll('[data-click-id="user"]'))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];

      // username top bar
      Array.prototype.slice
        .call(document.getElementsByClassName("_2BMnTatQ5gjKGK5OWROgaG"))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];

      // profile username title
      Array.prototype.slice
        .call(document.getElementsByClassName("_3LM4tRaExed4x1wBfK1pmg"))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];

      //profile username subtitle
      Array.prototype.slice
        .call(document.getElementsByClassName("_28nEhn86_R1ENZ59eAru8S"))
        .filter(function (el) {
          var oldUser = el.getAttribute("href");
          var value = oldUser.split("/user/")[1].slice(0, -1);
          return (el.textContent = el.textContent.replace(value, newUsername));
        })[0];

      Array.prototype.slice
        .call(document.querySelectorAll("span"))
        .filter(function (el) {
          if (el.textContent.search("u/") !== -1)
            return (el.textContent = newUsername);
        })[0];

      Array.prototype.slice
        .call(document.querySelectorAll("h1"))
        .filter(function (el) {
          if (el.textContent.search("u/") !== -1)
            return (el.textContent = newUsername);
        })[0];

      //old reddit
      Array.prototype.slice
        .call(document.querySelectorAll(".author"))
        .filter(function (el) {
          return (el.textContent = newUsername);
        })[0];
    }
  }
  added.forEach((element) => element.remove());
});

const config = { subtree: true, childList: true };
observer.observe(document.body, config);
