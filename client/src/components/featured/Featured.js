import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='img'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h1>234 Villas</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          alt='img'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Paris</h1>
          <h1>234 Villas</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='img'
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Maldives</h1>
          <h1>234 Villas</h1>
        </div>
      </div>
    </div>
  )
}

export default Featured
