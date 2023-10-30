function redirecionar() {

    const url = "https://playvalorant.com/pt-br/?gad_source=1&gclid=CjwKCAjw-eKpBhAbEiwAqFL0miSC4k7e7bNFY9TmzMK_07kMha8ABmZjFz3zl1h159W7Krdb2ScDxRoCEHgQAvD_BwE&gclsrc=aw.ds";
  
    window.location.href = url;
  }
  
  
  const botao = document.querySelector("button");
  botao.addEventListener("click", redirecionar);