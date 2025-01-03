import React from 'react'
import ClientHeader from '../../../layouts/Client/ClientHeader'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader/>
      <Outlet/>
    </div>
  )
}

export default ClientLayout
