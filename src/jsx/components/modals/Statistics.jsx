import React from "react";
import Modal from 'react-modal';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
export const options = {
    indexAxis: 'y',
    events: [],
    elements: {
      bar: {
        borderWidth: 0,
        color: '#ededed'
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        labels: {
            // This more specific font property overrides the global property
            font: {
                size: 14,
                family: "Inter;",
            }
        }
      },
      title: {
        display: true,
        text: 'Guess Distribution',
        color: '#ededed',
        font: {
            family: "Inter;",
            weight: 600,
            size: 18,
            lineHeight: 1,
        }
      },
    },
    layout: {
        padding: 15
    },
  };
  const labels = [1, 2, 3, 4, 5, 6];
export default function Statistics({statistics, modalOpen, closeModal, won, answer}) {
    let labelData;
    if (!statistics.guessDistribution) {
        labelData = labels.map((l) => 0);
    } else {
        labelData = labels.map((l) => statistics.guessDistribution.filter(x => x == l).length)
    }
    const data = {
        labels,
        datasets: [
        {
            label: null,
            data: labelData,
            borderColor: '#22c55e',
            backgroundColor: '#22c55e',
        },
        ],
    };
    return (<Modal className={"statistics"} overlayClassName={"statistics-overlay"} isOpen={modalOpen} shouldCloseOnOverlayClick={false}>
    <div className="s-top-bar">
        <p>Statistics</p>
        <button className="right-edge-button"><img src="/assets/x-circle.svg" onClick={closeModal}/></button>
    </div>
    <div className="stats-main">
        <div className="stats-sub">
            <p className="stats-value">{statistics.totalGames}</p>
            <p className="stats-title">Total Games</p>
        </div>
        <div className="stats-sub">
            <p className="stats-value">{statistics.successRate}%</p>
            <p className="stats-title">Success Rate</p>
        </div>
        <div className="stats-sub">
            <p className="stats-value">{statistics.currentStreak}</p>
            <p className="stats-title">Current Streak</p>
        </div>
        <div className="stats-sub">
            <p className="stats-value">{statistics.maxStreak}</p>
            <p className="stats-title">Top Streak</p>
        </div>
    </div>
    {/* <div className="game-info">
        <p>You {won?"Won!":"Lost..."} The word was {answer}</p>
    </div> */}
    <Bar className="guess-bar" options={options} data={data} />
    </Modal>)

}