const schema = {
  // default properties
  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests']
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: () => {
      return new Date()
    }
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: 'user: User'
  },

  // custom properties

  name: {
    label: 'Name',
    type: String,
    optional: true,
    viewableBy: ['guests']
  },
  year: {
    label: 'Year',
    type: String,
    optional: true,
    viewableBy: ['guests']
  },
  review: {
    label: 'Review',
    type: String,
    optional: true,
    viewableBy: ['guests']
  }
}

export default schema
