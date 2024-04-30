import { useEffect, useState } from 'react'
import Discount from '../DiscountCard/Discount'
import { addUser, fetchUsers } from '../utils/requests'

const UsersPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetchUsers(setUserList)
  }, [])

  const handleAddUser = async (newUser) => {
    const userResponse = await addUser(newUser)
    setUserList([...userList, userResponse])
  }

  return (
    <main>
      <Discount handleAddUser={handleAddUser} />
       </main>
  )
}

export default UsersPage
