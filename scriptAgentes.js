const agents = document.querySelector(".agents");
const content = document.querySelector(".content");

const nextAgent = () => {
  const activeAgent = agents.querySelector(".active");
  const nextIndex = (activeAgent.dataset.index + 1) % agents.querySelectorAll("li").length;
  const nextAgent = agents.querySelectorAll("li")[nextIndex];

  // Atualizar a lista
  agents.querySelectorAll("li").forEach((agent) => {
    agent.classList.remove("active");
  });
  nextAgent.classList.add("active");

  // Atualizar o conteúdo
  content.querySelector("h1").textContent = nextAgent.textContent;
  content.querySelector("p").textContent = `
    Descrição do agente ${nextAgent.textContent}
  `;
};

// Iniciar o slideshow
setInterval(nextAgent, 5000);

// Evento de clique
agents.addEventListener("click", (event) => {
  const selectedAgent = event.target.textContent;
  content.querySelector("h1").textContent = selectedAgent;
  content.querySelector("p").textContent = `
    Descrição do agente ${selectedAgent}
  `;
  content.style.display = "block";

  // Desabilitar os outros agentes
  agents.querySelectorAll("li").forEach((agent) => {
    agent.classList.remove("active");
  });

  // Habilitar o agente selecionado
  event.target.classList.add("active");
});
