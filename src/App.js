import React from 'react';
import Proptypes from 'prop-types';


const App = () => {
  const profiles = [
    {name:"Taro",   age: 18},
    {name:"Hanako", age: 34},
    {name:"new",    age:10},
    {name:"NoName", age:1000}

  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
      return (
      <User name={profile.name} age={profile.age} key={index}/>
    )
      }
    )
  }
  </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! and I'm {props.age} years old.</div>
}

User.propTypes = {
  name:Proptypes.string,
  age:Proptypes.number.isRequired
}
export default App;
