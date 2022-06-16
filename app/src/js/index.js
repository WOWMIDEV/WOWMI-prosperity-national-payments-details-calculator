import onChange from 'on-change';

import calc from './calc';
import {render, renderSwitchPmi, renderSwitchTax, legendSetColors} from './render';

// controller

// watch exclude changes
const updateExclude = (form, watchedState) => {
  const excludesElements = form.querySelectorAll('[data-calc-exclude]');
  const { exclude } = watchedState.form;

  [...excludesElements].forEach((excludeItem) => {
    const { checked } = excludeItem;
    const { calcExclude } = excludeItem.dataset;
    const calcExcludeCollection = calcExclude.split(',');

    calcExcludeCollection.forEach((name) => {
      exclude[name] = !checked;
    });
  });

};

const updateValues = (elements, watchedState) => {
  const { values } = watchedState.form;
  const { form } = elements;
  const formData = new FormData(form);

  // update values
  [...formData.entries()].forEach(([key, value]) => {
    if (key in values) {
      values[key] = value === '' ? 0 : +value;
    }
  });

  // update exclude list
  updateExclude(form, watchedState);
};

const init = () => {
  // MODEL
  const elements = {
    form: document.forms.calc,
    resultMortgageAmount: document.querySelector('[data-calc-result="amount"]'),
    resultTotalCost: document.querySelector('[data-calc-result="total"]'),
    resultMonthlyPayment: document.querySelector('[data-calc-result="monthly"]'),

    switchPmiBlock: document.querySelectorAll(`[data-pmi-rate]`),
    switchTaxesBlock: document.querySelectorAll(`[data-property-tax]`),
    // donut
    donutBox: document.querySelector('[data-calc="donut"]'),
    donutLegendItems: document.querySelectorAll('[data-calc-legend-name]')
  };

  // MODEL
  const state = {
    form: {
      values:{
        'home-price': null,
        'down-payment': null,
        'interest-rate': null,
        'home-insurance': null,
        'property-tax': null,
        'pmi-rate': null,
        'hoa-dues': null,
        term: null
      },
      exclude: {
        'home-insurance': null,
        'pmi-rate': null,
        'property-tax': null,
      },
    },
    result: {
      'mortgage-amount': null,
      'monthly-payment': null,
      'mortgage-insurance': null,
      'mortgage-total-cost': null,
    },
    donutData: [
      {
        key: 'pi',
        name: 'P&I',
        color: '#0D93FF',
        data: null
      },
      {
        key: 'insurance',
        name: 'Insurance',
        color: '#07BECB',
        data: null
      },
      {
        key: 'taxes',
        name: 'Taxes',
        color: '#333333',
        data: null
      },
      {
        key: 'pmi',
        name: 'PMI',
        color: '#D3E2EE',
        data: null
      },
      {
        key: 'hoa',
        name: 'HOA',
        color: '#F2F2F2',
        data: null
      }
    ]
  };

  // MODEL
  const watchedState = onChange(state, (path, value, prevValue) => {
    // console.log("STATE", state) ;
    // console.log("PATH, VALUE", path, value);
    // console.log("VALUE", value);
    // console.log("PREV VALUE", prevValue);

    switch(path){
      case "form.exclude.pmi-rate" :
        renderSwitchPmi(elements, value)
        break;
      case "form.exclude.property-tax" :
        renderSwitchTax(elements, value)
        break;

      default :
        break;
    }

    calc(elements, watchedState);
  });

  // CONTROLLER
  const { form } = elements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    render(elements, watchedState);
  });

  form.addEventListener('change', (e) => {
    updateValues(elements, watchedState);
    render(elements, watchedState);
  });

  // FIRST START
  updateValues(elements, watchedState);
  render(elements, watchedState);
  legendSetColors(elements, watchedState);

};

init();
