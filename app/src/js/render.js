// VIEW

// render details
const renderAmount = (elements, watchedState) => {
  const { resultAmount } = elements;
  const { result } = watchedState;
  if (resultAmount!==null && resultAmount!==undefined){
    resultAmount.innerHTML = result['amount'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};
const renderLengthYears = (elements, watchedState) => {
  const { resultLengthYears } = elements;
  const { result } = watchedState;
  if (resultLengthYears!==null && resultLengthYears!==undefined){
    resultLengthYears.innerHTML = result['length-years'];
  }
};
const renderInterestRate = (elements, watchedState) => {
  const { resultInterestRate } = elements;
  const { result } = watchedState;
  if (resultInterestRate!==null && resultInterestRate!==undefined){
    resultInterestRate.innerHTML = result['interest-rate'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};
const renderHomeValue = (elements, watchedState) => {
  const { resultHomeValue } = elements;
  const { result } = watchedState;
  if (resultHomeValue!==null && resultHomeValue!==undefined){
    resultHomeValue.innerHTML = result['home-value'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};
const renderAnnualTaxes = (elements, watchedState) => {
  const { resultAnnualTaxes } = elements;
  const { result } = watchedState;
  if (resultAnnualTaxes!==null && resultAnnualTaxes!==undefined){
    resultAnnualTaxes.innerHTML = result['annual-tax'];
  }
};
const renderAnnualInsurance = (elements, watchedState) => {
  const { resultAnnualInsurance } = elements;
  const { result } = watchedState;
  if (resultAnnualInsurance!==null && resultAnnualInsurance!==undefined){
    resultAnnualInsurance.innerHTML = result['annual-insurance'].toLocaleString('en-US', {minimumFractionDigits: 2});
  }
};
const renderMonthlyTaxes = (elements, watchedState) => {
  const { resultMonthlyRealTaxes } = elements;
  const { result } = watchedState;
  if (resultMonthlyRealTaxes!==null && resultMonthlyRealTaxes!==undefined){
    resultMonthlyRealTaxes.forEach((resultItem)=>{
      resultItem.innerHTML = result['monthly-real-taxes'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
  }
};
const renderMonthlyInsurance = (elements, watchedState) => {
  const { resultMonthlyInsurance } = elements;
  const { result } = watchedState;
  if (resultMonthlyInsurance!==null && resultMonthlyInsurance!==undefined){
    resultMonthlyInsurance.forEach((resultItem)=>{
      resultItem.innerHTML = result['monthly-insurance'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
  }
};
const renderValueRatio = (elements, watchedState) => {
  const { resultLoanValRatio } = elements;
  const { result } = watchedState;
  if (resultLoanValRatio!==null && resultLoanValRatio!==undefined){
    resultLoanValRatio.forEach((resultItem)=>{
      resultItem.innerHTML = result['loan-value-ratio'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
  }
};





// total monthly payment
const renderMonthlyPMI = (elements, watchedState) => {
  const { resultMonthlyPMI } = elements;
  const { result } = watchedState;
  if (resultMonthlyPMI!==null && resultMonthlyPMI!==undefined){
    resultMonthlyPMI.forEach((totalItem)=>{
      totalItem.innerHTML = result['monthly-pmi'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
  }
};
// total monthly payment
const renderMonthlyPI = (elements, watchedState) => {
  const { resultMonthlyPI } = elements;
  const { result } = watchedState;
  if (resultMonthlyPI!==null && resultMonthlyPI!==undefined){
    resultMonthlyPI.forEach((totalItem)=>{
      totalItem.innerHTML = result['monthly-pi'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
  }
};

// total monthly payment
const renderMonthlyPayment = (elements, watchedState) => {
  const { resultMonthlyPayment } = elements;
  const { result } = watchedState;
  if (resultMonthlyPayment!==null && resultMonthlyPayment!==undefined){
    resultMonthlyPayment.forEach((totalItem)=>{
      totalItem.innerHTML = result['monthly-payment'].toLocaleString('en-US', {minimumFractionDigits: 2});
    })
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
  // total monthly PI
  renderMonthlyPI(elements, watchedState);
  // total monthly payment
  renderMonthlyPayment(elements, watchedState);

};
