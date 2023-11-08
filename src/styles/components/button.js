import { moderateScale } from '../../utils/Responsive'

const loginButton = {
    flex: 1,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    margin: moderateScale(1),
    backgroundColor: '#00AD4F'
}

const registerButton = {
    flex: 1,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    margin: moderateScale(1),
    backgroundColor: '#476EFF'
}

const forgetPasswordButton = {
    flex: 1,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    margin: moderateScale(1),
    backgroundColor: '#C90404'
}

const buttonText = {
    color: '#fff',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
}

const buttonContainer = {
    flexDirection: 'row',
    justifyContent: 'space-between'
}

const formButton = {
    backgroundColor: '#22C55E',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(10),
}

const formButtonRegister = {
    backgroundColor: '#476EFF',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(10),
}

const formButtonLogin = {
    backgroundColor: '#00AD4F',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(10),
}

const formButtonForgetPassword = {
    backgroundColor: '#C90404',
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(10),
}

const orderButton = {
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(10),
    backgroundColor: '#476EFF',
    width: 'auto',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const logoutButton = {
    color: 'red'
}

const payBtn = {
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(10),
    backgroundColor: 'green',
    width: moderateScale(200),
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(20),
    fontWeight: 'bold'
}

const deleteBtn = {
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(10),
    color: 'red',
    width: moderateScale(200),
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontWeight: 'bold'
}

const accountBtn = {
    borderRadius: moderateScale(2),
    padding: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(10),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textTransform: 'uppercase'
}

export default {
    logoutButton,
    orderButton,
    formButtonForgetPassword,
    formButtonLogin,
    formButtonRegister,
    formButton,
    loginButton,
    registerButton,
    forgetPasswordButton,
    buttonText,
    buttonContainer,
    payBtn,
    deleteBtn,
    accountBtn
}