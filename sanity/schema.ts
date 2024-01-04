import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import successStories from './schemas/successStories'
import testimonials from './schemas/testimonials'
import teams from './schemas/teams'
import faqs from './schemas/faqs'
import services from './schemas/services'
import contact from './schemas/contact'
import works from './schemas/works'
import talents from './schemas/talents'
import instructors from './schemas/instructors'
import events from './schemas/events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  works,
  talents,
  instructors,
  about,
  teams,
  faqs,
  services,
  successStories,
  testimonials,
  contact,
  events,
  ],
}
