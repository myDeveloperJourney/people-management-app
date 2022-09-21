import { useState } from 'react';

function Index(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        image: '',
        title: '',
    });

    const loaded = () => {
        return props.people.map(person => (
            <div className="person" key={person._id}>
                <h1>{person.name}</h1>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPeople(newForm); // lifting up state
        setNewForm({
            name: '',
            image: '',
            title: '',
        });
    };

    return (
        <section>
            { props.people ? loaded() : loading() }
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                        type="text"
                        value={newForm.name} 
                        onChange={handleChange}
                        placeholder="Elizabeth II"
                        name="name"
                    />
                </label>
                <label>Image:
                    <input 
                        type="text"
                        value={newForm.image} 
                        onChange={handleChange}
                        placeholder="https://your-person-image.com/file.jpeg"
                        name="image"
                    />
                </label>
                <label>Title:
                    <input 
                        type="text"
                        value={newForm.title} 
                        onChange={handleChange}
                        placeholder="The Queen of England"
                        name="title"
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
    
}

export default Index;