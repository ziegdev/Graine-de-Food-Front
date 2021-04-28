import React from 'react';
import {   Link } from 'react-router-dom';
import { Grid, Image, Container, Header, Button } from 'semantic-ui-react';
import concept1 from '/src/assets/images/IllustrationsConcept/pexels-pixabay-207247 (1).jpg';
import concept2 from '/src/assets/images/IllustrationsConcept/pexels-gustavo-fring-7447286.jpg';
import concept3 from '/src/assets/images/IllustrationsConcept/pexels-adonyi-gábor-1407857.jpg';
import concept4 from '/src/assets/images/IllustrationsConcept/pexels-norma-mortenson-4393655.jpg';
import './styles.scss';

const Content = () => (
  <div className="concept">
  <section className='concept-container'>
    <Grid>
      <Grid.Column width={6}>
        <Image src={concept1} className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Container text>
          <Header as='h2'>Header</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
  </section>
  <section className='concept-container'>
    <Grid>
      <Grid.Column width={10}>
        <Container text>
          <Header as='h2' >Header</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src={concept2} className='concept-image align-left' />
      </Grid.Column>
    </Grid>
  </section>
  <a className='button-link' href='/abonnement'><button>Je m'abonne à la box Graine de Food</button></a>
  <section className='concept-container'>
    <Grid>
      <Grid.Column width={6}>
        <Image src={concept3} className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Container text>
          <Header as='h2'>Header</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
    </section>
    <section className='concept-container'>
    <Grid>
      <Grid.Column width={10}>
        <Container text>
          <Header as='h2' >Header</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src={concept4} className='concept-image align-left' />
      </Grid.Column>
    </Grid>
  </section>
  <a href='/abonnement'><button>Je m'abonne à la box Graine de Food</button></a>
  </div>
);

export default Content;
