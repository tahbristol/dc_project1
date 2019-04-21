# README

* Ruby version

    -2.5
* System dependencies

    -postgresql https://www.postgresql.org/download/

    -`gem install bundler`
   
    -`gem install rake`
* App Setup

   -`rake ready_api`
   
     * runs bundle install, and creates tables
     
   -`rake start` to run the app on the first time. 
   
     * runs npm starts node server, starts rails server
     
   -`rake servers` from then on.
