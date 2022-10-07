import { useState, useEffect } from "react";

export const Atul=()=>{
    const [counter, setCounter]=useState(0);

    useEffect(()=>{
        
    },[]);

    return(
        <div className="App">
            <button onClick={()=>setCounter((prevCount) =>  (prevCount - 1)) }>-</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter((prevCount) => prevCount + 1)}>+</button>
    
            </div>
        );
    };


    // const name ='Atul';
    // const isUserLoggedIN= true;
    // const name = null;
    // const isNameShowing = false;
    
    // const Person=(props)=>{
    //     return(
    //         <>
    //         <p>Name: <b> {props.name}</b></p>
    //         <p>Last   Name: <b>{props.LastName}</b></p>
    //         <p>Age:  <b> {props.age}</b></p><br /><hr /><br />
    //         </>
    //     )
    // }
    

            // {/* <Person name={'Atul'} LastName={'Tingre'} age={25}/>
            // <Person name={'Avinash'} LastName={'Tingre'} age={27}/>
            // <Person name={'Balajirao'} LastName={'Tingre'} age={57}/>
            // <Person name={'Sangita'} LastName={'Tingre'} age={48}/> */}
            // {/* <h1> Hello {isNameShowing ? name : 'someting else'}</h1> */}
            // {/* <h1> Hello {2+2}</h1>
            // {name ?(
            //     <>
            //     {name}
            //     </> */}
            // {/* ):(
            //     <>
            //     <h2>test</h2>
            //     <h2>There is no name</h2>
            //     </>
            // ) */}
            // {/* } */}