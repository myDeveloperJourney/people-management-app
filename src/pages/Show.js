import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Show({ people, deletePeople }) {
    const { id } = useParams();
    
    const person = people ? people.find(p => p._id === id) : null;

    const navigate = useNavigate();
    const [editForm, setEditForm] = useState({
        name: '',
        image: '',
        title: ''
    });

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        
    };
    
    const loading = () => {
        return <h1>Loading ... </h1>;
    };
    
    const loaded = () => {
        
        const handleDelete = () => {
            deletePeople(person._id)
            navigate('/');
        };
        return (
            <section>
                <h1>{person.name}</h1>
                <img 
                    className="avatar-image" 
                    src={person.image} 
                    alt={person.name} 
                />
                <h3>{person.title}</h3>
                <button onClick={handleDelete}>Delete</button>
            </section>
        )
    };

    useEffect(() => {
        if(person) {
            setEditForm(person)
        }
    }, [person]);

    return (
        <section>
            {people ? loaded() : loading()}
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text" 
                        name="name" 
                        value={editForm.name}  
                        onChange={handleChange} 
                    />
                </label>
                <label>Image:
                    <input
                        type="text" 
                        name="image" 
                        value={editForm.image}  
                        onChange={handleChange} 
                    />
                </label>
                <label>Title:
                    <input
                        type="text" 
                        name="title" 
                        value={editForm.title}  
                        onChange={handleChange} 
                    />
                </label>
                <input type="submit" value="Update" />
            </form>
        </section>
    );
}

export default Show;