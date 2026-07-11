
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-menu");

function closeMenu(){
  if (!toggle || !menu) return;
  toggle.classList.remove("is-open");
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded","false");
  document.body.classList.remove("menu-open");
}
if (toggle && menu){
  toggle.addEventListener("click",()=>{
    const opening = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open",opening);
    toggle.classList.toggle("is-open",opening);
    toggle.setAttribute("aria-expanded",String(opening));
    document.body.classList.toggle("menu-open",opening);
  });
  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape") closeMenu();});
}
