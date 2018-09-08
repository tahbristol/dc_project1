class V1::TwitterFeedController < ApplicationController
	def start_feed_lookup
		twitter_feed = TwitterFeed.new(current_user)
		result = twitter_feed.get_followed_account("FlatironDC")
		if result = "complete"
			head(:ok)
		end
	end
end