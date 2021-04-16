import React from 'react'
import { Image, List, Icon } from 'semantic-ui-react'

const SocialMenu = () => (
    <List horizontal className="footer__social">
    <List.Item>
    <Icon name='facebook f' size='big' />

    </List.Item>
    <List.Item>
      <Icon name='instagram' size='big' />
    </List.Item>
    <List.Item>
        <Icon name='twitter' size='big' />
    </List.Item>
  </List>
)

export default SocialMenu;
