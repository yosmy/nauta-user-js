import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from '@yosmy/style';
import theme from '../theme';
import Presentation from "../../src/Presentation";

const PresentationContainer = () => {
    const [account, setAccount] = useState(null);
    const [nickname, setNickname] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setAccount("account-1@nauta.com.cu");
        }, 3000);

        setTimeout(() => {
            setNickname("Nickname");
        }, 6000)
    }, []);

    return <Presentation
        margin={1}
        account={account}
        nickname={nickname}
    />;
}

storiesOf('Presentation', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <PresentationContainer />
        </ThemeProvider>
    ))
;
