<template>
  <canvas 
    ref="canvasRef" 
    class="fixed inset-0 pointer-events-none z-10 opacity-70"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;
let petals = [];

class Petal {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * this.w;
    this.y = initial ? Math.random() * this.h : -20;
    this.size = 8 + Math.random() * 10;
    this.speedY = 0.6 + Math.random() * 1.2;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.opacity = 0.35 + Math.random() * 0.45;
    // Vary between pink rose and soft gold petal colors
    const colors = [
      'rgba(226, 76, 100, ', // Rose pink
      'rgba(244, 114, 182, ', // Light pink
      'rgba(245, 170, 180, ', // Soft blush
      'rgba(212, 179, 112, '  // Gold shimmer
    ];
    this.colorBase = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.y += this.speedY;
    this.x += Math.sin(this.y * 0.01) * 0.7 + this.speedX;
    this.rotation += this.rotationSpeed;

    if (this.y > this.h + 20 || this.x < -20 || this.x > this.w + 20) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.colorBase + this.opacity + ')';
    ctx.beginPath();
    // Gentle petal bezier curve
    ctx.moveTo(0, -this.size / 2);
    ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size / 2, this.size / 2, 0, this.size);
    ctx.bezierCurveTo(-this.size / 2, this.size / 2, -this.size / 2, -this.size / 2, 0, -this.size / 2);
    ctx.fill();
    ctx.restore();
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Initialize petals (subtle, 24 petals)
  const petalCount = window.innerWidth < 640 ? 15 : 28;
  petals = Array.from({ length: petalCount }, () => new Petal(canvas.width, canvas.height));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => {
      petal.update();
      petal.draw(ctx);
    });
    animationFrameId = requestAnimationFrame(animate);
  }
  animate();

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  });
});
</script>
