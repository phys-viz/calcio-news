document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".news-card");
  var titleEl = document.getElementById("page-title");
  var subtitleEl = document.getElementById("page-subtitle");

  var TEAM_INFO = {
    chieti: {
      title: "Chieti FC",
      sub: "Tutte le notizie sul Chieti FC 1922.<br>All the news on Chieti FC 1922."
    },
    pescara: {
      title: "Pescara Calcio",
      sub: "Tutte le notizie sul Delfino Pescara 1936.<br>All the news on Delfino Pescara 1936."
    },
    all: {
      title: "Chieti FC & Pescara Calcio",
      sub: "Tutte le notizie di entrambe le squadre.<br>All the news from both clubs."
    }
  };

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

    // Keep the page heading in sync too, on pages that have one (chieti.html / pescara.html).
    if (titleEl && subtitleEl && TEAM_INFO[filter]) {
      titleEl.textContent = TEAM_INFO[filter].title;
      subtitleEl.innerHTML = TEAM_INFO[filter].sub;
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
