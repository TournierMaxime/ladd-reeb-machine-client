import React from "react"
import Svg, { Path } from "react-native-svg"
import {
  StyleSheet
} from "react-native"
import card from "../styles/components/card"

const IncBtn = ({ width, height }) => {
  return (
    <Svg
      style={styles.svgButtonIncDec}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-plus-circle"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </Svg>
  )
}

const DecBtn = ({ width, height }) => {
  return (
    <Svg
      style={styles.svgButtonIncDec}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-dash-circle"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <Path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svgButtonIncDec: card.svgButtonIncDec,
})

export { IncBtn, DecBtn }
