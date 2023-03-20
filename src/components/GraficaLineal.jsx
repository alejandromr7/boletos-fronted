import { useEffect } from 'react'
import { Chart } from 'chart.js';


const GraficaLineal = () => {

    let chart_options = {
        responsiveAnimationDuration: 900,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.0)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }
            ],
            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(29,140,248,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }
            ]
        }
    };

    useEffect(() => {
        var ctx = document.getElementById('LineChart').getContext('2d');

        let gradientStroke = ctx.createLinearGradient(0, 350, 350, 350);

        gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
        gradientStroke.addColorStop(0.1, "rgba(72,72,176,0.0)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

        new Chart(ctx, {
            type: 'line',
            position: 'horizontal',
            data: {
                labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: "#00d6b4",
                        borderWidth: 5,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#00d6b4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#00d6b4",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 5,
                        data: [90, 27, 60, 12, 80]
                    }
                ]
            },
            options: chart_options,

            plugins: {

            }
        });
    }, [])

    return (
        <>
            <canvas id="LineChart" width="200" height="500"></canvas>
        </>
    )
}

export default GraficaLineal