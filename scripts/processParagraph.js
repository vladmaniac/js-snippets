// Process a paragraph which has '%" as header so that it can be converted in
// html

function processParagraph(paragraph) {
  var headerCount = 0;

  if(paragraph.contains('%')) {
    console.log("The paragraph might be a header");
  }
  else alert("It is not a case of any headers in your paragraph");

  while(paragraph.charAt(0) == '%') {
    paragraph = paragraph.slice(1);
    headerCount++;
  }

  return {type: (headerCount == 0 ? "p" : "h" + headerCount),
          content: paragraph}
}

// A little testing
processParagraph("%% tralalalalalalalalalalalaalalaa");
processParagraph("%");
processParagraph("no header paragraph");
processParagraph("% %");
processParagraph("lala % lalala");

// Splitting the paragraph into valid text types
function splitParagraph(text) {
  function indexOrEnd(character) {
    var index = text.indexOf(character);
    return index == -1 ? text.length : index;
  }

  function takeNormal() {
    var end = reduce(Math.min, text.length,
                     map(indexOrEnd, ["*", "{"]));
    var part = text.slice(0, end);
    text = text.slice(end);
    return part;
  }

  function takeUpTo(character) {
    var end = text.indexOf(character, 1);
    if (end == -1)
      throw new Error("Missing closing '" + character + "'");
    var part = text.slice(1, end);
    text = text.slice(end + 1);
    return part;
  }

  var fragments = [];

  while (text != "") {
    if (text.charAt(0) == "*")
      fragments.push({type: "emphasised",
                      content: takeUpTo("*")});
    else if (text.charAt(0) == "{")
      fragments.push({type: "footnote",
                      content: takeUpTo("}")});
    else
      fragments.push({type: "normal",
                      content: takeNormal()});
  }
  return fragments;
}

// Extract footnotes and html process them
function extractFootnotes(paragraphs) {
  var footnotes = [];
  var currentNote = 0;

  function replaceFootnote(fragment) {
    if (fragment.type == "footnote") {
      currentNote++;
      footnotes.push(fragment);
      fragment.number = currentNote;
      return {type: "reference", number: currentNote};
    }
    else {
      return fragment;
    }
  }

  forEach(paragraphs, function(paragraph) {
    paragraph.content = map(replaceFootnote,
                            paragraph.content);
  });

  return footnotes;
}

function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function link(target, text) {
  return tag("a", [text], {href: target});
}

function htmlDoc(title, bodyContent) {
  return tag("html", [tag("head", [tag("title", [title])]),
                      tag("body", bodyContent)]);
}

function image(src) {
  return tag("img", [], {src: src});
}

function escapeHTML(text) {
  var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"],
                      [/</g, "&lt;"], [/>/g, "&gt;"]];
  forEach(replacements, function(replace) {
    text = text.replace(replace[0], replace[1]);
  });
  return text;
}

function renderHTML(element) {
  var pieces = [];

  function renderAttributes(attributes) {
    var result = [];
    if (attributes) {
      for (var name in attributes) 
        result.push(" " + name + "=\"" +
                    escapeHTML(attributes[name]) + "\"");
    }
    return result.join("");
  }

  function render(element) {
    // Text node
    if (typeof element == "string") {
      pieces.push(escapeHTML(element));
    }
    // Empty tag
    else if (!element.content || element.content.length == 0) {
      pieces.push("<" + element.name +
                  renderAttributes(element.attributes) + "/>");
    }
    // Tag with content
    else {
      pieces.push("<" + element.name +
                  renderAttributes(element.attributes) + ">");
      forEach(element.content, render);
      pieces.push("</" + element.name + ">");
    }
  }

  render(element);
  return pieces.join("");
}
