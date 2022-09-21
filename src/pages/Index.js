function Index(props) {
    if(props.people) {
        return props.people.map(person => (
            <div className="person" key={person._id}>
                <h1>{person.name}</h1>
            </div>
        ));
    }
    
    return <h1>Loading ...</h1>;
}

export default Index;