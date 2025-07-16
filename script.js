const infoRamos = {
  fundamentos: {
    nombre: "Fundamentos históricos y políticos del Trabajo Social",
    semestre: "I",
    sct: 5,
    descripcion: "Introduce los pilares históricos y políticos de la disciplina."
  },
  filosofia: {
    nombre: "Filosofía",
    semestre: "I",
    sct: 5,
    descripcion: "Curso base de pensamiento filosófico para ciencias sociales."
  },
  historiaContemp: {
    nombre: "Historia social contemporánea",
    semestre: "I",
    sct: 5,
    descripcion: "Panorama histórico de procesos sociales contemporáneos."
  },
  teoriaSoc: {
    nombre: "Teoría sociológica I",
    semestre: "I",
    sct: 5,
    descripcion: "Primer curso sobre teorías clásicas de la sociología."
  },
  metodologia1: {
    nombre: "Metodología de la investigación social I",
    semestre: "I",
    sct: 5,
    descripcion: "Fundamentos metodológicos cuantitativos y cualitativos."
  },
  ingles1: {
    nombre: "Inglés I",
    semestre: "I",
    sct: 5,
    descripcion: "Curso de inglés básico para comprensión lectora."
  }
};

function mostrarInfo(id) {
  const info = infoRamos[id];
  const div = document.getElementById("infoRamo");

  if (info) {
    div.style.display = "block";
    div.innerHTML = `
      <h2>${info.nombre}</h2>
      <p><strong>Semestre:</strong> ${info.semestre}</p>
      <p><strong>Créditos SCT:</strong> ${info.sct}</p>
      <p><strong>Descripción:</strong> ${info.descripcion}</p>
    `;
  }
}
