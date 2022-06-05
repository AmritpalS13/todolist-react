
import React from 'react';
import Header from "./components/header/Header";

import "./App.css"
import InputForm from './components/inputform/InputForm';
import ListContainer from './components/list/ListContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayInput: false,
      list: [
        {
          id: 1,
          title: 'Do This',
          date: 'June 5, 2022',
          urgent: true,
          completed: false,
        },
        {
          id: 2,
          title: 'Walk the dog',
          date: 'June 5, 2022',
          urgent: false,
          completed: false,
        },
        {
          id: 3,
          title: 'Go to the Grocery store',
          date: 'June 5, 2022',
          urgent: false,
          completed: false,
        },
        {
          id: 4,
          title: 'Order new shirt',
          date: 'June 5, 2022',
          urgent: true,
          completed: true,
        },
      ],
    }

    this.showInputMenu = this.showInputMenu.bind(this);//Toggles wether the user wants to display the inputs
    this.deleteItem = this.deleteItem.bind(this);
  }

  showInputMenu() {
    this.setState({
      displayInput: !this.state.displayInput,
    });
  }
  deleteItem(id) {
    var newArray = this.state.list.filter( item => item.id != id);
    console.log(newArray);
    this.setState({
      list: newArray,
    })
  }



  render() {
    return(
      <div className='container'>
        <Header showInputMenu={this.showInputMenu}/>
        {this.state.displayInput && <InputForm /> }
        <ListContainer list={this.state.list} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}


export default App;
