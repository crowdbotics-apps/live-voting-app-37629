import { StyleSheet } from "react-native"
const duration = null
const onDurationEnd = null
const hide = () => SplashScreen.hide()
const show = () => SplashScreen.show()

export const globalOptions = {
  name: "live_voting_app_37629",
  url: "https://live_voting_app_37629.botics.co",
  api: "https://live_voting_app_37629.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },
  "@modules/splash": {
    duration: duration,
    onDurationEnd: onDurationEnd,
    hide: hide,
    show: show
  }
}
