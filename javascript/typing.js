function myFunction() {
  var speed = 70 ;
  var myName = "CLAUDIO PALOSCIA";/* The speed/duration of the effect in milliseconds */
  var job = "SOFTWARE ENGINEER";

  function typeWriter(txt, id, i, doPulse = false) {
    let el = document.getElementById(id);
    el.innerHTML = el.innerHTML.slice(0, -1);
    el.innerHTML += txt.charAt(i);
    el.innerHTML += "|";
    if (i < txt.length) {
      i++;
      setTimeout(typeWriter, speed, txt, id, i, doPulse);
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

  typeWriter(myName, "name", 0, true);
  typeWriter(job, "se", 0);

}

window.addEventListener("load", myFunction);

//TODO Fix the typing effect