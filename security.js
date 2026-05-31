// ═══════════════════════════════════════════════════
//  PORTFOLIO SECURITY — Aditya Solanki
//  aditya018s.github.io
// ═══════════════════════════════════════════════════

(function () {
  'use strict';

  // ── 1. CONSOLE BRANDING ──────────────────────────
  // Looks professional + warns off scrapers
  const styles = {
    title:   'color:#2fbfad;font-size:22px;font-weight:900;font-family:monospace',
    sub:     'color:#9baba6;font-size:13px;font-family:monospace',
    warn:    'color:#f07255;font-size:13px;font-weight:700;font-family:monospace',
    link:    'color:#7da0e8;font-size:12px;font-family:monospace',
  };
  console.log('%c👋 Hey Developer!', styles.title);
  console.log('%cThis portfolio was built by Aditya Solanki', styles.sub);
  console.log('%c🔗 github.com/aditya018s', styles.link);
  console.log('%c⚠ Unauthorised copying of content or assets is not permitted.', styles.warn);
  console.log('%c─────────────────────────────────────────────', styles.sub);

  // ── 2. DEVTOOLS DETECTION ────────────────────────
  let devtoolsOpen = false;

  function checkDevTools() {
    const threshold = 160;
    const widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if ((widthDiff || heightDiff) && !devtoolsOpen) {
      devtoolsOpen = true;
      showSecurityToast('🔒 Developer tools detected.');
    } else if (!widthDiff && !heightDiff && devtoolsOpen) {
      devtoolsOpen = false;
    }
  }
  setInterval(checkDevTools, 1000);

  // ── 3. BLOCK DEVTOOLS KEYBOARD SHORTCUTS ─────────
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') { e.preventDefault(); showSecurityToast('🔒 Inspect is disabled.'); return; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ['I','i','J','j','C','c'].includes(e.key)) {
      e.preventDefault(); showSecurityToast('🔒 Inspect is disabled.'); return;
    }
    // Ctrl+U (view source)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault(); showSecurityToast('🔒 View source is disabled.'); return;
    }
    // Ctrl+S (save page)
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault(); showSecurityToast('🔒 Saving is disabled.'); return;
    }
    // Ctrl+A (select all) — only block on non-input elements
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
      const tag = document.activeElement.tagName.toLowerCase();
      if (!['input','textarea'].includes(tag)) {
        e.preventDefault();
      }
    }
  });

  // ── 4. DISABLE RIGHT-CLICK ───────────────────────
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showSecurityToast('🔒 Right-click is disabled on this site.');
  });

  // ── 5. DISABLE TEXT SELECTION on key sections ────
  const noSelect = [
    '.hero-copy', '.project-card', '.note-card',
    '.rv-header', '.rv-section', '.build-card',
    '.site-footer', '.site-header .brand'
  ];
  noSelect.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.userSelect       = 'none';
      el.style.webkitUserSelect = 'none';
      el.style.msUserSelect     = 'none';
    });
  });

  // ── 6. DISABLE IMAGE DRAGGING ────────────────────
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.style.pointerEvents = 'none'; // also blocks right-click save on images
  });

  // ── 7. DISABLE PRINT ─────────────────────────────
  // (Allow printing only the resume PDF via its own link, not the whole page)
  window.addEventListener('beforeprint', function (e) {
    showSecurityToast('🔒 Printing this page is disabled. Download the PDF instead.');
    setTimeout(() => window.stop?.(), 0);
  });
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      showSecurityToast('🔒 Use the Download PDF button to get the resume.');
    }
  });

  // ── 8. IFRAME EMBEDDING PROTECTION ───────────────
  // Prevent this portfolio being embedded inside another site
  if (window.self !== window.top) {
    try { window.top.location.href = window.self.location.href; }
    catch (e) { document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif">This page cannot be displayed in an iframe.</p>'; }
  }

  // ── 9. COPY PROTECTION ───────────────────────────
  document.addEventListener('copy', function (e) {
    const selected = window.getSelection()?.toString();
    if (selected && selected.length > 50) {
      e.clipboardData?.setData('text/plain',
        selected + '\n\n— Source: Aditya Solanki Portfolio (aditya018s.github.io)\n'
      );
      e.preventDefault();
      showSecurityToast('© Content copied with attribution added.');
    }
  });

  // ── 10. SECURITY TOAST UI ─────────────────────────
  function showSecurityToast(message) {
    // Remove any existing toast
    document.querySelector('.security-toast')?.remove();

    const toast = document.createElement('div');
    toast.className = 'security-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('security-toast--show'));
    setTimeout(() => {
      toast.classList.remove('security-toast--show');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // ── 11. WATERMARK on profile photo ───────────────
  window.addEventListener('load', function () {
    const avatarImg = document.querySelector('.avatar-img img');
    if (!avatarImg) return;
    const wrapper = avatarImg.closest('.avatar-img');
    if (!wrapper) return;
    const wm = document.createElement('div');
    wm.className = 'avatar-watermark';
    wm.textContent = '© Aditya Solanki';
    wrapper.style.position = 'relative';
    wrapper.appendChild(wm);
  });

  // ── 12. PAGE VISIBILITY — pause canvas when hidden ─
  document.addEventListener('visibilitychange', function () {
    const canvas = document.querySelector('#skill-canvas');
    if (canvas) canvas.style.opacity = document.hidden ? '0' : '0.30';
  });

})();
