import Library from './modules/main.js';
import books from './modules/books.js';
import addNew from './modules/list.js';
import clickedContact from './modules/about.js';

const bi = new Library();
bi.display(JSON.parse(localStorage.getItem('datas')), null);
const refresh = () => {
  for (let i = 0; i < document.getElementsByClassName('btn').length; i += 1) {
    document.getElementById(i).addEventListener('click', () => {
      bi.remove(i);
    });
  }
};
document.getElementById('add').addEventListener('click', () => {
  bi.add('name', 'title');
  refresh();
});

refresh();
document.getElementById('adds').addEventListener('click', addNew);
document.getElementById('contact').addEventListener('click', clickedContact);
document.getElementById('list').addEventListener('click', () => {
  books();
  refresh();
});
