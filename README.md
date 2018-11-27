# strapitemplate

1. git clone https://github.com/mervinambercreative/ambersite.git
2. Go to client folder and run = npm install npm@latest
3. Go to the root folder and create a new project server by running = strapi new server.
   - You must have created already a database in creating this one.
4. Go inside the server folder and run it by using this command = strapi start
5. Create a username upon lunching the strapi server.
6. Upon entering the strapi admin go straight to Marketplace on the sidebar menu admin and download the Graphql plugin. Just wait for it to finish downloading and it will restart the server automatically for just a minute.

Sample Codes on Querying using GraphQl
Graphql URL link: http://localhost:1337/graphql

Querying a specific id using Graphql:

query{
  homepages(id: 1){
    id
    name
    homeslider
  }
}

Querying multiple fields under homepages as an array using Graphql:

query{
  homepages{
    id
    name
    content
    content2
    content3
    content4
  }
}
