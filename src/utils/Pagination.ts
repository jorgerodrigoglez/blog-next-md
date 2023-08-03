
const isNumber = (value: string ) => /^\d+$/.test(value);

export const getPagination = <T>( items: T[] , postsPerPage = 4 , currentPage = '1') => {

  // validar que el parametro (params nunber) es un numero
  // si no es un numero salta error 404
  
  if( !isNumber( currentPage )){
    throw new Error('El parámetro no es un número');
  }

  // pagination - posts a mostrar por pagina
  const totalPosts = items.length;
  let totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const currentPageInt = parseInt(currentPage, 10);

  // validar que no se intriduce un parametro mayor de paginas de las que existen
  // si da error lo manda al catch de pages.tsx/[number]
  if( currentPageInt > totalPages ){
    throw new Error(`La página ${currentPageInt} no exíste`);
  }
  
  // pagination - posts a mostrar segun la pagina
  //const currentPage = parseInt(params.number);
  const offset = (currentPageInt - 1) * postsPerPage;
  const currentPosts = items.slice(offset, offset + postsPerPage );

    return{
        totalPages,
        currentPosts
    }

}