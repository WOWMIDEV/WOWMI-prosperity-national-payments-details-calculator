// VIEW
const renderFormatLocale = (resultValue) => resultValue.toLocaleString('en-US', { minimumFractionDigits: 2 });

// render details
const renderAmount = (elements, watchedState) => {
  const { resultAmount } = elements;
  const { result } = watchedState;
  if (resultAmount !== null && resultAmount !== undefined) {
    resultAmount.innerHTML = renderFormatLocale(result.amount);
  }
};

const renderLengthYears = (elements, watchedState) => {
  const { resultLengthYears } = elements;
  const { result } = watchedState;
  if (resultLengthYears !== null && resultLengthYears !== undefined) {
    resultLengthYears.innerHTML = result['length-years'];
  }
};

const renderInterestRate = (elements, watchedState) => {
  const { resultInterestRate } = elements;
  const { result } = watchedState;
  if (resultInterestRate !== null && resultInterestRate !== undefined) {
    resultInterestRate.innerHTML = renderFormatLocale(result['interest-rate']);
  }
};

const renderHomeValue = (elements, watchedState) => {
  const { resultHomeValue } = elements;
  const { result } = watchedState;
  if (resultHomeValue !== null && resultHomeValue !== undefined) {
    resultHomeValue.innerHTML = renderFormatLocale(result['home-value']);
  }
};

const renderAnnualTaxes = (elements, watchedState) => {
  const { resultAnnualTaxes } = elements;
  const { result } = watchedState;
  if (resultAnnualTaxes !== null && resultAnnualTaxes !== undefined) {
    resultAnnualTaxes.innerHTML = renderFormatLocale(result['annual-tax']);
  }
};

const renderAnnualInsurance = (elements, watchedState) => {
  const { resultAnnualInsurance } = elements;
  const { result } = watchedState;
  if (resultAnnualInsurance !== null && resultAnnualInsurance !== undefined) {
    resultAnnualInsurance.innerHTML = renderFormatLocale(result['annual-insurance']);
  }
};

const renderMonthlyTaxes = (elements, watchedState) => {
  const { resultMonthlyRealTaxes } = elements;
  const { result } = watchedState;
  if (resultMonthlyRealTaxes !== null && resultMonthlyRealTaxes !== undefined) {
    resultMonthlyRealTaxes.forEach((resultItem) => {
      const item = resultItem;
      item.innerHTML = renderFormatLocale(result['monthly-real-taxes']);
    });
  }
};

const renderMonthlyInsurance = (elements, watchedState) => {
  const { resultMonthlyInsurance } = elements;
  const { result } = watchedState;
  if (resultMonthlyInsurance !== null && resultMonthlyInsurance !== undefined) {
    resultMonthlyInsurance.forEach((resultItem) => {
      const item = resultItem;
      item.innerHTML = renderFormatLocale(result['monthly-insurance']);
    });
  }
};

const renderMonthlyPMI = (elements, watchedState) => {
  const { resultMonthlyPMI } = elements;
  const { result } = watchedState;
  if (resultMonthlyPMI !== null && resultMonthlyPMI !== undefined) {
    resultMonthlyPMI.forEach((totalItem) => {
      const item = totalItem;
      item.innerHTML = renderFormatLocale(result['monthly-pmi']);
    });
  }
};

const renderMonthWithPMI = (elements, watchedState) => {
  const { resultMonthWithPMI } = elements;
  const { result } = watchedState;
  if (resultMonthWithPMI !== null && resultMonthWithPMI !== undefined) {
    resultMonthWithPMI.forEach((totalItem) => {
      const item = totalItem;
      item.innerHTML = result['month-with-pmi'];
    });
  }
};

const renderValueRatio = (elements, watchedState) => {
  const { resultLoanValRatio, showPmi } = elements;
  const { result } = watchedState;
  if (resultLoanValRatio !== null && resultLoanValRatio !== undefined) {
    resultLoanValRatio.forEach((resultItem) => {
      const item = resultItem;
      if (result['loan-value-ratio'] > 80) {
        showPmi.forEach((elem) => {
          const e = elem;
          e.style.display = 'flex';
        });
        item.innerHTML = renderFormatLocale(result['loan-value-ratio']);
      } else if (result['loan-value-ratio'] < 80) {
        showPmi.forEach((elem) => {
          const e = elem;
          e.style.display = 'none';
        });
      }
    });
  }
};

// total monthly PI
const renderMonthlyPI = (elements, watchedState) => {
  const { resultMonthlyPI } = elements;
  const { result } = watchedState;
  if (resultMonthlyPI !== null && resultMonthlyPI !== undefined) {
    resultMonthlyPI.forEach((totalItem) => {
      const item = totalItem;
      item.innerHTML = renderFormatLocale(result['monthly-pi']);
    });
  }
};

// total monthly payment
const renderMonthlyPayment = (elements, watchedState) => {
  const { resultMonthlyPayment } = elements;
  const { result } = watchedState;
  if (resultMonthlyPayment !== null && resultMonthlyPayment !== undefined) {
    resultMonthlyPayment.forEach((totalItem) => {
      const item = totalItem;
      item.innerHTML = renderFormatLocale(result['monthly-payment']);
    });
  }
};

export const render = (elements, watchedState) => {
  // renders results detail
  renderAmount(elements, watchedState);
  renderLengthYears(elements, watchedState);
  renderInterestRate(elements, watchedState);
  renderHomeValue(elements, watchedState);
  renderAnnualTaxes(elements, watchedState);
  renderAnnualInsurance(elements, watchedState);
  renderMonthlyTaxes(elements, watchedState);
  renderMonthlyInsurance(elements, watchedState);
  renderValueRatio(elements, watchedState);
  // total monthly PMI
  renderMonthlyPMI(elements, watchedState);
  renderMonthWithPMI(elements, watchedState);
  // total monthly PI
  renderMonthlyPI(elements, watchedState);
  // total monthly payment
  renderMonthlyPayment(elements, watchedState);
};
