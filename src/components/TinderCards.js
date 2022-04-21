import React from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './tinderCards.css'

const TinderCards = () => {

  const[people, setPeople] = useState([
    {
      name:'steve job',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    },{
      name:"Mark Zuckerberg",
      url:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    },{
      name:"Akshay Kumar",
      url:'https://images.hindustantimes.com/img/2022/03/26/1600x900/e1b4dd80-acbb-11ec-8f61-24c14ed3357f_1648326455930.jpg'
    }
  ])

  return (
    <div>
        <h1>Tinder Cards</h1>
        <div className='tinderCard__cardContainer'>
        {people.map((person)=>(
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up', 'down']}
          >
            <div 
            style={{backgroundImage: `url(${person.url})`}}
            className='card'>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
        </div>

    </div>
  )
}

export default TinderCards