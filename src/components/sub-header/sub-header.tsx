import styles from "@/components/sub-header/sub-header.module.css"
import Link from "next/link";

const Sub_Header = () => {
    return(
        <>
            <div id={styles.sub_container}>
                <img src="../imgs/Logo_footer.svg" alt="imagem logo" />
                <Link className={styles.botao_voltar} href="/home" >Voltar</Link>
            </div>
        </>
    )
}
export default Sub_Header;