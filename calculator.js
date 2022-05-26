function Calculator() {
    this.state = '';
    this.operandsCount = 0;

    this.operands = ['+', '-'];

    this.calculate = (char) => {
        this.stateCheck(char);
        this.state += char;

    }



    this.stateCheck = (char) => {
        if (this.operands.includes(char)) {
            this.operandsCount++;
        }
        if (this.operandsCount === 2) {
            this.state = Function("return " + this.state)();
        }
    }

}

const calc = new Calculator();

calc.calculate("1")
calc.calculate("+")
calc.calculate("1")
calc.calculate("+")

console.log(calc.state);


