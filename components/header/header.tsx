"use client"
import Link from 'next/link'
import { useEffect } from 'react'
import { Avatar } from '../avatar'
import styles from './header.module.css'
import { Switch } from '../switch'
import { toggleTheme, setTheme } from '@/store/feature/theme-slice'
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store/store";
import { usePathname } from 'next/navigation'


export function Header() {
  const path = usePathname()
  const dispatch = useDispatch<AppDispatch>()
  const isDark = useAppSelector((state) => state.themeReduer.value.isDark)

  useEffect(() => {
    const theme = localStorage.getItem('isDark')
    if (theme !== 'dark') {
      dispatch(setTheme(false))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('isDark', isDark ? 'dark' : 'light');
  }, [isDark]);


  return <header className={styles.header}>
    <Link href="/">
      <h1 className={`${styles.name} ${path === "/" ? undefined : styles.post}`}>overreacted</h1>
    </Link>
    <div className={styles.author}>
      <span>by</span>
      <Avatar></Avatar>
      <Switch handleChange={
        () => { dispatch(toggleTheme()) }
      } isChecked={isDark} ></Switch>
    </div>

  </header>
}
