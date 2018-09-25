require 'rails_helper'

RSpec.describe User, type: :model do

  describe "User" do

    describe "relationships" do
      it "has many platforms" do
        user = User.create(email: "email@test.com", password: "password")
        platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: user.id)
        platform_2 = Platform.create(name: "Facebook", api_base_url: "https://www.facebook.com/api/v1", user_id: user.id)
				
        expect(user.platforms.size).to eq(2)
      end

      it "has many followed_accounts through platforms" do
        user = User.create(email: "email@test.com", password: "password")
        platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: user.id)
        followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: platform_1.id)
        followed_account_2 = FollowedAccount.create(account_name: "alisufi", account_id: 4321, platform_id: platform_1.id)
				
        expect(user.followed_accounts.size).to eq(2)
      end
    end
		
		describe "#unread_posts" do
			it "returns all posts not marked as read" do
				user = User.create(email: "email@test.com", password: "password")
				platform_1 = Platform.create(name: "Twitter", api_base_url: "https://www.twitter.com/api/v1", user_id: user.id)
				followed_account_1 = FollowedAccount.create(account_name: "tahbristol", account_id: 1234, platform_id: platform_1.id)
				post_1 = Post.create(author: "tahbristol", content: "This is a post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false, followed_account_id: followed_account_1.id)
				post_2 = Post.create(author: "tahbristol", content: "This is a second post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: false, followed_account_id: followed_account_1.id)
				post_3 = Post.create(author: "tahbristol", content: "This is a third post", timestamp: "05/24/2015", social_media_platform: "Twitter", marked_as_read: true, followed_account_id: followed_account_1.id)
				
				expect(user.unread_posts.size).to eq(2)
			end
		end
		
  end
end
