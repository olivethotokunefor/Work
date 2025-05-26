import React, { useEffect, useRef } from "react";
import "../css/Hero.css"; // custom CSS
import me from "../assets/victoria.jpg"

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#4f46e5", "#8b5cf6", "#1e3a8a", "#daa520", "#f59e0b"];
    let particles = [];

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 50);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          velocity: {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3,
          },
        });
      }
    };

    createParticles();

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.velocity.x;
        p.y += p.velocity.y;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        particles.forEach((other, j) => {
          if (i !== j) {
            const dist = Math.hypot(p.x - other.x, p.y - other.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = 0.1 * (1 - dist / 100);
              ctx.stroke();
            }
          }
        });
      });
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-text">
          <span className="tagline">Data Analyst Portfolio</span>
          <h1 className="headline">
            Turning Data Into
            <span className="gradient-text"> Meaningful Insights</span>
          </h1>
          <p className="description">
            I create data-driven solutions that help businesses make better decisions
            through advanced analytics and visualizations.
          </p>
          <div className="buttons">
            <button className="btn-primary">
              View Projects
              <span className="arrow">→</span>
            </button>
            <button className="btn-outline">Contact Me</button>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-glow"></div>
          <div className="avatar-wrapper">
            <img
              src={me}
              alt="Data Analyst Profile"
              className="avatar-img"
            />
            <div className="avatar-fallback"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
