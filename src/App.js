
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
          title: 'Do this',
          date: 'June 5, 2022',
          urgent: true,
        },
        {
          id: 2,
          title: 'Do this',
          date: 'June 5, 2022',
          urgent: false,
        },
        {
          id: 3,
          title: 'Do this',
          date: 'June 5, 2022',
          urgent: false,
        },
        {
          id: 4,
          title: 'Do this',
          date: 'June 5, 2022',
          urgent: true,
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
