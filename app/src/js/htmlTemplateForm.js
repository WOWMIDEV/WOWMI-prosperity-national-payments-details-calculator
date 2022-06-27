const htmlTemplateForm = () => {
    const calculatorWrp = document.getElementById('calculator-how-much');

    if(!calculatorWrp) {
        return false;
    }

    const html = `<div class="calc-wrp">
    <section class="calc-wrp__container">
        <div class="calc-wrp__form-block-wrapper">
            <form id="calculatorHowMuch" name="calcHowMuch" method="get" class="calc-wrp__form">
                <div class="calc-wrp__line">
                    <div class="calc-wrp__inner-line">
                        <div class="calc-wrp__item">
                            <h3 class="calculator-form__header">Loan information</h3>
                            <label for="Amount" class="calculator-form__label">
                                Amount, $
                            </label>
                            <input type="number"
                                   class="calculator-form__input w-input"
                                   min="1"
                                   step="1"
                                   name="amount"
                                   placeholder="250000.00"
                                   value="250000.00"
                                   id="Amount">
                        </div>

                        <div class="calc-wrp__item">
                            <label for="interest-rate" class="calculator-form__label">
                                Interest Rate, %
                            </label>
                            <input type="number"
                                   class="calculator-form__input w-input"
                                   min="0.5"
                                   step="0.1"
                                   value="4"
                                   name="interest-rate"
                                   placeholder="4"
                                   id="interest-rate">
                        </div>

                        <div class="calc-wrp__item">
                            <label for="length-years" class="calculator-form__label">
                                Length, yrs
                            </label>
                            <input type="number"
                                   class="calculator-form__input w-input"
                                   min="1"
                                   step="1"
                                   name="length-years"
                                   value="30"
                                   placeholder="30"
                                   id="length-years">
                        </div>

                        <div class="calc-wrp__item full-item">
                            <h3 class="calculator-form__header">Property information</h3>
                            <label for="home-value" class="calculator-form__label">
                                Home Value, $
                            </label>
                            <input type="number"
                                   class="calculator-form__input"
                                   name="home-value"
                                   value="300000.00"
                                   placeholder="300000.00"
                                   id="home-value">
                        </div>
                    </div>
                </div>
                <div class="calc-wrp__line">
                    <h3 class="calculator-form__header">Taxes and insurance information</h3>
                    <div class="calc-wrp__inner-line">

                        <div class="calc-wrp__item">
                            <div class="switcher-parent">
                                <label class="switcher-label" for="switch-taxes-currency">
                                    <input type="radio"
                                           name="switch-taxes"
                                           data-target="annual-tax"
                                           value="$"
                                           class="switcher"
                                           id="switch-taxes-currency"
                                           checked="checked">
                                    <div class="radio-icon">$</div>
                                </label>
                                <label class="switcher-label" for="switch-taxes-percent">
                                    <input type="radio"
                                           name="switch-taxes"
                                           data-target="annual-tax"
                                           value="%"
                                           class="switcher"
                                           id="switch-taxes-percent">
                                    <div class="radio-icon">%</div>
                                </label>
                            </div>
                            <label for="annual-tax" class="calculator-form__label">
                                Annual Taxes
                            </label>
                            <input type="number"
                                   class="calculator-form__input w-input"
                                   name="annual-tax"
                                   placeholder="3000.00"
                                   value="3000.00"
                                   id="annual-tax">
                        </div>

                        <div class="calc-wrp__item">
                            <div class="switcher-parent">
                                <label class="switcher-label" for="switch-insurance-currency">
                                    <input type="radio"
                                           name="switch-insurance"
                                           value="$"
                                           class="switcher"
                                           id="switch-insurance-currency"
                                           checked="checked">
                                    <div class="radio-icon">$</div>
                                </label>
                                <label class="switcher-label" for="switch-insurance-percent">
                                    <input type="radio"
                                           name="switch-insurance"
                                           value="%"
                                           class="switcher"
                                           id="switch-insurance-percent">
                                    <div class="radio-icon">%</div>
                                </label>
                            </div>
                            <label for="annual-insurance" class="calculator-form__label">
                                Annual insurance
                            </label>
                            <div>
                                <input type="number"
                                       class="calculator-form__input w-input"
                                       value="1500.00"
                                       placeholder="1500.00"
                                       name="annual-insurance"
                                       id="annual-insurance">
                            </div>
                        </div>

                        <div class="calc-wrp__item">
                            <div class="switcher-parent">
                                <label class="switcher-label" for="switch-pmi-currency">
                                    <input type="radio"
                                           name="switch-pmi"
                                           value="$"
                                           class="switcher"
                                           id="switch-pmi-currency">
                                    <div class="radio-icon">$</div>
                                </label>
                                <label class="switcher-label" for="switch-pmi-percent">
                                    <input type="radio"
                                           name="switch-pmi"
                                           value="%"
                                           class="switcher"
                                           id="switch-pmi-percent"
                                           checked="checked">
                                    <div class="radio-icon">%</div>
                                </label>
                            </div>
                            <label for="annual-pmi" class="calculator-form__label">
                                Annual PMI
                            </label>
                            <input type="number"
                                   class="calculator-form__input w-input"
                                   name="annual-pmi"
                                   placeholder="0.1"
                                   step="0.1"
                                   value="0.5"
                                   id="annual-pmi">
                        </div>

                        <div class="calc-wrp__item">
                            <div class="btn calc-wrp__btn-calc">
                                <div>Calculate now</div>
                                <div class="btn-arrow svg-button-arrow">
                                    <div class="svg w-embed">
                                        <svg width="100%" viewBox="0 0 7 11" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00749 1.10278L5.52171 5.60353L1 10.1028"
                                                  stroke="currentColor" stroke-width="1.49726"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" data-wait="Please wait..."
                                       class="hero-form__submit w-button">
                            </div>
                        </div>

                    </div>
                </div>
                <div data-current="Tab 1" data-easing="ease"
                     data-duration-in="300" data-duration-out="100"
                     class="calculator-form__tabs w-tabs">
                    <div class="calculator-form__tab-menu w-tab-menu" role="tablist">
                        <a data-w-tab="Tab 1"
                           class="calculator-form__tab-link w-inline-block w-tab-link w--current"
                           id="w-tabs-0-data-w-tab-0"
                           href="#w-tabs-0-data-w-pane-0"
                           role="tab"
                           aria-controls="w-tabs-0-data-w-pane-0"
                           aria-selected="true">
                            <div>Financial analysis</div>
                        </a>
                        <a data-w-tab="Tab 2"
                           class="calculator-form__tab-link w-inline-block w-tab-link"
                           tabindex="-1"
                           id="w-tabs-0-data-w-tab-1"
                           href="#w-tabs-0-data-w-pane-1"
                           role="tab"
                           aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                            <div>Plain english help</div>
                        </a>
                    </div>
                    <div class="w-tab-content">
                        <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0"
                             role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                            <div class="calculator-form__content-wrapper">
                                <div class="calculator-form__content-top">
                                    <div class="calculator-form__list w-list-unstyled">
                                        <div class="calculator-form__list-item">
                                            <div class="name-result">Monthly principal &amp; interest, $
                                            </div>
                                            <div class="result" data-calc-result="monthly-pi">0</div>
                                        </div>
                                        <div class="calculator-form__list-item">
                                            <div class="name-result">Monthly real estate taxes, $</div>
                                            <div class="result" data-calc-result="monthly-real-taxes">0</div>
                                        </div>
                                        <div class="calculator-form__list-item">
                                            <div class="name-result">Monthly insurance, $</div>
                                            <div class="result" data-calc-result="monthly-insurance">0</div>
                                        </div>
                                        <div class="calculator-form__list-item" data-exclude="no-pmi">
                                            <div class="name-result">Loan to value ratio</div>
                                            <div class="result" data-calc-result="loan-value-ratio">0</div>
                                        </div>
                                        <div class="calculator-form__list-item" data-exclude="no-pmi">
                                            <div class="name-result">Months with PMI</div>
                                            <div class="result" data-calc-result="month-with-pmi">0</div>
                                        </div>
                                        <div class="calculator-form__list-item" data-exclude="no-pmi">
                                            <div class="name-result">Monthly PMI, $</div>
                                            <div class="result" data-calc-result="monthly-pmi">0</div>
                                        </div>
                                        <div class="calculator-form__list-item result-item">
                                            <div class="name-result total">Total monthly payments</div>
                                            <div class="result total" data-calc-result="monthly-payment">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-tab="Tab 2" class="w-tab-pane" id="w-tabs-0-data-w-pane-1"
                             role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                            <div class="calculator-form__content-wrapper">
                                <div class="calculator-form__text-result-wrapper">
                                    <div class="text">
                                        <p>Your payment will vary depending on how much you will be
                                            borrowing, the interest rate, and the length of your loan. Other
                                            factors also need to be taken into consideration, such as your
                                            taxes, your insurance, and your PMI, all of which are included
                                            in your monthly house payment. Even the value of your home will
                                            affect your payment.</p>
                                        <p>Just as an example, let's say you are borrowing <span
                                                class="marker currency" data-calc-result="amount">0</span> for
                                            <span class="marker" data-calc-result="length-years">0</span> years with
                                            an interest rate of <span class="marker percent"
                                                                      data-calc-result="interest-rate">0</span>.
                                            If the value of your home is <span class="marker currency"
                                                                               data-calc-result="home-value">0</span>,
                                            your property taxes <span class="marker currency"
                                                                      data-calc-result="annual-taxes">0</span> per
                                            year and
                                            your insurance is <span class="marker currency"
                                                                    data-calc-result="annual-insurance">0</span> per
                                            year, you can expect to be
                                            making a <span class="marker">total payment of </span><span
                                                    class="marker currency"
                                                    data-calc-result="monthly-payment">0</span>. This is because you
                                            need to
                                            pay <span class="marker currency" data-calc-result="monthly-pi">0</span>
                                            toward the actual loan, plus <span class="marker currency"
                                                                               data-calc-result="monthly-real-taxes">0</span>
                                            for real
                                            estate taxes and <span class="marker currency"
                                                                   data-calc-result="monthly-insurance">0</span>
                                            toward insurance.</p>
                                        <p data-exclude="no-pmi">
                                                        <span>
                                                        Since your loan to value ratio is <span class="marker percent"
                                                                                                data-calc-result="loan-value-ratio">0</span>, you will also have to
                                                        pay PMI for <span class="marker"
                                                                          data-calc-result="month-with-pmi">0</span> months which will add an extra <span
                                                                class="marker currency"
                                                                data-calc-result="monthly-pmi">0</span> a month.
                                                        Don't forget to drop the PMI when the <span class="marker"
                                                                                                    data-calc-result="month-with-pmi">0</span> months is complete and
                                                        you might save yourself some money each month. Canceling your PMI will require a reappraisal of your home in most cases.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</div>`;

    calculatorWrp.insertAdjacentHTML("afterbegin", html);

    return true;
};

export default htmlTemplateForm;