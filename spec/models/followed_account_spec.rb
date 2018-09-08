require 'rails_helper'

RSpec.describe FollowedAccount, type: :model do
  
	describe "FollowedAccount" do
		before :each do 
			@user = User.create(email: "emal@test.com", password: "password")
			@platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: @user.id)
		end
		
		it "is valid with account_name, account_id and platform_id" do
			followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: @platform_1.id)
			
			expect(followed_account_1).to be_valid
		end
		
		it "belongs to a platform" do
			followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: @platform_1.id)
			
			expect(followed_account_1.platform).to eq(@platform_1)
		end
		
		it "has many posts" do
			followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: @platform_1.id)
			post_1 = Post.create(author: "tahbristol", content: "This is a post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false)
			post_2 = Post.create(author: "tahbristol", content: "This is a second post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false, followed_account_id: followed_account_1.id)
			
			followed_account_1.posts << post_1
			
			expect(followed_account_1.posts.size).to eq(2)
		end
	end
end
