/* ============================================================
   Alder Creek School — School.js
   Handles: mobile nav, scroll reveal, animated stat counters,
   the live bell-schedule widget, and the admissions form.
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initScrollReveal();
    initStatCounters();
    initBellSchedule();
    initAdmissionsForm();
    initFooterExtras();
  });

  /* ---------------- Mobile nav ----------------
     The mobile menu is a standalone overlay (see index.html) so it isn't
     boxed in by the header's backdrop-filter containing block. This
     handles opening/closing it, locking background scroll, closing on
     backdrop click or Escape, and returning focus to the toggle button. */
  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-menu");
    var closeBtn = document.getElementById("mobile-menu-close");
    var backdrop = document.getElementById("mobile-menu-backdrop");
    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      document.body.classList.add("menu-open");
      var firstLink = menu.querySelector(".mobile-menu-panel a");
      if (firstLink) firstLink.focus();
    }

    function closeMenu(returnFocus) {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.contains("is-open");
      if (isOpen) { closeMenu(true); } else { openMenu(); }
    });

    if (closeBtn) closeBtn.addEventListener("click", function () { closeMenu(true); });
    if (backdrop) backdrop.addEventListener("click", function () { closeMenu(true); });

    // Close whenever a nav link is chosen.
    menu.querySelectorAll(".mobile-menu-panel a").forEach(function (link) {
      link.addEventListener("click", function () { closeMenu(false); });
    });

    // Escape closes it; keep focus inside the panel while open.
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" && e.keyCode !== 27) return;
      if (menu.classList.contains("is-open")) closeMenu(true);
    });

    // If the viewport is resized past the mobile breakpoint while the
    // menu is open (e.g. rotating a tablet), close it so it can't get
    // stuck open behind the desktop layout.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760 && menu.classList.contains("is-open")) {
        closeMenu(false);
      }
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function initScrollReveal() {
    var targets = document.querySelectorAll(
      ".welcome, .track-card, .gallery-item, .news-card, .stat"
    );
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------- Animated stat counters ---------------- */
  function initStatCounters() {
    var nums = document.querySelectorAll(".stat-num");
    if (!nums.length) return;

    var animated = false;

    function runCount() {
      if (animated) return;
      animated = true;
      nums.forEach(function (el) {
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = 1200;
        var start = null;

        function step(timestamp) {
          if (start === null) start = timestamp;
          var progress = Math.min((timestamp - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          var value = Math.round(target * eased);
          el.textContent = value + suffix;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.textContent = target + suffix;
          }
        }
        window.requestAnimationFrame(step);
      });
    }

    var strip = document.querySelector(".stat-strip");
    if (!strip) return;

    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCount();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(strip);
    } else {
      runCount();
    }
  }

  /* ---------------- Live bell schedule ---------------- */
  function initBellSchedule() {
    var board = document.getElementById("bell-board");
    var note = document.getElementById("bell-note");
    if (!board) return;

    // Standard high-school day, expressed in minutes after midnight.
    var periods = [
      { name: "Warning Bell",        start: 7 * 60 + 50, end: 7 * 60 + 55 },
      { name: "Period 1",            start: 7 * 60 + 55, end: 8 * 60 + 45 },
      { name: "Period 2",            start: 8 * 60 + 50, end: 9 * 60 + 40 },
      { name: "Period 3",            start: 9 * 60 + 45, end: 10 * 60 + 35 },
      { name: "Break",               start: 10 * 60 + 35, end: 10 * 60 + 50 },
      { name: "Period 4",            start: 10 * 60 + 50, end: 11 * 60 + 40 },
      { name: "Lunch",               start: 11 * 60 + 40, end: 12 * 60 + 20 },
      { name: "Period 5",            start: 12 * 60 + 20, end: 13 * 60 + 10 },
      { name: "Period 6",            start: 13 * 60 + 15, end: 14 * 60 + 5 },
      { name: "Period 7",            start: 14 * 60 + 10, end: 15 * 60 }
    ];

    function fmt(mins) {
      var h = Math.floor(mins / 60);
      var m = mins % 60;
      var suffix = h >= 12 ? "pm" : "am";
      var h12 = h % 12;
      if (h12 === 0) h12 = 12;
      return h12 + ":" + (m < 10 ? "0" + m : m) + " " + suffix;
    }

    function render() {
      var now = new Date();
      var nowMins = now.getHours() * 60 + now.getMinutes();
      var day = now.getDay(); // 0 Sun ... 6 Sat
      var isWeekend = day === 0 || day === 6;

      board.innerHTML = "";
      var currentLabel = null;

      periods.forEach(function (p) {
        var row = document.createElement("div");
        row.className = "bell-row";

        var isNow = !isWeekend && nowMins >= p.start && nowMins < p.end;
        var isDone = !isWeekend && nowMins >= p.end;
        if (isNow) { row.classList.add("is-now"); currentLabel = p.name; }
        if (isDone) row.classList.add("is-done");

        var time = document.createElement("span");
        time.className = "b-time";
        time.textContent = fmt(p.start) + " \u2013 " + fmt(p.end);

        var name = document.createElement("span");
        name.className = "b-name";
        name.textContent = p.name;

        var status = document.createElement("span");
        status.className = "b-status";
        status.textContent = isNow ? "Now" : isDone ? "Complete" : "Upcoming";

        row.appendChild(time);
        row.appendChild(name);
        row.appendChild(status);
        board.appendChild(row);
      });

      if (note) {
        if (isWeekend) {
          note.textContent = "It's the weekend \u2014 school's out. This schedule will pick back up Monday morning.";
        } else if (currentLabel) {
          note.textContent = "Right now: " + currentLabel + ". Schedule updates automatically as the day goes on.";
        } else if (nowMins < periods[0].start) {
          note.textContent = "School hasn't started yet today \u2014 first bell rings at " + fmt(periods[0].start) + ".";
        } else {
          note.textContent = "The school day has ended. See you tomorrow.";
        }
      }
    }

    render();
    // Keep it live without hammering the DOM — check once a minute.
    window.setInterval(render, 60 * 1000);
  }

  /* ---------------- Admissions form ---------------- */
  function initAdmissionsForm() {
    var form = document.getElementById("admissions-form");
    var status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("parent-name");
      var email = document.getElementById("parent-email");
      var grade = document.getElementById("student-grade");

      if (!name.value.trim() || !email.value.trim() || !grade.value) {
        status.textContent = "Please fill in every field so we can send the right packet.";
        status.style.color = "#f2b8a0";
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        status.textContent = "That email address doesn't look quite right \u2014 mind double-checking it?";
        status.style.color = "#f2b8a0";
        return;
      }

      status.textContent =
        "Thanks, " + name.value.trim().split(" ")[0] + "! An enrollment packet for " +
        grade.value + " is on its way to " + email.value.trim() + ".";
      status.style.color = "#E8A73B";
      form.reset();
    });
  }

  /* ---------------- Footer: year + back to top ---------------- */
  function initFooterExtras() {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var backBtn = document.getElementById("back-to-top");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
})();
