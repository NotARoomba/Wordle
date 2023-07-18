import React from "react";
import Modal from 'react-modal';

export default function Statistics({statistics, modalOpen, closeModal, won, answer}) {
    let guessData;
    if (statistics.stats.gamesWon == null) return <></>
    if (!statistics.stats.guessDistribution) guessData = [0, 0, 0, 0, 0, 0]
    else guessData = [1, 2, 3, 4, 5, 6].map((l) => statistics.stats.guessDistribution.filter(x => x == l).length)
    const maxValue = Math.max(...guessData, 1)
    return (<Modal closeTimeoutMS={250} className={"statistics"} overlayClassName={"statistics-overlay"} isOpen={modalOpen} shouldCloseOnOverlayClick={true}>
    <div className="statistics-content">
        <div className="s-top-bar">
            <p>Statistics</p>
            <button className="right-edge-button"><img src="/assets/x-circle.svg" onClick={closeModal}/></button>
        </div>
        <div className="stats-main">
            <div className="stats-sub">
                <p className="stats-value">{statistics.stats.totalGames}</p>
                <p className="stats-title">Total Games</p>
            </div>
            <div className="stats-sub">
                <p className="stats-value">{statistics.stats.successRate}%</p>
                <p className="stats-title">Success Rate</p>
            </div>
            <div className="stats-sub">
                <p className="stats-value">{statistics.stats.currentStreak}</p>
                <p className="stats-title">Current Streak</p>
            </div>
            <div className="stats-sub">
                <p className="stats-value">{statistics.stats.maxStreak}</p>
                <p className="stats-title">Top Streak</p>
            </div>
        </div>
        {/* <div className="game-info">
            <p>You {won?"Won!":"Lost..."} The word was {answer}</p>
        </div> */}
        <div className="bar-graph">
            <p className="bg-title">Guess Distribution</p>
            <div className="bar-lines-container">
                {guessData.map((v, i) => (
                <div key={i} className="bar-line">
                    <p className="bar-y">{i+1}</p>
                    <div className="bar-data" style={{width:`${(20 * (v / maxValue))}em`, backgroundColor: `#${v>=1?"22c55e":"30343F"}`, color: `#${v>=1?"2f2f2f":"ededed"}`}} >
                        <div className="number-spacing" style={{width:`${(18 * (v / maxValue))}em`}}></div>
                        <p>{v}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
            
    </div>
    </Modal>)

}