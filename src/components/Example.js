import React from 'react';
import { ReactDOM } from 'react-dom/client';

class Welcome extends React.Component {
   render(){
      return <h2>This is an Example of {this.props.name}</h2>
   }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Welcome name="Class Component" />);

export default Welcome;