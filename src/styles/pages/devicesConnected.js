import { moderateScale } from '../../utils/Responsive'

const container = {
    backgroundColor: '#fefefe',
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: moderateScale(10),
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
    position: 'absolute'
}

const devicesConnectedViewContainer = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: moderateScale(20),
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: moderateScale(10)
}

const devicesConnectedCardContainer = {
    //width: '70%',
    height: 'auto',
    //backgroundColor: 'rgba(26,18,63,0.93)',
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
}

const devicesConnectedTextInstructions = {
    fontSize: moderateScale(24),
    textAlign: 'center',
    margin: moderateScale(20),
    color: 'white',
    fontWeight: 'bold'
}

const devicesConnectedOrder = {
    fontSize: moderateScale(36),
    fontWeight: 'bold',
}

const devicesConnectedOrderContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#b3b3b3',
    width: '80%'
}

const devicesConnectedDetailsContainer = {
    alignItems: 'center',
    marginVertical: moderateScale(80),
    width: '100%'
}

const title = {
    fontSize: moderateScale(26),
    fontWeight: 'bold'
}

const subTitle = {
    fontSize: moderateScale(24),
    marginVertical: moderateScale(10)
}

const formContainer = {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
    padding: moderateScale(20),
    width: '95%'
}

const textInputContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
}

const textInput = {
    fontSize: moderateScale(40),
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
}

const textInputButton = {
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    backgroundColor: '#476EFF',
    margin: moderateScale(20),
    width: '33%',
}

const image = {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
}

const containerAmount = {
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
}

export default {
    container,
    devicesConnectedViewContainer,
    devicesConnectedCardContainer,
    devicesConnectedTextInstructions,
    devicesConnectedOrder,
    devicesConnectedOrderContainer,
    devicesConnectedDetailsContainer,
    title,
    subTitle,
    formContainer,
    textInput,
    textInputContainer,
    textInputButton,
    image,
    containerAmount
}