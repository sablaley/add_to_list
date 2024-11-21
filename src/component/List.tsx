import React from 'react'
interface Iprops {
    people: {
        name: string
        age: number
        img: string
        note?: string
    }[]
}

const List: React.FC<Iprops> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img} alt={person.img}/>
                        <h5>{person.name}</h5>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>{renderList()}
        </ul>
    )
}
export default List