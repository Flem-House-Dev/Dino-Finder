let blogData = JSON.parse(localStorage.getItem('dinoForm'));
console.log(blogData);

const blogTitle = document.getElementById('blog-title');
const blogAuthor = document.getElementById('blog-author');
const blogBody = document.getElementById('blog-body');

blogTitle.textContent = blogData.title;
blogAuthor.textContent = `Written by: ${blogData.userName}`;
blogBody.textContent = blogData.content;