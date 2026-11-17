<!-- Generated from content/interview/technical-interview/int04-explain-an-api-request-and-response.mdx. Edit the MDX source. -->

[Topic index](README.md)

**ID:** INT04 · **Practice type:** Worked solution · **Difficulty:** Medium

# Explain an API request and response

## Question

Describe what happens when a browser asks a server for a list of products.

<details>
<summary>Show answer and explanation</summary>

## Answer

The browser sends an HTTP request to an endpoint. The server validates it, obtains the required data and returns a status, headers and a response body such as JSON. The browser handles success or failure and updates the page.

## Explanation

A stronger answer mentions authorization where needed, useful error handling and input validation. Avoid saying that all API calls are GET requests or that a 200 response proves the displayed data is correct. Separate transport success from application-level validation.

</details>

---

[← INT03](int03-debugging-a-failing-result.md) · [Topic index](README.md) · [INT05 →](int05-explain-a-left-join-in-an-interview.md)
