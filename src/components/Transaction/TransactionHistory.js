import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr >
                    <th className={styles.title}>Type</th>
                    <th className={styles.title}>Amount</th>
                    <th className={styles.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id} className={styles.item}>
                        <td className={styles.td}>{item.type}</td>
                        <td className={styles.td}>{item.amount}</td>
                        <td className={styles.td}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        } 
        )
    )
}