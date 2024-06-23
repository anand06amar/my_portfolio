import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div>
        <h1 className='heading'>
            My {''}
            <span className='text-purple'>
                work experience
            </span>
        </h1>
        <div className='mt-10 grid lg:grid-cols-4'>
            {}
            <Button>
                <div></div>
            </Button>
        </div>
    </div>
  )
}

export default Experience