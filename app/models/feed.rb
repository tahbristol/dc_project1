class Feed < ApplicationRecord
	
	attr_accessor :current_user

	def initialize(user)
		@current_user = user
	end

	def initTwitterApi
		client = Twitter::REST::Client.new do |config|
  		config.consumer_key = ENV['CONSUMER_KEY']
  		config.consumer_secret = ENV['CONSUMER_SECRET']
  		config.access_token = ENV['ACCESS_TOKEN']
  		config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
		end
		client
	end
	
	def get_followed_account(username)
		client = self.initTwitterApi
		followed_account_info = client.user(username)
		platform = Platform.find_or_create_by(name:"Twitter",api_base_url:"https://api.twitter.com/1.1/", user_id: @current_user.id)
		new_followed_account = FollowedAccount.find_or_create_by(
			account_id: followed_account_info.id,
			account_name: username,
			platform_id: platform.id
		)
		platform.followed_accounts << new_followed_account
		platform.save
		get_tweets(client, new_followed_account)
		"complete"
	end
	
	def get_tweets(client, followed_account)
		tweets = client.user_timeline(followed_account.account_id)
		tweets.each do |tweet|
			Post.find_or_create_by(
				content: tweet.text,
				timestamp: tweet.created_at,
				author: tweet.user.name,
				social_media_platform: "Twitter",
				marked_as_read: false,
				followed_account_id: followed_account.id
			)
		end 
	end
end
