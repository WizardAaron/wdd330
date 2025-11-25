export default class CheckoutProcess {
    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key);
        this.calculateItemSummary();
    }

    calculateItemSubTotal() {
        // calculate and display the total dollar amount of the items in the cart, and the number of items.
        const summaryElement = document.querySelector(
            this.outputSelector + " .item-subtotal"
        );

        const itemCount = document.querySelector(
            this.outputSelector + " .item-count"
        );
        itemCount.innerText = this.list.length;

        const amounts = this.list.map((item) => item.FinalPrice);
        this.itemTotal = amounts.reduce((sum, item) => sum + item);
        summaryElement.innerText = `$${this.itemTotal}`;;
    }

    calculateOrderTotal() {
        // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
        this.tax = (this.itemTotal * 0.06)
        this.shipping = 10 + (this.list.length -1) * 2;
        this.orderTotal = (
            parseFloat(this.itemTotal) +
            parseFloat(this.tax) +
            parseFloat(this.shipping)
        )

            // display the totals.
            this.displayOrderTotals();
    }

    displayOrderTotals() {
        // once the totals are all calculated display them in the order summary page
        const tax = document.querySelector(`${this.outputSelector} #tax`);
        tax.innerText = `$${this.tax.toFixed(2)}`;

        const shipping = document.querySelector(`${this.outputSelector} #shipping`);
        shipping.innerText = `$${this.tax.toFixed(2)}`;

        const orderTotal = document.querySelector(`${this.outputSelector} #orderTotal`);
        orderTotal.innerText = `$${this.tax.toFixed(2)}`;
    }
}