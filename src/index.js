import './scss/main.scss';
import Chart from 'chart.js';
import data from './zon_ann.csv'




const GLOBAL_TEMP = 14;

const ctx = document.getElementById('myChart').getContext('2d');


const dataTemp = data.reduce((acc, entry) => {
    acc.years.push(entry.Year);
    acc.ntemp.push(entry.NHem + GLOBAL_TEMP)
    acc.stemp.push(entry.SHem + GLOBAL_TEMP)
    acc.global.push(entry.Glob + GLOBAL_TEMP)

    return acc
}, { years: [], ntemp: [], stemp: [], global: [], })


const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataTemp.years,
        datasets: [
            {
                label: 'Global',
                data: dataTemp.global,
                backgroundColor: [

                    'rgba(0, 0, 0, 0)'
                ],
                borderColor: [
                    'rgba(236, 5, 5, 1)'

                ],
                borderWidth: 1
            },
            {
                label: 'NHem',
                data: dataTemp.ntemp,
                backgroundColor: [

                    'rgba(0, 0, 0, 0)'
                ],
                borderColor: [
                    'rgba(67, 5, 236, 1)'

                ],
                borderWidth: 1
            },
            {
                label: 'SHem',
                data: dataTemp.stemp,
                backgroundColor: [

                    'rgba(0, 0, 0, 0)'
                ],
                borderColor: [
                    'rgba(236, 194, 5, 1)'

                ],
                borderWidth: 1
            }

        ],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,

                    callback(value, index, values) {
                        return '#' + value;
                    }



                }
            }]
        },
        responsive: true
    }
});

