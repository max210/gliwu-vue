let host = ''

if (process.env.NODE_ENV === "development") {
  host = 'http://localhost:3000/api'
} else {
  host = 'http://www.gliwu.cn:3000/api'
}

export default {
  host
}
