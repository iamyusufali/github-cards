import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import CardList from '../components/CardList';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// Fetch data from github api
const fetchData = async () => {
  const resp = await fetch('https://api.github.com/users');
  const data = await resp.json();
  return data;
}

console.log(fetchData());

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <CardList profileData={ testData }/>
      </React.Fragment>
    );
  }
}