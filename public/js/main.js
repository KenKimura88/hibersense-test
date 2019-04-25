const nextTime = (function() {
  let currentTime = parseInt(new Date().getTime() / 1000);
  return function() { return currentTime++; }
})();

const initGaugeChart = (function() {
  // Energy Usage Chart
  const gaugeChart = $('#gauge .epoch').epoch({
    type: 'time.gauge',
    value: 0.5
  });

  setInterval(function() {
    gaugeChart.update(Math.random());
  }, 1000);
})

const initTemperatureChart = (function() {
  // Temperature Chart

  const data = [{label: 'Room Temperature', values: []}], length = 40;

  let nextIndex = length;

  for (let i = 0; i < length; i++) {
    const time = nextTime();
    data[0].values.push({time: time, y: Math.random() * 22 - 11});
  }

  const chart = $('#temperature .epoch').epoch({
    type: 'time.line',
    data: data,
    axes: ['left', 'right', 'bottom']
  });

  const pushTemperaturePoint = function() {
    const time = nextTime();
    chart.push([
      { time: time, y: Math.random() * 22 - 11}
    ]);
    nextIndex++;
  };
  setInterval(pushTemperaturePoint, 1000);

})

const initCompareChart = (function() {

  const data = [
      {label: 'Living Room', values: []},
      {label: 'Kitchen', values: []},
      {label: 'Lounge', values: []}
    ], length = 40;

  let nextIndex = length;

  for (let i = 0; i < length; i++) {
      const time = nextTime();
      const temperature = Math.random() * 22 - 11;
      data[0].values.push({time: time, y: temperature + Math.random() * 4 - 2});
      data[1].values.push({time: time, y: temperature + Math.random() * 4 - 2});
      data[2].values.push({time: time, y: temperature + Math.random() * 4 - 2});
  }

  const chart = $('#line-chart .epoch').epoch({
    type: 'time.line',
    data: data,
    axes: ['left', 'right', 'bottom']
  });

  const pushPoint = function() {
    const time = nextTime();
    const temperature = Math.random() * 22 - 11;
    chart.push([
        { time: time, y: temperature + Math.random() * 4 - 2},
        { time: time, y: temperature + Math.random() * 4 - 2},
        { time: time, y: temperature + Math.random() * 4 - 2}
    ]);
    nextIndex++;
  };
  setInterval(pushPoint, 1000);
});

$(document).ready(function() {
  initGaugeChart();
  initTemperatureChart();
  initCompareChart();
});
