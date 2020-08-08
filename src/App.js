import React from 'react';
import './App.css';
import { Customers } from './Customers'
import { Name} from './Name'
import { Header } from './Header'
import { ExportReactCSV } from './ExportReactCSV'

class App extends React.Component {

  
  customers = () => {
    let custs = []
    for (let i = 0; i <= 25; i++) {
      custs.push({도서명: `first${i}`, 지은이: `last${i}`,
      출판사: `abc${i}@gmail.com`, 금액: `000${i} street city, ST`, 비고: `0000${i}`});
    }
    return custs;
  }

  state = {
    customers: this.customers(),
    fileName: 'Customers'
  }
  
  render() {

    return (
      <div className="App">
        <Header />
        <h1></h1>
        <div className="row">
            <div className="col-md-8">
              <h4>2020년 8월 7일</h4>
              <h4>귀하</h4>
              <h4>아래와 같이 견적합니다</h4> 
            </div>
            <div className="App">
              <Name/>
            </div>
            <div className="col-md-4 center">
                <ExportReactCSV csvData={this.state.customers} fileName={this.state.fileName} />
            </div>
        </div>
        <Customers customers={this.customers()}/>
      </div>
    );
  }
}

export default App;
