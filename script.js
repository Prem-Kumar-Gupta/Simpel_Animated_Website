const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  cursorBlur.style.left = e.x - 200 + "px";
  cursorBlur.style.top = e.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    // markers:true,
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});
