import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from './ErrorBanner';
import { OrderContext } from '../context/OrderContext';

const Type = ({ orderType }) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderData, updateItemCount] = useContext(OrderContext);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType])

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:4000/${orderType}`)
            setItems(response.data);
            console.log('response.data', response.data);
        } catch (error) {
            setError(true);
        }
    }

    const ItemComponent = orderType === "products" ? Products : Options;

    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, orderType)}
        />
    ))

    if (error) {
        return (<ErrorBanner message="에러가 발생했습니다." />)
    }

    return (
        <div>
            <h2>주문 종류</h2>
            <p>하나의 가격</p>
            <p>총 가격: {orderData.totals[orderType]}</p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: orderType === "options" ? "column" : "row"
                }}
            >
                {optionItems}
            </div>
        </div>
    )
}

export default Type