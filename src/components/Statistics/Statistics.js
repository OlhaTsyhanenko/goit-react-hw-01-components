import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(itemStats => (
                  <li class="item" key={itemStats.id}>
                    <span class="label">{itemStats.label}</span>
                    <span class="percentage">{itemStats.percentage}</span>
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