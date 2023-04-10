import React from 'react';
import {version} from '../../package.json';

import logo from '../icon/OpenBlockDesktop.svg';
import styles from './about.css';
console.log("aaa")
const AboutElement = () => (
    <div className={styles.aboutBox}>
        <div><img
            alt={`SuYuanDesktop icon`}
            src={logo}
            className={styles.aboutLogo}
        /></div>
        <div className={styles.aboutText}>
            <h2>SuYuanDesktop</h2>
            Version {version}
            <table className={styles.aboutDetails}><tbody>
                {
                    ['Electron', 'Chrome', 'Node'].map(component => {
                        const componentVersion = process.versions[component.toLowerCase()];
                        return <tr key={component}><td>{component}</td><td>{componentVersion}</td></tr>;
                    })
                }
            </tbody></table>
        </div>
    </div>
);

export default <AboutElement />;
