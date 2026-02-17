module.exports = {
  content: ['_site/**/*.html', '_site/assets/js/*.js'],
  css: ['_site/assets/css/main.css'],
  output: '_site/assets/css/',
  safelist: [
    // OwlCarousel dynamic classes
    'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-item', 'owl-stage',
    'owl-stage-outer', 'owl-nav', 'owl-dots', 'owl-dot', 'owl-prev',
    'owl-next', 'owl-drag', 'owl-grab',
    // Bootstrap dynamic classes (toggled by JS)
    'active', 'show', 'fade', 'tab-pane', 'tab-content', 'nav-link',
    'was-validated', 'collapse', 'collapsing', 'navbar-collapse',
    'sticky-top', 'invalid-tooltip', 'valid-tooltip',
    // Custom JS-toggled classes
    'is-fixed', 'offcanvas-active',
    // Accessibility
    'sr-only', 'sr-only-focusable',
  ],
}
