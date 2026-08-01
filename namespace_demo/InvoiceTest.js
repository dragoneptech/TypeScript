"use strict";
var Runoob;
(function (Runoob) {
    let invoiceApp;
    (function (invoiceApp) {
        class Invoice {
            calculateDiscount(price) {
                return price * 0.40;
            }
        }
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
const invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
