import { Axios } from "axios";
import UseRef01 from "./04-useRef/useRef01"
import UseRef02 from "./04-useRef/UseRef02";
import Emotion01 from "./Emotion/Emotion01";
import Emotion02 from "./Emotion/Emotion02";
import Router01 from "./ReactRouter/Router01/Router01";
import Router02 from "./ReactRouter/Router02/Router02";
import Router03 from "./ReactRouter/Router03/Router03";
import Router04 from "./ReactRouter/Router04/Router04";
import Router05 from "./ReactRouter/Router05/Router05";
import Zustand01 from "./Zustand/Zustand01";
import Zustand02 from "./Zustand/Zustand02";
import Zustand03 from "./Zustand/Zustand03";
import Zustand04 from "./Zustand/Zustand04";
import Axios01 from "./Axios/Axios01";
import Axios02 from "./Axios/Axios02";
import Axios03 from "./Axios/Axios03";
import UserRouter from "./Axios/UserPostList/UserRouter";
import Axios04 from "./Axios/Axios04";
import Axios05 from "./Axios/Axios05";
import Axios06 from "./Axios/Axios06";
import ReactQuery01 from "./ReactQuery/ReactQuery01";

export default function study() {
    const stateStudy = {
        1: <Axios06 />,
        2: <ReactQuery01 />,
    }

  return stateStudy[2];
}
