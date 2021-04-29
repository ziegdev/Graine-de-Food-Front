import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ButtonAbonne = () => <button as={Link} to='/abonnement/paiement'><div className = "aboButton">Je m'abonne</div></button>

export default ButtonAbonne;
