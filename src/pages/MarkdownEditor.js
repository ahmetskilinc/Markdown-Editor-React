import React from "react";
import { useState } from "react";
import { Editor, MarkdownViewer } from "../components";

export const MarkdownEditor = ({ markdownToParse }) => {
	const [markdown, setMarkdown] = useState(``);

	const handleChange = (e) => {
		setMarkdown(e.target.value);
		markdownToParse(e.target.value);
	};

	return (
		<div className="container">
			<MarkdownViewer content={markdown} lineNumbers={true} />
			<Editor handleChange={handleChange} />
		</div>
	);
};

/*
# Examples

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique tortor in mauris pellentesque aliquet. Praesent sagittis ullamcorper elit. Sed vestibulum, nulla a ornare blandit, mauris elit blandit turpis, id commodo nisl nisl sit amet dolor. Donec viverra, enim ac varius malesuada, quam turpis consequat odio, ut rhoncus est nisi at nisi. Vestibulum pretium pharetra magna, sed sodales mauris consequat non. Cras diam lorem, tempor vel ultricies id, sodales tempus purus. Pellentesque cursus elit et neque facilisis, ut cursus sem feugiat. Ut faucibus neque at est rhoncus aliquet. Etiam a placerat mi, at lacinia nisl. Praesent rutrum eleifend nisi, at sagittis diam vehicula sit amet. Donec dapibus diam ante, in finibus ex ultrices a. Pellentesque ac egestas dui. Cras bibendum elit non neque consequat, sit amet iaculis quam efficitur. In sed eleifend libero. Fusce ac faucibus urna, a suscipit arcu. Phasellus porttitor est blandit lorem viverra eleifend.\
> \
> Etiam diam est, rutrum ac lectus eget, tempus tempor justo. Quisque id eleifend libero. Morbi varius scelerisque tellus finibus vulputate. Nulla semper id lorem vitae varius. Nam ornare vel leo semper pellentesque. Morbi viverra commodo tempor. Aliquam iaculis ex quis nunc placerat posuere. Proin auctor porta leo eget ullamcorper. Quisque eget lectus congue, molestie turpis non, fringilla nisi. Etiam sapien elit, sodales ut mi in, lobortis pretium ante. Ut posuere sollicitudin erat in posuere. Nunc sit amet orci vel eros maximus pharetra eget ut diam. Aliquam vitae justo in neque tincidunt pharetra id non justo. Sed pulvinar mi at urna pharetra porta. Quisque pretium justo eu eros sodales, at congue sem porta. Etiam nec dapibus sapien, vel rutrum neque.

| ID     | Name  | Address      |
|--------|-------|--------------|
| SD4953 | Apple | 1 Apple Park |

### JSON
```json
{  
  "employee": {  
    "name":       "sonoo",   
    "salary":     56000,   
    "married":    true  
  }  
} 
```

### Javascript
```javascript
function Hello() {
  return "String hahaha"
};
```

### HTML
```html
<h1>HELLO WORLD</h1>
```

### JSX
```jsx
import React from "react";
import { Card } from "./components";

const App() => () = (
<div>
  <Card>

  </Card>
</div>
);
```

### CSS
```css
.container {
  max-height: 100%;
}
```
*/
