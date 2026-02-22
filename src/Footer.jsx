import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-dark text-light pt-5 pb-3">
  <div class="container">
    <div class="row">

      <div class="col-md-4">
        <h5>About</h5>
        <p>We build digital products that solve real problems.</p>
      </div>

      <div class="col-md-4">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-light text-decoration-none">Home</a></li>
          <li><a href="#" class="text-light text-decoration-none">Services</a></li>
          <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>

      <div class="col-md-4">
        <h5>Contact</h5>
        <p>Email: info@example.com</p>
        <p>Phone: +234 000 000 0000</p>
      </div>

    </div>

   
    <hr  className='border-seconday'/>

    <div class="text-center">
      <small>© 2026 Your Brand</small>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer