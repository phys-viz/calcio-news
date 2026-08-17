document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".news-card");

  function applyFilter(filter) {
    cards.forEach(function (card) {
      if (filter === "all" || card.getAttribute("data-team") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
    buttons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  var defaultFilter = document.body.getAttribute("data-default-filter");
  if (defaultFilter) {
    applyFilter(defaultFilter);
  }
});
