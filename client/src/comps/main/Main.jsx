import React from 'react'
import List from './list/List'
import Detail from './selected/Detail'
import Summary from './summary/Summary'
import './Main.css'

const Main = () => {
  return (
    <main>Main
      <List></List>
      <Detail></Detail>
      <Summary></Summary>
    </main>
  )
}

export default Main