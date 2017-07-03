import { addRoute } from 'meteor/vulcan:core'
import MoviesList from '../components/movies/MoviesList'

addRoute({ name: 'movies', path: '/', component: MoviesList })
