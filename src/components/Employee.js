function Employee(props) {
    return (
        <>
            <h3>Employee : {props.name}</h3>
            <p>Role : {props.role}</p>
            <p>{props.role ? props.role : 'no role'}</p>
            {props.role ? <p>{props.role} </p>: <p>No Role assigned</p>}
        </>
    );
}

export default Employee;