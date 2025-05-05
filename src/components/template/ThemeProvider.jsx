'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeProviderContext = createContext()

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'theme', ...props }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = window.localStorage.getItem(storageKey)
            return storedTheme || defaultTheme
        }
        return defaultTheme
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme) => {
            setTheme(newTheme)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(storageKey, newTheme)
            }
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

