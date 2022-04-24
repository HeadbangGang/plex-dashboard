module.exports = [{
  title: 'Media Management',
  urls: [{
    title: 'Radarr',
    url: '/radarr',
    requiresAuth: true
  }, {
    title: 'Sonarr',
    url: '/sonarr',
    requiresAuth: true
  }, {
    title: 'Transmission',
    url: '/transmission/web/',
    requiresAuth: false
  }, {
    title: 'Ombi',
    url: '/ombi',
    requiresAuth: false
  }, {
    title: 'Plex',
    url: '/web/index.html',
    requiresAuth: false
  }]
}, {
  title: 'Monitoring',
  urls: [{
    title: 'Tautulli',
    url: '/tautulli/home',
    requiresAuth: false
  }, {
    title: 'Portainer',
    url: '/portainer/#/dashboard',
    requiresAuth: false
  }]
}]
