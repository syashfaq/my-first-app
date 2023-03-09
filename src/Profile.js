function Profile() {
    const person = {
        name: "Sayyed Ashfaq",
        imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
        theme: {
            backgroundColor: "azure",
            color : "black",
        },
    };
    return <div style={person.theme}>
        <h1>{person.name}</h1> 
        <img src = {person.imageUrl}/>
        <ul>
            <li>Sayyed</li>
            <li>Ashfaq</li>
        </ul>

    </div>
}

export default Profile
