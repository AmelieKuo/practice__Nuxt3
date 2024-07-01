module.exports = {
  apps: [{
    name: 'Nuxt3-Github'
    script: './server/index.mjs',
    instances: '2',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3000
  }]
}