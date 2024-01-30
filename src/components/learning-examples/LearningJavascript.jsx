const person = {
    name: 'Saeel Dhatrak',
    address: {
        line1: 'Balaji chowk Pashan',
        city: 'Pune',
        country: 'India',
    },
    profiles: ['twitter', 'instagram', 'linkedin'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)         
        )
    }
}

export default function LearningJavascript() {
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            
            <div>{person.printProfile()}</div>
        </>
    )
}