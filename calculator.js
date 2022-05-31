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
    this.currentOperandsCount = 0;
    this.operands = ['+', '-', '=', '/', '*'];

    this.calculate = (char) => {

        if (this.stateCheck(char)) return this.state;
        // console.log(this.state)
        this.state += char;
        console.log(this.state)
        return this.state;
    }



    this.stateCheck = (char) => {
        if (this.operands.includes(char)) {
            this.currentOperandsCount++;
            console.log(this.currentOperandsCount)
        }
        if (this.currentOperandsCount === 2) {

            if(this.operands.includes(char) && this.operands.includes(this.state.slice(-1)) ){
                
                this.state = this.state.slice(0,-1) + char;
                this.currentOperandsCount = 1; 
                console.log(this.state)
                return true; 
            }



            if (char === '=') {
                this.state = Function("return " + this.state)();
                this.currentOperandsCount = 0;
                return true;
            }
            this.state = Function("return " + this.state)();
            console.log(this.state)
            this.currentOperandsCount = 1;
        }
    }

}

const calc = new Calculator();

// calc.calculate()
// calc.calculate("+")
// calc.calculate("1")
// calc.calculate("+")



