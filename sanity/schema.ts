import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import successStories from './schemas/successStories'
import testimonials from './schemas/testimonials'
import team from './schemas/team'
import faqs from './schemas/faqs'
import services from './schemas/services'
import contact from './schemas/contact'
import works from './schemas/works'
import talents from './schemas/talents'
import instructors from './schemas/instructors'
import schedule from './schemas/schedule'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  works,
  talents,
  instructors,
  about,
  team,
  faqs,
  services,
  successStories,
  testimonials,
  contact,
  schedule,
  ],
}
