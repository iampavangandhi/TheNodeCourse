# Validation and Sanitization

### Resource: [link](https://express-validator.github.io/docs/sanitization.html)

Sometimes, receiving input in a HTTP request isn't only about making sure that the data is in the right format, but also that it is free of noise.<br />
So here we will get to know some sanitizers that can be used to take care of the data that comes in.

The <code>express-validator</code> package is use to validate input can also conveniently used to perform sanitization.

### Let's begin

Say you have a POST endpoint that accepts the name, email and age parameters:

```javascript
const express = require('express')
const app = express()

app.use(express.json())

app.post('/form', (req, res) => {
  const name  = req.body.name
  const email = req.body.email
  const age   = req.body.age
})
```

You might validate it using:

```javascript
const express = require('express')
const app = express()

app.use(express.json())

app.post('/form', [
  check('name').isLength({ min: 3 }),
  check('email').isEmail(),
  check('age').isNumeric()
], (req, res) => {
  const name  = req.body.name
  const email = req.body.email
  const age   = req.body.age
})
```

You can add sanitization by piping the sanitization methods after the validation ones:

```javascript
app.post('/form', [
  check('name').isLength({ min: 3 }).trim().escape(),
  check('email').isEmail().normalizeEmail(),
  check('age').isNumeric().trim().escape()
], (req, res) => {
  //...
})
```

Here are the methods used above:

- **trim()**  trims characters (whitespace by default) at the beginning and at the end of a string
- **escape()** replaces <, >, &, ', " and / with their corresponding HTML entities
- **normalizeEmail()** canonicalizes an email address. Accepts several options to lowercase email addresses or subaddresses (e.g. flavio+newsletters@gmail.com)

### Other sanitization methods:

- **blacklist()** remove characters that appear in the blacklist
- **whitelist()** remove characters that do not appear in the whitelist
- **unescape()** replaces HTML encoded entities with <, >, &, ', " and /
- **ltrim()** like trim(), but only trims characters at the start of the string
- **rtrim()** like trim(), but only trims characters at the end of the string
- **stripLow()** remove ASCII control characters, which are normally invisible

### Force conversion to a format:

- **toBoolean()** convert the input string to a boolean. Everything except for ‘0’, ‘false’ and “ returns true. In strict mode only ‘1’ and ‘true’ return true
- **toDate()** convert the input string to a date, or null if the input is not a date
- **toFloat()** convert the input string to a float, or NaN if the input is not a float
- **toInt()** convert the input string to an integer, or NaN if the input is not an integer
Like with custom validators, you can create a custom sanitizer.

In the callback function you just return the sanitized value:

```javascript
const sanitizeValue = value => {
  //sanitize...
}

app.post('/form', [
  check('value').customSanitizer(value => {
    return sanitizeValue(value)
  }),
], (req, res) => {
  const value  = req.body.value
})
```
