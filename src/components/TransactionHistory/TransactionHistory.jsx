import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <>
            <table className={css.table}>
                <thead className={css.head}>
                    <tr>
                        <th className={css.headers}>Type</th>
                        <th className={css.headers}>Amount</th>
                        <th className={css.headers}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                            <tr key={item.id}>
                                <td className={(index%2==0 ? css.values1 : css.values2)}>{item.type}</td>
                                <td className={(index%2==0 ? css.values1 : css.values2)}>{item.amount}</td>
                                <td className={(index%2==0 ? css.values1 : css.values2)}>{item.currency}</td>
                            </tr> 
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TransactionHistory;