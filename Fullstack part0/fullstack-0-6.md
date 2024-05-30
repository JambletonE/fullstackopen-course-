


```mermaid

sequenceDiagram
    participant browser
    participant server

    Note right of browser: User fills out form and submits

    browser->>browser: Browser creates JSON data (content+timestamp)
     Note right of browser: Created using JavaScript code fetched from server

    browser->>server: POST /new_note_spa
    activate server
    Note left of server: Browser parses note data based on header
    server-->>browser: HTTP 201 Created
    deactivate server

    