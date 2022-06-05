
import React from 'react';
import Header from "./components/header/Header";

import "./App.css"
import InputForm from './components/inputform/InputForm';
import ListContainer from './components/list/ListContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return(
      <div className='container'>
        <Header />
        {/**
         * input form and append the array,
         */
         }
        <InputForm />
        <ListContainer list={this.state.list}/>
      </div>
    )
  }
}


export default App;
