import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner, Heading, MediumCard, Pagination, Slider, SmallCard } from '../components';
import { getMovies } from '../services/moviesService';
import { getStories } from '../services/storiesService';
import { getArticleEnd, getArticleStart, getArticleSuccess } from '../slice/article';
import { getMoviesEnd, getMoviesStart, getMoviesSuccess } from '../slice/movies';
import { getBooksStart, getBooksEnd, getBooksSuccess } from '../slice/books';
import { getBooks } from '../services/booksService';

export default function Home() {
  const {
    article: { articles },
    category: { currentCategory },
    movies: { movies },
    books: { books }
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPerPage] = useState(6);

  // for pagination
  const indexOfLast = currentPage * currentPerPage;
  const indexOfFirst = indexOfLast - currentPerPage;
  const currentData = movies.slice(indexOfFirst, indexOfLast);
  const nPages = Math.ceil(movies.length / currentPerPage);


  // get the article
  const getHomeArticle = useCallback(async () => {
    dispatch(getArticleStart());
    try {
      const response = await getStories(currentCategory)
      dispatch(getArticleSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(getArticleEnd());
    }
  }, [currentCategory]);

  // get the movies
  const getHomeMovies = useCallback(async () => {
    dispatch(getMoviesStart())
    try {
      const response = await getMovies();
      dispatch(getMoviesSuccess(response))
    } catch (error) {
      console.log(error);
      dispatch(getMoviesEnd(error));
    }
  }, [movies]);

  // get the Books
  const getHomeBooks = useCallback(async () => {
    dispatch(getBooksStart())
    try {
      const response = await getBooks()
      dispatch(getBooksSuccess(response))
    } catch (error) {
      dispatch(getBooksEnd(error.message))
    }
  }, []);

  // maps all data of movies 
  const mapMovies = useMemo(() => {
    return currentData.map((movie, index) =>
      <MediumCard
        info={movie}
        id={index}
        key={index}
      />
    );
  });



  useEffect(() => {

    getHomeArticle();
    getHomeMovies();
    getHomeBooks();

  }, [currentCategory]);

  return (
    <>
      {/* banner with top news */}
      <div className='flex justify-between items-center flex-wrap py-[30px]'>
        <div className='lg:w-2/4 w-4/4 '>
          <Banner info={articles[0]} />
        </div>
        <div className='top__news lg:w-2/4 w-4/4 lg:py-0 py-[20px] lg:pl-[20px]'>
          {/* heading */}
          <Heading>
            Top News
          </Heading>
          {/* cards for  */}
          {
            articles.slice(1, 4).map((infoItem, index) => {
              return (
                <SmallCard key={index} info={infoItem} id={index} />
              )
            })
          }

        </div>
      </div>
      {/* top Movies */}
      <div className='bg-gray-900 p-[20px]'>
        <Heading>
          Top Movies
        </Heading>

        {/* cards */}
        <div className='flex flex-wrap py-3'>
          {mapMovies}
        </div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </div>
      {/* top Books */}
      <div className='books py-[20px]'>
        <div className="books-heading pb-[20px]">
          <Heading>
            Top Books
          </Heading>
        </div>
        <div className="books-slider">
          <Slider info={ books }/>
        </div>
      </div>

    </>
  )
}
