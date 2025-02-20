//En premier lieuu je récupère mmon toggle et mon body//
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

let tl = gsap.timeline();

toggle.addEventListener("click", function () {
  // cette ligne signifie : quand l'utilisateur(addEventListener) click sur le bouton toggle alors il va se passer quelquechose.
  if (body.classList.contains("open")) {
    //si dans le body la classe toggle est ouvert alors fermer le menu
    body.classList.remove("open");
    tl.to(".sep", {
      duration: 0,
      height: 0,
    });

    tl.to(".sep__icon", {
      duration: 0,
      opacity: 0,
    });
  } else {
    //ouvrir le menu
    body.classList.add("open");

    tl.to(".sep", {
      duration: 0.75,
      height: "100%",
      delay: 0.5,
    });

    tl.to(".sep__icon", {
      opacity: 1,
      duration: 0.25,
      delay: -0.5,
    });

    tl.from(
      ".menu_left_inner_item",
      {
        y: 40,
        opacity: 0,
        stagger: 0.25,
      },
      "<-0.5"
    );

    tl.from(
      ".menu_right_inner_item",
      {
        y: 40,
        opacity: 0,
        stagger: 0.7,
      },
      "<-0.5"
    );
  }
});
