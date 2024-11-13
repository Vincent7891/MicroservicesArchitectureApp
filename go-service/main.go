package main

import (
	"fmt"
	"net/http"
	"os"
)

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Connection", "close")
    hostname, _ := os.Hostname()
    fmt.Fprintf(w, "Hello from Go service! Host: %s", hostname)
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
