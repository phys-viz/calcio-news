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

    // Match the striped team-color background to whichever filter is active,
    // even when the page itself isn't a dedicated chieti.html/pescara.html page.
    document.body.classList.remove("chieti-page", "pescara-page");
    if (filter === "chieti") {
      document.body.classList.add("chieti-page");
    } else if (filter === "pescara") {
      document.body.classList.add("pescara-page");
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  var defaultFilter = document.body.getAttribute("data-default-filter");
  if (defaultFilter) {
    applyFilter(defaultFilter);
  } else {
    applyFilter("all");
  }
});
