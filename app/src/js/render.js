import {
    Chart,
    ArcElement,
    DoughnutController,
    Tooltip
} from 'chart.js';

Chart.register(
    ArcElement,
    DoughnutController,
    Tooltip
);
// VIEW

// mortgage amount - сумма ипотеки
const renderMortgageAmount = (elements, watchedState) => {
  const { resultMortgageAmount } = elements;
  const { result } = watchedState;
  if (resultMortgageAmount!==null){
    resultMortgageAmount.innerHTML = result['mortgage-amount'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};

// monthly payment - ежемесячный платеж
const renderMonthlyPayment = (elements, watchedState) => {
  const { resultMonthlyPayment } = elements;
  const { result } = watchedState;

  if (resultMonthlyPayment!==null) {
    resultMonthlyPayment.innerHTML = result['monthly-payment'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};

// total cost - общая ипотека
const renderTotalCost = (elements, watchedState) => {
  const { resultTotalCost } = elements;
  const { result } = watchedState;

  if (resultTotalCost!==null) {
    resultTotalCost.innerHTML = result['mortgage-total-cost'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};

// render donut
const renderDonutChart = (elements, watchedState) => {
  const {donutBox} = elements;
  const {donutData} = watchedState;

  const allDataForChart = donutData.filter((item) => {
    const {key, name, color, data} = item;
    if (data) {
      return item
    }
  });
  const chartLabels = allDataForChart.map(({name}) => {
    return name
  });
  const chartData = allDataForChart.map(({data}) => {
    return data
  });
  const chartColors = allDataForChart.map(({color}) => {
    return color
  });

  const donutConfigData = {
    labels: chartLabels,
    datasets: [{
      data: chartData,
      backgroundColor: chartColors,
      borderRadius: 5,
      spacing: 5,
      hoverOffset: 3
    }]
  };

  const config = {
    type: 'doughnut',
    data: donutConfigData,
    options: []
  };

  const chartStatus = Chart.getChart(donutBox);

  if (chartStatus !== undefined) {
    chartStatus.destroy();
  }
  new Chart(donutBox, config);

};

export const render = (elements, watchedState) => {

  // renderMortgageAmount
  renderMortgageAmount(elements, watchedState);

  // renderTotalCost
  renderTotalCost(elements, watchedState);

  // renderMonthlyPayment
  renderMonthlyPayment(elements, watchedState);

  // renderDonutChart
  renderDonutChart(elements, watchedState);

};

export const renderSwitchPmi = (elements, value) => {
  const { switchPmiBlock } = elements;
  if(value){
    switchPmiBlock.forEach(item => item.style.display = "none");
  } else {
    switchPmiBlock.forEach(item => item.style.display = "block");
  }
};
export const renderSwitchTax = (elements, value) => {
  const { switchTaxesBlock } = elements;
    if(value){
      switchTaxesBlock.forEach(item => item.style.display = "none");
    } else {
      switchTaxesBlock.forEach(item => item.style.display = "block");
    }
};
// set colors in legend
export const legendSetColors = (elements, watchedState) => {
  const { donutLegendItems } = elements;
  const { donutData } = watchedState;

  donutLegendItems.forEach((item) => {
    donutData.forEach(({name, color}, index) => {
      if(item.getAttribute('data-calc-legend-name') === donutData[index].name){
        item.style.backgroundColor = donutData[index].color
      }
    });
  });
};
