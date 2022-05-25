





function Calculator() {
    this.state = '';
    this.operandsCount = 0;

    this.operands = ['+', '-'];

    this.calculate = (char) => {



        this.stateCheck = () => {
            if (this.operands.includes(char)) {
                this.operandsCount++;
            }
            if (this.operandsCount === 2) {
                this.state = Function(state);
            }
        }

        this.state += char;




    }


    console.log(eval('2 + 2'));
    // expected output: 4

    console.log(eval(new String('2 + 2')));
    // expected output: 2 + 2

    console.log(eval('2 + 2') === eval('4'));
    // expected output: true

    console.log(eval('2 + 2') === eval(new String('2 + 2')));
    // expected output: false


}