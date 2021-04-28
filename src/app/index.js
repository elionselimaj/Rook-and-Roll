import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from 'native-base';
import { AppNavigator } from '../navigation/AppNavigator';

export default () => {
    return (
        <Root>
            <NavigationContainer>
                <AppNavigator
                    uriPrefix={'/'}
                />
            </NavigationContainer>
        </Root>
    )
}
