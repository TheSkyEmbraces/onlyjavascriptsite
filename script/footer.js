const footerWrapper = document.querySelector(".footer"),
  footerContWrap = document.createElement("div"),
  contsWrap = footerContWrap.classList.add("contWrap");

//푸터 왼쪽부터 1번
const contentOne = () => {
  const contWrap = document.createElement("div");
  contWrap.classList.add("cont");

  const logoA = document.createElement("a"),
    tagH3 = document.createElement("h3"),
    tagP = document.createElement("p"),
    tagP1 = document.createElement("p");

  logoA.classList.add("logoA");
  logoA.setAttribute("href", "#");
  logoA.innerText = "P . D . G";

  tagH3.innerText = "2021 / 11 / 17";
  tagP.innerText = "자바스크립트를 모르면 수정이 힘든 사이트.";
  tagP1.innerText = "JAVASCRIPT / SCSS를 이용해서 만들었습니다.";
  footerContWrap.appendChild(contWrap);
  contWrap.appendChild(logoA);
  contWrap.appendChild(tagH3);
  contWrap.appendChild(tagP);
  contWrap.appendChild(tagP1);
};

//푸터 왼쪽부터 2번
const contentOne1 = () => {
  const contWrap = document.createElement("div");
  contWrap.classList.add("cont");

  const tagH3 = document.createElement("h3"),
    tagP = document.createElement("p"),
    tagP1 = document.createElement("p");

  const underLine = document.createElement("div"),
    underLineSpan = document.createElement("span");
  underLine.classList.add("underLine");

  tagH3.innerText = "ParkDongGyu";
  tagP.innerText = "P.D.G (github : TheSkyEmbraces)";
  tagP1.innerText = "Web developer (Front)";
  footerContWrap.appendChild(contWrap);
  contWrap.appendChild(tagH3);
  tagH3.appendChild(underLine);
  underLine.appendChild(underLineSpan);
  contWrap.appendChild(tagP);
  contWrap.appendChild(tagP1);
};

const footer = () => {
  contentOne();
  contentOne1();

  footerWrapper.appendChild(footerContWrap);
};

footer();
