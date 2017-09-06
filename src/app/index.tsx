import * as React from 'react';
import Map from '../map';
import SideBar from '../sidebar';
import TopBar from '../topbar';
import * as Styles from './styles';

export default function App() {
    return (
        <div className={Styles.outer}>
            <div className={Styles.content}>
                <TopBar />
            </div>
            <div className={Styles.side}>
                <div className={Styles.grow}>
                    <Map />
                </div>
                <div className={Styles.content}>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export * from './ducks';
