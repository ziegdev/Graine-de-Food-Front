import React from 'react'
import { Tab } from 'semantic-ui-react'
import CartResume from 'src/containers/CartResume';

const ForumuleTab = ({selectedSubMonth, selectedSubPrice}) => {
  
const panes = [
  {
    menuItem: {selectedSubMonth},
    key: {selectedSubMonth}, 
    render: (price) => <Tab.Pane attached={false}><CartResume price={selectedSubPrice} /> </Tab.Pane>  
  },

]
  return(
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} key={selectedSubMonth} />
)}

export default ForumuleTab;
