/**
 * Dr. T. Mukunthan – Academic Profile Website
 * assets/main.js
 */

(function () {
  'use strict';

  // ── Tab switching ──────────────────────────────────────────
  function switchTab(name) {
    // Deactivate all panels and buttons
    document.querySelectorAll('.tab-panel').forEach(function (p) {
      p.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.classList.remove('active');
    });

    // Activate selected panel and button
    var panel = document.getElementById('panel-' + name);
    var btn   = document.getElementById('tab-' + name);
    var nav   = document.getElementById('nav-' + name);

    if (panel) panel.classList.add('active');
    if (btn)   btn.classList.add('active');
    if (nav)   nav.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash without jumping
    if (history.replaceState) {
      history.replaceState(null, null, '#' + name);
    }

    return false;
  }

  // ── Expose to global scope (used in onclick attributes) ───
  window.switchTab = switchTab;

  // ── On load: respect URL hash ─────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    var hash = window.location.hash.replace('#', '');
    var validTabs = ['brief', 'publications', 'teaching', 'professional', 'admin', 'grants'];

    if (hash && validTabs.indexOf(hash) !== -1) {
      switchTab(hash);
    } else {
      switchTab('brief');
    }
  });

})();
