document.querySelectorAll('.button').forEach((node) => {
    node.addEventListener('click', update);
})

const screen = document.querySelector('.screen');

function update(event) {
    let char = event.currentTarget.innerText;
    let display = calc.calculate(char);
    screen.innerText = display;

}





function Calculator() {

    this.state = '';
    this.operandsCount = 0;

    this.operands = ['+', '-', '=', '/', '*'];

    this.calculate = (char) => {

        if (this.stateCheck(char)) return this.state;
        this.state += char;
        return this.state;
    }



    this.stateCheck = (char) => {
        if (this.operands.includes(char)) {
            this.operandsCount++;
        }
        if (this.operandsCount === 2) {
            if (char === '=') {
                this.state = Function("return " + this.state)();
                this.operandsCount = 0;
                return true;
            }
            this.state = Function("return " + this.state)();
            console.log(this.state)
            this.operandsCount = 1;
        }
    }

}

const calc = new Calculator();

// calc.calculate()
// calc.calculate("+")
// calc.calculate("1")
// calc.calculate("+")



