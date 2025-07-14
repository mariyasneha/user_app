import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios'

const ViewAllUsers = () => {
  const [userData, ChangeuserData] = useState(
    []
  )

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        ChangeuserData(response.data)
      }
    ).catch()
  }
  useEffect(() => { fetchData() }, [])

  return (
    <div>
      <div className="container">
        <UserNavBar />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">website</th>
                  <th scope="col">company</th>

                </tr>
              </thead>
              <tbody>
                {userData.map(
                  (value, index) => {
                    return (<tr>

                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>
                        {value.address.street},{value.address.suite}<br />
                        {value.address.city},{value.address.zipcode}<br />
                      </td>
                      <td>{value.phone}</td>
                      <td>{value.website}</td>
                      <td>
                        {value.company.name},{value.company.catchPhrase},{value.company.bs}
                      </td>

                    </tr>)
                  }
                )}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllUsers