const express = require('express');
const JavaScriptObfuscator = require('javascript-obfuscator');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/obfuscate', (req, res) => {
  const { code } = req.body;
  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    // Obfuscation options...
  });
  const obfuscatedCode = obfuscationResult.getObfuscatedCode();
  res.json({ obfuscatedCode });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
