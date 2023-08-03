//import ButtonLink from "@/components/ButtonLink";
import { ButtonLink } from "@/componets/ButtonLinkjrg";

export const metadata = {
  title: "Home page - Create Next App",
  description: "Generated by create next app",
};

const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold uppercase">
        Jorge RG
      </h1>
      <p className="mb-8 text-center text-gray-700">Hola ... </p>
      <p className="mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis
        impedit eum quas reprehenderit, blanditiis eveniet iure aliquam fugit
        minus, illum quos soluta. Architecto quasi perspiciatis eos rerum vero
        non?
      </p>

      <div className="text-center">
        <ButtonLink href="/blog">Ir al blog</ButtonLink>
      </div>
    </>
  )
}

export default Home;

