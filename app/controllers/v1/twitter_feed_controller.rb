class V1::TwitterFeedController < ApplicationController
	def start_feed_lookup
		twitter_feed = TwitterFeed.new(current_user)
		twitter_feed.get_and_save_followed_account("FlatironDC")
		twitter_feed.get_tweets
		twitter_feed.save_tweets_as_posts
		head(:ok)
	end
end