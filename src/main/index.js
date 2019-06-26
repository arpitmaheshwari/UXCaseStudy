import { createComponent, combine } from "melody-streams";
import { of } from 'rxjs';
import "./main.scss";
import template from "./index.twig";
import dummyData from "./dummyData.js";

function ItemList({props}) {
  return combine(props, {
    items: of(dummyData)
  });
}

export default createComponent(ItemList, template);
