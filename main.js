let elMovieWrapper = document.querySelector(".movie-list"); // wrapper hisoblaandi

let docFragment = new DocumentFragment(); // data yig'ishi uchun

let renderList = (movie, element) => {
  // function render qlish uchun
  //template contentiga kiriladi
  let elTemplate = document.querySelector(".movie-template").content;
  //bolmase har ishlaganda mana bu usulni qilsa boladi:
  //elTemplate.content.querySelector("")

  movie.forEach((list) => {
    // array boyicha aylaniladi va lelemntga tenglashtirip otiladi
    const clonedNodeTemplate = elTemplate.cloneNode(true); // clone qlish ga ruhsat beradi)

    clonedNodeTemplate.querySelector(".movie-img").src = list.poster;
    clonedNodeTemplate.querySelector(
      ".movie-name"
    ).textContent = `movie title: ${list.title}`;
    clonedNodeTemplate.querySelector(
      ".movie-date"
    ).textContent = ` movie release date ${list.release_date}`;
    clonedNodeTemplate.querySelector(".movie-overview").textContent =
      list.overview.substring(0, 100);
    // hamma lelementni kerakli danniylariga moslanadi

    docFragment.appendChild(clonedNodeTemplate); // fragmentga append qilinvoradi
  });
  element.appendChild(docFragment); // wrapper fragmentni oz ichiga ovoladi)
  console.log(element); // shunchaki tekshirish uchun)
};
renderList(films, elMovieWrapper);

