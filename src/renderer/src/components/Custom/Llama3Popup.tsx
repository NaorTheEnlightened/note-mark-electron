import { BrowserWindow } from 'electron'
import { useState } from 'react'

let popupWindow: BrowserWindow | null

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleShowPopup = () => {
    setShowPopup(true)
  }

  const handleHidePopup = () => {
    setShowPopup(false)
  }

  const handleCongrats = () => {
    // Your logic here to congratulate the user
  }

  if (showPopup) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50"
        onClick={handleHidePopup}
      >
        <div className="bg-black p-4 rounded-md shadow-md w-max">
          <h2 className="text-lg font-bold"> Congratulations! </h2>
          <p> You did it! You're amazing! </p>
          <button onClick={handleCongrats}> Close </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={handleShowPopup}> Show Popup </button>
    </div>
  )
}

export default Popup
