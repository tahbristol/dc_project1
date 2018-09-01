class V1::FeedController < ApplicationController
	def start_feed_lookup
		feed = Feed.new(current_user)
		result = feed.get_followed_account("JavaScriptDaily")
		if result = "complete"
			head(:ok)
		end
	end
end