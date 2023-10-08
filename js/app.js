document.addEventListener('DOMContentLoaded', () => {
    // GET request to fetch all posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.textContent = post.title;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    // POST request to create a new post
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', event => {
        event.preventDefault();
        const postText = document.getElementById('postText').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postText,
                body: postText,
                userId: 1, // Change this userId as needed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            alert('Post created successfully!');
            // You can optionally update the posts list with the newly created post
        })
        .catch(error => {
            console.error('Error creating post:', error);
        });
    });

    // PATCH request to update a post
    const updatePostButton = document.getElementById('updatePostButton');
    updatePostButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'Updated Title',
                body: 'Updated Body',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            alert('Post updated successfully!');
        })
        .catch(error => {
            console.error('Error updating post:', error);
        });
    });

    // DELETE request to delete a post
    const deletePostButton = document.getElementById('deletePostButton');
    deletePostButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 200) {
                alert('Post deleted successfully!');
            } else {
                alert('Failed to delete post.');
            }
        })
        .catch(error => {
            console.error('Error deleting post:', error);
        });
    });
});
