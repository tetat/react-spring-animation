import { useSpring, animated } from "@react-spring/web";

export default function Compo1() {
  const fadeInFromTop = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });

  const numberSpring = useSpring({
    from: { number: 0 },
    to: { number: 10 },
    delay: 1000,
    config: { duration: 10000 },
  });

  return (
    <animated.div style={fadeInFromTop}>
      <div style={c1Style}>
        <h1>Component 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          deserunt, autem minima veniam nostrum nobis dignissimos praesentium.
          Voluptate labore possimus commodi culpa. Porro quam doloribus qui
          sapiente consequatur officiis provident!
        </p>

        <animated.div style={counterStyle}>
          <animated.h1>
            {numberSpring.number.to((n) => n.toFixed(0))}
          </animated.h1>
        </animated.div>
      </div>
    </animated.div>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

const counterStyle = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto",
};
