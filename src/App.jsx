import { useState } from "react";
import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Compo3 from "./components/Compo3";
import { useTransition, animated } from "@react-spring/web";

function App() {
  const [showCompo3, setShowCompo3] = useState(false);

  const toggle = () => setShowCompo3(!showCompo3);

  const transitions = useTransition(showCompo3, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Compo1 />
      <Compo2 toggle={toggle} />
      {transitions((style, item) =>
        item ? (
          <animated.span style={style}>
            <Compo3 />
          </animated.span>
        ) : null
      )}
    </>
  );
}

export default App;
