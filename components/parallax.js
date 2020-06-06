import React, { useRef, useState, useLayoutEffect } from "react"
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion"

const calculateMinHeight = (height, range) => {
  return height + height * range
}

const randomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min
}

const Parallax = ({
  children,
  topOffset = -0,
  bottomOffset = 500,
  range = 0.05,
}) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [minHeight, setMinHeight] = useState("auto")
  const [elementTop, setElementTop] = useState(0)

  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: randomNumber(1, 3),
  }

  useLayoutEffect(() => {
    if (!ref.current) return
    const onResize = () => {
      setElementTop(ref.current.offsetTop)
      setMinHeight(calculateMinHeight(ref.current.offsetHeight, range))
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref, range])

  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop + topOffset, elementTop + bottomOffset],
      ["0%", `${range * 100}%`]
    ),
    springConfig
  )

  return (
    <div style={{ minHeight }}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

export default Parallax
