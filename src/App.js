import React, { useEffect } from 'react'
import UserListing from './components/user-listing/UserListing';
import useLoadUsers from './custom-hooks/useLoadUsers';

function App() {
  const loadUsers = useLoadUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])
  return (
    <>
      <UserListing />
    </>
  )
}

export default App;


  // <div className="row row-cols-4 row-cols-md-4 g-10">
    // <div className="user-cards">
    // {users.map(user => (
    //   <div className="card" key={user.id}>
    //     <div className="card-header">
    //     <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="Avatar" />
    //     </div>

    //       <div className="card-body">
    //       <div className='grid'>
    //       <h2>{user.name}</h2>
    //         <p>Email:{user.email}</p>
    //         <p>Phone:{user.phone}</p>
    //         <div className="grid-item">
    //             <p>Website:{user.website}</p>
    //           </div>
    //       </div>
    //     </div>
    //     </div>
    //   ))}
    // </div>
    // </div>