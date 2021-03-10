import React, { useState } from 'react'

function CountButton() {
  const [click, setClick] = useState(0)
  console.log(click, 'clickCount')
  return (
    <button
      onClick={() => {
        setClick(click + 1)
      }}
    >
      Click Count: {click}
    </button>
  )
}

export default CountButton
