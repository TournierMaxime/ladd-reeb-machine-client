import { useState, useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

const useHandleChangeImage = () => {
  const [imageSelected, setImageSelected] = useState(null)
  const navigation = useNavigation()

  const images = [
    require("../../assets/image/home/home-page1.jpg"),
    require("../../assets/image/home/home-page2.png"),
    require("../../assets/image/home/home-page3.png"),
    require("../../assets/image/home/home-page4.png"),
  ]

  const handleChangeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length)
    setImageSelected(randomNumber)
  }

  const handlePress = useCallback(() => {
    navigation.navigate("IsAccount", { imageSrc: images[imageSelected] })
  }, [images[imageSelected]])

  return {
    handleChangeImage,
    handlePress,
    images,
    imageSelected,
  }
}

export default useHandleChangeImage
