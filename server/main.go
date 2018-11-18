package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	mgo "github.com/globalsign/mgo"
	"github.com/globalsign/mgo/bson"
	"github.com/gorilla/mux"
)

var database *mgo.Session

// User struct allows you to keep track of users
type User struct {
	ID       bson.ObjectId `json:"_id" bson:"_id"`
	Name     string        `json:"name" bson:"name"`
	Username string        `json:"username" bson:"username"`
}

// UserRef references a single user
type UserRef struct {
	ID     bson.ObjectId `json:"_id" bson:"_id"`
	UserID bson.ObjectId `json:"userID" bson:"userID"`
}

// Bedtime stores users' ideal bedtimes
type Bedtime struct {
	UserRef
	Bedtime string `json:"bedtime" bson:"bedtime"`
	Format  string `json:"format" bson:"format"`
}

// Log logs a user's sleep
type Log struct {
	UserRef
	From      string `json:"from" bson:"from"`
	To        string `json:"to" bson:"to"`
	Format    string `json:"format" bson:"format"`
	HourCount string `json:"hourCount" bson:"hourCount"`
}

// GetBedtime is a GET request to retrieve the user bedtime
func GetBedtime(w http.ResponseWriter, r *http.Request) {
	c := database.DB("mono").C("bedtimes")
	result := Bedtime{}
	err := c.Find(bson.M{"userID": bson.ObjectIdHex("5bf10f675006944108b65010")}).One(&result)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(result)
}

func main() {
	router := mux.NewRouter()
	api := router.PathPrefix("/api/v1").Subrouter()
	api.HandleFunc("/user/bedtime", GetBedtime).Methods("GET")

	mongoDBDialInfo := &mgo.DialInfo{
		Addrs:    []string{"localhost"},
		Timeout:  60 * time.Second,
		Database: "mono",
	}

	db, err := mgo.DialWithInfo(mongoDBDialInfo)
	database = db
	if err != nil {
		log.Fatalf("CreateSession: %s\n", err)
	}

	log.Fatal(http.ListenAndServe(":3000", router))
}
