"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {CiDark, CiLight}from 'react-icons/ci'

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme === "system" ? systemTheme : theme

  
  return (
    <div>
      {mounted && (
        themeMode === "dark" ? (
          <CiLight size={25} className='cursor-pointer' onClick={() => setTheme("light")} />
        ) : (
          <CiDark size={25} className='cursor-pointer' onClick={() => setTheme("dark")} />
        )
      )}
    </div>
  )

}
export default ThemeComp
