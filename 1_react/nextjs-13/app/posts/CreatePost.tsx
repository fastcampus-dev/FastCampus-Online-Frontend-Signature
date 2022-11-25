'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            })
        })
        setTitle('');
        // Refresh the current route and fetch new data from the server
        router.refresh();

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">
                Create post
            </button>
        </form>
    )
}

export default CreatePost

