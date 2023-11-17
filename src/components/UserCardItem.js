import React from 'react'
import './usercarditem.css'

const UserCardItem = ({user}) => {
  const name = 'Name: '
  const age = 'Age: '
  const gender = "Gender: "
  const nat = 'Nationality: '
  return (
    <div className='card_container'>
      <img className='card_image' alt=''src={user.picture['large']}/>
      <div className='card_user_details'>
        <div className='user_name'>{name+" "+" "+user.name.first+" "+user.name.last}</div>
        <div className='user_name'>{age+" "+user.dob.age}</div>
        <div className='user_name'>{gender+" "+user.gender}</div>
        <div className='user_name'>{nat+" "+user.nat}</div>
      </div>
      
   
    </div>
  )
}

export default UserCardItem