# EJS

---

 - EJS (Embedded JavaScript)  is a templating language that helps you generate dynamic HTML using JavaScript. 
  <br/>
 - It is often used in combination with Node.js and Express to create dynamic web applications.

---

## EJS Analogy

Imagine you're writing a letter, but you want to leave some spots blank so you can fill them in later with specific names and details. For example, you might write:


> "Dear <b>___</b>, your order of <b> ___ </b> has been shipped!"


Now, when you know the person's name and their order, you fill in the blanks with their details:


> "Dear <b> Sahil </b>, your order of <b>a new laptop</b> has been shipped!"


EJS does something similar for web pages. You create a basic HTML template with placeholders (the blank spots) for data. Then, when someone visits your website, EJS fills in those placeholders with the right information, like a user's name or their order details. The filled-in HTML page is then sent to the browser for the user to see.
 
 ---

In short: EJS lets you fill in the blanks in your HTML using JavaScript, so you don't have to create separate pages for each user or piece of data!



Some important terminologies in EJS are:

1. <b> Server-side rendering (SSR):</b> 
   EJS is used in server-side rendering (SSR). This means that the HTML for a webpage is generated on the server before it is sent to the browser. The server constructs a complete HTML document, incorporating dynamic data, and sends this fully-formed HTML to the client (browser). Unlike client-side rendering, where JavaScript is executed in the browser to build the page, server-side rendering does this processing on the server.
   <br/>
  

    <b>Why use SSR?</b>
      1. Faster initial page load: Since the HTML is generated on the server, the browser doesn't need to wait for JavaScript to execute before displaying content.
      2. Better SEO: Search engines like Google can easily index server-rendered HTML pages, as the content is fully present in the HTML.
      3. Faster for low-powered devices: If a user has a device with limited processing power, server-rendered pages will appear faster because there's less JavaScript processing needed in the browser.

    <br/>

2. <b> Template engine:</b> 
   EJS is a template engine that allows you to generate HTML using JavaScript. It provides a way to embed JavaScript code within HTML, enabling dynamic content generation. Template engines like EJS help separate the presentation layer (HTML) from the logic layer (JavaScript), making it easier to manage and maintain web applications.

3. <b> Delimiters:</b>  
    Delimiters are special characters that indicate where EJS code begins and ends. By default, EJS uses the delimiters `<%` and `%>` to enclose JavaScript code. For example, `<% if (user) { %>` is an EJS tag that starts a JavaScript block, and `<% } %>` ends the block. Delimiters can be customized to suit your needs.

   

