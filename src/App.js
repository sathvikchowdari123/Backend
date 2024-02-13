import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Route,Router,Routes,Switch } from 'react-router-dom';
import Register from './register';

import OrganizationStructure from './Chart';
function App() {
  const data=[
    {
      "name": "anushnewman",
      "email": "anushnewman@jmangroup.com",
      "password": "0101",
      "role": "CEO",
      "department": null,
      "reportsTo": null
    },
    {
      "name": "ashley",
      "email": "ashley@jmangroup.com",
      "password": "0101",
      "role": "CFO",
      "department": null,
      "reportsTo": "anushnewman@jmangroup.com"
    },
    {
      "name": "gerald",
      "email": "gerald@jmangroup.com",
      "password": "0000",
      "role": "MANAGER",
      "department": "BUSINESS_MANAGEMENT",
      "reportsTo": "ashley@jmangroup.com"
    },
    {
      "name": "gautham",
      "email": "gautham@jmangroup.com",
      "password": "0000",
      "role": "SENIOR_HR",
      "department": "BUSINESS_MANAGEMENT",
      "reportsTo": "gerald@jmangroup.com"
    },
    {
      "name": "vishnupriya",
      "email": "vishnupriya@jmangroup.com",
      "password": "0000",
      "role": "SENIOR_HR",
      "department": "BUSINESS_MANAGEMENT",
      "reportsTo": "gerald@jmangroup.com"
    },
    {
      "name": "amrut",
      "email": "amrut@jmangroup.com",
      "password": "0000",
      "role": "JUNIOR_HR",
      "department": "BUSINESS_MANAGEMENT",
      "reportsTo": "gautham@jmangroup.com"
    },
    {
      "name": "sirisha",
      "email": "sirisha@jmangroup.com",
      "password": "0000",
      "role": "SENIOR_HR",
      "department": "FINANCIAL_SERVICES",
      "reportsTo": "ashley@jmangroup.com"
    },
    {
      "name": "jeffy",
      "email": "jeffy@jmangroup.com",
      "password": "0000",
      "role": "JUNIOR_HR",
      "department": "FINANCIAL_SERVICES",
      "reportsTo": "sirisha@jmangroup.com"
    },
    {
      "name": "leovalan",
      "email": "leovalan@jmangroup.com",
      "password": "0101",
      "role": "CTO",
      "department": null,
      "reportsTo": "anushnewman@jmangroup.com"
    },
    {
      "name": "vendeeshwaran",
      "email": "vendeeshwaran@jmangroup.com",
      "password": "0000",
      "role": "TRIBE_MASTER",
      "department": "FULL_STACK",
      "reportsTo": "leovalan@jmangroup.com"
    },
    {
      "name": "sachinvias",
      "email": "sachinvias@jmangroup.com",
      "password": "0000",
      "role": "TRIBE_MASTER",
      "department": "DATA_ENGINEER",
      "reportsTo": "leovalan@jmangroup.com"
    },
    {
      "name": "sivamalini",
      "email": "sivamalini@jmangroup.com",
      "password": "0000",
      "role": "TRIBE_MASTER",
      "department": "UI",
      "reportsTo": "leovalan@jmangroup.com"
    },
    {
      "name": "gopinathramesh",
      "email": "gopinathramesh@jmangroup.com",
      "password": "0000",
      "role": "TEAM_LEAD",
      "department": "FULL_STACK",
      "reportsTo": "vendeeshwaran@jmangroup.com"
    },
    {
      "name": "deexith",
      "email": "deexith@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "FULL_STACK",
      "reportsTo": "gopinathramesh@jmangroup.com"
    },
    {
      "name": "hafeel",
      "email": "hafeel@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "FULL_STACK",
      "reportsTo": "gopinathramesh@jmangroup.com"
    },
    {
      "name": "nivya",
      "email": "nivya@jmangroup.com",
      "password": "0000",
      "role": "TEAM_LEAD",
      "department": "DATA_ENGINEER",
      "reportsTo": "sachinvias@jmangroup.com"
    },
    {
      "name": "parthiban",
      "email": "parthiban@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "DATA_ENGINEER",
      "reportsTo": "nivya@jmangroup.com"
    },
    {
      "name": "rajibparbat",
      "email": "rajibparbat@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "DATA_ENGINEER",
      "reportsTo": "nivya@jmangroup.com"
    },
    {
      "name": "dhanasekar",
      "email": "dhanasekar@jmangroup.com",
      "password": "0000",
      "role": "TEAM_LEAD",
      "department": "UI",
      "reportsTo": "sivamalini@jmangroup.com"
    },
    {
      "name": "mithun",
      "email": "mithun@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "UI",
      "reportsTo": "dhanasekar@jmangroup.com"
    },
    {
      "name": "saathvik",
      "email": "saathvik@jmangroup.com",
      "password": "0000",
      "role": "DEVELOPER",
      "department": "UI",
      "reportsTo": "dhanasekar@jmangroup.com"
    }
  ]
  return (
    <div className="App container-fluid" >
  <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chart" element={<OrganizationStructure chartdata={data}/>} />
         <Route path='/register' element={<Register/>}/>
      </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
