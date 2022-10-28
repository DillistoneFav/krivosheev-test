import React, {useState} from 'react';
import styles from './Address.module.scss'

import magnifierWhite from "../../assets/navbar/magnifierWhite.svg"
import AddressItem from "../../components/AddressItem/AddressItem";
import {fetchAddresses} from "../../store/reducers/Address/addressActionCreators";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Loader from "../../features/Loader/Loader";
import {addressSlice} from "../../store/reducers/Address/addressSlice";

const Address = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const {userAddresses, isLoading, error} = useAppSelector(state => state.addressReducer)
    const dispatch = useAppDispatch()

    const getAddresses = () => {
        if (inputValue.length >= 3) {
            dispatch(fetchAddresses(inputValue))
        } else {
            dispatch(addressSlice.actions.addressFetchingError("Введите не менее 3 символов!"))
        }
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            getAddresses()
        }
    }

    return (
        <main className={"main"}>
            <h1 className={styles.heading}>Поиск адресов</h1>
            <h3 className={styles.subHeading}>Введите интересующий вас адрес</h3>
            <div className={styles.searchFieldSection}>
                <input
                    className={styles.addressInput}
                    placeholder={"Введите адрес"}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyPress={handleEnterPress}
                    tabIndex={4}
                />
                <button className={styles.searchButton} onClick={getAddresses} tabIndex={5}>
                    <img src={magnifierWhite} alt={"лупа"}/>
                    <span>Поиск</span>
                </button>
            </div>
            {error.length ? <div className={styles.errorSpan}>{error}</div> : <></>}
            <section className={styles.addresses}>
                <h2>Адреса</h2>
                {isLoading ?
                    <Loader/>
                    :
                    !userAddresses.length ?
                        <span>Адреса не найдены!</span>
                        :
                        userAddresses.map(item => <AddressItem text={item.value} key={item.value}/>)
                }
            </section>
        </main>
    );
};

export default Address;
