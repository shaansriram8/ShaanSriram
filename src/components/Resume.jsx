import "./Resume.css";
function Resume() {
  return (
    <div id="maindiv">
      <p id="Title"> Feel free to click and download my resume</p>
      <a href="/Shaan.pdf">
        <img
          src="/resume.png"
          id="imgsrc"
          style={{
            width: "220px",
            height: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease-in-out",
            marginBottom: "60px",
          }}
        ></img>
      </a>
    </div>
  );
}
export default Resume;
