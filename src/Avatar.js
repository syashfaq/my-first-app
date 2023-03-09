function Avatar({person,size}){
    // const {person,size} = props;
    console.log("props:", size);
    return (
        <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
    )
}
export default Avatar;