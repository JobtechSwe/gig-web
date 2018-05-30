import qs from 'query-string'

const profile = {
  get() {
    return this.hasProfileInQueryString()
      ? this.getProfileFromQueryString()
      : this.getProfileFromLocalStorage()
  },

  hasProfileInQueryString() {
    const queryString = qs.parse(window.location.search)
    return !!queryString.ref
  },

  getProfileFromLocalStorage() {
    try {
      return JSON.parse(window.localStorage.getItem('gig_profile'))
    } catch (e) {
      return {}
    }
  },

  storeProfileInLocalStorage(profile) {
    return window.localStorage.setItem('gig_profile', JSON.stringify(profile))
  },

  getProfileFromQueryString() {
    const queryString = qs.parse(window.location.search)

    const profile = {
      career: queryString.career,
      city: queryString.city,
      education: queryString.education,
      experience: queryString.experience,
      language: queryString.language,
      languageSkills: queryString.languageSkills,
      ref: queryString.ref,
      skills: queryString.skills,
    }

    this.storeProfileInLocalStorage(profile)
    this.clearQueryString()

    return profile
  },

  clearQueryString() {
    const withoutQueryString = window.location.protocol + "//" + window.location.host + window.location.pathname
    window.history.pushState({ path: withoutQueryString }, '', withoutQueryString)
  },

  clear() {
    return window.localStorage.setItem('gig_profile', {})
  }
}

export default profile
