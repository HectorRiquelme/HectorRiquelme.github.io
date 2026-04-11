(function () {
  'use strict';

  // Carrusel coverflow 3D con soporte teclado, drag y click en slides.
  class Coverflow {
    constructor(root) {
      this.root = root;
      this.stage = root.querySelector('[data-stage]');
      this.items = Array.from(this.stage.querySelectorAll('[data-item]'));
      this.prevBtn = root.querySelector('[data-prev]');
      this.nextBtn = root.querySelector('[data-next]');
      this.current = 0;
      this.isDragging = false;
      this.dragStartX = 0;

      // Contadores externos
      this.counterCurrent = document.querySelector('[data-current]');
      this.counterTotal = document.querySelector('[data-total]');
      if (this.counterTotal) this.counterTotal.textContent = this.items.length;

      this.bindEvents();
      this.update();
    }

    bindEvents() {
      this.nextBtn.addEventListener('click', () => this.next());
      this.prevBtn.addEventListener('click', () => this.prev());

      // Click en un slide → ir a él
      this.items.forEach((item, i) => {
        item.addEventListener('click', () => {
          if (i !== this.current) this.goTo(i);
        });
      });

      // Teclado
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
      });

      // Drag con mouse
      this.stage.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.stage.style.cursor = 'grabbing';
      });
      document.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        const diff = e.clientX - this.dragStartX;
        if (Math.abs(diff) > 80) {
          diff > 0 ? this.prev() : this.next();
          this.isDragging = false;
          this.stage.style.cursor = '';
        }
      });
      document.addEventListener('mouseup', () => {
        this.isDragging = false;
        this.stage.style.cursor = '';
      });

      // Touch swipe
      let touchStartX = 0;
      this.stage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      this.stage.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 50) diff > 0 ? this.prev() : this.next();
      });
    }

    goTo(index) {
      const n = this.items.length;
      this.current = ((index % n) + n) % n;
      this.update();
    }

    next() { this.goTo(this.current + 1); }
    prev() { this.goTo(this.current - 1); }

    update() {
      const spacing = window.innerWidth < 768 ? 130 : 200;
      this.items.forEach((item, i) => {
        let offset = i - this.current;

        // Wrap para loop infinito visual
        const n = this.items.length;
        if (offset > n / 2) offset -= n;
        if (offset < -n / 2) offset += n;

        const abs = Math.abs(offset);
        const translateX = offset * spacing;
        const rotateY = offset * -25;
        const translateZ = abs === 0 ? 0 : -Math.min(abs, 3) * 100;
        const scale = abs === 0 ? 1 : Math.max(0.7, 1 - abs * 0.12);
        const opacity = abs > 3 ? 0 : 1 - abs * 0.15;
        const zIndex = 100 - abs;

        item.style.transform =
          `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.zIndex = zIndex;
        item.style.pointerEvents = abs > 3 ? 'none' : 'auto';
        item.classList.toggle('center', abs === 0);
      });

      if (this.counterCurrent) {
        this.counterCurrent.textContent = this.current + 1;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-coverflow]').forEach((el) => {
      const cf = new Coverflow(el);
      // Recalcular en resize
      let t;
      window.addEventListener('resize', () => {
        clearTimeout(t);
        t = setTimeout(() => cf.update(), 150);
      });
    });
  });
})();
