import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title ? <h2 className={styles.title}>{title}</h2> : <h2 style={{display: 'none'}}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(itemStats => (
                    <li className={styles.item} key={itemStats.id} style={{backgroundColor:`rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})` }}>
                        <span className={styles.label}>{itemStats.label}</span>
                        <span className={styles.percentage}>{itemStats.percentage}</span>
                </li>  
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}