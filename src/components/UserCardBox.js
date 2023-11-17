import React from 'react'
import { useState,useEffect } from 'react'
import UserCardItem from './UserCardItem'
import './usercardbox.css'

const UserCardBox = () => {
    const [users,SetUsers] = useState([])
    const [searchQuery,SetSearchQuery] = useState('')
    const [nationality,SetNationality] = useState('all')
    const [gender,SetGender] = useState('all')
    const [age,SetAge] = useState('all')
    const userApi = `https://randomuser.me/api/?results=100&nat=${nationality}&gender=${gender}&age=${age}`

    const fetchAllUsers = async ()=>{
        var result = await fetch(userApi)
        var data = result.json()
        return data
        
    }
    useEffect(()=>{
        const getUsers = async ()=>{
            const allUsers = await fetchAllUsers()
            SetUsers(allUsers.results)
            console.log(allUsers.results)
        }
        getUsers();
    },[])

    const onSubmit =(e)=>{
        e.preventDefault();
        const filteredUsers = users.filter((user)=>user.name['first'].toLowerCase().includes(searchQuery.toLowerCase())||user.name['last'].toLowerCase().includes(searchQuery.toLowerCase()))
        SetUsers(filteredUsers)

    }
    const filterUsers = (e)=>{
        e.preventDefault();
       const sortedUsers  = users.filter((user)=>user.gender.toLowerCase().includes(gender.toLowerCase()))
       SetUsers(sortedUsers)
    }
    

    


  return (
    <div className='app_wrapper'>
         <div>
        <form className='form-items' onSubmit={onSubmit} >
        <input type='submit' value='Search' className='search-btn' ></input>
          <input className='search-bar-input' placeholder='search by name' type='text' value={searchQuery} onChange={(e)=>SetSearchQuery(e.target.value)}/>
        
        </form>
        <form className='form-items' onSubmit={filterUsers}>
            <input className='filter-btn' type='submit' value='Filter'></input>
            <select className='select-btn'>
                <option onClick={()=>SetNationality('all')}>All Nationality</option>
                <option onClick={()=>SetNationality('US')}> US</option>
                <option onClick={()=>SetNationality('BR')}>BR</option>
                <option onClick={()=>SetNationality('CA')}>CA</option>
                <option onClick={()=>SetNationality('CH')}>CH</option>
                <option onClick={()=>SetNationality('DE')}>DE</option>
                <option onClick={()=>SetNationality('BR')}>BR</option>
                <option onClick={()=>SetNationality('DK')}>DK</option>
                <option onClick={()=>SetNationality('ES')}>ES</option>
            </select>
            <select className='select-btn'>
                <option value={gender} onChange={(e)=>SetGender(e.target.value)}>All Gender</option>
                <option  value='male'>Male</option>
                <option value='female'> Female</option>
            </select>
            <select className='select-btn'>
                <option  onClick={()=>SetAge('all')}>All ages</option>
                <option  onClick={()=>SetAge('18')}>1-18</option>
                <option  onClick={()=>SetAge('40')}>19-40</option>
                <option  onClick={()=>SetAge('100')}>41-100</option>

            </select>
        </form>
      
      </div > 
      <div className='userlist_header'><h4>Active Users</h4></div>
        <div className='cardbox_container'>
            {users.map((user,index)=>(<UserCardItem key={index} user={user} />))}
        </div>
       
    </div>
  )
}

export default UserCardBox