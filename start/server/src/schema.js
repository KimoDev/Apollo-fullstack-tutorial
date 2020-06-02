const { gql } = require('apollo-server');

const typeDefs = gql`
    # schema goes here, written in schema definition language (SDL).
      
      type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
      }

      type Rocket {
        id: ID!
        name: String
        type: String
      }
      
      type User {
        id: ID!
        email: String!
        trips: [Launch]!
      }
      
      type Mission {
        name: String
        missionPatch(size: PatchSize): String
      }
      
      enum PatchSize {
        SMALL
        LARGE
      }

      type Query {
        launches: [Launch]! # array of all launches.
        launch(id: ID!): Launch # a single launch given from an id.
        me: User # provides details of a user.
      }

      type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): String # login token
      }

      type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
      }
    `;

module.exports = typeDefs; 