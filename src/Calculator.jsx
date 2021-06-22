import React, {Component} from 'react'

export default class Calculator extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         num1: 0,
    //         num2: 0,
    //         sum: 0
    //       }

    // }
    state = {
        operator: '+',
        num1: '',
        num2: '',
        result: ''
      }

      setOp = (e) => {
          this.setState ({
              operator: e.target.value
          })
      }

      setNum = (e, num) => {
          this.setState({
              [num]: e.target.value
          })
      }

    //   setNum1 = (e) => {
    //       this.setState({ num1: e.target.value})
    //   }
      
    //   setNum2 = (e) => {
    //       this.setState({ num2: e.target.value})
    //   }

      calculate = ( num1, num2) => {  
          let int1 = Number(num1)
          let int2 = Number(num2)
          let result = 0

          switch (this.state.operator) {
            case '+':
                result = int1 + int2
                break

            case '-':
                result = int1 - int2
                break

            case '*':
                result = int1 * int2
                break

            case '/':
                result = int1 / int2
                break

                default:
                    break
          }
          this.setState({result: result})
      }
    
      render() {
        return(
            <div className="container">
                <form>
                    <h1>Add with React!</h1>

                    <div className="add">
                        <input type="number" 
                            name="num1" 
                            placeholder="Enter your first number" 
                            value={this.state.num1} 
                            onChange={(e) => this.setNum(e, 'num1')} />
                        <span>{this.state.operator}</span>
                        <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={(e) => this.setNum(e, 'num2')} />
                        <button type="button" onClick={() => this.calculate(this.state.num1, this.state.num2)}>=</button>
                        <h3>Addition results go here!</h3>
                        <p>{this.state.result}</p>
                        <button type="button" name='plus' vlaue='+' onClick={(e) => this.setOp(e)}>+</button>
                        <button type="button" name='sub' value='-' onClick={(e) => this.setOp(e)}> - </button>
                        <button type="button" name='mult' vlaue='*' onClick={(e) => this.setOp(e)}>* </button>
                        <button type="button" name='div' vlaue='/' onClick={(e) => this.setOp(e)}>/ </button>
                    </div>
                </form>
            </div>
        )
    }
}