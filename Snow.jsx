import { useEffect } from "react";

const Snow = () => {
  useEffect(() => {
    const canvas = document.getElementById("snow");
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const flakes = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 1,
      d: Math.random() + 1
    }));

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.beginPath();

      flakes.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      });

      ctx.fill();
      update();
    };

    const update = () => {
      angle += 0.01;
      flakes.forEach(f => {
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 0.5;

        if (f.y > h) {
          f.y = 0;
          f.x = Math.random() * w;
        }
      });
    };

    const interval = setInterval(draw, 25);

    window.onresize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="snow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
};

export default Snow; 