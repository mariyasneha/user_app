import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">User</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">AddUser</Link>
              <Link class="nav-link" to="/search">SearchUser</Link>
              <Link class="nav-link" to="/delete">DeleteUser</Link>
              <Link class="nav-link" to="/viewall" >ViewAllUser</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default UserNavBar