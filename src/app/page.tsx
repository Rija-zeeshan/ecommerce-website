
import Arrival from '@/components/Arrival'


import Card from '@/components/Card'
import Category from '@/components/Category'

import Hero from '@/components/Hero'
import List from '@/components/List'
import Products from '@/components/Products'
import Sale from '@/components/Sale'
import React from 'react'

export default function page() {
  return (
    <div>
      
      <Hero/>
      <Sale/>
      <Category/>
      <Products/>
      <Card/>
      <List/>
      <Arrival/>
    </div>
  )
}
