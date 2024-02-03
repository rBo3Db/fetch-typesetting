// Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const getData = (url: string): Promise<Post[]> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Post[]>;
  });
};

getData(COMMENTS_URL).then((data) => {
  // Your code here...
  return data.map((item) => {
    console.log(`ID: ${item.id}, Email: ${item.email}`);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
