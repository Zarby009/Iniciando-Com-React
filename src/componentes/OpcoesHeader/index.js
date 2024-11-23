const opcoesLista = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {opcoesLista.map(opcao =>
        <li>
          {opcao.toUpperCase()}
        </li>
      )}
    </ul>
  );
}
export default OpcoesHeader;
