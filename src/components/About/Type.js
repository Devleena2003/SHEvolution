var string =
  "We are a passionate group of college students who have come together to address the gender gap in the tech industry and provide a supportive platform for women in technology. Recognizing the challenges and barriers that women often face in pursuing careers in tech, we decided to create a space where women can come together to learn, support each other, and grow professionally.";
var str = string.split("");
var el = document.getElementById("str");
(function animate() {
  str.length > 0 ? (el += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();
