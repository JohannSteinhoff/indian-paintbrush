/* ============================================================
   Indian Paintbrush — small progressive-enhancement scripts.
   No dependencies. Everything degrades gracefully.
   ============================================================ */
(function () {
  "use strict";

  /* ---- current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // close menu after clicking a link
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- contact form (demo handler) ----
     This is a template: it validates and shows a friendly message.
     Wire it to a real backend or a service like Formspree/Netlify Forms
     by adding an `action` + `method` to the <form>, or fetch() below.   */
  var form = document.getElementById("quote-form");
  var note = document.getElementById("form-note");
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      if (!name || !email) {
        note.textContent = "Please add your name and email so we can reach you.";
        note.className = "form__note err";
        return;
      }
      note.textContent = "Thanks, " + name + "! This is a demo form — connect it to email or a form service to receive requests.";
      note.className = "form__note ok";
      form.reset();
    });
  }
})();
