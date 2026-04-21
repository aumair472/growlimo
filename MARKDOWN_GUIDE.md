# Markdown Guide for Blog Editor

This guide covers all the markdown syntax supported in the Blog Editor. The editor uses GitHub Flavored Markdown (GFM) which includes table support and other enhanced features.

## Table of Contents

1. [Headings](#headings)
2. [Text Formatting](#text-formatting)
3. [Lists](#lists)
4. [Links](#links)
5. [Images](#images)
6. [Code Blocks](#code-blocks)
7. [Tables](#tables)
8. [Blockquotes](#blockquotes)
9. [Horizontal Rules](#horizontal-rules)
10. [Line Breaks](#line-breaks)
11. [Escaping Characters](#escaping-characters)

---

## Headings

Use `#` symbols to create headings. The number of `#` determines the heading level.

```markdown
# Heading 1 (Largest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 (Smallest)
```

**Result:**
- # Heading 1
- ## Heading 2
- ### Heading 3
- #### Heading 4

---

## Text Formatting

### Bold Text

Use `**text**` or `__text__` for bold text.

```markdown
This is **bold text** and this is also __bold text__.
```

**Result:** This is **bold text** and this is also **bold text**.

### Italic Text

Use `*text*` or `_text_` for italic text.

```markdown
This is *italic text* and this is also _italic text_.
```

**Result:** This is *italic text* and this is also *italic text*.

### Bold and Italic

Combine both for bold italic text.

```markdown
This is ***bold italic*** or ___bold italic___.
```

**Result:** This is ***bold italic***.

### Strikethrough

Use `~~text~~` for strikethrough text.

```markdown
This is ~~strikethrough text~~.
```

**Result:** This is ~~strikethrough text~~.

---

## Lists

### Unordered Lists

Use `-`, `*`, or `+` to create bullet points.

```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3
```

**Result:**
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered Lists

Use numbers followed by a period.

```markdown
1. First item
2. Second item
3. Third item
   1. Nested item 3.1
   2. Nested item 3.2
```

**Result:**
1. First item
2. Second item
3. Third item
   1. Nested item 3.1
   2. Nested item 3.2

### Task Lists (Checkboxes)

Use `- [ ]` for unchecked and `- [x]` for checked items.

```markdown
- [ ] Uncompleted task
- [x] Completed task
- [ ] Another task
```

**Result:**
- [ ] Uncompleted task
- [x] Completed task
- [ ] Another task

---

## Links

### Inline Links

```markdown
[Link Text](https://example.com)
```

**Result:** [Link Text](https://example.com)

### Links with Title

```markdown
[Link Text](https://example.com "Title text")
```

### Reference-Style Links

```markdown
[Link Text][reference]

[reference]: https://example.com "Optional title"
```

### Automatic Links

```markdown
<https://example.com>
<email@example.com>
```

**Result:** <https://example.com>

---

## Images

### Basic Image Syntax

```markdown
![Alt text](image-url.jpg)
```

### Image with Title

```markdown
![Alt text](image-url.jpg "Image title")
```

### Reference-Style Images

```markdown
![Alt text][image-reference]

[image-reference]: /uploads/image.jpg "Image title"
```

**Note:** In this editor, images are automatically normalized to use the correct URL path.

---

## Code Blocks

### Inline Code

Use backticks for inline code.

```markdown
Use `console.log()` to print to the console.
```

**Result:** Use `console.log()` to print to the console.

### Code Blocks

Use triple backticks with optional language specification.

````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
````

**Supported languages:**
- `javascript` or `js`
- `python` or `py`
- `html`
- `css`
- `json`
- `bash` or `sh`
- `sql`
- `java`
- `cpp` or `c++`
- And many more!

### Code Block Example

````markdown
```python
def hello_world():
    print("Hello, World!")
    return True
```
````

---

## Tables

Tables are supported via GitHub Flavored Markdown. Use pipes `|` to separate columns.

### Basic Table

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
| Row 3    | Data 5   | Data 6   |
```

**Result:**

ho87

### Aligned Columns

Use colons to align columns:
- `:---` - Left align
- `:---:` - Center align
- `---:` - Right align

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Data 1       | Data 2         | Data 3        |
```

**Result:**

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Data 1       | Data 2         | Data 3        |

### Table with Markdown in Cells

You can use markdown formatting inside table cells.

```markdown
| Feature | Status | Notes |
|---------|--------|-------|                        tsurk
| Tables  | ✅     | Fully supported |
| Code    | ✅     | Use `backticks` |
| Links   | ✅     | [Example](https://example.com) |
```

---

## Blockquotes

Use `>` to create blockquotes.

```markdown
> This is a blockquote.
> It can span multiple lines.
```

**Result:**
> This is a blockquote.
> It can span multiple lines.

### Nested Blockquotes

```markdown
> Main quote
> > Nested quote
> > > Even deeper quote
```

### Blockquotes with Other Elements

```markdown
> This is a blockquote with:
> 
> - A list
> - Multiple items
> 
> And **bold text** inside.
```

---

## Horizontal Rules

Use three or more hyphens, asterisks, or underscores to create a horizontal rule.

```markdown
---
***
___
```

**Result:** All three create a horizontal line.

---

## Line Breaks

### Single Line Break

End a line with two spaces and press Enter for a line break.

```markdown
Line 1  
Line 2 (with two spaces at end of Line 1)
```

### Paragraph Break

Leave a blank line between paragraphs.

```markdown
This is paragraph 1.

This is paragraph 2.
```

---

## Escaping Characters

Use backslash `\` to escape special markdown characters.

```markdown
\*This is not italic\*
\# This is not a heading
\[This is not a link\]
```

**Result:**
- \*This is not italic\*
- \# This is not a heading
- \[This is not a link\]

---

## Complete Example

Here's a complete example combining multiple markdown elements:

```markdown
# My Blog Post Title

This is an introduction paragraph with **bold text** and *italic text*.

## Features

Here are some key features:

1. **Feature One** - Description here
2. **Feature Two** - Description here
3. **Feature Three** - Description here

### Code Example

```javascript
function example() {
  return "Hello, World!";
}
```

### Data Table

| Product | Price | Stock |
|---------|-------|-------|
| Item A  | $10   | 50    |
| Item B  | $20   | 30    |
| Item C  | $15   | 100   |

> This is an important note about the products above.

For more information, visit [our website](https://example.com).
```

---

## Tips and Best Practices

1. **Consistency**: Use consistent heading levels (don't skip from H1 to H3)
2. **Spacing**: Leave blank lines between different elements for better readability
3. **Tables**: Keep tables simple and readable - use alignment when helpful
4. **Code Blocks**: Always specify the language for syntax highlighting
5. **Images**: Always include descriptive alt text for accessibility
6. **Links**: Use descriptive link text instead of raw URLs when possible

---

## Quick Reference

| Element | Syntax | Example |
|---------|--------|---------|
| Heading 1 | `# Text` | `# Title` |
| Heading 2 | `## Text` | `## Subtitle` |
| Bold | `**text**` | `**bold**` |
| Italic | `*text*` | `*italic*` |
| Code | `` `code` `` | `` `console.log()` `` |
| Link | `[text](url)` | `[Google](https://google.com)` |
| Image | `![alt](url)` | `![Logo](/logo.png)` |
| List | `- item` | `- First item` |
| Table | `\| col \|` | `\| Header \|` |
| Quote | `> text` | `> Quote text` |
| Rule | `---` | `---` |

---

## Need Help?

If you encounter any issues with markdown rendering, check:
- Proper spacing between elements
- Matching brackets and parentheses
- Correct table pipe alignment
- Proper code block backticks (triple backticks for blocks)

Happy writing! 🎉
