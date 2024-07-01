export default defineEventHandler((event) => {
  console.log('middleware:'+event.node.req.url)
  console.log('---------------------------------------')
})