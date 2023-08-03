import Link from 'next/link';

interface Props {
    currentPage?: number;
    totalPages?: number;
}

export const PaginationPosts = ({ currentPage = 1 , totalPages = 1 } : Props) => {


  return (
    <div className="text-center">
        {/*<Link 
            href={`/page/${currentPage - 1}`}
            className={`${
                currentPage === 1
                    ? "pointer-events-none"
                    : "text-black bg-cyan-500 p-1 font-bold"
              }`}
        >
            <button disabled>Prev</button>
            
            </Link>*/}

        {currentPage === 1 ? (
            <button
                disabled
                className="cursor-not-allowed"
            >
            Prev
            </button>
        ) : (
            <Link
                href={`/page/${currentPage - 1}`}
                className='text-black bg-cyan-500 p-1 font-bold"'
            >
                Prev
            </Link>
         )}

        {
            Array.from({ length: totalPages }).map(( _, index ) => (
                <Link 
                    href={`/page/${index + 1}`} 
                    key={index}
                    className={`${
                        currentPage === index + 1
                          ? "pointer-events-none"
                          : "text-black bg-cyan-500 p-1 font-bold"
                      }`}
                >
                    { index + 1 }
                </Link>
            ))
        }
        
        {/*<Link 
            href={`/page/${currentPage + 1}`}
            className={`${
                currentPage === totalPages
                    ? "pointer-events-none p-1"
                    : "text-black bg-cyan-500 font-bold"
              }`}
        >
            Next
            </Link>*/}

        {currentPage === totalPages ? (
            <button
            disabled
            className="cursor-not-allowed"
            >
                Next
            </button>
        ) : (
        <Link
            href={`/page/${currentPage + 1}`}
            className='text-black bg-cyan-500 font-bold'
        >
          Next
        </Link>
      )}
    </div>
  )
}
