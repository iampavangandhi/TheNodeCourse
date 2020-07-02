# Templating (EJS)

### Resource: [link1](https://robdodson.me/how-to-use-ejs-in-express/) and [link2](https://learn.co/lessons/using-ejs-in-express)
### Youtube Resource: [link](https://www.youtube.com/playlist?list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt)

## Template Engines

A template engine enables you **to use static template files in your application**. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

*Some popular template engines that work with Express are Pug, Mustache, and EJS.*

### Installation

```javascript
npm install ejs
```
 
### Features of EJS
- Features
- Control flow with <% %>
- Escaped output with <%= %> (escape function configurable)
- Unescaped raw output with <%- %>
- Newline-trim mode ('newline slurping') with -%> ending tag
- Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>
- Custom delimiters (e.g. [? ?] instead of <% %>)
- Includes
- Client-side support
- Static caching of intermediate JavaScript
- Static caching of templates
- Complies with the Express view system

### A Simple Example

```
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```
**Try EJS online at: [https://ionicabizau.github.io/ejs-playground/](https://ionicabizau.github.io/ejs-playground/).**

### Tags 

- <code><%</code> 'Scriptlet' tag, for control-flow, no output
- <code><%_</code> 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
- <code><%=</code> Outputs the value into the template (escaped)
- <code><%-</code> Outputs the unescaped value into the template
- <code><%\#</code> Comment tag, no execution, no output
- <code><%%</code> Outputs a literal '<%'
- <code>%%></code> Outputs a literal '%>'
- <code>%></code> Plain ending tag
- <code>-%></code> Trim-mode ('newline slurp') tag, trims following newline
- <code>_%></code> 'Whitespace Slurping' ending tag, removes all whitespace after it
  
### Includes

Includes either have to be an absolute path, or, if not, are assumed as relative to the template with the include call. For example if you are including ./views/user/show.ejs from ./views/users.ejs you would use <%- include('user/show') %>.

You must specify the filename option for the template with the include call unless you are using renderFile().

You'll likely want to use the raw output tag (<%-) with your include to avoid double-escaping the HTML output.

```javascript
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}) %>
  <% }); %>
</ul>
```
Includes are inserted at runtime, so you can use variables for the path in the include call (for example <%- include(somePath) %>). Variables in your top-level data object are available to all your includes, but local variables need to be passed down.

*NOTE: Include preprocessor directives (<% include user/show %>) are not supported in v3.0+.*

## Custom delimiters
Custom delimiters can be applied on a per-template basis, or globally:

```javascript
const ejs = require('ejs'),
      users = ['geddy', 'neil', 'alex'];
 
// Just one template
ejs.render('<p>[?= users.join(" | "); ?]</p>', {users: users}, {delimiter: '?', openDelimiter: '[', closeDelimiter: ']'});
// => '<p>geddy | neil | alex</p>'
 
// Or globally
ejs.delimiter = '?';
ejs.openDelimiter = '[';
ejs.closeDelimiter = ']';
ejs.render('<p>[?= users.join(" | "); ?]</p>', {users: users});
// => '<p>geddy | neil | alex</p>'
```

### Caching
EJS ships with a basic in-process cache for caching the intermediate JavaScript functions used to render templates. It's easy to plug in LRU caching using Node's lru-cache library:

```javascript
let ejs = require('ejs'),
    LRU = require('lru-cache');
ejs.cache = LRU(100); // LRU cache with 100-item limit
```

*If you want to clear the EJS cache, call ejs.clearCache. If you're using the LRU cache and need a different limit, simple reset ejs.cache to a new instance of the LRU.*

### Custom file loader
The default file loader is fs.readFileSync, if you want to customize it, you can set ejs.fileLoader.

```javascript
let ejs = require('ejs');
let myFileLoad = function (filePath) {
  return 'myFileLoad: ' + fs.readFileSync(filePath);
};
 
ejs.fileLoader = myFileLoad;
```

*With this feature, you can preprocess the template before reading it.*

### Layouts
EJS does not specifically support blocks, but layouts can be implemented by including headers and footers, like so:

```
<%- include('header') -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer') -%>
```
