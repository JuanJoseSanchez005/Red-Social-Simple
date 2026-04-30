// ==========================
// Datos de publicaciones iniciales
// ==========================
const posts = [
  {
    user: "Juan",
    text: "Disfrutando un paseo por la playa 🌊",
    img: "assets/juan-paseo.jpg"
  },
  {
    user: "Ana",
    text: "Caminata en la montaña ⛰️",
    img: "assets/ana-paseo.jpg"
  }
];

// ==========================
// Renderizar publicaciones
// ==========================
const postsContainer = document.getElementById("postsContainer");

function renderPosts() {
  if (!postsContainer) return;
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-4";

    col.innerHTML = `
      <div class="card shadow-sm">
        <img src="${post.img}" class="card-img-top" alt="${post.user}">
        <div class="card-body">
          <h5 class="card-title">${post.user}</h5>
          <p class="card-text">${post.text}</p>
          <button class="btn btn-outline-primary like-btn">
            ❤️ Me gusta
          </button>
        </div>
      </div>
    `;

    postsContainer.appendChild(col);
  });
}

// Evento de "Me gusta" en publicaciones (toggle)
if (postsContainer) {
  postsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      e.target.classList.toggle("btn-outline-primary");
      e.target.classList.toggle("btn-primary");
      e.target.textContent = e.target.classList.contains("btn-primary")
        ? "💙 Te gusta"
        : "❤️ Me gusta";
    }
  });
}

// ==========================
// Datos de la galería
// ==========================
const galleryImages = [
  { src: "assets/paseo1.jpg", title: "Auto" },
  { src: "assets/paseo2.jpg", title: "Caminata" },
  { src: "assets/paseo3.jpg", title: "Montaña" },
];

// ==========================
// Renderizar galería
// ==========================
const galleryContainer = document.getElementById("galleryContainer");

function renderGallery() {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = "";

  galleryImages.forEach((img) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card shadow-sm">
        <img src="${img.src}" class="card-img-top" alt="${img.title}">
        <div class="card-body text-center">
          <h5 class="card-title">${img.title}</h5>
          <button class="btn btn-outline-primary like-btn-gallery">
            ❤️ Me gusta
          </button>
        </div>
      </div>
    `;

    galleryContainer.appendChild(col);
  });
}

// Evento de "Me gusta" en galería (toggle)
if (galleryContainer) {
  galleryContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn-gallery")) {
      e.target.classList.toggle("btn-outline-primary");
      e.target.classList.toggle("btn-primary");
      e.target.textContent = e.target.classList.contains("btn-primary")
        ? "💙 Te gusta"
        : "❤️ Me gusta";
    }
  });
}

// ==========================
// Inicializar todo
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
  renderGallery();
});

// Validación de login
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Usuario y contraseña definidos
    if (username === "juan" && password === "1234") {
      // Redirige al home
      window.location.href = "home.html";
    } else {
      errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
  });
}
