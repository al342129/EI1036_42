<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>TEMPLATE</title>
<script>
function showHelp(help) {
document.getElementById('help').innerHTML = help;
}
function setupHelp() {
var helpText = [
{'id': 'email', 'help': 'Dirección de correo electrónico'},
{'id': 'name', 'help': 'Nombre completo'},
{'id': 'age', 'help': 'Edad (debes tener más de 16 años)'} ];
for (var i = 0 ; i < helpText.length; i++) {
var item = helpText[i];
document.getElementById(item.id).addEventListener("focus",
function() { showHelp(item.help)});
}}
setupHelp();
</script>
</head>
<body>
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
</body>
</html>