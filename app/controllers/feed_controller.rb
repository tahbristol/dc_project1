class FeedController < ApplicationController
	
	def start_feed_lookup(username="tahbristol")
		feed = Feed.new 
		feed.get_followed_account(username)
	end
	
end


