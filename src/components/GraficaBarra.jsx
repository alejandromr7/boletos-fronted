import { useEffect } from 'react'
import { Chart } from 'chart.js';


const GraficaBarra = () => {

    useEffect(() => {
        var ctx = document.getElementById('BarChart').getContext('2d');

        let gradientStroke = ctx.createLinearGradient(900, 930, 900, 300);
        gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

        new Chart(ctx, {
            type: 'bar',
            position: 'horizontal',
            data: {
                labels: ['Pachi', 'Daniel', 'Alex', 'El apu'],
                datasets: [{

                    data: [80, 90, 100, 10],
                    label: '%',
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: '#00bcd4',
                    borderWidth: 9,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderWidth: 5
                }]
            },
            options: {
                responsiveAnimationDuration: 5000,
                legend: false,
                animation: true,
                responsiveAnimationDuration: 10,
                title: {
                    display: true,
                    text: 'Tamaño (%)',
                    fontColor: "#ffffff",
                    fontSize: 24
                },

                tooltips: {

                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0, 231, 195, 0.1)',
                            lineWidth: 1,
                            borderDash: [5]
                        },
                        ticks: {
                            barPercentage: 0.1,
                            fontColor: "#ffffff",
                            beginAtZero: true,

                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(0, 231, 195, 0.1)',
                            lineWidth: 1,
                            borderDash: [5]
                        },
                        ticks: {
                            fontColor: "#ffffff",
                        }
                    }]
                }
            },
            plugins: {

            },
        });
    }, [])

    return (
        <>
            <canvas id="BarChart" width="999" height="500"></canvas>
        </>
    )
}

export default GraficaBarra