import { useState, useEffect } from "react"

function useDebounceValue<T>(value: T, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Example
// const [searchTerm, setSearchTerm] = React.useState("js");
// const debouncedSearchTerm = useDebounce(searchTerm, 300);
