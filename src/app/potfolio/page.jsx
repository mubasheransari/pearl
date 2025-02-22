import React from 'react'
import Portfolio from '@/shared/potfolio/potfolio header/potfolio'
import ClientSideTabsWithSuspense from '@/shared/potfolio/Thing-we-can/ThingWeCan'

const page = () => {
  return (
    <div>
      <Portfolio/>
      <ClientSideTabsWithSuspense/>
    </div>
  )
}

export default page
