import { Container } from "@mui/material";
import Avaliacao from "../../Avaliacao";
import Botao from "../../Botao";
import Grafico from "../../Grafico";
import Rodape from "../../Rodape";
import Subtitulo from "../../Subtitulo";
import Tabela from "../../Tabela";
import Titulo from "../../Titulo";
import Cabecalho from "../../Cabecalho";
import useDadosProfissional from "../../../useDadosProfissional";
import useDadosConsulta from "../../../useDadosConsulta";

export function Dashboard() {
 const { dados: consultas, erro: consultasErro } = useDadosConsulta();
 const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

 if (consultasErro || profissionaisErro) {
   console.log("Ocorreu um erro na requisição")
 }


 return (
  <>
  <Cabecalho />
  <Container>
    <Titulo>Área Administrativa</Titulo>
    <Botao>Cadastrar especialista</Botao>
    <Titulo imagem="consulta">Consultas do Dia</Titulo>
    <Tabela consultas={consultas} />
    <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
    <Subtitulo>Dezembro/22</Subtitulo>
    <Grafico consultas={consultas} profissionais={profissionais} />
    <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
    <Avaliacao profissionais={profissionais} />
  </Container>
  <Rodape />
</>

 )
}