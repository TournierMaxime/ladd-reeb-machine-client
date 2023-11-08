import { moderateScale } from '../../utils/Responsive'

const container = {
    alignItems: "center",
    justifyContent: "center",
}

const image = {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
}

const textContainer = {
    position: "absolute",
    top: "50%",
    width: "50%",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: moderateScale(30),
    borderRadius: moderateScale(10),
}

const text = {
    color: "#fff",
    fontSize: moderateScale(36),
    fontWeight: "bold",
    textAlign: "center",
}

export default {
    container,
    image,
    textContainer,
    text
}