export default class BookstoreService {
  books = [
    {
      id: 1,
      title: 'Little Women',
      author: 'Louisa May Alcott',
      price: 32,
      url: 'https://cdn.britannica.com/04/126004-050-EC4DF54F/Dustcover-Louisa-May-Alcott-Little-Women-novel.jpg'
    },
    {
      id: 2,
      title: 'Alice’s adventures in Wonderland',
      author: 'L. Carroll',
      price: 44,
      url: 'https://productforhomeandgarden.ru/img/1012542907.jpg'
    },
    {
      id: 3,
      title: 'The Adventures of Pinocchio',
      author: 'C. Collodi',
      price: 28,
      url: 'https://i.pinimg.com/originals/f5/1d/23/f51d2328f5f1205de587f9fe44fb175b.jpg'
    },
    {
      id: 4,
      title: 'The Adventures of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      price: 67,
      url: 'https://pe56d.s3.amazonaws.com/o_1dgdji2ldpsjl5rsnf1smd1eppr.jpg'
    },
  ];

  async getBooks() {
    return new Promise((resolve, reject) => {
      // setTimeout(() => reject('Error!'), 700);
      setTimeout(() => resolve(this.books), 700);
    })
  }
}