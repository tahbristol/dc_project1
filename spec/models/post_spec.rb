require 'rails_helper'

RSpec.describe Post, type: :model do
	
	before :each do 
		@user = User.create(email: "email@test.com", password: "password")
		@platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: @user.id)
		@followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: @platform_1.id)
	end
	
	describe "Post" do
		it "invalid without followed_account_id" do
			post_1 = Post.create(author: "tahbristol", content: "This is a post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false)
			
			expect(post_1.valid?).to eq(false)
		end
		
		it "invalid without author" do
			post_1 = Post.create(content: "This is a post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false, followed_account_id: @followed_account_1.id)
			
			expect(post_1.valid?).to eq(false)
		end
			
	end

end
