import React from 'react'
import Form from './components/Form'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center absolute inset-0 
    bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'>
      <Form/>
      <Toaster 
        richColors={true}
        closeButton={true}
        duration={4000}
      />
    </div>
  )
}

export default App