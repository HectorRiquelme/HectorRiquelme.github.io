(function () {
  'use strict';

  // Carrusel con fade, auto-play, dots, flechas, teclado y soporte touch.
  class FadeCarousel {
    constructor(root) {
      this.root = root;
      this.track = root.querySelector('[data-track]');
      this.slides = Array.from(this.track.querySelectorAll('.slide'));
      this.prevBtn = root.querySelector('[data-prev]');
      this.nextBtn = root.querySelector('[data-next]');
      this.dotsContainer = root.querySelector('[data-dots]');
      this.current = 0;
      this.autoPlayMs = 5000;
      this.autoPlayId = null;
      this.touchStartX = 0;

      this.buildDots();
      this.bindEvents();
      this.goTo(0);
      this.startAutoPlay();
    }

    buildDots() {
      this.slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', 'Ir al slide ' + (i + 1));
        btn.addEventListener('click', () => {
          this.goTo(i);
          this.restartAutoPlay();
        });
        this.dotsContainer.appendChild(btn);
      });
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

      // Pausar en hover (solo desktop)
      this.root.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.root.addEventListener('mouseleave', () => this.startAutoPlay());

      // Navegación por teclado
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
      });

      // Soporte touch básico
      this.track.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      }, { passive: true });

      this.track.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - this.touchStartX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? this.prev() : this.next();
          this.restartAutoPlay();
        }
      });
    }

    goTo(index) {
      this.slides[this.current].classList.remove('active');
      if (this.dots && this.dots[this.current]) {
        this.dots[this.current].classList.remove('active');
      }
      this.current = (index + this.slides.length) % this.slides.length;
      this.slides[this.current].classList.add('active');
      if (this.dots && this.dots[this.current]) {
        this.dots[this.current].classList.add('active');
      }
    }

    next() { this.goTo(this.current + 1); }
    prev() { this.goTo(this.current - 1); }

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
    document.querySelectorAll('[data-carousel]').forEach((el) => new FadeCarousel(el));
  });
})();
