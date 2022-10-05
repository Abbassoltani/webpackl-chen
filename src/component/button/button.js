// import './button.css'

class Button {
  render() {
    let button = document.createElement("button");
    button.innerHTML = "Button";
    button.classList = "btn-dark";
    let body = document.querySelector("body");
    body.appendChild(button);

    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "web proge";
      body.appendChild(p);
    };
  }
}

export default Button;
