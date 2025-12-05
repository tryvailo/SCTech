"use client"

import { useEffect } from "react"

export default function HeaderFooterObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const nav = document.querySelector("nav") as HTMLElement | null
    const footer = document.querySelector("footer") as HTMLElement | null

    const setHeaderHeight = () => {
      if (!nav) return
      const pos = getComputedStyle(nav).position
      const h = Math.round(nav.getBoundingClientRect().height)
      if (pos === "fixed" || pos === "sticky") {
        document.documentElement.style.setProperty("--header-height", `${h}px`)
        document.documentElement.classList.add("has-fixed-header")
      } else {
        document.documentElement.style.setProperty("--header-height", `0px`)
        document.documentElement.classList.remove("has-fixed-header")
      }
    }

    const setFooterHeight = () => {
      if (!footer) return
      const pos = getComputedStyle(footer).position
      const h = Math.round(footer.getBoundingClientRect().height)
      if (pos === "fixed" || pos === "sticky") {
        document.documentElement.style.setProperty("--footer-height", `${h}px`)
        document.documentElement.classList.add("has-fixed-footer")
      } else {
        document.documentElement.style.setProperty("--footer-height", `0px`)
        document.documentElement.classList.remove("has-fixed-footer")
      }
    }

    // Initial set
    setHeaderHeight()
    setFooterHeight()

    let roNav: ResizeObserver | null = null
    let roFooter: ResizeObserver | null = null

    if (typeof ResizeObserver !== "undefined") {
      if (nav) {
        roNav = new ResizeObserver(() => setHeaderHeight())
        roNav.observe(nav)
      }
      if (footer) {
        roFooter = new ResizeObserver(() => setFooterHeight())
        roFooter.observe(footer)
      }
    }

    const onResize = () => {
      setHeaderHeight()
      setFooterHeight()
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      if (roNav) roNav.disconnect()
      if (roFooter) roFooter.disconnect()
    }
  }, [])

  return null
}
