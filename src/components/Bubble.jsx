import "./Bubble.css";

function Bubble({ text, style }) {
  return (
    <div className="bubble" style={style}>
      {text}
    </div>
  );
}

export default Bubble;
