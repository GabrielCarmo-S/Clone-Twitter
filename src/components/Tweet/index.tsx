import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon, Dot} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Gabriel Carmo</strong>
            <span>@gabrielcs</span>
            <Dot />
            <time>04 Ago</time>
          </Header>

          <Description>DFSDFSDFSDFSDF</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;