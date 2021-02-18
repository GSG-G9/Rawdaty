import { object, number, string } from 'yup';

const kindergartenSearchSchema = object({
  q: string().nullable(),
  minPrice: number().positive().nullable(),
  maxPrice: number().positive().nullable(),
  locationId: number().positive().nullable(),
});

export default kindergartenSearchSchema;
