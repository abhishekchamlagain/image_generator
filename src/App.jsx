import { useState } from 'react'
import './App.css'

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const generateImage = async () => {
    setLoading(true)
    setError('')
    setImageUrl('')

    try {
      // Check if input is empty
      if (!inputValue.trim()) {
        throw new Error('Please enter an image name')
      }
      
      // Fetch image from Pixabay API
      const apiKey = import.meta.env.VITE_PIXABAY_API_KEY
      const response = await fetch(`https://pixabay.com/api/?q=${inputValue}&key=${apiKey}&image_type=photo`)
      const data = await response.json()
      
      if (data.hits.length === 0) {
        throw new Error('No images found. Try another search.')
      }
      
      setImageUrl(data.hits[0].largeImageURL)
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
    <section className="text-center mt-20 ">
      <h1 className='text-3xl font-bold'>Welcome to the Image Generator App</h1>
      <p className='text-lg font-bold mt-4'>Enter name of the image you want to generate:</p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <input 
        type="text" 
        placeholder="Image name" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-3 w-1/2" />

      <button 
      onClick={generateImage}
      disabled={loading}
      className="bg-[#1791c8] text-white rounded-md p-3 hover:bg-[#1791c8] disabled:bg-[#1791c8]/50">
      {loading ? 'Generating...' : 'Generate Image'}
      </button>
      </div>
    </section>

    <div className='text-center'>
      {error ?(
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div className="mt-10 flex justify-center">
          <img src={imageUrl} alt="Generated" className="max-w-md" />
        </div>
      )}
    </div>
    </>
  )
}

export default App
