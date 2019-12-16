import React from 'react';

const App = () => {
  const profiles = [
    {name:"Taro", age: 18},
    {name:"Hanako", age: 34},
    {name:"new"},
    {age:58}

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

User.defaultProps = {
  name:"Unknown",
  age:1
}

export default App;
