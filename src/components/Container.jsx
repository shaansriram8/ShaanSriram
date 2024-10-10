import "./Container.css";
function Container() {
  return (
    <div>
      <p id="aboutTitle"> About Me</p>
      <p id="about">
        I’m <span class="highlight">Shaan Sriram</span>, originally from Aldie,
        VA, and I’m passionate about solving complex problems through
        technology. I’m currently studying{" "}
        <span class="highlight">Computer Engineering</span> at Purdue University
        because I love the blend of computer science fundamentals and the "under
        the hood" understanding of what makes systems work. I’m particularly
        drawn to <span class="highlight">machine learning</span> and its
        potential to transform industries. Beyond my technical interests, I’m a
        very sociable person who enjoys collaborating and connecting with others
        to tackle challenges creatively. Whether it’s developing ML models or
        building <span class="highlight">dynamic web applications</span>, I’m
        always excited to explore innovative solutions.
      </p>
    </div>
  );
}
export default Container;
