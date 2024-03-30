function customRender(ryktElement, container) {
  // placeholder ho so j name diye ni hunxa
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); //(kya inject garne ,kaha inject garne)
