import configs from "../configs";

const placeholder =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
const { baseURL } = configs;
export const fetchAllBooks = async () => {
  const res = await fetch(`${baseURL}/books`);
  const data = await res.json();
  return data;
};

export const displayAllBooks = (books) => {
  const section = document.querySelector("section.book__list");
  let result = "";
  books.forEach((book) => {
    const {
      image,
      title,
      description,
      author: { firstName, lastName },
    } = book;
    result += `
    <div class="col">
      <div class="books_cards-wrapper">
        <div class="card__wrapper">
          <div class="books-img">
            <img src="${image || placeholder}" alt="${title}" />
          </div>
          <div class="book-title">
            <h1>${title}</h1>
          </div>
          <div class="written-by">
            <p>${firstName} ${lastName}</p>
            <p>${description}</p>
          </div>
          <div class="book-rate">
            <i class="fa-solid fa-star"></i>
            <span>4.1 <span class="options">3400 Fikirlar</span></span>
          </div>
        </div>
    </div>
  </div>`;
  });
  section.innerHTML = result;
};
