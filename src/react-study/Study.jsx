import Axios06 from "./Axios/Axios06";
import ReactQuery01 from "./ReactQuery/ReactQuery01";
import ReactQuery02 from "./ReactQuery/ReactQuery02";
import ReactQuery03 from "./ReactQuery/ReactQuery03";
import ReactQuery04 from "./ReactQuery/ReactQuery04";

export default function study() {
    const stateStudy = {
        1: <Axios06 />,
        2: <ReactQuery01 />,
        3: <ReactQuery02 />,
        4: <ReactQuery03 />,
        5: <ReactQuery04 />,
    }

  return stateStudy[5];
}
