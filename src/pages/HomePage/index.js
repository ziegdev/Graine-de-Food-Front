import React from 'react';
import ImageIntro from './ImageIntro';
import SellingPoints from './SellingPoints';
import { Image, Icon, Button, Container, Header, Input } from 'semantic-ui-react';
import imgIntro from '/src/assets/images/IllustrationsHomepage/pexels-david-bartus-1166209.jpg';
import './styles.scss';

const Homepage = () => (
  <div className="homepage">
    <ImageIntro />
    <div className="centered">
      <SellingPoints />
    </div>
    <div className="presentation">
      <Image src={imgIntro} alt="Image d'introduction" size='medium' className="homepage__imgMelaine" />
      <Container text className="presentation__text">
          <Header as='h2'>A propos de Mélaine</Header>
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
        </div>
    <div className="actus">   
       <Icon name='chevron left' size='big' />
        <Image
          src={imgIntro}
          as='a'
          size='medium'
          href='https://grainedemagie.com/'
          target='_blank'
        />
        <Image
          src={imgIntro}
          as='a'
          size='medium'
          href='https://grainedemagie.com/'
          target='_blank'
        />
        <Image
          src={imgIntro}
          as='a'
          size='medium'
          href='https://grainedemagie.com/'
          target='_blank'
        />
       <Icon name='chevron right' size='big' />
    </div>
     <Input action="Je m'inscris à la newsletter" placeholder='Adresse Email' className="input__newsletter" />
  </div>
);

export default Homepage;
