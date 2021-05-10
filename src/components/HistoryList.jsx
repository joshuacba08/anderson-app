import React, { useEffect, useState } from 'react'
import HistoryCard from './HistoryCard';
// import { getHistoryBy } from '../helpers/searchFunctions';

import './styles/HistoryList.css'
const HistoryList = ({searchFunction}) => {

    const [items, setItems] = useState(null);

    console.log(items);

    useEffect(() => {

        searchFunction().then(response => setItems(response));

    }, [ searchFunction ]);

    return (
        <>
            {
                items ?
                    
                    <div className="history-list-container">
                        {
                            items.map((project) => {

                                return <div className="item-list-container__item" key={project.id}>
                                    <HistoryCard 
                                        name = { project.data.name }
                                        type = { project.data.type }
                                        since = { project.data.since }
                                        until = { project.data.until }
                                        description = { project.data.description }
                                        academy = { project.data.academy }
                                    />
                                </div>
                            })
                        }
                    </div> 
                    :
                    <>
                        <div className="loading-container">
                            <p className="loading">Loading history...</p>
                        </div>
                    </>

            }
        </>
    )
}

export default HistoryList
