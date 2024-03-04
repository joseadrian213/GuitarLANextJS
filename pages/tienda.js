import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css"; 
export default function Tienda({ guitarras }) {
  return (
    <Layout
      title={"Tienda"}
      description={
        "Tienda de virtual, venta de guitarras, instrumentos, GuitarLA"
      }
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}

        </div>
      </main>
    </Layout>
  );
}
// export async function getStaticProps() {//esta función se debe utilizar cuando la información no va cambiar de forma constante
//   const respuesta=await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras}=await respuesta.json()

//  return {
//   props:{//Siempre se deben de retornar props para evitar posibles errores
//     guitarras
//   }
//  }
// }
export async function getServerSideProps() {
  //esta función se debe utilizar cuando la información va cambiar de manera constante y se require la actualización
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      //Siempre se deben de retornar props para evitar posibles errores
      guitarras,
    },
  };
}
