import Footer from "@/components/footer/footer";
import Header from "../../components/header/header";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id={styles.banner}>
          <div className="banner_container">
            <h1 id={styles.titulo_banner}>Bem-Vindo ao VH Burguer</h1>
            <div id={styles.img_banner}>
              <img
                src="../imgs/foto_de_hamburgueres.png"
                alt="logo hamburguer"
              />
            </div>
            <div id={styles.botoes_banner}>
              <div id={styles.botao_atendente}>
                <button>Chamar atendente</button>
              </div>
              <div id={styles.botao_cardapio}>
                <button>Ver cardápio</button>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.destaques}>
          <div id={styles.imagem_a}>
            <img src="../imgs/mais_pedidos.png" alt="imagem dos mais pedidos" />
            <div id={styles.textos_imagem_a}>
              <h3>Os queridinhos da galera</h3>
              <h2>Mais Pedidos</h2>
            </div>
          </div>
          <div id={styles.imagens_duplas}>
            <div id={styles.imagem_cima}>
              <img src="../imgs/muito_bacon.png" alt="a lot of bacon" />
              <h3>Lanches com</h3>
              <h2>Muito Bacon</h2>
            </div>
            <div id={styles.imagem_baixo}>
              <img
                src="../imgs/super_combos.png"
                alt="imagem dos super combos"
              />
              <h3>Se tiver muita fome</h3>
              <h2>Super Combos</h2>
            </div>
          </div>
        </section>
        <section id={styles.cardapio}>
          <h1>Cardápio</h1>
        </section>
        <section id={styles.unidade}></section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
