const csvFilePath = 'data.csv';

// d3.csv(filename).then(function(loadedData) {
//     console.log(loadedData)

// });


const mixedCanvas = document.getElementById("mixedCanvas");

const mixedChart = new Chart(mixedCanvas, {
    type: "bar",
    data: {
        datasets: [{
            label: 'Colonne',
            data: [10, 20, 30],
            order: 3,
            backgroundColor: [
                "lightgreen",
            ]
        }, {
            label: 'Ligne',
            data: [40, 40, 40],
            type: 'line',
            order: 2,
            borderColor: 'crimson',
        }, {
            label: 'Ligne',
            data: [60, 60, 60],
            type: 'line',
            order: 1,
            borderColor: 'blue',
        }],
        labels: ["Paris", "Tokyo", "Metz"],  
    },
    options: {
        scales:{
            y: {
                suggestedMax: 100,
                ticks:{
                    font: {
                        size: 40
                    }
                }
            },
            x: {
                ticks:{
                    font: {
                        size: 40
                    }
                }
            },

        }
    }
});


// Lecture du fichier CSV
const req = new XMLHttpRequest();
req.open('GET', csvFilePath, true);
req.send();
req.onload = function() {
  const data = req.responseText.split(/\r?\n|\r/);
  const labels = [];
  const values = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i].split(',');
    labels.push(row[0]);
    values.push(row[1]);
  }
  chartConfig.data.labels = labels;
  chartConfig.data.datasets[0].data = values;
  new Chart(chartContainer, chartConfig);
};