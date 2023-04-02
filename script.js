// const endPoint = "https://jsonplaceholder.typicode.com/posts/1";
// const id = fetch(endPoint)
//   .then((response) => response.json())
//   .then((post) => {
//     return post.id;
//   });
// const title = fetch(endPoint)
//   .then((response) => response.json())
//   .then((post) => {
//     return post.title;
//   });
// const postText = fetch(endPoint)
//   .then((response) => response.json())
//   .then((post) => {
//     return post.body;
//   });

// const myPost = async () => {
//   const id1 = await id;
//   const title1 = await title;
//   const postText1 = await postText;

//   ulElement.insertAdjacentHTML(
//     "afterbegin",
//     `<li class="post-list-item"><span class="post-index">${id1}</span><h4 class="post-title">${title1}</h4><p class="post text">${postText1}</p><a href="#" class="post-link">${"Read more"}</a></li>`
//   );
// };
// myPost();

// // const id1 = a;
// const title1 = "alabama";
// const postText1 = "for sure baby!";

// get the object:
// const ulElement = document.querySelector(".post-list");

// ulElement.insertAdjacentHTML(
//   "afterbegin",
//   `<li class="post-list-item"><span class="post-index">${id1}</span><h4 class="post-title">${tittle1}</h4><p class="post text">${postText1}</p><a href="#" class="post-link">${"Read more"}</a></li>`
// );

//https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck

// ==============================================================================================================================================================================================
const ulElement = document.querySelector(".post-list");
const arr = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    return posts;
  });

const myPosts = async () => {
  const posts2 = await arr;
  let result = posts2.map(function (elements) {
    return elements;
  });
  result.forEach((element) => {
    ulElement.insertAdjacentHTML(
      "afterbegin",
      `<li class="post-list-item"><span class="post-index">${
        element.id
      }</span><h4 class="post-title">${
        element.title
      }</h4><p class="post text">${
        element.body
      }</p><a href="#" class="post-link">${"Read more"}</a></li>`
    );
  });
};
myPosts();
