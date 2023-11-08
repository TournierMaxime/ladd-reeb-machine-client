import { connect, Provider } from "react-redux"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import store from "./src/redux/store"
import Header from "./src/components/Header"
import DetailsOrder from "./src/views/Order/DetailsOrder"
import CreditCardPayment from "./src/views/Payment/CreditCardPayment"
import BraceletPayment from "./src/views/Payment/BraceletPayment"
import QRCodePayment from "./src/views/Payment/QRCodePayment"
import AllProducts from "./src/views/Product/AllProducts"
import Home from "./src/views/Home"
import PendingOrder from "./src/views/Order/PendingOrder"
import IsAccount from "./src/views/Account/IsAccount"
import AuthByDevices from "./src/views/Account/AuthByDevices"
import BraceletAuth from "./src/views/Auth/BraceletAuth"
import SuccessFullPayment from "./src/views/Payment/SuccessFullPayment"
import FailurePayment from "./src/views/Payment/FailurePayment"

const RootStack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <Header backButton={false} /> }}
        />
        <RootStack.Screen
          name="AllProducts"
          component={AllProducts}
          options={{
            header: () => <Header backButton={true} />,
          }}
        />
        <RootStack.Screen
          name="DetailsOrder"
          component={DetailsOrder}
          options={{ header: () => <Header /> }}
        />
        <RootStack.Screen
          name="CreditCardPayment"
          component={CreditCardPayment}
          options={{ header: () => <Header /> }}
        />
        <RootStack.Screen
          name="BraceletPayment"
          component={BraceletPayment}
          options={{ header: () => <Header /> }}
        />
        <RootStack.Screen
          name="QRCodePayment"
          component={QRCodePayment}
          options={{ header: () => <Header /> }}
        />
        <RootStack.Screen
          name="PendingOrder"
          component={PendingOrder}
          options={{ header: () => <Header /> }}
        />
        <RootStack.Screen
          name="IsAccount"
          component={IsAccount}
          options={{ header: () => <Header backButton={true} /> }}
        />
        <RootStack.Screen
          name="AuthByDevices"
          component={AuthByDevices}
          options={{ header: () => <Header backButton={true} /> }}
        />
        <RootStack.Screen
          name="BraceletAuth"
          component={BraceletAuth}
          options={{ header: () => <Header backButton={true} /> }}
        />
        <RootStack.Screen
          name="SuccessFullPayment"
          component={SuccessFullPayment}
          options={{ header: () => <Header backButton={false} /> }}
        />
        <RootStack.Screen
          name="FailurePayment"
          component={FailurePayment}
          options={{ header: () => <Header backButton={false} /> }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const ConnectedApp = connect()(App)

const AppWithRedux = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default AppWithRedux
