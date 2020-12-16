import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followpage} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}
        <h1>Gabriel Carmo</h1>
        <h2>@gabrielcarmo-s</h2>

        <p>
          Developer at <a href="https://github.com/GabrielCarmo-S">Gabriel Carmo</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Bauru, São Paulo.
          </li>
          <li>
            <CakeIcon />
             Nascido em 04 de agosto de 2020.
          </li>
        </ul>

        <Followpage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followpage>
      </ProfileData>
    </Container>

  );
}

export default ProfilePage;