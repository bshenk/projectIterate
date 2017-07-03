import { createCollection } from 'meteor/vulcan:core'
import schema from './schema'
import resolvers from './resolvers'
import './fragments'

const Movies = createCollection({
  collectionName: 'Movies',
  typeName: 'Movie',
  schema,
  resolvers
})

export default Movies
