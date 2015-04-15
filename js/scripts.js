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
    //create object outside submit functions for global scope
    var newBankAccount = Object.create(BankAccount);

    $("form#signup").submit(function(event) {
        event.preventDefault();

        var initial = parseInt($("input#initial").val());
        var name = $("input#name").val();
        newBankAccount.balance = initial;

        $("p#balance").text(newBankAccount.balance);
        $("#show-account").show();
        $("#show-account h3").text(name + "'s Account Balance");
    });

        $("form#transaction").submit(function(event) {
            event.preventDefault();
            var depositAmount = parseInt($("input#deposit").val());
            var withdrawAmount = parseInt($("input#withdraw").val());
            newBankAccount.deposit(depositAmount);
            newBankAccount.withdraw(withdrawAmount);

            $("p#balance").text(newBankAccount.balance);

            $("input#deposit").val(0);
            $("input#withdraw").val(0);
        });

});
