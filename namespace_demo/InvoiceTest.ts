namespace Runoob {
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number) {
                return price * 0.40;
            }
        }
    }
}

const invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));



