import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            reference: null,
            isAuthenticated: false,
            setUser: (user) => set({ user, isAuthenticated: !!user }),
            setToken: (token) => set({ token, isAuthenticated: !!token }),
            setReference: (reference) => set({ reference }),
            clearAuth: () => set({ user: null, token: null, isAuthenticated: false }),
            setPremium: (premium) => set({ premium }),
            getUser: () => get().user,
            getToken: () => get().token,
            updateAvatar: (avatarNumber) =>
                set((state) => ({
                    user: state.user ? { ...state.user, avatar: avatarNumber } : null,
                }))
        }),
        {
            name: 'auth-storage',
            getStorage: () => localStorage,
        }
    )
)

export default useAuthStore
