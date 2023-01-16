/*    <header>Ok, this is a header</header>
    <h1>There it is</h1>
    <img src="../src/img/pexels-photo-2377164.jpeg" alt="Plate" />
      <p>
        ;
      </p> */
const content = document.getElementById("content");
content.textContent += `¡Ven y disfruta de una experiencia culinaria única en nuestro
restaurante vegano moderno al norte de Hermosillo! Ofrecemos una amplia
variedad de platos deliciosos y saludables, todos hechos con
ingredientes frescos y orgánicos. Nuestra cocina se basa en la
creatividad y el sabor, y estamos seguros de que encontrarás algo que te
encantará. Nuestro ambiente es acogedor y moderno, con una decoración
elegante y un servicio amable. Además, nuestra carta cambia regularmente
para aprovechar los ingredientes de temporada y ofrecer siempre algo
nuevo y emocionante. No importa si eres vegano o simplemente estás
buscando opciones saludables, nuestro restaurante es el lugar perfecto
para disfrutar de una comida deliciosa y sostenible. ¡Te esperamos!`;

const img = document.createElement("img");
content.appendChild(img);
const imgHead = document.querySelector("img");
imgHead.setAttribute("src", "../src/img/pexels-photo-2377164.jpeg");
imgHead.style.cssText = `
  display: flex;
  height: 300px; 
  width: auto;
`;

console.log("Hello there");
