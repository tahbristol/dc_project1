class V1::FeedController < ApplicationController
	def start_feed_lookup
		feed = Feed.new
		feed.get_followed_account("tahbristol")
	end
end