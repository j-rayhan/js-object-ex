import React, { Component } from 'react';
import { Button, Typography } from 'antd';
import './App.css';
import Features from './modal/test';

const { Title } = Typography;

class Amenites extends Component {
  state = { otherFeathers: Features }

  handleChange = (name, value) => {
    this.setState(prevState => {
      return {
        otherFeathers: {
          ...prevState.otherFeathers,
          [name]: !value
        }
      }
    })
  }
  render () {
    const { otherFeathers } = this.state;

    let buttonLabel = name => {
      let firstValue = name.replace(/\b\w/g, function(m) {
        return m.toUpperCase()
      })
      let value = firstValue.match(/[A-Z][a-z]+|[0-9]+/g)
      if (value) {
        return firstValue.match(/[A-Z][a-z]+|[0-9]+/g).join(' ')
      } else {
        return name
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <Title level={3}>Create Object value Toggle</Title>
          <div className="App-list">
            {Object.keys(otherFeathers).map((v, i)=> 
              <Button 
                key={i}
                className="App-btn"
                htmlType="submit"
                type={otherFeathers[v] ? "primary" : ""}
                onClick={() => this.handleChange(v, otherFeathers[v])}
              >
              {buttonLabel(v)}
              </Button>
            )}
          </div>
          <Button 
            type="danger" 
            onClick={() => console.log('your submit value', this.state)}
          >
          Submit
          </Button>
        </header>
      </div>
    );
  }
}

export default Amenites;
