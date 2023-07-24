import React from 'react';

import logo from '../icon/OpenBlockLoading.svg';
import styles from './loading.css';

const LoadingElement = () => (
    <div className={styles.loadingBox}>
        <div>
            <img
                alt={`AcrebotAI loading icon`}
                src={logo}
                className={styles.loadingLogo}
            />
        </div>
    </div>
);

export default <LoadingElement />;
