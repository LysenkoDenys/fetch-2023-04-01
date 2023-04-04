//https://www.youtube.com/watch?v=Veaz0BMMOWA&list=PLenwk9TUJzJ41x_7o3Z5laAngAuuqfpQW&index=25
//https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
// ==============================================================================================================================================================================================
const ulElement = document.querySelector(".posts-list");
const arr = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    return posts;
  });

const myPosts = async () => {
  try {
    const posts2 = await arr;
    let result = posts2.map(function (elements) {
      return elements;
    });
    result.forEach((elem) => {
      ulElement.insertAdjacentHTML(
        "afterbegin",
        `<li class="posts-list-item"><span class="post-index">${
          elem.id
        }</span><h4 class="post-title">${elem.title}</h4><p class="post-text">${
          elem.body
        }</p><a href="#" class="post-link">${"Read more"}</a></li>`
      );
    });
  } catch (error) {
    console.log(error.message);
  }
};
myPosts();

// Vitaly`s version==============================================================================================================================================================================================
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => {
//     const list = document.querySelector(".posts-list");
//     json.forEach((item, index) => {
//       //creating comments:
//       const post = document.createElement("li");
//       const postIndex = document.createElement("span");
//       const postTitle = document.createElement("h4");
//       const postText = document.createElement("p");
//       const postReadMoreLink = document.createElement("a");
//       // adding classes:
//       post.classList.add("posts-list-item");
//       postIndex.classList.add("post-index");
//       postTitle.classList.add("post-title");
//       postText.classList.add("post-text");
//       postReadMoreLink.classList.add("post-link");
//       // updating content:
//       postIndex.innerHTML = index + 1;
//       postTitle.innerHTML = item.title;
//       postText.innerHTML = item.body;
//       postReadMoreLink.innerHTML = "Read more";
//       // inserting item:
//       post.append(postIndex, postTitle, postText, postReadMoreLink);
//       list.appendChild(post);
//     });
//   });
