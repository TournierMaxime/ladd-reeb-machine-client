import { loginWithDevices } from "../redux/actions/auth"
//import { sendScan } from "../redux/actions/scan"
import { useDispatch } from "react-redux"
import { useState } from "react"

const useHandleScanBracelet = () => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState(null)
  const [message, setMessage] = useState({
    success: "",
    error: "",
  })

  const mockScanData = { braceletId: "1" }

/*   const scanRfid = async (data) => {
    const response = await dispatch(
      sendScan({
        payload: {
          braceletId: data.braceletId,
        },
        meta: {
          deviceName: "R35C-2D-BOX",
          mediumType: "barcode|rfid",
        },
      })
    )
    return { braceletId: response.payload.braceletId } 
  } */

  const handleScanBracelet = async () => {
    try {
      //const responseScanRfid = await scanRfid(mockScanData)
      const response = await dispatch(loginWithDevices(mockScanData))
      setUserData(response.user)
      setMessage({ success: response.success.toString() })
    } catch (error) {
      console.log(error)
      setMessage({
        error: error.toString()
      })
    }
    setTimeout(() => {
      setMessage({
        success: "",
        error: "",
      })
    }, 1000)
  }

  return {
    handleScanBracelet,
    userData,
    message
  }
}

export default useHandleScanBracelet
