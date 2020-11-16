import * as React from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import City from './PageFour';



const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'white' : 'gainsboro' }}>{title}</Text>
    );
};

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='tabbar'
                        tabs={true}
                        tabBarStyle={{ backgroundColor: '#2877d1' }}
                    >
                        <Scene key='P1' title='Főoldal' icon={TabIcon}>
                            <Scene
                                key="Kezdőlap"
                                component={PageOne}
                                title="Kezdőlap"
                                initial
                            />
                        </Scene>

                        <Scene key='P2' title='Kép' icon={TabIcon}>
                            <Scene
                                key='second'
                                component={PageTwo}
                                title='Kép'
                            />
                        </Scene>

                        <Scene key='P3' title='Gomb' icon={TabIcon}>
                            <Scene key="PageThree" component={PageThree} title="Váltó" />
                        </Scene>

                        <Scene key='four' title='Város' icon={TabIcon}>
                            <Scene
                                key='fourth'
                                component={City}
                                title='Városok'
                            />
                        </Scene>

                    </Scene>
                </Scene>
            </Router>
        );
    }
}