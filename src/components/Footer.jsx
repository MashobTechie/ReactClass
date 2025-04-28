import React from 'react'

const Footer = () => {
  return (
    <footer  className='bg-orange-100 font-serif'>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div>
          <h4>Contact </h4>
          <p>+234 123 4562 781</p>
          <p>11022, South 51st Street Suite 105 Phoenix</p>

          <p>info@gmail.com</p>

        </div>


        <div>
          <h4>Navigate</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Web Development</li>
            <li>App Development</li>
            <li>SEO Optimization</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer