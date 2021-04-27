import React from 'react'
import { Tab } from 'semantic-ui-react'
import CartResume from 'src/pages/CartPage/CartResume';





const price1=29.99;
const price2=39.99;
const price3=49.99;
const panes = [
  {
    menuItem: '1 mois',
    render: (price) => <Tab.Pane attached={false}><CartResume price={price1} /> </Tab.Pane>  
  },
  {
    menuItem: '3 mois',
    render: () => <Tab.Pane attached={false}><CartResume price={price2}/> </Tab.Pane>  ,
  },
  {
    menuItem: '6 mois',
    render: () => <Tab.Pane attached={false}><CartResume price={price3} /> </Tab.Pane>  ,
  },
]

const ForumuleTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default ForumuleTab;
