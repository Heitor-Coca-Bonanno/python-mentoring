# BankAccount class — complete solution

class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance
        self.transactions = []

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be positive.")
            return
        self.balance += amount
        self.transactions.append(f"+${amount:.2f} (deposit)")
        print(f"Deposited ${amount:.2f}. New balance: ${self.balance:.2f}")

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal amount must be positive.")
            return
        if amount > self.balance:
            print(f"Insufficient funds. Balance is ${self.balance:.2f}")
            return
        self.balance -= amount
        self.transactions.append(f"-${amount:.2f} (withdrawal)")
        print(f"Withdrew ${amount:.2f}. New balance: ${self.balance:.2f}")

    def transfer(self, amount, target_account):
        self.withdraw(amount)
        target_account.deposit(amount)

    def print_statement(self):
        print(f"\n📄 Statement for {self.owner}")
        print("-" * 30)
        for t in self.transactions:
            print(f"  {t}")
        print(f"  Balance: ${self.balance:.2f}")
        print("-" * 30)

