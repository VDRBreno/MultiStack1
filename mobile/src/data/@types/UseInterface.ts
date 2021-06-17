export interface UserShortInterface {
  nome_completo: string;
  foto_usuario?: string;
  reputacao?: number;
  cidade: string;
}

export interface ApiServiceBuscaCepProps {
  diaristas: UserShortInterface[];
  quantidade_diaristas: number;
}