require 'rails_helper'

RSpec.describe TwitterFeed, type: :model do
	before {
		@user = User.create(email: "user@email.com", password: "password")
		@twitter_feed = TwitterFeed.new(@user)
		@twitter_feed.get_and_save_followed_account("tahbristol")
	}
	
	describe "TwitterFeed" do
		it "initializes with client object" do
			
			expect(@twitter_feed.client).to be_a Twitter::REST::Client
		end
		
	end
	
	describe "#get_and_save_followed_account" do
		it "uses twitter handle to get twitter account info" do
			
			expect(@twitter_feed.followed_account).not_to eq(nil)
		end
	end
	
	describe "#get_tweets" do
		it "saves tweets for followed account" do
			@twitter_feed.get_and_save_followed_account("tahbristol")
			tweets = @twitter_feed.get_tweets
			
			expect(tweets).to be_a(Array)
		end
	end
end
