import UseRef01 from "./04-useRef/useRef01"
import UseRef02 from "./04-useRef/UseRef02";
import Emotion01 from "./Emotion/Emotion01";
import Emotion02 from "./Emotion/Emotion02";

export default function study() {
    const stateStudy = {
        1: <UseRef01 />,
        2: <UseRef02 />,
        3: <Emotion01 />,
        4: <Emotion02 />,
    }

  return stateStudy[4];
}
