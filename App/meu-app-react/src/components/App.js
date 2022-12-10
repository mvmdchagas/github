import React from "react";

class App extends React.Component{
  render(){
    return(
      <section>
        <p>meu primeiro paragrafo</p>
        <p>meu segundo paragrafo</p>
        <p>{new Date().toLocaleDateString('pt-BR')}</p>
        <p>{new Date().getHours()} : {new Date().getMinutes()}</p>
      </section>
    )
  }
}

export default App;
