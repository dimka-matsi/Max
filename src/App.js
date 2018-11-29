import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { id: 'asf1', name: 'Max', age: 28 },
      { id: 'ldw4', name: 'Dima', age: 27 },
      { id: 'fel8', name: 'Nastya', age: 21 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log('Click button');
  //   this.setState({
  //     person: [
  //       { name: newName, age: 28 },
  //       { name: 'Dima', age: 27 },
  //       { name: 'Nastya', age: 21 }
  //     ]
  //   });
  // }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
    console.log(this.state.showPersons);
  }

  deletePerson = (personIndex) => {
    const persons = this.state.person.slice();
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    });
  }

  changeNameHandler = (event, i) => {
    // const persons = [...this.state.person];
    // const person = persons[i];
    // person.name = event.target.value;

    const personIndex = this.state.person.findIndex(p => {
      return p.id === i;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    console.log(person);

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.changeNameHandler(event, person.id)} />;
          })}  
        </div>
      );

      style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.person.length <= 2) {
      classes.push('red');
    }
    if(this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello, I am React!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Switch name</button>
            {persons}
      </div>
    );
  }
}

export default App;
