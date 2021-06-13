import React from 'react';

import { Button, Typography, Container, CircularProgress } from '@material-ui/core';

import useIndex from 'data/hooks/pages/useIndex';

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask';

import { FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer } from 'ui/styles/pages/index.style';

function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title='Conheça os profissionais'
        subTitle='Preencha seu endereço e veja todos os profissionais da sua região'
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            label='Digite seu CEP'
            fullWidth
            mask='99.999-999'
            variant='outlined'
            value={cep}
            onChange={e => setCep(e.target.value)}
          />
          {erro && <Typography color='error'>{erro}</Typography>}
          <Button 
            variant='contained'
            color='secondary'
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando
              ? <CircularProgress size={20} />
              : 'Buscar'
            }
          </Button>
        </FormElementsContainer>

        {buscaFeita && ( 
          diaristas.length > 0
            ? (
              <ProfissionaisPaper>
                <ProfissionaisContainer>
                  {diaristas.map((diarista, index) => (
                    <UserInformation
                      key={index}
                      picture={diarista.foto_usuario}
                      name={diarista.nome_completo}
                      rating={diarista.reputacao}
                      description={diarista.cidade}
                    />
                  ))}
                </ProfissionaisContainer>

                {diaristasRestantes > 0 && (
                  <Container sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography>
                      ... e mais {diaristasRestantes} {diaristasRestantes > 1 ? 'profissionais atendem' : 'profissional atende'} ao seu endereço.
                    </Typography>

                    <Button
                      variant='contained'
                      color='secondary'
                      sx={{ mt: 5 }}
                    >
                      Contratar um profissional
                    </Button>
                  </Container>
                )}
              </ProfissionaisPaper>
            )
            : <Typography align='center' color='textPrimary'>Ainda não temos nenhuma diarista disponível em sua região.</Typography>
          )
        }
      </Container>

    </div>
  )
}

export default Home;
