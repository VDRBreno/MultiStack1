import { useState, useMemo } from 'react';

import { UserShortInterface, ApiServiceBuscaCepProps } from 'data/@types/UseInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState('');  const [erro, setErro] = useState('');
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diaristas, setDiaristas] = useState<UserShortInterface[]>([]);
  const [diaristasRestantes, setDiaristasRestantes] = useState(0);

  const cepValido = useMemo(() => {
    return ValidationService.cep(cep)
  }, [cep]);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro('');

    try {

      const { data } = await ApiService.get<ApiServiceBuscaCepProps>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);

    } catch(err) {
      setErro('CEP não encontrado');
    }
    
    setBuscaFeita(true);
    setCarregando(false);
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}