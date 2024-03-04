import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css"
import { formatearFecha,extraerContenido } from "../../utils/helpers";
export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
  const descripcionPost=extraerContenido(contenido); 
  return (
    <Layout
    title={titulo}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen blog ${titulo}`}
          width={1000}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
    
            {/* codigo para obtener la descripcion completa  */}
       {descripcionPost.map((item, index) => (
            <p className={styles.texto} key={index}>
              {item.text}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
}
export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
}
