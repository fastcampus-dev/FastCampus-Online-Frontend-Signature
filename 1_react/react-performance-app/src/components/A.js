import React from 'react'

const A = ({ message, posts }) => {
    return (
        <div>
            <h1>A Component</h1>
            <p>{message}</p>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <p>{post.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default A