import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import blog1 from 'src/assets/images/IllustrationsHomepage/pexels-victoria-emerson-6160288.jpg';
import blog2 from 'src/assets/images/IllustrationsHomepage/pexels-grawal-7233716.jpg';
import blog3 from 'src/assets/images/IllustrationsHomepage/pexels-tima-miroshnichenko-6508773.jpg';
import './styles.scss';

const MelaineActus = () => (
  <>
    <h2 className="centered">Les actus de Graine de Magie</h2>
    <div className="actus">   
      <Icon name='chevron left' size='big' />
      <Image
        src={blog1}
        as='a'
        size='medium'
        href='https://grainedemagie.com/'
        target='_blank'
      />
      <Image
        src={blog2}
        as='a'
        size='medium'
        href='https://grainedemagie.com/'
        target='_blank'
      />
      <Image
        src={blog3}
        as='a'
        size='medium'
        href='https://grainedemagie.com/'
        target='_blank'
      />
      <Icon name='chevron right' size='big' />
    </div>
  </>
);

export default MelaineActus;
