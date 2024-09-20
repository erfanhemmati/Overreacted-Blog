"use client"
import { Header } from "@/components";
import { useAppSelector } from "@/store/store";
import styles from "./main-layout.module.css"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const isDark = useAppSelector((state) => state.themeReduer.value.isDark)

  return <div data-theme={isDark ? 'dark' : ''} className={styles.wrapper}>
    <div className={styles.container}>
      <Header></Header>
      {children}
    </div>
  </div>

} 
