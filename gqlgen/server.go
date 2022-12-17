package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/richardimaoka/kurasiru-clone/gqlgen/graph"
	"github.com/richardimaoka/kurasiru-clone/gqlgen/graph/model"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	filename := "data/recipe1.json"
	data, err := os.ReadFile(filename)
	if err != nil {
		panic("Failed to read: " + filename)
	}
	var recipe model.Recipe
	err = json.Unmarshal(data, &recipe)
	if err != nil {
		panic("Failed to unmarshal recipe")
	}
	bytes, err := json.Marshal(recipe)
	if err != nil {
		panic("Failed to unmarshal recipe")
	}
	fmt.Printf("%s", bytes)

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
