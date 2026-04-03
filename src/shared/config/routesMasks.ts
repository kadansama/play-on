export const routesMasks = {
  main: { mask: '/', create: () => '/' },
  login: { mask: '/login', create: () => '/login' },
  signup: { mask: '/signup', create: () => '/signup' },
  movies: { mask: '/movies', create: () => '/movies' },
  series: { mask: '/series', create: () => '/series' },
  top: { mask: '/top', create: () => '/top' },

  profile: { mask: '/profile', create: () => '/profile' },
  profileSubscription: { mask: '/profile/subscription', create: () => '/profile/subscription' },
  profileNotice: { mask: '/profile/notice', create: () => '/profile/notice' },
  profileDownloaded: { mask: '/profile/downloaded', create: () => '/profile/downloaded' },
  profileDevices: { mask: '/profile/devices', create: () => '/profile/devices' },
  profileHelp: { mask: '/profile/help', create: () => '/profile/help' },
  profileSettings: { mask: '/profile/settings', create: () => '/profile/settings' },

  alreadyWatched: { mask: '/alreadyWatched', create: () => '/alreadyWatched' },
  like: { mask: '/like', create: () => '/like' },

  commingSoon: { mask: '/commingSoon', create: () => '/commingSoon' },
  filmAbout: { mask: '/filmAbout/:id', create: (id: number) => `/filmAbout/${id}`},

};