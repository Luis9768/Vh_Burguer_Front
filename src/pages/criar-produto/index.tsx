import Sub_Header from "@/components/sub-header/sub-header";
import styles from "@/pages/criar-produto/criar-produto.module.css";

const CriarProduto = () => {
  return (
    <>
      <Sub_Header />
      <div id={styles.criar_produto_container}>
        <div id="titulo-detalhes-produto" className={styles.criar_titulo}>
          <h1>Criar Produto</h1>
        </div>

        <div className={styles.nome_produto_container}>
          <label className={styles.nome_produto}>Nome do produto</label>
          <input
            type="text"
            placeholder="DBB Especial"
            className={styles.input}
          />
        </div>
        <div className={styles.descricao_container}>
          <label className={styles.descricao}>Descrição</label>
          <input
            type="text"
            placeholder="Hamburguer com molho barbecue defumado com cebla caramelizada."
            className={styles.caixa_descricao}
          />
        </div>
        <div className={styles.preco_container}>
          <label className={styles.preco}>Preço(R$)</label>
          <input type="text" placeholder="40,00" className={styles.input} />
        </div>
        <div className={styles.categoria_container}>
          <label className={styles.categoria}>Categoria</label>
          <input
            type="text"
            placeholder="Selecione a categoria"
            className={styles.input}
          />
          <p>Adicionar categoria</p>
        </div>
        <div className={styles.img_container}>
          <label className={styles.img}>URL da imagem</label>
          <input
            type="text"
            placeholder="https://unsplash.com/pt-br/fotografias/chesseburguer-de-"
            className={styles.input}
          />
        </div>
        <button>Salvar</button>
      </div>
    </>
  );
};

export default CriarProduto;
