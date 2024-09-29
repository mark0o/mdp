const css = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

:root {
  --main-colour: #1a73e8;
}

/* ###########  BEGINING OF PRSIM CSS  ########### */

@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
.space-mono-regular {
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-style: normal;
}

.space-mono-bold {
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-style: normal;
}

.space-mono-regular-italic {
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-style: italic;
}

.space-mono-bold-italic {
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-style: italic;
}

/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+armasm+arturo+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+awk+bash+basic+batch+bbcode+bbj+bicep+birb+bison+bnf+bqn+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+cilkc+cilkcpp+clojure+cmake+cobol+coffeescript+concurnas+csp+cooklang+coq+crystal+css-extras+csv+cue+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gettext+gherkin+git+glsl+gn+linker-script+go+go-module+gradle+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+mata+matlab+maxscript+mel+mermaid+metafont+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+odin+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plant-uml+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rescript+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+stata+iecst+stylus+supercollider+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uorazor+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wgsl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig */
code[class*="language-"],
pre[class*="language-"] {
  font-variant-ligatures: none;
  color: #fff;
  background: 0 0;
  font-family: "Space Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  white-space: pre-wrap;
}
pre[class*="language-"] {
  margin: 0.5em 0;
  overflow: auto;
  white-space: pre-wrap;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #101010;
  white-space: pre-wrap;
}
:not(pre) > code[mdp-display="block"][class*="language-"] {
  padding: 1em;
  border-radius: 0.3em;
  white-space: pre-wrap;
}
:not(pre) > code[mdp-display="inline"][class*="language-"] {
  padding: 0.5em;
  border-radius: 0.3em;
  margin-block: 0.5em;
  white-space: pre-wrap;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #999;
}
.token.punctuation {
  color: #ccc;
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #1c74e9;
}
.token.function-name {
  color: #e92a1c;
}
.token.boolean,
.token.function,
.token.number {
  color: #e9911c;
}
.token.class-name,
.token.constant,
.token.property,
.token.symbol {
  color: #dbe91c;
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #2a1ce9;
}
.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #e91c74;
}
.token.entity,
.token.operator,
.token.url {
  color: #2a1ce9;
}
.token.bold,
.token.important {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.token.inserted {
  color: #74e91c;
}

/* #############  END OF PRSIM CSS  ############## */

body {
  color: #fff;
  font-family: "Inter", sans-serif;
  --dot-bg: #151515;
  --dot-color: #242424;
  --dot-size: 2px;
  --dot-space: 22px;
  background: linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    var(--dot-color);
}

input,
select,
option {
  all: unset;
  margin-block: 4px;
  background-color: #202020;
  padding: 4px;
  padding-inline: 8px;
  border-radius: 16px;
}

.input-group {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.input {
  font-weight: 800;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: calc(100% - 2rem);
  display: flex;
}

.user-label {
  font-weight: 800;
  position: absolute;
  left: 15px;
  top: 4px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(0.75rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid,
#minutes {
  outline: none;
  border: 1.5px solid var(--main-colour);
}

.input:focus ~ label,
input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #151515;
  padding: 0 0.2em;
  color: var(--main-colour);
}

input::-ms-reveal {
  filter: invert(100%) drop-shadow(0px 0px 1px white);
  font-weight: 900;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  all: unset;
  font-weight: 800;
  cursor: pointer;
  background-color: var(--main-colour);
  margin-top: 8px;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: 150ms;
  display: block;
}

button[mdp-position="left"] {
  margin-right: auto;
  margin-left: 0px;
}

button[mdp-position="middle"] {
  margin-left: auto;
  margin-right: auto;
}

button[mdp-position="right"] {
  margin-left: auto;
  margin-right: 0px;
}

button[mdp-position="none"] {
  margin-left: none;
  margin-right: none;
}

button:active {
  filter: brightness(80%);
}

h1[mdp-position="left"],
h2[mdp-position="left"],
h3[mdp-position="left"],
h4[mdp-position="left"],
h5[mdp-position="left"],
h6[mdp-position="left"] {
  text-align: left;
}
h1[mdp-position="middle"],
h2[mdp-position="middle"],
h3[mdp-position="middle"],
h4[mdp-position="middle"],
h5[mdp-position="middle"],
h6[mdp-position="middle"] {
  text-align: center;
}
h1[mdp-position="right"],
h2[mdp-position="right"],
h3[mdp-position="right"],
h4[mdp-position="right"],
h5[mdp-position="right"],
h6[mdp-position="right"] {
  text-align: right;
}
h1[mdp-position="none"],
h2[mdp-position="none"],
h3[mdp-position="none"],
h4[mdp-position="none"],
h5[mdp-position="none"],
h6[mdp-position="none"] {
  text-align: none;
}

::selection {
  background-color: var(--main-colour);
}

p {
  font-weight: 500;
}

p[mdp-position="left"] {
  text-align: left;
}
p[mdp-position="middle"] {
  text-align: center;
}
p[mdp-position="right"] {
  text-align: right;
}
p[mdp-position="none"] {
  text-align: none;
}

a {
  font-weight: 700;
  color: var(--main-colour);
  text-decoration-line: underline;
  text-decoration-thickness: 1.5px;
  text-decoration-style: wavy;
  text-decoration-skip-ink: none;
  display: inline;
}

a::selection {
  background-color: var(--main-colour);
  color: #fff;
}

a[mdp-display="block"][mdp-position="left"] {
  display: block;
  text-align: left;
}
a[mdp-display="block"][mdp-position="middle"] {
  display: block;
  text-align: center;
}
a[mdp-display="block"][mdp-position="right"] {
  display: block;
  text-align: right;
}
a[mdp-display="block"][mdp-position="none"] {
  display: block;
  text-align: none;
}

a[mdp-display="inline"] {
  display: inline;
}

code {
  display: block;
  font-family: monospace;
  unicode-bidi: isolate;
  white-space: pre-wrap;
  margin-top: 1em;
  padding: 1em;
  line-height: 2em;
}

pre {
  background-color: #101010;
}

code::selection {
  background-color: var(--main-colour);
  color: #fff;
}
code span::selection {
  background-color: var(--main-colour);
  color: #fff;
}

code[mdp-display="inline"] {
  display: inline-block;
  margin-top: 1em;
  padding: 0.2em;
}


`

const supportedTypes = ['text', 'password', 'number'];

supportedTypes.forEach(inputType => {
  const allInputs = document.querySelectorAll(`input[type="${inputType}"]`);

  allInputs.forEach(textInput => {
    const mdpLabel = textInput.getAttribute('mdp-label');
    const attributes = [];

    // Get all other attributes except type and mdp-label
    for (const attribute of textInput.attributes) {
      if (attribute.name !== 'type' && attribute.name !== 'mdp-label') {
        attributes.push(attribute.name + '="' + attribute.value + '"');
      }
    }

    const joinedAttributes = attributes.join(' ');

    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('input-group');

    const newInput = document.createElement('input');
    newInput.type = textInput.type; // Preserve original input type
    newInput.classList.add('input');
    newInput.required = true; // Assuming all inputs are required
    newInput.setAttribute('aria-label', mdpLabel); // Add aria-label for accessibility
    if (joinedAttributes.length > 0) {
      newInput.setAttribute('attributes', joinedAttributes); // Not recommended for modern browsers
    }

    const newLabel = document.createElement('label');
    newLabel.classList.add('user-label');
    newLabel.textContent = mdpLabel;

    newInputGroup.appendChild(newInput);
    newInputGroup.appendChild(newLabel);

    textInput.parentNode.replaceChild(newInputGroup, textInput);
  });
});

const numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach(numberInput => {
  numberInput.addEventListener('keypress', function (event) {
    const allowedChars = new RegExp('^[0-9.]+$'); // Allow digits and decimal point
    const key = String.fromCharCode(event.charCode); // Get the pressed key

    if (!allowedChars.test(key)) {
      event.preventDefault(); // Prevent invalid character from being entered
    }
  });
});

function trimBlankLines(text) {
  // Remove leading and trailing blank lines using regular expressions
  return text.replace(/^\s+|\s+$/g, '');
}

function trimMinimalWhitespace(text) {
  const lines = text.split('\n');
  const minIndent = Math.min(...lines.filter(line => line.trim() !== '').map(line => line.match(/^\s*/)[0].length));

  return lines.map(line => line.replace(new RegExp(`^\\s{${minIndent}}`), '')).join('\n');
}

function cycleCodeBlocks() {
  const codeBlocks = document.querySelectorAll('code');

  codeBlocks.forEach(codeBlock => {
    const language = codeBlock.getAttribute("mdp-language")
    codeBlock.classList.add(`language-${language}`)
    codeBlock.removeAttribute('mdp-language');
    const codeText = codeBlock.innerHTML;
    const codeBlockElement = codeBlock;
    codeBlockElement.innerHTML = `<pre class="language-html"></pre>`;

    codeBlockElement.children[0].textContent = `${trimBlankLines(trimMinimalWhitespace(codeText))}`;
  });
}

// Call the function to cycle through the code blocks
cycleCodeBlocks();

const script = document.createElement('script');
script.src = 'https://marko.iric.online/mdp/prism.js'; // Replace with your script's URL
document.body.appendChild(script);
document.querySelector("head").innerHTML = document.querySelector("head").innerHTML = '<style>' + css + '</style>'

