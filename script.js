document.addEventListener('DOMContentLoaded', () => {
    fetchPosts(); // Fetch existing posts on page load
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', addPost);
});

function fetchPosts() {
    // Simulated blog posts data (replace or modify as needed)
    const posts = [
        { 
            title: 'The Art of Blogging',
            content: 'Blogging has evolved from a mere hobby to a powerful platform for sharing ideas, experiences, and knowledge. In this post, we explore the art of blogging—tips for creating engaging content, building a community, and leveraging social media.',
            image: 'https://example.com/blog-image1.jpg' // Example image URL
        },
        { 
            title: 'Exploring Web Development Trends',
            content: 'Web development is constantly evolving with new technologies and trends shaping the digital landscape. Join us as we delve into the latest trends in web development, including responsive design, progressive web apps, and the rise of serverless architecture.',
            image: 'https://example.com/blog-image2.jpg' // Example image URL
        }
    ];

    const blogPostsElement = document.getElementById('blogPosts');

    posts.forEach(post => {
        const postElement = createPostElement(post.title, post.content, post.image);
        blogPostsElement.appendChild(postElement);
    });
}

function createPostElement(title, content, imageUrl) {
    const postElement = document.createElement('article');
    postElement.classList.add('post');

    // Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    postElement.appendChild(titleElement);

    // Image (if provided)
    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageUrl);
        imageElement.setAttribute('alt', title); // Alt text for accessibility
        postElement.appendChild(imageElement);
    }

    // Content
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    postElement.appendChild(contentElement);

    return postElement;
}

function addPost(event) {
    event.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;
    const postImageInput = document.getElementById('postImage');
    let postImage = '';

    // Check if user uploaded a file
    if (postImageInput.files.length > 0) {
        const file = postImageInput.files[0];
        postImage = URL.createObjectURL(file); // Get URL for uploaded file
    } else {
        postImage = postImageInput.value; // Use entered URL if no file uploaded
    }

    // Create new post element
    const postElement = createPostElement(postTitle, postContent, postImage);

    // Append new post to blogPosts section
    const blogPostsElement = document.getElementById('blogPosts');
    blogPostsElement.appendChild(postElement);

    // Clear form inputs after adding post
    document.getElementById('postForm').reset();
}
