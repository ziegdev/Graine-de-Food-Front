import React from 'react'
import { Tab } from 'semantic-ui-react'

const ForumuleTab = ({ setSub1Month, setSub3Month, setSub6Month }) => {
  const setSubMonths = (e) => {
    //console.log(e.currentTarget.childNodes[1].children[1].innerText)
    //console.log(e.currentTarget.children[1].lastChild.innerText)
    const el = e.target.innerText
    console.log(el)
    if(el==='1 mois') {setSub1Month()}
    else if (el === '3 mois') {setSub3Month()}
    else {setSub6Month()}
  }
const panes = [
  {
    menuItem: '1 mois',
<<<<<<< HEAD
    render: () => <Tab.Pane attached={false}><div className ="text__formule">Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br>Livraison à domicile au début de chaque mois à compter de la souscription
=======
    render: () => <Tab.Pane attached={false} ><div className ="text__formule">Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br><br></br>Livraison à domicile au début de chaque mois à compter de la souscription
>>>>>>> 7e41e99442b26eebe2cd65ef7dfd786ae9c3d952
          pour une durée de 1 mois.</div><div className ="pricing">29.99 €</div></Tab.Pane>  
  },
  {
    menuItem: '3 mois',
    render: () => <Tab.Pane attached={false}>Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br>Livraison à domicile au début de chaque mois à compter de la souscription
          pour une durée de 3 mois.<div className ="pricing">49.99 €</div></Tab.Pane>,
  },
  {
    menuItem: '6 mois',
    render: () => <Tab.Pane attached={false}>Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br>Livraison à domicile au début de chaque mois à compter de la souscription
          pour une durée de 6 mois.<div className ="pricing">69.99 €</div></Tab.Pane>,
  },
]

return (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} onClick={setSubMonths} />
)

}


export default ForumuleTab;
