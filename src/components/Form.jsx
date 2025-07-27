import React, { useState } from 'react'
import { toast } from 'sonner'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gender: ''
  });

  const [loading,setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
        gender: ''
      })
      setLoading(false);
      toast.success('Form submitted successfully!');
    }, 2000);
  };

  return (
    <div className='relative h-[80%] md:w-[35%] xl:w-[40%] w-[80%] text-white border border-white/20 bg-white/10 shadow-2xl rounded-3xl overflow-hidden flex justify-center items-center'>

      <h1 className='absolute top-4 text-2xl font-medium '>Form</h1>

      <form className="flex flex-col gap-6 w-4/5" onSubmit={handleSubmit}>
        <div className="floating-label flex flex-col gap-2">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            required
            placeholder=''
          />
          <label className="text-sm font-medium">Name</label>

        </div>



        <div className="floating-label flex flex-col gap-2">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            required
            placeholder=''
          />
          <label className="text-sm font-medium">Email</label>
        </div>



        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
            rows={4}
            required
          />
        </div>



        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="w-4 h-4 text-white bg-white/20 border-white/20 focus:ring-white/40"
              />
              <span className="text-sm font-medium">Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="w-4 h-4 text-white bg-white/20 border-white/20 focus:ring-white/40"
              />
              <span className="text-sm font-medium">Female</span>
            </label>
          </div>
        </div>



        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-white/30 hover:bg-white/40 text-white font-semibold py-2 rounded-lg transition-colors border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            'Send'
          )}
        </button>


      </form>
    </div>
  )
}

export default Form
