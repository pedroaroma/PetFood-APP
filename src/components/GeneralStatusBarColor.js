import React from 'react'
import { View, StatusBar } from 'react-native'

import styles from './styles/GeneralStatusBarColorStyles'

const GeneralStatusBarColor = ({ backgrondColor, ...props}) => (
    <View style={[styles.StatusBar, { backgrondColor }]}>
        <StatusBar translucent backgroundColor={backgrondColor} {...props} />
    </View>
)

export default GeneralStatusBarColor