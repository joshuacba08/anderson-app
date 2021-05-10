import React from 'react';
import HistoryList from '../components/HistoryList';
import { getEducation, getWorkExperience } from '../helpers/searchFunctions';

import './styles/History.css'

const History = () => {
    return (
        <section className="history-container">
            <div className="history-container__components">
                <div className="history-column">
                    <h2>Education</h2>
                    <HistoryList
                        searchFunction={getEducation}
                    // field = {"type"}
                    // value = {"course"}

                    />
                </div>
                <div className="history-column">
                    <h2>Work History</h2>
                    <HistoryList
                        searchFunction={getWorkExperience}
                    // field={'category'}
                    // value={'employee'}
                    />
                </div>
                
            </div>
        </section>
    )
}

export default History
