
```mermaid
sequenceDiagram
    participant browser
    participant server



    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTTP 200 OK (HTML, CSS, JS)
    deactivate server

    Note right of browser: Single Page Application


    


