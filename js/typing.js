function typingEffect() {
  var speed = 70 ;
  var myName = "CLAUDIO PALOSCIA";
  var job = "SOFTWARE ENGINEER";

  let name = document.getElementById("name");
  let se = document.getElementById("se");

  function typeWriter(txt, el, i, doPulse = false) {
    el.innerHTML = el.innerHTML.slice(0, -1);
    el.innerHTML += txt.charAt(i);
    el.innerHTML += "|";
    if (i < txt.length) {
      i++;
      setTimeout(typeWriter, speed, txt, el, i, doPulse);
    } else if (doPulse) {
      el.innerHTML = el.innerHTML.slice(0, -1);
      el.innerHTML += " |";
      pulse(el);
      setInterval(pulse, 1500, el);
    } else {
      el.innerHTML = el.innerHTML.slice(0, -1);
    }
  }

  function pulse(el) {
    el.innerHTML = el.innerHTML.slice(0, -1);
    setTimeout(() => {el.innerHTML += " |"}, 750);
  }

  typeWriter(myName, name, 0, false);
  typeWriter(job, se, 0, false);

}

window.addEventListener("load", typingEffect);