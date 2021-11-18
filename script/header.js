const navWrapper = document.querySelector(".header");
const navUl = document.createElement("ul");

//메뉴를 담은 오브젝트배열
const navCont = [
  {
    name: "민트",
    href: "asdasd.com",
  },
  {
    name: "초코를",
    href: "asdasd.com",
  },
  {
    name: "도대체",
    href: "asdasd.com",
  },
  {
    name: "어째서",
    href: "asdasd.com",
  },
  {
    name: "싫어하지?",
    href: "asdasd.com",
  },
];

const logoSetting = () => {
  const logoA = document.createElement("a");
  logoA.classList.add("logoA");
  logoA.setAttribute("href", "#");
  logoA.innerText = "P . D . G";
  navWrapper.appendChild(logoA);
};

const createNav = () => {
  for (i = 0; i < navCont.length; i++) {
    const navUlLi = document.createElement("li");
    const navUlLiA = document.createElement("a");

    navUlLiA.innerText = JSON.stringify(navCont[i].name).replace(/\"/gi, "");
    navUlLiA.setAttribute("href", navCont[i].href);
    navUlLiA.setAttribute("target", "_blank");
    navUl.appendChild(navUlLi);
    navUlLi.appendChild(navUlLiA);

    console.log(navUlLiA);
  }
};

const header = () => {
  logoSetting();
  createNav();

  navWrapper.appendChild(navUl);
};

header();
