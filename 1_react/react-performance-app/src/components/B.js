import React, { useCallback } from 'react'

const Message = React.memo(({ message }) => {
    return <p>{message}</p>;
})

const ListItem = React.memo(({ post }) => {
    return (
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
    )
})

const List = React.memo(({ posts, testFunction }) => {
    console.log('List component is Rendering');
    return (
        <ul>
            {posts.map(post => (
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    )
})

const B = ({ message, posts }) => {
    console.log('B component is Rendering');
    const testFunction = useCallback(() => { }, []);
    return (
        <div>
            <h1>B Component</h1>
            <Message message={message} />
            <List posts={posts} testFunction={testFunction} />
        </div>
    )
}

export default B