const footerWrapper = document.querySelector(".footer"),
  footerContWrap = document.createElement("div"),
  contsWrap = footerContWrap.classList.add("contWrap");

//푸터 최하단 + 카피라이트
const hr = document.createElement("hr");
hr.classList.add("lineFooter");
const copyRight = document.createElement("p");
copyRight.classList.add("Copy");
copyRight.innerText =
  "Copyrightⓒ2021 이곳의 모든 저작권은 ParkDongGyu에게 있습니다.";

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
  tagP.innerText = "P.D.G (github : 안알려줄꺼야)";
  tagP1.innerText = "Web developer (Front)";
  footerContWrap.appendChild(contWrap);
  contWrap.appendChild(tagH3);
  tagH3.appendChild(underLine);
  underLine.appendChild(underLineSpan);
  contWrap.appendChild(tagP);
  contWrap.appendChild(tagP1);
};

//푸터 왼쪽부터 3번
const contentOne2 = () => {
  const contWrap = document.createElement("div");
  contWrap.classList.add("cont");

  const tagH3 = document.createElement("h3");

  const underLine = document.createElement("div"),
    underLineSpan = document.createElement("span");
  underLine.classList.add("underLine");

  const navUl = document.createElement("ul");
  navUl.classList.add("footerNav");

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

  for (i = 0; i < navCont.length; i++) {
    const navUlLi = document.createElement("li"),
      navUlLiA = document.createElement("a");

    navUlLiA.innerText = JSON.stringify(navCont[i].name).replace(/\"/gi, "");
    navUlLiA.setAttribute("href", navCont[i].href);
    navUlLiA.setAttribute("target", "_blank");
    navUl.appendChild(navUlLi);
    navUlLi.appendChild(navUlLiA);
  }

  tagH3.innerText = "MENU";

  footerContWrap.appendChild(contWrap);
  contWrap.appendChild(tagH3);
  contWrap.appendChild(navUl);

  tagH3.appendChild(underLine);
  underLine.appendChild(underLineSpan);
};

//푸터 왼쪽부터 4번
const contentOne3 = () => {
  const contWrap = document.createElement("div");
  contWrap.classList.add("cont");

  //아이콘 변수 모아두기@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const mailIcon = document.createElement("i");
  const arrowIcon = document.createElement("i");
  const fbIcon = document.createElement("i");
  const twIcon = document.createElement("i");
  const instaIcon = document.createElement("i");
  const pinterIcon = document.createElement("i");
  mailIcon.setAttribute("class", "far fa-envelope");
  arrowIcon.setAttribute("class", "fas fa-arrow-right");
  fbIcon.setAttribute("class", "fab fa-facebook-f");
  twIcon.setAttribute("class", "fab fa-twitter");
  instaIcon.setAttribute("class", "fab fa-instagram");
  pinterIcon.setAttribute("class", "fab fa-pinterest");

  //제목부분
  const tagH3 = document.createElement("h3");
  tagH3.innerText = "SNS";

  const underLine = document.createElement("div"),
    underLineSpan = document.createElement("span");
  underLine.classList.add("underLine");

  //이메일부분
  const mailForm = document.createElement("form"),
    mailInput = document.createElement("input"),
    mailBtn = document.createElement("button");

  mailInput.setAttribute("placeholder", "이메일을 입력해주세요.");

  //소셜아이콘부분
  const iconWrap = document.createElement("div");
  iconWrap.classList.add("iconWrap");
  iconWrap.appendChild(fbIcon);
  iconWrap.appendChild(twIcon);
  iconWrap.appendChild(instaIcon);
  iconWrap.appendChild(pinterIcon);

  //차례대로 정렬하기
  footerContWrap.appendChild(contWrap);
  contWrap.appendChild(tagH3);
  contWrap.appendChild(mailForm);
  contWrap.appendChild(iconWrap);

  tagH3.appendChild(underLine);
  underLine.appendChild(underLineSpan);

  mailForm.appendChild(mailIcon);
  mailForm.appendChild(mailInput);
  mailForm.appendChild(mailBtn);
  mailBtn.appendChild(arrowIcon);
};

//실행함수
const footer = () => {
  contentOne();
  contentOne1();
  contentOne2();
  contentOne3();

  footerWrapper.appendChild(footerContWrap);
  footerWrapper.appendChild(hr);
  footerWrapper.appendChild(copyRight);
};

footer();
