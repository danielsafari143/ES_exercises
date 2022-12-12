import { DateTime } from '../node_modules/modules/luxon/src/luxon.js';

export default class Library {
    books;

    constructor() {
      this.books = [];
    }

    display = (initialObj, arg) => {
      document.getElementById('addBook').style.display = 'none';
      document.getElementById('contacts').style.display = 'none';

      setInterval(() => {
        const date = DateTime.now();
        document.getElementById('clock').innerHTML = `${date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`;
      }, 1000);

      if (arg === null && initialObj !== null) {
        for (let i = 0; i < initialObj.length; i += 1) {
          document.getElementById('books').innerHTML += `
              <li class = "bck" id ="bck">
                <div class ="main">
                <p>${initialObj[i].author}</p>
                <p>by ${initialObj[i].title}</p>
                </div>
                <button id='${i}' class = 'btn'>Remove</button>
              </li>
              `;
        }
      } else if (arg === null) {
        localStorage.setItem('datas', JSON.stringify(this.books));
        document.getElementById('books').innerHTML = '';
        for (let i = 0; i < JSON.parse(localStorage.getItem('datas')).length; i += 1) {
          document.getElementById('books').innerHTML += `
              <li class = "bck" id="bck">
                <div class ="main">
                <p>${JSON.parse(localStorage.getItem('datas'))[i].author}</p>
                <p> by ${JSON.parse(localStorage.getItem('datas'))[i].title}</p>
                </div>
                <button id='${i}'  class = 'btn'>Remove</button>
              </li>
              `;
        }
      } else {
        localStorage.setItem('datas', JSON.stringify(this.books));
        document.getElementById('books').innerHTML = '';
        for (let i = 0; i < arg.length; i += 1) {
          document.getElementById('books').innerHTML += `
          <li class = "bck" id="bck">
            <div class ="main">
              <p>${arg[i].author}</p>
              <p>by ${arg[i].title}</p>
              </div>
              <button id='${i}' class = 'btn'>Remove</button>
            </li>
              `;
        }
      }
    }

    remove = (ref) => {
      this.books = JSON.parse(localStorage.getItem('datas'));
      this.books.splice(ref, 1);
      localStorage.setItem('datas', JSON.stringify(this.books));
      this.display(null, JSON.parse(localStorage.getItem('datas')));
      this.books = JSON.parse(localStorage.getItem('datas'));
      for (let i = 0; i < document.getElementsByClassName('btn').length; i += 1) {
        document.getElementById(i).addEventListener('click', () => {
          this.remove(i);
        });
      }
    }

    add = (author, title) => {
      const hauteur = document.getElementById(author).value;
      const titre = document.getElementById(title).value;
      if (titre !== '' && hauteur !== '') {
        this.books = JSON.parse(localStorage.getItem('datas'));
        this.books.push({ author: hauteur, title: titre });
        localStorage.setItem('datas', JSON.stringify(this.books));
        document.getElementById(author).value = '';
        document.getElementById(title).value = '';
        this.display(null, JSON.parse(localStorage.getItem('datas')));
        document.getElementById('boofirst').style.display = 'flex';
      }
    }
}
