import React, {FC} from 'react';
import styles from './AddressItem.module.scss'

interface AddressItemProps {
    text: string
}

const AddressItem: FC<AddressItemProps> = ({text}) => {
    return (
        <div className={styles.addressContainer}>
            <span className={styles.addressExactly}>{text}</span>
        </div>
    );
};

export default AddressItem;
