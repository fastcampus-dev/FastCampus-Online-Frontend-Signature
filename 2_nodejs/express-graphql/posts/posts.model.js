const posts = [
    {
        id: 'post1',
        title: 'It is a first post',
        description: 'It is a first post description',
        comments: [{
            id: 'comment1',
            text: 'It is a first comment',
            likes: 1
        }]
    },
    {
        id: 'post2',
        title: 'It is a second post',
        description: 'It is a second post description',
        comments: []
    }
]

function getAllPosts() {
    return posts;
}

function getPostById(id) {
    return posts.find(post => {
        return post.id === id;
    })
}

function addNewPost(id, title, description) {
    const newPost = {
        id, 
        title, 
        description,
        comments: []
    }

    posts.push(newPost);
    return newPost;
}

module.exports = {
    getAllPosts,
    getPostById,
    addNewPost
}