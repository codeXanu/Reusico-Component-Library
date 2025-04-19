# Reusico Component Library

**Reusico** is a lightweight and customizable React component library designed to help developers quickly build beautiful and reusable UI components. It includes components like `Badge`, `Banner`, `Testimonial`, `Tooltip`,  `ToastPopup` and `Card`.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Badge](#badge)
  - [Banner](#banner)
  - [Testimonial](#testimonial)
  - [Testimonial Without Image](#testimonial-without-image)
  - [Tooltip](#tooltip)
  - [Card](#card)
  - [Toast](#toast)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install **Reusico Component Library**, run the following command in your terminal:

```bash
npm install reusico-component-library

```

## 🚀 Demo Page

Check out the live demo: [Reusico Component Library Demo](https://reusico-component-library.vercel.app/)


## Usage 

### Badge

```jsx

import { Badge } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App(){
return(
 <>
   <Badge color = "green" type="pill"> Badge </Badge>
   <Badge color = "green" type="pill"> Badge </Badge>   
   <Badge > Badge </Badge>
 </>
)
}

```

### Here are the available color schemes and types you can use for the `<Badge />` component:

#### ✅ Types:
- `pill`
- `rectangle` <!-- Do not add anything for this -->


#### 🎨 Colors:
- `white` <!-- Do not add anything for this -->
- `green`
- `purple`
- `pink`
- `blue`
- `red`
- `yellow`
- `indigo`

### Banner

```jsx
import { Banner } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App(){
return(
 <>
   <Banner variant="neutral" /> 

   <Banner variant="success" title="This is custom title" >
      This text could be changed. adipisicing elit. Nihil velit praes entium ex? 
      Dolor, quidem!
   </Banner> 
</>
)
}

```

## 📢 Banner Variants
The `<Banner />` component supports the following `variant` props for different contextual messages:

#### ✅Available Variants:
- `success` — For positive confirmations or successful actions  
- `warning` — For cautionary or alert messages  
- `error` — For error or failure states  
- `neutral` — For general information or neutral content


### Testimonial
```jsx

import { Testimonial } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App() {
  return (
    <Testimonial>
      <Testimonial.Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Testimonial.Content>
        <Testimonial.Text>
          Anuj Maurya, A Software Engineer and Web Developer. This is a custom testimonial. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing.
        </Testimonial.Text>
        <Testimonial.Name>
          Anuj Kumar Maurya
        </Testimonial.Name>
        <Testimonial.Role>
          Founder & CEO / Reusico
        </Testimonial.Role>
      </Testimonial.Content>
    </Testimonial>
  );
}

```

### Testimonial Without Image

```jsx

import { TestimonialWithoutImage } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App() {
  return (
    <TestimonialWithoutImage
      heading={
        <>Reusico<span style={{ color: "#2E59F3" }}>Library</span></>
      }
      name="Anuj Maurya / The Founder & CEO"
    >
      Anuj Maurya. Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Nemo sint magnam illum quam repellendus? Maxime dolorem 
      corporis ut deleniti pariatur. Lorem ipsum dolor sit amet consectetur adipisicing.
    </TestimonialWithoutImage>
  );
}

```

### Tooltip

```jsx

import { Tooltip, Badge } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App() {
  return (
    <>
      <!--  Tooltip with custom heading and body text wrapping a Badge  -->
      <Tooltip
        color="light-green"
        heading="This is custom heading"
        bodytext="These are bodytext."
      >
        <Badge color="green">this is Where to be hover</Badge>
      </Tooltip>

      <!--  Simple Tooltip with default content wrapping a button, you can wrap anything  -->
      <Tooltip color="blue">
        <button>Hover me</button>
      </Tooltip>
    </>
  );
}


```

### The `<Tooltip />` component supports various `color` values to match different design themes:

#### 🎨 Available Colors:
- `purple`
- `light-purple`
- `white`
- `black`
- `blue`
- `light-blue`
- `green`
- `light-green`



### Toast

```jsx

import React from 'react';
import { ToastPopup } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App() {
  const [showToast, setShowToast] = React.useState(false);

  function handleShowToast() {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  return (
    <>
      <button
        onClick={handleShowToast}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md 
 transition-all duration-200"
      >
        Show Toast
      </button>

      {showToast && (
        <>
         <ToastPopup message="The buttun Clicked" variant="success" position="top-left" duration={5000} ></ToastPopup>
          <ToastPopup message="The buttun Clicked" variant="warning" position="top-right"  ></ToastPopup>
          <ToastPopup message="The buttun Clicked" variant="error" position="bottom-right"  ></ToastPopup>
          <ToastPopup message="The buttun Clicked" variant="neutral" position="bottom-left"  ></ToastPopup>
        </>
      )}
    </>

   <!--This will popup on screen load  -->
    <ToastPopup position="bottom-right" variant="success" message="Showing Preview" duration={5000} />

  )
}


```

### The `<ToastPopup />` component supports the following `variant` props for different contextual messages:

#### ✅ Available Variants:
- `success` — For positive confirmations or successful actions  
- `warning` — For cautionary or alert messages  
- `error` — For error or failure states  
- `neutral` — For general information or neutral content

#### ✅ Position Options

The `position` prop controls where the toast appears on the screen. Available options:

- `top-left` – Displays the toast at the top-left corner.
- `top-right` – Displays the toast at the top-right corner.
- `bottom-left` – Displays the toast at the bottom-left corner.
- `bottom-right` – Displays the toast at the bottom-right corner.

### Card

```jsx
 
import { Card } from 'reusico-component-library';
import "reusico-component-library/dist/reusico-component-library.css";

function App() {
  return (
    <Card 
      title="This is custom title"
      icon={{
        src: "https://cdn-icons-png.freepik.com/256/7546/7546329.png?ga=GA1.1.1171956101.1729056429&semt=ais_hybrid",
        size: 38,
        backgroundColor: "#F5F5F5",
      }}
    >
      Cards Icon could be changed, Title is customizable and also these body text. A click event also can be added.
    </Card>
  );
}

```


## 🙌 Contributing

Contributions are most welcome!  
Feel free to open issues, suggest new features, or submit pull requests to help improve the library.

---

## 👨‍💻 Author

**Anuj Kumar Maurya**  
Frontend Developer ✨  
[Twitter](https://x.com/codeXanuj) • [LinkedIn](https://www.linkedin.com/in/codexanuj/) • [GitHub](https://github.com/codeXanu)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
Feel free to use it for personal or commercial projects —

---

## 🙏 Acknowledgments

- Inspired by modern design systems and reusable UI practices.
- Thanks to the open-source community for all the awesome tools and resources.
