import "../sass/main.scss";
import { fetchAllBooks, displayAllBooks } from "./book";
const path = location.pathname;
document.addEventListener("DOMContentLoaded", async () => {
  if (path === "/pages/" || path === "/pages/index.html") {
    const data = await fetchAllBooks();
    displayAllBooks(data.payload.docs);
  }
});
