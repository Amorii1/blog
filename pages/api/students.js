
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const students=[
        { name: "John Doe" },
        { name: "omar osamah" },
        { name: "hasan aqeel" },
      ]
      res.end(JSON.stringify(students))
  }
  