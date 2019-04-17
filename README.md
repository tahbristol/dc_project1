# README

* Ruby version

    -2.5
* System dependencies

    -`gem install bundler`
   
    -`gem install rake`
* App Setup

   -`rake db:schema:load`
     * creates tables
     
   -`rake start` to run the app on the first time. 
   
     * runs npm, bundle install, starts node server, starts rails server
     
   -`rake servers` from then on.
