<?php
$servidorBD = '127.0.0.1';
$usuarioBD = 'estudos';
$senhaBD = 'estudos@1';
$bancoDados = 'fabio_ar_condicionado';
$tabelaClienteFisico = 'cliente_fisico';
$tabelaClientejuridico = 'cliente_juridico';
$tabelaOcorrencias = 'ocorrencias';
$tabelaLogin = 'login';

/**
 * Conexão com o banco de dados
 */
$conexao = new mysqli($servidorBD, $usuarioBD, $senhaBD, $bancoDados);

if($conexao->connect_error)
{
  echo 'Não foi possível conectar ao banco de dados';
  exit();
}

/**
 *  Busca os dados conforme comandos SQL inseridos pela variável $entradaSQL
 * @param $entradaSQL - array de entrada dos comandos SQL
 * @return $dados - array de saída de dados do banco de dados
 * */
function buscarDadosBD($entradaSQL)
{
  global $conexao;
  $resultadoBusca = mysqli_query($conexao, $entradaSQL);

  $dados = array();

  while($dado = mysqli_fetch_assoc($resultadoBusca))
  {
    $dados[] = $dado;
  }

  return $dados;
}

/**
 * Lê e retorna o nome de usuário e o valor da senha da tabela login
 * */
function lerSenhaBD()
{
  global $conexao;
  global $tabelaLogin;
  $comandoSQL = "SELECT * FROM {$tabelaLogin}";
  $dados = mysqli_query($conexao, $comandoSQL);

  $loginSenha = array();

  while($dado = mysqli_fetch_assoc($dados))
  {
    $loginSenha[] = $dado;
  }

  return $loginSenha;
}

/**
 * Grava os dados conforme a entrada de comando SQL pela variável $entradaSQL
 * @param $dadosCadastro - array com dados para cadastrar
 * */
function gravarDadosBD($dadosCadastro)
{
  global $conexao;
  global $tabelaOcorrencias;
  global $tabelaClienteFisico;

  $idOcorrencias = 0;

/**
*Referencia para inserção em banco de dados:
*https://pt.stackoverflow.com/questions/110140/*usando-last-insert-id-sera-que-e-credivel-caso-varios-usuarios-insiram-ao-me
*/

  $comandoSQL = "INSERT INTO {$tabelaOcorrencias}
  (
    /*Nome das colunas que serão preenchidas*/
    servico_ocorrencias,
    data_ocorrencias,
    atendida_ocorrencias,
    data_atendimento,
    mensagem_ocorrencias
  )
  VALUES
  (
     /*Valores da tabela ocorrencia */
    '{$dadosCadastro ['servico_ocorrencias']}',
    '{$dadosCadastro['data_ocorrencias']}',
    '{$dadosCadastro['atendida_ocorrencias']}',
    '{$dadosCadastro['data_atendimento']}',
    '{$dadosCadastro['mensagem_ocorrencias']}'
  );

  SELECT LAST_INSERT_ID() into @idOcorrencias; /*id da última entrada no banco de dados*/

  INSERT INTO {$tabelaClienteFisico}
  (
    /*Nome das colunas que serão preenchidas*/
    nome_cliente_fisico,
    sobrenome_cliente_fisico,
    rua_cliente_fisico,
    bairro_cliente_fisico,
    numero_cliente_fisico,
    cidade_cliente_fisico,
    estado_cliente_fisico,
    telefone_cliente_fisico,
    whatsapp_cliente_fisico,
    e_mail_cliente_fisico,
    preferencia_cliente_fisico,
    fk_ocorrencia
  )
  VALUES
  (
    /*Valores da tabela cliente_fisico */
    '{$dadosCadastro['nome_cliente_fisico']}',
    '{$dadosCadastro['sobrenome_cliente_fisico']}',
    '{$dadosCadastro['rua_cliente_fisico']}',
    '{$dadosCadastro['bairro_cliente_fisico']}',
    '{$dadosCadastro['numero_cliente_fisico']}',
    '{$dadosCadastro['cidade_cliente_fisico']}',
    '{$dadosCadastro['estado_cliente_fisico']}',
    '{$dadosCadastro['telefone_cliente_fisico']}',
    '{$dadosCadastro['whatsapp_cliente_fisico']}',
    '{$dadosCadastro['e_mail_cliente_fisico']}',
    '{$dadosCadastro['preferencia_cliente_fisico']}',
    @idOcorrencias /*id da tabela ocorrencia é a chave estrangeira na tabela cliente_fisico*/

  )";

  mysqli_query($conexao, $comandoSQL); // Grava dados na tabela ocorrencias

}


//print_r(lerSenhaBD());

foreach(lerSenhaBD() as $valor)
{
  echo $valor['usuario'], "\n <br>";
  echo $valor['senha'];
}


?>
