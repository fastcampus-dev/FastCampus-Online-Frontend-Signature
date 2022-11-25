import create from 'zustand';

export const useUserStore = create((set) => ({
    user: {},
    fetch: async (id) => {
        const path = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await fetch(path);
        set({ user: await response.json() });
    }
}))