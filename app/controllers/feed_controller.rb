class FeedController < ApplicationController
	
	def initTwitterApi
		client = Twitter::REST::Client.new do |config|
  		config.consumer_key        = ENV['CONSUMER_KEY']
  		config.consumer_secret     = ENV['CONSUMER_SECRET']
  		config.access_token        = ENV['ACCESS_TOKEN']
  		config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
		end
		client
	end
	
	def get_user(username="tahbristol")
		client = self.initTwitterApi
		user_info = client.user(username)
		new_followed_account = FollowedAccount.find_or_create_by(account_id: user_info.id, account_name: username) 
		get_tweets(client, new_followed_account.account_id)                               
	end
	
	
	def get_tweets(client, followed_account_id)
		tweets = client.user_timeline(followed_account_id)
		tweets.each do |tweet|
			Post.find_or_create_by(content: tweet.text,
				timestamp: tweet.created_at,
				author: tweet.user.name,
				social_media_platform: "twitter",
				marked_as_read: false,
				followed_account_id: followed_account_id)
		end 
	end
end


