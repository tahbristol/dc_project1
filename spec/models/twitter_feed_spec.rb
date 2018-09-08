require 'rails_helper'

RSpec.describe TwitterFeed, type: :model do
	
	describe "TwitterFeed" do
		it "initializes with client object" do
			twitter_feed = TwitterFeed.new 
			
			expect(twitter_feed.client).to be_a Twitter::REST::Client
		end
		
	end
	
	describe "#get_and_save_followed_account" do
		before {@user = User.create(email: "user@email.com", password: "password")}
		it "uses twitter handle to get twitter account info" do
			twitter_feed = TwitterFeed.new(@user)
			twitter_feed.get_and_save_followed_account("tahbristol")
			
			expect(twitter_feed.followed_account).not_to eq(nil)
		end
	end
end
