package main

import(
  "fmt"
  "net/http"

  "github.com/gorilla/mux"
)

func HomeHandler(rw http.ResponseWriter, r *http.Request){
  fmt.Fprintln(rw, "Home")
}

func main() {
  fs := http.FileServer(http.Dir("./dist"))
  r := mux.NewRouter().StrictSlash(false)
  r.PathPrefix("/").Handler(fs)

  fmt.Println("Starting server on :8080");
  http.ListenAndServe(":8080", r)
}