import Image from 'next/image'
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"
export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porttitor urna enim. Aliquam eget dolor in lorem aliquam euismod.
              Etiam tempor sed massa vitae porta. Sed a felis posuere, tincidunt
              ante a, elementum purus. In euismod fermentum velit ac consequat.
              Phasellus accumsan tincidunt elit, maximus semper nunc dapibus a.
              Quisque elementum enim quis condimentum dictum.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vestibulum ut ex fermentum, consectetur
              nibh non, aliquam enim. Ut lobortis purus quis orci egestas, sit
              amet iaculis sem aliquet. Praesent et vestibulum ipsum. Fusce
              pretium dignissim lorem nec facilisis. Fusce mollis ut ipsum in
              vestibulum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
