describe("Test for creating the tip pool table", function(){
    it('should calculate the total tips correctly using sumPaymentTotal()', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 35;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(55);
        
    })

    it('should calculate the total bill correctly using sumPaymentTotal()', function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 35;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        
    })

    it('should calculate the correct percentage of the tip using calculateTipPercent()', function(){
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(100,0)).toEqual(0);
    })

    it('should add to the servers table with the correct names using appendTd()', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr,'Alice')
        expect(newTr.firstChild.innerText).toEqual('Alice');
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