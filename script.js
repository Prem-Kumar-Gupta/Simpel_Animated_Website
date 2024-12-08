const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
  cursorBlur.style.left = e.x - 200 + "px";
  cursorBlur.style.top = e.y - 200 + "px";
});

const h4All = document.querySelectorAll("#nav h4");
h4All.forEach((h4) => {
  h4.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "0.5px solid white";
    cursor.style.backgroundColor = "transparent";
  });
});
h4All.forEach((h4) => {
  h4.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#95c11e";
  });
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
gsap.from("#about img,#about_text", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#cardCont",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 1,
  },
});
