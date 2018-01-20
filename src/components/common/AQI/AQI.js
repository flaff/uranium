import styles from './AQI.css';

export function aqiToClassName(aqi) {
    if (aqi === null) {
        return styles.noData;
    }
    if (aqi < 50) {
        return styles.good;
    }
    if (aqi < 100) {
        return styles.moderate;
    }
    if (aqi < 150) {
        return styles.unhealthy;
    }
    if (aqi < 200) {
        return styles.unhealthy2;
    }
    if (aqi < 300) {
        return styles.veryUnhealthy;
    }
    return styles.hazardous;
}

export function aqiToName(index) {
    if (index === null) {
        return 'No data';
    }
    if (index < 50) {
        return 'Good';
    }
    if (index < 100) {
        return 'Moderate';
    }
    if (index < 150) {
        return 'Unhealthy';
    }
    if (index < 200) {
        return 'Unhealthy';
    }
    if (index < 300) {
        return 'Very Unhealthy';
    }
    return 'Hazardous';
}
