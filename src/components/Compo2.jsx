import { useSpring, animated } from "@react-spring/web";

export default function Compo2() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn}>
      <div style={c2Style}>
        <h1>Component 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deserunt, autem minima veniam nostrum nobis dignissimos praesentium.
        </p>
      </div>
    </animated.div>
  );
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};
