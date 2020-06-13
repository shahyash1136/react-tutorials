import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welome';
import Message from './components/Message';
import Counter from './components/Counter';



function App() {
    return (
        <div className="App">

            <Counter />

            {/* <Message/> */}
            {/* <Greet name='Bruce' heroName='Batman'/>
            <Greet name='Clark' heroName='Superman'/>
            <Greet name='Diana' heroName='Wonder Woman'/>
            <Welcome name='Bruce' heroName='Batman'/>
            <Welcome name='Clark' heroName='Superman'/>
            <Welcome name='Diana' heroName='Wonder Woman'/> */}
        </div>
    );
}

export default App;
