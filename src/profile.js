import qs from 'query-string'

export const loadProfileFromQueryString = (queryString) => {
  const parsedQueryString = qs.parse(queryString)

  return {
    career: parsedQueryString.career,
    city: parsedQueryString.city,
    education: parsedQueryString.education,
    experience: parsedQueryString.experience,
    language: parsedQueryString.language,
    languageSkills: parsedQueryString.languageSkills,
    ref: parsedQueryString.ref,
    skills: parsedQueryString.skills,
  }
}
