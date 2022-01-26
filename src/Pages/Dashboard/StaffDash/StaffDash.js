import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminPanel from './StSidePanel'
import { FaSearch } from 'react-icons/fa'

import Spinner from '../../../Components/Spinner/Spinner'
import '../dashboard.css'
import noResult from '../no result.svg'
import search from '../search.svg'

function StaffDash() {
  return (
    <main>
      <div className='dashboard'>
        <AdminPanel />
        <Finder />
      </div>
    </main>
  )
}

const Finder = () => {
  const [id_phone, setId_phone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResult, setSearchResult] = useState({})
  // let url
  // if (id_phone.includes('@')) {
  //   url = ` `
  // } else {
  //   url = ` `
  // }

  //sending api request for searching the employee in database
  // const dataFetching = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data)
  //   setSearchResult(data)
  //   setIsLoading(false)
  // }

  const searchAccount = (e) => {
    e.preventDefault()

    if (id_phone.length > 0) {
      setIsLoading(true)
      //dataFetching()
    }
  }
  return (
    <div className='finder'>
      <h1>Patient's Tally</h1>
      <div className='employee-tally'>
        <p>Total Patients:</p>
        <p>0</p>
        <p>Total Admitted Patients:</p>
        <p>0</p>
        <p>Total Patients Discharged:</p>
        <p>0</p>
        <p>Total OPD Patients:</p>
        <p>0</p>
      </div>
      <h1>
        <FaSearch className='sc' /> Search Patient
      </h1>
      <div className='search'>
        <form
          className='search-bar'
          onSubmit={searchAccount}
          autoComplete='off'
        >
          <input
            type='search'
            id='search-box'
            name='search-box'
            className='basic-input'
            value={id_phone}
            placeholder='Enter email-id or phone no.'
            onChange={(e) => setId_phone(e.target.value)}
          />
        </form>
      </div>
      <div className='title'>
        <h1>Related Results</h1>
        <div className='underline'></div>
      </div>
      <article className='results'>
        {!isLoading && Object.keys(searchResult).length === 0 && (
          <div className='no-result'>
            <img src={search} alt='waiting to search' />
            <h4>Waiting to search</h4>
          </div>
        )}
        {isLoading && (
          <div style={{ padding: '80px' }}>
            <Spinner />
          </div>
        )}
        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          searchResult.status &&
          searchResult.data.map((result) => (
            <div className='result' key={result._id}>
              <div className='column'>
                <h3>First Name</h3>
                <p>{result.firstName}</p>
              </div>
              <div className='column'>
                <h3>Last Name</h3>
                <p>{result.lastName}</p>
              </div>
              <div className='column'>
                <h3>Account Type</h3>
                <p>{result.dbType}</p>
              </div>
              <div className='column'>
                <h3>Action required</h3>
                <Link to={`/dashboard/profile/${result._id}`}>
                  <p style={{ color: 'blue' }}>View Profile</p>
                </Link>
              </div>
            </div>
          ))}
        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          !searchResult.status && (
            <div className='no-result'>
              <img src={noResult} alt='not found' />
              <h4>Result Not Found</h4>
            </div>
          )}
      </article>
    </div>
  )
}
export default StaffDash
