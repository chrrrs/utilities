import React, { useEffect } from "react"

export const useMountEffect = (callback) => useEffect(callback, [])

// Example
// const ExampleComponent = () => {
//   useMountEffect(() => console.log("Hello World!")) 
//   return <div>...</div>
// }
