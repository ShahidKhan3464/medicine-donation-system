import React from 'react'
import { Cards } from './style'

const index = ({ users, ngos, donations }) => {
    const allData = [users, ngos, donations]

    return (
        <Cards>
            {allData.map((item, id) => {
                return (
                    <div key={id} className="cards_container">
                        <div className="cards_container_card">
                            <div className="cards_container_card_detail">
                                <span>{item.count}</span>
                                <span>{item.title}</span>
                            </div>
                            <div className="cards_container_card_icon">
                                <img src={item.icon} alt={item.icon} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Cards>
    )
}

export default index