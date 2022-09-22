import { useParams } from 'react-router-dom';

function Show(props) {
    const { id } = useParams();
    const person = props.people.find(p => p._id === id)
    
    const loading = () => {
        return <h1>Loading ... </h1>;
    };

    const loaded = () => {
        return (
            <section>
                <h1>{person.name}</h1>
                <img 
                    className="avatar-image" 
                    src={person.image} 
                    alt={person.name} 
                />
                <h3>{person.title}</h3>
            </section>
        )
    };

    return props.people ? loaded() : loading();
}

export default Show;