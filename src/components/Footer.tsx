import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black flex sm:flex-col md:flex-row text-white justify-between mt-28 items-center sm:-h-full md:h[200px]'>
     <div>
        <h1>Exclusive</h1>
        <ul>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li></li>
        </ul>
     </div>
     <div>
        <h1>Support</h1>
        <ul>
        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
        </ul>
     </div>
     <div>
        <h1>Account</h1>
        <ul>
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Shop</li>
        </ul>
     </div>
     <div>
        <h2>Quick Link</h2>
        <ul>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
        </ul>
     </div>
    </div>
  )
}
