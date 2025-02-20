import React from 'react'
import PlanningGuidance from '@/shared/service-guidance/header/header'
import PlanningAdvice from '@/shared/service-guidance/card/card'
import Testimonial from '@/shared/service-guidance/what-our-customer/whatOur'
import Cards from '@/shared/service-guidance/icon/icon'

const page = () => {
  return (
    <div>
      <PlanningGuidance/>
      <PlanningAdvice/>
      <Testimonial/>
      <Cards/>
    </div>
  )
}

export default page
