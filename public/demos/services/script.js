(function () {
  'use strict';

  // Carrusel multi-slide con transform, breakpoints responsive, swipe y auto-play.
  class MultiSlider {
    constructor(root) {
      this.root = root;
      this.track = root.querySelector('[data-track]');
      this.slides = Array.from(this.track.querySelectorAll('.slide'));
      this.prevBtn = root.querySelector('[data-prev]');
      this.nextBtn = root.querySelector('[data-next]');
      this.dotsContainer = root.querySelector('[data-dots]');

      this.index = 0;
      this.slidesPerView = 1;
      this.autoPlayMs = 6000;
      this.autoPlayId = null;

      // Touch
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.updateSlidesPerView();
      this.buildDots();
      this.bindEvents();
      this.update();
      this.startAutoPlay();
    }

    updateSlidesPerView() {
      const w = window.innerWidth;
      if (w >= 1024) this.slidesPerView = 3;
      else if (w >= 700) this.slidesPerView = 2;
      else this.slidesPerView = 1;
    }

    maxIndex() {
      return Math.max(0, this.slides.length - this.slidesPerView);
    }

    buildDots() {
      this.dotsContainer.innerHTML = '';
      const total = this.maxIndex() + 1;
      for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', 'Ir al slide ' + (i + 1));
        btn.addEventListener('click', () => {
          this.goTo(i);
          this.restartAutoPlay();
        });
        this.dotsContainer.appendChild(btn);
      }
      this.dots = Array.from(this.dotsContainer.querySelectorAll('button'));
    }

    bindEvents() {
      this.nextBtn.addEventListener('click', () => {
        this.next();
        this.restartAutoPlay();
      });
      this.prevBtn.addEventListener('click', () => {
        this.prev();
        this.restartAutoPlay();
      });

      // Recalcular al cambiar tamaño de ventana
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const prev = this.slidesPerView;
          this.updateSlidesPerView();
          if (prev !== this.slidesPerView) {
            this.index = Math.min(this.index, this.maxIndex());
            this.buildDots();
          }
          this.update();
        }, 150);
      });

      // Pausar hover
      this.root.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.root.addEventListener('mouseleave', () => this.startAutoPlay());

      // Swipe touch
      this.track.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      }, { passive: true });

      this.track.addEventListener('touchmove', (e) => {
        this.touchEndX = e.touches[0].clientX;
      }, { passive: true });

      this.track.addEventListener('touchend', () => {
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? this.next() : this.prev();
          this.restartAutoPlay();
        }
      });
    }

    goTo(i) {
      const max = this.maxIndex();
      if (i < 0) i = max;
      if (i > max) i = 0;
      this.index = i;
      this.update();
    }

    next() { this.goTo(this.index + 1); }
    prev() { this.goTo(this.index - 1); }

    update() {
      const offset = (100 / this.slidesPerView) * this.index;
      this.track.style.transform = `translateX(-${offset}%)`;
      if (this.dots) {
        this.dots.forEach((d, i) => d.classList.toggle('active', i === this.index));
      }
    }

    startAutoPlay() {
      this.stopAutoPlay();
      this.autoPlayId = setInterval(() => this.next(), this.autoPlayMs);
    }

    stopAutoPlay() {
      if (this.autoPlayId) {
        clearInterval(this.autoPlayId);
        this.autoPlayId = null;
      }
    }

    restartAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-slider]').forEach((el) => new MultiSlider(el));
  });
})();
