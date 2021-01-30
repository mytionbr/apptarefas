module.exports = {
    port: 3000 || process.env.PORT,
    executionMessage: function() {console.log(`Server is listening on PORT: ${this.port}`)}
} 