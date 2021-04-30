import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import blog1 from 'src/assets/images/IllustrationsHomepage/pexels-victoria-emerson-6160288.jpg';
import blog2 from 'src/assets/images/IllustrationsHomepage/pexels-grawal-7233716.jpg';
import blog3 from 'src/assets/images/IllustrationsHomepage/pexels-tima-miroshnichenko-6508773.jpg';
import './styles.scss';
const MelaineActus = () => (
  <>
    <h2 className="centered">Les actus de Graine de Magie</h2>
    <div className="actus">
      <Card>
        <Image src='https://grainedemagie.com/wp-content/uploads/2021/04/2.jpg' wrapped ui={false} as='a' href='https://grainedemagie.com/2021/04/26/champagne-pierre-mignon-le-prestige-dans-vos-flutes/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'>CHAMPAGNE PIERRE MIGNON </Card.Header>
          <Card.Description>
            Bonjour à tous, J'espère qu'en cette période printanière vous vous portez bien. 🍃 Aujourd'hui, je vous présente les Champagnes Pierre Mignon. Vous pouvez vous rendre sur leur site pour découvrir leur gamme. La gamme Héritage offre fruité et rondeur grâce au Pinot Meunier. La gamme Gastronomique, quant à elle, séduira les palais les plus délicats. Enfin, la […]
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src='https://grainedemagie.com/wp-content/uploads/2020/11/IMG_9927.jpg' wrapped ui={false} as='a' href='https://grainedemagie.com/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'> 
Recette : Moelleux au chocolat côte d'or</Card.Header>
          <Card.Description>
              Recette : Moelleux au chocolat côte d'or avec son coeur collant    Bonjour tout le monde ! J'espère que vous allez bien. Je reviens aujourd'hui avec une nouvelle recette, 100% gourmande : un moelleux au chocolat côte d'or… Le principe est le même que celui au Nutella que vous pouvez retrouver ici mais avec du […]
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src="https://grainedemagie.com/wp-content/uploads/2021/01/IMG_2788-2.jpg" wrapped ui={false} as='a' href='https://grainedemagie.com/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'>Une détox après les fêtes avec Esprit Bio</Card.Header>
          <Card.Description>
            Bonjour tout le monde ! J'espère que vous allez bien et que vous avez passé de bonnes fêtes ! Je vous souhaite une bonne année 2021. Aujourd'hui, je reviens vers vous un nouvel article détox… Je parle souvent de food sur mon blog et je me suis dit que de vous parler détox + food […]
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </>
);
export default MelaineActus;
