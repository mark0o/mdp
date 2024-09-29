# Markos Design Pack (MDP) Documentation

To add MDP to your html project simply add the followeing code t the head of your html file

```HTML
    <script defer src="https://marko.iric.online/mdp/mdp-src.js"></script>
```

### Table of contents:

- Inputs
- Buttons
- Titles
- Paragraphs
- Links
- Codeblocks
- Inline Codeblock

## Inputs

Only three input types are supported for now. (more scheduled for the future) Those are:

- Text
- Numbers
- Passwords

To create an input, you start as you would in regular HTML:

```HTML
    <input>    
```

Then add the type; as I said, there are only 3 input types supported yet, which are `type="text"`, `type="password"`, and `type="number"`. Add whichever suits your needs best.

```HTML
    <input type="text">    
```

Lastly, we must add the label; we do that with 'mdp-label=""`

```HTML
    <input type="text" mdp-label="Write here!">    
```

We will get:  
<img src="https://i.ibb.co/R30zN0F/image.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">  
And that was how to add an input; obviously, it is the same with the other input types; just change the `type="text"` to whichever you need.

## Buttons

Buttons are quite possibly the simplest thing in MDP; you just add a button as you would in HTML.

```HTML
    <button>Button</button>
```

And then we add the `mdp-position` property; there are four positions you can choose from: either `mdp-position="left"`, `mdp-position="middle"`, `mdp-position="right"` or `mdp-position="none"`. The first three are self-explanatory, and the `none` property allows you to set your own rules using custom CSS rules.

```HTML
    <button mdp-position="middle">Button</button>
```

Using the code above we get:  
<img src="https://i.ibb.co/Bn3BD4L/image.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">

## Titles

When adding a title in MDP we start of by adding an H1 thru H6 tags

```HTML
<h1>Big title</h1>
<h2>Slightly smaller title</h2>
<h3>Even smaller title</h3>
<h4>Small title</h4>
<h5>Slightly smaller title</h5>
<h6>Tiny title</h6>
```

Then we can add an `mdp-position` tag, which we use to align the text. The `mdp-position` tag works the exact same as with buttons.

```HTML
<h1 mdp-position="left">Big title</h1>
<h2 mdp-position="middle">Slightly smaller title</h2>
<h3 mdp-position="right">Even smaller title</h3>
<h4 mdp-position="left">Small title</h4>
<h5 mdp-position="middle">Slightly smaller title</h5>
<h6 mdp-position="right">Tiny title</h6>
```

The result is:
<img src="https://i.ibb.co/1LNgTD8/C-Users-marko-One-Drive-Desktop-Markos-Design-pack-index-html.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">

## Paragraphs

Paragraphs in MDP work like titles, just add a `<p>` tag and optionally add the `mdp-position` property.

```HTML
<p mdp-position="middle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ab quasi numquam voluptates impedit. Saepe, quaerat? Aspernatur, laboriosam autem molestias ipsam, qui eaque numquam sequi eius expedita ea a ipsa?</p>
```

With the code abowe we get:
<img src="https://i.ibb.co/dmbtBSh/image.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">

##Links

When creating links you start with the `<a>` tag then you add the href, it'll look like this

```HTML
<a href="https://example.com">Lorem ipsum</a>
```

and that is it!

If you want to add more customization you can change the `mdp-position=""` property **but** in the case of links we must first set the `mdp-display=""` property to `block`

```HTML
<a href="https://example.com" mdp-display="block" mdp-position="right">Lorem ipsum</a>
```

with the code above we get
<img src="https://i.ibb.co/0J5gc0P/C-Users-marko-One-Drive-Desktop-Markos-Design-pack-index-html-1.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">

## Codeblock

Codeblock can be used to display code, with support of syntax highlighting for a wide variety of programming languages.

To add a codeblock simply add a `<code>` tag. Make sure you also add the `mdp-language=""` attribute with the language the code you want to display is written in.

So for example this code:

```HTML
<code mdp-display="block" mdp-language="HTML">
     <div>
          <span class="greeting">Hello, World!</span>
     </div>
</code>
```

would look like this:
<img src="https://i.ibb.co/ZdpP6Yz/C-Users-marko-One-Drive-Desktop-Markos-Design-pack-index-html-3.png"
     style="display:block;float:none;margin-left:auto;margin-right:auto; border-radius: 16px;">
