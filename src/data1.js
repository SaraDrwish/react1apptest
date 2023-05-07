
function Code(props){
    
    // return(
    //     <h2> sasa data1.js by sara sasa </h2>
    // )

    //distruction////

    const { name, age, city } = props;
    
    return (

        <div className="data1box">
            {/* <h2>Welcome : { props.name} </h2>
            <h2>age : { props.age} </h2>
            <h2>city : { props.city} </h2> */}

            <h2> Welcome : { name} </h2>
            <h2>age : { age} </h2>
            <h2>city : { city} </h2>
        </div>
    )
}

export default Code;