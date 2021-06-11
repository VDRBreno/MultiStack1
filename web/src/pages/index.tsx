import React from 'react';

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation';

function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title='Conheça os profissionais'
        subTitle='Preencha seu endereço e veja todos os profissionais da sua região'
      />

      <UserInformation 
        picture='https://github.com/VDRBreno.png'
        name='Breno Vitor'
        rating={4}
        description='Sorocaba'
      />
    </div>
  )
}

export default Home;
