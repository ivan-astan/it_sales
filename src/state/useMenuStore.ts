import { create } from 'zustand';




interface Store {
    isMenuOpen: boolean
    query: string
    setMenuOpen: (isOpen: boolean) => void
    setQuery: (query: string) => void
}

export const useMenuStore = create<Store>(
        (set) => ({
            query: '',
            setQuery: (query: string) => set(() => ({query})),
            isMenuOpen: false,
            setMenuOpen: (isMenuOpen: boolean) => set(() => ({isMenuOpen}))
        }),

);