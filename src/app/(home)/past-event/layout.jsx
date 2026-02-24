import Footer from '@/components/footer/Footer'
import { HeaderSectionComponent } from '@/components/HeaderSectionComponent'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const EventLayout = ({children}) => {
  return (
    <div>
          <HeaderSectionComponent
                title={"Past Events"}
                link={"/past-event"}
                image="/images/IMG_7740.JPG"
                position="center"
              />
        {children}
        
    </div>
  )
}

export default EventLayout