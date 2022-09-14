describe('testing the submission and compilation of the payment form', function(){
    it('should not create anything when tip or bill are submitted empty using createCurPayment()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toBe(undefined);
    })

    it('should not add anything when tip or bill are submitted empty using submitPaymentInfo()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should add new payments using submitPaymentInfo()', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    afterEach(function(){
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
    })
})