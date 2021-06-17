import React from 'react';
import { ScrollView } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import { useTheme } from '@emotion/react';

import useIndex from 'data/hooks/pages/useIndex';
import useEncontrarDiarista from 'data/hooks/pages/useEncontrarDiariasta.page.mobile';

import { 
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer
} from '@styles/pages/encontrar-diarista.styled';

import PageTitle from 'ui/components/data-display/PageTitle';
import TextInput from 'ui/components/inputs/TextInput';
import Button from 'ui/components/inputs/Button';
import UserInformation from 'ui/components/data-display/UserInformation';
import { useEffect } from 'react';

const EncontrarDiaristas: React.FC = () => {

  const { colors } = useTheme();

  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  } = useIndex();

  const { cepAutomatico } = useEncontrarDiarista();

  useEffect(() => {
    if(cepAutomatico && !cep) {
      setCep(cepAutomatico);
      buscarProfissionais(cepAutomatico);
    }
  }, [cepAutomatico]);

  return (
    <ScrollView>
      <PageTitle
        title='Conheça os profissionais'
        subtitle='Preencha seu endereço e veja todos os profissionais da sua região'
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type='custom'
          options={{
            mask: '99.999-999'
          }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP'
          }}
        />

        {erro ? <ErrorText>{erro}</ErrorText> : null}

        <Button 
          mode='contained'
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepValido || carregando}
          onPress={() => buscarProfissionais(cep)}
          loading={carregando}
        >
          Buscar
        </Button>
      </FormContainer>

      {buscaFeita && (
        diaristas.length > 0 
          ? (
            <ResponseContainer>

              {diaristas.map((diarista, index) => (
                <UserInformation
                  key={index}
                  name={diarista.nome_completo}
                  rating={diarista.reputacao || 0}
                  picture={diarista.foto_usuario || ''}
                  description={diarista.cidade}
                  darker={index % 2 == 1}
                />
              ))}
      
              {diaristasRestantes > 0 && (
                <TextContainer>
                  ... e mais {diaristasRestantes} {diaristasRestantes>1 ? 'profissionais atendem' : 'profissional atende'} ao seu endereço
                </TextContainer>
              )}
      
              <Button color={colors.accent} mode='contained'>
                Contratar um profissional
              </Button>
            </ResponseContainer>
          )
          : (
            <TextContainer>
              Ainda não temos nenhuma diarista disponível em sua região
            </TextContainer>
          )
      )}
    </ScrollView>
  );
}

export default EncontrarDiaristas;