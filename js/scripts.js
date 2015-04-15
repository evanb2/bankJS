var BankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance = this.balance + amount;
    },
    withdraw: function(amount) {
        this.balance = this.balance - amount;
    }
};

$(document).ready(function() {
    $("form#signup").submit(function(event) {
        event.preventDefault();

        var initial = parseInt($("input#initial").val());
        var newBankAccount = Object.create(BankAccount);
        newBankAccount.balance = initial;

        $("p#balance").text(newBankAccount.balance);
    });

        $("form#transaction").submit(function(event) {
            event.preventDefault();
            var depositAmount = parseInt($("input#deposit").val());
            var withdrawAmount = parseInt($("input#withdraw").val());

            var current = parseInt($("p#balance").text());
            var newBankAccount = Object.create(BankAccount);
            newBankAccount.balance = current;
            newBankAccount.deposit(depositAmount);
            newBankAccount.withdraw(withdrawAmount);

            $("p#balance").text(newBankAccount.balance);

            $("input#deposit").val(0);
            $("input#withdraw").val(0);
        });

});
