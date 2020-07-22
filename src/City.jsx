// import React, { Component } from 'react';
// import axios from 'axios';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow'; 
// import Main from './Main';
// import Styles from './Cell.module.css';


// const url="https://api.covid19india.org/v2/state_district_wise.json";

// class City extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             districts:[],
//             loading:true,
//             filter:"",
//         }
       
//       }
  
//     async componentDidMount(){

//         const res = await axios.get(url);

//         this.setState({districts:res.data});

//         this.setState({loading:false});
//         console.log(res);
        
//     }
//     render(){



//       if(this.state.loading){
//         return <h1>Loading...</h1>
//     }
  
//         return(
//             <>
//             <div className={Styles.header}>
//                 <p>Covid-<span className={Styles.span}>19</span></p>
//             </div>
//             <div className={Styles.search}>
            
//                 <input type='text' placeholder='Search...' onChange={e => handleChange(e.target.value)}/>
//             </div>

//             <TableContainer className={Styles.container}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell className={Styles.Dhead}>Districts</TableCell>
//                     <TableCell className={Styles.chead}>Confirmed</TableCell>
//                     <TableCell className={Styles.ahead}>Active</TableCell>
//                     <TableCell className={Styles.rhead}>Recovered</TableCell>
//                     <TableCell className={Styles.dhead}>Deaths</TableCell>
//                   </TableRow>
//                 </TableHead>
//                   {data.map((States) =>
//                     <TableBody>
//                      {States.districtData.map((sub) =>
//                       <Main dist={sub} key={sub.district}/>
                     
//                      )}
//                      </TableBody>
//                         )}  
              
//               </Table>
//             </TableContainer>
             
//             </>
//         )

//     }
// }

// export default City;
