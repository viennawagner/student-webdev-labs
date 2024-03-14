const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const addToDOM = (item) => {
  let element = document.createElement('div');
  let title = document.createElement('h3');
  let author = document.createElement('p');
  let released = document.createElement('p');
  let pages = document.createElement('p');

  title.textContent = item.name;
  author.textContent = item.authors[0];
  released.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  app.append(element);
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
  .then((response) => response.json())
  .then(
    (data) => {
      console.log(data);
      data.forEach((book) => {
        addToDOM(book);
      });
    }
  )
  .catch(error => {
    let element = document.createElement("div");
    element.textContent = "An error has occurred, please reload";
    app.append(element);
  })
  .finally(() => {
    let loader = document.getElementById("loading");
    app.removeChild(loader);
  })
};

fetchData(url)
