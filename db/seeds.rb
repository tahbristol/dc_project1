# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p = Platform.create(name:"Facebook",api_base_url:"https://developers.facebook.com/docs/graph-api")
p = Platform.create(name:"Twitter",api_base_url:"https://api.twitter.com/1.1/")
p = Platform.create(name:"Linkedin",api_base_url:"https://api.linkedin.com/v1")

