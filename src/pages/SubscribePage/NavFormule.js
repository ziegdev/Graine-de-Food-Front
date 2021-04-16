import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: '1 mois',
    render: () => <Tab.Pane attached={false}>Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br><br></br>Livraison à domicile au début de chaque mois à compter de la souscription
          pour une durée de 1 mois.</Tab.Pane>  
  },
  {
    menuItem: '3 mois',
    render: () => <Tab.Pane attached={false}>Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br><br></br>Livraison à domicile au début de chaque mois à compter de la souscription
          pour une durée de 3 mois.</Tab.Pane>,
  },
  {
    menuItem: '6 mois',
    render: () => <Tab.Pane attached={false}>Je souscris aujourd'hui et je profite dès le mois prochain de ma box ! <br></br><br></br>Livraison à domicile au début de chaque mois à compter de la souscription
          pour une durée de 6 mois.</Tab.Pane>,
  },
]

const ForumuleTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default ForumuleTab;
