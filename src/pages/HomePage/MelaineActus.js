import React from 'react';
import { Image, Icon, Card } from 'semantic-ui-react';
import blog1 from 'src/assets/images/IllustrationsHomepage/pexels-victoria-emerson-6160288.jpg';
import blog2 from 'src/assets/images/IllustrationsHomepage/pexels-grawal-7233716.jpg';
import blog3 from 'src/assets/images/IllustrationsHomepage/pexels-tima-miroshnichenko-6508773.jpg';
import './styles.scss';

const MelaineActus = () => (
  <>
    <h2 className="centered">Les actus de Graine de Magie</h2>
    <div className="actus">
      <Card>
        <Image src={blog1} wrapped ui={false} as='a' href='https://grainedemagie.com/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'>Titre Article Blog 1</Card.Header>
          <Card.Description>
            Vice paleo salvia austin, mustache keffiyeh gentrify. Tbh kombucha crucifix drinking vinegar four dollar toast, vinyl man bun church-key trust fund small batch meditation distillery scenester celiac biodiesel.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src={blog2} wrapped ui={false} as='a' href='https://grainedemagie.com/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'>Titre Article Blog 2</Card.Header>
          <Card.Description>
            Vice paleo salvia austin, mustache keffiyeh gentrify. Tbh kombucha crucifix drinking vinegar four dollar toast, vinyl man bun church-key trust fund small batch meditation distillery scenester celiac biodiesel.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src={blog3} wrapped ui={false} as='a' href='https://grainedemagie.com/' target='_blank' />
        <Card.Content>
          <Card.Header as='a' href='https://grainedemagie.com/' target='_blank'>Titre Article Blog 3</Card.Header>
          <Card.Description>
            Vice paleo salvia austin, mustache keffiyeh gentrify. Tbh kombucha crucifix drinking vinegar four dollar toast, vinyl man bun church-key trust fund small batch meditation distillery scenester celiac biodiesel.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </>
);

export default MelaineActus;
