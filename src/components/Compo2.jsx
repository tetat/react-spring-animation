import { useSpring, animated } from "@react-spring/web";

function Compo2({ toggle }) {
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
        <button style={btn} onClick={toggle}>
          Toggle Component 3
        </button>
      </div>
    </animated.div>
  );
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

const btn = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  margin: "1rem",
  display: "block",
  transition: "background-color 0.3s ease",
};

export default Compo2;
