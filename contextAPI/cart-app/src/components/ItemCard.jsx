import React from 'react'
import styles from '../styles/ItemCard.module.css'
import { itemContext } from '../itemContext';
import { useContext } from 'react';

function ItemCard(props) {
    // const value = useContext(itemContext);
    const {total, setTotal, item, setItem} = useContext(itemContext);

    const {name, price} = props;
    const handleAdd = () => {
        setTotal(total + price);
        // setTotal((prevTotal) => prevTotal+price);
        setItem(item+1);
    }
    
    const handleRemove = () => {
        if (total !== 0) {
            setTotal(total - price)
            setItem(item-1);
        }
    }
    return (
        <div className={styles.itemCard}>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemPrice}>&#x20B9; {price}</div>
            <div className={styles.itemButtonsWrapper}>
                <button className={styles.itemButton} onClick={() => handleAdd()}>
                    Add
                </button>
                <button className={styles.itemButton} onClick={() => handleRemove()}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ItemCard