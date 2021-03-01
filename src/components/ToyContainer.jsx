import { render } from '@testing-library/react';
import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

render(){
  return (
  <div id="toy-collection">
    {
    this.props.toys.map(toyObj=> {
      return <ToyCard toy={toyObj} key={toyObj.id} addLikes={this.props.addLikes}/>
    })}

    )
  </div>
  )
}
}


export default ToyContainer
