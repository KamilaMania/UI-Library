import Tooltip from "./kami-ui/tooltip";
import Dropdown from "./kami-ui/dropdown";
import Tabs from "./kami-ui/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
