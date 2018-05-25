let host = ''

if (process.env.NODE_ENV === "development") {
  host = 'http://localhost:3000/api'
} else {
  host = 'https://www.gliwu.cn:3000/api'
}

export default {
  host
}
