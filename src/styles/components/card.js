import { moderateScale } from '../../utils/Responsive'

const mainScrollView = {
    flex: 1
}

const cardContainer = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: moderateScale(0),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.84),
    elevation: moderateScale(5),
    position: 'relative',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto'
}

const cardInfo = {
    flexDirection: 'column',
    alignContent: 'center',
    width: '40%'
}

const title = {
    fontSize: moderateScale(22)
}

const size = {
    fontSize: moderateScale(18)
}

const quantity = {
    fontSize: moderateScale(24),
    marginHorizontal: moderateScale(8),
    marginTop: moderateScale(-2)
}

const price = {
    fontSize: moderateScale(18)
}

const cardTitle = {
    fontSize: moderateScale(25)
}

const buttonIncDec = {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: moderateScale(0),
    width: '30%'
}

const svgButtonIncDec = {
    fill: '#fff',
    stroke: '#f09f09',
    strokeWidth: moderateScale(0.4),
    background: 'none',
}

const svgTrashContainer = {
    position: 'absolute',
    top: moderateScale(0),
    right: moderateScale(0),
    margin: moderateScale(5)
}

const svgTrashButton = {
    fill: 'red',
    stroke: 'red',
    strokeWidth: moderateScale(1),
    background: 'none',
}

export default { 
    mainScrollView,
    cardContainer,
    cardTitle,
    cardInfo,
    title,
    size,
    quantity,
    price,
    buttonIncDec,
    svgButtonIncDec,
    svgTrashButton,
    svgTrashContainer
}